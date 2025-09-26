import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  useEffect(() => {
    // Luxury page load animation
    const tl = gsap.timeline();
    
    tl.from('.luxury-fade-in', {
      duration: 1.2,
      y: 60,
      opacity: 0,
      stagger: 0.15,
      ease: 'power3.out'
    });

    // Parallax effect for hero sections
    gsap.utils.toArray('.luxury-parallax').forEach((element: any) => {
      gsap.to(element, {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });

    // Luxury reveal animation for cards
    gsap.utils.toArray('.luxury-card').forEach((card: any) => {
      gsap.fromTo(card, {
        y: 100,
        opacity: 0,
        rotateX: 45,
      }, {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // Sophisticated text reveal
    gsap.utils.toArray('.luxury-text-reveal').forEach((text: any) => {
      const chars = text.textContent.split('');
      text.innerHTML = chars.map((char: string) => 
        char === ' ' ? ' ' : `<span class="char">${char}</span>`
      ).join('');

      gsap.fromTo(text.querySelectorAll('.char'), {
        y: 100,
        opacity: 0,
        rotateX: 90
      }, {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.02,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: text,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // Luxury button hover animations
    gsap.utils.toArray('.luxury-btn').forEach((btn: any) => {
      const tl = gsap.timeline({ paused: true });
      
      tl.to(btn, {
        scale: 1.05,
        y: -3,
        boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
        duration: 0.3,
        ease: 'power2.out'
      });

      btn.addEventListener('mouseenter', () => tl.play());
      btn.addEventListener('mouseleave', () => tl.reverse());
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const animateCartAdd = (element: HTMLElement) => {
    gsap.fromTo(element, {
      scale: 1,
      rotation: 0
    }, {
      scale: 1.2,
      rotation: 360,
      duration: 0.6,
      ease: 'back.out(1.7)',
      yoyo: true,
      repeat: 1
    });
  };

  const animateCartOpen = (element: HTMLElement) => {
    gsap.fromTo(element, {
      x: '100%',
      opacity: 0
    }, {
      x: '0%',
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out'
    });
  };

  const animateCartClose = (element: HTMLElement) => {
    gsap.to(element, {
      x: '100%',
      opacity: 0,
      duration: 0.6,
      ease: 'power3.in'
    });
  };

  return {
    animateCartAdd,
    animateCartOpen,
    animateCartClose
  };
};