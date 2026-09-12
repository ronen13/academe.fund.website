"use client"
import Image from "next/image"
import { Languages } from "lucide-react"
import { useLang } from "@/lib/i18n"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
export function SiteHeader() {
  const { lang, setLang, t } = useLang()
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
          <a href="/institutions.html" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">למוסדות</a>
          <a href="/partners.html" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">לגופים פיננסיים</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => setLang(lang === "he" ? "en" : "he")} className="gap-1.5 text-muted-foreground hover:text-foreground" aria-label={lang === "he" ? "Switch to English" : "החלף לעברית"}>
            <Languages className="h-4 w-4" aria-hidden="true" />
            <span className="text-sm font-semibold">{lang === "he" ? "EN" : "עב"}</span>
          </Button>
          <a href="/coupon" className={cn(buttonVariants({ size: "sm" }), "hidden bg-primary text-primary-foreground hover:bg-primary/90 sm:inline-flex")}>{t.nav.cta}</a>
        </div>
      </div>
    </header>
  )
}
