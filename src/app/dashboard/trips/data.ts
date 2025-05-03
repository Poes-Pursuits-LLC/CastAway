import { auth } from '@clerk/nextjs/server'
import { api } from '@clients/api.client'

export const getTrips = async () => {
    try {
        const { userId } = await auth()
        if (!userId)
            return {
                trips: [],
            }

        const response = await api.trip.getTrips.query({
            userId,
            limit: 100,
            offset: 0,
        })
        const {
            data: { trips },
        } = response

        return {
            trips,
        }
    } catch (error) {
        throw new Error(`client.getTrips error: ${error.message}`)
    }
}
