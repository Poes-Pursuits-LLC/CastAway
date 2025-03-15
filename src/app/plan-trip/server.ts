'use server'

import { api } from '@clients/api.client'

export const submitTrip = async ({ destination }: { destination: string }) => {
    try {
        const response = await api.trip.submitTrip({ destination })
        const {
            data: { tripDescription },
        } = response

        return {
            tripDescription,
        }
    } catch (error) {
        console.error(error)
        throw new Error(error instanceof Error ? error.message : String(error))
    }
}
