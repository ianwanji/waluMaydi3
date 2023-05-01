import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";


export const newUser = createTRPCRouter({
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

    getUserByEmail: publicProcedure
    .input(z.object({ email: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.user_acc.findFirst({
        where: {
          emailaddress: input.email,
        },
      });
    }),
    getUserByUsername: publicProcedure
    .input(z.object({ userName: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.user_acc.findFirst({
        where: {
          username: input.userName,
        },
      });
    }),

    getUserByPhoneNumber: publicProcedure
    .input(z.object({ phone: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.user_acc.findFirst({
        where: {
          phonenumber: input.phone,
        },
      });
    }),




  createUser: publicProcedure
    .input(
      z.object({
        user_id:z.number(),
        username: z.string(),
        phonenumber: z.string(),
        emailaddress: z.string(),
        usertype: z.string()
        }))
        .mutation(async({ input,ctx }) => {
          const users=await ctx.prisma.user_acc.create({
               data:{
                   ...input,
               },
           });
      return users;
    }),
});