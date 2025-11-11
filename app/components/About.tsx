export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-balance animate-in fade-in slide-in-from-bottom-4 duration-700">
          Excellence in every detail
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          We combine decades of experience with modern innovation to deliver exceptional results. Our commitment to
          quality and customer satisfaction sets us apart in Manchester's competitive landscape.
        </p>
        <div className="grid md:grid-cols-3 gap-8 pt-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <div className="space-y-3 group">
            <div className="text-5xl font-semibold transition-transform duration-500 group-hover:scale-110">15+</div>
            <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
          </div>
          <div className="space-y-3 group">
            <div className="text-5xl font-semibold transition-transform duration-500 group-hover:scale-110">500+</div>
            <div className="text-sm text-muted-foreground font-medium">Happy Clients</div>
          </div>
          <div className="space-y-3 group">
            <div className="text-5xl font-semibold transition-transform duration-500 group-hover:scale-110">98%</div>
            <div className="text-sm text-muted-foreground font-medium">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}