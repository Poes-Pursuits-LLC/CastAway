'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { AccommodationsPicker } from './AccommodationsPicker'

export const AccommodationsCard = (props: {
    cityOne: string | null
    cityTwo: string | null
    cityThree: string | null
}) => {
    const getRecommendationText = () => {
        const cities = [props.cityOne, props.cityTwo, props.cityThree].filter(
            Boolean,
        )

        if (cities.length === 1) {
            return `We recommend basing your trip out of ${cities[0]}.`
        }

        if (cities.length === 2) {
            return `We recommend basing your trip out of either ${cities[0]} or ${cities[1]}.`
        }

        return `We recommend basing your trip out of ${cities[0]}, ${cities[1]}, or ${cities[2]}.`
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="backdrop-blur-md bg-white/50 rounded-xl overflow-visible border shadow-lg p-6 mb-8"
        >
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                    Accommodations 🏠
                </h2>
            </div>
            <p className="text-gray-700 mb-4">{getRecommendationText()}</p>
            <div className="relative z-[999]">
                <AccommodationsPicker />
            </div>
        </motion.div>
    )
}
