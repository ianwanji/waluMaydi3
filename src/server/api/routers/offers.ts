import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
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

})