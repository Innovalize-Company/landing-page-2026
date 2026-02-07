"use client"

import { useState } from "react"
import { Check, X, ArrowRight, Zap, Globe, Gauge, ShieldCheck, Mail, Users, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const pricingData = {
    en: {
        title: "Transparent Pricing",
        subtitle: "Choose the perfect plan for your business goals",
        development: {
            label: "Web Development",
            description: "One-time investment for your digital asset",
            plans: [
                {
                    name: "Launch Pad",
                    price: "$300",
                    description: "Perfect for startups and local businesses needing a quick, professional presence.",
                    features: [
                        "One-Page High Impact Design",
                        "Mobile & Tablet Responsive",
                        "1 Year Hosting & Domain Included",
                        "WhatsApp & Contact Forms",
                        "Basic SEO Setup",
                        "SSL Security Certificate",
                        "5 Corporate Emails",
                        "Delivery in 5-7 days",
                    ],
                    highlight: false,
                },
                {
                    name: "Growth Engine",
                    price: "$600",
                    description: "For established businesses looking to scale and convert more visitors.",
                    features: [
                        "Up to 5 Custom Pages",
                        "Advanced SEO Optimization",
                        "CMS (Content Management System)",
                        "Blog Integration",
                        "Google Analytics Setup",
                        "Speed Optimization (<1s load)",
                        "Monthly Performance Report",
                        "Priority Support",
                    ],
                    highlight: true,
                },
                {
                    name: "Custom Solution",
                    price: "Custom",
                    description: "For complex projects, e-commerce, or specific functionality needs.",
                    features: [
                        "Full Custom Development",
                        "Complex Integrations (API)",
                        "Advanced E-commerce Features",
                        "User Portals / SaaS",
                        "Scalable Architecture",
                        "Dedicated Project Manager",
                        "Comprehensive QA Testing",
                        "SLA Support Agreement",
                    ],
                    highlight: false,
                },
            ],
        },
        marketing: {
            label: "Digital Growth",
            description: "Monthly services to drive traffic and increase sales",
            plans: [
                {
                    name: "Ads Turbo",
                    price: "$300",
                    period: "/mo",
                    description: "Immediate traffic and leads through Google & Meta Ads.",
                    features: [
                        "Google Ads Campaign Setup",
                        "Meta (Facebook/Instagram) Ads",
                        "Keyword Research",
                        "Ad Copywriting & A/B Testing",
                        "Conversion Tracking",
                        "Bi-weekly Reports",
                        "Budget Optimization",
                        "Ad Spend Not Included",
                    ],
                    highlight: false,
                },
                {
                    name: "SEO Authority",
                    price: "$400",
                    period: "/mo",
                    description: "Building long-term organic traffic and domain authority.",
                    features: [
                        "Technical SEO Audits",
                        "Keyword Strategy",
                        "2 Monthly Blog Articles",
                        "On-Page Optimization",
                        "Backlink Building Strategy",
                        "Competitor Analysis",
                        "Local SEO (Google Maps)",
                        "Monthly Growth Report",
                    ],
                    highlight: true,
                },
                {
                    name: "Social 360",
                    price: "$450",
                    period: "/mo",
                    description: "Complete brand management and community engagement.",
                    features: [
                        "Comprehensive Social Strategy",
                        "12 High-Quality Posts/mo",
                        "4 Reels/TikTok Videos",
                        "Community Management",
                        "Graphic Design for Posts",
                        "Story Strategy",
                        "Hashtag Optimization",
                        "Monthly Content Calendar",
                    ],
                    highlight: false,
                },
            ],
        },
    },
    es: {
        title: "Precios Transparentes",
        subtitle: "Elige el plan perfecto para tus objetivos de negocio",
        development: {
            label: "Desarrollo Web",
            description: "Inversión única para tu activo digital",
            plans: [
                {
                    name: "Landing Express",
                    price: "$300",
                    description: "Perfecto para startups y negocios locales que necesitan presencia rápida.",
                    features: [
                        "Diseño One-Page de Alto Impacto",
                        "Móvil y Tablet Responsive",
                        "1 Año Hosting y Dominio Incluido",
                        "WhatsApp y Formularios",
                        "Configuración SEO Básica",
                        "Certificado de Seguridad SSL",
                        "5 Correos Corporativos",
                        "Entrega en 5-7 días",
                    ],
                    highlight: false,
                },
                {
                    name: "Web Corporativa",
                    price: "$600",
                    description: "Para empresas establecidas que buscan escalar y convertir más visitantes.",
                    features: [
                        "Hasta 5 Páginas Personalizadas",
                        "Optimización SEO Avanzada",
                        "CMS (Autogestionable)",
                        "Integración de Blog",
                        "Google Analytics Configurado",
                        "Optimización de Velocidad (<1s)",
                        "Reporte de Rendimiento Mensual",
                        "Soporte Prioritario",
                    ],
                    highlight: true,
                },
                {
                    name: "A Medida / E-Commerce",
                    price: "Consultar",
                    description: "Para proyectos complejos, tiendas online grandes o funcionalidades específicas.",
                    features: [
                        "Desarrollo 100% a Medida",
                        "Integraciones Complejas (API)",
                        "E-commerce Avanzado",
                        "Portales de Usuario / SaaS",
                        "Arquitectura Escalable",
                        "Project Manager Dedicado",
                        "QA Testing Exhaustivo",
                        "Acuerdo de Nivel de Servicio (SLA)",
                    ],
                    highlight: false,
                },
            ],
        },
        marketing: {
            label: "Marketing Mensual",
            description: "Servicios mensuales para generar tráfico y aumentar ventas",
            plans: [
                {
                    name: "Google Ads Turbo",
                    price: "$300",
                    period: "/mes",
                    description: "Tráfico y clientes inmediatos mediante Google y Meta Ads.",
                    features: [
                        "Configuración Campañas Google",
                        "Anuncios en Meta (FB/IG)",
                        "Investigación de Palabras Clave",
                        "Copywriting y Pruebas A/B",
                        "Seguimiento de Conversiones",
                        "Reportes Quincenales",
                        "Optimización de Presupuesto",
                        "Inversión Publicitaria No Incluida",
                    ],
                    highlight: false,
                },
                {
                    name: "SEO Authority",
                    price: "$400",
                    period: "/mes",
                    description: "Construyendo tráfico orgánico y autoridad a largo plazo.",
                    features: [
                        "Auditoría SEO Técnica",
                        "Estrategia de Palabras Clave",
                        "2 Artículos de Blog Mensuales",
                        "Optimización On-Page",
                        "Estrategia de Backlinks",
                        "Análisis de Competencia",
                        "SEO Local (Google Maps)",
                        "Reporte de Crecimiento Mensual",
                    ],
                    highlight: true,
                },
                {
                    name: "Social Media 360",
                    price: "$450",
                    period: "/mes",
                    description: "Gestión completa de marca y compromiso con la comunidad.",
                    features: [
                        "Estrategia Social Integral",
                        "12 Posts de Alta Calidad/mes",
                        "4 Reels/TikTok Videos",
                        "Gestión de Comunidad (CM)",
                        "Diseño Gráfico para Posts",
                        "Estrategia de Stories",
                        "Optimización de Hashtags",
                        "Calendario Editorial Mensual",
                    ],
                    highlight: false,
                },
            ],
        },
    },
}

interface PricingProps {
    lang: "en" | "es"
}

export function Pricing({ lang }: PricingProps) {
    const content = pricingData[lang]
    const [billingCycle, setBillingCycle] = useState<"dev" | "marketing">("dev")

    return (
        <section id="pricing" className="py-24 relative overflow-hidden bg-background">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:60px_60px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                        {content.title}
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                        {content.subtitle}
                    </p>

                    <Tabs defaultValue="dev" className="w-full max-w-md mx-auto" onValueChange={(v) => setBillingCycle(v as "dev" | "marketing")}>
                        <TabsList className="grid w-full grid-cols-2 p-1 bg-muted/50 backdrop-blur-sm rounded-full">
                            <TabsTrigger value="dev" className="rounded-full data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-300">
                                {content.development.label}
                            </TabsTrigger>
                            <TabsTrigger value="marketing" className="rounded-full data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-300">
                                {content.marketing.label}
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {(billingCycle === "dev" ? content.development.plans : content.marketing.plans).map((plan, index) => (
                        <Card
                            key={index}
                            className={`relative flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${plan.highlight
                                ? 'border-primary shadow-lg scale-105 z-10 bg-background/80 backdrop-blur-sm'
                                : 'border-border bg-card/50 backdrop-blur-sm hover:border-primary/50'
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                                    <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full shadow-md">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <CardHeader>
                                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                                <div className="mt-4 flex items-baseline text-foreground">
                                    <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                                    {/* @ts-ignore */}
                                    {plan.period && <span className="ml-1 text-xl text-muted-foreground">{plan.period}</span>}
                                </div>
                                <CardDescription className="mt-4 text-base min-h-[50px]">
                                    {plan.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="flex-1">
                                <ul className="space-y-4">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm">
                                            <div className={`mt-0.5 rounded-full p-1 ${plan.highlight ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                                                <Check className="w-3 h-3" />
                                            </div>
                                            <span className="text-foreground/90">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter className="pt-8">
                                <Button
                                    className={`w-full ${plan.highlight ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/90'}`}
                                    size="lg"
                                    asChild
                                >
                                    <a href="#contact">
                                        {lang === "en" ? "Get Started" : "Comenzar Ahora"}
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-muted-foreground flex items-center justify-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                        <span className="text-sm">
                            {lang === "en"
                                ? "All plans include 30-day satisfaction guarantee"
                                : "Todos los planes incluyen garantía de satisfacción de 30 días"
                            }
                        </span>
                    </p>
                </div>
            </div>
        </section>
    )
}
