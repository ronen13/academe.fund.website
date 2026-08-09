"use client"

import { ClipboardList, Search, HeartHandshake } from "lucide-react"
import { useLang } from "@/lib/i18n"

const icons = [ClipboardList, Search, HeartHandshake]

export function HowItWorks() {
  const { t } = useLang()

  return (
    <section id="how" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
          {t.how.heading}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          {t.how.subheading}
        </p>
      </div>

      <ol className="mt-14 grid gap-6 md:grid-cols-3">
        {t.how.steps.map((step, i) => {
          const Icon = icons[i]
          return (
            <li
              key={step.title}
              className="relative rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="absolute -top-4 flex h-9 w-9 items-center justify-center rounded-full bg-accent font-heading text-sm font-bold text-accent-foreground shadow ltr:left-7 rtl:right-7">
                {i + 1}
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
