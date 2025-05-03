import { api } from '@clients/api.client'

export const getDestinations = async () => {
    try {
        const response = await api.destination.getDestinations.query()
        const {
            data: { destinations },
        } = response
        return { destinations }
    } catch (error) {
        throw new Error(`client.getDestinations error: ${error.message}`)
    }
}
