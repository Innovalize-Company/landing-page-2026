"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#services", label: { en: "Services", es: "Servicios" } },
  /*{ href: "#projects", label: { en: "Projects", es: "Proyectos" } },*/
  { href: "#about", label: { en: "About", es: "Nosotros" } },
  { href: "#contact", label: { en: "Contact", es: "Contacto" } },
]

interface HeaderProps {
  lang: "en" | "es"
  onLangChange: (lang: "en" | "es") => void
}

export function Header({ lang, onLangChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            <span className="text-primary">Innova</span>
            <span className="text-foreground">lize</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                {link.label[lang]}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => onLangChange(lang === "en" ? "es" : "en")}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              {lang === "en" ? "ES" : "EN"}
            </button>
            <Button asChild>
              <Link href="#contact">
                {lang === "en" ? "Get in touch" : "Contactar"}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-border mt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label[lang]}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <button
                  onClick={() => onLangChange(lang === "en" ? "es" : "en")}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  {lang === "en" ? "Español" : "English"}
                </button>
                <Button asChild size="sm">
                  <Link href="#contact">
                    {lang === "en" ? "Get in touch" : "Contactar"}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
