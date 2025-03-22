'use client'

import { motion } from 'framer-motion'
import { Button } from '~/ui/button'
import { useRouter } from 'next/navigation'
import { cn } from '~/lib/utils'

export const UserBanner = (props: { maxTripsPlanned?: boolean }) => {
    const router = useRouter()

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 z-50 p-2 bg-white/30 backdrop-blur-md border-b shadow-lg"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
            <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="text-center sm:text-left">
                    <h3
                        className={cn(
                            'text-md font-semibold text-gray-900',
                            props.maxTripsPlanned && 'text-red-500',
                        )}
                    >
                        {props.maxTripsPlanned &&
                            'You have reached the maximum number of free trips.'}
                    </h3>
                </div>
                <div className="flex flex-row md:flex-col gap-2">
                    <Button
                        className="w-full bg-gradient-to-r from-[#0EA5E9] to-[#10B981] text-white"
                        size="sm"
                        onClick={() => router.push('/dashboard')}
                    >
                        Back to Dashboard
                    </Button>
                    <Button
                        className="w-full bg-gradient-to-r from-[#0EA5E9] to-[#10B981] text-white"
                        size="sm"
                        variant="outline"
                    >
                        Upgrade Now
                    </Button>
                </div>
            </div>
        </motion.div>
    )
}

export default UserBanner
