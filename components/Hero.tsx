import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

        <div className="absolute right-0 top-0 h-full w-full bg-[radial-gradient(circle_at_75%_45%,rgba(255,255,255,0.15),transparent_40%)]" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-[90%] max-w-7xl items-center">

        <div className="max-w-4xl pt-20">

          <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-white/60">
            DIGITAL TWINS FOR REAL ESTATE
          </p>

          <h1 className="font-sans text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-8xl">

            Turn Properties
            <br />

            Into{" "}
            <span className="font-normal">
              Experiences.
            </span>

          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65 md:text-xl">

            PropTwin transforms apartments, villas and real-estate
            projects into immersive digital properties that customers
            can explore before they visit.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="#contact"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-white/85"
            >
              Build Your Property Twin
              <ArrowRight size={17} />
            </Link>

            <Link
              href="#experience"
              className="flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold transition hover:bg-white hover:text-black"
            >
              <Play size={16} />
              Explore Demo
            </Link>

          </div>

          <div className="mt-16 flex flex-wrap gap-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">

            <span>WEB</span>
            <span>MOBILE</span>
            <span>VR</span>
            <span>3D</span>
            <span>DIGITAL TWIN</span>

          </div>

        </div>

      </div>

    </section>
  );
}