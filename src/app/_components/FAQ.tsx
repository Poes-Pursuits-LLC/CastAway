import { HelpCircle } from 'lucide-react'
import { cn } from '~/lib/utils'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '~/components/ui/accordion'

interface FAQItem {
    question: string
    answer: string
}

const faqs: FAQItem[] = [
    {
        question: 'What fishing equipment should I bring?',
        answer: 'We recommend bringing your own rod and reel if you have them, but we provide high-quality equipment rentals at all our destinations. Specific gear recommendations will be provided based on your chosen location and target species.',
    },
    {
        question: 'Are the trips suitable for beginners?',
        answer: 'Absolutely! Our trips cater to all skill levels, from complete beginners to experienced anglers. Our expert guides provide instruction tailored to your experience level, ensuring everyone has a successful and enjoyable fishing adventure.',
    },
    {
        question: "What's included in the trip package?",
        answer: 'Our standard packages include accommodation, guided fishing sessions, equipment rental (if needed), and local transportation. Some destinations also include meals. Each package is customizable, and you can add or remove services based on your preferences.',
    },
    {
        question: "What's the best time of year for fly fishing?",
        answer: "The ideal season varies by location and target species. In general, spring and fall offer excellent fishing conditions in most destinations. When you select a location, we'll provide detailed information about the best times to visit for optimal fishing conditions.",
    },
    {
        question: 'Do I need a fishing license?',
        answer: "Yes, most destinations require a fishing license. We'll assist you in obtaining the necessary permits as part of our service, and the cost is typically included in your package price.",
    },
]

const FAQs = () => {
    return (
        <section className="w-full py-12 md:py-16">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                    <div className="inline-block p-2 bg-gradient-to-r from-water-deep/20 to-nature-deep/20 rounded-full">
                        <HelpCircle className="h-6 w-6 text-water-deep" />
                    </div>
                    <h2 className="section-title text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="section-subtitle max-w-[700px] text-gray-600 md:text-xl/relaxed">
                        Everything you need to know about planning your perfect
                        fly fishing adventure
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
