'use client'

import { Card, CardContent } from '@ui/card'
import { Map, Calendar, Eye } from 'lucide-react'
import { format } from 'date-fns'
import Link from 'next/link'
import Image from 'next/image'

export type TripCardProps = {
    trip: {
        destinationImageUrl: string
        destinationName: string
        tripId: number
        startDate: Date | null
    }
}

export const TripCard = ({ trip }: TripCardProps) => {
    const formattedDate = trip.startDate
        ? format(trip.startDate, 'MMMM dd, yyyy')
        : 'Date to be determined'

    return (
        <Link href={`/trip/${trip.tripId}`}>
            <Card className="overflow-hidden transition-all duration-500 hover:shadow-2xl cursor-pointer group rounded-xl relative h-[400px] w-[400px] flex flex-col">
                <div className="relative h-56 md:h-64 overflow-hidden rounded-t-xl">
                    <Image
                        height={400}
                        width={400}
                        src={trip.destinationImageUrl}
                        alt={trip.destinationName}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300" />
                </div>

                <CardContent className="p-5 lg:p-6 flex-grow flex flex-col justify-between bg-white dark:bg-gray-800 z-10 relative">
                    <div>
                        <div className="relative mb-4">
                            <h3 className="font-bold text-xl md:text-2xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                                {trip.destinationName}
                            </h3>
                            <div className="absolute -bottom-2 left-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-500 ease-out" />
                        </div>

                        <div className="space-y-2.5 mb-4">
                            <div className="flex items-center text-gray-700 dark:text-gray-300">
                                <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0" />
                                <span className="text-sm">{formattedDate}</span>
                            </div>

                            <div className="flex items-center text-gray-700 dark:text-gray-300">
                                <Map className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0" />
                                <span className="text-sm">
                                    {trip.destinationName},
                                    {trip.startDate!.toLocaleDateString(
                                        'en-US',
                                        {
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric',
                                        },
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto pt-4">
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600 to-blue-500 text-white py-2.5 text-center text-sm font-medium transition-all duration-300 flex items-center justify-center gap-1.5">
                            <Eye className="h-4 w-4" />
                            <span>View Trip Details</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}
