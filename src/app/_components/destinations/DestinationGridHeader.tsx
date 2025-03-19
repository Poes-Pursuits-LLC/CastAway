'use client'

import { motion } from 'framer-motion'

export const DestinationGridHeader = () => {
    // Render
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
        >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold tracking-tight">
                Discover Premier Fishing Destinations
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mt-2 mx-auto">
                Select from our curated list of world-class fly fishing
                locations or search for your dream destination
            </p>
        </motion.div>
    )
}
