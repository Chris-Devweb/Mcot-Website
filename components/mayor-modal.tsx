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
      {/* Dark gradient background exactly like the mockup */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0d2f3b 0%, #1a3d2b 45%, #3a5218 75%, #6b6210 100%)',
        }}
      />

      {/* White triangle corner decoration — top left of the SCREEN area (outside the card) */}
      <div
        className="absolute top-0 left-0 pointer-events-none"
        style={{
          width: 0,
          height: 0,
          borderStyle: 'solid',
          borderWidth: '110px 110px 0 0',
          borderColor: 'rgba(255,255,255,0.18) transparent transparent transparent',
        }}
      />

      {/* Modal Card */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-[660px] max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Palm watermark inside the card — right side, like the mockup */}
        <div className="absolute right-0 bottom-0 top-0 w-[220px] pointer-events-none overflow-hidden rounded-r-2xl">
          <div className="absolute right-[-40px] bottom-0 w-[240px] h-[320px] opacity-[0.08]">
            <Image
              src="/palme.png"
              alt=""
              fill
              className="object-contain object-bottom-right"
            />
          </div>
        </div>

        {/* Header */}
        <div className="relative flex items-center gap-5 px-7 pt-7 pb-5 border-b border-gray-100 shrink-0">
          {/* Avatar */}
          <div className="relative w-[88px] h-[88px] rounded-full overflow-hidden border-[3px] border-[#0B4264] shrink-0 shadow-md">
            <Image
              src="/agents municipaux/luc-gnacadja-1773755964.jpg"
              alt="Mr Luc GNACADJA"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Name + role — centered horizontally in remaining space */}
          <div className="flex-1 text-center">
            <h2 className="text-[20px] font-extrabold text-[#0B4264] leading-tight">Mr Luc GNACADJA</h2>
            <p className="text-gray-500 text-[14px] font-medium mt-1">Le maire</p>
          </div>

          {/* Close + Wikipedia — stacked top-right */}
          <div className="flex flex-col items-end gap-2 shrink-0">
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 text-[16px] font-bold transition-colors"
              aria-label="Fermer"
            >
              ✕
            </button>
            <a
              href="https://fr.wikipedia.org/wiki/Luc_Gnacadja"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-[13px] font-bold text-[#0B4264] underline underline-offset-2 hover:text-[#083050] whitespace-nowrap"
            >
              Voir le Wikipedia
            </a>
          </div>
        </div>

        {/* Scrollable bio content */}
        <div className="relative overflow-y-auto flex-1 px-7 py-6 space-y-4">
          {/* Intro paragraph — first sentence in bold */}
          <p className="text-[14px] text-gray-800 leading-relaxed">
            <span className="font-bold">Luc Gnacadja</span>{' '}
            {INTRO.replace('Luc Gnacadja ', '')}
          </p>

          {/* Biographie heading + body */}
          <div>
            <h3 className="text-[15px] font-bold text-[#0B4264] underline underline-offset-2 mb-2">
              Biographie
            </h3>
            <p className="text-[14px] text-gray-800 leading-relaxed">
              <span className="font-bold">Luc Gnacadja</span>{' '}
              {BIO.split('\n\n').map((para, i) =>
                i === 0 ? (
                  <span key={i}>{para.replace('Luc Gnacadja ', '')}</span>
                ) : (
                  <span key={i}>
                    <br /><br />{para}
                  </span>
                )
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MayorModal;
