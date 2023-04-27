import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import{newOffer} from "./routers/offers"
import { newSeller } from "./routers/sellers";


/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  offers: newOffer,
  sellers:newSeller

});

// export type definition of API
export type AppRouter = typeof appRouter;
