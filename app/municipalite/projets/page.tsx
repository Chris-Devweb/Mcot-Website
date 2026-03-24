"use client";

import { useState } from "react";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import {
  TrendingUp,
  Building,
  Droplets,
  Dribbble,
  Tractor,
  Users,
  Briefcase,
  Network,
  ArrowRight
} from "lucide-react";

// Safe Medical Cross SVG as it appears in the mockup
const MedicalCross = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M10 3H14V10H21V14H14V21H10V14H3V10H10V3Z" />
  </svg>
);

// Note: Ensure the images are available in the public directory (e.g. /marketplace.png)
const CAROUSEL_DATA = [
  {
    image: "/marketplace.png",
    leftIcon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />,
    leftTitle: "Economie Locale",
    leftDesc: "Construction de neufs (09) marchés urbains modernes.",
    rightIcon: <Building className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />,
    rightTitle: "Éducation",
    rightDesc: "Lancement de la construction de 81 nouvelles salles de classes."
  },
  {
    image: "/irmmachine.png",
    leftIcon: <MedicalCross className="w-5 h-5 sm:w-6 sm:h-6" />,
    leftTitle: "Santé",
    leftDesc: "Modernisation et équipement des Centres de Santé de la Ville de Cotonou",
    rightIcon: <Droplets className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />,
    rightTitle: "Hygiène et Assainissement",
    rightDesc: ""
  },
  {
    image: "/stade.png",
    leftIcon: <Dribbble className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />,
    leftTitle: "Culture et Sports",
    leftDesc: "Modernisation des infrastructures sportives de la ville de Cotonou",
    rightIcon: <Tractor className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />,
    rightTitle: "Agriculture urbaine",
    rightDesc: ""
  }
];

