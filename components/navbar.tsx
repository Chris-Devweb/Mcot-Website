'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Search, 
  ChevronDown,
  Menu,
  ArrowRight,
  Phone,
} from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { FacebookIcon, XIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

// ─── Search index: keywords → {label, href, description} ─────────────────────
const SEARCH_INDEX = [
  { keywords: ['actualité','actualités','news','information','une','presse'], label: 'Actualités', href: '/actualites', description: 'Dernières nouvelles de la Mairie de Cotonou' },
  { keywords: ['acte de naissance','naissance','état civil','acte','registre','etatcivil','etat civil','bapteme'], label: 'État Civil – Acte de naissance', href: '/services', description: 'Demandez votre acte de naissance en ligne' },
  { keywords: ['décès','acte de décès','décès cujus','mort'], label: 'État Civil – Acte de décès', href: '/services', description: 'Services liés aux actes de décès' },
  { keywords: ['mariage','acte de mariage','époux','épouse'], label: 'État Civil – Mariage', href: '/services', description: 'Démarches liées aux actes de mariage' },
  { keywords: ['service','services','démarche','démarches','formalité'], label: 'Services en ligne', href: '/services', description: 'Toutes les démarches et services de la Mairie' },
  { keywords: ['document','documents','attestation','certificat','formulaire'], label: 'Documents officiels', href: '/documents', description: 'Télécharger les documents officiels' },
  { keywords: ['cotonou','découvrir','ville','histoire','historique','kutonu','lagune'], label: 'Découvrir Cotonou', href: '/decouvrir-cotonou', description: 'Histoire, culture et potentialités de Cotonou' },
  { keywords: ['tourisme','touristique','lieu','visite','place','martyrs','route des pêches','amazone','lac nokoue','nokoué','bio guera'], label: 'Lieux Touristiques', href: '/decouvrir-cotonou', description: 'Sites et monuments à visiter à Cotonou' },
  { keywords: ['hôtel','hotel','résidence','résider','logement','hébergement'], label: 'Où résider à Cotonou', href: '/decouvrir-cotonou', description: 'Hébergements et lieux où résider' },
  { keywords: ['potentialité','économie','commerce','marché','dantokpa','industrie'], label: 'Potentialités économiques', href: '/decouvrir-cotonou', description: 'Atouts économiques et opportunités de Cotonou' },
  { keywords: ['municipalité','mairie','conseil municipal','maire','adjointe'], label: 'La Municipalité', href: '/municipalite', description: 'Présentation de la municipalité et ses élus' },
  { keywords: ['projet','projets','infrastructure','chantier','construction','travaux'], label: 'Projets & Infrastructures', href: '/municipalite/projets', description: 'Projets urbains en cours à Cotonou' },
  { keywords: ['agenda','événement','evenement','évènement','calendrier','réunion','session'], label: 'Agenda des Événements', href: '/agenda', description: 'Prochain agenda et évènements municipaux' },
  { keywords: ['contact','contacter','message','signalement','coordonnées','téléphone','email','mail'], label: 'Contactez-nous', href: '/contact', description: 'Envoyer un message à la Mairie de Cotonou' },
  { keywords: ['partenaire','marseille','rosny','aimf','seineure','coopération','jumelage'], label: 'Partenaires & Jumelages', href: '/', description: 'Les villes partenaires et jumelées de Cotonou' },
  { keywords: ['newsletter','s\'inscrire','abonnement','courriel'], label: 'Newsletter', href: '/contact', description: 'S\'inscrire à la newsletter de la Mairie' },
  { keywords: ['avis','communiqué','appel d\'offres','annonce','communiques'], label: 'Avis et Communiqués', href: '/actualites', description: 'Avis officiels et communiqués de la municipalité' },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Documents");
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Compute matched results from the search index
  const searchResults = searchQuery.trim().length > 0
    ? SEARCH_INDEX.filter(entry =>
        entry.keywords.some(kw =>
          kw.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
          searchQuery.toLowerCase().trim().includes(kw.toLowerCase())
        ) ||
        entry.label.toLowerCase().includes(searchQuery.toLowerCase().trim())
      ).slice(0, 5)
    : [];

  const closeSearch = useCallback(() => {
    setIsSearchOpen(false);
    setSearchQuery('');
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeSearch();
    };
    if (isSearchOpen) {
      window.addEventListener('keydown', handleKeyDown);
      // Focus input after open
      setTimeout(() => inputRef.current?.focus(), 50);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, closeSearch]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          if (currentScrollY > 80) {
            setIsVisible(currentScrollY < lastScrollY);
          } else {
            setIsVisible(true);
          }
          
          lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClass = (path: string) => {
    const isActive = pathname === path || pathname.startsWith(`${path}/`);
    return `transition-colors whitespace-nowrap ${isActive ? 'text-white font-bold' : 'hover:text-white'}`;
  };

  return (
    <>
      <header 
        className={`sticky top-0 w-full z-50 font-sans transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-[120%]"
        }`}
      >
        {/* Background container for the main navbar color */}
        <div className="w-full bg-[#83CEE9] relative shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
          
          {/* Top white bar */}
          <div className="absolute top-0 left-0 right-0 hidden md:flex justify-center z-20">
            <div className="bg-white rounded-b-xl px-8 py-1.5 flex items-center justify-center gap-5 shadow-sm">
              <div className="flex items-center gap-5 text-[11px] lg:text-[12px] text-gray-600 font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E53935]" />
                  <a href="https://eservices.anip.bj/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">Mes démarches en ligne</a>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E53935]" />
                  <a href="https://www.gouv.bj/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">Gouvernement du Bénin</a>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E53935]" />
                  <a href="https://service-public.bj/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">Service Public</a>
                </div>
              </div>
              <div className="h-3 w-[1px] bg-gray-300 ml-1" />
              <div className="flex items-center gap-3 text-[#0B4264]">
                <a href="https://www.facebook.com/lavilledecotonou/?ti=as" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-600 transition-colors">
                  <FacebookIcon className="w-3.5 h-3.5" />
                </a>
                <a href="https://x.com/cotonoumairie" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-blue-600 transition-colors">
                  <XIcon className="w-3.5 h-3.5" />
                </a>
                <a href="https://www.instagram.com/mairiedecotonouofficiel/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-blue-600 transition-colors">
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
                <a href="https://flickr.com/photos/199317604@N06" target="_blank" rel="noopener noreferrer" aria-label="Flickr" className="hover:text-blue-600 transition-colors flex gap-[1.5px] items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0B4264]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0B4264]" />
                </a>
                <a href="https://www.youtube.com/watch?v=8XU2fOMUZB8&feature=youtu.be" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-blue-600 transition-colors">
                  <YoutubeIcon className="w-4 h-4 mt-[1px]" />
                </a>
                <a href="https://www.linkedin.com/company/mairie-de-cotonou/about/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600 transition-colors">
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Main Navbar Layer */}
          <div className="w-full px-4 relative pt-[45px] lg:pt-[50px] pb-3 lg:pb-4 flex justify-center bg-white lg:bg-transparent">
            <div className="flex w-full max-w-6xl items-center justify-between gap-6 lg:gap-[50px]">
              <Link href="/" className="relative shrink-0 hidden lg:flex items-center h-full">
                <div className="absolute top-[-54px] w-[90px] h-[120px] lg:w-[115px] lg:h-[155px] z-30 flex flex-col items-center bg-[#83CEE9] rounded-b-[60px] overflow-hidden">
                  <div className="relative w-full h-[88%] mt-auto mb-[8px]"> 
                    <Image src="/logo-cotonou.png" alt="Logo" fill className="object-contain object-bottom" priority />
                  </div>
                </div>
                <div className="w-[90px] lg:w-[115px]" />
              </Link>

              <nav className="hidden lg:flex shrink-0 justify-center items-center gap-[40px] text-[#0B4264] text-[15px] font-medium">
                <Link href="/actualites" className={getLinkClass('/actualites')}>Actualités</Link>
                <Link href="/decouvrir-cotonou" className={getLinkClass('/decouvrir-cotonou')}>Découvrez Cotonou</Link>
                
                <div className="relative group flex items-center cursor-pointer">
                  <span className={`flex items-center gap-1 transition-colors whitespace-nowrap ${pathname.startsWith('/municipalite') ? 'text-white font-bold' : 'hover:text-white'}`}>
                    Municipalité <ChevronDown size={14} className="mt-0.5 opacity-80" />
                  </span>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-52 bg-white shadow-xl rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50 border border-gray-100 py-2">
                    <Link href="/municipalite" className="px-5 py-2.5 hover:bg-gray-50 text-[13px] text-gray-700 block">La Municipalité</Link>
                    <Link href="/municipalite/projets" className="px-5 py-2.5 hover:bg-gray-50 text-[13px] text-gray-700 block">Projets</Link>
                    <Link href="/municipalite/anciennes-mandatures" className="px-5 py-2.5 hover:bg-gray-50 text-[13px] text-gray-700 block">Anciennes mandatures</Link>
                  </div>
                </div>
                
                <Link href="/services" className={getLinkClass('/services')}>Services</Link>
                <Link href="/documents" className={getLinkClass('/documents')}>Documents</Link>
                <Link href="/contact" className={getLinkClass('/contact')}>Contactez-nous</Link>
              </nav>

              <div className="hidden lg:flex items-center gap-2">
                <Button size="sm" onClick={() => setIsSearchOpen(true)} className="bg-[#0B4264] hover:bg-[#072a40] text-white px-5 py-2 rounded-[4px] shadow-sm flex items-center gap-2">
                  Recherche <Search size={16} strokeWidth={2.5} />
                </Button>
              </div>

              {/* Mobile Layout */}
              <div className="flex lg:hidden w-full items-center justify-between px-2 py-2">
                <Link href="/" className="flex flex-col">
                  <span className="text-[#0B4264] font-bold text-[18px] leading-tight">Mairie de</span>
                  <span className="text-[#0B4264] font-bold text-[18px] leading-tight">Cotonou</span>
                </Link>
                <div className="flex items-center gap-6 sm:gap-8">
                  <Sheet>
                    <SheetTrigger asChild>
                      <button className="text-[#0B4264]"><Menu size={28} strokeWidth={2.5} /></button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[280px] p-0 border-l-0 bg-transparent shadow-none [&>button]:hidden">
                      <SheetHeader className="sr-only">
                        <SheetTitle>Menu de navigation mobile</SheetTitle>
                      </SheetHeader>
                      <div className="mt-4 mr-4 ml-8 bg-white shadow-2xl p-8 flex flex-col" style={{ borderRadius: '20px 0px 20px 20px' }}>
                        <nav className="flex flex-col gap-6 text-[17px] font-medium mb-8">
                          <Link href="/actualites">Actualités</Link>
                          <Link href="/decouvrir-cotonou">Découvrez Cotonou</Link>
                          <div className="flex flex-col gap-3">
                            <span className="flex items-center justify-between">Municipalité <ChevronDown size={18} /></span>
                            <div className="flex flex-col gap-3 pl-4 text-[15px] border-l border-gray-100 text-gray-600">
                              <Link href="/municipalite">La Municipalité</Link>
                              <Link href="/municipalite/projets">Projets</Link>
                              <Link href="/municipalite/anciennes-mandatures">Anciennes mandatures</Link>
                            </div>
                          </div>
                          <Link href="/services">Services</Link>
                          <Link href="/documents">Documents</Link>
                        </nav>
                        <Link href="/contact" className="mt-4">
                          <Button className="w-full text-white py-7 flex items-center justify-center gap-3 text-[14px] font-bold" style={{ background: 'linear-gradient(90deg, #06476D 0%, #0088CC 100%)', borderRadius: '8px' }}>
                            Contactez-nous <Phone size={17} fill="currentColor" />
                          </Button>
                        </Link>
                      </div>
                    </SheetContent>
                  </Sheet>
                  <button onClick={() => setIsSearchOpen(true)} className="text-[#0B4264]"><Search size={26} strokeWidth={2.5} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-6 w-full bg-gradient-to-b from-black/20 to-transparent absolute -bottom-6 left-0 pointer-events-none" />
      </header>

      {/* --- Search Modal Outside Header --- */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[1000] flex items-start justify-center pt-[120px] lg:pt-[160px]">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[4px]" onClick={closeSearch} />
          <div 
            className="relative w-[95vw] sm:w-[90vw] max-w-[850px] bg-white rounded-[24px] overflow-hidden animate-in fade-in zoom-in-95 duration-200 border border-gray-50" 
            style={{ boxShadow: '0px 0px 50px 0px #D4DDE5' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 z-0 opacity-[0.25]">
              <Image src="/research.png" alt="" fill className="object-cover" />
            </div>
            <div className="relative z-10 px-6 py-8 sm:px-12 lg:py-10 flex flex-col items-center">
              <div className="w-full bg-white rounded-[12px] h-[60px] flex items-center px-5 shadow-sm mb-4 border border-gray-100">
                <Search className="w-[22px] h-[22px] text-gray-400 mr-4" />
                <input 
                  ref={inputRef} type="text" value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && searchResults.length > 0) { router.push(searchResults[0].href); closeSearch(); } }}
                  placeholder="Rechercher : acte de naissance, cotonou, services..." 
                  className="flex-1 h-full bg-transparent text-[14.5px] focus:outline-none"
                />
                {searchQuery && <button onClick={() => setSearchQuery('')} className="text-gray-400">✕</button>}
              </div>

              {searchResults.length > 0 && (
                <div className="w-full bg-white rounded-xl border border-gray-100 shadow-sm mb-5 overflow-hidden">
                  {searchResults.map((result, i) => (
                    <Link key={i} href={result.href} onClick={closeSearch} className="flex items-center justify-between px-5 py-3.5 hover:bg-blue-50/50 border-b border-gray-50 last:border-b-0 group">
                      <div>
                        <p className="text-[14px] font-bold text-[#0B4264] group-hover:underline">{result.label}</p>
                        <p className="text-[12px] text-gray-500 mt-0.5">{result.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#0B4264] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap items-center gap-4 lg:gap-6 justify-center">
                <span className="text-[#0B4264] text-[15px] font-bold">Filtres :</span>
                <div className="flex items-center flex-wrap justify-center gap-3">
                  {["Hôtels", "Documents", "Services", "Sites touristiques", "Évènements"].map((f) => (
                    <button key={f} type="button" onClick={() => { setActiveFilter(f); setSearchQuery(f); }} 
                      className={`px-6 py-2.5 rounded-full text-[13px] font-bold transition-all border ${activeFilter === f ? "bg-[#0B4264] text-white border-[#0B4264]" : "bg-white text-gray-800 border-gray-100"}`}>
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
