'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const TripIntroduction = (props: { description: string }) => {
    return (
        <div className="backdrop-blur-md bg-white/50 rounded-xl overflow-hidden border shadow-lg p-6 mb-8">
            <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4"
            >
                My Trip
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-800"
            >
                {props.description}
            </motion.p>
        </div>
    )
}
