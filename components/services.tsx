"use client"

import { 
  Code2, 
  RefreshCw, 
  Server, 
  Search, 
  Palette, 
  Video, 
  Share2,
  Wrench,
  ArrowRight
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const servicesData = {
  en: [
    {
      icon: Code2,
      title: "Web Development",
      description: "Crafting responsive, modern websites from scratch. We bring your ideas to life with clean code and stunning design.",
      highlight: true,
    },
    {
      icon: RefreshCw,
      title: "Site Optimization",
      description: "Revitalize your outdated website. We update deprecated code, improve performance, and modernize your digital presence.",
      highlight: false,
    },
    {
      icon: Server,
      title: "Hosting & Domain",
      description: "Complete hosting solutions with domain registration. We handle the technical side so you can focus on your business.",
      highlight: false,
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your visibility on search engines. Strategic optimization to help your customers find you online.",
      highlight: true,
    },
    {
      icon: Palette,
      title: "Branding & Logo Design",
      description: "Create a memorable brand identity. Logo design, color palette, and visual guidelines that represent your business.",
      highlight: false,
    },
    {
      icon: Share2,
      title: "Community Management",
      description: "Professional social media management. Content strategy, posting schedules, and engagement to grow your audience.",
      highlight: false,
    },
    {
      icon: Video,
      title: "Video Production",
      description: "High-quality video editing and production for all platforms. From reels to promotional content.",
      highlight: true,
    },
    {
      icon: Wrench,
      title: "Maintenance Service",
      description: "Ongoing website maintenance and support. Keep your site secure, updated, and running smoothly.",
      highlight: false,
    },
  ],
  es: [
    {
      icon: Code2,
      title: "Desarrollo Web",
      description: "Creamos sitios web responsivos y modernos desde cero. Llevamos tus ideas a la realidad con código limpio y diseño impactante.",
      highlight: true,
    },
    {
      icon: RefreshCw,
      title: "Optimización de Sitios",
      description: "Revitalizamos tu sitio web obsoleto. Actualizamos código deprecado, mejoramos el rendimiento y modernizamos tu presencia digital.",
      highlight: false,
    },
    {
      icon: Server,
      title: "Hosting y Dominio",
      description: "Soluciones completas de alojamiento con registro de dominio. Nos encargamos de lo técnico para que te enfoques en tu negocio.",
      highlight: false,
    },
    {
      icon: Search,
      title: "Optimización SEO",
      description: "Aumenta tu visibilidad en buscadores. Optimización estratégica para que tus clientes te encuentren en línea.",
      highlight: true,
    },
    {
      icon: Palette,
      title: "Branding y Logo",
      description: "Crea una identidad de marca memorable. Diseño de logo, paleta de colores y guías visuales que representen tu negocio.",
      highlight: false,
    },
    {
      icon: Share2,
      title: "Community Management",
      description: "Gestión profesional de redes sociales. Estrategia de contenido, calendarios y engagement para crecer tu audiencia.",
      highlight: false,
    },
    {
      icon: Video,
      title: "Producción de Video",
      description: "Edición y producción de video de alta calidad para todas las plataformas. Desde reels hasta contenido promocional.",
      highlight: true,
    },
    {
      icon: Wrench,
      title: "Servicio de Mantenimiento",
      description: "Mantenimiento y soporte continuo de tu sitio web. Mantén tu sitio seguro, actualizado y funcionando sin problemas.",
      highlight: false,
    },
  ],
}

const sectionContent = {
  en: {
    subtitle: "What we do",
    title: "Complete digital solutions",
    description: "From web development to social media management, we offer everything you need to establish and grow your online presence.",
  },
  es: {
    subtitle: "Lo que hacemos",
    title: "Soluciones digitales completas",
    description: "Desde desarrollo web hasta gestión de redes sociales, ofrecemos todo lo que necesitas para establecer y hacer crecer tu presencia en línea.",
  },
}

interface ServicesProps {
  lang: "en" | "es"
}

export function Services({ lang }: ServicesProps) {
  const services = servicesData[lang]
  const t = sectionContent[lang]

  return (
    <section id="services" className="py-24 relative">
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
                className={`group cursor-pointer transition-all duration-300 hover:border-primary/50 ${
                  service.highlight ? 'bg-primary/5 border-primary/20' : 'bg-card'
                }`}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    service.highlight 
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
                  <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {lang === "en" ? "Learn more" : "Saber más"}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
