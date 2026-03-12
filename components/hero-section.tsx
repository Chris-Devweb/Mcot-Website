import Image from 'next/image';
import Link from 'next/link';
import { ActuCard } from '@/components/actu-card';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[680px] overflow-hidden">
      {/* Background Image — scale down so more of the image is visible */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/backsection1.png"
          alt="Cotonou"
          fill
          className="object-cover object-top"
          style={{ objectPosition: 'center top', transform: 'scale(1)', transformOrigin: 'center top' }}
          priority
        />
        {/* Blue gradient overlay — strong left, fades right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(11,66,100,0.88) 0%, rgba(11,66,100,0.65) 38%, rgba(11,66,100,0.15) 70%, transparent 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full px-4 sm:px-[100px] lg:px-[150px] flex flex-col justify-center pt-20 pb-36 lg:pt-24 lg:pb-44">
        {/* Text block */}
        <div className="max-w-[520px]">
          <p className="text-white text-[18px] lg:text-[22px] font-medium mb-2">
            Bienvenue à
          </p>
          {/* COTONOU with a white → golden gradient */}
          <h1
            className="text-[62px] lg:text-[80px] font-black leading-none mb-5 tracking-tight"
            style={{
              background: 'linear-gradient(to right, #FFFFFF, #FDBC2F)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            COTONOU
          </h1>
          <p className="text-white text-[14px] lg:text-[16px] leading-relaxed mb-10 max-w-[420px]">
            Capitale économique du Bénin, ville dynamique et
            moderne au service de ses citoyens
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link href="/services">
              <Button
                variant="outline"
                className="border-2 border-white text-white text-[13px] lg:text-[14px] font-semibold hover:bg-white hover:text-[#0B4264] rounded-sm whitespace-nowrap leading-tight bg-transparent h-11 md:h-12 px-6 md:px-8"
              >
                Demande d&apos;acte de<br />naissance
              </Button>
            </Link>
            <Link href="/decouvrir-cotonou">
              <Button
                variant="outline"
                className="border-2 border-white text-white text-[13px] lg:text-[14px] font-semibold hover:bg-white hover:text-[#0B4264] rounded-sm flex items-center gap-2 whitespace-nowrap bg-transparent h-11 md:h-12 px-6 md:px-8"
              >
                Découvrir Cotonou
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>

        {/* Actualités Card — stacked on mobile, floating on desktop */}
        <div className="mt-10 md:mt-0 md:absolute md:bottom-10 md:right-4 md:right-[100px] lg:right-[150px]">
          <ActuCard
            title="Le Maire et son Conseil municipal sur le chantier du futur Hôtel de Ville"
            imageSrc="/actu1.png"
            totalSlides={3}
            activeSlide={0}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

