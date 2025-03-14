import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '~/components/ui/form'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '~/components/ui/select'
import { MapPin } from 'lucide-react'
import { type Control } from 'react-hook-form'
import { type TripFormValues } from './TravellerInput'

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
                <FormItem className="backdrop-blur-sm bg-white/40 p-4 rounded-lg border border-white/30 shadow-lg">
                    <FormLabel className="text-gray-800 text-lg font-medium">
                        Destination
                    </FormLabel>
                    <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                    >
                        <FormControl>
                            <SelectTrigger className="h-12 bg-white/90 border-white/50 text-gray-800 focus:ring-#0EA5E9 shadow-sm">
                                <SelectValue placeholder="Select a fishing destination">
                                    <div className="flex items-center">
                                        <MapPin className="mr-2 h-4 w-4 text-#0EA5E9" />
                                        <span>Select a destination</span>
                                    </div>
                                </SelectValue>
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
