import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cartStore';
import { useGSAP } from '@/hooks/useGSAP';

export const CartSidebar = () => {
  const cartRef = useRef<HTMLDivElement>(null);
  const { animateCartOpen, animateCartClose } = useGSAP();
  const { 
    items, 
    isOpen, 
    closeCart, 
    updateQuantity, 
    removeItem, 
    getTotalItems, 
    getTotalPrice 
  } = useCartStore();

  useEffect(() => {
    if (cartRef.current) {
      if (isOpen) {
        animateCartOpen(cartRef.current);
      }
    }
  }, [isOpen, animateCartOpen]);

  const handleClose = () => {
    if (cartRef.current) {
      animateCartClose(cartRef.current);
      setTimeout(() => closeCart(), 600);
    } else {
      closeCart();
    }
  };

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={handleClose}
          />
          
          {/* Cart Sidebar */}
          <motion.div
            ref={cartRef}
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ 
              type: 'spring',
              damping: 25,
              stiffness: 200
            }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-background border-l border-border shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center space-x-3">
                <ShoppingBag className="h-6 w-6 text-accent" />
                <h2 className="font-luxury text-xl font-semibold text-primary">
                  Shopping Cart ({getTotalItems()})
                </h2>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="hover:bg-muted"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-luxury text-lg font-semibold text-foreground mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-muted-foreground">
                    Discover our luxury collection and add some elegance to your wardrobe.
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 bg-card rounded-sm border border-border"
                    >
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground truncate">
                          {item.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.category}
                        </p>
                        <p className="text-sm font-semibold text-accent">
                          {item.price}
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive hover:bg-destructive/10"
                          onClick={() => removeItem(item.id)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-t border-border p-6 space-y-4"
              >
                <div className="flex justify-between items-center">
                  <span className="font-luxury text-lg font-semibold text-foreground">
                    Total:
                  </span>
                  <span className="font-luxury text-xl font-bold text-accent">
                    {formatPrice(getTotalPrice())}
                  </span>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    className="w-full btn-gold text-lg py-6"
                    onClick={() => {
                      // TODO: Implement checkout
                      console.log('Proceeding to checkout...');
                    }}
                  >
                    Proceed to Checkout
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};