'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import EliteLogo from './EliteLogo';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#07090C] border-t border-charcoal-border py-16 text-stone-slate">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-14"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-charcoal-border">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="group focus:outline-none">
              <EliteLogo size="lg" />
            </Link>
            <p className="text-xs uppercase tracking-[0.25em] text-caramel mt-3 font-medium text-center md:text-left rtl:md:text-right">
              {t.footer.slogan}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 sm:gap-8 text-xs uppercase tracking-widest text-stone-sand">
            <Link href="/about" className="hover:text-caramel transition-colors">{t.nav.about}</Link>
            <Link href="/#scope" className="hover:text-caramel transition-colors">{t.nav.scope}</Link>
            <Link href="/#portfolio" className="hover:text-caramel transition-colors">{t.nav.portfolio}</Link>
            <Link href="/#quality" className="hover:text-caramel transition-colors">{t.nav.quality}</Link>
            <Link href="/#clients" className="hover:text-caramel transition-colors">{t.nav.clients}</Link>
            <Link href="/#contact" className="hover:text-caramel transition-colors">{t.nav.contact}</Link>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-slate/60 font-light gap-2">
          <p>{t.footer.rights}</p>
          <p className="font-mono tracking-wider">{t.footer.registered}</p>
        </div>
      </motion.div>
    </footer>
  );
}
