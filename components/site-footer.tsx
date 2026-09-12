"use client"
import Image from "next/image"
import { useLang } from "@/lib/i18n"
export function SiteFooter() {
  const { t } = useLang()
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 md:flex-row md:px-6">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <Image
            src="/images/academe-fund-logo.png"
            alt="AcadeMe.Fund"
            width={1942}
            height={475}
            className="h-7 w-auto"
          />
          <p className="text-sm text-muted-foreground">{t.footer.tagline}</p>
        </div>
        <div className="flex flex-col items-center gap-4 md:items-end">
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {t.footer.links.map((link) => (
              <a key={link} href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {link}
              </a>
            ))}
          </nav>
          <div className="flex flex-wrap items-center justify-center gap-3">
            
              href="/institutions.html"
              className="rounded-full border border-primary px-4 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              למוסדות אקדמיים
            </a>
            
              href="/partners.html"
              className="rounded-full border border-primary px-4 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              לגופים פיננסיים ופילנתרופיים
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-4">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} AcadeMe.Fund. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
