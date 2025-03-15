import TripPlannerForm from './TripPlannerForm'

export interface Location {
    id: string
    name: string
    region: string
    country: string
    image: string
    fishTypes: string[]
}

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

import { MapPin, Navigation, Fish } from 'lucide-react'

export const PlanTripPage = () => {
    return (
        <div
            className="min-h-screen pt-24 pb-16 px-4 bg-cover bg-center relative"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            }}
        >
            <div className="max-w-4xl mx-auto relative">
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4 text-white">
                        Plan Your Perfect Fly Fishing Trip
                    </h1>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto">
                        Complete the form below to start planning your next fly
                        fishing adventure. We&apos;ll help you find the perfect
                        location, flights, and accommodations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {[
                        {
                            icon: <MapPin className="h-6 w-6" />,
                            title: 'Top Destinations',
                            desc: 'Access to premier fishing spots worldwide',
                        },
                        {
                            icon: <Navigation className="h-6 w-6" />,
                            title: 'Custom Itineraries',
                            desc: 'Personalized to your preferences',
                        },
                        {
                            icon: <Fish className="h-6 w-6" />,
                            title: 'Expert Guides',
                            desc: 'Local knowledge for the best experience',
                        },
                    ].map((feature, i) => (
                        <div
                            key={i}
                            className="backdrop-blur-md bg-white/30 p-6 rounded-lg border border-white/30 shadow-lg text-center flex flex-col items-center hover:translate-y-[-5px] transition-transform duration-300"
                        >
                            <div className="bg-gradient-to-r from-[#0EA5E9] to-[#10B981] p-3 rounded-full mb-3 text-white">
                                {feature.icon}
                            </div>
                            <h3 className="font-bold text-lg text-gray-800 mb-1">
                                {feature.title}
                            </h3>
                            <p className="text-gray-700 text-sm">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="backdrop-blur-md bg-white/30 rounded-xl overflow-hidden border border-white/30 shadow-lg">
                    <div className="p-6 md:p-10">
                        <TripPlannerForm locations={locations} />
                    </div>
                </div>
            </div>
        </div>
    )
}
