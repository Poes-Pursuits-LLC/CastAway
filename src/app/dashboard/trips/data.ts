import { api } from '@clients/api.client'

export const getTrips = async () => {
    try {
        const response = await api.trip.getTrips.query({
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
        console.error(`client.getTrips error: ${error.message}`)
        throw new Error(`client.getTrips error: ${error.message}`)
    }
}
