"use client";

import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import './GridMotion.css';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GridMotionProps {
  items?: (string | React.ReactNode)[];
  gradientColor?: string;
}

const GridMotion: React.FC<GridMotionProps> = ({ items = [], gradientColor = 'black' }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouseXRef = useRef(0);
  const lastUpdateRef = useRef(0);

  // Memoize combined items to prevent re-calculation
  const combinedItems = useMemo(() => {
    const totalItems = 16;
    return items.length > 0
      ? Array.from({ length: totalItems }, (_, i) => items[i % items.length])
      : Array.from({ length: totalItems }, (_, index) => `Item ${index + 1}`);
  }, [items]);

  useEffect(() => {
    // Initialize mouse position safely
    if (typeof window !== "undefined") {
      mouseXRef.current = window.innerWidth / 2;
    }

    gsap.ticker.lagSmoothing(0);

    let rafId: number | null = null;
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseXRef.current = e.clientX;
      
      // Throttle updates using RAF
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          const now = performance.now();
          const deltaTime = now - lastUpdateRef.current;
          
          // Only update if enough time has passed (60fps = ~16ms)
          if (deltaTime >= 16) {
            updateMotion();
            lastUpdateRef.current = now;
          }
          rafId = null;
        });
      }
    };

    const updateMotion = () => {
      const maxMoveAmount = 300;
      const baseDuration = 0.8;
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2];

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1;
          const moveAmount = ((mouseXRef.current / window.innerWidth) * maxMoveAmount - maxMoveAmount / 2) * direction;

          gsap.to(row, {
            x: moveAmount,
            duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: 'power3.out',
            overwrite: 'auto'
          });
        }
      });
    };

    // Scroll Animation
    const scrollAnims: gsap.core.Tween[] = [];
    rowRefs.current.forEach((row, index) => {
      if (row) {
        const direction = index % 2 === 0 ? 1 : -1;
        const tween = gsap.to(row, {
          xPercent: direction * 20,
          ease: "none",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          }
        });
        scrollAnims.push(tween);
      }
    });

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      
      // Cancel any pending RAF
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      // Kill scroll triggers and animations
      scrollAnims.forEach(anim => anim.kill());
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="noscroll loading" ref={gridRef}>
      <section
        className="intro"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`
        }}
      >
        <div className="gridMotion-container">
          {[...Array(4)].map((_, rowIndex) => (
            <div key={rowIndex} className="row" ref={el => { rowRefs.current[rowIndex] = el }}>
              {[...Array(4)].map((_, itemIndex) => {
                const content = combinedItems[rowIndex * 4 + itemIndex];
                return (
                  <div key={itemIndex} className="row__item">
                    <div className="row__item-inner" style={{ backgroundColor: '#111' }}>
                      {typeof content === 'string' && content.startsWith('/') ? (
                        <div
                          className="row__item-img"
                          style={{
                            backgroundImage: `url(${content})`
                          }}
                        ></div>
                      ) : (
                         <div className="row__item-content">{content}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="fullview"></div>
      </section>
    </div>
  );
};

export default GridMotion;
