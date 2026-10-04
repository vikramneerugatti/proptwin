import Link from "next/link";
import { ArrowLeft, ArrowRight, Maximize2 } from "lucide-react";
import DigitalTwin from "@/components/DigitalTwin";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#f5f3ef] text-black">

      {/* HERO */}
      <section className="bg-black px-6 pb-20 pt-32 text-white">
        <div className="mx-auto w-[90%] max-w-7xl">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to PropTwin
          </Link>

          <p className="mt-12 text-xs font-bold uppercase tracking-[0.3em] text-white/40">
            INTERACTIVE PROPERTY EXPERIENCE
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-bold tracking-tight md:text-7xl">
            Step inside the
            <br />
            digital property twin.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">
            Explore a PropTwin 2BHK prototype directly in your browser.
            Select rooms, navigate between spaces, rotate the model and
            discover how a property can become an interactive digital
            experience.
          </p>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="px-6 py-20">
        <div className="mx-auto w-[90%] max-w-7xl">

          {/* LABEL */}
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
                PROPTWIN DEMO
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                2BHK Digital Property Twin
              </h2>

              <p className="mt-3 max-w-2xl text-black/55">
                This prototype demonstrates how an interactive property
                model can be presented to prospective customers.
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-xs font-medium text-white">
              <Maximize2 size={14} />
              Interactive 3D
            </div>

          </div>

          {/* DIGITAL TWIN */}
          <DigitalTwin />

        </div>
      </section>

      {/* EXPERIENCE FEATURES */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto w-[90%] max-w-7xl">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
            EXPERIENCE FEATURES
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-bold md:text-5xl">
            Explore the property your way.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl bg-[#f5f3ef] p-8">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white">
                01
              </div>

              <h3 className="mt-7 text-xl font-bold">
                Explore Rooms
              </h3>

              <p className="mt-4 leading-7 text-black/55">
                Move between the living room, bedrooms, kitchen and
                balcony using the interactive room navigation.
              </p>

            </div>

            <div className="rounded-3xl bg-[#f5f3ef] p-8">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white">
                02
              </div>

              <h3 className="mt-7 text-xl font-bold">
                Interactive Hotspots
              </h3>

              <p className="mt-4 leading-7 text-black/55">
                Select highlighted spaces inside the model to move the
                camera and explore different areas of the property.
              </p>

            </div>

            <div className="rounded-3xl bg-[#f5f3ef] p-8">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white">
                03
              </div>

              <h3 className="mt-7 text-xl font-bold">
                Customer Presentation
              </h3>

              <p className="mt-4 leading-7 text-black/55">
                Demonstrate a property digitally before a customer
                visits the physical project location.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* BUSINESS VALUE */}
      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto grid w-[90%] max-w-7xl gap-16 md:grid-cols-2">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">
              FOR REAL-ESTATE BUSINESSES
            </p>

            <h2 className="mt-5 text-4xl font-bold md:text-5xl">
              From property presentation to digital experience.
            </h2>

          </div>

          <div className="text-lg leading-8 text-white/55">

            <p>
              A digital property twin can become an additional
              technology layer for property marketing and customer
              engagement.
            </p>

            <p className="mt-6">
              Instead of relying only on static images or videos,
              customers can interact with a digital representation of
              the property.
            </p>

            <p className="mt-6 font-medium text-white">
              One Property → One Digital Twin → Multiple Experiences
            </p>

          </div>

        </div>
      </section>

      {/* FUTURE CHANNELS */}
      <section className="px-6 py-24">
        <div className="mx-auto w-[90%] max-w-7xl">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
            FUTURE EXPERIENCES
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-bold md:text-5xl">
            The same digital twin can evolve across platforms.
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-3">

            <div className="rounded-3xl border border-black/10 p-8">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/35">
                WEB
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Browser Experience
              </h3>

              <p className="mt-4 leading-7 text-black/55">
                Customers explore the property directly through a
                website.
              </p>

            </div>

            <div className="rounded-3xl border border-black/10 p-8">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/35">
                MOBILE
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Property in Your Pocket
              </h3>

              <p className="mt-4 leading-7 text-black/55">
                The digital property experience can be extended to
                Android and iOS.
              </p>

            </div>

            <div className="rounded-3xl border border-black/10 p-8">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/35">
                VR
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Step Inside
              </h3>

              <p className="mt-4 leading-7 text-black/55">
                The digital twin can later be extended into immersive
                VR experiences.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#e7e2d9] px-6 py-20">
        <div className="mx-auto flex w-[90%] max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
              BUILD YOUR DIGITAL PROPERTY
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Ready to create your property twin?
            </h2>

            <p className="mt-3 text-black/55">
              Share your project with PropTwin and explore the
              possibilities.
            </p>

          </div>

          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-black/80"
          >
            Request a Demo
            <ArrowRight size={18} className="ml-2" />
          </Link>

        </div>
      </section>

    </main>
  );
}