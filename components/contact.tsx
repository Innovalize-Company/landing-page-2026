"use client"

import React, { useRef } from "react"

import { useState } from "react"
import { Send, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { validateAndSendEmail } from "@/app/actions/contactFormSubmit"

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
      reset: "Reset"
    },
    info: [
      { icon: Mail, label: "Email", value: "contact.innovalize@gmail.com" },
      { icon: Mail, label: "WhatsApp", value: "+5491170668886" },
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
      reset: "Limpiar"
    },
    info: [
      { icon: Mail, label: "Email", value: "contact.innovalize@gmail.com" },
      { icon: Mail, label: "WhatsApp", value: "+5491122514955" },
      { icon: MapPin, label: "Ubicación", value: "Remoto / Global" },
      { icon: Clock, label: "Tiempo de respuesta", value: "Menos de 24 horas" },
    ],
  },
}


interface ContactProps {
  lang: "en" | "es"
}

export function Contact({ lang }: ContactProps) {
  //const [isSubmitting, setIsSubmitting] = useState(false)
  const t = content[lang]

  const formRef = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState({
    success: false,
    message: "",
  });

  const submitForm = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    setIsLoading(true);

    const response = await validateAndSendEmail(formRef.current);

    setFormStatus(response);

    setTimeout(() => {
      setFormStatus({ success: false, message: "" });
      setIsLoading(false);
    }, 1500);
  };

  /*const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    alert(lang === "en" ? "Message sent! We'll be in touch soon." : "¡Mensaje enviado! Te contactaremos pronto.")
  }*/

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
              <form ref={formRef} onSubmit={submitForm} className="space-y-2">
                <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                  <div className="col-span-full">
                    <label
                      htmlFor="fullName"
                      className="block text-sm/6 font-medium text-gray-500"
                    >
                    Full Name
                    </label>
                    <div className="mt-2">
                      <Input
                        type="text"
                        name="fullName"
                        required
                        minLength={3}
                        maxLength={50}
                        autoComplete="fullName"
                        placeholder="Please write your full name..."
                        //defaultValue={state.inputs?.fullName}
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="email"
                      className="block text-sm/6 font-medium text-gray-500"
                    >
                      E-Mail
                    </label>
                    <div className="mt-2">
                      <Input
                        type="email"
                        name="email"
                        required
                        minLength={5}
                        maxLength={50}
                        autoComplete="email"
                        placeholder="Please write your email..."
                        //defaultValue={state.inputs?.email}
                        className="bg-background border-border resize-none"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="subject"
                      className="block text-sm/6 font-medium text-gray-500"
                    >
                      Subject
                    </label>
                    <div className="mt-2">
                      <Input
                        type="subject"
                        name="subject"
                        required
                        minLength={3}
                        maxLength={50}
                        autoComplete="subject"
                        placeholder="Please write your subject..."
                        //defaultValue={state.inputs?.subject}
                        className="bg-background border-border resize-none"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="message"
                      className="block text-sm/6 font-medium text-gray-500"
                    >
                      Message
                    </label>
                    <div className="mt-2">
                      <Textarea
                        name="message"
                        rows={3}
                        required
                        minLength={3}
                        maxLength={500}
                        placeholder="Please write your message..."
                        //defaultValue={state.inputs?.message}
                        className="bg-background border-border resize-none"
                      />
                    </div>
                  </div>
                
                  {formStatus.message && (
                    <div className="col-span-full">
                      {formStatus.success ? (
                        <p className="text-sm/6 font-semibold text-green-500">
                          {formStatus.message}
                        </p>
                      ) : (
                        <p className="text-sm/6 font-semibold text-red-500">
                          {formStatus.message}
                        </p>
                      )}
                    </div>
                  )}
                </div>


                <div className="mt-10 flex">
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      t.form.sending
                    ) : (
                      <>
                        {t.form.submit}
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
                
                <div className="mt-6 flex">
                  <Button type="reset" className="w-full bg-gray-500 hover:bg-gray-600" disabled={isLoading}>
                    {isLoading ? (
                      t.form.sending
                    ) : (
                      <>
                        {t.form.reset}
                      </>
                    )}
                  </Button>
                </div>
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
