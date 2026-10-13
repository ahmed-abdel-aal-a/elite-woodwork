'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  ChevronLeft, 
  Hammer, 
  Leaf, 
  Lightbulb, 
  Users2, 
  Trees, 
  Award, 
  Cpu, 
  Building2, 
  ShieldCheck, 
  Compass, 
  ArrowUpRight 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { assetPath } from '@/lib/assets';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPageContent() {
  const { t, lang } = useLanguage();
  const isRtl = lang === 'ar';

  const values = [
    { icon: Hammer, title: t.values.v1_title, sub: t.values.v1_sub, desc: t.values.v1_desc },
    { icon: Leaf, title: t.values.v2_title, sub: t.values.v2_sub, desc: t.values.v2_desc },
    { icon: Lightbulb, title: t.values.v3_title, sub: t.values.v3_sub, desc: t.values.v3_desc },
    { icon: Users2, title: t.values.v4_title, sub: t.values.v4_sub, desc: t.values.v4_desc },
  ];

  const factoryStats = [
    {
      val: t.about_page.factory_stat1_val,
      unit: t.about_page.factory_stat1_unit,
      lbl: t.about_page.factory_stat1_lbl,
      icon: Building2,
    },
    {
      val: t.about_page.factory_stat2_val,
      unit: t.about_page.factory_stat2_unit,
      lbl: t.about_page.factory_stat2_lbl,
      icon: Cpu,
    },
    {
      val: t.about_page.factory_stat3_val,
      unit: t.about_page.factory_stat3_unit,
      lbl: t.about_page.factory_stat3_lbl,
      icon: ShieldCheck,
    },
    {
      val: t.about_page.factory_stat4_val,
      unit: t.about_page.factory_stat4_unit,
      lbl: t.about_page.factory_stat4_lbl,
      icon: Compass,
    },
  ];

  return (
    <div className="min-h-screen bg-obsidian text-stone-sand flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-36">
        {/* Breadcrumb Navigation Bar */}
        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 pb-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-slate">
            <Link href="/" className="hover:text-sand transition-colors">
              {t.about_page.breadcrumb_home}
            </Link>
            {isRtl ? (
              <ChevronLeft className="w-3.5 h-3.5 text-caramel/60" />
            ) : (
              <ChevronRight className="w-3.5 h-3.5 text-caramel/60" />
            )}
            <span className="text-sand font-medium">
              {t.about_page.breadcrumb_current}
            </span>
          </nav>
        </div>

        {/* Monumental Page Header / Hero Banner */}
        <section className="relative py-12 sm:py-20 border-b border-charcoal-border overflow-hidden">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(146,104,62,0.12),transparent_70%)] pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-[radial-gradient(circle,rgba(74,55,41,0.2),transparent_70%)] pointer-events-none" />

          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs uppercase tracking-[0.3em] text-caramel font-bold">
                  {t.about.badge}
                </span>
                <span className="w-16 h-[1px] bg-caramel/40" />
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-cream uppercase leading-[1.12]">
                {t.about_page.monument_title}
              </h1>

              <p className="mt-6 text-base sm:text-xl text-stone-sand/90 font-light leading-relaxed max-w-3xl">
                {t.about_page.monument_subtitle}
              </p>
            </motion.div>

            {/* Photographic Showcase Mosaic */}
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
            >
              <div className="relative overflow-hidden rounded-sm border border-charcoal-border aspect-[16/10] group">
                <img
                  src={assetPath('/images/projects/imf_boardroom.webp')}
                  alt="Boardroom Joinery"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 start-3 text-[11px] font-mono tracking-wider uppercase text-sand bg-obsidian/70 px-2.5 py-1 backdrop-blur-sm border border-charcoal-border">
                  EXECUTIVE SUITES
                </span>
              </div>

              <div className="relative overflow-hidden rounded-sm border border-charcoal-border aspect-[16/10] group">
                <img
                  src={assetPath('/images/projects/imf_auditorium.webp')}
                  alt="Acoustic Wall Cladding"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 start-3 text-[11px] font-mono tracking-wider uppercase text-sand bg-obsidian/70 px-2.5 py-1 backdrop-blur-sm border border-charcoal-border">
                  ACOUSTIC MILLWORK
                </span>
              </div>

              <div className="relative overflow-hidden rounded-sm border border-charcoal-border aspect-[16/10] group">
                <img
                  src={assetPath('/images/projects/cntxt_main.webp')}
                  alt="Architectural Wall Panels"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 start-3 text-[11px] font-mono tracking-wider uppercase text-sand bg-obsidian/70 px-2.5 py-1 backdrop-blur-sm border border-charcoal-border">
                  CURATED VENEERS
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Heritage & Story Section */}
        <section className="py-20 sm:py-24 border-b border-charcoal-border bg-[#151412]">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-caramel font-bold">
                    {t.about_page.story_title}
                  </span>
                  <span className="w-12 h-[1px] bg-caramel/40" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-cream uppercase leading-tight">
                  {t.about.heading} <span className="text-sand">{t.about.headingGold}</span>
                </h2>

                <p className="mt-6 text-base sm:text-lg text-stone-sand/90 font-light leading-relaxed">
                  {t.about.p1}
                </p>

                <p className="mt-4 text-sm sm:text-base text-stone-slate font-light leading-relaxed">
                  {t.about.p2}
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-obsidian border border-charcoal-border hover:border-caramel/40 transition-colors rounded-sm">
                    <Trees className="w-5 h-5 text-caramel flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xs uppercase tracking-wider text-cream font-semibold">{t.about.feat1}</h3>
                      <p className="text-xs text-stone-slate mt-1">{t.about.feat1_desc}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-obsidian border border-charcoal-border hover:border-caramel/40 transition-colors rounded-sm">
                    <Award className="w-5 h-5 text-sand flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xs uppercase tracking-wider text-cream font-semibold">{t.about.feat2}</h3>
                      <p className="text-xs text-stone-slate mt-1">{t.about.feat2_desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-5 grid grid-cols-2 gap-4"
              >
                <div className="space-y-4">
                  <div className="overflow-hidden border border-charcoal-border rounded-sm">
                    <img
                      src={assetPath('/images/projects/imf_pantry.webp')}
                      alt="Detail Joinery"
                      className="w-full h-52 object-cover"
                    />
                  </div>
                  <div className="p-6 bg-caramel/15 border border-caramel/30 rounded-sm">
                    <span className="font-serif text-3xl font-bold text-cream">{t.about.card1_stat}</span>
                    <p className="text-xs uppercase tracking-wider text-stone-sand mt-1 font-medium">{t.about.card1_lbl}</p>
                  </div>
                </div>

                <div className="space-y-4 pt-8">
                  <div className="p-6 bg-obsidian border border-charcoal-border rounded-sm">
                    <span className="font-serif text-3xl font-bold text-sand">{t.about.card2_stat}</span>
                    <p className="text-xs uppercase tracking-wider text-stone-sand mt-1 font-medium">{t.about.card2_lbl}</p>
                  </div>
                  <div className="overflow-hidden border border-charcoal-border rounded-sm">
                    <img
                      src={assetPath('/images/projects/imf_reception.webp')}
                      alt="Precision Execution"
                      className="w-full h-52 object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Riyadh Manufacturing Complex Technical Capabilities */}
        <section className="py-20 sm:py-24 border-b border-charcoal-border bg-obsidian">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mb-12 sm:mb-16"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-caramel font-bold">
                RIYADH MANUFACTURING FACILITY
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-cream tracking-tight">
                {t.about_page.factory_title}
              </h2>
              <div className="w-16 h-[2px] bg-caramel mt-4" />
              <p className="mt-6 text-sm sm:text-base text-stone-sand/90 font-light leading-relaxed">
                {t.about_page.factory_desc}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {factoryStats.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: idx * 0.1 }}
                    className="p-6 sm:p-7 rounded-sm bg-[#171614] border border-charcoal-border hover:border-caramel/50 transition-colors group relative overflow-hidden"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="p-2.5 rounded-sm bg-obsidian border border-charcoal-border text-caramel">
                        <IconComp className="w-5 h-5" />
                      </span>
                      <span className="text-xs font-mono text-sand/80 uppercase tracking-widest">{item.unit}</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold font-serif text-cream">
                      {item.val}
                    </div>
                    <p className="mt-2 text-xs text-stone-slate uppercase tracking-wider font-medium leading-relaxed">
                      {item.lbl}
                    </p>
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-caramel/0 group-hover:bg-caramel/40 transition-colors duration-500" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* The 4 Architectural Core Value Pillars */}
        <section className="py-20 sm:py-24 border-b border-charcoal-border bg-[#151412]">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-caramel font-bold">
                {t.values.badge}
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-cream tracking-tight">
                {t.values.title}
              </h2>
              <div className="w-16 h-[2px] bg-caramel mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => {
                const IconComponent = v.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.7, delay: i * 0.1 }}
                    className="p-6 sm:p-7 rounded-sm border border-charcoal-border bg-obsidian hover:border-caramel/60 hover:shadow-[0_10px_30px_rgba(146,104,62,0.15)] transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-11 h-11 rounded-sm bg-[#1A1815] border border-charcoal-border flex items-center justify-center text-caramel mb-5 group-hover:border-caramel/40 group-hover:text-sand transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-cream uppercase tracking-wide">
                        {v.title}
                      </h3>
                      <h4 className="text-xs text-caramel font-medium mt-1 uppercase tracking-wider">
                        {v.sub}
                      </h4>
                      <p className="mt-4 text-xs sm:text-sm text-stone-slate font-light leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Landmark RFP / Sovereign Portfolio Banner CTA */}
        <section className="py-20 sm:py-24 bg-obsidian relative overflow-hidden">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="p-8 sm:p-14 lg:p-16 rounded-sm border border-caramel/40 bg-gradient-to-br from-[#1E1B17] via-[#161412] to-obsidian relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(146,104,62,0.18),transparent_70%)] pointer-events-none" />

              <div className="relative z-10 max-w-3xl">
                <span className="text-xs uppercase tracking-[0.3em] text-caramel font-bold">
                  PROJECT SPECIFICATION & CONTRACTING
                </span>
                <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-bold uppercase text-cream tracking-tight leading-tight">
                  {t.about_page.cta_box_title}
                </h2>
                <p className="mt-5 text-sm sm:text-base text-stone-sand/90 font-light leading-relaxed">
                  {t.about_page.cta_box_desc}
                </p>

                <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-caramel/25 hover:bg-caramel/40 border border-caramel/60 hover:border-sand text-cream font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] transition-all rounded-sm shadow-[0_0_20px_rgba(146,104,62,0.3)]"
                  >
                    <span>{t.about_page.cta_box_rfp}</span>
                    <ArrowUpRight className={`w-4 h-4 text-sand ${isRtl ? 'rotate-[-90deg]' : ''}`} />
                  </Link>

                  <Link
                    href="/#portfolio"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-obsidian/70 hover:bg-obsidian border border-charcoal-border hover:border-caramel/50 text-stone-sand hover:text-cream font-medium text-xs sm:text-sm uppercase tracking-[0.2em] transition-all rounded-sm"
                  >
                    <span>{t.about_page.cta_box_portfolio}</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
