"use client";

import { useState } from "react";
import { SectionLabel } from "@/presentation/components/ui/SectionLabel";
import type { Locale } from "@/infrastructure/i18n/config";

const content = {
  en: {
    sectionLabel: "GET IN TOUCH",
    heading: "Book your Lanzarote experience",
    subheading:
      "Tell us about your dream Lanzarote private tour. We respond to every booking enquiry within 24 hours.",
    fullName: "Full Name",
    email: "Email Address",
    phone: "Phone (optional)",
    dates: "Preferred Dates (optional)",
    message: "Tell us about your ideal experience...",
    submit: "SEND ENQUIRY",
    thankYouLabel: "THANK YOU",
    thankYouMessage: "We'll be in touch shortly",
    contactLabel: "CONTACT",
    whatsappLabel: "WHATSAPP",
    whatsappButton: "MESSAGE US ON WHATSAPP",
    locationLabel: "LOCATION",
  },
  es: {
    sectionLabel: "CONTACTA",
    heading: "Reserva tu experiencia en Lanzarote",
    subheading:
      "Cuentanos tu tour privado ideal en Lanzarote. Respondemos a cada consulta de reserva en 24 horas.",
    fullName: "Nombre completo",
    email: "Correo electronico",
    phone: "Telefono (opcional)",
    dates: "Fechas preferidas (opcional)",
    message: "Cuentanos tu experiencia ideal...",
    submit: "ENVIAR CONSULTA",
    thankYouLabel: "GRACIAS",
    thankYouMessage: "Nos pondremos en contacto pronto",
    contactLabel: "CONTACTO",
    whatsappLabel: "WHATSAPP",
    whatsappButton: "ESCRIBENOS POR WHATSAPP",
    locationLabel: "UBICACION",
  },
  de: {
    sectionLabel: "KONTAKTIERE UNS",
    heading: "Buche dein Lanzarote Erlebnis",
    subheading:
      "Erzahl uns von deiner Traum-Tour auf Lanzarote. Wir antworten auf jede Buchungsanfrage innerhalb von 24 Stunden.",
    fullName: "Vollstandiger Name",
    email: "E-Mail-Adresse",
    phone: "Telefon (optional)",
    dates: "Wunschtermine (optional)",
    message: "Erzahl uns von deinem idealen Erlebnis...",
    submit: "ANFRAGE SENDEN",
    thankYouLabel: "DANKE",
    thankYouMessage: "Wir melden uns in Kurze",
    contactLabel: "KONTAKT",
    whatsappLabel: "WHATSAPP",
    whatsappButton: "SCHREIB UNS AUF WHATSAPP",
    locationLabel: "STANDORT",
  },
  fr: {
    sectionLabel: "CONTACTEZ-NOUS",
    heading: "Reservez votre experience a Lanzarote",
    subheading:
      "Parlez-nous de votre visite privee ideale a Lanzarote. Nous repondons a chaque demande de reservation sous 24 heures.",
    fullName: "Nom complet",
    email: "Adresse email",
    phone: "Telephone (optionnel)",
    dates: "Dates souhaitees (optionnel)",
    message: "Parlez-nous de votre experience ideale...",
    submit: "ENVOYER LA DEMANDE",
    thankYouLabel: "MERCI",
    thankYouMessage: "Nous vous recontacterons bientot",
    contactLabel: "CONTACT",
    whatsappLabel: "WHATSAPP",
    whatsappButton: "ECRIVEZ-NOUS SUR WHATSAPP",
    locationLabel: "LOCALISATION",
  },
};

interface ContactFormProps {
  lang?: Locale;
}

export function ContactForm({ lang = "en" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const t = content[lang];

  return (
    <section className="flex w-full flex-col gap-10 px-5 py-[60px] lg:flex-row lg:gap-20 lg:px-[120px] lg:py-[120px]">
      {/* Form */}
      <div className="flex w-full flex-col gap-8 lg:w-2/3">
        <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
          <SectionLabel withLine>{t.sectionLabel}</SectionLabel>
          <h2 className="font-cormorant text-[32px] font-light leading-[1.1] tracking-[-1px] text-text-primary lg:text-5xl">
            {t.heading}
          </h2>
          <p className="font-inter text-sm font-light leading-[1.8] text-text-secondary lg:text-base">
            {t.subheading}
          </p>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 border border-gold p-10">
            <span className="font-inter text-[11px] font-medium tracking-[3px] text-gold">
              {t.thankYouLabel}
            </span>
            <p className="text-center font-cormorant text-2xl font-light text-text-primary">
              {t.thankYouMessage}
            </p>
          </div>
        ) : (
          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:gap-6">
              <input
                type="text"
                placeholder={t.fullName}
                required
                className="w-full border border-border bg-transparent px-5 py-4 font-inter text-sm font-light text-text-primary placeholder:text-text-muted focus:border-gold focus:outline-none lg:w-1/2"
              />
              <input
                type="email"
                placeholder={t.email}
                required
                className="w-full border border-border bg-transparent px-5 py-4 font-inter text-sm font-light text-text-primary placeholder:text-text-muted focus:border-gold focus:outline-none lg:w-1/2"
              />
            </div>
            <div className="flex flex-col gap-5 lg:flex-row lg:gap-6">
              <input
                type="tel"
                placeholder={t.phone}
                className="w-full border border-border bg-transparent px-5 py-4 font-inter text-sm font-light text-text-primary placeholder:text-text-muted focus:border-gold focus:outline-none lg:w-1/2"
              />
              <input
                type="text"
                placeholder={t.dates}
                className="w-full border border-border bg-transparent px-5 py-4 font-inter text-sm font-light text-text-primary placeholder:text-text-muted focus:border-gold focus:outline-none lg:w-1/2"
              />
            </div>
            <textarea
              placeholder={t.message}
              rows={5}
              required
              className="w-full border border-border bg-transparent px-5 py-4 font-inter text-sm font-light text-text-primary placeholder:text-text-muted focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-gold px-9 py-4 font-inter text-xs font-medium tracking-[2px] text-text-dark transition-opacity hover:opacity-80 md:w-auto md:self-start"
            >
              {t.submit}
            </button>
          </form>
        )}
      </div>

      {/* Contact Details */}
      <div className="flex w-full flex-col gap-8 lg:w-1/3">
        <div className="flex flex-col gap-4">
          <span className="font-inter text-[10px] font-medium tracking-[2px] text-gold">
            {t.contactLabel}
          </span>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:hello@lanzaroteuntold.com"
              className="font-inter text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              hello@lanzaroteuntold.com
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-inter text-[10px] font-medium tracking-[2px] text-gold">
            {t.locationLabel}
          </span>
          <p className="font-inter text-sm text-text-secondary">
            Arrecife, Lanzarote
            <br />
            Canary Islands, Spain
          </p>
        </div>
      </div>
    </section>
  );
}
