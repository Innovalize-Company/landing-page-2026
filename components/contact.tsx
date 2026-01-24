"use client"

import React from "react"

import { useState } from "react"
import { Send, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

const content = {
  en: {
    subtitle: "Get in touch",
    title: "Let's start your project",
    description: "Ready to transform your digital presence? Send us a message and we'll get back to you within 24 hours.",
    form: {
      name: "Your name",
      email: "Email address",
      message: "Tell us about your project",
      submit: "Send message",
      sending: "Sending...",
    },
    info: [
      { icon: Mail, label: "Email", value: "hello@innovalize.dev" },
      { icon: MapPin, label: "Location", value: "Remote / Worldwide" },
      { icon: Clock, label: "Response time", value: "Within 24 hours" },
    ],
  },
  es: {
    subtitle: "Contacto",
    title: "Comencemos tu proyecto",
    description: "¿Listo para transformar tu presencia digital? Envíanos un mensaje y te responderemos en menos de 24 horas.",
    form: {
      name: "Tu nombre",
      email: "Correo electrónico",
      message: "Cuéntanos sobre tu proyecto",
      submit: "Enviar mensaje",
      sending: "Enviando...",
    },
    info: [
      { icon: Mail, label: "Email", value: "hola@innovalize.dev" },
      { icon: MapPin, label: "Ubicación", value: "Remoto / Global" },
      { icon: Clock, label: "Tiempo de respuesta", value: "Menos de 24 horas" },
    ],
  },
}

interface ContactProps {
  lang: "en" | "es"
}

export function Contact({ lang }: ContactProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const t = content[lang]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    alert(lang === "en" ? "Message sent! We'll be in touch soon." : "¡Mensaje enviado! Te contactaremos pronto.")
  }

  return (
    <section id="contact" className="py-24 bg-muted/30">
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

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder={t.form.name}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder={t.form.email}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder={t.form.message}
                    required
                    rows={5}
                    className="bg-background border-border resize-none"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    t.form.sending
                  ) : (
                    <>
                      {t.form.submit}
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            {t.info.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
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
