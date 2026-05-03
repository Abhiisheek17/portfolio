"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavLinks from "@/components/layout/NavLinks";
import { X, Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 80) {
        setShow(false);
        setMenuOpen(false);
      } else {
        setShow(true);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-6 transition-all duration-300 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <div
          className="
            flex items-center justify-between
            px-6 md:px-10 py-4 md:py-5
            rounded-[20px]
            bg-white/60 backdrop-blur-xl
            border border-black/10
            shadow-sm
          "
        >
          <Link href="/" onClick={() => setMenuOpen(false)} aria-label="Home">
              <Image src="/logo.svg" alt="Abhishek Srivastava" width={36} height={36} priority />
            </Link>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              <NavLinks />
              <li>
                <Link
                  href="#contact"
                  className="font-medium text-sm text-black/70 hover:text-primary transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Hamburger button — mobile only */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-black/70 hover:text-black transition"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={`absolute top-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-b border-black/10 shadow-lg px-8 pt-28 pb-8 transition-all duration-300 ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-2">
            {[
              { label: "Work", href: "/#work" },
              { label: "About", href: "/#about" },
              { label: "Contact", href: "#contact" },
            ].map(({ label, href }) => (
              <li key={label} className="w-full text-center">
                <Link
                  href={href}
                  className="block py-3 font-medium text-base text-black/70 hover:text-primary transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}