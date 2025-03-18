'use client'

import React, { useRef } from 'react'
import Script from 'next/script'

export const AccommodationsPicker = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    const moveWidget = () => {
        const widget = document.querySelector(
            'tp-cascoon[data-cascoon-id="7873_0"]',
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
                src="https://tp.media/content?currency=usd&trs=398838&shmarker=615207&show_hotels=false&powered_by=true&locale=en&searchUrl=search.hotellook.com&primary_override=%2310B981&color_button=%2310B981&color_icons=%2310B981&secondary=%23FFFFFF&dark=%23262626&light=%23FFFFFF&special=%23C4C4C4&color_focused=%23FF8E01&border_radius=10&no_labels=true&plain=true&promo_id=7873&campaign_id=101"
                onReady={() => {
                    moveWidget()
                }}
            />
        </div>
    )
}
