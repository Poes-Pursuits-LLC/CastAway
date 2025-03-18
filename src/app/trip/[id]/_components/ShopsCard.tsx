'use client'

import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@ui/card'
import { MapPin, Phone, ExternalLink } from 'lucide-react'
import { Button } from '@ui/button'
import Image from 'next/image'

type Shop = {
    id: string
    name: string
    image: string
    address: string
    phone: string
    website?: string
}

const shopData: Shop[] = [
    {
        id: 'shop1',
        name: "River's Edge Outfitters",
        image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        address: '123 Trout Lane, Riverdale, MT',
        phone: '(406) 555-1234',
        website: 'https://example.com/riversedge',
    },
    {
        id: 'shop2',
        name: 'Mountain Stream Supplies',
        image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        address: '456 Angler Avenue, Casterville, CO',
        phone: '(970) 555-2345',
        website: 'https://example.com/mountainstream',
    },
    {
        id: 'shop3',
        name: 'The Fly Box',
        image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        address: '789 Fisherman Road, Brookside, WY',
        phone: '(307) 555-6789',
        website: 'https://example.com/flybox',
    },
]

const ShopsNearby: React.FC = () => {
    return (
        <Card className="hover-lift bg-white/50 border shadow-lg backdrop-blur-md">
            <CardHeader>
                <CardTitle className="text-xl font-semibold">
                    Shops Nearby 🏤
                </CardTitle>
                <CardDescription>
                    Local fly fishing shops you should consider contacting
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {shopData.map((shop) => (
                        <Card
                            key={shop.id}
                            className="overflow-hidden hover-lift flex flex-col justify-between bg-white/50"
                        >
                            <div className="h-32 overflow-hidden">
                                <Image
                                    height={100}
                                    width={100}
                                    src={shop.image}
                                    alt={shop.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <CardContent className="p-4">
                                <h3 className="font-semibold text-lg mb-2">
                                    {shop.name}
                                </h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-start">
                                        <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-muted-foreground" />
                                        <span>{shop.address}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Phone className="w-4 h-4 mr-2 flex-shrink-0 text-muted-foreground" />
                                        <a
                                            href={`tel:${shop.phone.replace(/[^0-9]/g, '')}`}
                                            className="text-primary hover:underline"
                                        >
                                            {shop.phone}
                                        </a>
                                    </div>

                                    {shop.website && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="w-full mt-2 flex items-center justify-center"
                                            onClick={() =>
                                                window.open(
                                                    shop.website,
                                                    '_blank',
                                                )
                                            }
                                        >
                                            <ExternalLink className="w-3.5 h-3.5 mr-1" />{' '}
                                            Visit Website
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default ShopsNearby
