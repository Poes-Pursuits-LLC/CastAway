import { FlightCard } from './FlightsCard'
import { AccommodationsCard } from './AccommodationsCard'
import { TripIntroduction } from './TripIntroduction'
import { Checklist } from './Checklist'
import { ThingsToDoCard } from './ThingsToDo'
import { TacticsCard } from './TacticsCard'
import PackingList from './PackingList'
import ShopsCard from './ShopsCard'
import BudgetCard from './BudgetCard'
import { getTrip } from '../data'
import { cn } from '~/lib/utils'
// import SignupBanner from './SignUpBanner'

export const TripPage = async ({
    params,
}: {
    params: Promise<{ id: string }>
}) => {
    const { id } = await params
    const { trip } = await getTrip(id)
    console.info(trip)

    return (
        <>
            {/* <SignupBanner /> */}
            <div className="relative min-h-screen pt-24 pb-16 px-4 bg-gray-200 bg-dot-black/[0.2]">
                <div
                    className={cn(
                        'absolute inset-0',
                        '[background-size:20px_20px]',
                        '[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]',
                    )}
                />
                <div className="max-w-6xl mx-auto relative">
                    <TripIntroduction description={trip.description!} />
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="flex-grow relative z-10">
                            <FlightCard airportCityRec={trip.airportCityRec!} />
                            <AccommodationsCard
                                cityOne={trip.cityRecOne}
                                cityTwo={trip.cityRecTwo}
                                cityThree={trip.cityRecThree}
                            />
                            <ThingsToDoCard />
                            <TacticsCard
                                tactics={trip.tactics!}
                                summary={trip.tacticsSummary!}
                            />
                            <PackingList packingList={trip.packingList} />
                            <ShopsCard />
                        </div>
                        <div className="flex flex-col gap-4 relative z-10">
                            <Checklist />
                            <BudgetCard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
