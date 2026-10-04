import {
  Box,
  Building2,
  Glasses,
  Smartphone,
  Monitor,
  MousePointer2,
} from "lucide-react";

const solutions = [
  {
    icon: Box,
    title: "Digital Property Twins",
    text: "Transform architectural information into interactive digital properties.",
  },
  {
    icon: Monitor,
    title: "Interactive Web",
    text: "Let customers explore properties directly through a web browser.",
  },
  {
    icon: Smartphone,
    title: "Mobile Experience",
    text: "Bring the property experience to Android and iOS devices.",
  },
  {
    icon: Glasses,
    title: "VR Experience",
    text: "Allow customers to step inside the property using compatible VR headsets.",
  },
  {
    icon: MousePointer2,
    title: "Virtual Walkthroughs",
    text: "Navigate rooms, spaces and property layouts interactively.",
  },
  {
    icon: Building2,
    title: "Developer Sales Tool",
    text: "Give sales teams an immersive way to present properties to customers.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="bg-[#111] py-28 text-white md:py-36">

      <div className="mx-auto w-[90%] max-w-7xl">

        <div className="max-w-3xl">

          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-white/40">
            OUR SOLUTIONS
          </p>

          <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">

            One digital property.
            <br />

            <span className="font-normal">
              Multiple experiences.
            </span>

          </h2>

          <p className="mt-7 max-w-2xl text-lg text-white/50">
            PropTwin creates immersive property experiences that can be
            delivered across web, mobile and VR.
          </p>

        </div>

        <div className="mt-20 grid border border-white/10 md:grid-cols-3">

          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <div
                key={solution.title}
                className="border-b border-white/10 p-8 md:border-r"
              >

                <Icon size={27} className="mb-12 text-white/60" />

                <h3 className="text-xl font-semibold">
                  {solution.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-white/45">
                  {solution.text}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}