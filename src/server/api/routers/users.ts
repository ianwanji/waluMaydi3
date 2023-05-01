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
  .query(async ({ ctx, input }) => {
    const user = await ctx.prisma.user_acc.findUnique({
      where: {
        user_id: parseInt(input.userid),
      },
    });

    if (user?.usertype === 'S') {
      // Fetch additional information from the seller table
      const seller = await ctx.prisma.seller.findUnique({
        where: {
          seller_id: user.user_id,
        },
      });

      return { user, seller };
    } else if (user?.usertype === 'C') {
      // Fetch additional information from the customer table
      const customer = await ctx.prisma.customer.findUnique({
        where: {
          cus_id: user.user_id,
        },
      });

      return { user, customer };
    }
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
    
    getUserByEmailAndPassword: publicProcedure
    .input(z.object({ emailaddress: z.string(),  }))
    .query(({ ctx, input }) => {
      return ctx.prisma.user_acc.findFirst({
        where: {
          emailaddress: input.emailaddress,
        },
      });
    }),
    
  createUser: publicProcedure
    .input(
      z.object({
        user_id:z.number(),
        username: z.string(),
        password: z.string(),
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