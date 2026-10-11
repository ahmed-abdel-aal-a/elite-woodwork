'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trees, Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { assetPath } from '@/lib/assets';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 sm:py-28 bg-obsidian text-stone-sand overflow-hidden border-b border-charcoal-border">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-caramel font-bold">{t.about.badge}</span>
          <span className="w-12 h-[1px] bg-caramel/40" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-cream uppercase leading-tight">
              {t.about.heading} <span className="text-gold">{t.about.headingGold}</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-stone-sand/90 font-light leading-relaxed">
              {t.about.p1}
            </p>

            <p className="mt-4 text-sm sm:text-base text-stone-slate font-light leading-relaxed">
              {t.about.p2}
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-3 p-4 bg-charcoal border border-charcoal-border hover:border-gold/40 transition-colors"
              >
                <Trees className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-cream font-semibold">{t.about.feat1}</h4>
                  <p className="text-xs text-stone-slate mt-1">{t.about.feat1_desc}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-3 p-4 bg-charcoal border border-charcoal-border hover:border-gold/40 transition-colors"
              >
                <Award className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-cream font-semibold">{t.about.feat2}</h4>
                  <p className="text-xs text-stone-slate mt-1">{t.about.feat2_desc}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4 relative">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 35, scale: 0.94, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden border border-charcoal-border group"
              >
                <img
                  src={assetPath('/images/projects/imf_pantry.webp')}
                  alt="Craftsmanship"
                  className="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 35, scale: 0.94, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 bg-caramel/20 border border-gold/30 hover:border-gold/60 transition-colors"
              >
                <span className="font-serif text-3xl font-bold text-cream">{t.about.card1_stat}</span>
                <p className="text-xs uppercase tracking-wider text-stone-sand mt-1 font-medium">{t.about.card1_lbl}</p>
              </motion.div>
            </div>

            <div className="space-y-4 pt-8">
              <motion.div
                initial={{ opacity: 0, y: 35, scale: 0.94, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 bg-charcoal border border-charcoal-border hover:border-gold/40 transition-colors"
              >
                <span className="font-serif text-3xl font-bold text-gold">{t.about.card2_stat}</span>
                <p className="text-xs uppercase tracking-wider text-stone-sand mt-1 font-medium">{t.about.card2_lbl}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 35, scale: 0.94, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden border border-charcoal-border group"
              >
                <img
                  src={assetPath('/images/projects/imf_reception.webp')}
                  alt="Precision Joinery"
                  className="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
