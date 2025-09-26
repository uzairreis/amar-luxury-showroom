import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

// Mock product data with more items
const products = [
  {
    id: 1,
    name: "Heritage Blazer",
    price: "₹8,500",
    originalPrice: "₹10,000",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Formal Wear",
    stock: 5,
    isNew: true
  },
  {
    id: 2,
    name: "Classic Oxford Shirt",
    price: "₹3,200",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Shirts",
    stock: 12
  },
  {
    id: 3,
    name: "Luxury Wool Coat",
    price: "₹12,000",
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Outerwear",
    stock: 3
  },
  {
    id: 4,
    name: "Premium Dress Pants",
    price: "₹4,800",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Trousers",
    stock: 8
  },
  {
    id: 5,
    name: "Silk Pocket Square",
    price: "₹1,200",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Accessories",
    stock: 15
  },
  {
    id: 6,
    name: "Cashmere Sweater",
    price: "₹6,500",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Knitwear",
    stock: 7,
    isNew: true
  }
];

const categories = ["All", "Formal Wear", "Shirts", "Outerwear", "Trousers", "Accessories", "Knitwear"];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = products.filter(product => 
    selectedCategory === "All" || product.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="py-16 bg-gradient-elegant">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-luxury text-4xl lg:text-5xl font-bold text-primary mb-4">
            Luxury Collection
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of premium garments, each piece crafted 
            with meticulous attention to detail and timeless elegance.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "btn-luxury" : "btn-outline-luxury"}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="btn-outline-luxury">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-border rounded px-3 py-2 bg-background text-foreground"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="card-product group fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  {/* Product Badges */}
                  <div className="absolute top-4 left-4 z-10 space-y-2">
                    {product.isNew && (
                      <span className="bg-accent text-accent-foreground px-3 py-1 text-xs font-medium rounded">
                        NEW
                      </span>
                    )}
                    {product.stock <= 5 && (
                      <span className="bg-destructive text-destructive-foreground px-3 py-1 text-xs font-medium rounded block">
                        Only {product.stock} left
                      </span>
                    )}
                  </div>

                  <Link to={`/product/${product.id}`}>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </Link>
                  
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
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-luxury text-lg font-semibold text-foreground mb-2 hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center space-x-2">
                    <p className="text-xl font-bold text-primary">
                      {product.price}
                    </p>
                    {product.originalPrice && (
                      <p className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </p>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {product.stock} in stock
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;