import { HelpCircle } from 'lucide-react'
import { cn } from '~/lib/utils'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@ui/accordion'

interface FAQItem {
    question: string
    answer: string
}

const faqs: FAQItem[] = [
    {
        question: 'How does it work?',
        answer: "It's simple. You specify your desired destination, the amount of people going, when you want to go, and what fish you want to target, and we'll do the rest. A custom trip with flights, accommodations, a packing list, and fly-fishing specific information like flies, weather, and tactics will be generated for you in under thirty seconds.",
    },
    {
        question: 'Why not just use Yellow Dog etc.?',
        answer: 'Yellow Dog is an amazing service and everyone should use them. That being said, they tend to focus on expensive, all-inclusive lodge experiences which may have 3-day minimums. Roam, on the other hand, gives you immediate information as a starting point as well as tools to plan your trip, filling the niche for your DIY and budget-friendly trips.',
    },
    {
        question: 'I made my first trip. Now what?',
        answer: 'Once you have made your free trip, you can sign up to create unlimited trips, save them, and use our trip management tools.',
    },
    {
        question: 'How much does it cost?',
        answer: 'Roam is completely free to use. A fully optional paid plan will be available to unlock advanced features.',
    },
]

const FAQs = () => {
    return (
        <section id="faq" className="w-full py-12 md:py-16">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                    <div className="inline-block p-2 bg-gradient-to-r from-[#0EA5E9]/20 to-[#10B981]/20 rounded-full">
                        <HelpCircle className="h-6 w-6 text-[#0EA5E9]" />
                    </div>
                    <h2 className="section-title text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="section-subtitle max-w-[700px] text-gray-600 md:text-xl/relaxed">
                        Everything you need to know about planning your perfect
                        fly fishing adventures.
                    </p>
                </div>

                <div className="mx-auto max-w-3xl">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className={cn(
                                    'backdrop-blur-sm bg-white/40 mb-4 rounded-lg border border-white/30 overflow-hidden',
                                    'hover:bg-white/50 transition-all duration-200',
                                )}
                            >
                                <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-800 hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-4 pt-0 text-gray-700">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default FAQs