export default function ProjetsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <PageHero
        label=""
        title="Municipalité / Projets"
        subtitle="Découvrez les projets et la vision de l'équipe municipale."
        imageSrc="/municipalityback.png"
      />

      {/* The background of the whole section is a very light gray (slate-50 matches standard Tailwind off-white well) */}
      <section className="py-8 px-4 sm:px-[100px] lg:px-[150px] bg-slate-50 pb-40 lg:pb-64 min-h-screen">

        {/* Tabs */}
        <div className="flex border-b border-gray-300 mt-2 mb-10 w-full overflow-x-auto scrollbar-hide">
          {["Thématiques", "Cotonou - Vision2025"].map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-8 py-4 text-sm sm:text-[15px] font-bold whitespace-nowrap transition-colors relative ${activeTab === i
                  ? "text-[#0B4264] bg-white border-t-4 border-[#0B4264]"
                  : "text-gray-400 hover:text-gray-600 bg-transparent"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 0 && (
          <div className="pt-8 space-y-20">

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B4264] text-center mb-10 px-4">
              Quelques thématiques des projets de développement sur Cotonou
            </h2>

            {/* Carousel Section - Reduced Size */}
            <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center">

              {/* The Image Overlayed on Top */}
              <div className="relative w-[90%] sm:w-full max-w-xl aspect-[16/10] sm:aspect-[2/1] rounded-xl overflow-hidden z-20 shadow-md bg-gray-200">
                <Image
                  src={CAROUSEL_DATA[activeSlide].image}
                  alt={CAROUSEL_DATA[activeSlide].leftTitle}
                  fill
                  className="object-cover"
                />
              </div>

              {/* The Dark Blue Box Background */}
              <div className="w-full bg-[#053F5C] rounded-2xl -mt-12 sm:-mt-16 pt-20 sm:pt-24 pb-8 px-6 sm:px-10 z-0 flex flex-col items-center shadow-lg">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 text-white">

                  {/* Left Column Item */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#053F5C] flex items-center justify-center shrink-0 shadow-sm">
                      {CAROUSEL_DATA[activeSlide].leftIcon}
                    </div>
                    <div className="flex-1 mt-0.5">
                      <h4 className="font-bold text-base sm:text-lg mb-1">{CAROUSEL_DATA[activeSlide].leftTitle}</h4>
                      <p className="text-xs sm:text-[13px] font-medium text-blue-50 leading-relaxed pr-2">
                        {CAROUSEL_DATA[activeSlide].leftDesc}
                      </p>
                    </div>
                  </div>

                  {/* Right Column Item */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    {CAROUSEL_DATA[activeSlide].rightTitle && (
                      <>
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#053F5C] flex items-center justify-center shrink-0 shadow-sm">
                          {CAROUSEL_DATA[activeSlide].rightIcon}
                        </div>
                        <div className="flex-1 mt-0.5">
                          <h4 className="font-bold text-base sm:text-lg mb-1">{CAROUSEL_DATA[activeSlide].rightTitle}</h4>
                          <p className="text-xs sm:text-[13px] font-medium text-blue-50 leading-relaxed pr-2">
                            {CAROUSEL_DATA[activeSlide].rightDesc}
                          </p>
                        </div>
                      </>
                    )}
                  </div>

                </div>

                {/* Pagination Dots/Numbers for Carousel */}
                <div className="flex gap-3 mt-10">
                  {[0, 1, 2].map((i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlide(i)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all shadow-sm ${activeSlide === i
                          ? "bg-white text-[#053F5C]"
                          : "bg-[#bec8cf] text-[#053F5C] hover:bg-white/80"
                        }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Video Presentation Section - Reduced Size */}
            <div className="relative pt-12 mt-10 pb-8 w-full max-w-3xl mx-auto">
              {/* Outer Blue Banner */}
              <div className="bg-[#053F5C] rounded-2xl pt-8 pb-24 px-4 relative z-0 shadow-lg">
                <h3 className="text-white text-lg sm:text-xl font-bold text-center max-w-xl mx-auto leading-snug">
                  Vidéo de présentation des grandes actions de la Municipalité
                </h3>
              </div>

              {/* YouTube Iframe overlaying the bottom edge */}
              <div className="relative w-[90%] sm:w-full max-w-2xl mx-auto aspect-video rounded-xl overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.3)] z-10 -mt-16 sm:-mt-16 border-0 bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/51H8qHUPS6Q?si=zDR5A8noqJRIQrKK"
                  title="Vidéo de la Mairie de Cotonou"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="border-0"
                ></iframe>
              </div>
            </div>

          </div>
        )}

      </section>

      {/* Cotonou - Vision2025 Content (Rendered conditionally without unmounting Section for background continuation) */}
      {activeTab === 1 && (
        <section className="py-8 px-4 sm:px-[100px] lg:px-[150px] bg-slate-50 pb-40 lg:pb-64">
          <div className="pt-2 space-y-16 max-w-5xl mx-auto">

            {/* Contexte Strategique */}
            <div>
              <h3 className="text-2xl font-extrabold text-[#0B4264] mb-6">Contexte Stratégique</h3>
              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed text-justify mb-10">
                La ville de Cotonou domine le paysage urbain du Bénin en raison de son importance démographique et économique et du rôle de premier plan qu'elle a dans tout l'écosystème sous-régional des affaires et des échanges commerciaux. Bien que la ville ne soit pas la capitale politique du Bénin, elle s'est imposée comme le centre administratif national par excellence et le principal centre d'activités du pays. Cotonou occupe donc une position centrale dans la conurbation qu'elle forme avec Abomey-Calavi, Sèmè-Kpodji, Porto-Novo, non seulement en termes géographiques, mais aussi en matière de densité urbaine (centre économique et politique) et d'atmosphère urbaine, malgré le fait qu'elle soit la plus petite en surface. Avec les Communes de Sèmè-Kpodji et Abomey-Calavi, Cotonou forme une grande métropole dont :
              </p>

              {/* Stats Row */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-10 px-0 sm:px-10 mb-16">
                <div className="text-center w-full md:w-1/3">
                  <p className="text-4xl font-black text-[#0B4264] mb-2 font-sans tracking-tight">832 km²</p>
                  <p className="text-[#437d9e] font-medium text-[15px]">Superficie du territoire</p>
                </div>
                <div className="text-center w-full md:w-1/3">
                  <p className="text-4xl font-black text-[#0B4264] mb-2 font-sans tracking-tight">16%</p>
                  <p className="text-[#437d9e] font-medium text-[15px]">Population nationale</p>
                </div>
                <div className="text-center w-full md:w-1/3">
                  <p className="text-4xl font-black text-[#0B4264] mb-2 font-sans tracking-tight">2 000 000</p>
                  <p className="text-[#437d9e] font-medium text-[15px]">Visiteurs occasionnels ou fréquents</p>
                </div>
              </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start mt-6">
                   {/* Left Image */}
                   <div className="w-full lg:w-[45%] shrink-0 flex justify-center lg:justify-start">
                      <div className="relative w-full max-w-[400px] aspect-[4/5] drop-shadow-md">
                         <Image src="/filetgondron.png" alt="Vue de Cotonou" fill className="object-contain" />
                      </div>
                   </div>

                {/* Right Text */}
                <div className="w-full lg:w-[55%] text-gray-700 text-[14px] sm:text-[15px] leading-relaxed text-justify">
                  <p className="mb-4">
                    Ces dernières années, l'environnement socioéconomique de Cotonou connait une rapide transformation, accélérée par :
                  </p>
                  <ul className="list-disc pl-5 mb-5 space-y-2.5 marker:text-gray-500">
                    <li>un afflux de plus en plus important de travailleurs et de familles en quête d'opportunités ;</li>
                    <li>un secteur des affaires en totale recomposition, un nombre important et des demandes croissantes de la part du secteur privé national ; avec l'émergence et l'installation à Cotonou, de grandes entreprises et organisations internationales et leurs personnels (locaux et internationaux) ;</li>
                    <li>l'émergence d'une classe moyenne très active et de réelles mutations dans les catégories sociales qui s'installent dans la commune ;</li>
                    <li>un environnement politique lui aussi totalement recomposé.</li>
                  </ul>
                  <p>
                    De plus, l'actuel exécutif municipal rentre en fonction à un moment stratégique où le Gouvernement du Bénin accélère depuis quatre ans la course pour rattraper 50 ans de retard en matière d'infrastructures, de même que la modernisation du Cadre de Vie. De fait, Cotonou se retrouve être l'un des épicentres de plusieurs projets structurants du P.A.C. Pour ceux de ces projets du P.A.C. qui se mettent en oeuvre dans tout le reste du Pays, la Ville de Cotonou s'est peu à peu révélée à la fois comme porte d'entrée ou de sortie, mais aussi comme une plateforme logistique et technique.
                  </p>
                </div>
              </div>
            </div>

            {/* Axes et objectifs stratégiques */}
            <div className="pt-10">
              <h3 className="text-[22px] font-extrabold text-[#0B4264] mb-3">Axes et objectifs stratégiques</h3>
              <p className="text-gray-700 text-[15px] mb-10 font-medium">
                Une mission qui se décline en quatre (4) axes stratégiques et qui se déploie en visant 15 objectifs stratégiques
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex items-start gap-5">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#053F5C] text-white flex items-center justify-center shadow-md">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B4264] text-[17px] mb-2 leading-snug">Qualité de Vie des administrés</h4>
                    <p className="text-[13px] text-gray-700 leading-relaxed text-justify">
                      Accès des populations la plus précaires aux services sociaux de base. Reduction de la pauvreté et des inégalités qui portent sur le logement. Sécurité de tous les habitants et usagers de Cotonou.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex items-start gap-5">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#053F5C] text-white flex items-center justify-center shadow-md">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B4264] text-[17px] mb-2 leading-snug">Infrastructure & développement durable</h4>
                    <p className="text-[13px] text-gray-700 leading-relaxed text-justify">
                      Accès des populations la plus précaires aux services sociaux de base. Reduction de la pauvreté et des inégalités qui portent sur le logement. Sécurité de tous les habitants et usagers de Cotonou.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex items-start gap-5">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#053F5C] text-white flex items-center justify-center shadow-md">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B4264] text-[17px] mb-2 leading-snug">Entreprenatiat & développement économique</h4>
                    <p className="text-[13px] text-gray-700 leading-relaxed text-justify">
                      Un écosystème où les entrepreneurs et les entreprises peuvent se développer et s'épanouir. Partenariats pour le développement et la Defense du tissu économique de Cotonou. Amélioration du dynamisme, de l'image de marque et attrait des visiteurs.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex items-start gap-5">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#053F5C] text-white flex items-center justify-center shadow-md">
                    <Network className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B4264] text-[17px] mb-2 leading-snug">Modernisation et renforcement organisationnel</h4>
                    <p className="text-[13px] text-gray-700 leading-relaxed text-justify">
                      Qualités des prestations et services rendus aux communautés. Cotonou, une ville modèle en matière de gouvernance et de gestion. Engagement citoyen et Gestion inclusive. Innovations et efficacité dans la mobilisation et la gestion des ressources.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Download PDF Card */}
            <div className="bg-[#AEE2F2] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 mt-12 shadow-sm">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 relative drop-shadow-md">
                <Image src="/pdf.svg" alt="Document PDF" fill className="object-contain" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="font-bold text-[#0B4264] text-xl md:text-[22px] mb-3 leading-snug">
                  Cotonou demain - Objectifs stractégiques de la ville de Cotonou
                </h4>
                <p className="text-[#3A5C70] text-[13px] md:text-sm mb-6 max-w-lg mx-auto md:mx-0 font-medium">
                  Consultez la synthèse du futur Plan d'Actions Stratégique de la ville de Cotonou., au format .pdf, ci-après :
                </p>
                <button className="bg-[#0A7DBA] hover:bg-[#0A6CA0] mx-auto md:mx-0 text-white rounded-[4px] px-6 py-2.5 font-medium transition-colors shadow-sm flex items-center justify-center gap-3 text-[15px]">
                  Télécharger le document <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
