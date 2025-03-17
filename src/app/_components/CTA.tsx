import { ArrowRight } from 'lucide-react'
import { Button } from '@ui/button'
import Link from 'next/link'

const CallToAction = () => {
    return (
        <section className="w-full pt-16 md:pt-24">
            <div
                className="w-full px-4 text-center relative bg-gradient-to-t from-black/75 via-black/20 to-transparent"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1698166738104-bad02321cc3b?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundBlendMode: 'overlay',
                }}
            >
                <div className="relative py-16 md:py-20 px-4 rounded-xl">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                        Ready to get started?
                    </h2>

                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
                        Save time and money planning your fly fishing adventures
                        with us. Always free.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
                        <Link href="/plan-trip">
                            <Button className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white px-8 py-6 h-auto text-lg">
                                Plan your first trip
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction
