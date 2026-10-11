'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DoorClosed, LayoutGrid, Layers, Columns3, Sparkles, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { assetPath } from '@/lib/assets';

const scopeImages: Record<string, string> = {
  doors: assetPath('/images/projects/imf_reception.webp'),
  cladding: assetPath('/images/projects/imf_boardroom.webp'),
  ceilings: assetPath('/images/projects/imf_auditorium.webp'),
  millwork: assetPath('/images/projects/imf_pantry.webp'),
  reception: assetPath('/images/projects/imf_reception.webp'),
};

const scopeIcons: Record<string, any> = {
  doors: DoorClosed,
  cladding: LayoutGrid,
  ceilings: Layers,
  millwork: Columns3,
  reception: Sparkles,
};

export default function ScopeSection() {
  const { t } = useLanguage();
  const [activeTabId, setActiveTabId] = useState(t.scope.items[0]?.id || 'doors');

  const activeTab = t.scope.items.find((item) => item.id === activeTabId) || t.scope.items[0];
  const activeImage = scopeImages[activeTab.id] || scopeImages.doors;

  return (
    <section id="scope" className="py-24 sm:py-28 bg-obsidian border-b border-charcoal-border overflow-hidden">
      {/* نطاق العرض المعماري العريض المتطابق مع كامل أقسام المنصة (max-w-[1600px]) */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-14">
        {/* ترويسة القسم */}
        <motion.div
          initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold">
                {t.scope.badge}
              </span>
              <span className="w-12 h-[1px] bg-gold/30" />
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase text-cream tracking-tight">
              {t.scope.title}
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-stone-slate max-w-md font-light leading-relaxed">
            {t.scope.desc}
          </p>
        </motion.div>

        {/* 1. معمارية الشاشات الكبيرة (Desktop Two-Column Master-Detail Layout) */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:grid lg:grid-cols-12 gap-8 items-start"
        >
          {/* عمود الأزرار الخمسة (يسار في LTR / يمين في RTL) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {t.scope.items.map((s) => {
              const IconComp = scopeIcons[s.id] || DoorClosed;
              const isSelected = activeTab.id === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveTabId(s.id)}
                  className={`text-left rtl:text-right p-5 transition-all duration-200 border flex items-center justify-between group rounded-sm ${
                    isSelected
                      ? 'bg-charcoal border-gold shadow-[0_0_25px_rgba(212,175,55,0.2)]'
                      : 'bg-obsidian border-charcoal-border hover:border-gold/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-xs font-bold ${isSelected ? 'text-gold' : 'text-stone-slate'}`}>
                      {s.number}
                    </span>
                    <div>
                      <h4 className={`text-sm font-bold uppercase tracking-wider ${isSelected ? 'text-cream' : 'text-stone-sand'}`}>
                        {s.title}
                      </h4>
                      <p className="text-[11px] text-stone-slate font-light mt-0.5">{s.short}</p>
                    </div>
                  </div>
                  <IconComp className={`w-5 h-5 transition-transform group-hover:scale-110 ${isSelected ? 'text-gold' : 'text-stone-slate'}`} />
                </button>
              );
            })}
          </div>

          {/* لوحة العرض والمواصفات الفنية الممتدة (استجابة فورية فائقة السرعة بدون تأخير) */}
          <div className="lg:col-span-7 bg-charcoal border border-charcoal-border p-8 lg:p-10 relative overflow-hidden shadow-2xl rounded-sm min-h-[580px]">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="space-y-6"
              >
                <div className="relative h-72 sm:h-96 w-full overflow-hidden border border-charcoal-border">
                  <img
                    src={activeImage}
                    alt={activeTab.title}
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  <div className="absolute top-4 start-4 px-3 py-1 bg-obsidian/95 text-[10px] font-mono text-gold border border-gold/30 uppercase shadow-lg">
                    {t.scope.spec_sheet}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold uppercase text-cream tracking-wide">
                    {activeTab.title}
                  </h3>
                  <p className="mt-3 text-sm text-stone-sand/90 font-light leading-relaxed">
                    {activeTab.desc}
                  </p>
                </div>

                <div className="pt-5 border-t border-charcoal-border">
                  <h4 className="text-xs uppercase tracking-widest text-gold font-bold mb-3">
                    {t.scope.standards}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeTab.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-stone-sand">
                        <span className="w-1.5 h-1.5 bg-caramel rounded-full shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* 2. معمارية شاشات الموبايل (Unified Seamless Accordion - انسيابية تامة وبطاقة موحدة متصلة) */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.96, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:hidden flex flex-col gap-3"
        >
          {t.scope.items.map((s) => {
            const IconComp = scopeIcons[s.id] || DoorClosed;
            const isSelected = activeTabId === s.id;
            const itemImage = scopeImages[s.id] || scopeImages.doors;

            return (
              <div
                key={s.id}
                className={`transition-all duration-300 rounded-sm border overflow-hidden ${
                  isSelected
                    ? 'bg-charcoal border-gold shadow-[0_0_25px_rgba(212,175,55,0.2)]'
                    : 'bg-obsidian border-charcoal-border hover:border-gold/30'
                }`}
              >
                {/* رأس البطاقة في الموبايل */}
                <button
                  type="button"
                  onClick={() => setActiveTabId(isSelected ? '' : s.id)}
                  className="w-full text-left rtl:text-right p-4 flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`font-mono text-xs font-bold transition-colors duration-200 ${isSelected ? 'text-gold' : 'text-stone-slate'}`}>
                      {s.number}
                    </span>
                    <div>
                      <h4 className={`text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${isSelected ? 'text-cream' : 'text-stone-sand'}`}>
                        {s.title}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-stone-slate font-light mt-0.5">{s.short}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 shrink-0">
                    <IconComp className={`w-4 h-4 transition-colors duration-200 ${isSelected ? 'text-gold' : 'text-stone-slate'}`} />
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isSelected ? 'rotate-180 text-gold' : 'rotate-0 text-stone-slate/60'
                      }`}
                    />
                  </div>
                </button>

                {/* درج التفاصيل المعماري المنسدل داخل نفس البطاقة الموحدة (صفر تقطيع وصفر قفزات بالمليمتر) */}
                <AnimatePresence initial={false}>
                  {isSelected && (
                    <motion.div
                      key={`content-${s.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-1 space-y-4 border-t border-gold/25">
                        {/* صورة التخصص */}
                        <div className="relative h-48 sm:h-56 w-full overflow-hidden border border-charcoal-border rounded-xs">
                          <img
                            src={itemImage}
                            alt={s.title}
                            className="w-full h-full object-cover object-center"
                            loading="eager"
                          />
                          <div className="absolute top-3 start-3 px-2.5 py-1 bg-obsidian/95 text-[9px] font-mono text-gold border border-gold/30 uppercase shadow-md">
                            {t.scope.spec_sheet}
                          </div>
                        </div>

                        {/* الوصف المعماري الكامل */}
                        <p className="text-xs text-stone-sand/90 font-light leading-relaxed">
                          {s.desc}
                        </p>

                        {/* قائمة المعايير الفنية */}
                        <div className="pt-3 border-t border-charcoal-border">
                          <h5 className="text-[10px] sm:text-[11px] uppercase tracking-wider text-gold font-bold mb-2">
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
