import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { ActualitesSection } from "@/components/actualites-section";
import { AgendaSection } from "@/components/agenda-section";
import { NewsCard } from "@/components/news-card";
import { Button } from "@/components/ui/button";
import { ActuCard } from "@/components/actu-card";

export const metadata = {
  title: "Actualités - Mairie de Cotonou",
  description: "Découvrez toute l'actualité de la Mairie de Cotonou.",
};

const NEWS_ITEMS = [
  {
    id: 1,
    date: "10/07/25",
    title: "Construction de nouveaux modules de classes par la mairie de Cotonou",
    excerpt:
      "A la tête d'une délégation municipale composée de la troisième adjointe au maire Irène Françoise BEHANZIN, ...",
    imageSrc: "/actu2.png",
  },
  {
    id: 2,
    date: "10/07/25",
    title: "Construction de nouveaux modules de classes par la mairie de Cotonou",
    excerpt:
      "A la tête d'une délégation municipale composée de la troisième adjointe au maire Irène Françoise BEHANZIN, ...",
    imageSrc: "/actu2.png",
  },
  {
    id: 3,
    date: "10/07/25",
    title: "Construction de nouveaux modules de classes par la mairie de Cotonou",
    excerpt:
      "A la tête d'une délégation municipale composée de la troisième adjointe au maire Irène Françoise BEHANZIN, ...",
    imageSrc: "/actu2.png",
  },
  {
    id: 4,
    date: "10/07/25",
    title: "Construction de nouveaux modules de classes par la mairie de Cotonou",
    excerpt:
      "A la tête d'une délégation municipale composée de la troisième adjointe au maire Irène Françoise BEHANZIN, ...",
    imageSrc: "/actu2.png",
  },
  {
    id: 5,
    date: "10/07/25",
    title: "Construction de nouveaux modules de classes par la mairie de Cotonou",
    excerpt:
      "A la tête d'une délégation municipale composée de la troisième adjointe au maire Irène Françoise BEHANZIN, ...",
    imageSrc: "/actu2.png",
  },
  {
    id: 6,
    date: "10/07/25",
    title: "Construction de nouveaux modules de classes par la mairie de Cotonou",
    excerpt:
      "A la tête d'une délégation municipale composée de la troisième adjointe au maire Irène Françoise BEHANZIN, ...",
    imageSrc: "/actu2.png",
  },
];

