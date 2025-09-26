import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-elegant">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-accent text-3xl text-accent mb-4">Our Heritage</h2>
          <h1 className="font-luxury text-4xl lg:text-5xl font-bold text-primary mb-6">
            The AMAR Story
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Born from a passion for timeless elegance and old-money sophistication, 
            AMAR by REIS Enterprises represents the pinnacle of luxury fashion in Hyderabad.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-luxury text-3xl font-bold text-primary">
                Crafting Excellence Since Day One
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to bring old-money luxury to the modern world, AMAR represents 
                  more than just fashion—it's a lifestyle statement for those who understand that true 
                  elegance never goes out of style.
                </p>
                <p>
                  Our journey began in the heart of Hyderabad, where traditional craftsmanship meets 
                  contemporary design. Every piece in our collection tells a story of meticulous 
                  attention to detail, premium materials, and timeless sophistication.
                </p>
                <p>
                  We believe that luxury should be understated yet unmistakable, classic yet contemporary. 
                  This philosophy guides every decision we make, from fabric selection to the final stitch.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="AMAR Heritage"
                className="w-full h-96 object-cover rounded-sm shadow-luxury"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="font-luxury text-3xl lg:text-4xl font-bold mb-6">
              Our Core Values
            </h3>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              These principles guide everything we do, from design to delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto">
                <span className="font-luxury text-3xl font-bold text-accent-foreground">C</span>
              </div>
              <h4 className="font-luxury text-xl font-semibold">Craftsmanship</h4>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                Every garment is meticulously crafted using traditional techniques 
                and the finest materials available.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto">
                <span className="font-luxury text-3xl font-bold text-accent-foreground">E</span>
              </div>
              <h4 className="font-luxury text-xl font-semibold">Elegance</h4>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                Timeless designs that transcend trends, ensuring your investment 
                remains stylish for years to come.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto">
                <span className="font-luxury text-3xl font-bold text-accent-foreground">E</span>
              </div>
              <h4 className="font-luxury text-xl font-semibold">Exclusivity</h4>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                Limited collections ensure that each piece maintains its unique 
                character and exclusivity.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto">
                <span className="font-luxury text-3xl font-bold text-accent-foreground">S</span>
              </div>
              <h4 className="font-luxury text-xl font-semibold">Service</h4>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                Personalized attention and exceptional service that matches 
                the quality of our garments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-luxury text-3xl lg:text-4xl font-bold text-primary mb-8">
              A Legacy of Excellence
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="space-y-4">
                <div className="text-4xl font-bold text-accent">2024</div>
                <h4 className="font-luxury text-xl font-semibold">Founded</h4>
                <p className="text-sm text-muted-foreground">
                  Established in Hyderabad with a vision to redefine luxury fashion.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-4xl font-bold text-accent">100+</div>
                <h4 className="font-luxury text-xl font-semibold">Designs</h4>
                <p className="text-sm text-muted-foreground">
                  Carefully curated collection of premium garments and accessories.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-4xl font-bold text-accent">∞</div>
                <h4 className="font-luxury text-xl font-semibold">Satisfaction</h4>
                <p className="text-sm text-muted-foreground">
                  Committed to exceeding expectations with every interaction.
                </p>
              </div>
            </div>
            
            <div className="bg-muted/50 p-8 rounded-sm">
              <blockquote className="text-lg lg:text-xl italic text-foreground leading-relaxed mb-4">
                "We don't just create clothes; we craft experiences. Each piece tells a story 
                of heritage, quality, and timeless sophistication that speaks to the discerning individual."
              </blockquote>
              <cite className="text-accent font-medium">— REIS Enterprises</cite>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;