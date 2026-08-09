"use client"

import { ArrowRight, Clock } from "lucide-react"
import { useLang } from "@/lib/i18n"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function FinalCta() {
  const { t } = useLang()
  const isRtl = t.dir === "rtl"

  return (
    <section id="start" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 text-center shadow-lg md:px-12">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />
        <h2 className="mx-auto max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-foreground text-balance md:text-4xl">
          {t.finalCta.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          {t.finalCta.body}
        </p>
        <a
          href="#top"
          className={cn(
            buttonVariants({ size: "lg" }),
            "group mt-8 gap-2 bg-primary text-base text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90",
          )}
        >
          {t.finalCta.button}
          <ArrowRight
            className={`h-4 w-4 transition-transform group-hover:translate-x-0.5 ${isRtl ? "rotate-180 group-hover:-translate-x-0.5" : ""}`}
            aria-hidden="true"
          />
        </a>
        <p className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
          {t.finalCta.note}
        </p>
      </div>
    </section>
  )
}
