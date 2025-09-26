import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";
import { motion } from "framer-motion";
import { useGSAP } from "@/hooks/useGSAP";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems, openCart } = useCartStore();
  useGSAP();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group">
            <div className="flex flex-col items-center">
              <h1 className="font-luxury text-2xl lg:text-3xl text-primary font-bold tracking-wider">
                AMAR
              </h1>
              <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase">
                by REIS Enterprises
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-foreground hover:text-accent transition-colors duration-300 font-medium tracking-wide"
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="text-foreground hover:text-accent transition-colors duration-300 font-medium tracking-wide"
            >
              Collection
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-accent transition-colors duration-300 font-medium tracking-wide"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-accent transition-colors duration-300 font-medium tracking-wide"
            >
              Contact
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:text-accent luxury-btn">
              <Search className="h-5 w-5" />
            </Button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-accent relative luxury-btn"
                onClick={openCart}
              >
                <ShoppingBag className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center"
                  >
                    {getTotalItems()}
                  </motion.span>
                )}
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-foreground hover:text-accent transition-colors duration-300 font-medium tracking-wide py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className="text-foreground hover:text-accent transition-colors duration-300 font-medium tracking-wide py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Collection
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:text-accent transition-colors duration-300 font-medium tracking-wide py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-foreground hover:text-accent transition-colors duration-300 font-medium tracking-wide py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex items-center space-x-4 pt-4 border-t border-border">
                <Button variant="ghost" size="icon" className="hover:text-accent">
                  <Search className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:text-accent relative"
                  onClick={openCart}
                >
                  <ShoppingBag className="h-5 w-5" />
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {getTotalItems()}
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};