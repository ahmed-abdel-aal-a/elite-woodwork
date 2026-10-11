'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CalendarClock, Wrench, FileCheck2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function QualitySection() {
  const { t } = useLanguage();

  const commitments = [
    {
      icon: FileCheck2,
      badge: t.quality.c1_badge,
      title: t.quality.c1_title,
      desc: t.quality.c1_desc,
    },
    {
      icon: CalendarClock,
      badge: t.quality.c2_badge,
      title: t.quality.c2_title,
      desc: t.quality.c2_desc,
    },
    {
      icon: Wrench,
      badge: t.quality.c3_badge,
      title: t.quality.c3_title,
      desc: t.quality.c3_desc,
    },
  ];

  return (
    <section id="quality" className="py-24 sm:py-28 bg-obsidian border-b border-charcoal-border relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold">{t.quality.badge}</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold uppercase text-cream tracking-tight">
            {t.quality.title}
          </h2>
          <div className="w-16 h-[2px] bg-caramel mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {commitments.map((c, i) => {
            const IconComp = c.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 45, scale: 0.94, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, delay: i * 0.16, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 bg-charcoal border border-charcoal-border hover:border-gold/40 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-caramel/15 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-obsidian transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-caramel-light px-2.5 py-1 bg-obsidian border border-charcoal-border">
                      {c.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold uppercase text-cream tracking-wide">{c.title}</h3>
                  <p className="mt-3 text-xs sm:text-sm text-stone-slate font-light leading-relaxed">{c.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-charcoal-border flex items-center gap-2 text-xs text-gold font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{t.quality.guaranteed}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
