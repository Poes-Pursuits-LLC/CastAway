'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Search } from 'lucide-react'
import { Input } from '@ui/input'
import { Button } from '@ui/button'
import Image from 'next/image'

const locations: Location[] = [
    {
        id: 'montana',
        name: 'Montana Rivers',
        region: 'Montana',
        country: 'USA',
        image: 'https://images.unsplash.com/photo-1605491136068-08a8fcc14261?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
        fishTypes: ['Brown Trout', 'Rainbow Trout', 'Cutthroat'],
    },
    {
        id: 'colorado',
        name: 'Colorado Streams',
        region: 'Colorado',
        country: 'USA',
        image: 'https://images.unsplash.com/photo-1469122312224-c5846569feb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
        fishTypes: ['Brook Trout', 'Rainbow Trout', 'Brown Trout'],
    },
    {
        id: 'alaska',
        name: 'Alaskan Wilderness',
        region: 'Alaska',
        country: 'USA',
        image: 'https://images.unsplash.com/photo-1534880642359-982538f1bf44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
        fishTypes: ['Pacific Salmon', 'Rainbow Trout', 'Arctic Grayling'],
    },
    {
        id: 'nz-south',
        name: 'South Island',
        region: 'South Island',
        country: 'New Zealand',
        image: 'https://images.unsplash.com/photo-1509609002717-334dad864fb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
        fishTypes: ['Brown Trout', 'Rainbow Trout'],
    },
    {
        id: 'patagonia',
        name: 'Patagonia Rivers',
        region: 'Patagonia',
        country: 'Argentina',
        image: 'https://images.unsplash.com/photo-1580097388050-8ccd196b30e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
        fishTypes: ['Rainbow Trout', 'Brown Trout', 'Brook Trout'],
    },
    {
        id: 'russia-kamchatka',
        name: 'Kamchatka Peninsula',
        region: 'Far East',
        country: 'Russia',
        image: 'https://images.unsplash.com/photo-1626089699555-45a6297a7644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
        fishTypes: ['Steelhead', 'Rainbow Trout', 'Pacific Salmon'],
    },
]

export interface Location {
    id: string
    name: string
    region: string
    country: string
    image: string
    fishTypes: string[]
}

interface LocationPickerProps {
    onSelectLocation?: (location: Location) => void
}

const LocationPicker = ({ onSelectLocation }: LocationPickerProps) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(
        null,
    )
    const [filteredLocations, setFilteredLocations] = useState<Location[]>([])

    useEffect(() => {
        if (locations) {
            if (searchTerm) {
                const filtered = locations.filter(
                    (location) =>
                        location.name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                        location.country
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                        location.region
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()),
                )
                setFilteredLocations(filtered)
            } else {
                setFilteredLocations(locations)
            }
        }
    }, [searchTerm])

    const handleLocationSelect = (location: Location) => {
        setSelectedLocation(location)
        if (onSelectLocation) {
            onSelectLocation(location)
        }
    }

    const containerVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
    }

    return (
        <section
            id="destinations"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold tracking-tight">
                    Discover Premier Fishing Destinations
                </h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mt-2 mx-auto">
                    Select from our curated list of world-class fly fishing
                    locations or search for your dream destination
                </p>
            </motion.div>

            <div className="max-w-md mx-auto mb-10">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <Input
                        type="text"
                        placeholder="Search destinations..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 h-12 rounded-full"
                    />
                </div>
            </div>

            <motion.div
                variants={containerVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-100px' }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {filteredLocations.map((location) => (
                    <motion.div
                        key={location.id}
                        variants={itemVariants}
                        className={`relative rounded-2xl overflow-hidden group hover-lift cursor-pointer ${
                            selectedLocation?.id === location.id
                                ? 'ring-2 ring-primary'
                                : ''
                        }`}
                        onClick={() => handleLocationSelect(location)}
                    >
                        <div className="relative h-60 overflow-hidden">
                            <Image
                                src={location.image}
                                alt={location.name}
                                height={100}
                                width={100}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
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
                                            {location.region},{' '}
                                            {location.country}
                                        </span>
                                    </div>
                                </div>

                                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="rounded-full border-white/70 text-white hover:bg-white/20 hover:text-white"
                                    >
                                        Select
                                    </Button>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-1 mt-3">
                                {location.fishTypes.map((type) => (
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
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default LocationPicker
