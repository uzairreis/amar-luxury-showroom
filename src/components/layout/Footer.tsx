import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-luxury-black text-luxury-black-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <h3 className="font-luxury text-2xl text-accent font-bold tracking-wider">
                AMAR
              </h3>
              <p className="text-sm text-muted-foreground tracking-[0.2em] uppercase">
                by REIS Enterprises
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Timeless luxury fashion that embodies old-money sophistication and exotic elegance. 
              Crafted for those who appreciate the finest things in life.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-luxury text-lg font-semibold text-accent">Quick Links</h4>
            <div className="space-y-2">
              <Link 
                to="/shop" 
                className="block text-sm hover:text-accent transition-colors duration-300"
              >
                Collection
              </Link>
              <Link 
                to="/about" 
                className="block text-sm hover:text-accent transition-colors duration-300"
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="block text-sm hover:text-accent transition-colors duration-300"
              >
                Contact
              </Link>
              <Link 
                to="/size-guide" 
                className="block text-sm hover:text-accent transition-colors duration-300"
              >
                Size Guide
              </Link>
            </div>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h4 className="font-luxury text-lg font-semibold text-accent">Customer Care</h4>
            <div className="space-y-2">
              <Link 
                to="/shipping" 
                className="block text-sm hover:text-accent transition-colors duration-300"
              >
                Shipping Info
              </Link>
              <Link 
                to="/returns" 
                className="block text-sm hover:text-accent transition-colors duration-300"
              >
                Returns & Exchanges
              </Link>
              <Link 
                to="/privacy" 
                className="block text-sm hover:text-accent transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="block text-sm hover:text-accent transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-luxury text-lg font-semibold text-accent">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm">Hyderabad, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm">+91 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm">hello@amarfashion.com</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4 pt-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 AMAR by REIS Enterprises. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Crafted with excellence in Hyderabad
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};