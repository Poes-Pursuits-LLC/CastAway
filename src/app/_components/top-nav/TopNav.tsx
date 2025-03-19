'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { Calendar, CircleHelp, MapPin } from 'lucide-react'
import { MobileNav } from './TopNav.mobile'
import { DesktopNav } from './TopNav.desktop'

const navItems = [
    {
        name: 'Destinations',
        icon: <MapPin className="w-4 h-4 mr-2" />,
        scrollTo: 'destinations',
        link: null,
    },
    {
        name: 'My Trips',
        icon: <Calendar className="w-4 h-4 mr-2" />,
        scrollTo: null,
        link: '/login',
    },
    {
        name: 'FAQ',
        icon: <CircleHelp className="w-4 h-4 mr-2" />,
        scrollTo: 'faq',
        link: null,
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
