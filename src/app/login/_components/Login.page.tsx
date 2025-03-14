import { SignedOut, SignIn } from '@clerk/nextjs'

export const LoginPage = () => {
    return (
        <main
            className="flex flex-col items-center justify-center min-h-screen w-full"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1643067574858-250c69a0f152?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <SignedOut>
                <SignIn
                    routing="hash"
                    transferable
                    withSignUp
                    signUpForceRedirectUrl={'/'}
                    forceRedirectUrl={'/'}
                    appearance={{
                        elements: {
                            footer: 'hidden',
                        },
                    }}
                />
            </SignedOut>
        </main>
    )
}
