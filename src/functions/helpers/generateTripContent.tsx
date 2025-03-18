import { eq } from 'drizzle-orm'
import { db } from '~/clients/db.client'
import { orchestrationClient } from '~/clients/orchestration.client'
import { xAiClient } from '~/clients/xAi.client'
import { tripTactics } from '~/core/fishing-tactics/tactic.sql'
import { packingListItems } from '~/core/packing-list/packingListItem.sql'
import { PackingListItemTypeEnum } from '~/core/packing-list/packListItem.model'
import { trips } from '~/core/trip/trip.sql'
import { handleAsync, resolvePromises } from '~/lib/utils'

export const generateTripContent = orchestrationClient.createFunction(
    { id: 'generate.trip.content' },
    { event: 'generate.trip.content' },
    async ({ event, step }) => {
        console.info(
            `📨 Invoked orchestration.generateTripContent with data: ${JSON.stringify(
                event.data,
            )}`,
        )

        const {
            tripId,
            destinationName,
            headCount,
            startDate,
            endDate,
            species,
        } = event.data

        const [tripDetails, generateTripDetailsError] = await step.run(
            'generateTripDetails',
            () =>
                handleAsync(
                    xAiClient.generateTripDetails({
                        destinationName,
                        headCount,
                        startDate,
                        endDate,
                        species,
                    }),
                ),
        )
        if (generateTripDetailsError) {
            console.error(
                `❌ Error generating trip details: ${generateTripDetailsError.message}`,
            )
            throw new Error(generateTripDetailsError.message)
        }

        const {
            description,
            airportCityRec,
            cityRecOne,
            cityRecTwo,
            cityRecThree,
            tactics,
            tacticsSummary,
            // flyShops,
            packingList,
        } = tripDetails!

        await step.run('resolvePromises', () =>
            resolvePromises([
                {
                    promise: db
                        .update(trips)
                        .set({
                            description,
                            airportCityRec,
                            cityRecOne,
                            cityRecTwo,
                            cityRecThree,
                            tacticsSummary,
                        })
                        .where(eq(trips.id, tripId)),
                },
                {
                    promise: db.insert(packingListItems).values(
                        packingList.map((item) => ({
                            ...item,
                            tripId,
                            type: item.type as PackingListItemTypeEnum,
                        })),
                    ),
                },
                {
                    promise: db.insert(tripTactics).values(
                        tactics.map((tactic) => ({
                            tripId,
                            ...tactic,
                        })),
                    ),
                },
            ]),
        )

        return { status: 'success' }
    },
)
