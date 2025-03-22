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
import SignupBanner from './SignUpBanner'
import { currentUser } from '@clerk/nextjs/server'
import UserBanner from '~/app/_components/UserBanner'

export const TripPage = async ({
    params,
}: {
    params: Promise<{ id: string }>
}) => {
    const { id } = await params
    const { trip } = await getTrip(id)
    const user = await currentUser()

    return (
        <>
            {user ? <UserBanner /> : <SignupBanner />}
            <div className="relative min-h-screen pt-24 pb-16 px-4 bg-gray-50/20">
                <div
                    className={cn(
                        'absolute inset-0',
                        '[background-size:24px_24px]',
                        '[background-image:radial-gradient(rgba(185,28,28,0.2)_1.5px,transparent_1.5px)]',
                    )}
                />
                <div className="max-w-6xl mx-auto relative z-10">
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
