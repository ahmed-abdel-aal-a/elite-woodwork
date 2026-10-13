'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, Building2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { assetPath } from '@/lib/assets';

export default function AboutGloryCard() {
  const { t, lang } = useLanguage();
  const isRtl = lang === 'ar';

  return (
    <section id="about" className="py-20 sm:py-24 bg-obsidian text-stone-sand overflow-hidden border-b border-charcoal-border">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-14">
        {/* Architectural Teaser Glory Card Container with Atmospheric Transformations */}
        <motion.div
          initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-sm border border-charcoal-border hover:border-caramel/70 bg-[#141311] hover:bg-gradient-to-br hover:from-[#1d1915] hover:via-[#161412] hover:to-[#11100e] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:shadow-[0_25px_65px_-10px_rgba(146,104,62,0.32),0_0_50px_rgba(146,104,62,0.15)] transition-all duration-700 ease-out group/glory"
        >
          {/* Top Architectural Light Beam (Expands Smoothly on Hover) */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sand to-transparent scale-x-0 group-hover/glory:scale-x-100 transition-transform duration-700 ease-[0.16,1,0.3,1] origin-center z-30" />

          {/* Bottom Ambient Vertical Light Plume (Rises Smoothly from Bottom on Hover) */}
          <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-caramel/25 via-walnut/15 to-transparent pointer-events-none translate-y-16 opacity-0 group-hover/glory:translate-y-0 group-hover/glory:opacity-100 transition-all duration-700 ease-[0.16,1,0.3,1] z-0" />

          {/* Ambient Wood Warmth Radial Aura */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(146,104,62,0.15),transparent_70%)] pointer-events-none transition-opacity duration-700 group-hover/glory:opacity-100 opacity-60" />

          {/* Subdued Background Architectural Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none group-hover/glory:opacity-80 transition-opacity duration-700" />

          {/* Outer Royal Corner Brackets (Scale & Illuminate on Hover) */}
          <div className="absolute top-2.5 start-2.5 w-4 h-4 border-t-2 border-s-2 border-caramel/40 group-hover/glory:border-sand group-hover/glory:scale-125 transition-all duration-500 z-20" />
          <div className="absolute top-2.5 end-2.5 w-4 h-4 border-t-2 border-e-2 border-caramel/40 group-hover/glory:border-sand group-hover/glory:scale-125 transition-all duration-500 z-20" />
          <div className="absolute bottom-2.5 start-2.5 w-4 h-4 border-b-2 border-s-2 border-caramel/40 group-hover/glory:border-sand group-hover/glory:scale-125 transition-all duration-500 z-20" />
          <div className="absolute bottom-2.5 end-2.5 w-4 h-4 border-b-2 border-e-2 border-caramel/40 group-hover/glory:border-sand group-hover/glory:scale-125 transition-all duration-500 z-20" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center p-6 sm:p-10 lg:p-14 z-10">
            {/* Content Side (Left Column) */}
            <div className="lg:col-span-7 flex flex-col justify-between z-10">
              <div>
                {/* Category Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-caramel font-bold">
                    {t.about_glory.badge}
                  </span>
                  <span className="w-12 group-hover/glory:w-24 h-[1px] bg-caramel/40 group-hover/glory:bg-sand transition-all duration-500" />
                </div>

                {/* Monumental Headline with Smooth Royal Gradient Shift on Hover */}
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-cream uppercase leading-[1.15] transition-all duration-500 group-hover/glory:text-transparent group-hover/glory:bg-clip-text group-hover/glory:bg-gradient-to-r group-hover/glory:from-cream group-hover/glory:via-sand group-hover/glory:to-caramel">
                  {t.about_glory.title}
                </h2>

                {/* Compact Cinematic Description */}
                <p className="mt-5 text-sm sm:text-base text-stone-sand/90 font-light leading-relaxed max-w-2xl">
                  {t.about_glory.desc}
                </p>

                {/* Fast Architectural Highlights */}
                <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                  <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-sm bg-obsidian/80 border border-charcoal-border group-hover/glory:border-caramel/50 text-xs text-cream font-medium transition-colors duration-500">
                    <Award className="w-4 h-4 text-caramel group-hover/glory:text-sand transition-colors flex-shrink-0" />
                    <span>{t.about_glory.tag_legacy}</span>
                  </div>

                  <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-sm bg-obsidian/80 border border-charcoal-border group-hover/glory:border-caramel/50 text-xs text-cream font-medium transition-colors duration-500">
                    <Building2 className="w-4 h-4 text-sand group-hover/glory:text-cream transition-colors flex-shrink-0" />
                    <span>{t.about_glory.tag_factory}</span>
                  </div>
                </div>
              </div>

              {/* Exploration CTA Button */}
              <div className="mt-10 sm:mt-12 pt-6 border-t border-charcoal-border/60 flex items-center justify-between flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-caramel/20 hover:bg-caramel/35 group-hover/glory:bg-caramel/25 border border-caramel/50 group-hover/glory:border-caramel/70 hover:border-sand text-cream font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 rounded-sm shadow-[0_0_20px_rgba(146,104,62,0.25)] hover:shadow-[0_0_35px_rgba(146,104,62,0.5)] group/btn"
                >
                  <span>{t.about_glory.explore_btn}</span>
                  <ArrowUpRight className={`w-4 h-4 text-sand transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 ${isRtl ? 'rotate-[-90deg] group-hover/btn:-translate-x-0.5 group-hover/btn:-translate-y-0.5' : ''}`} />
                </Link>

                <span className="text-[11px] uppercase tracking-widest text-stone-slate font-mono group-hover/glory:text-stone-sand/70 transition-colors duration-500">
                  ELITE ARCHITECTURAL JOINERY • RIYADH
                </span>
              </div>
            </div>

            {/* Asymmetric Staggered 2x2 Architectural Grid with Interactive Hover Action Layers */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3.5 sm:gap-4 relative">
              {/* Column 1 (Left): Image 1 + Stat Card 1 */}
              <div className="space-y-3.5 sm:space-y-4">
                {/* 1. Image Card 1 (Executive Millwork Pantry) */}
                <Link
                  href="/about"
                  className="block relative overflow-hidden rounded-sm border border-charcoal-border hover:border-caramel/70 transition-all duration-500 group/card bg-[#141311] shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
                >
                  <div className="relative aspect-[4/3] sm:h-52 w-full overflow-hidden">
                    <img
                      src={assetPath('/images/projects/imf_pantry.webp')}
                      alt="Executive Millwork"
                      className="w-full h-full object-cover object-center group-hover/card:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/25 to-transparent pointer-events-none" />

                    {/* Default Quiet Tag */}
                    <div className="absolute bottom-2.5 start-2.5 flex items-center gap-1.5 px-2 py-1 bg-obsidian/80 backdrop-blur-sm border border-charcoal-border text-[10px] font-mono uppercase tracking-wider text-sand group-hover/card:opacity-0 transition-opacity duration-300">
                      <span>{t.about_glory.img1_tag}</span>
                    </div>

                    {/* Architectural Golden Corner Brackets */}
                    <div className="absolute top-2 start-2 w-2 h-2 border-t border-s border-caramel/60 group-hover/card:border-sand group-hover/card:scale-125 transition-all duration-300" />
                    <div className="absolute bottom-2 end-2 w-2 h-2 border-b border-e border-caramel/60 group-hover/card:border-sand group-hover/card:scale-125 transition-all duration-300" />

                    {/* Action Drawer Layer (Slides up on Hover) */}
                    <div className="absolute inset-x-0 bottom-0 p-3.5 bg-obsidian/95 backdrop-blur-md border-t border-caramel/60 translate-y-full group-hover/card:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-caramel mb-1 font-semibold">
                        <span>{t.about_glory.img1_tag}</span>
                        <ArrowUpRight className={`w-3.5 h-3.5 text-sand ${isRtl ? 'rotate-[-90deg]' : ''}`} />
                      </div>
                      <h4 className="text-xs font-bold text-cream uppercase leading-tight line-clamp-1">
                        {t.about_glory.img1_title}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-stone-sand/90 font-light mt-1 leading-snug line-clamp-2">
                        {t.about_glory.img1_desc}
                      </p>
                    </div>
                  </div>
                </Link>

                {/* 2. Stat Card 1 (100% Saudi Engineering Rigor) */}
                <Link
                  href="/about"
                  className="block relative p-5 sm:p-6 rounded-sm bg-[#181613] border border-caramel/30 hover:border-caramel hover:shadow-[0_12px_35px_rgba(146,104,62,0.35)] hover:-translate-y-1 transition-all duration-500 group/card overflow-hidden"
                >
                  {/* Ambient Subtle Wood Radial Glow on Hover */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(146,104,62,0.22),transparent_70%)] opacity-40 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Corner Brackets */}
                  <div className="absolute top-2 start-2 w-2 h-2 border-t border-s border-caramel/50 group-hover/card:border-sand group-hover/card:scale-125 transition-all duration-300" />
                  <div className="absolute bottom-2 end-2 w-2 h-2 border-b border-e border-caramel/50 group-hover/card:border-sand group-hover/card:scale-125 transition-all duration-300" />

                  {/* Default Presentation Layer */}
                  <div className="relative z-10 transition-all duration-300 group-hover/card:-translate-y-2">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-cream tracking-tight block">
                      {t.about.card1_stat}
                    </span>
                    <p className="text-xs uppercase tracking-wider text-stone-sand mt-1.5 font-medium leading-relaxed group-hover/card:opacity-40 transition-opacity duration-300">
                      {t.about.card1_lbl}
                    </p>
                  </div>

                  {/* Action Layer (Slides up on Hover) */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-obsidian via-[#171512] to-[#171512]/95 backdrop-blur-md border-t border-caramel/60 translate-y-full group-hover/card:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-20 flex flex-col justify-between">
                    {/* Animated Growing Accent Line */}
                    <div className="w-0 group-hover/card:w-full h-[2px] bg-gradient-to-r from-walnut via-caramel to-sand transition-all duration-700 delay-100 mb-2" />

                    <h4 className="text-xs font-bold text-cream uppercase leading-tight">
                      {t.about_glory.stat1_hover_title}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-stone-sand/90 font-light mt-1 leading-snug">
                      {t.about_glory.stat1_hover_desc}
                    </p>

                    <div className="mt-2.5 pt-2 border-t border-charcoal-border/50 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-sand group-hover/card:text-cream">
                      <span>{t.about_glory.stat1_hover_action}</span>
                      <ArrowUpRight className={`w-3.5 h-3.5 text-caramel ${isRtl ? 'rotate-[-90deg]' : ''}`} />
                    </div>
                  </div>
                </Link>
              </div>

              {/* Column 2 (Right): Staggered Offset with pt-6 sm:pt-8 */}
              <div className="space-y-3.5 sm:space-y-4 pt-6 sm:pt-8">
                {/* 3. Stat Card 2 (2026 Future Horizons) */}
                <Link
                  href="/about"
                  className="block relative p-5 sm:p-6 rounded-sm bg-charcoal border border-charcoal-border hover:border-caramel/70 hover:shadow-[0_12px_35px_rgba(146,104,62,0.25)] hover:-translate-y-1 transition-all duration-500 group/card overflow-hidden"
                >
                  {/* Ambient Wood Glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(146,104,62,0.18),transparent_70%)] opacity-30 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Corner Brackets */}
                  <div className="absolute top-2 start-2 w-2 h-2 border-t border-s border-caramel/50 group-hover/card:border-sand group-hover/card:scale-125 transition-all duration-300" />
                  <div className="absolute bottom-2 end-2 w-2 h-2 border-b border-e border-caramel/50 group-hover/card:border-sand group-hover/card:scale-125 transition-all duration-300" />

                  {/* Default Presentation Layer */}
                  <div className="relative z-10 transition-all duration-300 group-hover/card:-translate-y-2">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-sand tracking-tight block">
                      {t.about.card2_stat}
                    </span>
                    <p className="text-xs uppercase tracking-wider text-stone-sand mt-1.5 font-medium leading-relaxed group-hover/card:opacity-40 transition-opacity duration-300">
                      {t.about.card2_lbl}
                    </p>
                  </div>

                  {/* Action Layer (Slides up on Hover) */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-obsidian via-[#171512] to-[#171512]/95 backdrop-blur-md border-t border-caramel/60 translate-y-full group-hover/card:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-20 flex flex-col justify-between">
                    {/* Animated Growing Accent Line */}
                    <div className="w-0 group-hover/card:w-full h-[2px] bg-gradient-to-r from-caramel via-sand to-cream transition-all duration-700 delay-100 mb-2" />

                    <h4 className="text-xs font-bold text-cream uppercase leading-tight">
                      {t.about_glory.stat2_hover_title}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-stone-sand/90 font-light mt-1 leading-snug">
                      {t.about_glory.stat2_hover_desc}
                    </p>

                    <div className="mt-2.5 pt-2 border-t border-charcoal-border/50 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-sand group-hover/card:text-cream">
                      <span>{t.about_glory.stat2_hover_action}</span>
                      <ArrowUpRight className={`w-3.5 h-3.5 text-caramel ${isRtl ? 'rotate-[-90deg]' : ''}`} />
                    </div>
                  </div>
                </Link>

                {/* 4. Image Card 2 (Reception and Acoustic Millwork) */}
                <Link
                  href="/about"
                  className="block relative overflow-hidden rounded-sm border border-charcoal-border hover:border-caramel/70 transition-all duration-500 group/card bg-[#141311] shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
                >
                  <div className="relative aspect-[4/3] sm:h-52 w-full overflow-hidden">
                    <img
                      src={assetPath('/images/projects/imf_reception.webp')}
                      alt="Reception and Acoustic Millwork"
                      className="w-full h-full object-cover object-center group-hover/card:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/25 to-transparent pointer-events-none" />

                    {/* Default Quiet Tag */}
                    <div className="absolute bottom-2.5 start-2.5 flex items-center gap-1.5 px-2 py-1 bg-obsidian/80 backdrop-blur-sm border border-charcoal-border text-[10px] font-mono uppercase tracking-wider text-sand group-hover/card:opacity-0 transition-opacity duration-300">
                      <span>{t.about_glory.img2_tag}</span>
                    </div>

                    {/* Architectural Golden Corner Brackets */}
                    <div className="absolute top-2 start-2 w-2 h-2 border-t border-s border-caramel/60 group-hover/card:border-sand group-hover/card:scale-125 transition-all duration-300" />
                    <div className="absolute bottom-2 end-2 w-2 h-2 border-b border-e border-caramel/60 group-hover/card:border-sand group-hover/card:scale-125 transition-all duration-300" />

                    {/* Action Drawer Layer (Slides up on Hover) */}
                    <div className="absolute inset-x-0 bottom-0 p-3.5 bg-obsidian/95 backdrop-blur-md border-t border-caramel/60 translate-y-full group-hover/card:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-caramel mb-1 font-semibold">
                        <span>{t.about_glory.img2_tag}</span>
                        <ArrowUpRight className={`w-3.5 h-3.5 text-sand ${isRtl ? 'rotate-[-90deg]' : ''}`} />
                      </div>
                      <h4 className="text-xs font-bold text-cream uppercase leading-tight line-clamp-1">
                        {t.about_glory.img2_title}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-stone-sand/90 font-light mt-1 leading-snug line-clamp-2">
                        {t.about_glory.img2_desc}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
