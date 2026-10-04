import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Cuboid,
  Globe2,
  Glasses,
  LayoutDashboard,
  Smartphone,
  Video,
} from "lucide-react";

const solutions = [
  {
    icon: Cuboid,
    number: "01",
    title: "Digital Property Twin",
    description:
      "Convert your apartment, villa or real-estate project into an interactive digital representation that can become the foundation for multiple customer experiences.",
    features: [
      "3D property representation",
      "Room-level navigation",
      "Interactive spaces",
      "Property information",
    ],
  },
  {
    icon: Globe2,
    number: "02",
    title: "Interactive Web Experience",
    description:
      "Give prospective buyers an opportunity to explore your property directly from a web browser without installing additional software.",
    features: [
      "Browser-based exploration",
      "Interactive 3D",
      "Room navigation",
      "Responsive experience",
    ],
  },
  {
    icon: Smartphone,
    number: "03",
    title: "Mobile Property Experience",
    description:
      "Extend your digital property twin to mobile devices so customers and sales teams can carry the property experience wherever they go.",
    features: [
      "Android experience",
      "iOS experience",
      "Touch interaction",
      "Mobile property presentation",
    ],
  },
  {
    icon: Glasses,
    number: "04",
    title: "VR Property Experience",
    description:
      "Create immersive virtual walkthroughs that allow customers to experience spaces using compatible virtual-reality devices.",
    features: [
      "Immersive walkthrough",
      "VR-ready environments",
      "Room exploration",
      "Future WebXR integration",
    ],
  },
  {
    icon: Video,
    number: "05",
    title: "Virtual Walkthroughs",
    description:
      "Create interactive property journeys that help customers understand layouts, spaces and project features before visiting the physical site.",
    features: [
      "Property walkthrough",
      "Room-to-room navigation",
      "Interactive hotspots",
      "Guided exploration",
    ],
  },
  {
    icon: LayoutDashboard,
    number: "06",
    title: "Developer Sales Experience",
    description:
      "Use the digital twin as a technology-enabled sales and presentation tool for property developers, sales teams and marketing campaigns.",
    features: [
      "Sales presentations",
      "Customer demonstrations",
      "Project showcases",
      "Digital marketing",
    ],
  },
];

const industries = [
  "Residential Apartments",
  "Villa Projects",
  "Luxury Residences",
  "Gated Communities",
  "Commercial Properties",
  "Real Estate Marketing",
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ef] text-black">

      {/* HERO */}
      <section className="bg-black px-6 py-28 text-white">
        <div className="mx-auto w-[90%] max-w-7xl">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
            PROPTWIN SOLUTIONS
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-bold tracking-tight md:text-7xl">
            Technology that turns
            <br />
            properties into experiences.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">
            PropTwin creates digital property experiences for real-estate
            businesses across web, mobile and immersive technologies.
          </p>

        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24">
        <div className="mx-auto grid w-[90%] max-w-7xl gap-16 md:grid-cols-2">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
              ONE DIGITAL FOUNDATION
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
              One property.
              <br />
              Multiple experiences.
            </h2>
          </div>

          <div className="text-lg leading-8 text-black/60">

            <p>
              Your property data, architectural information and 3D
              representation can become the foundation for a connected
              digital experience.
            </p>

            <p className="mt-6">
              PropTwin is designed to take that digital property
              representation and extend it across different customer
              touchpoints.
            </p>

            <p className="mt-6 font-medium text-black">
              Web → Mobile → VR
            </p>

          </div>

        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto w-[90%] max-w-7xl">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
            OUR SOLUTIONS
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-bold md:text-5xl">
            From property data to customer experience.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2">

            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <div
                  key={solution.number}
                  className="group rounded-3xl border border-black/10 bg-[#f5f3ef] p-8 transition hover:-translate-y-1 hover:shadow-xl md:p-10"
                >

                  <div className="flex items-start justify-between">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                      <Icon size={25} />
                    </div>

                    <span className="text-sm font-bold text-black/20">
                      {solution.number}
                    </span>

                  </div>

                  <h3 className="mt-8 text-2xl font-bold">
                    {solution.title}
                  </h3>

                  <p className="mt-4 leading-7 text-black/55">
                    {solution.description}
                  </p>

                  <div className="mt-7 border-t border-black/10 pt-6">

                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/35">
                      Includes
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-3">

                      {solution.features.map((feature) => (
                        <div
                          key={feature}
                          className="text-sm text-black/60"
                        >
                          <span className="mr-2">
                            →
                          </span>
                          {feature}
                        </div>
                      ))}

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto w-[90%] max-w-7xl">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">
                PROPERTY TYPES
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-bold md:text-5xl">
                Built for different real-estate projects.
              </h2>

            </div>

            <Building2
              size={48}
              strokeWidth={1.2}
              className="text-white/30"
            />

          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <p className="font-medium">
                  {industry}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* WORKFLOW */}
      <section className="px-6 py-24">
        <div className="mx-auto w-[90%] max-w-7xl">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
            HOW IT CONNECTS
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-bold md:text-5xl">
            Your property becomes a digital experience.
          </h2>

          <div className="mt-14 overflow-hidden rounded-3xl bg-black p-8 text-white md:p-12">

            <div className="grid gap-8 md:grid-cols-5 md:items-center">

              <div>
                <p className="text-xs text-white/40">
                  INPUT
                </p>

                <p className="mt-3 text-xl font-bold">
                  Property Data
                </p>

                <p className="mt-2 text-sm text-white/45">
                  Plans, CAD, 3D, images and specifications
                </p>
              </div>

              <div className="hidden text-center text-2xl text-white/30 md:block">
                →
              </div>

              <div>
                <p className="text-xs text-white/40">
                  PROPTWIN
                </p>

                <p className="mt-3 text-xl font-bold">
                  Digital Twin
                </p>

                <p className="mt-2 text-sm text-white/45">
                  Interactive digital property model
                </p>
              </div>

              <div className="hidden text-center text-2xl text-white/30 md:block">
                →
              </div>

              <div>
                <p className="text-xs text-white/40">
                  OUTPUT
                </p>

                <p className="mt-3 text-xl font-bold">
                  Experiences
                </p>

                <p className="mt-2 text-sm text-white/45">
                  Web, Mobile and VR
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#e7e2d9] px-6 py-20">
        <div className="mx-auto flex w-[90%] max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
              START YOUR PROJECT
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Have a property to transform?
            </h2>

            <p className="mt-3 text-black/55">
              Talk to PropTwin about creating your digital property
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