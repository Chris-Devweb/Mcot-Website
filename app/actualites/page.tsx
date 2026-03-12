import { PageHero } from "@/components/page-hero";
import { ActualitesSection } from "@/components/actualites-section";
import { AgendaSection } from "@/components/agenda-section";

export const metadata = {
  title: "Actualités - Mairie de Cotonou",
  description: "Découvrez toute l'actualité de la Mairie de Cotonou.",
};

export default function ActualitesPage() {
  return (
    <>
      <PageHero
        title="Actualités"
        subtitle="Découvrez toute l'actualité de la Mairie"
      />
      {/* Flash news banner */}
      <section className="bg-[#FDE100] py-3 px-4 sm:px-[100px] lg:px-[150px]">
        <p className="text-[#E53935] font-bold text-sm md:text-base">Flash news</p>
        <p className="text-black text-sm mt-0.5">
          Tenez-vous informé en temps réel du conseil municipal
        </p>
      </section>
      <ActualitesSection />
      <AgendaSection />
      {/* Avis et Communiqués - compact block */}
      <section className="py-12 lg:py-16 bg-white px-4 sm:px-[100px] lg:px-[150px]">
        <h2 className="text-[26px] lg:text-[30px] font-bold text-[#0B4264] mb-6">
          Avis et Communiqués
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <a
              key={i}
              href="#"
              className="flex flex-col rounded-2xl border border-gray-200 overflow-hidden bg-white hover:border-[#83CEE9] hover:shadow-lg transition-all"
            >
              <div className="h-32 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 text-4xl">📄</span>
              </div>
              <div className="p-4">
                <span className="text-xs text-gray-400">Le 10/03/23</span>
                <h3 className="font-bold text-[#0B4264] mt-1 line-clamp-2">
                  Municipalité de Cotonou communique sur le paiement de la taxe d&apos;exploitation
                </h3>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                  A la suite d&apos;une délibération municipale...
                </p>
                <span className="text-xs font-bold text-[#83CEE9] mt-2 inline-block">Voir Plus</span>
              </div>
            </a>
          ))}
        </div>
      </section>
      {/* Radio officielle */}
      <section className="py-8 px-4 sm:px-[100px] lg:px-[150px] bg-[#F5F8FB]">
        <div className="flex flex-wrap items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#E53935] flex items-center justify-center">
            <span className="text-white text-lg">📻</span>
          </div>
          <h2 className="text-xl font-bold text-[#0B4264]">Radio officielle de Cotonou (94.3)</h2>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 mt-4 border-2 border-[#0B4264] text-[#0B4264] font-medium px-5 py-2.5 rounded-md hover:bg-[#0B4264] hover:text-white transition-colors"
        >
          Ecouter la radio
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
          </svg>
        </a>
      </section>
    </>
  );
}
