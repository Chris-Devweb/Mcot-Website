"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export type NewsArticle = {
  id: number;
  title: string;
  date?: string;
  imageSrc: string;
  subtitle?: string;
  content?: string;
};

// Super lightweight event emitter for the Custom Modal Pub/Sub pattern
type Listener = (article: NewsArticle, otherArticles: NewsArticle[]) => void;
let listeners: Listener[] = [];
export const windowNewsModal = {
  subscribe: (listener: Listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  open: (article: NewsArticle, otherArticles: NewsArticle[]) => {
    listeners.forEach((l) => l(article, otherArticles));
  },
};

export function NewsModalRoot() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);
  const [others, setOthers] = useState<NewsArticle[]>([]);

  useEffect(() => {
    const unsub = windowNewsModal.subscribe((article, otherArticles) => {
      setActiveArticle(article);
      setOthers(otherArticles);
      setIsOpen(true);
      // Lock body scroll
      document.body.style.overflow = "hidden";
    });
    return unsub;
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Restore body scroll
    document.body.style.overflow = "auto";
  };

  if (!isOpen || !activeArticle) return null;

  // The required placeholder texts requested by the user
  const demoSubtitle = "Luc Setondji ATROKPO lance la remise officielle des sites";
  const demoContent = `A la tête d'une délégation municipale composée de la troisième adjointe au maire Irène Françoise BEHANZIN, du secrétaire exécutif Anges Paterne AMOUSSOUGA, des chefs d'arrondissements, chefs de quartiers, responsables d'établissements, des prestataires et des populations, le Maire Luc Setondji ATROKPO a effectué, ce vendredi 26 Mai 2023, une descente dans plusieurs écoles publiques de Cotonou.

Objectif, procéder au lancement de la remise officielle de sites aux entreprises prestataires dans le cadre du projet de construction et de réfection de nouveaux modules de classes dans la commune de Cotonou. C'est l'école primaire publique d'Agongbomey dans le 13 ème arrondissement qui a marqué la première étape de la tournée. S'en suivront les sites de EPP Ylomahouto, EPP Agla-centre, EPP Agla-Nord et EPP Ahogbohouè.

Pour l'autorité municipale, ces nouvelles constructions d'infrastructures contribueront non seulement à améliorer les conditions d'études aux apprenants et corps enseignants mais aussi à embellir la ville de Cotonou. Les populations bénéficiaires n'ont pas manqué de remercier la Municipalité de Cotonou pour ses actions.`;

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Dark overlay backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={handleClose}
      />

      {/* Main Modal Box */}
      <div className="bg-white w-full max-w-[1050px] h-[90vh] md:h-[650px] rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden relative animate-in zoom-in-95 duration-300 z-10 font-sans border border-gray-100">
        
        {/* Close Button anchored to the Modal top-right */}
        <button 
          onClick={handleClose}
          aria-label="Fermer"
          className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2 md:p-2.5 rounded-full bg-white text-[#0B4264] hover:bg-gray-100 hover:text-red-600 shadow-md transition-colors"
        >
          <X className="w-5 h-5" strokeWidth={2.5} />
        </button>

        {/* --- Left Column: Context / Others --- */}
        <div className="hidden md:flex w-full md:w-[42%] bg-white flex-col border-r border-gray-200 h-full">
          {/* Active Image Thumbnail Frame */}
          <div className="w-full shrink-0 p-6 pb-4">
             <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <Image src={activeArticle.imageSrc} alt="" fill className="object-cover" />
             </div>
          </div>
          
          {/* Other Articles List Header */}
          <div className="px-6 pb-2 shrink-0">
             <h4 className="text-[#0B4264] font-bold text-[15px]">Autres Articles</h4>
          </div>
          
          {/* Other Articles List Scrollable */}
          <div className="flex-1 overflow-y-auto px-5 pb-6 space-y-2 custom-scrollbar">
             {others.map((item, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setActiveArticle(item)}
                  className="flex gap-4 items-center group cursor-pointer p-3 rounded-xl border border-transparent hover:border-[#83CEE9] hover:bg-[#83CEE9]/5 transition-all"
                >
                   <div className="relative w-[90px] h-[65px] rounded-lg overflow-hidden shrink-0 border border-gray-100">
                      <Image src={item.imageSrc} alt={item.title} fill className="object-cover transition-transform group-hover:scale-105" />
                   </div>
                   <div className="flex flex-col flex-1">
                      <p className="text-[12.5px] text-gray-800 font-medium line-clamp-2 leading-tight mb-1.5 group-hover:text-[#0B4264]">
                        {item.title}
                      </p>
                      <span className="text-[11px] text-[#0B4264] font-bold flex items-center gap-1 opacity-80 group-hover:opacity-100">
                         Voir Plus 
                         <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                      </span>
                   </div>
                </div>
             ))}
          </div>
        </div>

        {/* --- Right Column: Full Detail Article --- */}
        <div className="w-full md:w-[58%] p-6 md:p-10 pt-16 md:pt-10 overflow-y-auto custom-scrollbar bg-white h-full relative flex flex-col">
           <h2 className="text-[#0B4264] text-[22px] lg:text-[28px] font-bold leading-tight mb-3 md:pr-12">
             {activeArticle.title}
           </h2>
           <p className="text-gray-600 text-[13px] font-medium mb-8">Le {activeArticle.date || "10/07/25"}</p>
           
           {/* Mobile-only image fallback if user wraps on small screen */}
           <div className="md:hidden relative w-full aspect-video rounded-xl overflow-hidden shadow-sm mb-6 border border-gray-100">
              <Image src={activeArticle.imageSrc} alt="" fill className="object-cover" />
           </div>
           
           <h3 className="text-black font-extrabold text-[15px] leading-snug mb-5">
             {activeArticle.subtitle || demoSubtitle}
           </h3>
           
           <div className="text-gray-700 text-[14.5px] leading-8 space-y-4 text-justify">
             {(activeArticle.content || demoContent).split('\n\n').map((paragraph: string, i: number) => (
               <p key={i}>{paragraph}</p>
             ))}
           </div>
        </div>

      </div>
    </div>
  );
}
