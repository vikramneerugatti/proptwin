const steps = [
  {
    number: "01",
    title: "Share Your Property",
    text: "Provide floor plans, CAD drawings, 3D models, photographs and project information.",
  },
  {
    number: "02",
    title: "We Build the Twin",
    text: "PropTwin converts your property information into a detailed digital environment.",
  },
  {
    number: "03",
    title: "Create Experiences",
    text: "We prepare the property experience for web, mobile and VR.",
  },
  {
    number: "04",
    title: "Reach Customers",
    text: "Use the digital twin for marketing, sales presentations, enquiries and site visits.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-[#f5f3ef] py-28 md:py-36"
    >

      <div className="mx-auto w-[90%] max-w-7xl">

        <div className="max-w-3xl">

          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-black/40">
            HOW IT WORKS
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">

            From property data
            <br />

            to{" "}
            <span className="font-normal">
              digital experience.
            </span>

          </h2>

        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-4">

          {steps.map((step) => (
            <div
              key={step.number}
              className="border-t border-black/20 pt-6"
            >

              <span className="text-xs text-black/40">
                {step.number}
              </span>

              <h3 className="mt-14 text-xl font-bold">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-black/55">
                {step.text}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}