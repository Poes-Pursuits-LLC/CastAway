'use client'

import { MapPin, Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Destination } from '~/core/destination/destination.model'
import { Input } from '~/ui/input'
import Image from 'next/image'
import { Button } from '~/ui/button'
import { useRouter } from 'next/navigation'

const fishTypes = ['brook trout', 'rainbow trout', 'golden trout']

export const DestinationGridView = (
    props: Readonly<{
        destinations: Destination[]
    }>,
) => {
    // State
    const localDestinations = props.destinations.slice()
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedLocation, setSelectedLocation] =
        useState<Destination | null>(null)
    const [randomDisplayDestinations, setRandomDisplayDestinations] = useState<
        Destination[]
    >([])

    // Interactivity
    const router = useRouter()

    useEffect(() => {
        if (searchTerm) {
            const filtered = localDestinations.filter(
                (destination) =>
                    destination.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    destination.country
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    destination.province
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()),
            )
            setRandomDisplayDestinations(filtered)
        } else {
            const initialDestinations = props.destinations
                .slice()
                .sort(() => 0.5 - Math.random())
                .slice(0, 6)
            setRandomDisplayDestinations(initialDestinations)
        }
    }, [searchTerm, localDestinations, props.destinations])

    const handleLocationSelect = (destination: Destination) => {
        setSelectedLocation(destination)
    }

    // Render
    return (
        <>
            <div className="max-w-md mx-auto mb-10">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <Input
                        type="text"
                        placeholder="Search destinations..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 h-12 rounded-full border-2"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {randomDisplayDestinations.map((location) => (
                    <div
                        key={location.id}
                        className={`relative rounded-2xl overflow-hidden group shadow-lg border hover-lift cursor-pointer ${
                            selectedLocation?.id === location.id
                                ? 'ring-2 ring-primary'
                                : ''
                        }`}
                        onClick={() => handleLocationSelect(location)}
                    >
                        <div className="relative h-60 overflow-hidden">
                            <Image
                                src={location.imageUrl}
                                alt={location.name}
                                height={100}
                                width={100}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-5 text-white">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-xl font-bold">
                                        {location.name}
                                    </h3>
                                    <div className="flex items-center text-sm opacity-80 mt-1">
                                        <MapPin className="h-3.5 w-3.5 mr-1" />
                                        <span>
                                            {location.province},{' '}
                                            {location.country}
                                        </span>
                                    </div>
                                </div>

                                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="rounded-full px-8 text-white bg-white/20"
                                        onClick={() =>
                                            router.push(
                                                `/plan-trip?location=${location.id}`,
                                            )
                                        }
                                    >
                                        Get Started
                                    </Button>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-1 mt-3">
                                {fishTypes.map((type) => (
                                    <span
                                        key={type}
                                        className="inline-block py-1 px-2 text-xs bg-white/20 backdrop-blur-sm rounded-full"
                                    >
                                        {type}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {selectedLocation?.id === location.id && (
                            <div className="absolute top-3 right-3">
                                <div className="p-1.5 rounded-full bg-primary/90 backdrop-blur-sm">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}
