import React, { useRef } from 'react'
import Script from 'next/script'

export const FlightPicker = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    const moveWidget = () => {
        const widget = document.querySelector(
            'tp-cascoon[data-cascoon-id="4132_0"]',
        )
        if (widget && containerRef.current) {
            containerRef.current.appendChild(widget)
        } else {
            console.log('Widget or container not found')
        }
    }

    return (
        <div ref={containerRef}>
            <Script
                src="https://tp.media/content?trs=398838&shmarker=615207&locale=en&curr=USD&powered_by=true&border_radius=0&plain=true&color_button=%2310B981&color_button_text=%23ffffff&color_border=%232681ff&promo_id=4132&campaign_id=121&border_radius=10"
                onReady={() => {
                    moveWidget()
                }}
            />
        </div>
    )
}
