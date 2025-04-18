import CTA from './CTA'
import FAQ from './FAQ'
import Footer from './Footer'
import Hero from './Hero'
import Destinations from './destinations/Destinations'
import { TopNav } from './top-nav/TopNav'

export const LandingPage = () => {
    return (
        <main className="min-h-screen flex flex-col">
            <TopNav />
            <Hero />
            <div id="main-content container mx-auto px-4 py-12">
                <Destinations />
                <FAQ />
                <CTA />
                <Footer />
            </div>
        </main>
    )
}
