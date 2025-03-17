import { useState, useEffect } from 'react'
import { Progress } from '@ui/progress'
import { Button } from '@ui/button'
import Link from 'next/link'
import { FlipWords } from '~/ui/flipwords'

const loadingPhrases = [
    'Generating your trip details...',
    'Crafting your packing list...',
    'Analyzing weather patterns...',
    'Selecting the best flies...',
    'Generating your trip itinerary...',
]

export const LoadingProgress = (props: { tripId: number }) => {
    const [progress, setProgress] = useState(0)
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        const totalDuration = 30000
        const intervalTime = 200
        const steps = totalDuration / intervalTime
        const increment = 100 / steps

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setIsComplete(true)
                    return 100
                }
                return Math.min(prev + increment, 100)
            })
        }, intervalTime)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="max-w-md mx-auto p-6 flex flex-col items-center justify-center">
            <h3 className="h-12 mb-4 relative text-gray-700 text-xl">
                {isComplete ? (
                    'Your trip is ready!'
                ) : (
                    <div className="flex flex-col items-center justify-center gap-4">
                        <FlipWords words={loadingPhrases} />
                        <span className="text-red-500 text-sm">
                            Please do not refresh the page.
                        </span>
                    </div>
                )}
            </h3>
            <div className="max-w-md w-full mx-auto p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
                <Progress value={progress} className="h-2 w-full bg-gray-200" />
                {isComplete && (
                    <Link href={`trip/${props.tripId}`}>
                        <Button className=" mt-8 bg-gradient-to-r from-[#0EA5E9] to-[#10B981] text-white">
                            View Your Trip
                        </Button>
                    </Link>
                )}
            </div>
        </div>
    )
}
