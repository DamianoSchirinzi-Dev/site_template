"use client";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Header({ heroHeight }: { heroHeight: number }) {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overHero, setOverHero] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const preferDark = stored
      ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: light)").matches;
    setIsDark(preferDark);
    document.documentElement.classList.toggle("dark", preferDark);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      setScrolled(scrollPosition > 20);

      const threshold = Math.max(heroHeight - 20, 0);
      setOverHero(scrollPosition < threshold);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [heroHeight]);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <>
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ease-out ${
        scrolled
          ? "bg-background/95 backdrop-blur-2xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
        <a
          href="#"
          className={`text-2xl font-semibold tracking-tight hover:opacity-70 transition-all duration-500 ${
            overHero ? "text-white" : "text-gray-900"
          }`}
        >
          Business Name
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-md font-medium">
          <a
            href="#about"
            className={`relative transition-all duration-500 group ${
              overHero
                ? "text-white/80 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            About
            <span
              className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ease-out group-hover:w-full ${
                overHero ? "bg-white" : "bg-gray-900"
              }`}
            ></span>
          </a>
          <a
            href="#gallery"
            className={`relative transition-all duration-500 group ${
              overHero
                ? "text-white/80 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Gallery
            <span
              className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ease-out group-hover:w-full ${
                overHero ? "bg-white" : "bg-gray-900"
              }`}
            ></span>
          </a>
          <a
            href="#location"
            className={`relative transition-all duration-500 group ${
              overHero
                ? "text-white/80 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Find Us
            <span
              className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ease-out group-hover:w-full ${
                overHero ? "bg-white" : "bg-gray-900"
              }`}
            ></span>
          </a>
          <a
            href="#contact"
            className={`inline-flex items-center rounded-full px-6 py-2.5 transition-all duration-500 hover:opacity-90 hover:scale-105 ${
              overHero ? "bg-white text-gray-900" : "bg-gray-900 text-white"
            }`}
          >
            Contact
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <button
            className={`inline-flex h-9 w-9 items-center justify-center transition-all duration-300 ease-out ${
              overHero ? "text-white" : "text-gray-900"
            }`}
            onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
          >
            <div
              className={`transition-transform duration-300 ease-out ${
                open ? "rotate-90" : "rotate-0"
              }`}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>
      </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-100 ease-in-out ${
          open
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Background with backdrop blur */}
        <div className="absolute inset-0 bg-white/98 backdrop-blur-xl"></div>

        {/* Menu content */}
        <div className="relative h-full flex flex-col items-center justify-center gap-10 px-6">
          <a
            onClick={() => setOpen(false)}
            href="#about"
            className={`text-4xl font-semibold text-gray-900 hover:text-gray-600 transition-all ${
              open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 duration-0"
            }`}
            style={{ transitionDelay: open ? "100ms" : "0ms" }}
          >
            About
          </a>
          <a
            onClick={() => setOpen(false)}
            href="#gallery"
            className={`text-4xl font-semibold text-gray-900 hover:text-gray-600 transition-all ${
              open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 duration-0"
            }`}
            style={{ transitionDelay: open ? "150ms" : "0ms" }}
          >
            Gallery
          </a>
          <a
            onClick={() => setOpen(false)}
            href="#location"
            className={`text-4xl font-semibold text-gray-900 hover:text-gray-600 transition-all ${
              open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 duration-0"
            }`}
            style={{ transitionDelay: open ? "250ms" : "0ms" }}
          >
            Find Us
          </a>
          <a
            onClick={() => setOpen(false)}
            href="#contact"
            className={`inline-flex items-center rounded-full bg-gray-900 text-white px-10 py-4 text-2xl font-semibold transition-all hover:opacity-90 hover:scale-105 ${
              open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 duration-0"
            }`}
            style={{ transitionDelay: open ? "300ms" : "0ms" }}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}