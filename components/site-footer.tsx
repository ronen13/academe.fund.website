"use client"

import { GraduationCap } from "lucide-react"
import { useLang } from "@/lib/i18n"

export function SiteFooter() {
  const { t } = useLang()

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 md:flex-row md:px-6">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="font-heading text-base font-bold text-foreground">
              AcadeMe<span className="text-accent">.Fund</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{t.footer.tagline}</p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {t.footer.links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-border py-4">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} AcadeMe.Fund. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
