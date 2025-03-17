import { getDestinations } from '../data'
import TripPlannerForm from './TripPlannerForm'

export const PlanTripAsync = async () => {
    // *Data
    const { destinations } = await getDestinations()

    // *UI
    return <TripPlannerForm destinations={destinations} />
}
