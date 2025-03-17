'use server'

import { api } from '@clients/api.client'

export const submitTrip = async ({
    destinationId,
    destinationName,
    startDate,
    endDate,
    headCount,
    species,
}: {
    destinationId: number
    destinationName: string
    startDate: Date
    endDate: Date
    headCount: number
    species: string
}) => {
    try {
        const response = await api.trip.submitTrip({
            destinationId,
            destinationName,
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString(),
            headCount,
            species,
        })
        const {
            data: { tripId },
        } = response

        return {
            tripId,
        }
    } catch (error) {
        console.error(error)
        throw new Error(error instanceof Error ? error.message : String(error))
    }
}
