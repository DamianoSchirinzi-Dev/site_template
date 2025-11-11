import Hero from "./components/Hero"
import About from "./components/About"
import Gallery from "./components/Gallery"
import Testimonials from "./components/Testimonials"
import Location from "./components/Location"
import ContactCta from "./components/ContactCta"

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <About />
        <Gallery />
        <Testimonials />
        <Location />
        <ContactCta />
      </main>
    </>
  )
}
