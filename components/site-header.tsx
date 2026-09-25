"use client"
import { useState } from "react"
import Image from "next/image"
import { Languages, ChevronDown } from "lucide-react"
import { useLang, type Lang } from "@/lib/i18n"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const LANG_LABELS: Record<Lang, string> = { he: "עברית", en: "English", ar: "العربية" }

export function SiteHeader() {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <a href="#top" className="flex items-center gap-2">
          <Image src="/images/academe-fund-logo.png" alt="AcadeMe.Fund" width={1942} height={475} priority className="h-8 w-auto md:h-9" />
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          <a href="#how" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{t.nav.how}</a>
          <a href="#why" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{t.nav.why}</a>
          <a href="#trust" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{t.nav.trust}</a>
          <a href="#faq" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{t.nav.faq}</a>
          <a href="/institutions.html" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">למוסדות אקדמיים</a>
          <a href="/partners.html" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">לגופים פיננסיים ופילנתרופיים</a>
        </nav>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Button variant="ghost" size="sm" onClick={() => setOpen((v) => !v)} className="gap-1.5 text-muted-foreground hover:text-foreground" aria-label="Choose language" aria-expanded={open}>
              <Languages className="h-4 w-4" aria-hidden="true" />
              <span className="text-sm font-semibold">{LANG_LABELS[lang]}</span>
              <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
            </Button>
            {open && (
              <div className="absolute end-0 top-full z-50 mt-1 w-32 overflow-hidden rounded-md border border-border bg-popover shadow-md">
                {(Object.keys(LANG_LABELS) as Lang[]).map((code) => (
                  <button key={code} onClick={() => { setLang(code); setOpen(false); }} className={cn("block w-full px-3 py-2 text-start text-sm hover:bg-accent hover:text-accent-foreground", lang === code && "font-semibold text-primary")}>
                    {LANG_LABELS[code]}
                  </button>
                ))}
              </div>
            )}
          </div>
          <a href="/coupon" className={cn(buttonVariants({ size: "sm" }), "hidden bg-primary text-primary-foreground hover:bg-primary/90 sm:inline-flex")}>{t.nav.cta}</a>
        </div>
      </div>
    </header>
  )
}
