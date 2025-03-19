import { DestinationGridHeader } from './DestinationGridHeader'
import { DestinationGridAsync } from './DestinationGrid.async'

const Destinations = () => {
    return (
        <section
            id="destinations"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
            <DestinationGridHeader />
            <DestinationGridAsync />
        </section>
    )
}

export default Destinations
