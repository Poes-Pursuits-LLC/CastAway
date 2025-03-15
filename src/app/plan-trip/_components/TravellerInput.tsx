import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@ui/form'
import { Input } from '@ui/input'
import { Users } from 'lucide-react'
import { type Control } from 'react-hook-form'
import { type TripFormValues } from './TripPlannerForm'

interface TravelersInputProps {
    control: Control<TripFormValues>
}

export const TravelersInput = ({ control }: TravelersInputProps) => {
    return (
        <FormField
            control={control}
            name="travelers"
            render={({ field }) => (
                <FormItem className="backdrop-blur-sm bg-white/40 p-4 rounded-lg border border-white/30 shadow-lg">
                    <FormLabel className="text-gray-800 text-lg font-medium">
                        Number of Travelers
                    </FormLabel>
                    <FormControl>
                        <div className="relative">
                            <Users className="absolute left-3 top-3 h-4 w-4 text-#0EA5E9" />
                            <Input
                                type="number"
                                placeholder="Enter number of travelers"
                                className="pl-10 h-12 bg-white/90 border-white/50 text-gray-800 placeholder:text-gray-500 focus:border-#0EA5E9 shadow-sm"
                                {...field}
                            />
                        </div>
                    </FormControl>
                    <FormDescription className="text-gray-700">
                        How many people will be joining this adventure?
                    </FormDescription>
                    <FormMessage className="text-orange-600" />
                </FormItem>
            )}
        />
    )
}
