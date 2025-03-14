'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { Calendar, Compass, MapPin } from 'lucide-react'
import { MobileNav } from './TopNav.mobile'
import { DesktopNav } from './TopNav.desktop'

const navItems = [
    {
        name: 'Destinations',
        icon: <MapPin className="w-4 h-4 mr-2" />,
        link: '/#features',
    },
    {
        name: 'Trips',
        icon: <Calendar className="w-4 h-4 mr-2" />,
        link: '/#empowerment',
    },
    {
        name: 'Explore',
        icon: <Compass className="w-4 h-4 mr-2" />,
        link: '/#pricing',
    },
]

export const TopNav = () => {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollY } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    })
    const [visible, setVisible] = useState<boolean>(false)

    useMotionValueEvent(scrollY, 'change', (latest) => {
        if (latest > 100) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    })

    return (
        <motion.div ref={ref} className="w-full fixed top-0 inset-x-0 z-50">
            <DesktopNav visible={visible} navItems={navItems} />
            <MobileNav visible={visible} navItems={navItems} />
        </motion.div>
    )
}
