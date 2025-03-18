'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckSquare, ListTodo, Square } from 'lucide-react'
import { cn } from '~/lib/utils'
import { Label } from '@ui/label'
import { Checkbox } from '@ui/checkbox'
import { Separator } from '@ui/separator'

interface TodoItem {
    id: string
    text: string
    completed: boolean
}

const initialTodoItems: TodoItem[] = [
    { id: 't1', text: 'Book flight', completed: false },
    { id: 't2', text: 'Reserve accommodation', completed: false },
    { id: 't3', text: 'Check weather forecast', completed: false },
    { id: 't4', text: 'Pack fishing gear', completed: false },
    { id: 't5', text: 'Arrange airport transfer', completed: false },
    { id: 't6', text: 'Purchase travel insurance', completed: false },
]

export const Checklist = () => {
    const [todoItems, setTodoItems] = useState<TodoItem[]>(initialTodoItems)

    const toggleTodoItem = (id: string) => {
        setTodoItems(
            todoItems.map((item) =>
                item.id === id ? { ...item, completed: !item.completed } : item,
            ),
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full lg:w-80 shrink-0 relative z-[1]"
        >
            <div className="backdrop-blur-md bg-white/30 rounded-xl overflow-hidden border border-white/30 shadow-lg p-6">
                <div className="flex items-center mb-4">
                    <ListTodo className="mr-2 h-5 w-5 text-[#0EA5E9]" />
                    <h3 className="text-lg font-semibold">Trip Checklist</h3>
                </div>
                <Separator className="mb-4" />
                <div className="space-y-3">
                    {todoItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-start space-x-2"
                        >
                            <Checkbox
                                id={item.id}
                                checked={item.completed}
                                onCheckedChange={() => toggleTodoItem(item.id)}
                                className={cn(
                                    'mt-0.5',
                                    item.completed
                                        ? 'text-[#0EA5E9]'
                                        : 'text-gray-400',
                                )}
                            />
                            <Label
                                htmlFor={item.id}
                                className={cn(
                                    'cursor-pointer',
                                    item.completed
                                        ? 'line-through text-gray-400'
                                        : 'text-gray-700',
                                )}
                            >
                                {item.text}
                            </Label>
                        </div>
                    ))}
                </div>
                <Separator className="my-4" />
                <div className="text-sm text-gray-700">
                    <p className="flex items-center mb-1">
                        <CheckSquare className="mr-1 h-3 w-3" />
                        {todoItems.filter((i) => i.completed).length} completed
                    </p>
                    <p className="flex items-center">
                        <Square className="mr-1 h-3 w-3" />
                        {todoItems.filter((i) => !i.completed).length} remaining
                    </p>
                </div>
            </div>
        </motion.div>
    )
}
