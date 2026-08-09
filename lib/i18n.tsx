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
      title: "המימון ללימודים שלכם",
      titleAccent: "מתחיל באמון וליווי",
      subtitle:
        "שאלון קצר וחכם מתאים לכם את המלגות והסיוע הכלכלי הרלוונטיים ביותר — ומלווה אתכם צעד־צעד עד לקבלה, בשקיפות מלאה וללא עלות.",
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
        "בליווי יועצי סיוע כלכלי",
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
          title: "מגישים בליווי צמוד",
          body: "מלווים אתכם בכל שלב של ההגשה — מהמסמכים ועד לתשובה, עם תזכורות ותמיכה.",
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
          title: "ליווי אנושי",
          body: "צוות יועצים זמין למענה, כי מאחורי כל שאלה עומד אדם, לא רק טופס.",
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
      badge: "ליווי אישי",
      heading: "לא משאירים אתכם לבד מול הטפסים",
      body: "אנחנו מאמינים שסיוע כלכלי הוא לא רק כסף — הוא ביטחון להתקדם. לכן לכל סטודנט יש ליווי אמיתי לאורך כל הדרך.",
      points: [
        "יועץ אישי שמכיר את התיק שלכם",
        "תזכורות אוטומטיות לפני כל דדליין",
        "בדיקת מסמכים לפני הגשה",
        "מענה לשאלות בעברית ובאנגלית",
      ],
      cta: "דברו עם יועץ",
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
            "הליווי עשה את ההבדל. מישהו באמת ישב איתי על הטפסים והסביר כל שלב. הרגשתי שיש לי גב.",
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
          a: "כן. מילוי השאלון, ההתאמה והליווי הבסיסי ניתנים ללא עלות וללא התחייבות.",
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
          a: "בכלל לא. אתם מקבלים המלצות ובוחרים בעצמכם למה להגיש. אנחנו רק מלווים.",
        },
      ],
    },
    finalCta: {
      heading: "המלגה הבאה שלכם מחכה",
      body: "התחילו עכשיו את השאלון ותנו לנו ללוות אתכם עד לקבלה.",
      button: "התחילו את השאלון",
      note: "ללא עלות · 4 דקות · תוצאות מיידיות",
    },
    footer: {
      tagline: "מלווים סטודנטים אל המימון שמגיע להם.",
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
      title: "Funding your studies",
      titleAccent: "starts with trust & guidance",
      subtitle:
        "A short, smart questionnaire matches you with the most relevant scholarships and aid — and guides you step by step to acceptance, with full transparency and no cost.",
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
        "Backed by financial-aid advisors",
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
          title: "Apply with close guidance",
          body: "We guide you through every stage of the application — from documents to decision, with reminders and support.",
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
          title: "Human guidance",
          body: "A team of advisors ready to help, because behind every question is a person, not just a form.",
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
      badge: "Personal guidance",
      heading: "We don't leave you alone with the forms",
      body: "We believe financial aid isn't just money — it's the confidence to move forward. That's why every student gets real guidance the whole way.",
      points: [
        "A personal advisor who knows your case",
        "Automatic reminders before every deadline",
        "Document review before submission",
        "Support in both Hebrew and English",
      ],
      cta: "Talk to an advisor",
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
            "The guidance made the difference. Someone actually sat with me on the forms and explained every step. I felt supported.",
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
          a: "Yes. Filling the questionnaire, matching, and basic guidance are all free with no commitment.",
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
          a: "Not at all. You get recommendations and choose what to apply for yourself. We just guide you.",
        },
      ],
    },
    finalCta: {
      heading: "Your next scholarship is waiting",
      body: "Start the questionnaire now and let us guide you all the way to acceptance.",
      button: "Start the questionnaire",
      note: "Free · 4 minutes · Instant results",
    },
    footer: {
      tagline: "Guiding students to the funding they deserve.",
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
