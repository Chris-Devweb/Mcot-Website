"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function DecouvrirHero() {
  const [showHorse, setShowHorse] = useState(false);

  useEffect(() => {
    // Alternates every 3000ms
    const timer = setInterval(() => {
      setShowHorse((p) => !p);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[75vh] min-h-[600px] lg:h-[85vh] lg:min-h-[700px] overflow-hidden flex flex-col justify-center items-center">
      {/* Background Images */}
      {/* Both images are positioned absolutely. We fade between them based on state */}
      <div className="absolute inset-0 z-0 bg-[#0B4264]">
        <Image
          src="/agojie.png"
          alt="Monument Amazone Agojie"
          fill
          className={`object-cover object-top lg:object-center transition-opacity duration-700 ease-out brightness-[1.10] contrast-[1.15] saturate-[1.10] ${
            showHorse ? "opacity-0" : "opacity-100"
          }`}
          priority
        />
        <Image
          src="/horse.png"
          alt="Statue Cheval"
          fill
          className={`object-cover object-top lg:object-center transition-opacity duration-700 ease-out brightness-[1.10] contrast-[1.15] saturate-[1.10] ${
            showHorse ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Lighter, subtle overlay to enhance brightness while keeping text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
      </div>

      {/* Main Content inside the hero */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 mb-[100px] sm:mb-[140px] lg:mb-[220px]">
        <div className="text-[24px] md:text-[32px] lg:text-[44px] font-bold text-white mb-0 tracking-wide drop-shadow-xl" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}>
          ICI <span className="text-[#FDBC2F]">C&apos;EST</span>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="absolute bottom-10 lg:bottom-16 z-20 flex flex-col sm:flex-row gap-4 lg:gap-6 px-4">
        <Link href="/agenda">
          <Button className="bg-white hover:bg-gray-100 text-[#0B4264] text-[15px] lg:text-[18px] font-bold px-10 py-8 lg:py-10 rounded-md shadow-2xl flex flex-col items-center justify-center leading-tight">
            <span>Voir l&apos;agenda des</span>
            <span>évènements à venir</span>
          </Button>
        </Link>
        <a 
          href="https://sofitel.accor.com/fr/hotels/B845.html?merchantid=ppc-sof-mar-msn-ww-fr-sear-mob&sourceid=bp-cenbp-cen&utm_source=Bing&utm_medium=cpc&utm_campaign=ppc-sof-mar-msn-ww-fr-ww-mix-sear-bp&utm_term=mar&utm_content=ww-fr-BJ-PBJ&wiz_campaign=ppc-sof-mar-msn-ww-fr-ww-mix-sear-bp-cen&msclkid=a9fe25cf3f951ea324b24c0ac95061d2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-white hover:bg-gray-100 text-[#0B4264] text-[15px] lg:text-[18px] font-bold px-10 py-8 lg:py-10 rounded-md shadow-2xl flex items-center gap-3">
            Où résider à Cotonou
            <svg className="w-5 h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
            </svg>
          </Button>
        </a>
      </div>
    </section>
  );
}
