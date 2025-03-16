import { TRPCError } from '@trpc/server'
import { z } from 'zod'
import { xAiClient } from '~/clients/xAi.client'
import { handleAsync } from '~/lib/utils'
import { createTRPCRouter, publicProcedure } from '~/server/_internals/trpc'

export const tripRouter = createTRPCRouter({
    submitTrip: publicProcedure
        .input(
            z.object({
                destination: z.string(),
            }),
        )
        .mutation(async ({ input }) => {
            const { destination } = input
            console.info('destination', destination)
            const prompt = `generate a fly fishing trip description for a trip to Southwest Montana of 100 words or so.`

            const [tripDescription, tripError] = await handleAsync(
                xAiClient.generateTrip(prompt),
            )
            if (tripError) {
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: tripError.message,
                })
            }
            console.info('wow here is our description!', tripDescription)

            return {
                data: {
                    tripDescription: tripDescription!,
                },
            }
        }),
})
