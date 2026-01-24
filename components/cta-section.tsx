"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"

const content = {
  en: {
    subtitle: "Ready to transform your digital presence?",
    lines: ["Let's start", "your", "project."],
    cta: "Schedule a call",
  },
  es: {
    subtitle: "Listo para transformar tu presencia digital?",
    lines: ["Comencemos", "tu", "proyecto."],
    cta: "Agendar llamada",
  },
}

interface CTASectionProps {
  lang: "en" | "es"
}

export function CTASection({ lang }: CTASectionProps) {
  const t = content[lang]
  const sectionRef = useRef<HTMLElement>(null)
  const [parallaxOffset, setParallaxOffset] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        // Calculate parallax only when section is in view
        if (rect.top < windowHeight && rect.bottom > 0) {
          // More dramatic parallax calculation
          const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height)
          setParallaxOffset(scrollProgress * 200) // Doubled for more intensity
          setIsVisible(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Parallax Background Image - Much more dramatic movement */}
      <div 
        className="absolute -inset-[20%] z-0"
        style={{
          transform: `translateY(${-parallaxOffset * 0.8}px) scale(1.2)`,
          transformOrigin: 'center center',
          transition: 'transform 0.1s ease-out',
        }}
      >
        <Image
          src="/images/cta-ai.jpg"
          alt="AI and automation visualization"
          fill
          className="object-cover"
          quality={90}
        />
        {/* Lighter overlays to show more of the AI imagery */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/50" />
        <div className="absolute inset-0 bg-background/20" />
      </div>

      {/* Animated glow effects - Subtle with parallax */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none overflow-hidden"
        style={{
          transform: `translateY(${-parallaxOffset * 0.5}px)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        <div className="absolute top-1/4 left-1/5 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/5 w-[350px] h-[350px] bg-accent/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      {/* Floating particles - Subtle and elegant */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/30"
            style={{
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              transform: `translateY(${-parallaxOffset * (0.3 + Math.random() * 0.4)}px)`,
            }}
          />
        ))}
      </div>

      {/* Content - Text moves at different speeds for depth */}
      <div 
        className="max-w-7xl mx-auto px-6 relative z-10 w-full"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.5s ease-out',
        }}
      >
        <div className="text-center">
          <p 
            className="text-foreground/80 text-lg md:text-xl mb-8 drop-shadow-md"
            style={{
              transform: `translateY(${-parallaxOffset * 0.15}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            {t.subtitle}
          </p>
          
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-12">
            {t.lines.map((line, index) => (
              <span 
                key={index} 
                className="block"
                style={{
                  transform: `translateY(${-parallaxOffset * (0.1 + 0.08 * index)}px) scale(${1 + parallaxOffset * 0.0005})`,
                  transition: 'transform 0.1s ease-out',
                }}
              >
                {index === 1 ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                    {line}
                  </span>
                ) : (
                  <span className="text-foreground drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">{line}</span>
                )}
              </span>
            ))}
          </h2>

          <div
            style={{
              transform: `translateY(${-parallaxOffset * 0.25}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <Button size="lg" asChild className="group relative overflow-hidden text-lg px-8 py-6">
              <Link href="#contact">
                <span className="relative z-10">{t.cta}</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  )
}
