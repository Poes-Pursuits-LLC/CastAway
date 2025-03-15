'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    Plane,
    ArrowRight,
    ExternalLink,
    CheckSquare,
    Square,
    ListTodo,
    MapPin,
    Hotel,
    Fish,
} from 'lucide-react'
import { Button } from '@ui/button'
import { Card, CardContent } from '@ui/card'
import { Checkbox } from '@ui/checkbox'
import { Label } from '@ui/label'
import { Separator } from '@ui/separator'
import { cn } from '~/lib/utils'
import Link from 'next/link'
import FishSpeciesCard, { FishSpecies } from './_components/SpeciesCard'

interface Flight {
    id: string
    airline: string
    flightNumber: string
    departureTime: string
    departureAirport: string
    arrivalTime: string
    arrivalAirport: string
    price: number
    duration: string
}

interface Accommodation {
    id: string
    name: string
    type: string
    location: string
    pricePerNight: number
    rating: number
    amenities: string[]
    image: string
}

interface TodoItem {
    id: string
    text: string
    completed: boolean
}

const mockFlights: Flight[] = [
    {
        id: 'f1',
        airline: 'Delta Airlines',
        flightNumber: 'DL1234',
        departureTime: '8:45 AM',
        departureAirport: 'JFK',
        arrivalTime: '12:15 PM',
        arrivalAirport: 'NAS',
        price: 425,
        duration: '3h 30m',
    },
    {
        id: 'f2',
        airline: 'American Airlines',
        flightNumber: 'AA789',
        departureTime: '10:30 AM',
        departureAirport: 'MIA',
        arrivalTime: '11:45 AM',
        arrivalAirport: 'NAS',
        price: 350,
        duration: '1h 15m',
    },
    {
        id: 'f3',
        airline: 'JetBlue',
        flightNumber: 'B6601',
        departureTime: '2:15 PM',
        departureAirport: 'FLL',
        arrivalTime: '3:30 PM',
        arrivalAirport: 'NAS',
        price: 375,
        duration: '1h 15m',
    },
]

