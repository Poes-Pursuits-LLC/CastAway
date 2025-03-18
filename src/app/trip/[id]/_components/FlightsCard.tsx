'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FlightPicker } from './FlightPicker'

export const FlightCard = (props: { airportCityRec: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="backdrop-blur-md bg-white/50 rounded-xl overflow-visible border shadow-lg p-6 mb-8"
        >
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                    Flights 🛫
                </h2>
            </div>
            <p className="text-gray-700 mb-4">
                We recommend flying into {props.airportCityRec}.
            </p>
            <div className="relative z-[999]">
                <FlightPicker />
            </div>
        </motion.div>
    )
}
