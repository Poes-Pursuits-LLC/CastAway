'use client'

import React from 'react'
import { Wallet, DollarSign } from 'lucide-react'
import { Separator } from '~/ui/separator'
import { Card, CardContent } from '~/ui/card'
import { cn } from '~/lib/utils'

interface BudgetItem {
    id: string
    description: string
    cost: number
    category:
        | 'travel'
        | 'accommodation'
        | 'activities'
        | 'food'
        | 'equipment'
        | 'other'
}

interface BudgetCardProps {
    className?: string
}

const mockBudgetItems: BudgetItem[] = [
    { id: 'b1', description: 'Flight tickets', cost: 425, category: 'travel' },
    {
        id: 'b2',
        description: 'Hotel (5 nights)',
        cost: 1250,
        category: 'accommodation',
    },
    {
        id: 'b3',
        description: 'Fishing guide (2 days)',
        cost: 600,
        category: 'activities',
    },
    { id: 'b4', description: 'Car rental', cost: 320, category: 'travel' },
    { id: 'b5', description: 'Meals', cost: 400, category: 'food' },
    {
        id: 'b6',
        description: 'Fishing permit',
        cost: 50,
        category: 'equipment',
    },
    { id: 'b7', description: 'Gear rental', cost: 120, category: 'equipment' },
    { id: 'b8', description: 'Souvenirs', cost: 100, category: 'other' },
]

const BudgetCard = ({ className }: BudgetCardProps) => {
    // Calculate total budget
    const totalBudget = mockBudgetItems.reduce(
        (total, item) => total + item.cost,
        0,
    )

    return (
        <Card
            className={cn(
                'backdrop-blur-md bg-white/30 border border-white/30 shadow-lg',
                className,
            )}
        >
            <CardContent className="p-6">
                <div className="flex items-center mb-4">
                    <Wallet className="mr-2 h-5 w-5 text-[#0EA5E9]" />
                    <h3 className="text-lg font-semibold">Trip Budget</h3>
                </div>

                <Separator className="mb-4" />

                <div className="space-y-3">
                    {mockBudgetItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center"
                        >
                            <span className="text-gray-700">
                                {item.description}
                            </span>
                            <span className="font-medium text-gray-800">
                                ${item.cost}
                            </span>
                        </div>
                    ))}
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-800">Total</span>
                    <span className="font-bold text-lg text-[#0EA5E9] flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {totalBudget}
                    </span>
                </div>
            </CardContent>
        </Card>
    )
}

export default BudgetCard
