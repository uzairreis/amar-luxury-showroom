export const BrandPhilosophy = () => {
  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-accent text-3xl text-accent mb-8">Our Philosophy</h2>
          <h3 className="font-luxury text-3xl lg:text-4xl font-bold mb-8">
            Where Heritage Meets Modernity
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <span className="font-luxury text-2xl font-bold text-accent-foreground">E</span>
              </div>
              <h4 className="font-luxury text-xl font-semibold">Elegance</h4>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                Every piece embodies timeless sophistication, crafted with meticulous attention to detail 
                that speaks to the discerning individual.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <span className="font-luxury text-2xl font-bold text-accent-foreground">Q</span>
              </div>
              <h4 className="font-luxury text-xl font-semibold">Quality</h4>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                We source only the finest materials and employ traditional craftsmanship techniques 
                to ensure lasting luxury.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <span className="font-luxury text-2xl font-bold text-accent-foreground">E</span>
              </div>
              <h4 className="font-luxury text-xl font-semibold">Exclusivity</h4>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                Limited collections ensure that you possess something truly unique, 
                reflecting your individual style and status.
              </p>
            </div>
          </div>

          <div className="mt-16 p-8 bg-primary-foreground/5 rounded-sm border border-primary-foreground/10">
            <blockquote className="text-lg lg:text-xl italic text-primary-foreground/90 leading-relaxed">
              "True luxury lies not in ostentation, but in the quiet confidence that comes from 
              wearing something perfectly crafted, timelessly designed, and inherently exclusive."
            </blockquote>
            <cite className="block mt-4 text-accent font-medium">— AMAR Design Philosophy</cite>
          </div>
        </div>
      </div>
    </section>
  );
};