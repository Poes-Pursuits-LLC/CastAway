'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { type DateRange } from 'react-day-picker'
import { Button } from '@ui/button'
import { Form } from '@ui/form'
import LocationSelector from './LocationSelector'
import DateRangeSelector from './DateRangeSelector'
import { submitTrip } from '../server'
import { TravelersInput } from './TravellerInput'
import { z } from 'zod'
import { Destination } from '~/core/destination/destination.model'
import { LoadingProgress } from './LoadingProgress'
import { Loader2 } from 'lucide-react'

export const formSchema = z.object({
    locationId: z.string({
        required_error: 'Please select a fishing destination',
    }),
    headCount: z.coerce
        .number()
        .int()
        .min(1, {
            message: 'Please add at least 1 traveler',
        })
        .max(6, {
            message: 'Maximum 6 travelers allowed',
        }),
})

export type TripFormValues = z.infer<typeof formSchema>

const TripPlannerForm = (
    props: Readonly<{
        initialDestination: string | null
        destinations: Destination[]
        maxTripsPlanned: boolean
    }>,
) => {
    const [isLoading, setIsLoading] = useState(false)
    const [dateRange, setDateRange] = useState<DateRange | undefined>({
        from: new Date(),
        to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    })
    const [tripId, setTripId] = useState<number | null>(null)

    const form = useForm<TripFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            headCount: 2,
            locationId: props.initialDestination ?? '',
        },
    })

    const onSubmit = async (values: TripFormValues) => {
        setIsLoading(true)
        if (!dateRange?.from) {
            toast.error('Please select travel dates')
            return
        }

        const { tripId: newTripId } = await submitTrip({
            destinationId: Number(values.locationId),
            destinationName: props.destinations.find(
                (destination) => destination.id === Number(values.locationId),
            )!.name,
            startDate: dateRange.from,
            endDate: dateRange.to!,
            headCount: values.headCount,
        })
        setTripId(newTripId)
    }

    return (
        <>
            {tripId ? (
                <LoadingProgress tripId={tripId ?? 0} />
            ) : (
                <>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
                            <LocationSelector
                                control={form.control}
                                destinations={props.destinations}
                            />
                            <TravelersInput control={form.control} />
                            <DateRangeSelector
                                dateRange={dateRange}
                                setDateRange={setDateRange}
                            />
                            <Button
                                type="submit"
                                className="w-full h-12 mt-4 bg-gradient-to-r from-[#0EA5E9] to-[#10B981] text-white"
                                disabled={isLoading || props.maxTripsPlanned}
                            >
                                {isLoading && (
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                )}
                                {props.maxTripsPlanned
                                    ? 'Upgrade to plan more trips'
                                    : 'Plan My Trip'}
                            </Button>
                        </form>
                    </Form>
                </>
            )}
        </>
    )
}

export default TripPlannerForm
