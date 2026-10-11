'use client';

import React from 'react';

interface EliteLogoProps {
  className?: string;
  showSubtitle?: boolean;
  subtitle?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function EliteLogo({
  className = '',
  showSubtitle = false,
  subtitle,
  size = 'md',
}: EliteLogoProps) {
  // المقاييس المعمارية المتناسقة بدقة مع كافة الشاشات
  const dimensions = {
    sm: { width: 128, height: 28, subtitleSize: 'text-[7.5px]' },
    md: { width: 156, height: 34, subtitleSize: 'text-[9px]' },
    lg: { width: 195, height: 42, subtitleSize: 'text-[11px]' },
  }[size];

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none group ${className}`}>
      {/* 
        الشعار المعماري السيادي النقي ≡ L I T ≡:
        - ثبات وهيبة معمارية كاملة (Zero Gimmick Animations) وفق أرقى معايير العلامات الفاخرة العالمية.
        - لون الآيفوري العاجي الدافئ والراقي (#F5ECE1) المعتمد رسمياً في دليل الهوية خالي من أي تدرجات مزعجة.
        - تفاعل ناعم وراقٍ مع تحويم الماوس يتحول فيه اللون بانسيابية إلى الذهب الشمبانيا الهادئ.
      */}
      <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
        <svg
          viewBox="0 0 148 34"
          width={dimensions.width}
          height={dimensions.height}
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#F5ECE1] group-hover:text-gold transition-colors duration-400 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
        >
          {/* === الحرف E الأول: ثلاث عوارض معمارية متوازية نقية (Wood Slats) === */}
          <rect x="2" y="4" width="24" height="3.8" rx="0.8" />
          <rect x="2" y="14.6" width="24" height="3.8" rx="0.8" />
          <rect x="2" y="25.2" width="24" height="3.8" rx="0.8" />

          {/* === الحرف L: قائم رأسي وزاوية أفقية مصمتة === */}
          <rect x="38" y="4" width="3.8" height="25" rx="0.8" />
          <rect x="38" y="25.2" width="20" height="3.8" rx="0.8" />

          {/* === الحرف I: دعامة ارتكاز نقية في المنتصف === */}
          <rect x="70" y="4" width="3.8" height="25" rx="0.8" />

          {/* === الحرف T: كمرة علوية وعمود ارتكاز متقاطعان بنقاء هندسي === */}
          <rect x="85.6" y="4" width="24" height="3.8" rx="0.8" />
          <rect x="95.7" y="7.8" width="3.8" height="21.2" rx="0.8" />

          {/* === الحرف E الأخير: ثلاث عوارض متطابقة تحقق التناظر الملكي التام === */}
          <rect x="121.6" y="4" width="24" height="3.8" rx="0.8" />
          <rect x="121.6" y="14.6" width="24" height="3.8" rx="0.8" />
          <rect x="121.6" y="25.2" width="24" height="3.8" rx="0.8" />
        </svg>
      </div>

      {/* التوصيف المعماري الثانوي (يظهر عند التفعيل فقط) */}
      {showSubtitle && (
        <span className="mt-1 font-sans text-[9px] tracking-[0.38em] uppercase text-stone-sand/90 font-semibold group-hover:text-gold transition-colors duration-300 text-center pl-[0.38em]">
          {subtitle || 'WOODWORKS & INTERIORS'}
        </span>
      )}
    </div>
  );
}
