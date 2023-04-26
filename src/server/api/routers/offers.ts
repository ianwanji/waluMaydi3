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
    .input(z.object({ offer_id: z.number(),seller_id: z.number(), offer_description: z.string(),price:z.number(), numberofboxes:z.number()     }))
    .mutation(async({ input,ctx }) => {
       const offers=await ctx.prisma.offer.create({
            data:{
                ...input,
            },
        });
        // sendMessage: protectedProcedure
        // .input(z.object({ message: z.string(), listingId: z.string() }))
        // .mutation(async ({ input, ctx }) => {
        //   const fromUser = await clerkClient.users.getUser(ctx.auth.userId);
    
        //   const message = await ctx.prisma.message.create({
        //     data: {
        //       fromUser: ctx.auth.userId,
        //       fromUserName: fromUser.username ?? "unknown",
        //       listingId: input.listingId,
        //       message: input.message,
        //     },
        //   });
        //   return message;
        // }),
       
      
      
      return offers;
    }),
});