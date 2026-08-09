"use client"

import Image from "next/image"
import { CheckCircle2, HandHeart } from "lucide-react"
import { useLang } from "@/lib/i18n"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Guidance() {
  const { t } = useLang()
  const isRtl = t.dir === "rtl"

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className={`relative ${isRtl ? "lg:order-2" : ""}`}>
          <div className="overflow-hidden rounded-3xl border border-border shadow-xl">
            <Image
              src="/images/advisor.png"
              alt={
                isRtl
                  ? "יועץ סיוע כלכלי מלווה סטודנט מול מחשב"
                  : "Financial-aid advisor guiding a student at a laptop"
              }
              width={640}
              height={520}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className={isRtl ? "text-right" : "text-left"}>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <HandHeart className="h-4 w-4" aria-hidden="true" />
            {t.guidance.badge}
          </span>
          <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
            {t.guidance.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            {t.guidance.body}
          </p>

          <ul className="mt-6 space-y-3">
            {t.guidance.points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <span className="text-foreground">{p}</span>
              </li>
            ))}
          </ul>

          <a
            href="#start"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-8 bg-primary text-primary-foreground hover:bg-primary/90",
            )}
          >
            {t.guidance.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
