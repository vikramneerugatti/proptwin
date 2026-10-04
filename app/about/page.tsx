import Link from "next/link";
import {
  Building2,
  Globe2,
  Smartphone,
  Glasses,
  Cuboid,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ef] text-black">

      {/* HERO */}
      <section className="bg-black px-6 py-28 text-white">
        <div className="mx-auto w-[90%] max-w-7xl">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
            ABOUT PROPTWIN
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-bold tracking-tight md:text-7xl">
            Digital twins for the
            <br />
            future of real estate.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">
            PropTwin transforms real-world properties into interactive
            digital experiences that customers can explore across web,
            mobile and VR.
          </p>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-24">
        <div className="mx-auto grid w-[90%] max-w-7xl gap-16 md:grid-cols-2">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
              OUR VISION
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
              A property should be experienced, not just viewed.
            </h2>
          </div>

          <div className="text-lg leading-8 text-black/60">

            <p>
              Traditional real-estate marketing depends heavily on
              photographs, brochures, videos and physical site visits.
              PropTwin introduces another layer of experience.
            </p>

            <p className="mt-6">
              We create digital property twins that allow potential
              customers to explore spaces, understand layouts and
              experience properties before visiting them physically.
            </p>

            <p className="mt-6">
              The same digital property twin can be delivered through
              websites, mobile applications and immersive VR
              experiences.
            </p>

          </div>

        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto w-[90%] max-w-7xl">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
            WHAT WE BUILD
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-bold md:text-5xl">
            One property. One digital twin. Multiple experiences.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {/* DIGITAL TWIN */}
            <div className="rounded-3xl bg-[#f5f3ef] p-8">

              <Cuboid size={32} />

              <h3 className="mt-6 text-xl font-bold">
                Digital Property Twins
              </h3>

              <p className="mt-4 leading-7 text-black/55">
                Transform architectural information and property
                designs into interactive digital representations.
              </p>

            </div>

            {/* WEB */}
            <div className="rounded-3xl bg-[#f5f3ef] p-8">

              <Globe2 size={32} />

              <h3 className="mt-6 text-xl font-bold">
                Web Experiences
              </h3>

              <p className="mt-4 leading-7 text-black/55">
                Give customers an interactive way to explore properties
                directly from a web browser.
              </p>

            </div>

            {/* MOBILE */}
            <div className="rounded-3xl bg-[#f5f3ef] p-8">

              <Smartphone size={32} />

              <h3 className="mt-6 text-xl font-bold">
                Mobile Experiences
              </h3>

              <p className="mt-4 leading-7 text-black/55">
                Extend the property experience to Android and iOS
                applications.
              </p>

            </div>

            {/* VR */}
            <div className="rounded-3xl bg-[#f5f3ef] p-8">

              <Glasses size={32} />

              <h3 className="mt-6 text-xl font-bold">
                VR Experiences
              </h3>

              <p className="mt-4 leading-7 text-black/55">
                Enable immersive property walkthroughs using compatible
                virtual-reality devices.
              </p>

            </div>

            {/* WALKTHROUGH */}
            <div className="rounded-3xl bg-[#f5f3ef] p-8">

              <Building2 size={32} />

              <h3 className="mt-6 text-xl font-bold">
                Virtual Walkthroughs
              </h3>

              <p className="mt-4 leading-7 text-black/55">
                Let customers move through rooms and spaces before
                physically visiting the property.
              </p>

            </div>

            {/* SALES */}
            <div className="rounded-3xl bg-[#f5f3ef] p-8">

              <ArrowRight size={32} />

              <h3 className="mt-6 text-xl font-bold">
                Developer Sales Tools
              </h3>

              <p className="mt-4 leading-7 text-black/55">
                Support property presentations, demonstrations,
                customer engagement and digital marketing.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* CUSTOMERS */}
      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto w-[90%] max-w-7xl">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">
            WHO WE SERVE
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-bold md:text-5xl">
            Built for the real-estate ecosystem.
          </h2>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {[
              "Real Estate Developers",
              "Apartment Developers",
              "Villa Developers",
              "Architects",
              "Real Estate Agencies",
              "Property Owners",
              "Marketing Agencies",
              "Construction Companies",
              "Property Consultants",
            ].map((customer) => (
              <div
                key={customer}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <p className="font-medium">
                  {customer}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* DIFFERENTIATOR */}
      <section className="px-6 py-24">
        <div className="mx-auto w-[90%] max-w-5xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
            THE PROPTWIN APPROACH
          </p>

          <h2 className="mt-6 text-4xl font-bold md:text-6xl">
            One Property.
            <br />
            One Digital Twin.
            <br />
            Multiple Experiences.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-black/55">
            Instead of creating separate experiences for every platform,
            PropTwin is designed around a common digital property twin
            that can evolve across web, mobile and immersive
            technologies.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#e7e2d9] px-6 py-20">
        <div className="mx-auto flex w-[90%] max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
              WORK WITH PROPTWIN
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Have a property project?
            </h2>

            <p className="mt-3 text-black/55">
              Let&apos;s discuss how your property can become a digital
              experience.
            </p>
          </div>

          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-black/80"
          >
            Request a Demo
            <ArrowRight
              size={18}
              className="ml-2"
            />
          </Link>

        </div>
      </section>

    </main>
  );
}