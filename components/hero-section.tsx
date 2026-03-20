'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const ACTU_SLIDES = [
  {
    id: 1,
    title: "Le Maire et son Conseil municipal sur le chantier du futur Hôtel de Ville",
    imageSrc: "/actu1.png",
  },
  {
    id: 2,
    title: "Construction de nouveaux modules de classes par la mairie de Cotonou",
    imageSrc: "/actu2.png",
  },
  {
    id: 3,
    title: "Le Maire inaugure les nouvelles infrastructures sportives de la ville",
    imageSrc: "/actu2.png",
  },
];

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: 680 }}>
      {/* ── Background photo ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/backsection1.png"
          alt="Cotonou"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Blue gradient: strong on left */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(11,66,100,0.92) 0%, rgba(11,66,100,0.78) 40%, rgba(11,66,100,0.30) 70%, transparent 100%)',
          }}
        />
      </div>

      {/* Main content layer ── */}
      <div
        className="relative flex flex-col justify-between w-full px-4 sm:px-[100px] lg:px-[150px]"
        style={{ zIndex: 10, minHeight: 680, paddingTop: 120, paddingBottom: 0 }}
      >
        {/* TOP: text block + buttons */}
        <div className="max-w-[520px]">
          <p className="text-white text-[18px] lg:text-[22px] font-medium mb-1">
            Bienvenue à
          </p>
          <h1
            className="font-black leading-none mb-5 tracking-tight"
            style={{
              fontSize: 'clamp(56px, 8vw, 84px)',
              background: 'linear-gradient(to right, #FFFFFF, #FDBC2F)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            COTONOU
          </h1>
          <p className="text-white/90 text-[14px] lg:text-[16px] leading-relaxed mb-10 max-w-[420px]">
            Capitale économique du Bénin, ville dynamique et
            moderne au service de ses citoyens
          </p>

          {/* CTA Buttons — side by side, tall */}
          <div className="flex flex-row gap-4">
            <Link href="/services">
              <Button
                variant="outline"
                className="border-2 border-white text-white text-[13px] lg:text-[14px] font-semibold hover:bg-white hover:text-[#0B4264] rounded-sm bg-transparent h-14 px-6 md:px-8 whitespace-nowrap"
              >
                Demande d&apos;acte de naissance
              </Button>
            </Link>
            <Link href="/decouvrir-cotonou">
              <Button
                variant="outline"
                className="border-2 border-white text-white text-[13px] lg:text-[14px] font-semibold hover:bg-white hover:text-[#0B4264] rounded-sm flex items-center gap-2 bg-transparent h-14 px-6 md:px-8 whitespace-nowrap"
              >
                Découvrir Cotonou
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>

        {/* ActuCard flush right, starting exactly where the text block ends vertically */}
        <div className="flex justify-end mt-4 lg:mt-0">
          <div className="w-full max-w-[380px] lg:max-w-[420px]">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden font-sans">
              {/* Card header */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E53935] shrink-0" />
                  <span className="text-[11px] font-bold text-[#0B4264] uppercase tracking-widest">
                    Actualités - À la Une
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {ACTU_SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlide(i)}
                      className={
                        i === activeSlide
                          ? 'h-1.5 w-5 rounded-full bg-[#0B4264] transition-all'
                          : 'h-1.5 w-2 rounded-full bg-gray-300 transition-all hover:bg-gray-400'
                      }
                    />
                  ))}
                </div>
              </div>

              {/* Card body */}
              <div className="flex gap-4 px-4 py-4">
                <div className="flex-1 flex flex-col justify-between min-h-[90px]">
                  <p className="text-[13px] lg:text-[14px] font-medium text-gray-800 leading-snug">
                    <span className="font-bold text-[#0B4264]">Cotonou</span>{' '}
                    : {ACTU_SLIDES[activeSlide].title}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-[#0B4264] text-[12px] font-bold mt-3 hover:underline"
                  >
                    Voir Plus
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                <div className="relative w-[100px] h-[90px] rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={ACTU_SLIDES[activeSlide].imageSrc}
                    alt={ACTU_SLIDES[activeSlide].title}
                    fill
                    className="object-cover transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
