import { useState } from 'react'
import { Logo } from '../Logo'
import { MenuIcon, XIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '~/lib/utils'
import { Button } from '@ui/button'
import Link from 'next/link'

export const MobileNav = (props: {
    navItems: {
        name: string
        link: string | null
        scrollTo: string | null
    }[]
    visible: boolean
}) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <motion.div
                animate={{
                    backdropFilter: props.visible ? 'blur(10px)' : 'none',
                    boxShadow: props.visible
                        ? '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
                        : 'none',
                    width: props.visible ? '90%' : '100%',
                    y: props.visible ? 20 : 0,
                    borderRadius: open ? '4px' : '2rem',
                    paddingRight: props.visible ? '12px' : '0px',
                    paddingLeft: props.visible ? '12px' : '0px',
                }}
                transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 50,
                }}
                className={cn(
                    'flex relative flex-col lg:hidden w-full justify-between items-center bg-transparent max-w-[calc(100vw-2rem)] mx-auto px-0 py-2 z-50',
                    props.visible && 'bg-white/80 dark:bg-neutral-950/80',
                )}
            >
                <div className="flex flex-row justify-between items-center w-full">
                    <Logo />
                    {open ? (
                        <XIcon
                            className="text-black dark:text-white"
                            onClick={() => setOpen(!open)}
                        />
                    ) : (
                        <MenuIcon
                            className="text-black dark:text-white"
                            onClick={() => setOpen(!open)}
                        />
                    )}
                </div>

                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex rounded-lg absolute top-16 bg-white dark:bg-neutral-950 inset-x-0 z-50 flex-col items-start justify-start gap-4 w-full px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        >
                            {props.navItems.map((navItem, idx: number) => (
                                <Link
                                    key={`link=${idx}`}
                                    href={
                                        navItem.scrollTo
                                            ? `/#${navItem.scrollTo}`
                                            : navItem.link!
                                    }
                                    onClick={() => setOpen(false)}
                                    className="relative text-neutral-600 dark:text-neutral-300"
                                >
                                    <motion.span className="block">
                                        {navItem.name}{' '}
                                    </motion.span>
                                </Link>
                            ))}
                            <Button
                                onClick={() => setOpen(false)}
                                className="block md:hidden w-full bg-white"
                            >
                                Sign up
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    )
}
