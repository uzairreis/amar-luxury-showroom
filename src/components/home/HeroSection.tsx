import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="fade-in-up">
          <h2 className="font-accent text-3xl md:text-4xl lg:text-5xl text-accent mb-4">
            Timeless Elegance
          </h2>
          <h1 className="font-luxury text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-wide">
            AMAR
          </h1>
          <p className="text-lg md:text-xl mb-2 tracking-[0.2em] uppercase text-gray-200">
            by REIS Enterprises
          </p>
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed text-gray-300">
            Discover our curated collection of luxury fashion that embodies old-money sophistication 
            and exotic elegance. Each piece is crafted for those who appreciate the finest things in life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button 
                size="lg" 
                className="btn-gold text-lg px-8 py-4 font-medium tracking-wide"
              >
                Explore Collection
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-outline-luxury text-lg px-8 py-4 font-medium tracking-wide border-white text-white hover:bg-white hover:text-primary"
              >
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};