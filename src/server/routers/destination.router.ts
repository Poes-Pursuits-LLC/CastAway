import { TRPCError } from '@trpc/server'
import { db } from '~/clients/db.client'
import { destinations } from '~/core/destination/destination.sql'
import { handleAsync } from '~/lib/utils'
import { createTRPCRouter, publicProcedure } from '~/server/_internals/trpc'

export const destinationRouter = createTRPCRouter({
    getDestinations: publicProcedure.query(async () => {
        const [destinationsResult, destinationsError] = await handleAsync(
            db.select().from(destinations),
        )
        if (destinationsError) {
            throw new TRPCError({
                code: 'INTERNAL_SERVER_ERROR',
                message: destinationsError.message,
            })
        }

        return {
            data: {
                destinations: destinationsResult!,
            },
        }
    }),
})
