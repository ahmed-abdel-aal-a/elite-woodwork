'use client';

import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Maximize2, ZoomIn } from 'lucide-react';

interface ProjectItem {
  id: string;
  number: string;
  category: string;
  title: string;
  entity: string;
  room: string;
  desc: string;
  thumbImage: string;
  images: string[];
  halls?: string[];
}

const LOUPE_SIZE = 144; // قطر العدسة بالبكسل
const ZOOM_RATIO = 3.2; // نسبة التكبير المعتمدة لبيان مسام الخشب

export default function ProjectCard3D({
  project,
  index = 0,
  isActiveOnMobile = false,
  onOpenLightbox,
}: {
  project: ProjectItem;
  index?: number;
  isActiveOnMobile?: boolean;
  onOpenLightbox: (initialIdx: number) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [lensActive, setLensActive] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0, bgX: 0, bgY: 0, imgW: 0, imgH: 0 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-150, 150], [10, -10]), { damping: 20, stiffness: 200 });
  const rotateY = useSpring(useTransform(x, [-150, 150], [-10, 10]), { damping: 20, stiffness: 200 });

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleCardMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // المعادلة الرياضية بالبكسل الصريح المنسوب لمركز العدسة (Zero Offset Mathematics)
  const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    const imgRect = imageContainerRef.current.getBoundingClientRect();

    const localX = e.clientX - imgRect.left;
    const localY = e.clientY - imgRect.top;

    // الحساب الهندسي الدقيق لموضع الخلفية المكبرة
    const bgX = (LOUPE_SIZE / 2) - (localX * ZOOM_RATIO);
    const bgY = (LOUPE_SIZE / 2) - (localY * ZOOM_RATIO);

    setLensPos({
      x: localX,
      y: localY,
      bgX,
      bgY,
      imgW: imgRect.width * ZOOM_RATIO,
      imgH: imgRect.height * ZOOM_RATIO,
    });
  };

  return (
    <div className="perspective-1000 w-full">
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        onMouseMove={handleCardMouseMove}
        onMouseLeave={handleCardMouseLeave}
        data-cursor="VIEW CRAFT"
        className={`relative bg-obsidian border overflow-hidden group transition-all duration-300 ${
          isActiveOnMobile
            ? 'border-gold shadow-[0_0_20px_rgba(212,175,55,0.25)]'
            : 'border-charcoal-border hover:border-gold/40'
        }`}
      >
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle 280px at ${lensPos.x}px ${lensPos.y}px, rgba(212, 175, 55, 0.12), transparent)`,
          }}
        />

        <div
          ref={imageContainerRef}
          onMouseMove={handleImageMouseMove}
          className="relative h-72 sm:h-80 lg:h-96 overflow-hidden cursor-pointer"
          onClick={() => {
            if (!lensActive) onOpenLightbox(0);
          }}
        >
          <img
            src={project.thumbImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* عدسة الفحص الدائرية الحقيقية مع المحاذاة بالبكسل الصريح وتغذيتها بالصورة الأصلية عالية الدقة */}
          {lensActive && (
            <div
              className="pointer-events-none absolute w-36 h-36 rounded-full border-2 border-gold shadow-[0_0_30px_rgba(0,0,0,0.85)] z-20 overflow-hidden -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${lensPos.x}px`,
                top: `${lensPos.y}px`,
                backgroundImage: `url(${project.images[0] || project.thumbImage})`,
                backgroundPosition: `${lensPos.bgX}px ${lensPos.bgY}px`,
                backgroundSize: `${lensPos.imgW}px ${lensPos.imgH}px`,
                backgroundRepeat: 'no-repeat',
              }}
            />
          )}

          <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 flex gap-2 z-30">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLensActive(!lensActive);
              }}
              title="Toggle Wood Grain Lens"
              className={`p-2 backdrop-blur-md border text-xs flex items-center gap-1.5 transition-colors ${
                lensActive ? 'bg-gold text-obsidian border-gold' : 'bg-obsidian/75 text-cream border-charcoal-border'
              }`}
            >
              <ZoomIn className="w-4 h-4" />
              <span className="hidden sm:inline text-[10px] font-mono">GRAIN LENS</span>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenLightbox(0);
              }}
              title="Fullscreen Lightbox"
              className="p-2 bg-obsidian/75 backdrop-blur-md border border-charcoal-border text-cream hover:text-gold transition-colors"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          <div className="absolute bottom-4 left-4 rtl:left-auto rtl:right-4 z-10 pointer-events-none">
            <span className="font-mono text-xs text-gold font-bold">{project.number}</span>
            <h4 className="text-lg font-bold uppercase text-cream">{project.room}</h4>
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-baseline">
            <h3 className="text-base font-bold uppercase text-cream">{project.title}</h3>
            <span className="text-[11px] font-mono text-stone-slate uppercase">{project.entity}</span>
          </div>
          <p className="mt-2 text-xs sm:text-sm text-stone-slate font-light leading-relaxed">{project.desc}</p>
        </div>
      </motion.div>
    </div>
  );
}
