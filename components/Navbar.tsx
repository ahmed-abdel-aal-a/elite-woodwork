'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import EliteLogo from './EliteLogo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const { lang, t, toggleLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 45);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // قفل تمرير الشاشة الخلفية أثناء فتح قائمة الموبايل
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // إغلاق قائمة الموبايل تلقائياً عند توسيع الشاشة
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // الروابط التنقلية المجمعة في الجناح الأيسر
  const desktopNavLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.scope, href: '#scope' },
    { name: t.nav.portfolio, href: '#portfolio' },
  ];

  // قائمة الموبايل الشاملة لكافة الأقسام
  const mobileNavLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.scope, href: '#scope' },
    { name: t.nav.portfolio, href: '#portfolio' },
    { name: t.nav.quality, href: '#quality' },
    { name: t.nav.clients, href: '#clients' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <>
      {/* شريط مؤشر تقدم التمرير المعماري الدافئ */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-walnut via-caramel to-sand z-50 origin-left"
        style={{ scaleX }}
      />

      {/* 
        الهيدر المعماري العائم بنطاق عريض ممتد:
        - في البداية (Scroll = 0): شفاف تماماً (bg-transparent border-transparent) لتظهر خلفية الهيرو بالكامل.
        - مع التمرير (Scrolled): يتحول بسلاسة تامة إلى الزجاج المعماري الداكن بلون حجر السج مع بلور فائق.
      */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'py-3.5 bg-obsidian/90 backdrop-blur-2xl border-b border-caramel/20 shadow-[0_15px_35px_rgba(0,0,0,0.6)]'
            : 'py-6 sm:py-7 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between">
          {/* الجناح الأيسر: كافة الروابط التنقلية مجمعة على يسار الشعار (Desktop Nav Links) */}
          <nav className="hidden lg:flex items-center gap-10 flex-1 justify-start">
            {desktopNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-xs uppercase tracking-[0.25em] text-cream/90 hover:text-sand transition-colors py-1 group font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-caramel to-sand transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* زر تبديل اللغة للموبايل والتابلت */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-white/20 bg-obsidian/40 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-cream hover:border-caramel/50 hover:text-sand transition-colors rounded-sm"
              aria-label="Change language"
            >
              <Globe className="w-3.5 h-3.5 text-caramel" />
              <span>{lang === 'en' ? 'العربية' : 'EN'}</span>
            </button>
          </div>

          {/* السنتر المعماري الملكي: الشعار النقي البارز ≡ L I T ≡ بلون الآيفوري العاجي */}
          <div className="flex items-center justify-center px-6">
            <Link href="/" className="group focus:outline-none">
              <EliteLogo
                showSubtitle={false}
                size="md"
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* الجناح الأيمن: زر تبديل اللغة وزر Get In Touch الزجاجي الملكي */}
          <div className="hidden lg:flex items-center gap-5 flex-1 justify-end">
            {/* زر تبديل اللغة للديسكتوب */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-1.5 border border-white/15 bg-obsidian/30 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-cream/90 hover:border-caramel/50 hover:text-sand transition-colors rounded-sm"
            >
              <Globe className="w-3.5 h-3.5 text-caramel" />
              <span>{lang === 'en' ? 'العربية' : 'English'}</span>
            </button>

            {/* زرار طلب التواصل وتقديم العروض السيادي (Get In Touch) */}
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-5 py-2 border border-caramel/50 bg-obsidian/40 backdrop-blur-md hover:bg-caramel/20 text-sand hover:text-cream hover:border-sand hover:shadow-[0_0_20px_rgba(146,104,62,0.35)] transition-all group overflow-hidden rounded-sm"
            >
              <span className="text-xs uppercase tracking-[0.22em] font-semibold">{t.nav.cta}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-caramel group-hover:text-sand" />
            </a>
          </div>

          {/* زر الموبايل والتابلت المتحول فيزيائياً (Morphing Wood Slat Hamburger) */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative w-10 h-10 flex flex-col items-center justify-center gap-[5px] p-2 text-cream focus:outline-none group bg-obsidian/40 backdrop-blur-md rounded-sm border border-white/10"
              aria-label="Toggle navigation menu"
            >
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="w-5 h-[2px] bg-cream group-hover:bg-sand rounded-full origin-center"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="w-5 h-[2px] bg-caramel rounded-full origin-center"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="w-5 h-[2px] bg-cream group-hover:bg-sand rounded-full origin-center"
              />
            </button>
          </div>
        </div>

        {/* قائمة الموبايل فائقة النعومة مع التدفق الزمني (Staggered Mobile Drawer) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden bg-obsidian/95 backdrop-blur-2xl border-b border-caramel/25 shadow-[0_25px_50px_rgba(0,0,0,0.85)]"
            >
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.04,
                    },
                  },
                }}
                className="px-6 py-6 flex flex-col gap-3"
              >
                {mobileNavLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    variants={{
                      hidden: { opacity: 0, x: -12 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="flex items-center justify-between py-2 border-b border-charcoal-border/30 text-xs uppercase tracking-[0.2em] text-cream hover:text-sand transition-colors font-medium"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-stone-slate" />
                  </motion.a>
                ))}

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="pt-3 flex flex-col gap-2.5"
                >
                  <button
                    onClick={() => {
                      toggleLang();
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-center gap-2 py-2.5 border border-charcoal-border bg-charcoal/40 text-xs font-semibold uppercase tracking-wider text-sand hover:border-caramel/50 hover:text-cream transition-colors rounded-sm"
                  >
                    <Globe className="w-4 h-4 text-caramel" />
                    <span>{lang === 'en' ? 'التحويل إلى اللغة العربية' : 'Switch to English'}</span>
                  </button>

                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-3 border border-caramel/50 bg-caramel/20 hover:bg-caramel/30 text-cream text-xs uppercase tracking-[0.2em] font-semibold shadow-[0_0_15px_rgba(146,104,62,0.25)] flex items-center justify-center gap-2 rounded-sm"
                  >
                    <span>{t.nav.cta}</span>
                    <ArrowUpRight className="w-4 h-4 text-sand" />
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
