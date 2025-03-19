import { getDestinations } from '../../data'
import TripPlannerForm from './TripPlannerForm'

export const PlanTripAsync = async ({
    initialDestination,
}: {
    initialDestination: string | null
}) => {
    // *Data
    const { destinations } = await getDestinations()

    // *Validation
    const destinationIdSet = new Set(
        destinations.map(({ id }) => id.toString()),
    )
    const initialDestinationId = destinationIdSet.has(initialDestination ?? '')
        ? initialDestination
        : null

    // *Render
    return (
        <TripPlannerForm
            destinations={destinations}
            initialDestination={initialDestinationId}
        />
    )
}
