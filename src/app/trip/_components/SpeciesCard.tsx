import { motion } from 'framer-motion'
import { CardContent } from '@ui/card'

export interface FishSpecies {
    id: string
    name: string
    image: string
    description: string
    averageSize: string
    tactics: string[]
    season: string
}

interface FishSpeciesProps {
    species: {
        id: string
        name: string
        image: string
        description: string
        averageSize: string
        tactics: string[]
        season: string
    }
}

const FishSpeciesCard = ({ species }: FishSpeciesProps) => {
    return (
        <motion.div
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="glass-morphism overflow-hidden rounded-xl shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300"
        >
            <div className="relative">
                <div className="h-48 overflow-hidden">
                    <img
                        src={species.image}
                        alt={species.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold  drop-shadow-lg">
                        {species.name}
                    </h3>
                    <p className="text-sm">{species.averageSize}</p>
                </div>
            </div>

            <CardContent className="p-5">
                <p className="mb-3 text-sm">{species.description}</p>

                <div className="mb-3">
                    <h4 className="text-sm font-semibold  mb-1">
                        Best Tactics:
                    </h4>
                    <ul className="list-disc list-inside text-xs space-y-1">
                        {species.tactics.map((tactic, index) => (
                            <li key={index}>{tactic}</li>
                        ))}
                    </ul>
                </div>

                <div className="text-xs">
                    <span className="font-semibold ">Best Season: </span>
                    <span>{species.season}</span>
                </div>
            </CardContent>
        </motion.div>
    )
}

export default FishSpeciesCard
