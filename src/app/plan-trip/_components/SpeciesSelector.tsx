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
import { Fish } from 'lucide-react'
import { type Control } from 'react-hook-form'
import { type TripFormValues } from './TravellerInput'

interface FishTypeSelectorProps {
    control: Control<TripFormValues>
    fishTypes: string[]
}

const FishTypeSelector = ({ control, fishTypes }: FishTypeSelectorProps) => {
    return (
        <FormField
            control={control}
            name="fishType"
            render={({ field }) => (
                <FormItem className="backdrop-blur-sm bg-white/40 p-4 rounded-lg border border-white/30 shadow-lg">
                    <FormLabel className="text-gray-800 text-lg font-medium">
                        Target Fish Species
                    </FormLabel>
                    <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                    >
                        <FormControl>
                            <SelectTrigger className="h-12 bg-white/90 border-white/50 text-gray-800 focus:ring-#0EA5E9 shadow-sm">
                                <SelectValue placeholder="Select target fish species">
                                    <div className="flex items-center">
                                        <Fish className="mr-2 h-4 w-4 text-#0EA5E9" />
                                        <span>Select fish species</span>
                                    </div>
                                </SelectValue>
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white border-white/30 text-gray-800">
                            {fishTypes.map((fishType) => (
                                <SelectItem
                                    key={fishType}
                                    value={fishType}
                                    className="focus:bg-#0EA5E9/10 focus:text-gray-900"
                                >
                                    {fishType}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <FormDescription className="text-gray-700">
                        Which fish species would you like to target?
                    </FormDescription>
                    <FormMessage className="text-orange-600" />
                </FormItem>
            )}
        />
    )
}

export default FishTypeSelector
