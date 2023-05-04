import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const newOffer = createTRPCRouter({

        listOffers: publicProcedure.query(({ ctx }) => {
          return ctx.prisma.offer.findMany();
        }),
      
        getOffer: publicProcedure
  .input(z.object({ offerid: z.string() }))
  .query(({ ctx, input }) => {
    return ctx.prisma.offer.findUnique({
      where: {
        offer_id: parseInt(input.offerid),
      },
    });
  }),
        createOffers: publicProcedure
        .input(
          z.object({
            seller_id: z.number(),
            offer_description: z.string(),
            price: z.number(),
            numberofboxes: z.number(),
          })
        )
        .mutation(async ({ input, ctx }) => {
          const lastOffer = await ctx.prisma.offer.findFirst({
            orderBy: {
              offer_id: "desc",
            },
          });
    
          const newOfferId = (lastOffer?.offer_id ?? 0) + 1;
    
          const offers= await ctx.prisma.offer.create({
            data: {
              ...input,
              offer_id: newOfferId,
            },
          });
      return offers;
    }),

    updateOffer: publicProcedure
        .input(
          z.object({
            offerId: z.number(),
          })
        )
        .mutation(async ({ input, ctx }) => {
          const offer = await ctx.prisma.offer.findUnique({
            where: { offer_id: input.offerId },
          });
    
          if (!offer) {
            throw new Error(`Offer with id ${input.offerId} not found.`);
          }
          if (!offer || offer.numberofboxes == null) {
            throw new Error(`Offer with id ${input.offerId} not found or has invalid number of boxes.`);
          }
          
    
          const newBoxesAvailable = offer.numberofboxes - 1;
          
          await ctx.prisma.offer.update({
            where: { offer_id: offer.offer_id },
            data: { numberofboxes: newBoxesAvailable },
          });
    
          return offer;
        }),

})