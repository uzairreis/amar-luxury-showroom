import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useGSAP } from "@/hooks/useGSAP";
import { AnimatedSection, FloatingElement } from "@/components/animations/AnimatedSection";
import { motion } from "framer-motion";

export const HeroSection = () => {
  useGSAP();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden luxury-parallax">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="luxury-fade-in">
          <motion.h2 
            className="font-accent text-3xl md:text-4xl lg:text-5xl text-accent mb-4 luxury-text-reveal"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Timeless Elegance
          </motion.h2>
          
          <motion.h1 
            className="font-luxury text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-wide luxury-text-reveal relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(212,175,55,0.3)] relative z-10">
              AMAR
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent blur-sm opacity-50 animate-pulse">
              AMAR
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-2 tracking-[0.2em] uppercase text-gray-200 luxury-fade-in"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            by REIS Enterprises
          </motion.p>
          
          <motion.p 
            className="text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed text-gray-300 luxury-fade-in"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Discover our curated collection of luxury fashion that embodies old-money sophistication 
            and exotic elegance. Each piece is crafted for those who appreciate the finest things in life.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Link to="/shop">
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="btn-gold text-lg px-8 py-4 font-medium tracking-wide luxury-btn"
                >
                  Explore Collection
                </Button>
              </motion.div>
            </Link>
            <Link to="/about">
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="btn-outline-luxury text-lg px-8 py-4 font-medium tracking-wide border-white text-white hover:bg-white hover:text-primary"
                >
                  Our Story
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <FloatingElement className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </FloatingElement>
    </section>
  );
};