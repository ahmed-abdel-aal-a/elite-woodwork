'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { DoorClosed, LayoutGrid, Layers, Columns3, Sparkles, ChevronDown, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { assetPath } from '@/lib/assets';

const scopeImages: Record<string, string> = {
  doors: assetPath('/images/projects/avilease_main.webp'),
  cladding: assetPath('/images/projects/imf_boardroom.webp'),
  ceilings: assetPath('/images/projects/imf_auditorium.webp'),
  millwork: assetPath('/images/projects/imf_pantry.webp'),
  reception: assetPath('/images/projects/imf_reception.webp'),
};

const scopeTags: Record<string, { ar: string; en: string }> = {
  doors: {
    ar: 'مقر طيران أفيلس • أبواب ومداخل محورية',
    en: 'AVILEASE OFFICES • PIVOT ENTRANCES & DOORS',
  },
  cladding: {
    ar: 'قاعة صندوق النقد • تكسيات فينير متناظرة',
    en: 'IMF BOARDROOM • BOOKMATCHED VENEER',
  },
  ceilings: {
    ar: 'مسرح صندوق النقد • أسقف موجية ثلاثية الأبعاد',
    en: 'IMF AUDITORIUM • 3D WAVE TIMBER BAFFLES',
  },
  millwork: {
    ar: 'ضيافة صندوق النقد • ميليورك تنفيذي مخصص',
    en: 'IMF EXECUTIVE PANTRY • BESPOKE MILLWORK',
  },
  reception: {
    ar: 'مقر صندوق النقد • كاونتر استقبال رخام وخشب',
    en: 'IMF HEADQUARTERS • BESPOKE MARBLE & TIMBER',
  },
};

const scopeIcons: Record<string, any> = {
  doors: DoorClosed,
  cladding: LayoutGrid,
  ceilings: Layers,
  millwork: Columns3,
  reception: Sparkles,
};

