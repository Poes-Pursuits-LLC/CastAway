import { motion } from 'framer-motion'
import { Label } from '@ui/label'
import { Separator } from '@ui/separator'

interface TacticsInfo {
    flies: string[]
    weather: {
        conditions: string[]
    }
    tactics: {
        methods: string[]
        timeOfDay: string[]
        hatchInfo: string[]
    }
}

const tacticsInfo: TacticsInfo = {
    flies: [
        'Gotcha #4-6',
        'Crazy Charlie #6',
        'Mantis Shrimp #4',
        'Spawning Shrimp #6',
        'Crab Patterns #2-4',
    ],
    weather: {
        conditions: ['Partly Cloudy', 'Light Chop', 'Clear Water'],
    },
    tactics: {
        methods: [
            'Strip & Pause',
            'Sight Fishing',
            'Tidal Movement',
            'Wade Deep Flats',
        ],
        timeOfDay: ['Dawn Patrol', 'Mid-Day Flats', 'Evening Drop'],
        hatchInfo: ['Glass Minnow Hatch', 'Crab Migration', 'Shrimp Activity'],
    },
}

export const TacticsCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="backdrop-blur-md bg-white/75 rounded-xl overflow-hidden border shadow-lg p-6 mb-8"
        >
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                    Fishing 🎣
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Flies Section */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Flies to Try
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {tacticsInfo.flies.map((fly, index) => (
                            <Label
                                key={index}
                                className="bg-water-deep/10 text-water-deep px-3 py-1 rounded-full text-sm"
                            >
                                {fly}
                            </Label>
                        ))}
                    </div>
                </div>

                {/* Weather Section */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Weather Conditions
                    </h3>
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                            {tacticsInfo.weather.conditions.map(
                                (condition, index) => (
                                    <Label
                                        key={index}
                                        className="bg-sky-400/10 text-sky-600 px-3 py-1 rounded-full text-sm"
                                    >
                                        {condition}
                                    </Label>
                                ),
                            )}
                        </div>
                    </div>
                </div>

                {/* Tactics Section */}
                <div className="md:col-span-2">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Fishing Tactics
                    </h3>
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                            {tacticsInfo.tactics.methods.map(
                                (method, index) => (
                                    <Label
                                        key={index}
                                        className="bg-amber-400/10 text-amber-600 px-3 py-1 rounded-full text-sm"
                                    >
                                        {method}
                                    </Label>
                                ),
                            )}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {tacticsInfo.tactics.timeOfDay.map(
                                (time, index) => (
                                    <Label
                                        key={index}
                                        className="bg-purple-400/10 text-purple-600 px-3 py-1 rounded-full text-sm"
                                    >
                                        {time}
                                    </Label>
                                ),
                            )}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {tacticsInfo.tactics.hatchInfo.map(
                                (hatch, index) => (
                                    <Label
                                        key={index}
                                        className="bg-emerald-400/10 text-emerald-600 px-3 py-1 rounded-full text-sm"
                                    >
                                        {hatch}
                                    </Label>
                                ),
                            )}
                        </div>
                    </div>
                </div>

                {/* Summary Section */}
                <div className="md:col-span-2">
                    <Separator className="my-6" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Fishing Strategy Summary
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Spring brings optimal conditions for flats fishing in
                        the Bahamas, with water temperatures perfect for active
                        bonefish and permit. Focus on dawn patrol sessions when
                        winds are calm and visibility is best. The current glass
                        minnow hatch and crab migration make small shrimp and
                        crab patterns particularly effective. Strip & pause
                        retrieves during incoming tides will be most productive,
                        especially when sight fishing the deeper flats. Keep an
                        eye on the afternoon breeze - it can help mask your
                        approach but may require adjusting your casting
                        technique.
                    </p>
                </div>
            </div>
        </motion.div>
    )
}
