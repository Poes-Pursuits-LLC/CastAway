'use client'

import { FlightCard } from './_components/FlightsCard'
import { AccommodationsCard } from './_components/AccommodationsCard'
import { TripIntroduction } from './_components/TripIntroduction'
import { Checklist } from './_components/Checklist'
import { ThingsToDoCard } from './_components/ThingsToDo'
import { TacticsCard } from './_components/TacticsCard'
import PackingList from './_components/PackingList'
import ShopsCard from './_components/ShopsCard'
import BudgetCard from './_components/BudgetCard'

const Trip = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 px-4 bg-gray-100">
            <div className="max-w-6xl mx-auto relative">
                <TripIntroduction />
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-grow relative z-10">
                        <FlightCard />
                        <AccommodationsCard />
                        <ThingsToDoCard />
                        <TacticsCard />
                        <PackingList />
                        <ShopsCard />
                    </div>

                    <div className="flex flex-col gap-4 relative z-10">
                        <Checklist />
                        <BudgetCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trip
