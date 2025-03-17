import { TRPCError } from '@trpc/server'
import { z } from 'zod'
import { db } from '~/clients/db.client'
import { orchestrationClient } from '~/clients/orchestration.client'
import { trips } from '~/core/trip/trip.sql'
import { handleAsync } from '~/lib/utils'
import { createTRPCRouter, publicProcedure } from '~/server/_internals/trpc'

export const tripRouter = createTRPCRouter({
    submitTrip: publicProcedure
        .input(
            z.object({
                destinationId: z.number(),
                destinationName: z.string(),
                startDate: z.string(),
                endDate: z.string(),
                headCount: z.number(),
                species: z.string(),
            }),
        )
        .mutation(async ({ input }) => {
            console.info(
                `Invoked tripRouter.submitTrip with inputs: ${JSON.stringify(
                    input,
                )}`,
            )

            const {
                destinationId,
                destinationName,
                startDate,
                endDate,
                headCount,
                species,
            } = input

            const [trip, createTripError] = await handleAsync(
                db
                    .insert(trips)
                    .values({
                        destinationId,
                        startDate: new Date(startDate),
                        endDate: new Date(endDate),
                        headCount,
                    })
                    .returning({ id: trips.id }),
            )
            if (createTripError) {
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: createTripError.message,
                })
            }

            const [, triggerOrchestrationError] = await handleAsync(
                orchestrationClient.send({
                    name: 'generate.trip.content',
                    data: {
                        tripId: trip![0]!.id!,
                        destinationName,
                        headCount,
                        startDate,
                        endDate,
                        species,
                    },
                }),
            )
            if (triggerOrchestrationError) {
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: triggerOrchestrationError.message,
                })
            }

            return {
                data: {
                    tripId: trip![0]!.id!,
                },
            }
        }),
})
