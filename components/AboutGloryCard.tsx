'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, Building2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { assetPath } from '@/lib/assets';

export default function AboutGloryCard() {
  const { t, lang } = useLanguage();

  return (
    <section id="about" className="py-20 sm:py-24 bg-obsidian text-stone-sand overflow-hidden border-b border-charcoal-border">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-14">
        {/* Architectural Teaser Glory Card */}
        <motion.div
          initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative group rounded-sm border border-charcoal-border hover:border-caramel/60 bg-[#151412] overflow-hidden transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
        >
          {/* Ambient Wood Warmth Radial Aura */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(146,104,62,0.15),transparent_70%)] pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Subdued Background Architectural Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-14">
            {/* Content Side */}
            <div className="lg:col-span-7 flex flex-col justify-between z-10">
              <div>
                {/* Category Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-caramel font-bold">
                    {t.about_glory.badge}
                  </span>
                  <span className="w-12 h-[1px] bg-caramel/40" />
                </div>

                {/* Monumental Headline */}
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-cream uppercase leading-[1.15]">
                  {t.about_glory.title}
                </h2>

                {/* Compact Cinematic Description */}
                <p className="mt-5 text-sm sm:text-base text-stone-sand/90 font-light leading-relaxed max-w-2xl">
                  {t.about_glory.desc}
                </p>

                {/* Fast Architectural Highlights */}
                <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                  <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-sm bg-obsidian/80 border border-charcoal-border text-xs text-cream font-medium">
                    <Award className="w-4 h-4 text-caramel flex-shrink-0" />
                    <span>{t.about_glory.tag_legacy}</span>
                  </div>

                  <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-sm bg-obsidian/80 border border-charcoal-border text-xs text-cream font-medium">
                    <Building2 className="w-4 h-4 text-sand flex-shrink-0" />
                    <span>{t.about_glory.tag_factory}</span>
                  </div>
                </div>
              </div>

              {/* Exploration CTA Button */}
              <div className="mt-10 sm:mt-12 pt-6 border-t border-charcoal-border/60 flex items-center justify-between flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-caramel/20 hover:bg-caramel/30 border border-caramel/50 hover:border-sand text-cream font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 rounded-sm shadow-[0_0_20px_rgba(146,104,62,0.25)] hover:shadow-[0_0_30px_rgba(146,104,62,0.45)] group/btn"
                >
                  <span>{t.about_glory.explore_btn}</span>
                  <ArrowUpRight className={`w-4 h-4 text-sand transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 ${lang === 'ar' ? 'rotate-[-90deg] group-hover/btn:-translate-x-0.5 group-hover/btn:-translate-y-0.5' : ''}`} />
                </Link>

                <span className="text-[11px] uppercase tracking-widest text-stone-slate font-mono">
                  ELITE ARCHITECTURAL JOINERY
                </span>
              </div>
            </div>

            {/* Visual Showcase Side */}
            <div className="lg:col-span-5 relative">
              <div className="relative overflow-hidden rounded-sm border border-charcoal-border aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] group-hover:border-caramel/40 transition-colors duration-500">
                <img
                  src={assetPath('/images/projects/imf_reception.webp')}
                  alt="ELITE Architectural Woodwork"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/20 to-transparent pointer-events-none" />

                {/* Subtle Corner Architectural Accents */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-caramel/70" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-caramel/70" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-caramel/70" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-caramel/70" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] tracking-wider uppercase text-sand/80 font-mono bg-obsidian/80 px-3 py-1.5 backdrop-blur-md border border-charcoal-border">
                  <span>RIYADH SAUDI ARABIA</span>
                  <span className="text-caramel">100% BESPOKE</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
