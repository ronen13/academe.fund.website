"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useLang } from "@/lib/i18n"

export function Faq() {
  const { t } = useLang()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-20 md:px-6">
      <div className="text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
          {t.faq.heading}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          {t.faq.subheading}
        </p>
      </div>

      <div className="mt-10 space-y-3">
        {t.faq.items.map((item, i) => {
          const isOpen = open === i
          return (
            <div key={item.q} className="overflow-hidden rounded-xl border border-border bg-card">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start"
              >
                <span className="font-heading font-semibold text-foreground">{item.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 leading-relaxed text-muted-foreground">{item.a}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
