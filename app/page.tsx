import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solutions from "@/components/Solutions";
import Experience from "@/components/Experience";
import DigitalTwin from "@/components/DigitalTwin";
import Channels from "@/components/Channels";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* The Problem */}
        <Problem />

        {/* PropTwin Solutions */}
        <Solutions />

        {/* Property Experience */}
        <Experience />

        {/* Interactive Digital Twin */}
        <section className="bg-black py-20">
          <div className="mx-auto w-[90%] max-w-7xl">

            {/* Section Heading */}
            <div className="mb-10 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">
                INTERACTIVE DIGITAL TWIN
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-6xl">
                Explore the 2BHK.
              </h2>

              <p className="mt-5 max-w-2xl text-white/50">
                Navigate the PropTwin property prototype directly
                inside your browser.
              </p>
            </div>

            {/* 3D Digital Twin */}
            <DigitalTwin />

          </div>
        </section>

        {/* Web / Mobile / VR */}
        <Channels />

        {/* How PropTwin Works */}
        <Process />

        {/* Contact / CTA */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

