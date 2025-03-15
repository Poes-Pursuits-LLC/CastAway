'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { type DateRange } from 'react-day-picker'
import { Button } from '@ui/button'
import { Form } from '@ui/form'
import LocationSelector from './LocationSelector'
import SpeciesSelector from './SpeciesSelector'
import DateRangeSelector from './DateRangeSelector'
import { submitTrip } from '../server'
import { TravelersInput } from './TravellerInput'
import { z } from 'zod'

export interface Location {
    id: string
    name: string
    region: string
    country: string
    image: string
    fishTypes: string[]
}

export const formSchema = z.object({
    locationId: z.string({
        required_error: 'Please select a fishing destination',
    }),
    travelers: z.coerce
        .number()
        .int()
        .min(1, {
            message: 'Please add at least 1 traveler',
        })
        .max(6, {
            message: 'Maximum 6 travelers allowed',
        }),
    fishType: z.string({
        required_error: 'Please select a fish species to target',
    }),
})

export type TripFormValues = z.infer<typeof formSchema>

interface TripPlannerFormProps {
    locations: Location[]
}

const TripPlannerForm = ({ locations }: TripPlannerFormProps) => {
    // State
    const [dateRange, setDateRange] = useState<DateRange | undefined>({
        from: new Date(),
        to: undefined,
    })
    const [tripId, setTripId] = useState<string | null>(null)

    const allFishTypes = [
        ...new Set(locations.flatMap((location) => location.fishTypes)),
    ].sort()

    const form = useForm<TripFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            travelers: 2,
        },
    })

    const onSubmit = async (values: TripFormValues) => {
        if (!dateRange?.from) {
            toast.error('Please select travel dates')
            return
        }

        const { tripDescription } = await submitTrip({
            destination: values.locationId,
        })
        setTripId((_prev) => tripDescription)
    }

    return (
        <>
            {tripId ? (
                // fancy timer loader that looks like so much is happening.
                <div>wowwwwwwwwwwwwwww</div>
            ) : (
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        <LocationSelector
                            control={form.control}
                            locations={locations}
                        />
                        <TravelersInput control={form.control} />
                        <SpeciesSelector
                            control={form.control}
                            fishTypes={allFishTypes}
                        />
                        <DateRangeSelector
                            dateRange={dateRange}
                            setDateRange={setDateRange}
                        />

                        <Button
                            type="submit"
                            className="w-full h-12 mt-4 bg-gradient-to-r from-#0EA5E9 to-[#10B981] text-white"
                        >
                            Design My Trip
                        </Button>
                    </form>
                </Form>
            )}
        </>
    )
}

export default TripPlannerForm
