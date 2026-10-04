import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black px-6 py-14 text-white">

      <div className="mx-auto grid w-[90%] max-w-7xl gap-12 md:grid-cols-3">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold">
            Prop<span className="font-normal">Twin</span>
          </h2>

          <p className="mt-3 text-sm text-white/50">
            Digital Twins for Real Estate.
          </p>

          <p className="mt-6 max-w-sm text-sm leading-6 text-white/40">
            Transforming apartments, villas and real-estate
            projects into interactive digital property experiences
            across web, mobile and VR.
          </p>
        </div>

        {/* SOLUTIONS */}
        <div>
          <p className="text-sm font-semibold">
            Solutions
          </p>

          <div className="mt-5 flex flex-col gap-3 text-sm text-white/50">
            <a href="#solutions" className="hover:text-white">
              Digital Property Twins
            </a>

            <a href="#experience" className="hover:text-white">
              Interactive Web
            </a>

            <a href="#channels" className="hover:text-white">
              Mobile Experience
            </a>

            <a href="#channels" className="hover:text-white">
              VR Experience
            </a>

            <a href="#process" className="hover:text-white">
              Virtual Walkthroughs
            </a>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <p className="text-sm font-semibold">
            Contact
          </p>

          <div className="mt-5 space-y-5 text-sm text-white/50">

            <div className="flex gap-3">
              <MapPin
                size={18}
                className="mt-1 shrink-0 text-white"
              />

              <p className="leading-6">
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

            <a
              href="tel:+919160244950"
              className="flex items-center gap-3 hover:text-white"
            >
              <Phone size={18} />
              +91 9160244950
            </a>

            <a
              href="mailto:info@proptwin.in"
              className="flex items-center gap-3 hover:text-white"
            >
              <Mail size={18} />
              info@proptwin.in
            </a>

          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="mx-auto mt-12 flex w-[90%] max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/30 md:flex-row">

        <p>
          © {new Date().getFullYear()} PropTwin. All rights reserved.
        </p>

        <p>
          Digital Twins • Web • Mobile • VR
        </p>

      </div>

    </footer>
  );
}