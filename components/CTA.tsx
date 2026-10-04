import { Mail, MapPin, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="bg-[#f5f3ef] px-6 py-24 text-black"
    >
      <div className="mx-auto grid w-[90%] max-w-7xl gap-12 md:grid-cols-2">

        {/* LEFT */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
            CONTACT PROPTWIN
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
            Ready to turn your property into an experience?
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-black/60">
            Talk to PropTwin about creating a digital twin for your
            apartment, villa, residential project or real-estate
            development.
          </p>

          <a
            href="mailto:info@proptwin.in"
            className="mt-8 inline-flex rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-black/80"
          >
            Request a Demo
          </a>
        </div>

        {/* RIGHT */}
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">

          <h3 className="text-2xl font-bold">
            PropTwin
          </h3>

          <p className="mt-2 text-sm font-medium text-black/50">
            Digital Twins for Real Estate
          </p>

          {/* ADDRESS */}
          <div className="mt-8 flex gap-4">
            <div className="mt-1">
              <MapPin size={22} />
            </div>

            <div>
              <p className="text-sm font-semibold">
                Office Address
              </p>

              <p className="mt-2 text-sm leading-7 text-black/60">
                3rd Floor, 2161,
                <br />
                Social Working Office Space,
                <br />
                4th ‘B’ Block, 100 Feet Road,
                <br />
                Banashankari 6th Stage,
                <br />
                Ganigara Palya,
                <br />
                Bengaluru – 560062,
                <br />
                Karnataka, India.
              </p>
            </div>
          </div>

          {/* PHONE */}
          <div className="mt-7 flex items-center gap-4">
            <Phone size={22} />

            <div>
              <p className="text-sm font-semibold">
                Phone
              </p>

              <a
                href="tel:+919160244950"
                className="mt-1 block text-sm text-black/60 hover:text-black"
              >
                +91 9160244950
              </a>
            </div>
          </div>

          {/* EMAIL */}
          <div className="mt-7 flex items-center gap-4">
            <Mail size={22} />

            <div>
              <p className="text-sm font-semibold">
                Email
              </p>

              <a
                href="mailto:info@proptwin.in"
                className="mt-1 block text-sm text-black/60 hover:text-black"
              >
                info@proptwin.in
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
