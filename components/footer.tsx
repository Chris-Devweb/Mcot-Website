import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPin,
  Phone,
  Mail,
  Clock
} from 'lucide-react';
import { FacebookIcon, XIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from '@/components/icons';

interface FooterProps {
  /**
   * Version of the Benin map to display.
   * `1` displays benin1.png (default)
   * `2` displays benin2.png (variant)
   */
  mapVersion?: 1 | 2;
}

export function Footer({ mapVersion = 1 }: FooterProps) {
  const mapImage = mapVersion === 1 ? '/benin1.png' : '/benin2.png';

  return (
    <footer className="relative w-full bg-[#35567A] font-sans pt-16 text-white overflow-visible border-t-[4px]" style={{ borderImage: 'linear-gradient(to right, #FDBC2F, #08663A) 1' }}>
      
      {/* Background Watermark Logo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none z-0">
        <div className="relative w-[210px] h-[270px]">
          <Image 
            src="/logo-cotonou.png" 
            alt="Watermark Logo" 
            fill 
            className="object-contain" 
          />
        </div>
      </div>

      <div className="w-full px-4 sm:px-[100px] lg:px-[150px] relative z-10">
        
        {/* Main Footer Layout: 3 Columns + Map */}
        <div className="flex flex-col lg:flex-row justify-between relative pb-12">
          
          {/* Column 1: A Propos */}
          <div className="flex flex-col max-w-[320px] mb-10 lg:mb-0">
            <h3 className="font-bold text-[22px] leading-tight mb-1">Ville De Cotonou</h3>
            <p className="font-medium text-[15px] opacity-90 mb-6">Capitale Économique du Bénin</p>
            
            <p className="text-[13px] leading-relaxed opacity-90 mb-6">
              La Mairie de Cotonou s'engage à offrir
              des services de qualité pour améliorer
              le cadre de vie de tous les citoyens.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-white">
              <a href="#" aria-label="Facebook" className="hover:text-blue-200 transition-colors">
                <FacebookIcon className="w-[18px] h-[18px]" />
              </a>
              <a href="#" aria-label="X (Twitter)" className="hover:text-blue-200 transition-colors">
                <XIcon className="w-[18px] h-[18px]" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-blue-200 transition-colors">
                <InstagramIcon className="w-[18px] h-[18px]" />
              </a>
              <a href="#" aria-label="Flickr" className="hover:text-blue-200 transition-colors flex gap-[2px]">
                <span className="w-2.5 h-2.5 rounded-full bg-white" />
                <span className="w-2.5 h-2.5 rounded-full bg-white" />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-blue-200 transition-colors">
                <YoutubeIcon className="w-[20px] h-[20px] mt-[1px]" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-200 transition-colors">
                <LinkedinIcon className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>

          {/* Column 2: Liens Rapides */}
          <div className="flex flex-col mb-10 lg:mb-0">
            <h4 className="font-bold text-[15px] mb-5">Liens Rapides</h4>
            <nav className="flex flex-col gap-3.5 text-[13px] text-gray-200">
              <Link href="/services" className="hover:text-white transition-colors">Services en ligne</Link>
              <Link href="/services" className="hover:text-white transition-colors">Démarches administratives</Link>
              <Link href="/services" className="hover:text-white transition-colors">Etat civil</Link>
              <Link href="/services" className="hover:text-white transition-colors">Urbanisme</Link>
              <Link href="/documents" className="hover:text-white transition-colors">Marchés publics</Link>
              <Link href="/services" className="hover:text-white transition-colors">Recrutement</Link>
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col mb-10 lg:mb-0 lg:mr-[180px] xl:mr-[220px]">
            <h4 className="font-bold text-[15px] mb-5">Contact</h4>
            <div className="flex flex-col gap-4 text-[13px] text-gray-200">
              <div className="flex items-start gap-3">
                <MapPin size={16} strokeWidth={2} className="mt-0.5 shrink-0" />
                <p>Avenue Clozel, Face Stade<br />BP 2020 Cotonou, Bénin</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} strokeWidth={2} className="shrink-0" />
                <p>+229 01 21 30 04 10</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} strokeWidth={2} className="shrink-0" />
                <p>info@cotonou.bj</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} strokeWidth={2} className="mt-0.5 shrink-0" />
                <p>Lun-Ven: 7h30 - 16h00<br />Sam: 8h00 - 12h00</p>
              </div>
            </div>
          </div>
          
          {/* Map of Benin Image Container */}
          {/* Visible on responsive but absolute on desktop to overlap */}
          <div className="hidden lg:block absolute right-0 bottom-12 w-[220px] h-[480px] xl:w-[250px] xl:h-[550px] z-20 pointer-events-none">
            <div className="relative w-full h-full">
              <Image 
                src={mapImage}
                alt="Carte du Bénin" 
                fill 
                className="object-contain object-bottom" 
              />
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="border-t border-white/20 py-5 flex flex-col md:flex-row justify-between items-center text-[12px] text-gray-300 gap-4">
          <p>© Commune de Cotonou - 2025</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Accessibilité</a>
          </div>
        </div>
        
        {/* Flag Line (Green - Yellow - Red) - Same width as the container above */}
        <div className="flex h-1.5 w-full">
          <div className="flex-1 bg-[#008751]" /> {/* Benin Green */}
          <div className="flex-1 bg-[#FDE100]" /> {/* Benin Yellow */}
          <div className="flex-1 bg-[#E8112D]" /> {/* Benin Red */}
        </div>

      </div>

    </footer>
  );
}

export default Footer;
