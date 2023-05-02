import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const newCus = createTRPCRouter({

        listCus: publicProcedure.query(({ ctx }) => {
          return ctx.prisma.customer.findMany();
        }),
      
        getCus: publicProcedure
        .input(z.object({ cus_id: z.string() }))
        .query(({ ctx, input }) => {
          return ctx.prisma.customer.findUnique({
            where: {
              cus_id: parseInt(input.cus_id),
            },
          });
        }),
    
    createCus: publicProcedure
    .input(
        z.object({
            cus_id: z.number(),
            fname: z.string(),
            lname:z.string(),
            dob: z.date(),
            gender: z.string(),  
        }))
      .mutation(async({ input,ctx }) => {
       const Cus=await ctx.prisma.customer.create({
            data:{
                ...input,
            },
        });
      return Cus;
    }),
});