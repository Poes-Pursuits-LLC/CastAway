import CTA from './CTA'
import FAQ from './FAQ'
import Footer from './Footer'
import Hero from './Hero'
import Locations from './Locations'
import { TopNav } from './top-nav/TopNav'

export const LandingPage = () => {
    return (
        <main className="min-h-screen flex flex-col">
            <TopNav />
            <Hero />
            <div id="main-content container mx-auto px-4 py-12">
                <Locations />
                <FAQ />
                <CTA />
                <Footer />
            </div>
        </main>
    )
}
