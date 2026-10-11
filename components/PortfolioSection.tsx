'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard3D from './ProjectCard3D';
import { useLanguage } from '@/context/LanguageContext';
import { assetPath } from '@/lib/assets';

export default function PortfolioSection() {
  const [filter, setFilter] = useState('all');
  const [activeLightbox, setActiveLightbox] = useState<{
    project: any;
    currentImageIdx: number;
  } | null>(null);
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);
  const [activeDesktopIdx, setActiveDesktopIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const desktopCarouselRef = useRef<HTMLDivElement>(null);
  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const activeMobileIdxRef = useRef(0);
  const activeDesktopIdxRef = useRef(0);

  const isInView = useInView(sectionRef, { amount: 0.15 });
  const { t, lang } = useLanguage();
  const isRtl = lang === 'ar';

  useEffect(() => {
    activeMobileIdxRef.current = activeMobileIdx;
  }, [activeMobileIdx]);

  useEffect(() => {
    activeDesktopIdxRef.current = activeDesktopIdx;
  }, [activeDesktopIdx]);

  // Multi-image high-resolution assets & lightweight thumbnail pipeline
  const projectAssetsMap: Record<string, { thumb: string; images: string[]; halls?: string[] }> = {
    imf: {
      thumb: assetPath('/images/projects/thumbs/imf_reception.webp'),
      images: [
        assetPath('/images/projects/imf_reception.webp'),
        assetPath('/images/projects/imf_auditorium.webp'),
        assetPath('/images/projects/imf_boardroom.webp'),
        assetPath('/images/projects/imf_pantry.webp'),
      ],
      halls: [
        t.portfolio.imf_halls.reception,
        t.portfolio.imf_halls.auditorium,
        t.portfolio.imf_halls.boardroom,
        t.portfolio.imf_halls.pantry,
      ],
    },
    avilease: {
      thumb: assetPath('/images/projects/thumbs/avilease_main.webp'),
      images: [assetPath('/images/projects/avilease_main.webp')],
    },
    boston: {
      thumb: assetPath('/images/projects/thumbs/boston_main.webp'),
      images: [assetPath('/images/projects/boston_main.webp')],
    },
    cntxt: {
      thumb: assetPath('/images/projects/thumbs/cntxt_main.webp'),
      images: [assetPath('/images/projects/cntxt_main.webp')],
    },
    cbre: {
      thumb: assetPath('/images/projects/thumbs/cbre_main.webp'),
      images: [assetPath('/images/projects/cbre_main.webp')],
    },
    hstp: {
      thumb: assetPath('/images/projects/thumbs/hstp_main.webp'),
      images: [assetPath('/images/projects/hstp_main.webp')],
    },
    kafd: {
      thumb: assetPath('/images/projects/thumbs/kafd_main.webp'),
      images: [assetPath('/images/projects/kafd_main.webp')],
    },
    nssc: {
      thumb: assetPath('/images/projects/thumbs/nssc_main.webp'),
      images: [assetPath('/images/projects/nssc_main.webp')],
    },
  };

  useEffect(() => {
    if (activeLightbox) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeLightbox) return;
      if (e.key === 'Escape') setActiveLightbox(null);
      if (e.key === 'ArrowRight') handleNextImage();
      if (e.key === 'ArrowLeft') handlePrevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeLightbox]);

  const handleNextImage = () => {
    if (!activeLightbox) return;
    const total = activeLightbox.project.images.length;
    setActiveLightbox({
      ...activeLightbox,
      currentImageIdx: (activeLightbox.currentImageIdx + 1) % total,
    });
  };

  const handlePrevImage = () => {
    if (!activeLightbox) return;
    const total = activeLightbox.project.images.length;
    setActiveLightbox({
      ...activeLightbox,
      currentImageIdx: (activeLightbox.currentImageIdx - 1 + total) % total,
    });
  };

  const localizedProjects = t.portfolio.projects.map((p) => {
    const assets = projectAssetsMap[p.id] || projectAssetsMap.imf;
    return {
      ...p,
      thumbImage: assets.thumb,
      images: assets.images,
      halls: assets.halls,
    };
  });

  const filtered = filter === 'all' ? localizedProjects : localizedProjects.filter((p) => p.category === filter);

  // Mobile Snap Carousel IntersectionObserver to track viewport center card
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idxAttr = entry.target.getAttribute('data-project-index');
            if (idxAttr !== null) {
              setActiveMobileIdx(parseInt(idxAttr, 10));
            }
          }
        });
      },
      { root: container, threshold: 0.6 }
    );

    const items = container.querySelectorAll('[data-project-index]');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [filtered]);

  // Desktop Carousel IntersectionObserver to track leading active card
  useEffect(() => {
    const container = desktopCarouselRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idxAttr = entry.target.getAttribute('data-desktop-project-index');
            if (idxAttr !== null) {
              setActiveDesktopIdx(parseInt(idxAttr, 10));
            }
          }
        });
      },
      { root: container, threshold: 0.5 }
    );

    const items = container.querySelectorAll('[data-desktop-project-index]');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [filtered]);

  const scrollToMobileProject = (idx: number) => {
    const container = carouselRef.current;
    if (!container) return;
    const target = container.querySelector(`[data-project-index="${idx}"]`) as HTMLElement;
    if (target) {
      const containerCenter = container.getBoundingClientRect().left + container.clientWidth / 2;
      const targetCenter = target.getBoundingClientRect().left + target.clientWidth / 2;
      container.scrollBy({
        left: targetCenter - containerCenter,
        behavior: 'smooth',
      });
      setActiveMobileIdx(idx);
    }
  };

  const scrollToDesktopProject = (idx: number) => {
    const container = desktopCarouselRef.current;
    if (!container) return;
    const target = container.querySelector(`[data-desktop-project-index="${idx}"]`) as HTMLElement;
    if (target) {
      const offset = isRtl
        ? target.getBoundingClientRect().right - container.getBoundingClientRect().right
        : target.getBoundingClientRect().left - container.getBoundingClientRect().left;
      container.scrollBy({
        left: offset,
        behavior: 'smooth',
      });
      setActiveDesktopIdx(idx);
    }
  };

  const handleNextDesktop = () => {
    const maxIdx = Math.max(0, filtered.length - 2);
    const nextIdx = activeDesktopIdx >= maxIdx ? 0 : activeDesktopIdx + 1;
    scrollToDesktopProject(nextIdx);
  };

  const handlePrevDesktop = () => {
    const maxIdx = Math.max(0, filtered.length - 2);
    const prevIdx = activeDesktopIdx <= 0 ? maxIdx : activeDesktopIdx - 1;
    scrollToDesktopProject(prevIdx);
  };

  const handleTouchStart = () => {
    if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
    setIsInteracting(true);
  };

  const handleTouchEnd = () => {
    if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
    interactionTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 3800);
  };

  // Reset to initial position whenever category filter changes
  useEffect(() => {
    setActiveMobileIdx(0);
    setActiveDesktopIdx(0);
    scrollToMobileProject(0);
    scrollToDesktopProject(0);
  }, [filter]);

  // Autonomous Looping Interval Engine with Pause-on-Interaction
  const shouldAutoPlay =
    isInView &&
    !isHovered &&
    !isInteracting &&
    !activeLightbox &&
    filtered.length > 1;

  useEffect(() => {
    if (!shouldAutoPlay) return;

    const interval = setInterval(() => {
      // 1. Mobile Auto-Advancing Loop
      const nextMobile = (activeMobileIdxRef.current + 1) % filtered.length;
      scrollToMobileProject(nextMobile);

      // 2. Desktop Auto-Advancing Loop (if more than 2 projects available)
      if (filtered.length > 2) {
        const maxDesktop = filtered.length - 2;
        const nextDesktop = activeDesktopIdxRef.current >= maxDesktop ? 0 : activeDesktopIdxRef.current + 1;
        scrollToDesktopProject(nextDesktop);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [shouldAutoPlay, filtered.length, isRtl]);

  return (
    <section ref={sectionRef} id="portfolio" className="py-24 sm:py-28 bg-charcoal border-b border-charcoal-border overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-14">
        {/* ترويسة قسم المشاريع الكبرى */}
        <motion.div
          initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold">{t.portfolio.badge}</span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase border border-gold/30 bg-gold/5 text-caramel-light">
                <span className={`w-1.5 h-1.5 rounded-full ${isHovered || isInteracting ? 'bg-amber-400' : 'bg-gold animate-pulse'}`} />
                {isHovered || isInteracting ? t.portfolio.paused_for_inspection : t.portfolio.auto_loop_active}
              </span>
            </div>
            <h2 className="mt-2 text-3xl sm:text-5xl font-bold uppercase text-cream tracking-tight">
              {t.portfolio.title}
            </h2>
          </div>

          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-3">
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: t.portfolio.all, value: 'all' },
                { label: t.portfolio.sovereign, value: 'sovereign' },
                { label: t.portfolio.corporate, value: 'corporate' },
                { label: t.portfolio.governmental, value: 'governmental' },
              ].map((f) => (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-300 border ${
                    filter === f.value ? 'bg-caramel text-cream border-gold' : 'bg-obsidian text-stone-slate border-charcoal-border hover:border-gold/30'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Desktop Navigation Controls */}
            {filtered.length > 2 && (
              <div className="hidden md:flex items-center gap-2 border-r border-charcoal-border pr-2 rtl:border-r-0 rtl:border-l rtl:pr-0 rtl:pl-2">
                <button
                  onClick={handlePrevDesktop}
                  className="p-2 bg-obsidian border border-charcoal-border hover:border-gold text-stone-slate hover:text-gold transition-all duration-300"
                  aria-label={t.portfolio.prev_project}
                  title={t.portfolio.prev_project}
                >
                  {isRtl ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
                </button>
                <span className="text-[11px] font-mono font-medium text-stone-slate px-2 tabular-nums">
                  {String(activeDesktopIdx + 1).padStart(2, '0')} / {String(filtered.length).padStart(2, '0')}
                </span>
                <button
                  onClick={handleNextDesktop}
                  className="p-2 bg-obsidian border border-charcoal-border hover:border-gold text-stone-slate hover:text-gold transition-all duration-300"
                  aria-label={t.portfolio.next_project}
                  title={t.portfolio.next_project}
                >
                  {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* 1. Mobile Horizontal Snap Carousel (< md) with Auto-Advancing Loop */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.96, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="md:hidden"
        >
          <div
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 px-4 -mx-4 no-scrollbar"
            style={{ touchAction: 'pan-y' }}
          >
            {filtered.map((p, idx) => (
              <div
                key={p.id}
                data-project-index={idx}
                className="flex-shrink-0 w-[85vw] max-w-[340px] snap-center"
              >
                <ProjectCard3D
                  project={p}
                  index={idx}
                  isActiveOnMobile={activeMobileIdx === idx}
                  onOpenLightbox={(initialIdx) =>
                    setActiveLightbox({ project: p, currentImageIdx: initialIdx || 0 })
                  }
                />
              </div>
            ))}
          </div>

          {/* Mobile Dot Navigation Indicators */}
          <div className="flex justify-center items-center gap-2 mt-4">
            {filtered.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  scrollToMobileProject(idx);
                  handleTouchStart();
                  handleTouchEnd();
                }}
                className={`transition-all duration-300 rounded-full ${
                  activeMobileIdx === idx
                    ? 'w-6 h-1.5 bg-gold shadow-[0_0_8px_rgba(212,175,55,0.4)]'
                    : 'w-1.5 h-1.5 bg-charcoal-border hover:bg-stone-slate'
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* 2. Desktop Autonomous Rotating Showcase (>= md) */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:block relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={desktopCarouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-4 no-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filtered.map((p, idx) => (
              <div
                key={p.id}
                data-desktop-project-index={idx}
                className="flex-shrink-0 w-[calc(50%-16px)] snap-start"
              >
                <ProjectCard3D
                  project={p}
                  index={idx}
                  isActiveOnMobile={false}
                  onOpenLightbox={(initialIdx) =>
                    setActiveLightbox({ project: p, currentImageIdx: initialIdx || 0 })
                  }
                />
              </div>
            ))}
          </div>

          {/* Desktop Navigation Dots / Dashes */}
          {filtered.length > 2 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              {Array.from({ length: filtered.length - 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToDesktopProject(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    activeDesktopIdx === idx
                      ? 'w-8 h-1.5 bg-gold shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                      : 'w-2 h-1.5 bg-charcoal-border hover:bg-stone-slate'
                  }`}
                  aria-label={`Go to project slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Multi-Image High-Resolution Lightbox Modal with Hall Switcher & Loupe Support */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveLightbox(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between z-10 w-full max-w-[1600px] mx-auto pb-4 border-b border-charcoal-border">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold font-bold">
                  {activeLightbox.project.number} • {activeLightbox.project.category}
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-cream">
                  {activeLightbox.project.title}
                </h3>
                {activeLightbox.project.halls && (
                  <p className="text-xs sm:text-sm text-caramel-light font-medium mt-1">
                    {activeLightbox.project.halls[activeLightbox.currentImageIdx]}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xs sm:text-sm text-stone-slate font-medium px-3 py-1 bg-obsidian border border-charcoal-border rounded-full">
                  {t.portfolio.gallery_counter
                    .replace('{current}', String(activeLightbox.currentImageIdx + 1))
                    .replace('{total}', String(activeLightbox.project.images.length))}
                </span>
                <button
                  onClick={() => setActiveLightbox(null)}
                  className="p-2 text-stone-slate hover:text-gold transition-colors"
                  aria-label="Close Fullscreen View"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>
            </div>

            {/* Modal Image Viewport with Next/Prev Arrows */}
            <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
              {activeLightbox.project.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevImage();
                    }}
                    className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-obsidian/80 border border-charcoal-border text-cream hover:text-gold hover:border-gold transition-all duration-300 shadow-2xl backdrop-blur-sm"
                    aria-label={t.portfolio.prev_photo}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextImage();
                    }}
                    className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-obsidian/80 border border-charcoal-border text-cream hover:text-gold hover:border-gold transition-all duration-300 shadow-2xl backdrop-blur-sm"
                    aria-label={t.portfolio.next_photo}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              <img
                src={activeLightbox.project.images[activeLightbox.currentImageIdx]}
                alt={activeLightbox.project.title}
                className="max-w-full max-h-[75vh] object-contain border border-gold/30 shadow-2xl rounded-sm"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Modal Thumbnails Strip for Multi-Image Projects (IMF Milestone) */}
            {activeLightbox.project.images.length > 1 && (
              <div
                className="flex items-center justify-center gap-3 z-10 pt-4 border-t border-charcoal-border overflow-x-auto max-w-[1600px] mx-auto w-full no-scrollbar"
                onClick={(e) => e.stopPropagation()}
              >
                {activeLightbox.project.images.map((img: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setActiveLightbox({ ...activeLightbox, currentImageIdx: idx })}
                    className={`relative w-20 h-14 sm:w-24 sm:h-16 rounded overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
                      activeLightbox.currentImageIdx === idx
                        ? 'border-gold scale-105 shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                        : 'border-charcoal-border opacity-50 hover:opacity-100 hover:border-stone-slate'
                    }`}
                  >
                    <img src={img} alt={`Hall ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
