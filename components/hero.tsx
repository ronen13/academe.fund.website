"use client"

import Image from "next/image"
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react"
import { useLang } from "@/lib/i18n"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Hero() {
  const { t } = useLang()
  const isRtl = t.dir === "rtl"

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-secondary/60 via-background to-background" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2">
        <div className={isRtl ? "text-right" : "text-left"}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
            <Sparkles className="h-4 w-4 text-accent" aria-hidden="true" />
            {t.hero.badge}
          </span>

          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-tight tracking-tight text-foreground text-balance md:text-6xl">
            {t.hero.title}{" "}
            <span className="text-accent">{t.hero.titleAccent}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#start"
              className={cn(
                buttonVariants({ size: "lg" }),
                "group gap-2 bg-primary text-base text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90",
              )}
            >
              {t.hero.primaryCta}
              <ArrowRight
                className={`h-4 w-4 transition-transform group-hover:translate-x-0.5 ${isRtl ? "rotate-180 group-hover:-translate-x-0.5" : ""}`}
                aria-hidden="true"
              />
            </a>
            <a
              href="#how"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "text-base")}
            >
              {t.hero.secondaryCta}
            </a>
          </div>

          <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
            {t.hero.note}
          </p>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10">
            <Image
              src="/images/hero-students.png"
              alt={
                isRtl
                  ? "סטודנטים מחייכים משתפים פעולה בקמפוס"
                  : "Smiling students collaborating on campus"
              }
              width={720}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          <div
            className={`absolute -bottom-6 w-64 rounded-2xl border border-border bg-card p-4 shadow-xl ${isRtl ? "-left-4 md:-left-6" : "-right-4 md:-right-6"}`}
          >
            <div className="grid grid-cols-3 gap-2 text-center">
              {t.hero.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-heading text-lg font-bold text-primary">{s.value}</p>
                  <p className="mt-1 text-[11px] leading-tight text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
