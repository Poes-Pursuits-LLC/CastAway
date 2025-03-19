import { api } from '@clients/api.client'

export const getDestinations = async () => {
    try {
        const response = await api.destination.getDestinations()
        const {
            data: { destinations },
        } = response
        return { destinations }
    } catch (error) {
        console.error(`client.getDestinations error: ${error.message}`)
        throw new Error(`client.getDestinations error: ${error.message}`)
    }
}
