'use client'

import { Button } from '@ui/button'
import { UserPlus } from 'lucide-react'
import { useIsMobile } from '~/hooks/use-mobile'
import { cn } from '~/lib/utils'
import Link from 'next/link'

const SignupBanner = () => {
    const isMobile = useIsMobile()

    return (
        <div
            className={cn(
                'w-full bg-gradient-to-r from-green-300 to-[#10B981] text-white py-4 transition-all duration-500 ease-in-out',
                'opacity-100 translate-y-0',
            )}
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-lg font-semibold mb-1">
                            Sign up for free to edit this trip and save
                            unlimited trips.
                        </h3>
                        <Link href="/login">
                            <Button className="w-full sm:w-auto px-6 bg-white text-[#0EA5E9] hover:bg-white/90">
                                <UserPlus className="w-4 h-4 mr-2" />
                                {isMobile ? 'Sign up' : 'Sign up for free'}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupBanner
