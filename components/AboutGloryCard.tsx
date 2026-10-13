'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { useInView } from 'framer-motion';
import { ArrowUpRight, Award, Building2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { assetPath } from '@/lib/assets';

export default function AboutGloryCard() {
  const { t, lang } = useLanguage();
  const isRtl = lang === 'ar';
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { amount: 0.2, once: false });

  return (
    <section id="about" className="py-20 sm:py-24 bg-obsidian text-stone-sand overflow-hidden border-b border-charcoal-border">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-14">
        {/* Architectural Teaser Glory Card Container */}
        <div
          ref={cardRef}
          className={`relative rounded-sm overflow-hidden transition-all duration-[1800ms] ease-[0.16,1,0.3,1] group/glory ${
            isInView
              ? 'border border-caramel/35 bg-[#141311] shadow-[0_25px_60px_rgba(0,0,0,0.7),0_0_30px_rgba(146,104,62,0.08)]'
              : 'border border-charcoal-border/40 bg-[#12110f] shadow-[0_15px_35px_rgba(0,0,0,0.5)]'
          } hover:border-caramel/55 hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.85),0_0_35px_rgba(146,104,62,0.16)]`}
        >
          {/* Authentic Sovereign Landmark Architectural Photographic Background Reveal (High Clarity & Subdued Color) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <img
              src={assetPath('/images/projects/imf_boardroom.webp')}
              alt="ELITE Architectural Landmark"
              className="w-full h-full object-cover object-center opacity-0 group-hover/glory:opacity-55 scale-100 group-hover/glory:scale-105 filter group-hover/glory:saturate-[0.70] group-hover/glory:brightness-[0.92] transition-all duration-1000 ease-out"
            />
            {/* Focused Cinematic Vignette: protects text on left, reveals clear boardroom on right */}
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-obsidian/30 group-hover/glory:from-obsidian/90 group-hover/glory:via-obsidian/65 group-hover/glory:to-obsidian/20 transition-colors duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 via-transparent to-obsidian/40 pointer-events-none" />
          </div>

          {/* Top Architectural Light Seam (Subdued) */}
          <div
            className={`absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-sand/60 to-transparent transition-all duration-[1800ms] ease-out origin-center z-30 ${
              isInView ? 'scale-x-100 opacity-40' : 'scale-x-0 opacity-0'
            } group-hover/glory:opacity-70 group-hover/glory:scale-x-100`}
          />

          {/* Soft Vertical Light Plume Rising from Base upon Hover (Dimmed & Subtle) */}
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-caramel/10 via-transparent to-transparent pointer-events-none translate-y-12 opacity-0 group-hover/glory:translate-y-0 group-hover/glory:opacity-40 transition-all duration-1000 ease-[0.16,1,0.3,1] z-0" />

          {/* Ambient Wood Warmth Radial Aura (Calm & Controlled) */}
          <div
            className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(146,104,62,0.08),transparent_70%)] pointer-events-none transition-opacity duration-[1800ms] ${
              isInView ? 'opacity-60' : 'opacity-20'
            } group-hover/glory:opacity-50`}
          />

          {/* Outer Royal Corner Brackets (Subdued Elegance) */}
          <div className="absolute top-2.5 start-2.5 w-3.5 h-3.5 border-t border-s border-caramel/40 group-hover/glory:border-sand/70 group-hover/glory:scale-110 transition-all duration-700 z-20" />
          <div className="absolute top-2.5 end-2.5 w-3.5 h-3.5 border-t border-e border-caramel/40 group-hover/glory:border-sand/70 group-hover/glory:scale-110 transition-all duration-700 z-20" />
          <div className="absolute bottom-2.5 start-2.5 w-3.5 h-3.5 border-b border-s border-caramel/40 group-hover/glory:border-sand/70 group-hover/glory:scale-110 transition-all duration-700 z-20" />
          <div className="absolute bottom-2.5 end-2.5 w-3.5 h-3.5 border-b border-e border-caramel/40 group-hover/glory:border-sand/70 group-hover/glory:scale-110 transition-all duration-700 z-20" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center p-6 sm:p-10 lg:p-14 z-10">
            {/* Content Side (Left Column) */}
            <div className="lg:col-span-7 flex flex-col justify-between z-10">
              <div>
                {/* Category Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-caramel font-bold">
                    {t.about_glory.badge}
                  </span>
                  <span className="w-12 group-hover/glory:w-20 h-[1px] bg-caramel/40 group-hover/glory:bg-sand/70 transition-all duration-700" />
                </div>

                {/* Monumental Headline */}
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-cream uppercase leading-[1.15] transition-colors duration-500 group-hover/glory:text-cream">
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

              {/* Action Area: Resting Architectural Cue + Rising Gateway Button with Golden Sheen */}
              <div className="mt-10 sm:mt-12 pt-6 border-t border-charcoal-border/60 relative min-h-[58px] flex items-center justify-between flex-wrap gap-4">
                {/* Desktop Resting Architectural Cue (Visible when NOT hovering on desktop) */}
                <div className="hidden lg:flex items-center gap-3 text-xs font-mono uppercase tracking-[0.22em] text-sand/80 transition-all duration-500 group-hover/glory:opacity-0 group-hover/glory:-translate-y-2 group-hover/glory:pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-caramel animate-pulse" />
                  <span>{t.about_glory.reveal_hint}</span>
                  <span className="w-8 h-[1px] bg-caramel/40" />
                </div>

                {/* The Gateway Button (Reveals & Rises on Hover on Desktop, Always Accessible on Mobile) */}
                <div className="w-full lg:w-auto transition-all duration-700 ease-[0.16,1,0.3,1] lg:opacity-0 lg:translate-y-4 lg:pointer-events-none group-hover/glory:opacity-100 group-hover/glory:translate-y-0 group-hover/glory:pointer-events-auto">
                  <Link
                    href="/about"
                    className="relative inline-flex items-center justify-between sm:justify-start gap-4 px-6 sm:px-8 py-3.5 bg-gradient-to-r from-obsidian via-[#1e1915] to-obsidian border border-caramel/70 hover:border-sand hover:bg-caramel/25 text-cream font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 rounded-sm shadow-[0_0_25px_rgba(146,104,62,0.3)] hover:shadow-[0_0_40px_rgba(146,104,62,0.6)] group/btn overflow-hidden"
                  >
                    {/* Golden Light Sheen across the Button on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sand/25 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                    <span>{t.about_glory.explore_btn}</span>
                    <span className="p-1 rounded-sm bg-caramel/20 border border-caramel/40 group-hover/btn:border-sand text-sand group-hover/btn:text-cream transition-colors">
                      <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 ${isRtl ? 'rotate-[-90deg] group-hover/btn:-translate-x-0.5 group-hover/btn:-translate-y-0.5' : ''}`} />
                    </span>
                  </Link>
                </div>

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
        </div>
      </div>
    </section>
  );
}
