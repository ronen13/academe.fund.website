"use client"

import { Compass, Users, ShieldCheck, Clock } from "lucide-react"
import { useLang } from "@/lib/i18n"

const icons = [Compass, Users, ShieldCheck, Clock]

export function ValueProps() {
  const { t } = useLang()

  return (
    <section id="why" className="bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
            {t.why.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            {t.why.subheading}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {t.why.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
