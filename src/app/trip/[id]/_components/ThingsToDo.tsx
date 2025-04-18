'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const ThingsToDoCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="backdrop-blur-md bg-white/50 rounded-xl overflow-visible border shadow-lg p-6 mb-8"
        >
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                    Things to do 🌆
                </h2>
            </div>
            <div className="relative z-[999]">Coming soon.</div>
        </motion.div>
    )
}
