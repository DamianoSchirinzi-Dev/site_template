"use client"
import { useEffect, useState } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"

export default function Header() {
  const [open, setOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("theme")
    const preferDark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches
    setIsDark(preferDark)
    document.documentElement.classList.toggle("dark", preferDark)

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled ? "bg-background/80 backdrop-blur-xl shadow-sm border-b border-border/50" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-semibold tracking-tight hover:opacity-70 transition-opacity duration-300">
          Business Name
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
            About
          </a>
          <a href="#gallery" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
            Gallery
          </a>
          <a href="#location" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
            Find Us
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-foreground text-background px-6 py-2.5 transition-all duration-300 hover:opacity-90 hover:scale-105"
          >
            Contact
          </a>
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/50 hover:bg-muted transition-all duration-300"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/50 hover:bg-muted transition-all duration-300"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button className="inline-flex h-9 w-9 items-center justify-center" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 py-6 flex flex-col items-center gap-6 text-base animate-in fade-in slide-in-from-top-4 duration-300">
          <a
            onClick={() => setOpen(false)}
            href="#about"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
          <a
            onClick={() => setOpen(false)}
            href="#gallery"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Gallery
          </a>
          <a
            onClick={() => setOpen(false)}
            href="#location"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Find Us
          </a>
          <a
            onClick={() => setOpen(false)}
            href="#contact"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  )
}