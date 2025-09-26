import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart } from "lucide-react";
import { Link } from "react-router-dom";

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
  return (
    <section className="py-16 lg:py-24 bg-gradient-elegant">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-accent text-3xl text-accent mb-4">Featured Collection</h2>
          <h3 className="font-luxury text-3xl lg:text-4xl font-bold text-primary mb-6">
            Handpicked Elegance
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of premium garments, 
            each piece embodying the perfect blend of classic sophistication and modern refinement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className={`card-product fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Quick Actions */}
                <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    variant="secondary" 
                    size="icon" 
                    className="bg-white/90 hover:bg-white text-primary"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                {/* Add to Cart Button */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Button className="w-full btn-luxury text-sm">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-accent font-medium mb-2 tracking-wide uppercase">
                  {product.category}
                </p>
                <h4 className="font-luxury text-lg font-semibold text-foreground mb-2">
                  {product.name}
                </h4>
                <p className="text-xl font-bold text-primary">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop">
            <Button size="lg" className="btn-outline-luxury text-lg px-8 py-4">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};