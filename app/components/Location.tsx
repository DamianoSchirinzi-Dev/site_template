export default function Location() {
  return (
    <section id="location" className="py-24 md:py-32 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Visit Us</h2>
            <div className="space-y-6 text-base md:text-lg text-muted-foreground">
              <p className="font-light">
                123 Example Street
                <br />
                Manchester M1 2AB
              </p>
              <div className="grid sm:grid-cols-2 gap-8 pt-4">
                <div className="space-y-3">
                  <h3 className="font-medium text-foreground text-sm uppercase tracking-wider">Hours</h3>
                  <ul className="space-y-2 text-sm font-light">
                    <li>Monday – Friday: 9:00 – 18:00</li>
                    <li>Saturday: 10:00 – 17:00</li>
                    <li>Sunday: 11:00 – 16:00</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-medium text-foreground text-sm uppercase tracking-wider">Contact</h3>
                  <ul className="space-y-2 text-sm font-light">
                    <li>
                      <a href="tel:01610000000" className="hover:text-foreground transition-colors">
                        0161 000 0000
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@localbusiness.com" className="hover:text-foreground transition-colors">
                        info@localbusiness.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border shadow-lg animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <iframe
              title="Google Map"
              className="w-full h-[400px] md:h-[500px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Manchester%20M1&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}