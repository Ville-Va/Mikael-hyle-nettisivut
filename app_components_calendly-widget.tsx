'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export function CalendlyWidget() {
  useEffect(() => {
    // Ensure Calendly is loaded before trying to initialize
    if ((window as any).Calendly) {
      ;(window as any).Calendly.initInlineWidget({
        url: 'https://calendly.com/mikael-fluentaleads/30min?hide_gdpr_banner=1&month=2025-01&date=2025-01-17',
        parentElement: document.getElementById('calendly-inline-widget'),
        prefill: {},
        utm: {}
      })
    }
  }, [])

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      <div 
        id="calendly-inline-widget"
        style={{ minWidth: "320px", height: "700px" }}
      />
    </>
  )
}

