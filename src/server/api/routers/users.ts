import { z } from "zod";
import { Router } from "express";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { useQueries } from "react-query";


export const newSignUp = createTRPCRouter({
  listUsers: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user_acc.findMany();
  }),

  getUser: publicProcedure
    .input(z.object({ userid: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.user_acc.findUnique({
        where: {
          user_id: parseInt(input.userid),
        },
      });
    }),

  createUser: publicProcedure
    .input(
      z.object({
        user_id:z.number(),
        username: z.string(),
        phoneNumber: z.string(),
        emailAddress: z.string(),
        usertype: z.string().refine((value) => value === 'C' || value === 'S', {
          message: 'Invalid user type',
        }),
        sellerDescription: z.string(),
        location: z.string(),
        categoryID: z.number().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
        const users=await ctx.prisma.user_acc.create({
            data:{
                ...input,
            },
        });
      return users;
    }),
});


