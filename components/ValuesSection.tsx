'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Hammer, Leaf, Lightbulb, Users2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ValuesSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.2 });

  const [autoIndex, setAutoIndex] = useState(0);
  const [userInteractedIndex, setUserInteractedIndex] = useState<number | null>(null);

  // إيقاع حركي متزن وفخم (2.3 ثانية) يعطي وضوحاً تاماً للحركة دون أي تسرع أو إزعاج بصري
  useEffect(() => {
    if (!isInView || userInteractedIndex !== null) return;

    const interval = setInterval(() => {
      setAutoIndex((prev) => (prev + 1) % 4);
    }, 2300);

    return () => clearInterval(interval);
  }, [isInView, userInteractedIndex]);

  const activeIndex = userInteractedIndex !== null ? userInteractedIndex : autoIndex;

  const values = [
    { icon: Hammer, title: t.values.v1_title, sub: t.values.v1_sub, desc: t.values.v1_desc },
    { icon: Leaf, title: t.values.v2_title, sub: t.values.v2_sub, desc: t.values.v2_desc },
    { icon: Lightbulb, title: t.values.v3_title, sub: t.values.v3_sub, desc: t.values.v3_desc },
    { icon: Users2, title: t.values.v4_title, sub: t.values.v4_sub, desc: t.values.v4_desc },
  ];

  return (
    <section ref={sectionRef} id="values" className="py-20 sm:py-24 bg-charcoal border-b border-charcoal-border overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-14">
        {/* ترويسة القسم المعمارية */}
        <motion.div
          initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold">
            {t.values.badge}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-cream tracking-tight">
            {t.values.title}
          </h2>
          <div className="w-16 h-[2px] bg-caramel mx-auto mt-4" />
        </motion.div>

        {/* 
          الشبكة المعمارية المتوازنة:
          - في شاشات الموبايل: مصفوفة 2×2 مدمجة تعرض كافة الركائز الأربع دفعة واحدة دون إطالة عمودية.
          - في الشاشات الكبيرة: مصفوفة أفقية متكاملة 4 أعمدة.
        */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {values.map((v, i) => {
            const IconComponent = v.icon;
            const isIlluminated = activeIndex === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35, scale: 0.94, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.75, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setUserInteractedIndex(i)}
                onMouseLeave={() => setUserInteractedIndex(null)}
                onTouchStart={() => setUserInteractedIndex(i)}
                className={`relative p-4 sm:p-6 lg:p-7 border transition-all duration-500 rounded-sm flex flex-col justify-between group overflow-hidden ${
                  isIlluminated
                    ? 'border-gold/90 bg-obsidian shadow-[0_6px_25px_rgba(212,175,55,0.28)] -translate-y-1 scale-[1.015] z-20'
                    : 'border-charcoal-border bg-obsidian/60 hover:border-gold/40 z-10'
                }`}
              >
                {/* وميض ضوئي هادئ جداً وناعم يمر عبر الكارت بنعومة وثبات (Soft Architectural Sheen) */}
                {isIlluminated && (
                  <motion.div
                    key={`shimmer-${i}`}
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{ x: '100%', opacity: [0, 0.22, 0] }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent pointer-events-none -skew-x-12 z-30"
                  />
                )}

                {/* هالة دافئة هادئة ومدروسة في الخلفية عند الإضاءة دون توهج مبالغ فيه */}
                <div
                  className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.16),transparent_70%)] pointer-events-none transition-opacity duration-500 ${
                    isIlluminated ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* زوايا معمارية ذهبية دقيقة تدعم الاتجاهين RTL و LTR */}
                <div
                  className={`absolute top-0 start-0 w-4 sm:w-6 h-[2px] bg-gold transition-all duration-500 ${
                    isIlluminated ? 'opacity-100 shadow-[0_0_6px_rgba(212,175,55,0.7)]' : 'opacity-0 group-hover:opacity-100'
                  }`}
                />
                <div
                  className={`absolute top-0 start-0 h-4 sm:h-6 w-[2px] bg-gold transition-all duration-500 ${
                    isIlluminated ? 'opacity-100 shadow-[0_0_6px_rgba(212,175,55,0.7)]' : 'opacity-0 group-hover:opacity-100'
                  }`}
                />

                <div
                  className={`absolute bottom-0 end-0 w-4 sm:w-6 h-[2px] bg-gold/60 transition-all duration-500 ${
                    isIlluminated ? 'opacity-100 shadow-[0_0_6px_rgba(212,175,55,0.6)]' : 'opacity-0 group-hover:opacity-100'
                  }`}
                />
                <div
                  className={`absolute bottom-0 end-0 h-4 sm:h-6 w-[2px] bg-gold/60 transition-all duration-500 ${
                    isIlluminated ? 'opacity-100 shadow-[0_0_6px_rgba(212,175,55,0.6)]' : 'opacity-0 group-hover:opacity-100'
                  }`}
                />

                <div className="relative z-10">
                  {/* حاوية الأيقونة بتوهج ذهبي متزن */}
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 border flex items-center justify-center transition-all duration-500 ${
                      isIlluminated
                        ? 'bg-gold text-obsidian border-gold shadow-[0_0_16px_rgba(212,175,55,0.55)] scale-105'
                        : 'bg-caramel/15 text-gold border-gold/30 group-hover:bg-gold group-hover:text-obsidian'
                    }`}
                  >
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-500" />
                  </div>

                  {/* العنوان الرئيسي للركيزة مع لمسة ذهبية ناعمة */}
                  <h3
                    className={`mt-3.5 sm:mt-5 text-sm sm:text-lg lg:text-xl font-bold uppercase tracking-wide leading-tight transition-colors duration-500 ${
                      isIlluminated ? 'text-gold drop-shadow-[0_2px_8px_rgba(212,175,55,0.35)]' : 'text-cream'
                    }`}
                  >
                    {v.title}
                  </h3>

                  {/* العنوان الفرعي */}
                  <h4
                    className={`text-[10px] sm:text-xs uppercase tracking-wider font-semibold mt-1 transition-colors duration-500 ${
                      isIlluminated ? 'text-gold-light' : 'text-caramel-light'
                    }`}
                  >
                    {v.sub}
                  </h4>

                  {/* الوصف المعماري المنسق */}
                  <p className="mt-2.5 sm:mt-3 text-[11px] sm:text-xs text-stone-slate font-light leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {v.desc}
                  </p>
                </div>

                {/* تذييل البطاقة مع مؤشر النبض الذهبي الهادئ */}
                <div className="relative z-10 mt-4 pt-3 border-t border-charcoal-border text-[9px] sm:text-[10px] font-mono text-stone-slate/60 uppercase tracking-wider flex items-center justify-between">
                  <span>VALUE PILLAR 0{i + 1}</span>
                  <div
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                      isIlluminated ? 'bg-gold shadow-[0_0_10px_rgba(212,175,55,0.9)] scale-125' : 'bg-stone-slate/30'
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
