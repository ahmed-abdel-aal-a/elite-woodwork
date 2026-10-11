'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { assetPath } from '@/lib/assets';

const clientLogos = [
  { name: 'Misk Foundation', file: assetPath('/images/client_misk.png') },
  { name: 'Saudi Aramco', file: assetPath('/images/client_aramco.png') },
  { name: 'Royal Court', file: assetPath('/images/client_royal_court.png') },
  { name: 'International Monetary Fund (IMF)', file: assetPath('/images/client_imf_seal.png') },
  { name: 'Events Investment Fund (EIF)', file: assetPath('/images/client_eif.png') },
  { name: 'Public Investment Fund (PIF)', file: assetPath('/images/client_pif.png') },
  { name: 'Red Sea Global', file: assetPath('/images/client_red_sea.png') },
  { name: 'Asfar Saudi Tourism', file: assetPath('/images/client_asfar.png') },
];

export default function ClientsSection() {
  const { t } = useLanguage();

  return (
    <section id="clients" className="py-24 sm:py-28 bg-charcoal border-b border-charcoal-border">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold">{t.clients.badge}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold uppercase text-cream tracking-tight">
            {t.clients.title}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-stone-slate font-light">
            {t.clients.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center">
          {clientLogos.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.92, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="h-28 flex items-center justify-center p-6 bg-obsidian border border-charcoal-border hover:border-gold/40 transition-all duration-300 group"
            >
              <img
                src={client.file}
                alt={client.name}
                className="max-h-12 max-w-[140px] object-contain filter brightness-90 group-hover:brightness-125 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
