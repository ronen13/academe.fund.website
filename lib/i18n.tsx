"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"

export type Lang = "he" | "en"

type Content = {
  dir: "rtl" | "ltr"
  nav: { how: string; why: string; trust: string; faq: string; cta: string }
  hero: {
    badge: string
    title: string
    titleAccent: string
    subtitle: string
    primaryCta: string
    secondaryCta: string
    note: string
    stats: { value: string; label: string }[]
  }
  trust: { heading: string; items: string[] }
  how: {
    heading: string
    subheading: string
    steps: { title: string; body: string }[]
  }
  why: {
    heading: string
    subheading: string
    items: { title: string; body: string }[]
  }
  guidance: {
    badge: string
    heading: string
    body: string
    points: string[]
    cta: string
  }
  testimonials: {
    heading: string
    subheading: string
    items: { quote: string; name: string; role: string }[]
  }
  faq: {
    heading: string
    subheading: string
    items: { q: string; a: string }[]
  }
  finalCta: {
    heading: string
    body: string
    button: string
    note: string
  }
  footer: { tagline: string; rights: string; links: string[] }
}

export const content: Record<Lang, Content> = {
  he: {
    dir: "rtl",
    nav: {
      how: "איך זה עובד",
      why: "למה אנחנו",
      trust: "אמון",
      faq: "שאלות נפוצות",
      cta: "התחילו התאמה",
    },
    hero: {
      badge: "התאמה אישית למלגות וסיוע כלכלי",
      title: "הדרך החכמה וההוליסטית שלך",
      titleAccent: "למימון התואר",
      subtitle:
        "שאלון אחד שממפה עבורך את כל המלגות, מענקי המחייה והסיוע הכלכלי בישראל — בהתאמה אישית מדויקת, בשקיפות מלאה וללא עלות.",
      primaryCta: "התחילו את השאלון",
      secondaryCta: "איך זה עובד",
      note: "ללא עלות · ללא התחייבות · 4 דקות",
      stats: [
        { value: "₪240M+", label: "מלגות שממתינות לחלוקה" },
        { value: "1,800+", label: "מסלולי סיוע במאגר" },
        { value: "92%", label: "מצאו התאמה מתאימה" },
      ],
    },
    trust: {
      heading: "בונים אמון בכל שלב",
      items: [
        "הנתונים שלכם מוצפנים ונשארים שלכם",
        "מיפוי הוליסטי מבוסס נתונים",
        "שקיפות מלאה בקריטריונים",
        "ללא עמלות נסתרות",
      ],
    },
    how: {
      heading: "שלושה צעדים פשוטים",
      subheading: "בלי בירוקרטיה מיותרת — רק מה שבאמת נחוץ כדי למצוא לכם התאמה.",
      steps: [
        {
          title: "ממלאים שאלון קצר",
          body: "כמה שאלות על תחום הלימודים, המצב הכלכלי והמטרות שלכם. לוקח פחות מ־4 דקות.",
        },
        {
          title: "מקבלים התאמות אישיות",
          body: "המערכת סורקת אלפי מסלולים ומדרגת עבורכם את המלגות עם הסיכוי הגבוה ביותר.",
        },
        {
          title: "מגישים בביטחון",
          body: "לכל מלגה מוכן עבורכם checklist מותאם אישית — מה נדרש, מה הסטטוס, ומתי הדדליין.",
        },
      ],
    },
    why: {
      heading: "למה סטודנטים בוחרים ב־AcadeMe.Fund",
      subheading: "כי מגיע לכל אחד סיכוי הוגן ללמוד — בלי להיאבד בין הטפסים.",
      items: [
        {
          title: "התאמה מדויקת",
          body: "אלגוריתם שמכיר את הקריטריונים לעומק ומדרג לפי הסיכוי האמיתי שלכם.",
        },
        {
          title: "מיפוי הוליסטי",
          body: "כל מקורות המימון האפשריים במקום אחד — מלגות, מענקי מחייה וסיוע כלכלי.",
        },
        {
          title: "שקיפות מלאה",
          body: "רואים בדיוק למה הותאמתם לכל מלגה, מה נדרש ומה הסיכויים.",
        },
        {
          title: "חוסכים זמן יקר",
          body: "במקום שעות של חיפוש — רשימה ממוקדת שמחכה לכם מוכנה להגשה.",
        },
      ],
    },
    guidance: {
      badge: "התאמה אישית מלאה",
      heading: "כל מסלולי המימון שלכם, במקום אחד",
      body: "אנחנו ממפים עבורכם באופן הוליסטי את כל המלגות, מענקי המחייה וסיוע הכלכלי הרלוונטיים — וההתאמה מתדייקת ככל שאנחנו מכירים אתכם יותר.",
      points: [
        "מיפוי חכם של כל מקורות המימון בישראל",
        "דירוג לפי הסיכוי האמיתי שלכם",
        "עדכון אוטומטי כשנפתחים מסלולים חדשים",
        "ממשק אחד בעברית ובאנגלית",
      ],
      cta: "גלו את ההתאמה שלכם",
    },
    testimonials: {
      heading: "סטודנטים מספרים",
      subheading: "אלפי סטודנטים כבר מצאו את הדרך שלהם למימון.",
      items: [
        {
          quote:
            "לא ידעתי בכלל שאני זכאית למלגות. תוך כמה דקות קיבלתי רשימה מותאמת, וקיבלתי שתיים מהן.",
          name: "מאיה ל.",
          role: "סטודנטית להנדסה, שנה ב'",
        },
        {
          quote:
            "הרשימה שקיבלתי הייתה מדויקת בול למצב שלי. לא בזבזתי זמן על מלגות שלא רלוונטיות אליי.",
          name: "יוסף א.",
          role: "סטודנט למשפטים",
        },
        {
          quote:
            "חסכתי שעות על שעות של חיפושים. הכל היה מרוכז, ברור, ובלי אותיות קטנות.",
          name: "נועה כ.",
          role: "תואר שני בפסיכולוגיה",
        },
      ],
    },
    faq: {
      heading: "שאלות נפוצות",
      subheading: "כל מה שחשוב לדעת לפני שמתחילים.",
      items: [
        {
          q: "האם השירות באמת בחינם?",
          a: "כן. מילוי השאלון, ההתאמה וקבלת התוצאות ניתנים ללא עלות וללא התחייבות.",
        },
        {
          q: "מה קורה עם הנתונים שלי?",
          a: "המידע מוצפן ומשמש אך ורק לצורך ההתאמה. לעולם לא נמכור או נשתף את הנתונים שלכם.",
        },
        {
          q: "כמה זמן לוקח למלא את השאלון?",
          a: "רוב הסטודנטים מסיימים תוך פחות מ־4 דקות. אפשר גם לשמור ולהמשיך מאוחר יותר.",
        },
        {
          q: "האם אני מתחייב להגיש למלגות שהותאמו לי?",
          a: "בכלל לא. אתם מקבלים המלצות ובוחרים בעצמכם למה להגיש. ההחלטה תמיד שלכם.",
        },
      ],
    },
    finalCta: {
      heading: "המלגה הבאה שלכם מחכה",
      body: "התחילו עכשיו את השאלון ותנו לנו למפות עבורכם את כל אפשרויות המימון עד לקבלה.",
      button: "התחילו את השאלון",
      note: "ללא עלות · 4 דקות · תוצאות מיידיות",
    },
    footer: {
      tagline: "ממפים לכל סטודנט את המימון שמגיע לו.",
      rights: "כל הזכויות שמורות.",
      links: ["פרטיות", "תנאי שימוש", "צור קשר"],
    },
  },
  en: {
    dir: "ltr",
    nav: {
      how: "How it works",
      why: "Why us",
      trust: "Trust",
      faq: "FAQ",
      cta: "Start matching",
    },
    hero: {
      badge: "Personalized scholarship & financial-aid matching",
      title: "The smart, holistic way",
      titleAccent: "to fund your degree",
      subtitle:
        "One questionnaire maps out every scholarship, living-expense grant, and financial-aid program in Israel for you — with precise personalization, full transparency, and no cost.",
      primaryCta: "Start the questionnaire",
      secondaryCta: "How it works",
      note: "Free · No commitment · 4 minutes",
      stats: [
        { value: "$65M+", label: "In scholarships waiting" },
        { value: "1,800+", label: "Aid programs in our database" },
        { value: "92%", label: "Found a relevant match" },
      ],
    },
    trust: {
      heading: "Building trust at every step",
      items: [
        "Your data is encrypted and stays yours",
        "Holistic, data-driven mapping",
        "Full transparency on criteria",
        "No hidden fees",
      ],
    },
    how: {
      heading: "Three simple steps",
      subheading:
        "No unnecessary bureaucracy — just what you actually need to find your match.",
      steps: [
        {
          title: "Fill a short questionnaire",
          body: "A few questions about your field, financial situation, and goals. Takes under 4 minutes.",
        },
        {
          title: "Get personalized matches",
          body: "Our system scans thousands of programs and ranks the scholarships you're most likely to win.",
        },
        {
          title: "Apply with confidence",
          body: "Every scholarship comes with a personalized checklist — what's required, current status, and the deadline.",
        },
      ],
    },
    why: {
      heading: "Why students choose AcadeMe.Fund",
      subheading:
        "Because everyone deserves a fair shot at an education — without getting lost in paperwork.",
      items: [
        {
          title: "Precise matching",
          body: "An algorithm that understands the criteria deeply and ranks by your real chances.",
        },
        {
          title: "Holistic mapping",
          body: "Every funding source in one place — scholarships, living-expense grants, and financial aid.",
        },
        {
          title: "Full transparency",
          body: "See exactly why you were matched, what's required, and what your odds are.",
        },
        {
          title: "Save precious time",
          body: "Instead of hours of searching — a focused list ready for you to apply.",
        },
      ],
    },
    guidance: {
      badge: "Fully personalized",
      heading: "Every funding path, in one place",
      body: "We holistically map out every scholarship, living-expense grant, and financial-aid program relevant to you — and the match gets sharper the more we learn about you.",
      points: [
        "Smart mapping of every funding source in Israel",
        "Ranked by your real chances",
        "Automatic updates when new programs open",
        "One interface, in Hebrew and English",
      ],
      cta: "See your match",
    },
    testimonials: {
      heading: "What students say",
      subheading: "Thousands of students have already found their path to funding.",
      items: [
        {
          quote:
            "I had no idea I was even eligible for scholarships. Within minutes I got a tailored list — and won two of them.",
          name: "Maya L.",
          role: "Engineering student, 2nd year",
        },
        {
          quote:
            "The list I got was spot-on for my exact situation. I didn't waste time on scholarships that weren't relevant to me.",
          name: "Yosef A.",
          role: "Law student",
        },
        {
          quote:
            "I saved hours upon hours of searching. Everything was centralized, clear, and with no fine print.",
          name: "Noa C.",
          role: "MA in Psychology",
        },
      ],
    },
    faq: {
      heading: "Frequently asked questions",
      subheading: "Everything worth knowing before you start.",
      items: [
        {
          q: "Is the service really free?",
          a: "Yes. Filling the questionnaire, matching, and getting your results are all free with no commitment.",
        },
        {
          q: "What happens to my data?",
          a: "Your information is encrypted and used only for matching. We will never sell or share your data.",
        },
        {
          q: "How long does the questionnaire take?",
          a: "Most students finish in under 4 minutes. You can also save and continue later.",
        },
        {
          q: "Am I obligated to apply to my matches?",
          a: "Not at all. You get recommendations and choose what to apply for yourself. The decision is always yours.",
        },
      ],
    },
    finalCta: {
      heading: "Your next scholarship is waiting",
      body: "Start the questionnaire now and let us map out every funding option for you, all the way to acceptance.",
      button: "Start the questionnaire",
      note: "Free · 4 minutes · Instant results",
    },
    footer: {
      tagline: "Mapping every student's path to the funding they deserve.",
      rights: "All rights reserved.",
      links: ["Privacy", "Terms", "Contact"],
    },
  },
}

type LangContextValue = {
  lang: Lang
  setLang: (l: Lang) => void
  t: Content
}

const LangContext = createContext<LangContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("he")

  useEffect(() => {
    const t = content[lang]
    document.documentElement.lang = lang
    document.documentElement.dir = t.dir
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error("useLang must be used within LanguageProvider")
  return ctx
}
