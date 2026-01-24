"use client"

import { ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const projectsData = [
  {
    title: "E-Commerce Platform",
    category: { en: "Web Development", es: "Desarrollo Web" },
    color: "from-primary/20 to-accent/20",
  },
  {
    title: "Restaurant Booking",
    category: { en: "Web App", es: "Aplicación Web" },
    color: "from-accent/20 to-primary/20",
  },
  {
    title: "Fitness Studio",
    category: { en: "Branding + Web", es: "Branding + Web" },
    color: "from-primary/30 to-primary/10",
  },
  {
    title: "Tech Startup",
    category: { en: "Full Digital Suite", es: "Suite Digital Completa" },
    color: "from-accent/30 to-accent/10",
  },
]

const sectionContent = {
  en: {
    subtitle: "Our Work",
    title: "Featured projects",
    description: "A selection of projects we've delivered. Each one crafted with attention to detail and focus on results.",
  },
  es: {
    subtitle: "Nuestro Trabajo",
    title: "Proyectos destacados",
    description: "Una selección de proyectos que hemos entregado. Cada uno creado con atención al detalle y enfoque en resultados.",
  },
}

interface ProjectsProps {
  lang: "en" | "es"
}

export function Projects({ lang }: ProjectsProps) {
  const t = sectionContent[lang]

  return (
    <section id="projects" className="py-24 bg-muted/30">
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

        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <Card 
              key={index}
              className="group cursor-pointer overflow-hidden border-border hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className={`h-64 bg-gradient-to-br ${project.color} flex items-center justify-center relative`}>
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex items-center gap-2 text-foreground font-medium">
                      <ExternalLink className="w-5 h-5" />
                      {lang === "en" ? "View project" : "Ver proyecto"}
                    </div>
                  </div>
                  <div className="text-6xl font-bold text-foreground/10">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-primary text-sm font-medium">
                    {project.category[lang]}
                  </span>
                  <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