export default function ScopeSection() {
  const { t, lang } = useLanguage();
  const isRtl = lang === 'ar';
  const [activeTabId, setActiveTabId] = useState(t.scope.items[0]?.id || 'doors');

  const activeTab = t.scope.items.find((item) => item.id === activeTabId) || t.scope.items[0];
  const activeImage = scopeImages[activeTab.id] || scopeImages.doors;
  const activeTag = isRtl ? scopeTags[activeTab.id]?.ar : scopeTags[activeTab.id]?.en;

  return (
    <section id="scope" className="py-24 sm:py-28 bg-obsidian border-b border-charcoal-border overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-14">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs uppercase tracking-[0.3em] text-caramel font-bold font-mono">
                {t.scope.badge}
              </span>
              <span className="w-12 h-[1px] bg-caramel/40" />
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase text-cream tracking-tight leading-tight">
              {t.scope.title}
            </h2>
          </div>
          <p className="text-sm text-stone-sand/90 max-w-md font-light leading-relaxed">
            {t.scope.desc}
          </p>
        </motion.div>

        {/* 1. Desktop Two-Column Master-Detail Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:grid lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Left Column: Interactive Tab Buttons (Hover Live Teleport) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3.5">
            {t.scope.items.map((s) => {
              const IconComp = scopeIcons[s.id] || DoorClosed;
              const isSelected = activeTab.id === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onMouseEnter={() => setActiveTabId(s.id)}
                  onClick={() => setActiveTabId(s.id)}
                  className={`relative text-left rtl:text-right p-5 transition-all duration-300 border flex items-center justify-between group rounded-sm overflow-hidden cursor-pointer ${
                    isSelected
                      ? 'bg-[#181613] border-caramel/75 shadow-[0_12px_30px_rgba(0,0,0,0.65),0_0_25px_rgba(146,104,62,0.18)]'
                      : 'bg-[#12110f] border-charcoal-border/50 hover:border-caramel/40 hover:bg-[#151411] hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)]'
                  }`}
                >
                  {/* Sliding Laser Indicator on Active Card */}
                  {isSelected && (
                    <motion.div
                      layoutId="scopeLaserBar"
                      className="absolute top-0 bottom-0 start-0 w-[3px] bg-gradient-to-b from-sand via-caramel to-sand shadow-[0_0_12px_rgba(146,104,62,0.85)] z-20"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}

                  {/* Corner Brackets on Active Card */}
                  {isSelected && (
                    <>
                      <div className="absolute top-2 end-2 w-2 h-2 border-t border-e border-caramel/50 z-20 pointer-events-none" />
                      <div className="absolute bottom-2 end-2 w-2 h-2 border-b border-e border-caramel/50 z-20 pointer-events-none" />
                    </>
                  )}

                  <div className="flex items-center gap-4 relative z-10">
                    <span
                      className={`font-mono text-xs font-bold transition-colors duration-300 ${
                        isSelected ? 'text-sand' : 'text-stone-slate group-hover:text-sand/75'
                      }`}
                    >
                      {s.number}
                    </span>
                    <div>
                      <h4
                        className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                          isSelected ? 'text-cream' : 'text-stone-sand group-hover:text-cream'
                        }`}
                      >
                        {s.title}
                      </h4>
                      <p
                        className={`text-[11px] font-light mt-0.5 transition-colors duration-300 ${
                          isSelected ? 'text-stone-sand/90' : 'text-stone-slate group-hover:text-stone-sand/70'
                        }`}
                      >
                        {s.short}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 relative z-10">
                    <IconComp
                      className={`w-5 h-5 transition-all duration-300 ${
                        isSelected
                          ? 'text-caramel scale-110'
                          : 'text-stone-slate group-hover:text-sand group-hover:scale-105'
                      }`}
                    />
                    <ArrowUpRight
                      className={`w-4 h-4 transition-all duration-300 ${
                        isSelected
                          ? 'text-sand opacity-100 translate-x-0'
                          : 'text-stone-slate/30 opacity-0 -translate-x-2 group-hover:opacity-60 group-hover:translate-x-0'
                      } ${isRtl ? 'rotate-[-90deg]' : ''}`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Master Showcase Panel */}
          <div className="lg:col-span-7 bg-[#141311] border border-charcoal-border/70 p-8 lg:p-10 relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.7),0_0_35px_rgba(146,104,62,0.08)] rounded-sm min-h-[600px] flex flex-col justify-between">
            {/* Top Laser Seam */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-sand/50 to-transparent z-20 pointer-events-none" />

            {/* Ambient Wood Warmth Radial Aura */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(146,104,62,0.08),transparent_70%)] pointer-events-none z-0" />

            {/* Royal Corner Brackets */}
            <div className="absolute top-2.5 start-2.5 w-3 h-3 border-t border-s border-caramel/40 z-20 pointer-events-none" />
            <div className="absolute top-2.5 end-2.5 w-3 h-3 border-t border-e border-caramel/40 z-20 pointer-events-none" />
            <div className="absolute bottom-2.5 start-2.5 w-3 h-3 border-b border-s border-caramel/40 z-20 pointer-events-none" />
            <div className="absolute bottom-2.5 end-2.5 w-3 h-3 border-b border-e border-caramel/40 z-20 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6 relative z-10 flex-1 flex flex-col justify-between"
              >
                <div>
                  {/* Architectural Image Display Frame */}
                  <div className="relative h-72 sm:h-96 w-full overflow-hidden rounded-sm border border-charcoal-border/60 group/image">
                    <img
                      src={activeImage}
                      alt={activeTab.title}
                      className="w-full h-full object-cover object-center scale-100 group-hover/image:scale-105 filter saturate-[0.85] brightness-[0.95] transition-transform duration-1000 ease-out"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/20 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-obsidian/40 via-transparent to-obsidian/40 pointer-events-none" />

                    {/* Spec Sheet Badge */}
                    <div className="absolute top-3.5 start-3.5 flex items-center gap-2 px-3 py-1.5 bg-obsidian/90 backdrop-blur-md border border-caramel/50 text-[10px] font-mono text-sand uppercase tracking-wider shadow-lg rounded-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-caramel animate-pulse" />
                      <span>{t.scope.spec_sheet}</span>
                    </div>

                    {/* Project Landmark Tag */}
                    <div className="absolute bottom-3 end-3 px-2.5 py-1 bg-obsidian/85 backdrop-blur-md border border-charcoal-border/60 text-[9px] font-mono uppercase tracking-widest text-stone-sand/90">
                      <span>{activeTag}</span>
                    </div>
                  </div>

                  {/* Headline & Description */}
                  <div className="mt-6">
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="font-mono text-xs text-caramel font-bold tracking-widest">
                        {activeTab.number} • ELITE SPECIFICATION
                      </span>
                      <span className="w-8 h-[1px] bg-caramel/30" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold uppercase text-cream tracking-wide">
                      {activeTab.title}
                    </h3>
                    <p className="mt-3 text-sm text-stone-sand/90 font-light leading-relaxed">
                      {activeTab.desc}
                    </p>
                  </div>
                </div>

                {/* Key Technical Standards */}
                <div className="pt-5 border-t border-charcoal-border/70">
                  <div className="flex items-center justify-between mb-3.5">
                    <h4 className="text-xs uppercase tracking-widest text-sand font-bold font-mono">
                      {t.scope.standards}
                    </h4>
                    <span className="text-[10px] font-mono text-stone-slate uppercase tracking-wider">
                      SBC & ISO COMPLIANT
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeTab.specs.map((spec, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 px-3 py-2 bg-obsidian/60 border border-charcoal-border/50 rounded-sm text-xs text-stone-sand hover:border-caramel/40 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 bg-caramel rounded-full shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Footer */}
                <div className="pt-5 border-t border-charcoal-border/60 flex items-center justify-between flex-wrap gap-4 mt-auto">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-obsidian via-[#1e1915] to-obsidian border border-caramel/60 hover:border-sand hover:bg-caramel/20 text-cream text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 rounded-sm shadow-[0_0_20px_rgba(146,104,62,0.2)] hover:shadow-[0_0_35px_rgba(146,104,62,0.4)] group/btn"
                  >
                    <span>{t.scope.rfp_btn}</span>
                    <ArrowUpRight
                      className={`w-3.5 h-3.5 text-sand transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 ${
                        isRtl ? 'rotate-[-90deg]' : ''
                      }`}
                    />
                  </Link>

                  <span className="text-[10px] font-mono text-stone-slate uppercase tracking-widest">
                    ELITE ARCHITECTURAL JOINERY • RIYADH
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* 2. Mobile Layout (Unified Seamless Accordion) */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:hidden flex flex-col gap-3.5"
        >
          {t.scope.items.map((s) => {
            const IconComp = scopeIcons[s.id] || DoorClosed;
            const isSelected = activeTabId === s.id;
            const itemImage = scopeImages[s.id] || scopeImages.doors;
            const itemTag = isRtl ? scopeTags[s.id]?.ar : scopeTags[s.id]?.en;

            return (
              <div
                key={s.id}
                className={`transition-all duration-300 rounded-sm border overflow-hidden ${
                  isSelected
                    ? 'bg-[#181613] border-caramel/75 shadow-[0_10px_25px_rgba(0,0,0,0.6),0_0_20px_rgba(146,104,62,0.18)]'
                    : 'bg-[#12110f] border-charcoal-border/50 hover:border-caramel/40'
                }`}
              >
                {/* Accordion Card Header */}
                <button
                  type="button"
                  onClick={() => setActiveTabId(isSelected ? '' : s.id)}
                  className="w-full text-left rtl:text-right p-4 sm:p-5 flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`font-mono text-xs font-bold transition-colors duration-200 ${
                        isSelected ? 'text-sand' : 'text-stone-slate'
                      }`}
                    >
                      {s.number}
                    </span>
                    <div>
                      <h4
                        className={`text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
                          isSelected ? 'text-cream' : 'text-stone-sand'
                        }`}
                      >
                        {s.title}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-stone-slate font-light mt-0.5">
                        {s.short}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 shrink-0">
                    <IconComp
                      className={`w-4 h-4 transition-colors duration-200 ${
                        isSelected ? 'text-caramel' : 'text-stone-slate'
                      }`}
                    />
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isSelected ? 'rotate-180 text-sand' : 'rotate-0 text-stone-slate/60'
                      }`}
                    />
                  </div>
                </button>

                {/* Animated Drawer Expansion */}
                <AnimatePresence initial={false}>
                  {isSelected && (
                    <motion.div
                      key={`content-${s.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-5 pt-1 space-y-4 border-t border-caramel/30">
                        {/* Image */}
                        <div className="relative h-48 sm:h-56 w-full overflow-hidden border border-charcoal-border/60 rounded-xs mt-3">
                          <img
                            src={itemImage}
                            alt={s.title}
                            className="w-full h-full object-cover object-center filter saturate-[0.85] brightness-[0.95]"
                            loading="eager"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent pointer-events-none" />
                          <div className="absolute top-3 start-3 px-2.5 py-1 bg-obsidian/95 text-[9px] font-mono text-sand border border-caramel/40 uppercase shadow-md">
                            {t.scope.spec_sheet}
                          </div>
                          <div className="absolute bottom-2.5 end-2.5 px-2 py-0.5 bg-obsidian/90 text-[8px] font-mono uppercase tracking-wider text-stone-sand/90 border border-charcoal-border">
                            {itemTag}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-stone-sand/90 font-light leading-relaxed">
                          {s.desc}
                        </p>

                        {/* Standards */}
                        <div className="pt-3 border-t border-charcoal-border/60">
                          <h5 className="text-[10px] sm:text-[11px] uppercase tracking-wider text-sand font-bold mb-2 font-mono">
                            {t.scope.standards}
                          </h5>
                          <div className="space-y-1.5">
                            {s.specs.map((spec, specIdx) => (
                              <div key={specIdx} className="flex items-start gap-2 text-[11px] text-stone-sand">
                                <span className="w-1.5 h-1.5 bg-caramel rounded-full mt-1 shrink-0" />
                                <span>{spec}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Action Link */}
                        <div className="pt-3 border-t border-charcoal-border/40">
                          <Link
                            href="#contact"
                            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r from-obsidian via-[#1e1915] to-obsidian border border-caramel/50 text-cream text-[11px] uppercase tracking-wider font-semibold rounded-xs"
                          >
                            <span>{t.scope.rfp_btn}</span>
                            <ArrowUpRight className={`w-3.5 h-3.5 text-sand ${isRtl ? 'rotate-[-90deg]' : ''}`} />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
