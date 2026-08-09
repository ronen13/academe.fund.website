"use client"

import { LanguageProvider } from "@/lib/i18n"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { HowItWorks } from "@/components/how-it-works"
import { ValueProps } from "@/components/value-props"
import { Guidance } from "@/components/guidance"
import { Testimonials } from "@/components/testimonials"
import { Faq } from "@/components/faq"
import { FinalCta } from "@/components/final-cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Hero />
          <TrustBar />
          <HowItWorks />
          <ValueProps />
          <Guidance />
          <Testimonials />
          <Faq />
          <FinalCta />
        </main>
        <SiteFooter />
      </div>
    </LanguageProvider>
  )
}
