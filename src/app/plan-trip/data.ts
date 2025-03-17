import { api } from '@clients/api.client'

export const getDestinations = async () => {
    try {
        const destinations = await api.destination.getDestinations()
        return { destinations: destinations.data.destinations }
    } catch (error) {
        console.error(error)
        throw new Error(error instanceof Error ? error.message : String(error))
    }
}
