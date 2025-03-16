import React from 'react'
import { motion } from 'framer-motion'
import { FlightPicker } from './FlightPicker'

export const FlightCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="backdrop-blur-md bg-white/75 rounded-xl overflow-visible border shadow-lg p-6 mb-8"
        >
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                    Flights 🛫
                </h2>
            </div>
            <div className="relative z-[999]">
                <FlightPicker />
            </div>
        </motion.div>
    )
}
