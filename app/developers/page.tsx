import Link from "next/link";
import {
  Building2,
  Cuboid,
  Globe2,
  Smartphone,
  Glasses,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function DevelopersPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ef] text-[#171717]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="mx-auto w-[90%] max-w-7xl py-32 md:py-40">

          <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-white/40">
            FOR REAL ESTATE DEVELOPERS
          </p>

          <h1 className="max-w-5xl text-5xl font-bold tracking-tight md:text-7xl">
            Sell properties through
            <span className="block text-white/50">
              digital experiences.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">
            PropTwin transforms apartments, villas and real-estate
            projects into interactive digital property experiences
            that customers can explore before visiting the site.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Build Your Property Twin
            </Link>

            <Link
              href="/experience"
              className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-white hover:text-black"
            >
              Explore Experience
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24">
        <div className="mx-auto w-[90%] max-w-7xl">

          <div className="grid gap-16 md:grid-cols-2 md:items-center">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/35">
                THE PROBLEM
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
                Buyers want to understand the property before they visit it.
              </h2>
            </div>

            <div className="text-lg leading-8 text-black/55">
              <p>
                Photographs, brochures and videos communicate only part
                of the property experience.
              </p>

              <p className="mt-6">
                PropTwin gives prospective buyers a way to explore
                spaces, understand layouts and experience the property
                digitally.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-black py-24 text-white">
        <div className="mx-auto w-[90%] max-w-7xl">

          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/35">
              THE PROPTWIN SOLUTION
            </p>

            <h2 className="mt-5 text-4xl font-bold md:text-6xl">
              One property.
              <span className="block text-white/45">
                Multiple digital experiences.
              </span>
            </h2>

            <p className="mt-7 text-lg leading-8 text-white/50">
              We create a digital twin of your property and transform
              it into experiences that can be delivered across web,
              mobile and VR.
            </p>
          </div>

          {/* SOLUTION CARDS */}
          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            <SolutionCard
              icon={<Cuboid size={26} />}
              title="Digital Property Twin"
              description="Create an interactive digital representation of your apartment, villa or real-estate project."
            />

            <SolutionCard
              icon={<Globe2 size={26} />}
              title="Interactive Web"
              description="Allow customers to explore properties directly from their browser without installing software."
            />

            <SolutionCard
              icon={<Smartphone size={26} />}
              title="Mobile Experience"
              description="Extend the property experience to Android and iOS devices for customers and sales teams."
            />

            <SolutionCard
              icon={<Glasses size={26} />}
              title="VR Experience"
              description="Create immersive virtual property walkthroughs for showrooms, exhibitions and remote customers."
            />

            <SolutionCard
              icon={<Building2 size={26} />}
              title="Virtual Showroom"
              description="Present multiple properties digitally from a single sales environment."
            />

            <SolutionCard
              icon={<BarChart3 size={26} />}
              title="Sales Experience"
              description="Give your sales team a powerful technology platform for presenting projects to prospective buyers."
            />

          </div>
        </div>
      </section>

      {/* WHAT WE NEED */}
      <section className="py-24">
        <div className="mx-auto w-[90%] max-w-7xl">

          <div className="grid gap-16 md:grid-cols-2">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/35">
                WHAT YOU PROVIDE
              </p>

              <h2 className="mt-5 text-4xl font-bold md:text-5xl">
                Give us your property information.
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/55">
                Your existing project information becomes the foundation
                of the digital property twin.
              </p>
            </div>

            <div className="space-y-4">

              <Requirement text="Floor plans and layouts" />
              <Requirement text="CAD drawings or architectural drawings" />
              <Requirement text="3D models, if available" />
              <Requirement text="Property photographs" />
              <Requirement text="Material and specification details" />
              <Requirement text="Project amenities and facilities" />

            </div>

          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="border-y border-black/10 bg-[#ebe8e2] py-24">
        <div className="mx-auto w-[90%] max-w-7xl">

          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/35">
              HOW IT WORKS
            </p>

            <h2 className="mt-5 text-4xl font-bold md:text-5xl">
              From property data to digital experience.
            </h2>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-4">

            <ProcessStep
              number="01"
              title="Share"
              text="Provide your property plans, models, images and specifications."
            />

            <ProcessStep
              number="02"
              title="Build"
              text="PropTwin creates the digital property twin."
            />

            <ProcessStep
              number="03"
              title="Experience"
              text="We create web, mobile and VR experiences."
            />

            <ProcessStep
              number="04"
              title="Deploy"
              text="Use the experience for marketing, sales and customer engagement."
            />

          </div>
        </div>
      </section>

      {/* BUSINESS VALUE */}
      <section className="py-24">
        <div className="mx-auto w-[90%] max-w-7xl">

          <div className="grid gap-10 md:grid-cols-3">

            <ValueCard
              number="01"
              title="Better Presentation"
              text="Present properties in a way that goes beyond static photographs and brochures."
            />

            <ValueCard
              number="02"
              title="Remote Experience"
              text="Allow customers to explore properties even before they reach the project site."
            />

            <ValueCard
              number="03"
              title="Future Ready"
              text="Build one digital property asset that can evolve across web, mobile and VR."
            />

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-black py-28 text-white">
        <div className="mx-auto w-[90%] max-w-5xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/35">
            READY TO BUILD?
          </p>

          <h2 className="mt-6 text-4xl font-bold md:text-6xl">
            Turn your property
            <span className="block text-white/45">
              into an experience.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/50">
            Talk to PropTwin about creating a digital twin for your
            next residential or real-estate project.
          </p>

          <Link
            href="/#contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Request a Demo
            <ArrowRight size={17} />
          </Link>

        </div>
      </section>

    </main>
  );
}


/* -------------------------------------------------------
   COMPONENTS
------------------------------------------------------- */

function SolutionCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:bg-white/[0.08]">

      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
        {icon}
      </div>

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-white/45">
        {description}
      </p>

    </div>
  );
}


function Requirement({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white p-5">

      <CheckCircle2
        size={20}
        className="shrink-0"
      />

      <span className="text-sm font-medium">
        {text}
      </span>

    </div>
  );
}


function ProcessStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl bg-white p-7">

      <span className="text-xs font-bold tracking-[0.2em] text-black/30">
        {number}
      </span>

      <h3 className="mt-5 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-black/50">
        {text}
      </p>

    </div>
  );
}


function ValueCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border-t border-black/20 pt-6">

      <span className="text-xs font-bold tracking-[0.2em] text-black/30">
        {number}
      </span>

      <h3 className="mt-4 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-black/50">
        {text}
      </p>

    </div>
  );
}