import { eq } from 'drizzle-orm'
import { db } from '~/clients/db.client'
import { orchestrationClient } from '~/clients/orchestration.client'
import { xAiClient } from '~/clients/xAi.client'
import { trips } from '~/core/trip/trip.sql'
import { handleAsync } from '~/lib/utils'

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
            cityRecOne,
            cityRecTwo,
            cityRecThree,
            // tactics,
            // flyShops,
            // packingList,
        } = tripDetails!

        const [, updateTripError] = await handleAsync(
            db
                .update(trips)
                .set({
                    description,
                    cityRecOne,
                    cityRecTwo,
                    cityRecThree,
                })
                .where(eq(trips.id, tripId)),
        )
        if (updateTripError) {
            console.error(`❌ Error updating trip: ${updateTripError.message}`)
        }

        // create tactics entries in db

        // create packing list entries in db

        return { status: 'success' }
    },
)
