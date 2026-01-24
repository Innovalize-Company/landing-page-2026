"use client"

const content = {
  en: {
    quote: "From concept to deployment, we build complete digital solutions that bring your vision to life.",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Loading",
      "Secure Hosting",
      "24/7 Support",
      "Modern Stack",
    ],
  },
  es: {
    quote: "Desde el concepto hasta el despliegue, construimos soluciones digitales completas que dan vida a tu visión.",
    features: [
      "Diseño Responsive",
      "Optimizado SEO",
      "Carga Rápida",
      "Hosting Seguro",
      "Soporte 24/7",
      "Stack Moderno",
    ],
  },
}

interface FeaturesProps {
  lang: "en" | "es"
}

export function Features({ lang }: FeaturesProps) {
  const t = content[lang]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Quote */}
          <div className="lg:w-1/2">
            <div className="relative">
              <span className="text-8xl text-primary/20 font-serif absolute -top-8 -left-4">~</span>
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-foreground text-balance">
                {t.quote}
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              {t.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
