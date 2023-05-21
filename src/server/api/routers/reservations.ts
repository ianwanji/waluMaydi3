import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const newReservation = createTRPCRouter({
  createReservation: publicProcedure
    .input(
      z.object({
        cus_id: z.number(),
        offer_id: z.number(),
        pickinguptime: z.date(), // Changed from z.DateTime() to z.date()
      })
    )
    .mutation(async ({ input, ctx }) => {
      const reservations = await ctx.prisma.reservation.create({
        data: {
          ...input,
        },
      });
      return reservations;
    }),
});
