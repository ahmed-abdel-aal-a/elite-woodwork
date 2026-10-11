'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle2, AlertCircle, Loader2, MessageSquare, Send } from 'lucide-react';
import { sanitizeSaudiPhone } from '@/utils/sanitizePhone';
import { useLanguage } from '@/context/LanguageContext';
import { assetPath } from '@/lib/assets';

export default function ContactSection() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    entity: '',
    email: '',
    phone: '',
    scope: 'hq',
    brief: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'fallback_whatsapp'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const phoneCheck = sanitizeSaudiPhone(formData.phone);
    if (!phoneCheck.isValid) {
      // استدعاء رسالة الخطأ الصريحة من القاموس مباشرة (حل الـ Anti-pattern بالكامل)
      setErrorMessage(t.contact.err_phone);
      return;
    }

    setStatus('loading');

    const webhookUrl = process.env.NEXT_PUBLIC_RFP_WEBHOOK_URL;
    const scopeLabel = t.contact.scopes[formData.scope as keyof typeof t.contact.scopes] || formData.scope;
    const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '966542617788';

    // Build pre-encoded WhatsApp dispatch payload to guarantee 0% lead loss
    const waText = encodeURIComponent(
      `*طلب تسعير معتمد جديد (RFP) - منصة ELITE المعمارية*\n\n` +
      `• *الاسم الكريم:* ${formData.fullName}\n` +
      `• *الجهة / الشركة:* ${formData.entity || 'غير محدد'}\n` +
      `• *رقم التواصل:* ${phoneCheck.normalized}\n` +
      `• *البريد الإلكتروني:* ${formData.email}\n` +
      `• *نطاق الأعمال المطلوبة:* ${scopeLabel}\n` +
      `• *المتطلبات الهندسية والملاحظات:* ${formData.brief || 'لا توجد ملاحظات إضافية'}`
    );
    const waUrl = `https://wa.me/${waNumber}?text=${waText}`;

    // If Webhook environment variable is missing, gracefully trigger direct WhatsApp fallback (Never simulate silent fake success)
    if (!webhookUrl) {
      console.warn('NEXT_PUBLIC_RFP_WEBHOOK_URL is not configured. Redirecting safely to Direct WhatsApp RFP Pipeline.');
      setStatus('fallback_whatsapp');
      setErrorMessage(waUrl);
      return;
    }

    try {
      const payload = {
        ...formData,
        phone: phoneCheck.normalized,
        scopeTitle: scopeLabel,
      };

      await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      setStatus('success');
    } catch (err) {
      console.error('Webhook dispatch error:', err);
      // Even on network failure, provide immediate WhatsApp direct transmission
      setStatus('fallback_whatsapp');
      setErrorMessage(waUrl);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-28 bg-obsidian text-stone-sand relative border-b border-charcoal-border">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-14">
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl font-bold uppercase text-cream tracking-tight mb-16"
        >
          {t.contact.title}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 bg-charcoal border border-charcoal-border">
              <div className="flex items-center gap-3 text-gold mb-6">
                <MapPin className="w-5 h-5" />
                <h3 className="text-xs uppercase tracking-widest font-bold text-cream">{t.contact.address_card}</h3>
              </div>
              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex justify-between py-2 border-b border-charcoal-border">
                  <span className="text-stone-slate">{t.contact.bld}</span>
                  <span className="font-semibold text-cream">7640</span>
                </div>
                <div className="flex justify-between py-2 border-b border-charcoal-border">
                  <span className="text-stone-slate">{t.contact.street}</span>
                  <span className="font-semibold text-cream">{t.contact.street_val}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-charcoal-border">
                  <span className="text-stone-slate">{t.contact.dist}</span>
                  <span className="font-semibold text-cream">{t.contact.dist_val}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-charcoal-border">
                  <span className="text-stone-slate">{t.contact.zip}</span>
                  <span className="font-semibold text-cream">12341 ({t.contact.sec}: 4091)</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-stone-slate">{t.contact.city}</span>
                  <span className="font-semibold text-gold">{t.contact.city_val}</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-charcoal border border-charcoal-border flex items-center gap-6">
              <div className="w-24 h-24 bg-white p-2 border border-gold/40 flex-shrink-0">
                <img src={assetPath('/images/spl_qr_final.png')} alt="Saudi Post SPL QR Code" className="w-full h-full object-contain" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-cream font-bold">{t.contact.spl_title}</h4>
                <p className="text-xs text-stone-slate mt-1 leading-relaxed">
                  {t.contact.spl_desc}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-charcoal border border-charcoal-border p-8 sm:p-10"
          >
            <h3 className="text-xl font-bold uppercase text-cream tracking-wide mb-2">{t.contact.form_title}</h3>
            <p className="text-xs text-stone-slate mb-8">{t.contact.form_desc}</p>

            {status === 'success' ? (
              <div className="p-8 text-center bg-obsidian border border-gold/40">
                <CheckCircle2 className="w-12 h-12 text-gold mx-auto mb-3" />
                <h4 className="text-lg font-bold text-cream uppercase">{t.contact.success_title}</h4>
                <p className="text-xs text-stone-slate mt-2">{t.contact.success_desc}</p>
              </div>
            ) : status === 'fallback_whatsapp' ? (
              <div className="p-8 text-center bg-obsidian border border-gold shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                <Send className="w-12 h-12 text-gold mx-auto mb-3" />
                <h4 className="text-lg font-bold text-cream uppercase mb-2">{t.contact.fallback_notice}</h4>
                <p className="text-xs text-stone-sand mb-6">
                  {formData.fullName} • {formData.entity} • {formData.phone}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={errorMessage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-cream font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{t.contact.btn_whatsapp}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="w-full sm:w-auto px-6 py-3 bg-charcoal hover:bg-charcoal-light border border-charcoal-border text-stone-slate hover:text-cream text-xs uppercase font-bold tracking-wider transition-all"
                  >
                    {t.contact.btn_reset}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-4 bg-red-950/40 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-slate mb-2">{t.contact.name}</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-obsidian border border-charcoal-border px-4 py-3 text-sm text-cream focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-slate mb-2">{t.contact.entity}</label>
                    <input
                      type="text"
                      required
                      value={formData.entity}
                      onChange={(e) => setFormData({ ...formData, entity: e.target.value })}
                      className="w-full bg-obsidian border border-charcoal-border px-4 py-3 text-sm text-cream focus:border-gold focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-slate mb-2">{t.contact.email}</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-obsidian border border-charcoal-border px-4 py-3 text-sm text-cream focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-slate mb-2">{t.contact.phone}</label>
                    <input
                      type="text"
                      required
                      placeholder={t.contact.phone_placeholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-obsidian border border-charcoal-border px-4 py-3 text-sm text-cream focus:border-gold focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-slate mb-2">{t.contact.scope_lbl}</label>
                  <select
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    className="w-full bg-obsidian border border-charcoal-border px-4 py-3 text-sm text-cream focus:border-gold focus:outline-none"
                  >
                    <option value="hq">{t.contact.scopes.hq}</option>
                    <option value="ceilings">{t.contact.scopes.ceilings}</option>
                    <option value="doors">{t.contact.scopes.doors}</option>
                    <option value="residential">{t.contact.scopes.residential}</option>
                    <option value="other">{t.contact.scopes.other}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-slate mb-2">{t.contact.brief}</label>
                  <textarea
                    rows={4}
                    value={formData.brief}
                    onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                    className="w-full bg-obsidian border border-charcoal-border px-4 py-3 text-sm text-cream focus:border-gold focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-gradient-to-r from-caramel to-caramel-dark text-cream font-bold text-xs uppercase tracking-[0.25em] border border-gold/40 hover:border-gold transition-all flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-gold" />
                      <span>{t.contact.btn_loading}</span>
                    </>
                  ) : (
                    <span>{t.contact.btn_submit}</span>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
