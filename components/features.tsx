"use client"

const content = {
  en: {
    quote: "The web is full of beautiful sites that don't sell. Ours are designed to be your best salesperson.",
    features: [
      "1 Year Hosting Included",
      "Free Domain Registration",
      "Mobile First Design",
      "Sales Copywriting",
      "24/7 Monitoring",
      "WhatsApp Integration",
    ],
  },
  es: {
    quote: "La web está llena de sitios bonitos que no venden. Los nuestros están diseñados para ser tu mejor vendedor.",
    features: [
      "1 Año Hosting Incluido",
      "Dominio Gratis .com",
      "Diseño Mobile First",
      "Copywriting de Ventas",
      "Monitoreo 24/7",
      "Integración WhatsApp",
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
                  className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-colors shadow-sm"
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
