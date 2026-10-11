'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // عداد زمني متزامن بدقة مع حركة رسم خطوط الشعار المتجهية
    const intervalTime = 75; // 75ms * 20 خطوة = 1500ms
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setShowPreloader(false);
            document.body.style.overflow = '';
          }, 450); // ثبات الوهج الذهبي قبل كشف الموقع
          return 100;
        }
        return prev + 5;
      });
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {showPreloader && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            filter: 'blur(8px)',
            transition: { duration: 0.9, ease: [0.77, 0, 0.175, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-obsidian overflow-hidden"
        >
          {/* خلفية الإضاءة المعمارية المتدرجة */}
          <div className="absolute inset-0 bg-luxury-gradient pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center px-6">
            {/* رسم الشعار المعماري الأصلي ≡ L I T ≡ بخطوط الليزر الذهبية */}
            <svg
              viewBox="0 0 524 160"
              className="w-80 sm:w-[460px] h-auto drop-shadow-[0_10px_35px_rgba(212,175,55,0.4)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* الحرف E الأول: العارضة العلوية */}
              <motion.rect
                x="30"
                y="35"
                width="80"
                height="14"
                rx="2"
                stroke="#D4AF37"
                strokeWidth="2"
                initial={{ pathLength: 0, fill: 'rgba(212, 175, 55, 0)' }}
                animate={{
                  pathLength: 1,
                  fill: progress > 70 ? 'rgba(212, 175, 55, 1)' : 'rgba(212, 175, 55, 0)',
                }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />
              {/* الحرف E الأول: العارضة الوسطى */}
              <motion.rect
                x="30"
                y="73"
                width="80"
                height="14"
                rx="2"
                stroke="#D4AF37"
                strokeWidth="2"
                initial={{ pathLength: 0, fill: 'rgba(212, 175, 55, 0)' }}
                animate={{
                  pathLength: 1,
                  fill: progress > 70 ? 'rgba(212, 175, 55, 1)' : 'rgba(212, 175, 55, 0)',
                }}
                transition={{ duration: 0.8, delay: 0.1, ease: 'easeInOut' }}
              />
              {/* الحرف E الأول: العارضة السفلية */}
              <motion.rect
                x="30"
                y="111"
                width="80"
                height="14"
                rx="2"
                stroke="#D4AF37"
                strokeWidth="2"
                initial={{ pathLength: 0, fill: 'rgba(212, 175, 55, 0)' }}
                animate={{
                  pathLength: 1,
                  fill: progress > 70 ? 'rgba(212, 175, 55, 1)' : 'rgba(212, 175, 55, 0)',
                }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
              />

              {/* الحرف L: القائم الرأسي والقاعدة */}
              <motion.path
                d="M145 35 H159 V111 H215 V125 H145 Z"
                stroke="#D4AF37"
                strokeWidth="2"
                strokeLinejoin="round"
                initial={{ pathLength: 0, fill: 'rgba(212, 175, 55, 0)' }}
                animate={{
                  pathLength: 1,
                  fill: progress > 75 ? 'rgba(212, 175, 55, 1)' : 'rgba(212, 175, 55, 0)',
                }}
                transition={{ duration: 0.9, delay: 0.2, ease: 'easeInOut' }}
              />

              {/* الحرف I: الدعامة الرأسية المركزية */}
              <motion.rect
                x="250"
                y="35"
                width="14"
                height="90"
                rx="2"
                stroke="#D4AF37"
                strokeWidth="2"
                initial={{ pathLength: 0, fill: 'rgba(212, 175, 55, 0)' }}
                animate={{
                  pathLength: 1,
                  fill: progress > 80 ? 'rgba(212, 175, 55, 1)' : 'rgba(212, 175, 55, 0)',
                }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' }}
              />

              {/* الحرف T: الكمرة العلوية والعمود الرأسي */}
              <motion.path
                d="M299 35 H379 V49 H346 V125 H332 V49 H299 Z"
                stroke="#D4AF37"
                strokeWidth="2"
                strokeLinejoin="round"
                initial={{ pathLength: 0, fill: 'rgba(212, 175, 55, 0)' }}
                animate={{
                  pathLength: 1,
                  fill: progress > 85 ? 'rgba(212, 175, 55, 1)' : 'rgba(212, 175, 55, 0)',
                }}
                transition={{ duration: 0.9, delay: 0.35, ease: 'easeInOut' }}
              />

              {/* الحرف E الأخير: العارضة العلوية */}
              <motion.rect
                x="414"
                y="35"
                width="80"
                height="14"
                rx="2"
                stroke="#D4AF37"
                strokeWidth="2"
                initial={{ pathLength: 0, fill: 'rgba(212, 175, 55, 0)' }}
                animate={{
                  pathLength: 1,
                  fill: progress > 90 ? 'rgba(212, 175, 55, 1)' : 'rgba(212, 175, 55, 0)',
                }}
                transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}
              />
              {/* الحرف E الأخير: العارضة الوسطى */}
              <motion.rect
                x="414"
                y="73"
                width="80"
                height="14"
                rx="2"
                stroke="#D4AF37"
                strokeWidth="2"
                initial={{ pathLength: 0, fill: 'rgba(212, 175, 55, 0)' }}
                animate={{
                  pathLength: 1,
                  fill: progress > 90 ? 'rgba(212, 175, 55, 1)' : 'rgba(212, 175, 55, 0)',
                }}
                transition={{ duration: 0.8, delay: 0.45, ease: 'easeInOut' }}
              />
              {/* الحرف E الأخير: العارضة السفلية */}
              <motion.rect
                x="414"
                y="111"
                width="80"
                height="14"
                rx="2"
                stroke="#D4AF37"
                strokeWidth="2"
                initial={{ pathLength: 0, fill: 'rgba(212, 175, 55, 0)' }}
                animate={{
                  pathLength: 1,
                  fill: progress > 90 ? 'rgba(212, 175, 55, 1)' : 'rgba(212, 175, 55, 0)',
                }}
                transition={{ duration: 0.8, delay: 0.5, ease: 'easeInOut' }}
              />
            </svg>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-6 text-xs sm:text-sm tracking-[0.4em] uppercase text-cream/80 font-medium text-center"
            >
              WOODWORKS & INTERIORS
            </motion.p>

            <div className="mt-8 flex flex-col items-center w-56 sm:w-64">
              <div className="w-full h-[2px] bg-charcoal-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-caramel via-gold to-cream transition-all duration-100 ease-out shadow-[0_0_10px_rgba(212,175,55,0.7)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="mt-3 flex justify-between w-full text-[11px] font-mono text-stone-slate">
                <span>RIYADH • 2026</span>
                <span className="text-gold font-semibold">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
