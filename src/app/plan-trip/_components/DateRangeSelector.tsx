import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { type DateRange } from 'react-day-picker'
import { cn } from '~/lib/utils'

import { Button } from '@ui/button'
import { Calendar } from '@ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@ui/popover'
import { FormDescription, FormLabel } from '@ui/form'

interface DateRangeSelectorProps {
    dateRange: DateRange | undefined
    setDateRange: (dateRange: DateRange | undefined) => void
}

const DateRangeSelector = ({
    dateRange,
    setDateRange,
}: DateRangeSelectorProps) => {
    return (
        <div className="space-y-2 backdrop-blur-md bg-white/75 p-4 rounded-lg border shadow-lg">
            <FormLabel className="text-gray-800 text-lg font-medium">
                Travel Dates
            </FormLabel>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant={'outline'}
                        className={cn(
                            'w-full justify-start text-left font-normal h-12 bg-gray-100 border text-gray-800 shadow-sm',
                            !dateRange?.from && 'text-gray-500',
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4 text-[#0EA5E9]" />
                        {dateRange?.from ? (
                            dateRange.to ? (
                                <>
                                    {format(dateRange.from, 'LLL dd, y')} -{' '}
                                    {format(dateRange.to, 'LLL dd, y')}
                                </>
                            ) : (
                                format(dateRange.from, 'LLL dd, y')
                            )
                        ) : (
                            <span>Select dates</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="range"
                        defaultMonth={dateRange?.from}
                        selected={dateRange}
                        onSelect={setDateRange}
                        numberOfMonths={2}
                        className={cn(
                            'p-3 pointer-events-auto bg-white text-gray-800 border-gray-200',
                        )}
                        disabled={(date) => date < new Date()}
                        classNames={{
                            day_selected:
                                'bg-gray-900 hover:bg-gray-800 text-white',
                            day_range_middle: 'bg-gray-100 text-gray-900',
                            day_range_end:
                                'bg-gray-900 text-white hover:bg-gray-800',
                            day_range_start:
                                'bg-gray-900 text-white hover:bg-gray-800',
                        }}
                    />
                </PopoverContent>
            </Popover>
            <FormDescription className="text-gray-700">
                When would you like to travel? Peak fishing seasons vary by
                location.
            </FormDescription>
        </div>
    )
}

export default DateRangeSelector
