import '~/styles/globals.css'

import { type Metadata } from 'next'
import { TRPCReactProvider } from '~/server/trpc/react'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
    title: 'Roam.Fish',
    description: 'Plan your next trip for free',
}

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${inter.className}`}>
            <body>
                <ClerkProvider>
                    <TRPCReactProvider>{children}</TRPCReactProvider>
                </ClerkProvider>
            </body>
        </html>
    )
}
