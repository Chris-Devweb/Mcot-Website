import Image from "next/image";
import Link from "next/link";
import { DecouvrirHero } from "@/components/decouvrir-hero";
import { PotentialitesTabs } from "@/components/potentialites-tabs";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Découvrir Cotonou - Mairie de Cotonou",
  description: "Découvrez les opportunités de la ville de Cotonou.",
};

export default function DecouvrirCotonouPage() {
  return (
    <>
      <DecouvrirHero />

      {/* SECTION: Historique */}
      <section className="relative w-full py-16 lg:py-24 px-4 sm:px-[100px] lg:px-[150px] bg-[#FAF9F8] overflow-hidden">
        {/* Background Cauris SVG Watermarks */}
        <div className="absolute top-[5%] left-[-20px] lg:left-[5%] opacity-20 pointer-events-none w-[180px] h-[180px] -scale-x-100 rotate-12">
          <Image src="/cauris2.svg" fill alt="" className="object-contain" />
        </div>
        <div className="absolute top-[45%] right-[-30px] lg:right-[2%] opacity-20 pointer-events-none w-[220px] h-[220px] rotate-[-25deg]">
          <Image src="/cauris2.svg" fill alt="" className="object-contain" />
        </div>
        <div className="absolute bottom-[10%] left-[-40px] lg:left-[8%] opacity-20 pointer-events-none w-[160px] h-[160px] rotate-[35deg]">
          <Image src="/cauris2.svg" fill alt="" className="object-contain" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-16 lg:gap-[100px]">

          {/* Top Row: Text (Left), Throne (Right) */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-1 flex flex-col items-start text-left lg:pr-6">
              <h2 className="text-[32px] lg:text-[40px] font-bold text-[#0B4264] mb-6 tracking-tight">
                Historique
              </h2>
              <p className="text-[#333] leading-[1.8] mb-6 font-medium text-[15px] lg:text-[15.5px]">
                La ville de Cotonou a été créée en 1830 sur initiative du Roi Guézo, illustre roi d&apos;Abomey. Selon l&apos;une des légendes, son nom initial est «Kutonou», signifiant «la lagune de la mort», en raison du rôle de carrefour que la ville a joué dans le trafic des esclaves.
              </p>
              <p className="text-[#333] leading-[1.8] mb-8 font-medium text-[15px] lg:text-[15.5px]">
                A la fin du 19ème siècle, Cotonou s&apos;est développé à partir de quelques villages de pêcheurs situés à l&apos;Est et à l&apos;Ouest de la lagune. En 1888, le territoire de la ville a été cédé à la France par le Roi d&apos;Abomey, ce qui eut pour effet l&apos;accélération de son développement.
              </p>
              <Button className="bg-[#0B7CB6] hover:bg-[#096696] text-white px-8 py-6 rounded-[8px] shadow-lg text-[14.5px] lg:text-[15px] font-bold gap-3 transition-colors">
                Voir l&apos;e-boutique de souvenir
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                </svg>
              </Button>
            </div>

            <div className="flex-1 w-full flex justify-center lg:justify-end relative">
              <div className="relative w-[300px] h-[380px] lg:w-[440px] lg:h-[540px]">
                {/* Overlapping dark blue circles mimicking the stand shadow */}
                <div className="absolute bottom-[20px] left-[15%] w-[130px] h-[130px] lg:w-[180px] lg:h-[180px] rounded-full bg-[#0B4264] opacity-90 z-0" />
                <div className="absolute bottom-[10px] right-[20%] w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] rounded-full bg-[#0B4264] opacity-80 z-0" />
                <Image src="/Throne.png" fill alt="Trône du roi" className="object-contain relative z-10 drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]" />
              </div>
            </div>
          </div>

          {/* Bottom Row: Mural (Left), Text (Right) */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
            <div className="w-full lg:w-[45%] flex justify-start relative shrink-0">
              <div className="relative w-full aspect-[4/3]">
                <Image src="/fresque1.png" fill alt="Fresque murale" className="object-contain drop-shadow-2xl" />
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center text-left h-full">
              <p className="text-[#333] leading-[1.8] mb-6 font-medium text-[15px] lg:text-[15.5px]">
                A partir du noyau originel des Toffins, la ville de Cotonou s&apos;est progressivement enrichie de toutes les ethnies du Bénin. Certains quartiers en portent aujourd&apos;hui la marque. Ainsi, Guincomey signifie « sur la terre des populations Guin », venues de Grand-Popo et d&apos;Agoué pour participer à la construction du Wharf de Cotonou. De même, Xwlacodji désigne la terre des Xwla.
              </p>
              <p className="text-[#333] leading-[1.8] font-medium text-[15px] lg:text-[15.5px]">
                Actuellement, Cotonou est devenu une ville représentative du Bénin et sa croissance accélérée est en train de donner naissance à une vaste région urbaine allant de Porto-Novo (à l&apos;Est) jusqu&apos;à Ouidah (à l&apos;Ouest) et Abomey-Calavi (au Nord). C&apos;est cette conurbation qui est désignée aujourd&apos;hui par le « Grand Nokoué ».
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION: Situation économique */}
      <section className="relative w-full py-16 lg:py-24 px-4 sm:px-[100px] lg:px-[150px] bg-white overflow-hidden">
        <div className="w-full max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 flex flex-col items-start text-left lg:pr-6">
            <h2 className="text-[28px] lg:text-[36px] font-bold text-[#0B4264] mb-6 tracking-tight">
              Situation économique
            </h2>
            <p className="text-[#333] leading-[2] font-medium text-[15px] lg:text-[15.5px]">
              Les activités économiques exercées dans la ville de Cotonou relèvent surtout du secteur tertiaire, tel que le commerce et les services, qui sont appuyées par quelques industries manufacturières. Quant aux activités agricoles, elles n&apos;occupent qu&apos;une petite frange de la population qui pratique le maraîchage, soit 80% des actifs agricoles. L&apos;artisanat et le commerce constituent la base de l&apos;économie locale de la municipalité, du fait de la présence de grands opérateurs économiques.
            </p>
          </div>

          <div className="w-full lg:w-[45%] flex justify-end relative shrink-0">
            <div className="relative w-full aspect-[4/3]">
              <Image src="/port copy.png" fill alt="Port de Cotonou" className="object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Potentialités */}
      <section className="relative w-full py-16 lg:py-24 px-4 sm:px-[100px] lg:px-[150px] bg-[#EEF5FA] overflow-hidden">
        {/* Palm tree decorations left */}
        <div className="absolute top-[20%] left-[-40px] pointer-events-none w-[350px] h-[350px] z-0 opacity-[0.15]">
          <Image src="/palmdrawleft.svg" fill alt="" className="object-contain object-left" />
        </div>
        {/* Palm tree decorations right */}
        <div className="absolute top-[40%] right-[-50px] pointer-events-none w-[350px] h-[350px] z-0 opacity-[0.15]">
          <Image src="/palmdrawright.svg" fill alt="" className="object-contain object-right" />
        </div>

        <h2 className="text-[28px] lg:text-[36px] font-bold text-[#0B4264] mb-12 text-center tracking-tight relative z-10">
          Potentialités
        </h2>
        {/* The Tabs Container */}
        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <PotentialitesTabs />
        </div>
      </section>

      {/* SECTION: About Cotonou */}
      <section className="py-12 lg:py-16 px-4 sm:px-[100px] lg:px-[150px] bg-white w-full relative overflow-hidden">
        {/* Left Palm tree */}
        <div className="absolute top-[10%] left-[-40px] pointer-events-none w-[350px] h-[350px] z-0 opacity-[0.15]">
          <Image src="/palmdrawleft.svg" fill alt="" className="object-contain object-left" />
        </div>
        {/* Right Palm tree */}
        <div className="absolute bottom-[10%] right-[-50px] pointer-events-none w-[350px] h-[350px] z-0 opacity-[0.15]">
          <Image src="/palmdrawright.svg" fill alt="" className="object-contain object-right" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto rounded-2xl overflow-hidden" style={{ minHeight: 280 }}>
          {/* Main background image */}
          <Image
            src="/cotonouback.png"
            alt="Cotonou, Capitale économique d'un pays émergent"
            fill
            className="object-cover"
          />
          {/* Dark gradient overlay — left strong, right lighter */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, rgba(11,66,100,0.88) 0%, rgba(11,66,100,0.65) 50%, rgba(11,66,100,0.25) 80%, transparent 100%)',
            }}
          />
          
          {/* Content: title + paragraph top-left, button bottom-right */}
          <div className="absolute inset-0 flex flex-col justify-between p-8 lg:p-10 z-20">
            {/* Top-left: title + paragraph */}
            <div className="max-w-[580px]">
              <h2 className="text-white text-[1.4rem] lg:text-[1.8rem] font-black mb-4 leading-tight">
                COTONOU,<br />
                <span className="font-normal text-[1.1rem] lg:text-[1.35rem]">Capitale économique d&apos;un pays émergent</span>
              </h2>
              {/* paragraph stretched wider to hit ~3 lines */}
              <p className="text-white/90 text-[13px] lg:text-[14px] leading-relaxed max-w-[520px]">
                La ville de Cotonou a été créée en 1830 sur l&apos;initiative du Roi Guézo, illustre roi d&apos;Abomey. Selon l&apos;une des légendes, son nom initial est «Kutonu», signifiant «la lagune de la mort», en raison du rôle de carrefour que la ville a joué dans le trafic des esclaves à travers cette région du golfe de Bénin.
              </p>
            </div>

            {/* Bottom-right: "Devenir partenaire" button */}
            <div className="flex justify-end">
              <button
                className="px-7 py-3 text-white font-semibold text-[13px] rounded-sm shadow-lg flex items-center gap-3 transition-all hover:brightness-110"
                style={{
                  background: 'linear-gradient(90deg, #0B4264 0%, #1565a0 100%)',
                  border: '1.5px solid rgba(255,255,255,0.35)',
                }}
              >
                Devenir partenaire
                <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 10h12" /><path d="M10 4l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Lieux Touristiques */}
      <section className="py-16 lg:py-24 px-4 sm:px-[100px] lg:px-[150px] bg-[#FAF9F8] relative overflow-hidden pb-[180px] lg:pb-[230px]">
        {/* Decorators continue to bottom */}
        <div className="absolute top-[20%] left-[-40px] pointer-events-none w-[350px] h-[350px] z-0 opacity-[0.15]">
          <Image src="/palmdrawleft.svg" fill alt="" className="object-contain object-left" />
        </div>
        <div className="absolute top-[40%] right-[-50px] pointer-events-none w-[350px] h-[350px] z-0 opacity-[0.15]">
           <Image src="/palmdrawright.svg" fill alt="" className="object-contain object-right" />
        </div>

        <h2 className="text-[28px] lg:text-[36px] font-bold text-[#0B4264] text-center mb-12 relative z-10 tracking-tight">
          Quelques lieux touristiques à Cotonou
        </h2>

        <div className="relative z-10 max-w-6xl mx-auto bg-white p-6 lg:p-8 rounded-[24px] shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <Link href="#" className="relative aspect-[1.1] rounded-[8px] overflow-hidden group shadow-sm bg-gray-100">
              <Image src="/routedespeches.png" fill alt="La route des pêches" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
              <p className="absolute bottom-6 w-full text-center text-white text-[15px] font-bold px-2" style={{ textShadow: '0 2px 5px rgba(0,0,0,0.8)' }}>
                La route des pêches
              </p>
            </Link>

            <Link href="#" className="relative aspect-[1.1] rounded-[8px] overflow-hidden group shadow-sm bg-gray-100">
              <Image src="/placemartyr.png" fill alt="La place des martyrs" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
              <p className="absolute bottom-6 w-full text-center text-white text-[15px] font-bold px-2" style={{ textShadow: '0 2px 5px rgba(0,0,0,0.8)' }}>
                La place des martyrs
              </p>
            </Link>

            <Link href="#" className="relative aspect-[1.1] rounded-[8px] overflow-hidden group shadow-sm bg-gray-100">
              <Image src="/bioguera.png" fill alt="La place Bio Guèra" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
              <p className="absolute bottom-6 w-full text-center text-white text-[15px] font-bold px-2" style={{ textShadow: '0 2px 5px rgba(0,0,0,0.8)' }}>
                La place Bio Guèra
              </p>
            </Link>

            <Link href="#" className="relative aspect-[1.1] rounded-[8px] overflow-hidden group shadow-sm bg-gray-100">
              <Image src="/amazone.png" fill alt="L'esplanade de l'Amazone" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
              <p className="absolute bottom-6 w-full text-center text-white text-[15px] font-bold px-2" style={{ textShadow: '0 2px 5px rgba(0,0,0,0.8)' }}>
                L&apos;esplanade de l&apos;Amazone
              </p>
            </Link>

            <Link href="#" className="relative aspect-[1.1] rounded-[8px] overflow-hidden group shadow-sm bg-gray-100">
              <Image src="/tagmural.png" fill alt="Le 3eme mur graphé le plus long du monde" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
              <p className="absolute bottom-6 w-full text-center text-white text-[15px] font-bold px-2" style={{ textShadow: '0 2px 5px rgba(0,0,0,0.8)' }}>
                Le 3eme mur graphé le plus long du monde
              </p>
            </Link>

            <Link href="#" className="relative aspect-[1.1] rounded-[8px] overflow-hidden group shadow-sm bg-gray-100">
              <Image src="/nokouelac.png" fill alt="Le lac Nokoué" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
              <p className="absolute bottom-6 w-full text-center text-white text-[15px] font-bold px-2" style={{ textShadow: '0 2px 5px rgba(0,0,0,0.8)' }}>
                Le lac Nokoué
              </p>
            </Link>

          </div>
        </div>
      </section>
    </>
  );
}
