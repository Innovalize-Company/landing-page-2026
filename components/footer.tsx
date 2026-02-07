"use client"

import Link from "next/link"
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react"

const content = {
  en: {
    description: "Digital agency specializing in web development, SEO, branding, and social media management.",
    sections: [
      {
        title: "Services",
        links: [
          { label: "Web Development", href: "#services" },
          { label: "SEO Optimization", href: "#services" },
          { label: "Branding", href: "#services" },
          { label: "Social Media", href: "#services" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About Us", href: "#about" },
          /*{ label: "Projects", href: "#projects" },*/
          { label: "Contact", href: "#contact" },
        ],
      },
    ],
    copyright: "All rights reserved.",
  },
  es: {
    description: "Agencia digital especializada en desarrollo web, SEO, branding y gestión de redes sociales.",
    sections: [
      {
        title: "Servicios",
        links: [
          { label: "Desarrollo Web", href: "#services" },
          { label: "Optimización SEO", href: "#services" },
          { label: "Branding", href: "#services" },
          { label: "Redes Sociales", href: "#services" },
        ],
      },
      {
        title: "Empresa",
        links: [
          { label: "Nosotros", href: "#about" },
          /*{ label: "Proyectos", href: "#projects" },*/
          { label: "Contacto", href: "#contact" },
        ],
      },
    ],
    copyright: "Todos los derechos reservados.",
  },
}

const socialLinks = [
  { icon: Twitter, href: "https://x.com/innovalize", label: "X (Twitter)" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/innovalize/", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/people/Innova-Lize/pfbid0TpknWRSGWZAWG6UKx9iAhE3UHBhhAXEiQn8sbiMp7CeFQKX9CmaWveGhbaXz9DEql/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/innovalize.tech/", label: "Instagram" },
]

interface FooterProps {
  lang: "en" | "es"
}

export function Footer({ lang }: FooterProps) {
  const t = content[lang]
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tight inline-block mb-4">
              <span className="text-primary">Innova</span>
              <span className="text-foreground">lize</span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-6">
              {t.description}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links */}
          {t.sections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Innovalize. {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
