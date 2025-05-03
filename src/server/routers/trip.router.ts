import { TRPCError } from '@trpc/server'
import { z } from 'zod'
import { db } from '~/clients/db.client'
import { orchestrationClient } from '~/clients/orchestration.client'
import { trips as tripsTable } from '~/core/trip/trip.sql'
import { handleAsync, resolvePromises } from '~/lib/utils'
import { createTRPCRouter, publicProcedure } from '~/server/_internals/trpc'
import { eq } from 'drizzle-orm'
import { packingListItems } from '~/core/packing-list/packingListItem.sql'
import { tripTactics } from '~/core/fishing-tactics/tactic.sql'
import { destinations } from '~/core/destination/destination.sql'

export const tripRouter = createTRPCRouter({
    getTrip: publicProcedure
        .input(z.object({ id: z.number() }))
        .query(async ({ input }) => {
            console.info(
                `Invoked tripRouter.getTrip with inputs: ${JSON.stringify(
                    input,
                )}`,
            )

            const { id } = input

            const {
                results: [trip, packingList, tactics],
            } = await resolvePromises([
                {
                    promise: db
                        .select()
                        .from(tripsTable)
                        .where(eq(tripsTable.id, id)),
                },
                {
                    promise: db
                        .select()
                        .from(packingListItems)
                        .where(eq(packingListItems.tripId, id)),
                },
                {
                    promise: db
                        .select()
                        .from(tripTactics)
                        .where(eq(tripTactics.tripId, id)),
                },
            ])

            return {
                data: {
                    trip: {
                        ...trip![0]!,
                        packingList: packingList!,
                        tactics: tactics!,
                    },
                },
            }
        }),
    getTrips: publicProcedure
        .input(
            z.object({
                limit: z.number(),
                offset: z.number(),
                userId: z.string(),
            }),
        )
        .query(async ({ input }) => {
            console.info(
                `Invoked tripRouter.submitTrip with inputs: ${JSON.stringify(
                    input,
                )} and userId ${input.userId}`,
            )

            const { limit, offset } = input

            const [trips, getTripsError] = await handleAsync(
                db
                    .select({
                        destinationImageUrl: destinations.imageUrl,
                        destinationName: destinations.name,
                        tripId: tripsTable.id,
                        startDate: tripsTable.startDate,
                    })
                    .from(tripsTable)
                    .innerJoin(
                        destinations,
                        eq(tripsTable.destinationId, destinations.id),
                    )
                    .limit(limit)
                    .offset(offset)
                    .where(eq(tripsTable.userId, input.userId)),
            )
            if (getTripsError) {
                throw new TRPCError({
                    message: getTripsError.message,
                    code: 'INTERNAL_SERVER_ERROR',
                })
            }

            return {
                data: {
                    trips: trips!,
                },
            }
        }),
    submitTrip: publicProcedure
        .input(
            z.object({
                destinationId: z.number(),
                destinationName: z.string(),
                startDate: z.string(),
                endDate: z.string(),
                headCount: z.number(),
                userId: z.string().nullable(),
            }),
        )
        .mutation(async ({ input }) => {
            console.info(
                `Invoked tripRouter.submitTrip with inputs: ${JSON.stringify(
                    input,
                )} for user ${input.userId}`,
            )

            const {
                destinationId,
                destinationName,
                startDate,
                endDate,
                headCount,
                userId,
            } = input

            const [trip, createTripError] = await handleAsync(
                db
                    .insert(tripsTable)
                    .values({
                        destinationId,
                        startDate: new Date(startDate),
                        endDate: new Date(endDate),
                        headCount,
                        userId: userId ?? '',
                    })
                    .returning({ id: tripsTable.id }),
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
