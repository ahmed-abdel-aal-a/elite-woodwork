'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function MagneticCursor() {
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener('mousemove', moveCursor);

    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-cursor]');
      if (target) {
        setIsHovered(true);
        setCursorText(target.getAttribute('data-cursor') || '');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="desktop-only-cursor pointer-events-none fixed inset-0 z-50">
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full border border-gold/40 backdrop-blur-[1px]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? 84 : 32,
          height: isHovered ? 84 : 32,
          backgroundColor: isHovered ? 'rgba(143, 93, 56, 0.25)' : 'transparent',
          transition: 'width 0.3s, height 0.3s, background-color 0.3s',
        }}
      >
        {cursorText && (
          <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-cream">
            {cursorText}
          </span>
        )}
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-gold rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isHovered ? 0 : 1,
        }}
      />
    </div>
  );
}
