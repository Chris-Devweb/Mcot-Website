'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Search, 
  ChevronDown,
  Menu
} from 'lucide-react';
import { FacebookIcon, XIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export function Navbar() {
  return (
    <header className="relative w-full z-50 font-sans">
      {/* Background container for the main navbar color */}
      <div className="w-full bg-[#83CEE9] relative shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
        
        {/* Top white bar - hidden on mobile (maquette: only logo + menu + search on phone) */}
        <div className="absolute top-0 left-0 right-0 hidden md:flex justify-center z-20">
          <div className="bg-white rounded-b-xl px-8 py-1.5 flex items-center justify-center gap-5 shadow-sm">
            {/* Left side items */}
            <div className="flex items-center gap-5 text-[11px] lg:text-[12px] text-gray-600 font-medium">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#E53935]" />
                <a href="#" className="hover:text-blue-900 transition-colors">Mes démarches en ligne</a>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#E53935]" />
                <a href="#" className="hover:text-blue-900 transition-colors">Gouvernement du Bénin</a>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#E53935]" />
                <a href="#" className="hover:text-blue-900 transition-colors">Service Public</a>
              </div>
            </div>

            {/* Divider */}
            <div className="h-3 w-[1px] bg-gray-300 ml-1" />

            {/* Social Icons */}
            <div className="flex items-center gap-3 text-[#0B4264]">
              <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition-colors">
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a href="#" aria-label="X (Twitter)" className="hover:text-blue-600 transition-colors">
                <XIcon className="w-3.5 h-3.5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-blue-600 transition-colors">
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a href="#" aria-label="Flickr" className="hover:text-blue-600 transition-colors flex gap-[1.5px] items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0B4264]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0B4264]" />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-blue-600 transition-colors">
                <YoutubeIcon className="w-4 h-4 mt-[1px]" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-600 transition-colors">
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar Layer */}
        {/* We center the entire group of (Logo + Links + Search) using a wrapper inside the container */}
        <div className="w-full px-4 relative pt-[45px] lg:pt-[50px] pb-3 lg:pb-4 flex justify-center">
          <div className="flex w-full max-w-6xl items-center justify-between gap-6 lg:gap-[50px]">
            {/* 1. Logo Container */}
            <Link href="/" className="relative shrink-0 flex items-center h-full">
              <div className="absolute top-[-54px] w-[90px] h-[120px] lg:w-[115px] lg:h-[155px] z-30 flex flex-col items-center bg-[#83CEE9] rounded-b-[60px] overflow-hidden">
                <div className="relative w-full h-[88%] mt-auto mb-[8px]"> 
                  <Image 
                    src="/logo-cotonou.png" 
                    alt="Logo de la Ville de Cotonou" 
                    fill 
                    className="object-contain object-bottom" 
                    priority
                  />
                </div>
              </div>
              <div className="w-[90px] lg:w-[115px]" />
            </Link>

            {/* 2. Desktop Navigation Links */}
            <nav className="hidden lg:flex shrink-0 justify-center items-center gap-[40px] text-[#0B4264] text-[15px] font-medium">
              <Link href="/actualites" className="hover:text-blue-900 transition-colors whitespace-nowrap">Actualités</Link>
              <Link href="/decouvrir-cotonou" className="hover:text-blue-900 transition-colors whitespace-nowrap">Découvrez Cotonou</Link>
              
              {/* Municipalité dropdown */}
              <div className="relative group flex items-center cursor-pointer">
                <span className="flex items-center gap-1 hover:text-blue-900 transition-colors whitespace-nowrap">
                  Municipalité
                  <ChevronDown size={14} className="mt-0.5 opacity-80" strokeWidth={2} />
                </span>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-52 bg-white shadow-xl rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                  <div className="py-2 flex flex-col">
                    <Link href="/municipalite" className="px-5 py-2.5 hover:bg-gray-50 text-[13px] text-gray-700 transition-colors whitespace-nowrap">Le Maire</Link>
                    <Link href="/municipalite#ca" className="px-5 py-2.5 hover:bg-gray-50 text-[13px] text-gray-700 transition-colors whitespace-nowrap">Les CA et commissions</Link>
                    <Link href="/municipalite/projets" className="px-5 py-2.5 hover:bg-gray-50 text-[13px] text-gray-700 transition-colors whitespace-nowrap">Projets</Link>
                  </div>
                </div>
              </div>
              
              <Link href="/services" className="hover:text-blue-900 transition-colors whitespace-nowrap">Services</Link>
              <Link href="/documents" className="hover:text-blue-900 transition-colors whitespace-nowrap">Documents</Link>
              <Link href="/contact" className="hover:text-blue-900 transition-colors whitespace-nowrap">Contactez-nous</Link>
            </nav>

            {/* 3. Actions: Search + Mobile Menu */}
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                className="hidden sm:inline-flex items-center gap-2.5 bg-[#0B4264] hover:bg-[#072a40] text-white px-5 py-2 rounded-[4px] font-medium transition-colors text-[14px] shadow-sm whitespace-nowrap"
              >
                Recherche
                <Search size={16} strokeWidth={2} />
              </Button>

              {/* Mobile sheet menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="inline-flex lg:hidden border-white/70 text-[#0B4264] bg-white/80 hover:bg-white"
                    aria-label="Ouvrir le menu"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[260px] sm:w-[300px] p-0">
                  <SheetHeader className="px-6 pt-6 pb-4 border-b">
                    <SheetTitle className="text-left text-[#0B4264] text-base font-semibold">
                      Ville de Cotonou
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col gap-1 px-6 py-4 text-[15px] text-[#0B4264] font-medium">
                    <Link href="/actualites" className="py-2.5 border-b border-gray-100">
                      Actualités
                    </Link>
                    <Link href="/decouvrir-cotonou" className="py-2.5 border-b border-gray-100">
                      Découvrez Cotonou
                    </Link>
                    <Link href="/municipalite" className="py-2.5 border-b border-gray-100">
                      Municipalité
                    </Link>
                    <Link href="/municipalite/projets" className="py-2.5 border-b border-gray-100 pl-4 text-sm">
                      — Projets
                    </Link>
                    <Link href="/services" className="py-2.5 border-b border-gray-100">
                      Services
                    </Link>
                    <Link href="/documents" className="py-2.5 border-b border-gray-100">
                      Documents
                    </Link>
                    <Link href="/contact" className="py-2.5">
                      Contactez-nous
                    </Link>
                  </nav>
                  <div className="px-6 pb-6">
                    <Link href="/contact">
                      <Button className="w-full bg-[#0B4264] hover:bg-[#072a40]">
                        Contactez-nous
                      </Button>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Decorative gradient drop shadow on the bottom matching the image's dark vignette */}
      <div className="h-6 w-full bg-gradient-to-b from-black/20 to-transparent absolute -bottom-6 left-0 z-10 pointer-events-none" />
    </header>
  );
}

export default Navbar;