const mockAccommodations: Accommodation[] = [
    {
        id: 'a1',
        name: 'Beachfront Villa',
        type: 'Villa',
        location: 'Paradise Island, Bahamas',
        pricePerNight: 350,
        rating: 4.8,
        amenities: ['Private Beach', 'Pool', 'WiFi', 'Kitchen'],
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'a2',
        name: 'Oceanview Resort',
        type: 'Resort',
        location: 'Nassau, Bahamas',
        pricePerNight: 275,
        rating: 4.5,
        amenities: ['Beachfront', 'Restaurant', 'Spa', 'Gym'],
        image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'a3',
        name: 'Island Cottage',
        type: 'Cottage',
        location: 'Exuma, Bahamas',
        pricePerNight: 225,
        rating: 4.6,
        amenities: ['Garden View', 'Kitchenette', 'WiFi', 'Beach Access'],
        image: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
]

const mockFishSpecies: FishSpecies[] = [
    {
        id: 'fs1',
        name: 'Bonefish',
        image: 'https://plus.unsplash.com/premium_photo-1708433275723-869bca7bf866?q=80&w=3096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description:
            'The "ghost of the flats" - a silvery, torpedo-shaped fish that is renowned for its lightning-fast runs and challenging sight fishing opportunities.',
        averageSize: '4-8 pounds',
        tactics: [
            'Sight fishing on shallow flats',
            'Small weighted flies like Gotchas and Crazy Charlies',
            'Delicate presentations to avoid spooking',
            'Quick, accurate casts to moving fish',
        ],
        season: 'Year-round, best from March to November',
    },
    {
        id: 'fs2',
        name: 'Permit',
        image: 'https://plus.unsplash.com/premium_photo-1708433275723-869bca7bf866?q=80&w=3096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description:
            'The holy grail of flats fishing - one of the most challenging and rewarding gamefish to catch on a fly.',
        averageSize: '10-30 pounds',
        tactics: [
            'Crab patterns are the fly of choice',
            'Long leaders (12-15 feet) with 16-20 lb fluorocarbon',
            'Present fly in front of cruising fish',
            'Requires patience and precise casting',
        ],
        season: 'March to October, with April and May being prime months',
    },
]

const initialTodoItems: TodoItem[] = [
    { id: 't1', text: 'Book flight', completed: false },
    { id: 't2', text: 'Reserve accommodation', completed: false },
    { id: 't3', text: 'Check weather forecast', completed: false },
    { id: 't4', text: 'Pack fishing gear', completed: false },
    { id: 't5', text: 'Arrange airport transfer', completed: false },
    { id: 't6', text: 'Purchase travel insurance', completed: false },
]

const Trip = () => {
    const [selectedFlight, setSelectedFlight] = useState<string | null>(null)
    const [selectedAccommodation, setSelectedAccommodation] = useState<
        string | null
    >(null)
    const [todoItems, setTodoItems] = useState<TodoItem[]>(initialTodoItems)

    const toggleTodoItem = (id: string) => {
        setTodoItems(
            todoItems.map((item) =>
                item.id === id ? { ...item, completed: !item.completed } : item,
            ),
        )
    }

    return (
        <div
            className="min-h-screen pt-24 pb-16 px-4 bg-cover bg-center relative"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-water-deep/40 via-black/30 to-nature-deep/40"></div>

            <div className="max-w-6xl mx-auto relative">
                <div className="backdrop-blur-md bg-white/30 rounded-xl overflow-hidden border border-white/30 shadow-lg p-6 mb-8">
                    <motion.h1
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4"
                    >
                        A Bahamanian Trip
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-800"
                    >
                        Experience the crystal clear waters and pristine beaches
                        of the Bahamas. This trip offers the perfect blend of
                        relaxation and adventure for fly fishing enthusiasts.
                    </motion.p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-grow">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="backdrop-blur-md bg-white/30 rounded-xl overflow-hidden border border-white/30 shadow-lg p-6 mb-8"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                                    <Plane className="mr-2 h-6 w-6 rotate-90" />
                                    Available Flights
                                </h2>
                                <Button
                                    variant="ghost"
                                    className="text-water-deep hover:text-water-deep/80"
                                >
                                    <Link
                                        href="#"
                                        className="flex items-center"
                                    >
                                        See more flights
                                        <ExternalLink className="ml-1 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {mockFlights.map((flight) => (
                                    <Card
                                        key={flight.id}
                                        className={`cursor-pointer transition-all duration-200 hover:shadow-md backdrop-blur-sm bg-white/40 border border-white/50 ${
                                            selectedFlight === flight.id
                                                ? 'ring-2 ring-water-deep'
                                                : 'hover:border-gray-300'
                                        }`}
                                        onClick={() =>
                                            setSelectedFlight(flight.id)
                                        }
                                    >
                                        <CardContent className="p-6">
                                            <div className="flex justify-between items-center mb-4">
                                                <div>
                                                    <h3 className="font-medium text-gray-900">
                                                        {flight.airline}
                                                    </h3>
                                                    <p className="text-sm text-gray-500">
                                                        {flight.flightNumber}
                                                    </p>
                                                </div>
                                                <span className="font-bold text-xl text-gray-900">
                                                    ${flight.price}
                                                </span>
                                            </div>

                                            <div className="flex items-center justify-between mb-4">
                                                <div className="text-center">
                                                    <p className="text-lg font-medium">
                                                        {flight.departureTime}
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        {
                                                            flight.departureAirport
                                                        }
                                                    </p>
                                                </div>

                                                <div className="flex-1 mx-2 flex flex-col items-center">
                                                    <div className="w-full border-t border-gray-300 relative">
                                                        <div className="absolute -mt-2.5 ml-[-6px] text-gray-500 text-xs">
                                                            {flight.duration}
                                                        </div>
                                                    </div>
                                                    <ArrowRight className="h-4 w-4 mt-2 text-gray-400" />
                                                </div>

                                                <div className="text-center">
                                                    <p className="text-lg font-medium">
                                                        {flight.arrivalTime}
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        {flight.arrivalAirport}
                                                    </p>
                                                </div>
                                            </div>

                                            <Button
                                                variant={
                                                    selectedFlight === flight.id
                                                        ? 'default'
                                                        : 'outline'
                                                }
                                                className={`w-full ${
                                                    selectedFlight === flight.id
                                                        ? 'bg-gradient-to-r from-water-deep to-nature-deep text-white'
                                                        : ''
                                                }`}
                                            >
                                                {selectedFlight === flight.id
                                                    ? 'Selected'
                                                    : 'Select Flight'}
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="backdrop-blur-md bg-white/30 rounded-xl overflow-hidden border border-white/30 shadow-lg p-6 mb-8"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                                    <Hotel className="mr-2 h-6 w-6" />
                                    Available Accommodations
                                </h2>
                                <Button
                                    variant="ghost"
                                    className="text-water-deep hover:text-water-deep/80"
                                >
                                    <Link
                                        href="#"
                                        className="flex items-center"
                                    >
                                        See more accommodations
                                        <ExternalLink className="ml-1 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {mockAccommodations.map((accommodation) => (
                                    <Card
                                        key={accommodation.id}
                                        className={`cursor-pointer transition-all duration-200 hover:shadow-md backdrop-blur-sm bg-white/40 border border-white/50 ${
                                            selectedAccommodation ===
                                            accommodation.id
                                                ? 'ring-2 ring-water-deep'
                                                : 'hover:border-gray-300'
                                        }`}
                                        onClick={() =>
                                            setSelectedAccommodation(
                                                accommodation.id,
                                            )
                                        }
                                    >
                                        <div className="h-48 w-full overflow-hidden">
                                            <img
                                                src={accommodation.image}
                                                alt={accommodation.name}
                                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                            />
                                        </div>
                                        <CardContent className="p-6">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <h3 className="font-medium text-gray-900">
                                                        {accommodation.name}
                                                    </h3>
                                                    <p className="text-sm text-gray-500 flex items-center mt-1">
                                                        <MapPin className="h-3 w-3 mr-1" />{' '}
                                                        {accommodation.location}
                                                    </p>
                                                </div>
                                                <span className="font-bold text-lg text-gray-900">
                                                    $
                                                    {
                                                        accommodation.pricePerNight
                                                    }
                                                    <span className="text-sm font-normal text-gray-500">
                                                        /night
                                                    </span>
                                                </span>
                                            </div>

                                            <div className="flex items-center mb-3">
                                                <div className="flex text-amber-400">
                                                    {'★'.repeat(
                                                        Math.floor(
                                                            accommodation.rating,
                                                        ),
                                                    )}
                                                    {'☆'.repeat(
                                                        5 -
                                                            Math.floor(
                                                                accommodation.rating,
                                                            ),
                                                    )}
                                                </div>
                                                <span className="text-sm text-gray-500 ml-1">
                                                    {accommodation.rating}
                                                </span>
                                            </div>

                                            <div className="flex flex-wrap gap-1 mb-4">
                                                {accommodation.amenities.map(
                                                    (amenity, index) => (
                                                        <span
                                                            key={index}
                                                            className="text-xs bg-white/50 px-2 py-1 rounded-full text-gray-600"
                                                        >
                                                            {amenity}
                                                        </span>
                                                    ),
                                                )}
                                            </div>

                                            <Button
                                                variant={
                                                    selectedAccommodation ===
                                                    accommodation.id
                                                        ? 'default'
                                                        : 'outline'
                                                }
                                                className={`w-full ${
                                                    selectedAccommodation ===
                                                    accommodation.id
                                                        ? 'bg-gradient-to-r from-water-deep to-nature-deep text-white'
                                                        : ''
                                                }`}
                                            >
                                                {selectedAccommodation ===
                                                accommodation.id
                                                    ? 'Selected'
                                                    : 'Select Accommodation'}
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="backdrop-blur-md bg-white/30 rounded-xl overflow-hidden border border-white/30 shadow-lg p-6 mb-8"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                                    <Fish className="mr-2 h-6 w-6" />
                                    Target Fish Species
                                </h2>
                                <p className="text-sm text-gray-700">
                                    Species to target on this trip
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {mockFishSpecies.map((species) => (
                                    <FishSpeciesCard
                                        key={species.id}
                                        species={species}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="w-full lg:w-80 shrink-0"
                    >
                        <div className="backdrop-blur-md bg-white/30 rounded-xl overflow-hidden border border-white/30 shadow-lg p-6">
                            <div className="flex items-center mb-4">
                                <ListTodo className="mr-2 h-5 w-5 text-water-deep" />
                                <h3 className="text-lg font-semibold">
                                    Trip Checklist
                                </h3>
                            </div>

                            <Separator className="mb-4" />

                            <div className="space-y-3">
                                {todoItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-start space-x-2"
                                    >
                                        <Checkbox
                                            id={item.id}
                                            checked={item.completed}
                                            onCheckedChange={() =>
                                                toggleTodoItem(item.id)
                                            }
                                            className={cn(
                                                'mt-0.5',
                                                item.completed
                                                    ? 'text-water-deep'
                                                    : 'text-gray-400',
                                            )}
                                        />
                                        <Label
                                            htmlFor={item.id}
                                            className={cn(
                                                'cursor-pointer',
                                                item.completed
                                                    ? 'line-through text-gray-400'
                                                    : 'text-gray-700',
                                            )}
                                        >
                                            {item.text}
                                        </Label>
                                    </div>
                                ))}
                            </div>

                            <Separator className="my-4" />

                            <div className="text-sm text-gray-700">
                                <p className="flex items-center mb-1">
                                    <CheckSquare className="mr-1 h-3 w-3" />
                                    {
                                        todoItems.filter((i) => i.completed)
                                            .length
                                    }{' '}
                                    completed
                                </p>
                                <p className="flex items-center">
                                    <Square className="mr-1 h-3 w-3" />
                                    {
                                        todoItems.filter((i) => !i.completed)
                                            .length
                                    }{' '}
                                    remaining
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Trip
