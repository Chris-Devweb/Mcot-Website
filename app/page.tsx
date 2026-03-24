import { HeroSection } from "@/components/hero-section";
import { ActualitesSection } from "@/components/actualites-section";
import { AgendaSection } from "@/components/agenda-section";
import { NewsCard } from "@/components/news-card";
import { NewsletterButton } from "@/components/newsletter-button";
import Image from "next/image";

// Fix 3: Avis documents — same NewsCard structure as Actualités
const AVIS_ITEMS = [
  {
    id: 1,
    date: '10/07/25',
    title: 'Municipalité de Cotonou: communiqué sur le paiement de la taxe d\'exploitation',
    excerpt: 'A la tête d\'une délégation municipale composée de la troisième adjointe au maire Irène Françoise BEHANZIN, le Maire de Cotonou a procédé à la rencontre des acteurs...',
    imageSrc: '/doc.png',
  },
  {
    id: 2,
    date: '08/07/25',
    title: 'Avis d\'appel d\'offres: construction de nouvelles infrastructures urbaines',
    excerpt: 'La Mairie de Cotonou lance un appel d\'offres ouvert pour la construction de nouvelles infrastructures dans les arrondissements de la commune...',
    imageSrc: '/doc.png',
  },
  {
    id: 3,
    date: '05/07/25',
    title: 'Communiqué: mesures de gestion des marchés publics locaux',
    excerpt: 'Suite aux décisions du Conseil municipal, la Mairie de Cotonou porte à la connaissance de la population les nouvelles mesures relatives à la gestion des marchés...',
    imageSrc: '/doc.png',
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <ActualitesSection />
      <AgendaSection />

      {/* Section: Avis et Communiqués — Fix 3: same NewsCard component */}
      <section className="py-12 lg:py-16 px-4 sm:px-[100px] lg:px-[150px] bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div>
            <h2 className="text-[26px] lg:text-[30px] font-bold text-[#0B4264]">Avis et Communiqués</h2>
            <p className="text-[#0B4264] text-[15px] font-semibold mt-1">Presse officielle</p>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 border border-[#0B4264] rounded-sm text-[#0B4264] text-[13px] font-medium bg-white hover:bg-[#0B4264] hover:text-white transition-all duration-200 mt-4 md:mt-0">
            Voir tous les articles
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10" /><path d="M8 4l4 4-4 4" />
            </svg>
          </button>
        </div>

        {/* Same NewsCard component as Actualités */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {AVIS_ITEMS.map((item) => (
            <NewsCard
              key={item.id}
              date={item.date}
              title={item.title}
              excerpt={item.excerpt}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>

        {/* Radio officielle */}
        <div className="flex items-center justify-between bg-white border border-[#D6E2F0] rounded-xl px-6 py-4 shadow-sm">
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
          <button className="px-5 py-2.5 border border-[#0B4264] rounded-sm text-[#0B4264] text-[13px] font-medium bg-white hover:bg-[#0B4264] hover:text-white transition-all duration-200">
            Ecouter la radio
          </button>
        </div>
      </section>

      {/* Section: Cotonou Capitale — Fix 4: paragraph wider (3 lines), button bottom-right */}
      <section className="py-12 lg:py-16 px-4 sm:px-[100px] lg:px-[150px] bg-white w-full">
        <div className="relative w-full rounded-2xl overflow-hidden" style={{ minHeight: 280 }}>
          {/* Main background image */}
          <Image
            src="/cotonouback.png"
            alt="Cotonou, Capitale économique d'un pays émergent"
            fill
            className="object-cover"
          />
          {/* Dark gradient overlay — left strong, right lighter */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(11,66,100,0.88) 0%, rgba(11,66,100,0.65) 50%, rgba(11,66,100,0.25) 80%, transparent 100%)',
            }}
          />
          
          {/* Content: title + paragraph top-left, button bottom-right */}
          <div className="absolute inset-0 flex flex-col justify-between p-8 lg:p-10">
            {/* Top-left: title + paragraph */}
            <div className="max-w-[580px]">
              <h2 className="text-white text-[1.4rem] lg:text-[1.8rem] font-black mb-4 leading-tight">
                COTONOU,<br />
                <span className="font-normal text-[1.1rem] lg:text-[1.35rem]">Capitale économique d&apos;un pays émergent</span>
              </h2>
              {/* Fix 4: paragraph stretched wider to hit ~3 lines */}
              <p className="text-white/90 text-[13px] lg:text-[14px] leading-relaxed max-w-[520px]">
                La ville de Cotonou a été créée en 1830 sur l&apos;initiative du Roi Guézo, illustre roi d&apos;Abomey. Selon l&apos;une des légendes, son nom initial est «Kutonu», signifiant «la lagune de la mort», en raison du rôle de carrefour que la ville a joué dans le trafic des esclaves à travers cette région du golfe de Bénin.
              </p>
            </div>

            {/* Bottom-right: "En savoir plus" button — Fix 4 */}
            <div className="flex justify-end">
              <button
                className="px-7 py-3 text-white font-semibold text-[13px] rounded-sm shadow-lg flex items-center gap-3 transition-all hover:brightness-110"
                style={{
                  background: 'linear-gradient(90deg, #0B4264 0%, #1565a0 100%)',
                  border: '1.5px solid rgba(255,255,255,0.35)',
                }}
              >
                En savoir plus
                <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 10h12" /><path d="M10 4l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Contact — Fix 5: background is backcontact.png */}
      <section className="py-12 lg:py-16 px-4 sm:px-[100px] lg:px-[150px] bg-[#F5F8FB]">
        <div className="relative w-full rounded-2xl overflow-hidden">
          {/* Fix 5: use backcontact.png */}
          <Image
            src="/backcontact.png"
            alt="Contactez-nous"
            fill
            className="object-cover pointer-events-none"
          />
          {/* Content */}
          <div className="relative z-10 w-full flex flex-col lg:flex-row gap-10 lg:gap-16 items-start p-8 lg:p-12">
            {/* Left block: text + social icons */}
            <div className="flex-1 flex flex-col justify-center min-w-0">
              <p className="text-[#0B4264] text-[12px] font-semibold mb-3 uppercase tracking-wide">Nous sommes à votre service</p>
              <h2 className="text-[18px] lg:text-[22px] font-bold text-gray-900 leading-snug mb-6">
                <span className="font-normal">Une irrégularité à signaler, un avis à donner ou un partenariat à nous proposer ?</span><br />
                <span className="font-black text-[#0B4264]">Contactez-nous !</span>
              </h2>
              {/* Social icons */}
              <div className="flex items-center gap-3 mt-2">
                <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-[#0B4264]/10 hover:bg-[#0B4264] hover:text-white text-[#0B4264] flex items-center justify-center transition-all duration-200">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" aria-label="X (Twitter)" className="w-9 h-9 rounded-full bg-[#0B4264]/10 hover:bg-[#0B4264] hover:text-white text-[#0B4264] flex items-center justify-center transition-all duration-200">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-[#0B4264]/10 hover:bg-[#0B4264] hover:text-white text-[#0B4264] flex items-center justify-center transition-all duration-200">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full bg-[#0B4264]/10 hover:bg-[#0B4264] hover:text-white text-[#0B4264] flex items-center justify-center transition-all duration-200">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.5C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-[#0B4264]/10 hover:bg-[#0B4264] hover:text-white text-[#0B4264] flex items-center justify-center transition-all duration-200">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>

            {/* Right block: Contact form */}
            <div className="w-full lg:w-[420px] shrink-0">
              <div className="bg-white rounded-2xl shadow-lg border border-[#D6E2F0] p-6">
                <form className="space-y-4">
                  <div>
                    <label className="block text-[13px] text-[#0B4264] font-semibold mb-1.5">Votre Nom complet</label>
                    <input
                      type="text"
                      placeholder="Ex : John Doe"
                      className="w-full border border-[#D6E2F0] rounded-lg px-3 py-2.5 bg-[#F5F8FB] text-[14px] focus:outline-none focus:border-[#0B4264] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] text-[#0B4264] font-semibold mb-1.5">Votre E-mail</label>
                    <input
                      type="email"
                      placeholder="Ex : johndoe@gmail.com"
                      className="w-full border border-[#D6E2F0] rounded-lg px-3 py-2.5 bg-[#F5F8FB] text-[14px] focus:outline-none focus:border-[#0B4264] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] text-[#0B4264] font-semibold mb-1.5">Votre message</label>
                    <textarea
                      placeholder="Ecrivez ici..."
                      className="w-full border border-[#D6E2F0] rounded-lg px-3 py-2.5 bg-[#F5F8FB] text-[14px] focus:outline-none focus:border-[#0B4264] transition-colors resize-none"
                      rows={4}
                    />
                  </div>
                  <div className="flex gap-3 pt-1">
                    <button type="submit" className="flex items-center gap-2 bg-[#0B4264] hover:bg-[#083050] text-white px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-colors">
                      Envoyer
                      <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    </button>
                    <NewsletterButton />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Strip — Fix 6: partenerbackground.png + layout-guide padding + justify-between */}
      <section className="relative py-10 overflow-hidden">
        {/* Fix 6: partenerbackground.png as background */}
        <Image
          src="/partenerbackground.png"
          alt=""
          fill
          className="object-cover pointer-events-none"
        />
        <div className="relative z-10 px-4 sm:px-[100px] lg:px-[150px]">
          {/* Equally spaced logos following layout guide */}
          <div className="flex items-center justify-between gap-6">
            <div className="relative h-12 w-28 flex-shrink-0">
              <Image src="/aimf.png" alt="AIMF" fill className="object-contain" />
            </div>
            <div className="relative h-12 w-28 flex-shrink-0">
              <Image src="/marseille.png" alt="Marseille" fill className="object-contain" />
            </div>
            <div className="relative h-12 w-28 flex-shrink-0">
              <Image src="/rosny.png" alt="Rosny-sous-Bois" fill className="object-contain" />
            </div>
            <div className="relative h-12 w-28 flex-shrink-0">
              <Image src="/seineure.png" alt="Seine-Eure Agglo" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
