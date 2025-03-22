import { SidebarTrigger } from '~/ui/sidebar'
import { getTrips } from '../data'
import { TripCard } from './TripCard'
import { Button } from '~/ui/button'
import Link from 'next/link'

export const TripsPage = async () => {
    const { trips } = await getTrips()

    return (
        <main className="flex-1 p-6 md:p-10">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        My Fishing Trips
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Manage your trips and plan new adventures
                    </p>
                </div>
                <SidebarTrigger className="md:hidden" />
                <Link href="/plan-trip">
                    <Button className="hidden md:flex bg-gradient-to-r from-[#0EA5E9] to-[#10B981] hover:scale-105 transition-all duration-300">
                        Plan New Trip
                    </Button>
                </Link>
            </div>
            <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-3 p-4 gap-8">
                <>
                    {trips.map((trip, index) => (
                        <TripCard key={index} trip={trip} />
                    ))}
                </>
            </div>
        </main>
    )
}
