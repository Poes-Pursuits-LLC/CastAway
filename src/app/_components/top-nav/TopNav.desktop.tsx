import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { cn } from '~/lib/utils'
import { Logo } from '../Logo'
import Link from 'next/link'
import { Button } from '@ui/button'
import { useRouter } from 'next/navigation'

export const DesktopNav = (props: {
    navItems: {
        name: string
        link: string | null
        scrollTo: string | null
        icon: React.JSX.Element
    }[]
    visible: boolean
}) => {
    const [hovered, setHovered] = useState<number | null>(null)
    const router = useRouter()

    return (
        <motion.div
            onMouseLeave={() => {
                setHovered(null)
            }}
            animate={{
                backdropFilter: props.visible ? 'blur(10px)' : 'none',
                boxShadow: props.visible
                    ? '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
                    : 'none',
                width: props.visible ? '40%' : '100%',
                y: props.visible ? 20 : 0,
            }}
            transition={{
                type: 'spring',
                stiffness: 200,
                damping: 50,
            }}
            style={{
                minWidth: '800px',
            }}
            className={cn(
                'hidden lg:flex flex-row  self-start bg-transparent dark:bg-transparent items-center justify-between py-2 max-w-7xl mx-auto px-4 rounded-full relative z-[60] w-full',
                props.visible && 'bg-white/80 dark:bg-neutral-950/80',
            )}
        >
            <div className="flex gap-x-4 justify-center items-center">
                <Logo />
            </div>
            <motion.div className="lg:flex flex-row flex-1 absolute inset-0 hidden items-center justify-center space-x-2 lg:space-x-2 text-sm text-zinc-600 font-medium hover:text-zinc-800 transition duration-200">
                {props.navItems.map((navItem, idx: number) => (
                    <Link
                        onMouseEnter={() => setHovered(idx)}
                        className="text-neutral-600 dark:text-neutral-300 relative px-4 py-2"
                        key={`link=${idx}`}
                        href={
                            navItem.scrollTo
                                ? `/#${navItem.scrollTo}`
                                : navItem.link!
                        }
                    >
                        {hovered === idx && (
                            <motion.div
                                layoutId="hovered"
                                className="w-full h-full absolute inset-0 bg-gray-100 dark:bg-neutral-800 rounded-full"
                            />
                        )}
                        <span className="flex flex-row items-center justify-center gap-2 relative z-20">
                            {navItem.icon}
                            {navItem.name}
                        </span>
                    </Link>
                ))}
            </motion.div>
            <AnimatePresence mode="popLayout" initial={false}>
                {!props.visible && (
                    <motion.div
                        initial={{
                            x: 100,
                            opacity: 0,
                        }}
                        animate={{
                            x: 0,
                            opacity: [0, 0, 1],
                        }}
                        exit={{
                            x: 100,
                            opacity: [0, 0, 0],
                        }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeOut',
                        }}
                    />
                )}
            </AnimatePresence>
            <Link href="/login">
                <Button
                    variant="default"
                    onClick={() => router.push('/login')}
                    size="sm"
                    className="justify-start bg-gradient-to-r from-[#0EA5E9] to-[#10B981] pointer"
                >
                    Sign In/Up
                </Button>
            </Link>
        </motion.div>
    )
}