export default function ActualitesPage() {
  return (
    <>
      <PageHero
        title="Actualités"
        subtitle="Découvrez toute l'actualité de la Mairie"
        imageSrc="/newsbackground.png"
      />
      {/* Flash news banner */}
      <section className="py-10 px-4 sm:px-[100px] lg:px-[150px] bg-white flex flex-col md:flex-row items-stretch gap-4 justify-center">
        {/* Red block */}
        <div className="bg-[#E53935] text-white px-8 py-4 flex items-center justify-center font-bold text-sm md:text-base shrink-0 rounded-[2px] shadow-sm uppercase tracking-wide">
          FLASH NEWS :
        </div>
        {/* Yellow block */}
        <div className="bg-[#FDBC2F] flex-1 flex items-center justify-between px-6 py-3 rounded-[2px] shadow-sm max-w-4xl">
           <p className="text-black text-[13px] md:text-sm font-bold leading-snug">
             Troisième session ordinaire du conseil municipal de Cotonou les jeudi 31 juillet, lundi 04 et mardi 05 août 2025 à partir de 10 heures.
           </p>
           <div className="flex items-center gap-1 shrink-0 ml-4">
             <button className="text-black/30 hover:text-black transition-colors" aria-label="News précédente">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>
             </button>
             <button className="text-black hover:text-black/60 transition-colors" aria-label="News suivante">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
             </button>
           </div>
        </div>
      </section>

      {/* Actualités à la Une */} 
      <section className="py-12 lg:py-16 px-4 sm:px-[100px] lg:px-[150px] bg-white">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E53935] shrink-0" />
            <h2 className="text-lg font-bold text-[#0B4264] uppercase">Actualités - À la Une</h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-[#0B4264] text-[#0B4264] hover:bg-[#0B4264] hover:text-white"
          >
            <a href="#">Voir Plus →</a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <ActuCard
            title="Le Maire et son Conseil municipal sur le chantier du futur Hôtel de Ville"
            imageSrc="/actu1.png"
            imageAlt="Le Maire et son Conseil municipal sur le chantier du futur Hôtel de Ville"
            href="#"
            totalSlides={1}
            activeSlide={0}
          />
        </div>
      </section>

      {/* Actualités En ce moment */}
      <section className="py-12 lg:py-16 px-4 sm:px-[100px] lg:px-[150px] bg-[#F5F8FB]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 relative flex items-center justify-center">
            <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
              <path d="M4 16a12 12 0 0 1 24 0" stroke="#E53935" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M8 16a8 8 0 0 1 16 0" stroke="#E53935" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="16" cy="16" r="2.5" fill="#E53935"/>
            </svg>
          </div>
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0B4264]">Actualités</h2>
            <p className="text-lg text-[#0B4264] font-medium">En ce moment</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS_ITEMS.map((item) => (
            <NewsCard
              key={item.id}
              date={item.date}
              title={item.title}
              excerpt={item.excerpt}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-8">
          <Button size="icon" variant="outline" className="rounded-full">←</Button>
          <Button size="icon" className="rounded-full bg-[#0B4264] w-10 h-10">1</Button>
          <Button size="icon" variant="outline" className="rounded-full w-10 h-10">2</Button>
          <Button size="icon" variant="outline" className="rounded-full w-10 h-10">3</Button>
          <Button size="icon" variant="outline" className="rounded-full w-10 h-10">...</Button>
          <Button size="icon" variant="outline" className="rounded-full w-10 h-10">10</Button>
          <Button size="icon" variant="outline" className="rounded-full">→</Button>
        </div>
      </section>

      <AgendaSection />

      {/* Section: Avis et Communiqués + Radio officielle */}
      <section className="py-12 lg:pt-16 pb-[180px] lg:pb-[230px] px-4 sm:px-[100px] lg:px-[150px] bg-[#F5F8FB]">
        <div className="mb-8">
          <h2 className="text-[26px] lg:text-[30px] font-bold text-[#0B4264]">Avis et Communiqués</h2>
          <p className="text-[#0B4264] text-[15px] font-semibold mt-1">Presse officielle</p>
        </div>

        {/* 6 Avis Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <NewsCard
              key={id}
              date="10/07/25"
              title="Municipalité de Cotonou: communiqué sur le paiement de la taxe d'exploitation"
              excerpt="A la tête d'une délégation municipale composée de la troisième adjointe au maire Irène Françoise BEHANZIN, ..."
              imageSrc="/doc.png"
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mb-12">
          <Button size="icon" variant="outline" className="rounded-full bg-white border-transparent text-[#0B4264] hover:bg-[#0B4264] hover:text-white transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </Button>
          <Button size="icon" className="rounded-full bg-[#E5E9EC] text-[#0B4264] hover:bg-[#0B4264] hover:text-white w-10 h-10 transition-colors">1</Button>
          <Button size="icon" className="rounded-full bg-[#E5E9EC] text-[#0B4264] hover:bg-[#0B4264] hover:text-white w-10 h-10 transition-colors">2</Button>
          <Button size="icon" className="rounded-full bg-[#E5E9EC] text-[#0B4264] hover:bg-[#0B4264] hover:text-white w-10 h-10 transition-colors">3</Button>
          <Button size="icon" className="rounded-full bg-[#E5E9EC] text-[#0B4264] hover:bg-[#0B4264] hover:text-white w-10 h-10 transition-colors">...</Button>
          <Button size="icon" className="rounded-full bg-[#E5E9EC] text-[#0B4264] hover:bg-[#0B4264] hover:text-white w-10 h-10 transition-colors">10</Button>
          <Button size="icon" className="rounded-full bg-[#0B4264] text-white hover:bg-[#072a40] w-10 h-10 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </Button>
        </div>

        {/* Radio officielle */}
        <div className="flex items-center justify-between bg-white border border-[#D6E2F0] rounded-xl px-6 py-4 shadow-sm mt-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 relative">
              <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
                <path d="M4 16a12 12 0 0 1 24 0" stroke="#E53935" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M8 16a8 8 0 0 1 16 0" stroke="#E53935" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="16" cy="16" r="2.5" fill="#E53935"/>
              </svg>
            </div>
            <span className="text-[#0B4264] font-bold text-[16px]">Radio officielle de Cotonou (94.3)</span>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 border border-[#0B4264] rounded-sm text-[#0B4264] text-[13px] font-medium bg-white hover:bg-[#0B4264] hover:text-white transition-all duration-200">
            Ecouter la radio
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}
