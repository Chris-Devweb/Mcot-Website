'use client';

import Image from 'next/image';

interface MayorModalProps {
  onClose: () => void;
}

const INTRO = `Luc Gnacadja est un architecte et homme politique béninois, né à Porto-Novo. Il est l'actuel maire de Cotonou, élu en 2026 pour un mandat de sept ans. Auparavant, il a été ministre de l'Environnement du Bénin et secrétaire exécutif de la Convention des Nations unies sur la lutte contre la désertification (UNCCD) de 2007 à 2013.`;

const BIO = `Luc Gnacadja est diplômé de l'École africaine des métiers de l'architecture et l'urbanisme (EAMAU) de Lomé, au Togo. Il entame sa carrière politique sous la présidence de Mathieu Kérékou, en tant que ministre de l'Environnement, du Logement et de l'Urbanisme de juin 1999 à février 2005. En mars 2006, il est candidat à l'élection présidentielle avec le mouvement l'ENVOL, obtenant 0,68 % des suffrages.\n\nEn septembre 2007, il est nommé par le secrétaire général de l'ONU, Ban Ki-moon, à la tête de l'UNCCD, poste qu'il occupe durant deux mandats jusqu'en 2013. À l'issue des élections municipales de janvier 2026, il est élu maire de Cotonou. Il est installé dans ses fonctions le 6 février 2026, entouré de ses adjoints. En mars 2003, il a reçu le "Green Award" de la Banque mondiale pour ses actions en faveur du développement durable.`;

export function MayorModal({ onClose }: MayorModalProps) {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* 
        1. Deep Backdrop Blur + Dark Overlay 
        This ensures we can see the page behind but with focus on the modal.
      */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

      {/* 
        2. Striped Gradient Overlay (from Capture)
        Provides the unique aesthetic from the screenshot while remaining semi-transparent.
      */}
      <div 
        className="absolute inset-0 opacity-80"
        style={{
          background: 'linear-gradient(135deg, #0d2f3b 0%, #1a3d2b 45%, #3a5218 75%, #6b6210 100%)',
        }}
      />
      
      {/* 
        3. Vertical Stripes Pattern 
        Adds the "column" look seen in the user's capture.
      */}
      <div className="absolute inset-0 flex pointer-events-none opacity-[0.07]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="flex-1 border-r border-white last:border-r-0" />
        ))}
      </div>

      {/* 
        4. Translucent Blue Triangle Decoration 
        Top-left behind the card, precisely like the capture.
      */}
      <div className="absolute left-[calc(50%-360px)] top-[calc(50%-180px)] w-[160px] h-[160px] pointer-events-none z-10 hidden lg:block animate-in fade-in slide-in-from-top-4 duration-700">
         <div 
            className="w-full h-full bg-[#0B4264]/40 backdrop-blur-sm shadow-xl" 
            style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)', borderRadius: '12px' }} 
         />
      </div>

      {/* Modal Card */}
      <div
        className="relative bg-white rounded-[24px] shadow-[0_32px_120px_-15px_rgba(0,0,0,0.5)] w-full max-w-[700px] max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-500 z-20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Palm watermark inside the card */}
        <div className="absolute right-0 bottom-0 w-[240px] h-[300px] pointer-events-none opacity-[0.09] z-0">
          <Image src="/palme.png" alt="" fill className="object-contain object-bottom-right" />
        </div>

        {/* Content Container (to handle scroll correctly) */}
        <div className="relative z-10 flex flex-col min-h-0 h-full bg-white/40 backdrop-blur-[2px]">
          
          {/* Header Row */}
          <div className="flex items-center justify-between px-10 pt-10 pb-6 relative shrink-0">
            {/* Close button - Top right absolute-ish */}
            <button
              onClick={onClose}
              className="absolute top-8 right-8 text-gray-800 hover:text-black transition-colors"
              aria-label="Fermer"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Profile + Name Box */}
            <div className="flex flex-col items-center flex-1">
               {/* Circle Avatar with Border */}
               <div className="relative w-[130px] h-[130px] rounded-full border-[3px] border-[#0B4264] p-1 shadow-lg bg-white mb-5">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/agents municipaux/luc-gnacadja-1773755964.jpg"
                      alt="Mr Luc GNACADJA"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
               </div>

               <div className="text-center">
                  <h2 className="text-[26px] font-black text-[#0B4264] tracking-tight uppercase">Mr Luc GNACADJA</h2>
                  <p className="text-gray-800 text-[18px] font-medium">Le maire</p>
               </div>
            </div>

            {/* Link to Wikipedia - Bottom Right of header area */}
            <div className="absolute bottom-6 right-10">
              <a
                href="https://fr.wikipedia.org/wiki/Luc_Gnacadja"
                target="_blank"
                rel="noreferrer"
                className="text-[14px] font-bold text-[#0B4264] hover:underline whitespace-nowrap"
              >
                Voir le Wikipedia
              </a>
            </div>
          </div>

          {/* Scrollable Bio Body */}
          <div className="px-10 pb-12 overflow-y-auto custom-scrollbar flex-1 space-y-6">
            <div className="w-full bg-white/20 p-2 rounded-xl">
               <p className="text-[14px] leading-relaxed text-gray-800 text-justify">
                <span className="font-bold">Luc Gnacadja</span> est un architecte et homme politique béninois, né à Porto-Novo. Il est l&apos;actuel maire de Cotonou, élu en 2026 pour un mandat de sept ans. Auparavant, il a été ministre de l&apos;Environnement du Bénin et secrétaire exécutif de la Convention des Nations unies sur la lutte contre la désertification (UNCCD) de 2007 à 2013.
               </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-[16px] font-black text-[#0B4264] underline underline-offset-4 decoration-2">Biographie</h3>
              <p className="text-[14px] leading-relaxed text-gray-800 text-justify">
                <span className="font-bold">Luc Gnacadja</span> est diplômé de l&apos;École africaine des métiers de l&apos;architecture et l&apos;urbanisme (EAMAU) de Lomé, au Togo. Il entame sa carrière politique sous la présidence de Mathieu Kérékou, en tant que ministre de l&apos;Environnement, du Logement et de l&apos;Urbanisme de juin 1999 à février 2005. En mars 2006, il est candidat à l&apos;élection présidentielle avec le mouvement l&apos;ENVOL, obtenant 0,68 % des suffrages.
                <br /><br />
                En septembre 2007, il est nommé par le secrétaire général de l&apos;ONU, Ban Ki-moon, à la tête de l&apos;UNCCD, poste qu&quot;il occupe durant deux mandats jusqu&apos;en 2013. À l&apos;issue des élections municipales de janvier 2026, il est élu maire de Cotonou. Il est installé dans ses fonctions le 6 février 2026, entouré de ses adjoints. En mars 2003, il a reçu le &quot;Green Award&quot; de la Banque mondiale pour ses actions en faveur du développement durable.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #0B426430;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #0B426450;
        }
      `}</style>
    </div>
  );
}

export default MayorModal;
