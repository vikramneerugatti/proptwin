import { Monitor, Smartphone, Glasses } from "lucide-react";

const channels = [
  {
    icon: Monitor,
    number: "01",
    title: "WEB",
    subtitle: "Explore in the browser",
    description:
      "Customers can explore apartments, villas and properties directly from a website without installing additional software.",
  },
  {
    icon: Smartphone,
    number: "02",
    title: "MOBILE",
    subtitle: "Property in your pocket",
    description:
      "Extend the same digital property experience to Android and iOS devices for customers, sales teams and site visits.",
  },
  {
    icon: Glasses,
    number: "03",
    title: "VR",
    subtitle: "Step inside the property",
    description:
      "Create immersive VR experiences where customers can virtually walk through the property using compatible headsets.",
  },
];

export default function Channels() {
  return (
    <section
      id="channels"
      className="bg-[#e8e4dc] py-28 md:py-36"
    >

      <div className="mx-auto w-[90%] max-w-7xl">

        <div className="max-w-3xl">

          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-black/40">
            ONE TWIN. THREE EXPERIENCES.
          </p>

          <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">

            Your property,
            <br />

            <span className="font-normal">
              wherever your customer is.
            </span>

          </h2>

        </div>

        <div className="mt-20 grid gap-px bg-black/10 md:grid-cols-3">

          {channels.map((channel) => {
            const Icon = channel.icon;

            return (
              <div
                key={channel.title}
                className="bg-[#e8e4dc] p-8 md:p-10"
              >

                <div className="flex items-center justify-between">

                  <Icon size={30} />

                  <span className="text-xs text-black/40">
                    {channel.number}
                  </span>

                </div>

                <h3 className="mt-20 text-3xl font-bold">
                  {channel.title}
                </h3>

                <p className="mt-2 font-medium">
                  {channel.subtitle}
                </p>

                <p className="mt-5 text-sm leading-relaxed text-black/55">
                  {channel.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}