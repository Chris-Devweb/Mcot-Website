"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type Listener = (open: boolean) => void;
let listeners: Listener[] = [];

export const newsletterAction = {
  subscribe: (l: Listener) => {
    listeners.push(l);
    return () => { listeners = listeners.filter(li => li !== l); };
  },
  open: () => {
    listeners.forEach(l => l(true));
  }
};

export function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    return newsletterAction.subscribe(setIsOpen);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Modal Container */}
      {/* Added overflow-hidden to prevent background image from 'cutting' weirdly */}
      <div 
        className="relative w-full max-w-[650px] bg-sky-100 rounded-[24px] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300 flex flex-col items-center"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/newsletterbackground.png" 
            alt="" 
            fill 
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-8 py-12 flex flex-col items-center text-center">
          {/* Close Button */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-[#0B4264]/60 hover:text-[#0B4264] transition-colors"
          >
            <X size={24} strokeWidth={2.5} />
          </button>

          <h2 className="text-[32px] lg:text-[40px] font-black text-[#0B4264] mb-3 tracking-tight">
             S&apos;inscrire à notre Newsletter
          </h2>
          <p className="text-[#0B4264] text-[15px] lg:text-[16px] font-medium leading-relaxed max-w-[480px] mb-1">
            Recevez directement dans votre boîte mail des informations
          </p>
          <p className="text-[#0B4264] text-[15px] lg:text-[16px] font-medium leading-relaxed max-w-[480px] mb-1">
            concernant votre commune.
          </p>
          <p className="text-[#0B4264] text-[15px] lg:text-[16px] font-medium leading-relaxed max-w-[480px] mb-10">
            Garantie sans SPAMS.
          </p>

          <div className="w-full max-w-[500px] flex flex-col items-start gap-2">
            <label className="text-[#0B4264] text-[14px] font-bold ml-1">Votre Email :</label>
            <div className="relative w-full">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ex : info@gmail.com"
                className="w-full bg-white/70 border border-gray-200/50 rounded-[14px] px-6 py-5 text-[15px] text-[#0B4264] placeholder:text-gray-400 focus:outline-none focus:bg-white transition-all shadow-sm"
              />
            </div>
          </div>

          <button 
            onClick={() => {
              setIsOpen(false);
              // Optional: show a small success toast if needed, but the user prompt showed the modal itself
            }}
            className="mt-8 bg-[#0B4264] hover:bg-[#072d45] text-white px-12 py-4 rounded-[12px] text-[15px] font-bold shadow-xl transition-all flex items-center gap-3 active:scale-95"
          >
            S&apos;inscrire
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Decorative thin bottom line like in the mockup */}
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0B4264] via-emerald-500 to-yellow-500 opacity-80" />
      </div>
    </div>
  );
}
