"use client"

import { Quote, Star } from "lucide-react"
import { useLang } from "@/lib/i18n"

export function Testimonials() {
  const { t } = useLang()

  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
            {t.testimonials.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80 text-pretty">
            {t.testimonials.subheading}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.testimonials.items.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-2xl bg-primary-foreground/10 p-7 ring-1 ring-primary-foreground/15 backdrop-blur-sm"
            >
              <Quote className="h-7 w-7 text-accent" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 leading-relaxed text-primary-foreground/95">
                {item.quote}
              </blockquote>
              <div className="mt-5 flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <figcaption className="mt-3">
                <p className="font-heading font-bold">{item.name}</p>
                <p className="text-sm text-primary-foreground/70">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
