import { api } from '@clients/api.client'

export const getTrip = async (id: string) => {
    try {
        const response = await api.trip.getTrip({ id: Number(id) })
        const {
            data: { trip },
        } = response
        return { trip }
    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch trip')
    }
}
