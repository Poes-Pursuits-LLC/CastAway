import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@ui/form'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@ui/select'
import { MapPin } from 'lucide-react'
import { type Control } from 'react-hook-form'
import { type TripFormValues } from './TripPlannerForm'

export interface Location {
    id: string
    name: string
    region: string
    country: string
    image: string
    fishTypes: string[]
}

interface LocationSelectorProps {
    control: Control<TripFormValues>
    locations: Location[]
}

const LocationSelector = ({ control, locations }: LocationSelectorProps) => {
    return (
        <FormField
            control={control}
            name="locationId"
            render={({ field }) => (
                <FormItem className="backdrop-blur-md bg-white/75 p-4 rounded-lg border shadow-lg">
                    <FormLabel className="text-gray-800 text-lg font-medium">
                        Destination
                    </FormLabel>
                    <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                    >
                        <FormControl>
                            <SelectTrigger className="h-12 bg-gray-100 border text-gray-800 focus:ring-#0EA5E9 shadow-sm">
                                <div className="flex gap-2">
                                    <MapPin className="h-4 w-4" />
                                    <SelectValue placeholder="Select a fishing destination" />
                                </div>
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white border-white/30 text-gray-800">
                            {locations.map((location) => (
                                <SelectItem
                                    key={location.id}
                                    value={location.id}
                                    className="focus:bg-#0EA5E9/10 focus:text-gray-900"
                                >
                                    <div className="flex items-center">
                                        <span>
                                            {location.name}, {location.country}
                                        </span>
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <FormDescription className="text-gray-700">
                        Choose from our premier fly fishing destinations.
                    </FormDescription>
                    <FormMessage className="text-orange-600" />
                </FormItem>
            )}
        />
    )
}

export default LocationSelector
