"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"

const content = {
  en: {
    tag: "Digital Agency",
    headline: "We digitalize your business.",
    description: "From concept to deployment, we build complete digital solutions that bring your vision to life. Web development, SEO, branding, and more.",
    cta: "Book a meeting",
    secondary: "View our work",
  },
  es: {
    tag: "Agencia Digital",
    headline: "Digitalizamos tu negocio.",
    description: "Desde el concepto hasta el despliegue, construimos soluciones digitales completas que dan vida a tu visión. Desarrollo web, SEO, branding y más.",
    cta: "Agendar reunión",
    secondary: "Ver proyectos",
  },
}

interface HeroProps {
  lang: "en" | "es"
}

export function Hero({ lang }: HeroProps) {
  const t = content[lang]
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height
        setMousePosition({ x, y })
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const parallaxOffset = scrollY * 0.5
  const imageScale = 1 + scrollY * 0.0003
  const contentOpacity = Math.max(0, 1 - scrollY * 0.002)

  return (
    <section ref={heroRef} className="relative min-h-[120vh] flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${parallaxOffset}px) scale(${imageScale})`,
          transformOrigin: 'center center',
        }}
      >
        <Image
          src="/images/hero-dev.jpg"
          alt="Development workspace"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </div>

      {/* Animated Glow Effects with Mouse Tracking */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none overflow-hidden"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              transform: `translateY(${-parallaxOffset * (0.2 + Math.random() * 0.3)}px)`,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 z-[2] opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          transform: `translateY(${parallaxOffset * 0.2}px)`,
        }}
      />

      {/* Main Content */}
      <div 
        className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-32"
        style={{
          opacity: contentOpacity,
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">{t.tag}</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance">
          <span className="text-foreground drop-shadow-lg">{t.headline.split(" ").slice(0, -2).join(" ")}</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
            {t.headline.split(" ").slice(-2).join(" ")}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 text-pretty drop-shadow-md">
          {t.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <Button size="lg" asChild className="group relative overflow-hidden">
            <Link href="#contact">
              <span className="relative z-10">{t.cta}</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-24 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-scroll-down" />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  )
}
