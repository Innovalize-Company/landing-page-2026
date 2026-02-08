"use client"

import { Shield, Zap, Users } from "lucide-react"

const content = {
  en: {
    subtitle: "Why us",
    title: "We identify opportunities and transform them into results.",
    description: "Our team combines technical expertise with creative vision to deliver solutions that not only look great but perform exceptionally.",
    features: [
      {
        icon: Shield,
        title: "Security First",
        description: "We build with security in mind from day one.",
      },
      {
        icon: Zap,
        title: "Performance",
        description: "Lightning fast websites that convert visitors.",
      },
      {
        icon: Users,
        title: "Support",
        description: "Dedicated support team available when you need us.",
      },
    ],
    cta: "Request a consultation",
  },
  es: {
    subtitle: "Por qué elegirnos",
    title: "Identificamos oportunidades y las transformamos en resultados.",
    description: "Nuestro equipo combina experiencia técnica con visión creativa para entregar soluciones que no solo se ven geniales sino que funcionan excepcionalmente.",
    features: [
      {
        icon: Shield,
        title: "Seguridad Primero",
        description: "Construimos con seguridad en mente desde el día uno.",
      },
      {
        icon: Zap,
        title: "Rendimiento",
        description: "Sitios web ultrarrápidos que convierten visitantes.",
      },
      {
        icon: Users,
        title: "Soporte",
        description: "Equipo de soporte dedicado disponible cuando lo necesites.",
      },
    ],
    cta: "Solicitar consulta",
  },
}

interface AboutProps {
  lang: "en" | "es"
}

export function About({ lang }: AboutProps) {
  const t = content[lang]
  console.log(t);
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              {t.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
              {t.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-pretty">
              {t.description}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              {t.cta} &rarr;
            </a>
          </div>

          <div className="space-y-6">
            {t.features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="flex gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
