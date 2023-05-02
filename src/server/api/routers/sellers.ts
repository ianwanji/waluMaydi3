/* eslint-disable */

import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  
} from "~/server/api/trpc";

export const newSeller = createTRPCRouter({

        listSellers: publicProcedure.query(({ ctx }) => {
          return ctx.prisma.seller.findMany();
        }),
      
        getSeller: publicProcedure
        .input(z.object({ sellerid: z.string() }))
        .query(({ ctx, input }) => {
          return ctx.prisma.seller.findUnique({
            where: {
              seller_id: parseInt(input.sellerid),
            },
          });
        }),
    
    createSeller: publicProcedure
    .input(
        z.object({
          seller_id: z.number(),
          seller_name: z.string(),
          seller_description:z.string(),
          location: z.string(),
          category_id: z.number(),      
        }))
      .mutation(async({ input,ctx }) => {
       const sellers=await ctx.prisma.seller.create({
            data:{
                ...input,
            },
        });
      return sellers;
    }),
});

