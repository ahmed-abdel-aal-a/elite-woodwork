'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

interface StatItem {
  val: number;
  suf: string;
  lbl: string;
  desc: string;
}

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.25 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const target = Number(stat.val) || 0;
    // مهلة زمنية دقيقة تضمن ظهور البطاقة بوضوح تام أمام عين الزائر قبل انطلاق حركة العد
    const startDelay = 220 + index * 90;
    const duration = 2000; // 2.0 ثانية ليعيش الزائر تجربة العد الحركي كاملة بوضوح

    let animationFrameId: number;
    const timeoutId = setTimeout(() => {
      let startTime: number | null = null;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // منحنى التباطؤ التكعيبي: f(p) = 1 - (1 - p)^3
        // حركة واضحة في البداية ثم تباطؤ رشيق ووقور عند الاستقرار
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(ease * target);

        setDisplayValue(current);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setDisplayValue(target);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, stat.val, index]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 35, scale: 0.94, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative p-4 sm:p-6 lg:p-7 bg-charcoal/30 hover:bg-charcoal/50 border border-charcoal-border hover:border-gold/40 transition-all duration-300 group rounded-sm flex flex-col justify-between backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
    >
      {/* زوايا معمارية ذهبية دقيقة (تدعم الاتجاهين RTL و LTR بفضل start و end) */}
      <div className="absolute top-0 start-0 w-4 sm:w-8 h-[2px] bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-0 start-0 h-4 sm:h-8 w-[2px] bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute bottom-0 end-0 w-4 sm:w-8 h-[2px] bg-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 end-0 h-4 sm:h-8 w-[2px] bg-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        <div className="flex items-baseline gap-1 sm:gap-1.5 flex-wrap">
          <span className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-cream group-hover:text-gold transition-colors duration-300 tracking-tight leading-none tabular-nums">
            {displayValue}
          </span>
          <span className="font-serif text-lg sm:text-2xl lg:text-3xl font-semibold text-caramel group-hover:text-gold-light transition-colors duration-300">
            {stat.suf}
          </span>
        </div>

        <h3 className="mt-2.5 sm:mt-4 text-[11px] sm:text-xs lg:text-sm font-semibold tracking-wider uppercase text-stone-sand group-hover:text-cream transition-colors duration-300 leading-snug">
          {stat.lbl}
        </h3>
      </div>

      <p className="mt-2 text-[10px] sm:text-xs text-stone-slate font-light leading-relaxed line-clamp-3 sm:line-clamp-none">
        {stat.desc}
      </p>
    </motion.div>
  );
}

export default function StatsSection() {
  const { t } = useLanguage();

  const statsList: StatItem[] = [
    t.stats.years,
    t.stats.projects,
    t.stats.pieces,
    t.stats.clients,
  ];

  return (
    <section id="stats" className="relative bg-obsidian py-14 sm:py-20 border-b border-charcoal-border overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-14">
        {/* 
          الشبكة الهندسية المدمجة:
          - في شاشات الموبايل: مصفوفة 2×2 متوازنة وأنيقة تعرض جميع الإحصائيات في شاشة واحدة دون إطالة عمودية.
          - في الشاشات الكبيرة: مصفوفة أفقية متكاملة 4 أعمدة.
        */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {statsList.map((stat, idx) => (
            <StatCard key={idx} stat={stat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
