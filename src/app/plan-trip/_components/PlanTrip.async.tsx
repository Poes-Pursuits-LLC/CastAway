import { getDestinations } from '../../data'
import TripPlannerForm from './TripPlannerForm'

export const PlanTripAsync = async (props: {
    initialDestination: string | null
    maxTripsPlanned: boolean
}) => {
    // *Data
    const { destinations } = await getDestinations()

    // *Validation
    const destinationIdSet = new Set(
        destinations.map(({ id }) => id.toString()),
    )
    const initialDestinationId = destinationIdSet.has(
        props.initialDestination ?? '',
    )
        ? props.initialDestination
        : null

    // *Render
    return (
        <TripPlannerForm
            destinations={destinations}
            initialDestination={initialDestinationId}
            maxTripsPlanned={props.maxTripsPlanned}
        />
    )
}
