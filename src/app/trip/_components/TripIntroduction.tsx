import React from 'react'
import { motion } from 'framer-motion'

export const TripIntroduction = () => {
    return (
        <div className="backdrop-blur-md bg-white/30 rounded-xl overflow-hidden border border-white/30 shadow-lg p-6 mb-8">
            <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4"
            >
                A Bahamanian Trip
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-800"
            >
                Experience the crystal clear waters and pristine beaches of the
                Bahamas. This trip offers the perfect blend of relaxation and
                adventure for fly fishing enthusiasts.
            </motion.p>
        </div>
    )
}
