'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { assetPath } from '@/lib/assets';

const heroWebpImages = [
  assetPath('/images/projects/imf_reception.webp'),
  assetPath('/images/projects/imf_auditorium.webp'),
  assetPath('/images/projects/imf_boardroom.webp'),
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % t.hero.slides.length);
    }, 7000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [t.hero.slides.length]);

  const handleManualSlide = (index: number) => {
    setCurrentSlide(index);
    startTimer();
  };

  const activeSlide = t.hero.slides[currentSlide] || t.hero.slides[0];

  return (
    <section className="relative w-full h-screen min-h-[720px] flex items-center justify-center overflow-hidden bg-obsidian">
      {/* 
        1. معمارية التلاشي التبادلي المستمر مع الزوم السينمائي البطيء والناعم (Cinematic Ken Burns Zoom):
        - حركة تكبير بطيئة وهادئة جداً (من 1.0 إلى 1.085) على مدار 7 ثوانٍ كاملة تعطي إحساس كاميرا وثائقية تتحرك بنعومة داخل صالات العرض.
        - عند الانتقال للشريحة التالية، تبدأ الصورة الجديدة التكبير من الصفر بينما تتلاشى الصورة السابقة دون أي توقف أو اهتزاز.
      */}
      <div className="absolute inset-0 z-0">
        {heroWebpImages.map((src, index) => {
          const isActive = index === currentSlide;
          return (
            <motion.div
              key={src}
              initial={{ opacity: index === 0 ? 1 : 0, scale: 1.0 }}
              animate={
                isActive
                  ? { opacity: 1, scale: [1.0, 1.085] }
                  : { opacity: 0, scale: 1.0 }
              }
              transition={
                isActive
                  ? {
                      opacity: { duration: 1.6, ease: [0.25, 0.1, 0.25, 1] },
                      scale: { duration: 7, ease: 'linear' },
                    }
                  : {
                      opacity: { duration: 1.6, ease: 'easeOut' },
                      scale: { duration: 1.6, ease: 'easeOut' },
                    }
              }
              className="absolute inset-0 pointer-events-none will-change-transform"
              style={{ zIndex: isActive ? 2 : 1 }}
            >
              <img
                src={src}
                alt="ELITE Architectural Woodwork"
                className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.04]"
                loading="eager"
              />
            </motion.div>
          );
        })}

        {/* تدرج هادئ وشفاف مدروس تحت النصوص فقط دون حجب جمال وروعة الصورة */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-obsidian/75 via-obsidian/35 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-44 z-10 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent pointer-events-none" />
      </div>

      {/* 2. الكتلة النصية بنطاق عريض ممتد (Ultra-Wide Architectural Canvas: max-w-[1600px]) */}
      <div className="relative z-20 max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 w-full pt-24 sm:pt-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.16,
                  delayChildren: isInitialLoad ? 2.3 : 0.08,
                },
              },
              exit: {
                opacity: 0,
                y: -18,
                filter: 'blur(6px)',
                transition: { duration: 0.35, ease: 'easeInOut' },
              },
            }}
            className="max-w-4xl"
          >
            {/* الشارة التوضيحية (Tag Badge) */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 35, scale: 0.85, filter: 'blur(8px)' },
                visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
              }}
              transition={{
                y: { type: 'spring', damping: 14, stiffness: 120, mass: 0.9 },
                scale: { type: 'spring', damping: 14, stiffness: 120, mass: 0.9 },
                opacity: { duration: 0.6, ease: 'easeOut' },
                filter: { duration: 0.5, ease: 'easeOut' },
              }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-obsidian/60 border border-gold/40 backdrop-blur-md mb-6 shadow-lg"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-cream font-semibold">
                {activeSlide.tag}
              </span>
            </motion.div>

            {/* العنوان الرئيسي السيادي العملاق مع قفزة سبرينج راقية وملموسة */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 68, scale: 0.9, filter: 'blur(16px)' },
                visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
              }}
              transition={{
                y: { type: 'spring', damping: 13, stiffness: 110, mass: 1 },
                scale: { type: 'spring', damping: 13, stiffness: 110, mass: 1 },
                opacity: { duration: 0.7, ease: 'easeOut' },
                filter: { duration: 0.6, ease: 'easeOut' },
              }}
              className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-cream uppercase leading-[1.04] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
            >
              {activeSlide.title}{' '}
              <span className="text-gradient-gold block sm:inline">
                {activeSlide.titleGradient}
              </span>
            </motion.h1>

            {/* الوصف المعماري */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 42, scale: 0.94, filter: 'blur(10px)' },
                visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
              }}
              transition={{
                y: { type: 'spring', damping: 14, stiffness: 115, mass: 0.9 },
                scale: { type: 'spring', damping: 14, stiffness: 115, mass: 0.9 },
                opacity: { duration: 0.65, ease: 'easeOut' },
                filter: { duration: 0.55, ease: 'easeOut' },
              }}
              className="mt-6 text-base sm:text-xl text-stone-sand font-normal leading-relaxed max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
            >
              {activeSlide.subtitle}
            </motion.p>

            {/* أزرار الإجراءات السيادية مع قفزة ملموسة بريميوم */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 38, scale: 0.88 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{
                y: { type: 'spring', damping: 13, stiffness: 120, mass: 0.9 },
                scale: { type: 'spring', damping: 13, stiffness: 120, mass: 0.9 },
                opacity: { duration: 0.6, ease: 'easeOut' },
              }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#portfolio"
                className="px-8 py-4 bg-gradient-to-r from-caramel to-caramel-dark text-cream text-xs uppercase tracking-[0.25em] font-bold border border-gold/40 hover:border-gold hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all shadow-xl"
              >
                {t.hero.explore}
              </a>
              <a
                href="#about"
                className="px-8 py-4 bg-obsidian/70 backdrop-blur-md text-stone-sand hover:text-cream text-xs uppercase tracking-[0.25em] font-semibold border border-white/15 hover:border-gold/50 transition-all shadow-xl"
              >
                {t.hero.story}
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3. شريط التنقل السفلي الممتد بعرض الشاشة */}
      <div className="absolute bottom-8 left-0 right-0 z-20 max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {t.hero.slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleManualSlide(index)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                currentSlide === index ? 'w-10 bg-gold shadow-[0_0_12px_rgba(212,175,55,0.9)]' : 'w-3 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <a
          href="#stats"
          className="hidden md:flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-stone-sand hover:text-gold transition-colors drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
        >
          <span>{t.hero.scroll}</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-gold" />
        </a>
      </div>
    </section>
  );
}
