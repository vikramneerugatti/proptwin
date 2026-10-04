export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-white py-28 md:py-36"
    >

      <div className="mx-auto grid w-[90%] max-w-7xl items-center gap-16 md:grid-cols-[1.1fr_0.9fr]">

        <div className="relative aspect-[4/3] overflow-hidden bg-[#171717]">

          <div className="absolute inset-0 flex items-center justify-center">

            <div className="text-center">

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
                PROPTWIN DEMO
              </p>

              <h3 className="mt-4 text-4xl font-bold text-white">
                2BHK
              </h3>

              <p className="mt-2 text-white/50">
                Digital Property Twin
              </p>

            </div>

          </div>

          <div className="absolute bottom-5 left-5 rounded-full bg-white px-4 py-2 text-[10px] font-bold tracking-widest text-black">
            INTERACTIVE DEMO
          </div>

        </div>

        <div>

          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-black/40">
            EXPERIENCE PROP TWIN
          </p>

          <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">

            Don't just look at
            <br />

            a property.
            <br />

            <span className="font-normal">
              Step inside.
            </span>

          </h2>

          <p className="mt-7 text-lg leading-relaxed text-black/55">
            Our 2BHK digital twin demonstrates how an apartment can be
            transformed into an interactive digital experience.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-black/55">
            The same property experience can be extended to web, mobile
            and immersive VR environments.
          </p>

        </div>

      </div>

    </section>
  );
}