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
import { type TripFormValues } from './TripPlannerForm'

const FishTypeSelector = (
    props: Readonly<{ control: Control<TripFormValues> }>,
) => {
    // State
    const fishSpecies = ['trout']

    return (
        <FormField
            control={props.control}
            name="species"
            render={({ field }) => (
                <FormItem className="backdrop-blur-md bg-white/75 p-4 rounded-lg border shadow-lg">
                    <FormLabel className="text-gray-800 text-lg font-medium">
                        Target Fish Species
                    </FormLabel>
                    <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                    >
                        <FormControl>
                            <SelectTrigger className="h-12 bg-gray-100 border text-gray-800 focus:ring-#0EA5E9 shadow-sm">
                                <SelectValue placeholder="Select target fish species">
                                    <div className="flex items-center">
                                        <Fish className="mr-2 h-4 w-4 text-[#0EA5E9]" />
                                        <span>{field.value}</span>
                                    </div>
                                </SelectValue>
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white border-white/30 text-gray-800">
                            {fishSpecies.map((fishType) => (
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
