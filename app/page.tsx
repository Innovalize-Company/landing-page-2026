"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
/*import { Projects } from "@/components/projects"*/
import { Features } from "@/components/features"
import { KeyboardSection } from "@/components/keyboard-section"
import { About } from "@/components/about"
import { CTASection } from "@/components/cta-section"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  const [lang, setLang] = useState<"en" | "es">("en")

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header lang={lang} onLangChange={setLang} />
      <Hero lang={lang} />
      <Services lang={lang} />
      {/*<Projects lang={lang} />*/}
      <Features lang={lang} />
      <KeyboardSection lang={lang} />
      <About lang={lang} />
      <CTASection lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </main>
  )
}
