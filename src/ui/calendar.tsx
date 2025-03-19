'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker } from 'react-day-picker'

import { cn } from '~/lib/utils'
import { buttonVariants } from '@ui/button'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
    className,
    classNames,
    showOutsideDays = true,
    ...props
}: CalendarProps) {
    return (
        <DayPicker
            showOutsideDays={showOutsideDays}
            className={cn('p-3', className)}
            classNames={{
                months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
                month: 'space-y-4',
                caption: 'flex justify-center pt-1 relative items-center',
                caption_label: 'text-sm font-medium text-gray-900',
                nav: 'space-x-1 flex items-center',
                nav_button: cn(
                    buttonVariants({ variant: 'outline' }),
                    'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 border-gray-200',
                ),
                nav_button_previous: 'absolute left-1',
                nav_button_next: 'absolute right-1',
                table: 'w-full border-collapse space-y-1',
                head_row: 'flex justify-between w-full',
                head_cell:
                    'text-gray-500 w-8 font-normal text-[0.8rem] flex items-center justify-center',
                row: 'flex w-full mt-2 justify-between',
                cell: cn(
                    'relative p-0 text-center text-sm focus-within:relative focus-within:z-20',
                    '[&:has([aria-selected])]:bg-gray-100',
                    '[&:has([aria-selected].day-outside)]:bg-gray-50',
                    props.mode === 'range'
                        ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md'
                        : '[&:has([aria-selected])]:rounded-md',
                ),
                day: cn(
                    buttonVariants({ variant: 'ghost' }),
                    'h-8 w-8 p-0 font-normal aria-selected:opacity-100',
                ),
                day_range_start: 'day-range-start',
                day_range_end: 'day-range-end',
                day_selected:
                    'bg-gray-900 text-white hover:bg-gray-800 hover:text-white focus:bg-gray-900 focus:text-white',
                day_today: 'bg-gray-100',
                day_outside: 'text-gray-400 opacity-50',
                day_disabled: 'text-gray-400 opacity-30',
                day_range_middle:
                    'aria-selected:bg-gray-100 aria-selected:text-gray-900',
                day_hidden: 'invisible',
                ...classNames,
            }}
            components={{
                IconLeft: ({ className, ...props }) => (
                    <ChevronLeft
                        className={cn('h-4 w-4', className)}
                        {...props}
                    />
                ),
                IconRight: ({ className, ...props }) => (
                    <ChevronRight
                        className={cn('h-4 w-4', className)}
                        {...props}
                    />
                ),
            }}
            {...props}
        />
    )
}
Calendar.displayName = 'Calendar'

export { Calendar }
