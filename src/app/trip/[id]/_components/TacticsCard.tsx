'use client'

import { motion } from 'framer-motion'
import { Label } from '@ui/label'
import { Separator } from '@ui/separator'
import { TacticItem, TacticTypeEnum } from '~/core/fishing-tactics/tactic.model'

export const TacticsCard = (props: {
    tactics: TacticItem[]
    summary: string
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="backdrop-blur-md bg-white/50 rounded-xl overflow-hidden border shadow-lg p-6 mb-8"
        >
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                    Fishing 🎣
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Flies to Try
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {props.tactics
                            .filter(({ type }) => type === TacticTypeEnum.Fly)
                            .map((fly, index) => (
                                <Label
                                    key={index}
                                    className="bg-blue-500/10 text-blue-700 px-3 py-1 rounded-full text-sm"
                                >
                                    {fly.name}
                                </Label>
                            ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Techniques
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {props.tactics
                            .filter(
                                ({ type }) => type === TacticTypeEnum.Method,
                            )
                            .map((fly, index) => (
                                <Label
                                    key={index}
                                    className="bg-red-400/10 text-red-600 px-3 py-1 rounded-full text-sm"
                                >
                                    {fly.name}
                                </Label>
                            ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Weather Conditions
                    </h3>
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                            {props.tactics
                                .filter(
                                    ({ type }) =>
                                        type === TacticTypeEnum.Weather,
                                )
                                .map((weather, index) => (
                                    <Label
                                        key={index}
                                        className="bg-amber-400/10 text-amber-600 px-3 py-1 rounded-full text-sm"
                                    >
                                        {weather.name}
                                    </Label>
                                ))}
                        </div>
                    </div>
                </div>

                <div className="md:col-span-2">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Time of Day
                    </h3>
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                            {props.tactics
                                .filter(
                                    ({ type }) =>
                                        type === TacticTypeEnum.TimeOfDay,
                                )
                                .map((time, index) => (
                                    <Label
                                        key={index}
                                        className="bg-purple-400/10 text-purple-600 px-3 py-1 rounded-full text-sm"
                                    >
                                        {time.name}
                                    </Label>
                                ))}
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                Hatch
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {props.tactics
                                    .filter(
                                        ({ type }) =>
                                            type === TacticTypeEnum.Hatch,
                                    )
                                    .map((fly, index) => (
                                        <Label
                                            key={index}
                                            className="bg-yellow-/10 text-yellow-600 px-3 py-1 rounded-full text-sm"
                                        >
                                            {fly.name}
                                        </Label>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:col-span-2">
                <Separator className="my-6" />
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Guide Advice:
                </h3>
                <p className="text-gray-700 leading-relaxed">{props.summary}</p>
            </div>
        </motion.div>
    )
}
