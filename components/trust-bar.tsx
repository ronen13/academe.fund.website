"use client"

import { BadgeCheck } from "lucide-react"
import { useLang } from "@/lib/i18n"

export function TrustBar() {
  const { t } = useLang()

  return (
    <section id="trust" className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          {t.trust.heading}
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.trust.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3"
            >
              <BadgeCheck className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
