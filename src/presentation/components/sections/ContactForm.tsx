"use client";

import { useState } from "react";
import { SectionLabel } from "@/presentation/components/ui/SectionLabel";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="flex w-full flex-col gap-10 px-5 py-[60px] lg:flex-row lg:gap-20 lg:px-[120px] lg:py-[120px]">
      {/* Form */}
      <div className="flex w-full flex-col gap-8 lg:w-2/3">
        <div className="flex flex-col gap-4">
          <SectionLabel withLine>GET IN TOUCH</SectionLabel>
          <h2 className="font-cormorant text-[32px] font-light leading-[1.1] tracking-[-1px] text-text-primary lg:text-5xl">
            Book your Lanzarote experience
          </h2>
          <p className="font-inter text-sm font-light leading-[1.8] text-text-secondary lg:text-base">
            Tell us about your dream Lanzarote private tour. We respond to every
            booking enquiry within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 border border-gold p-10">
            <span className="font-inter text-[11px] font-medium tracking-[3px] text-gold">
              THANK YOU
            </span>
            <p className="text-center font-cormorant text-2xl font-light text-text-primary">
              We&apos;ll be in touch shortly
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
                placeholder="Full Name"
                required
                className="w-full border border-border bg-transparent px-5 py-4 font-inter text-sm font-light text-text-primary placeholder:text-text-muted focus:border-gold focus:outline-none lg:w-1/2"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full border border-border bg-transparent px-5 py-4 font-inter text-sm font-light text-text-primary placeholder:text-text-muted focus:border-gold focus:outline-none lg:w-1/2"
              />
            </div>
            <div className="flex flex-col gap-5 lg:flex-row lg:gap-6">
              <input
                type="tel"
                placeholder="Phone (optional)"
                className="w-full border border-border bg-transparent px-5 py-4 font-inter text-sm font-light text-text-primary placeholder:text-text-muted focus:border-gold focus:outline-none lg:w-1/2"
              />
              <input
                type="text"
                placeholder="Preferred Dates (optional)"
                className="w-full border border-border bg-transparent px-5 py-4 font-inter text-sm font-light text-text-primary placeholder:text-text-muted focus:border-gold focus:outline-none lg:w-1/2"
              />
            </div>
            <textarea
              placeholder="Tell us about your ideal experience..."
              rows={5}
              required
              className="w-full border border-border bg-transparent px-5 py-4 font-inter text-sm font-light text-text-primary placeholder:text-text-muted focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="self-start bg-gold px-9 py-4 font-inter text-xs font-medium tracking-[2px] text-text-dark transition-opacity hover:opacity-80"
            >
              SEND ENQUIRY
            </button>
          </form>
        )}
      </div>

      {/* Contact Details */}
      <div className="flex w-full flex-col gap-8 lg:w-1/3">
        <div className="flex flex-col gap-4">
          <span className="font-inter text-[10px] font-medium tracking-[2px] text-gold">
            CONTACT
          </span>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:hello@lanzaroteuntold.com"
              className="font-inter text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              hello@lanzaroteuntold.com
            </a>
            <a
              href="tel:+34928000000"
              className="font-inter text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              +34 928 000 000
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-inter text-[10px] font-medium tracking-[2px] text-gold">
            WHATSAPP
          </span>
          <a
            href="https://wa.me/34928000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-gold px-6 py-4 font-inter text-xs font-medium tracking-[2px] text-gold transition-opacity hover:opacity-80"
          >
            MESSAGE US ON WHATSAPP
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-inter text-[10px] font-medium tracking-[2px] text-gold">
            LOCATION
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
