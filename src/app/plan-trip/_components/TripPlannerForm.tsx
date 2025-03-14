'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { type DateRange } from 'react-day-picker'
import { Button } from '~/components/ui/button'
import { Form } from '~/components/ui/form'
import LocationSelector from './LocationSelector'
import TravelerInput, {
    formSchema,
    type TripFormValues,
} from './TravellerInput'
import SpeciesSelector from './SpeciesSelector'
import DateRangeSelector from './DateRangeSelector'
import { useRouter } from 'next/navigation'

export interface Location {
    id: string
    name: string
    region: string
    country: string
    image: string
    fishTypes: string[]
}

interface TripPlannerFormProps {
    locations: Location[]
}

const TripPlannerForm = ({ locations }: TripPlannerFormProps) => {
    const router = useRouter()

    const [dateRange, setDateRange] = useState<DateRange | undefined>({
        from: new Date(),
        to: undefined,
    })

    const allFishTypes = [
        ...new Set(locations.flatMap((location) => location.fishTypes)),
    ].sort()

    const form = useForm<TripFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            travelers: 2,
        },
    })

    const onSubmit = (values: TripFormValues) => {
        if (!dateRange?.from) {
            toast.error('Please select travel dates')
            return
        }

        const tripDetails = {
            ...values,
            dateRange: {
                from: dateRange.from,
                to: dateRange.to ?? dateRange.from,
            },
        }

        console.log('Trip details:', tripDetails)

        router.push('/trip-results')
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <LocationSelector
                    control={form.control}
                    locations={locations}
                />
                <TravelerInput control={form.control} />
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
    )
}

export default TripPlannerForm
