import { SignedIn, SignedOut, SignIn } from '@clerk/nextjs'
import Link from 'next/link'
import { Logo } from '~/app/_components/Logo'
import { cn } from '~/lib/utils'
import { Button } from '~/ui/button'

export const LoginPage = () => {
    return (
        <main className="relative flex flex-col items-center justify-center min-h-screen pt-24 pb-16 px-4 bg-amber-50/20">
            <div
                className={cn(
                    'absolute inset-0',
                    '[background-size:24px_24px]',
                    '[background-image:radial-gradient(rgba(185,28,28,0.2)_1.5px,transparent_1.5px)]',
                )}
            />
            <SignedOut>
                <Logo />
                <SignIn
                    routing="hash"
                    transferable
                    withSignUp
                    signUpForceRedirectUrl={'/dashboard'}
                    forceRedirectUrl={'/dashboard'}
                    appearance={{
                        elements: {
                            footer: 'hidden',
                        },
                    }}
                />
            </SignedOut>
            <SignedIn>
                <div className=" flex flex-col text-center justify-center items-center gap-4 backdrop-blur-md bg-white/50 rounded-xl overflow-hidden border max-w-md shadow-lg p-8 h-[350px]">
                    <Logo />
                    <p className="text-lg font-medium">
                        You are already signed in! <br />
                        Let&apos;s get you to your dashboard.
                    </p>
                    <Link href="/dashboard">
                        <Button
                            className="bg-gradient-to-r from-[#0EA5E9] to-[#10B981]"
                            variant="default"
                        >
                            Go to dashboard
                        </Button>
                    </Link>
                </div>
            </SignedIn>
        </main>
    )
}
