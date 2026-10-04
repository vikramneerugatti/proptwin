"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#f5f3ef] text-[#171717]">

      {/* HERO */}
      <section className="bg-black text-white">
        <div className="mx-auto w-[90%] max-w-7xl py-28 md:py-36">

          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to PropTwin
          </Link>

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/35">
            REQUEST A DEMO
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Let's build your
            <span className="block text-white/45">
              digital property twin.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">
            Tell us about your property or real-estate project.
            Our team can discuss the right digital experience for
            your requirements.
          </p>

        </div>
      </section>

      {/* CONTACT + FORM */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid w-[90%] max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">

          {/* CONTACT INFORMATION */}
          <div>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/35">
              TALK TO PROPTWIN
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight">
              Start a conversation.
            </h2>

            <p className="mt-6 max-w-md leading-7 text-black/55">
              Whether you are developing apartments, villas,
              commercial properties or a large residential project,
              we can discuss how a digital twin can fit into your
              customer experience and sales process.
            </p>

            <div className="mt-10 space-y-5">

              <ContactItem
                icon={<Building2 size={20} />}
                title="PropTwin"
                text="Digital Twins for Real Estate"
              />

              <ContactItem
                icon={<Phone size={20} />}
                title="Phone"
                text="+91 9160244950"
                href="tel:+919160244950"
              />

              <ContactItem
                icon={<Mail size={20} />}
                title="Email"
                text="info@proptwin.in"
                href="mailto:info@proptwin.in"
              />

              <ContactItem
                icon={<MapPin size={20} />}
                title="Office"
                text="3rd floor, 2161, Social working Office Space, 4th ‘B’ Block, 100 Feet Road, Banashankari 6th Stage, Ganigara Palya, Bengaluru – 560062, Karnataka, India"
              />

            </div>

          </div>

          {/* FORM */}
          <div className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm md:p-10">

            {submitted ? (
              <SuccessMessage
                onReset={() => setSubmitted(false)}
              />
            ) : (
              <>
                <div className="mb-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/30">
                    PROJECT ENQUIRY
                  </p>

                  <h2 className="mt-3 text-2xl font-bold">
                    Tell us about your project
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-black/45">
                    Fill in the details below and our team can
                    understand your requirements.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >

                  {/* NAME */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-black/10 bg-[#f8f7f4] px-4 py-3.5 text-sm outline-none transition focus:border-black"
                    />
                  </div>

                  {/* COMPANY */}
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-medium"
                    >
                      Company / Organization
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      placeholder="Your company name"
                      className="w-full rounded-xl border border-black/10 bg-[#f8f7f4] px-4 py-3.5 text-sm outline-none transition focus:border-black"
                    />
                  </div>

                  {/* EMAIL + PHONE */}
                  <div className="grid gap-6 md:grid-cols-2">

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="w-full rounded-xl border border-black/10 bg-[#f8f7f4] px-4 py-3.5 text-sm outline-none transition focus:border-black"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium"
                      >
                        Phone
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91"
                        className="w-full rounded-xl border border-black/10 bg-[#f8f7f4] px-4 py-3.5 text-sm outline-none transition focus:border-black"
                      />
                    </div>

                  </div>

                  {/* PROJECT TYPE */}
                  <div>
                    <label
                      htmlFor="projectType"
                      className="mb-2 block text-sm font-medium"
                    >
                      Project Type
                    </label>

                    <select
                      id="projectType"
                      name="projectType"
                      required
                      className="w-full rounded-xl border border-black/10 bg-[#f8f7f4] px-4 py-3.5 text-sm outline-none transition focus:border-black"
                    >
                      <option value="">
                        Select project type
                      </option>

                      <option value="apartments">
                        Apartments
                      </option>

                      <option value="villas">
                        Villas
                      </option>

                      <option value="commercial">
                        Commercial Property
                      </option>

                      <option value="township">
                        Township / Large Development
                      </option>

                      <option value="other">
                        Other
                      </option>
                    </select>
                  </div>

                  {/* PROJECT STAGE */}
                  <div>
                    <label
                      htmlFor="projectStage"
                      className="mb-2 block text-sm font-medium"
                    >
                      Project Stage
                    </label>

                    <select
                      id="projectStage"
                      name="projectStage"
                      required
                      className="w-full rounded-xl border border-black/10 bg-[#f8f7f4] px-4 py-3.5 text-sm outline-none transition focus:border-black"
                    >
                      <option value="">
                        Select project stage
                      </option>

                      <option value="planning">
                        Planning
                      </option>

                      <option value="construction">
                        Under Construction
                      </option>

                      <option value="completed">
                        Completed
                      </option>

                      <option value="marketing">
                        Currently Marketing
                      </option>
                    </select>
                  </div>

                  {/* UNITS */}
                  <div>
                    <label
                      htmlFor="units"
                      className="mb-2 block text-sm font-medium"
                    >
                      Approximate Number of Units
                    </label>

                    <input
                      id="units"
                      name="units"
                      type="number"
                      min="1"
                      placeholder="Example: 120"
                      className="w-full rounded-xl border border-black/10 bg-[#f8f7f4] px-4 py-3.5 text-sm outline-none transition focus:border-black"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium"
                    >
                      Tell us about your requirement
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your property, 3D model, floor plans or the experience you want to create..."
                      className="w-full resize-none rounded-xl border border-black/10 bg-[#f8f7f4] px-4 py-3.5 text-sm outline-none transition focus:border-black"
                    />
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-4 text-sm font-semibold text-white transition hover:bg-black/80"
                  >
                    Submit Project Enquiry
                    <ArrowRight size={17} />
                  </button>

                </form>
              </>
            )}

          </div>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-black py-20 text-white">
        <div className="mx-auto w-[90%] max-w-5xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/35">
            PROPTWIN
          </p>

          <h2 className="mt-5 text-3xl font-bold md:text-5xl">
            One Property.
            <span className="block text-white/45">
              One Digital Twin.
            </span>
          </h2>

          <p className="mt-6 text-white/45">
            Web • Mobile • VR
          </p>

        </div>
      </section>

    </main>
  );
}


/* -------------------------------------------------------
   CONTACT ITEM
------------------------------------------------------- */

function ContactItem({
  icon,
  title,
  text,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  href?: string;
}) {
  const content = (
    <div className="flex gap-4">

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black text-white">
        {icon}
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/30">
          {title}
        </p>

        <p className="mt-1 text-sm leading-6 text-black/70">
          {text}
        </p>
      </div>

    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block transition hover:opacity-70"
      >
        {content}
      </a>
    );
  }

  return content;
}


/* -------------------------------------------------------
   SUCCESS
------------------------------------------------------- */

function SuccessMessage({
  onReset,
}: {
  onReset: () => void;
}) {
  return (
    <div className="flex min-h-[600px] flex-col items-center justify-center text-center">

      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
        ✓
      </div>

      <h2 className="mt-7 text-3xl font-bold">
        Enquiry received.
      </h2>

      <p className="mt-4 max-w-md leading-7 text-black/50">
        Thank you for contacting PropTwin. Your project details
        have been captured in this prototype form.
      </p>

      <button
        onClick={onReset}
        className="mt-8 rounded-full border border-black/20 px-6 py-3 text-sm font-medium transition hover:bg-black hover:text-white"
      >
        Submit Another Enquiry
      </button>

    </div>
  );
}