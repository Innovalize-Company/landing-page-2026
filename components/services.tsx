"use client"

import {
  Code2,
  Megaphone,
  Search,
  Palette,
  Video,
  Share2,
  Gauge,
  Smartphone
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const servicesData = {
  en: [
    {
      icon: Code2,
      title: "Strategic Web Design",
      description: "Not just pretty sites. We build sales funnels optimized for conversion and speed.",
      highlight: true,
    },
    {
      icon: Megaphone,
      title: "Google & Meta Ads",
      description: "Placement in front of customers searching for you. Immediate results with high ROI campaigns.",
      highlight: true,
    },
    {
      icon: Search,
      title: "Advanced SEO",
      description: "Dominate search results. We structure your site so Google falls in love with your content.",
      highlight: false,
    },
    {
      icon: Share2,
      title: "Social Media 360",
      description: "We manage your community and create content that engages and builds trust.",
      highlight: false,
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Reels and TikToks that go viral. Professional editing to showcase your business essence.",
      highlight: false,
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "100% responsive designs ensuring perfect experience on all devices.",
      highlight: false,
    },
    {
      icon: Gauge,
      title: "Speed Optimization",
      description: "Loading times under 1 second to prevent customer bounce and improve ranking.",
      highlight: false,
    },
    {
      icon: Palette,
      title: "Digital Branding",
      description: "Coherent visual identity that conveys professionalism and authority in your niche.",
      highlight: false,
    },
  ],
  es: [
    {
      icon: Code2,
      title: "Diseño Web Estratégico",
      description: "No solo sitios bonitos. Construimos embudos de venta optimizados para conversión y velocidad.",
      highlight: true,
    },
    {
      icon: Megaphone,
      title: "Google & Meta Ads",
      description: "Aparece frente a clientes que te buscan. Resultados inmediatos con campañas de alto ROI.",
      highlight: true,
    },
    {
      icon: Search,
      title: "SEO Avanzado",
      description: "Domina los resultados de búsqueda. Estructuramos tu sitio para que Google se enamore de tu contenido.",
      highlight: false,
    },
    {
      icon: Share2,
      title: "Social Media 360",
      description: "Gestionamos tu comunidad y creamos contenido que engancha y genera confianza.",
      highlight: false,
    },
    {
      icon: Video,
      title: "Producción de Video",
      description: "Reels y TikToks que viralizan. Edición profesional para mostrar la esencia de tu negocio.",
      highlight: false,
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Diseños 100% responsivos asegurando una experiencia perfecta en todos los dispositivos.",
      highlight: false,
    },
    {
      icon: Gauge,
      title: "Optimización de Velocidad",
      description: "Tiempos de carga bajo 1 segundo para evitar rebote de clientes y mejorar ranking.",
      highlight: false,
    },
    {
      icon: Palette,
      title: "Branding Digital",
      description: "Identidad visual coherente que transmite profesionalismo y autoridad en tu nicho.",
      highlight: false,
    },
  ],
}

const sectionContent = {
  en: {
    subtitle: "Our Ecosystem",
    title: "Everything to scale your business",
    description: "We combine technology, design, and marketing to create a growth engine for your company.",
  },
  es: {
    subtitle: "Nuestro Ecosistema",
    title: "Todo para escalar tu negocio",
    description: "Combinamos tecnología, diseño y marketing para crear un motor de crecimiento para tu empresa.",
  },
}

interface ServicesProps {
  lang: "en" | "es"
}

export function Services({ lang }: ServicesProps) {
  const services = servicesData[lang]
  const t = sectionContent[lang]

  return (
    <section id="services" className="py-24 relative bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            {t.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            {t.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={`group cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg ${service.highlight ? 'bg-background border-primary/20 shadow-sm' : 'bg-card/50'
                  }`}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${service.highlight
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted group-hover:bg-primary group-hover:text-primary-foreground'
                    }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
