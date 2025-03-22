'use client'

import { useState } from 'react'
import { Calendar } from '@ui/calendar'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@ui/card'
import { Button } from '@ui/button'
import { SidebarTrigger } from '@ui/sidebar'
import { useRouter } from 'next/navigation'

export const DashboardPage = () => {
    const router = useRouter()
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
        <main className="flex-1 p-6 md:p-10">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Welcome to your Dashboard
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Track your fishing trips and plan new adventures
                    </p>
                </div>
                <SidebarTrigger className="md:hidden" />
                <Button
                    onClick={() => router.push('/plan-trip')}
                    className="hidden md:flex bg-blue-600 hover:bg-blue-700"
                >
                    Plan New Trip
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Quick Stats</CardTitle>
                        <CardDescription>
                            Your fishing journey at a glance
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 dark:text-gray-400">
                                    Total Trips
                                </span>
                                <span className="text-2xl font-bold">12</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 dark:text-gray-400">
                                    Catches
                                </span>
                                <span className="text-2xl font-bold">27</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 dark:text-gray-400">
                                    Locations
                                </span>
                                <span className="text-2xl font-bold">8</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Upcoming Trip</CardTitle>
                        <CardDescription>Your next adventure</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                <p className="font-medium text-gray-900 dark:text-white">
                                    Lake Michigan
                                </p>
                                <p>May 15-17, 2024</p>
                                <p>Target: Bass, Trout</p>
                            </div>
                            <Button
                                variant="outline"
                                onClick={() => router.push('/trip')}
                                className="w-full"
                            >
                                View Details
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Calendar</CardTitle>
                        <CardDescription>
                            Plan your fishing days
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border"
                        />
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}
