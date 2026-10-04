"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="absolute left-0 top-0 z-50 w-full text-white">
      <div className="mx-auto flex w-[90%] max-w-7xl items-center justify-between py-6">

        {/* LOGO */}
        <Link
          href="/"
          onClick={closeMenu}
          className="text-2xl font-bold tracking-tight"
        >
          Prop<span className="font-normal">Twin</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-8 md:flex">

          <Link
            href="/"
            className="text-sm text-white/80 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm text-white/80 transition hover:text-white"
          >
            About
          </Link>

          <Link
            href="/solutions"
            className="text-sm text-white/80 transition hover:text-white"
          >
            Solutions
          </Link>

          <Link
            href="/developers"
            className="text-sm text-white/80 transition hover:text-white"
          >
            Developers
          </Link>

          <Link
            href="/experience"
            className="text-sm text-white/80 transition hover:text-white"
          >
            Experience
          </Link>

          <Link
            href="/#channels"
            className="text-sm text-white/80 transition hover:text-white"
          >
            Web / Mobile / VR
          </Link>

          <Link
            href="/#process"
            className="text-sm text-white/80 transition hover:text-white"
          >
            How It Works
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-medium transition hover:bg-white hover:text-black"
          >
            Request a Demo
          </Link>

        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>

      </div>

      {/* MOBILE NAVIGATION */}
      {open && (
        <div className="mx-4 rounded-2xl bg-black p-6 shadow-2xl md:hidden">

          <div className="flex flex-col gap-5">

            <Link
              href="/"
              onClick={closeMenu}
              className="text-white/80 transition hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="text-white/80 transition hover:text-white"
            >
              About
            </Link>

            <Link
              href="/solutions"
              onClick={closeMenu}
              className="text-white/80 transition hover:text-white"
            >
              Solutions
            </Link>

            <Link
              href="/experience"
              onClick={closeMenu}
              className="text-white/80 transition hover:text-white"
            >
              Experience
            </Link>

            <Link
              href="/#channels"
              onClick={closeMenu}
              className="text-white/80 transition hover:text-white"
            >
              Web / Mobile / VR
            </Link>

            <Link
              href="/#process"
              onClick={closeMenu}
              className="text-white/80 transition hover:text-white"
            >
              How It Works
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-black"
            >
              Request a Demo
            </Link>

          </div>

        </div>
      )}

    </header>
  );
}