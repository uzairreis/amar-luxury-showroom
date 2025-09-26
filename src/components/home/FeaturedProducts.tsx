import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCartStore } from "@/store/cartStore";
import { useGSAP } from "@/hooks/useGSAP";
import { AnimatedSection, ScaleOnHover, StaggerChildren } from "@/components/animations/AnimatedSection";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";

// Mock product data
const featuredProducts = [
  {
    id: 1,
    name: "Heritage Blazer",
    price: "₹8,500",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Formal Wear"
  },
  {
    id: 2,
    name: "Classic Oxford Shirt",
    price: "₹3,200",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Shirts"
  },
  {
    id: 3,
    name: "Luxury Wool Coat",
    price: "₹12,000",
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Outerwear"
  },
  {
    id: 4,
    name: "Premium Dress Pants",
    price: "₹4,800",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Trousers"
  }
];

export const FeaturedProducts = () => {
  const addToCartRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const { addItem } = useCartStore();
  const { animateCartAdd } = useGSAP();

  const handleAddToCart = (product: typeof featuredProducts[0], index: number) => {
    // Add sophisticated cart animation
    const buttonElement = addToCartRefs.current[index];
    if (buttonElement) {
      animateCartAdd(buttonElement);
    }

    // Add to cart
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    });

    // Show elegant toast
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-elegant">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-accent text-3xl text-accent mb-4 luxury-text-reveal">Featured Collection</h2>
          <h3 className="font-luxury text-3xl lg:text-4xl font-bold text-primary mb-6 luxury-fade-in">
            Handpicked Elegance
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto luxury-fade-in">
            Discover our carefully curated selection of premium garments, 
            each piece embodying the perfect blend of classic sophistication and modern refinement.
          </p>
        </AnimatedSection>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <div key={product.id} className="luxury-card">
              <ScaleOnHover className="card-product group bg-card border border-border rounded-sm overflow-hidden transition-all duration-500 hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <motion.img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button 
                        variant="secondary" 
                        size="icon" 
                        className="bg-white/90 hover:bg-white text-primary luxury-btn"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </div>

                  {/* Add to Cart Button */}
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        ref={(el) => addToCartRefs.current[index] = el}
                        className="w-full btn-luxury text-sm luxury-btn"
                        onClick={() => handleAddToCart(product, index)}
                      >
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </motion.div>
                  </div>
                </div>

                <motion.div 
                  className="p-6"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-sm text-accent font-medium mb-2 tracking-wide uppercase">
                    {product.category}
                  </p>
                  <h4 className="font-luxury text-lg font-semibold text-foreground mb-2">
                    {product.name}
                  </h4>
                  <p className="text-xl font-bold text-primary">
                    {product.price}
                  </p>
                </motion.div>
              </ScaleOnHover>
            </div>
          ))}
        </StaggerChildren>

        <AnimatedSection className="text-center mt-12" delay={0.6}>
          <Link to="/shop">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="btn-outline-luxury text-lg px-8 py-4 luxury-btn">
                View All Products
              </Button>
            </motion.div>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};