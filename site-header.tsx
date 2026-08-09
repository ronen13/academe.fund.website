"use client"

import { GraduationCap, Languages } from "lucide-react"
import { useLang } from "@/lib/i18n"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const { lang, setLang, t } = useLang()

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-heading text-lg font-bold tracking-tight text-foreground">
            AcadeMe<span className="text-accent">.Fund</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          <a href="#how" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            {t.nav.how}
          </a>
          <a href="#why" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            {t.nav.why}
          </a>
          <a href="#trust" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            {t.nav.trust}
          </a>
          <a href="#faq" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            {t.nav.faq}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLang(lang === "he" ? "en" : "he")}
            className="gap-1.5 text-muted-foreground hover:text-foreground"
            aria-label={lang === "he" ? "Switch to English" : "החלף לעברית"}
          >
            <Languages className="h-4 w-4" aria-hidden="true" />
            <span className="text-sm font-semibold">{lang === "he" ? "EN" : "עב"}</span>
          </Button>
          <a
            href="#start"
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden bg-primary text-primary-foreground hover:bg-primary/90 sm:inline-flex",
            )}
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  )
}
