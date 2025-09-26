import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up',
  duration = 0.8 
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: 60, opacity: 0 };
      case 'down': return { y: -60, opacity: 0 };
      case 'left': return { x: -60, opacity: 0 };
      case 'right': return { x: 60, opacity: 0 };
      default: return { y: 60, opacity: 0 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitialPosition()}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
};

export const ScaleOnHover: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale: 1.05,
        y: -5,
        transition: { duration: 0.3, ease: 'easeOut' }
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerChildren: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  staggerDelay?: number;
}> = ({ children, className = '', staggerDelay = 0.1 }) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { 
              y: 0, 
              opacity: 1,
              transition: { duration: 0.6, ease: 'easeOut' }
            }
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export const FloatingElement: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      {children}
    </motion.div>
  );
};