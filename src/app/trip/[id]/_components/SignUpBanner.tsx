'use client'

import { motion } from 'framer-motion'
import { Button } from '~/ui/button'
import { useRouter } from 'next/navigation'
import { useIsMobile } from '~/hooks/use-mobile'

export const SignupBanner = () => {
    const router = useRouter()
    const isMobile = useIsMobile()

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 z-50 p-2 bg-white/30 backdrop-blur-md border-b shadow-lg"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
            <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                    <h3 className="text-md font-semibold text-gray-900">
                        Want to plan more free trips?
                    </h3>
                    {!isMobile && (
                        <p className="text-sm text-gray-600">
                            Sign up to create, save, and manage unlimited trips
                            for free!
                        </p>
                    )}
                </div>
                <Button
                    className="w-full sm:w-auto bg-gradient-to-r from-[#0EA5E9] to-[#10B981] text-white"
                    size="lg"
                    onClick={() => router.push('/login')}
                >
                    Sign Up
                </Button>
            </div>
        </motion.div>
    )
}

export default SignupBanner
