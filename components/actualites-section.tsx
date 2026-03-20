import Image from 'next/image';
import { NewsCard } from '@/components/news-card';
import { Button } from '@/components/ui/button';

// Sample news data — replace with real data / API calls later
const NEWS_ITEMS = [
  {
    id: 1,
    date: '10/07/25',
    title: 'Construction de nouveaux modules de classes par la mairie de Cotonou',
    excerpt:
      "A la tête d'une délégation municipale composée de la troisième adjointe au maire Irène Françoise BEHANZIN, ...",
    imageSrc: '/actu2.png',
  },
  {
    id: 2,
    date: '10/07/25',
    title: 'Construction de nouveaux modules de classes par la mairie de Cotonou',
    excerpt:
      "A la tête d'une délégation municipale composée de la troisième adjointe au maire Irène Françoise BEHANZIN, ...",
    imageSrc: '/actu2.png',
  },
  {
    id: 3,
    date: '10/07/25',
    title: 'Construction de nouveaux modules de classes par la mairie de Cotonou',
    excerpt:
      "A la tête d'une délégation municipale composée de la troisième adjointe au maire Irène Françoise BEHANZIN, ...",
    imageSrc: '/actu2.png',
  },
];

export function ActualitesSection() {
  return (
    <section className="relative w-full py-16 lg:py-20 bg-white overflow-visible font-sans">
      
      {/* Palm leaf background decoration — strictly inside this section */}
      <div className="absolute top-0 left-0 w-[220px] lg:w-[300px] pointer-events-none -mt-16 lg:-mt-24" style={{ zIndex: 0 }}>
        <div className="relative w-full h-[320px] lg:h-[420px]">
          <Image
            src="/palme.png"
            alt=""
            fill
            className="object-contain object-left-top"
          />
        </div>
      </div>

      {/* Section content */}
      <div className="relative z-10 w-full px-4 sm:px-[100px] lg:px-[150px]">
        
        {/* Section Header */}
        <div className="flex items-start justify-between mb-10">
          <div>
            {/* Title row */}
            <div className="flex items-center gap-3 mb-1">
              <div className="flex items-center justify-center w-8 h-8 relative">
                <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
                  <path d="M4 16a12 12 0 0 1 24 0" stroke="#E53935" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M8 16a8 8 0 0 1 16 0" stroke="#E53935" strokeWidth="2.5" strokeLinecap="round"/>
                  <circle cx="16" cy="16" r="2.5" fill="#E53935"/>
                </svg>
              </div>
              <h2 className="text-[26px] lg:text-[30px] font-bold text-[#0B4264]">
                Actualités
              </h2>
            </div>
            <p className="text-[16px] text-[#0B4264] font-medium ml-[44px]">
              En ce moment
            </p>
          </div>

          {/* "Voir toute l'actualité" button */}
          <Button
            asChild
            variant="outline"
            className="hidden md:inline-flex items-center gap-2 border border-[#0B4264] text-[#0B4264] text-[13px] font-medium px-5 py-2.5 rounded-sm hover:bg-[#0B4264] hover:text-white transition-all duration-200 self-center whitespace-nowrap bg-transparent"
          >
            <a href="#">
              Voir toute l&apos;actualité
              <svg className="ml-2 w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </Button>
        </div>

        {/* News Cards Grid */}
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
      </div>
    </section>
  );
}

export default ActualitesSection;
