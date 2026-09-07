"use client"

import { useState } from "react"
import { ArrowRight, Lock } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// ⚠️ עדכנו כאן את רשימת קודי הקופון התקפים
const VALID_COUPONS = [
  "SCHOLAR2026",
  "STUDENT100",
  // הוסיפו כאן קודים נוספים במידת הצורך
]

const MAX_ATTEMPTS = 3
const QUIZ_URL = "https://quiz.academe.fund/"
const PAYMENT_URL = "https://pay.grow.link/MTA1NDUw~7b4f73ba71d93158b6a041a76a2d9440-Mzk1OTg3NQ"

export default function CouponPage() {
  const [code, setCode] = useState("")
  const [attemptsLeft, setAttemptsLeft] = useState(MAX_ATTEMPTS)
  const [error, setError] = useState("")
  const [isLocked, setIsLocked] = useState(false)
  const [isChecking, setIsChecking] = useState(false)

  function normalize(value: string) {
    return value.trim().toUpperCase()
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (isLocked || isChecking) return

    setIsChecking(true)
    setError("")

    const normalizedCode = normalize(code)
    const isValid = VALID_COUPONS.some((c) => normalize(c) === normalizedCode)

    if (isValid) {
      window.location.href = QUIZ_URL
      return
    }

    const remaining = attemptsLeft - 1
    setAttemptsLeft(remaining)
    setIsChecking(false)
    setCode("")

    if (remaining <= 0) {
      setIsLocked(true)
    } else {
      setError(`קוד קופון שגוי. נותרו לך ${remaining} ${remaining === 1 ? "ניסיון" : "ניסיונות"}.`)
    }
  }

  return (
    <div dir="rtl" className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-secondary/60 via-background to-background" />

      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-border bg-card p-8 text-center shadow-lg md:p-10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />

        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
          <Lock className="h-5 w-5 text-primary" aria-hidden="true" />
        </div>

        <h1 className="font-heading text-2xl font-extrabold tracking-tight text-foreground text-balance">
          הזינו קוד קופון
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground text-pretty">
          כדי להתחיל את השאלון, יש להזין קוד קופון תקף.
        </p>

        {!isLocked ? (
          <form onSubmit={handleSubmit} className="mt-8">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="קוד קופון"
              disabled={isChecking}
              autoFocus
              className={cn(
                "w-full rounded-xl border bg-background px-4 py-3 text-center text-base tracking-wide text-foreground outline-none transition-colors",
                error ? "border-destructive" : "border-border focus:border-primary",
              )}
            />

            {error && <p className="mt-3 text-sm text-destructive">{error}</p>}

            <button
              type="submit"
              disabled={isChecking || code.trim().length === 0}
              className={cn(
                buttonVariants({ size: "lg" }),
                "group mt-6 w-full gap-2 bg-primary text-base text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 disabled:opacity-60",
              )}
            >
              {isChecking ? "בודק..." : "המשיכו לשאלון"}
              <ArrowRight
                className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-0.5"
                aria-hidden="true"
              />
            </button>
          </form>
        ) : (
          <p className="mt-8 text-sm leading-relaxed text-destructive">
            הגעתם למספר המקסימלי של ניסיונות.
            <br />
            יש לרענן את הדף כדי לנסות שוב.
          </p>
        )}

        <a
          href={PAYMENT_URL}
          className="mt-6 block text-sm font-medium text-muted-foreground underline underline-offset-4 hover:text-primary"
        >
          אין לי קוד קופון
        </a>
      </div>
    </div>
  )
}
