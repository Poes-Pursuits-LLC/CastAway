import { Suspense } from 'react'
import { DestinationGridView } from './DestinationGrid.view'
import { getDestinations } from '~/app/data'
import DestinationGridSkeleton from './DestinationGrid.skeleton'

export const DestinationGridAsync = async () => {
    // Data
    const { destinations } = await getDestinations()

    // Render
    return (
        <Suspense fallback={<DestinationGridSkeleton />}>
            <DestinationGridView destinations={destinations} />
        </Suspense>
    )
}
