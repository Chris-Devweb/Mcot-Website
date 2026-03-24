"use client";

import { useState } from "react";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MayorModal } from "@/components/mayor-modal";
import { CQModal } from "@/components/cq-modal";

const TABS = [
  "Le Maire",
  "Les CA et les Présidents de commission",
  "Le Conseil de Supervision",
  "Les Conseillers",
  "Le Secrétariat Exécutif",
];

const ADJOINTS = [
  { name: "BELLO Ariette Marie-Madeleine Rissicatou", image: "/agents municipaux/bello-arlette-1773756814.jpg" },
  { name: "ADJAGBONI Gatien", image: "/agents municipaux/gatien-adjagboni-1688319501.jpg" },
  { name: "BEHANZIN Irène Françoise", image: "/agents municipaux/behanzin-irene-1773756473.jpg" },
];

const CA_MEMBERS = [
  { name: "PEDRO Florent Candide", role: "Chef du 1er Arrondissement", image: "/agents municipaux/inconnu.png" },
  { name: "GOGOYI Akouegnon Prosper", role: "Chef du 2ème Arrondissement", image: "/agents municipaux/gogoyi-akouegnon-prosper-2eme-arrondissement-1736261742.jpg" },
  { name: "ADETONAH Maurille Omer", role: "Chef du 3ème Arrondissement", image: "/agents municipaux/adetonah-maurille-omer-3eme-arrondissement-ca-1736261588.jpg" },
  { name: "ADEDJOUMA Saliou Adebayo", role: "Chef du 4ème Arrondissement", image: "/agents municipaux/ca4-adedjouman_1-1740647840.jpg" },
  { name: "DEKOUN Anselme Parfait", role: "Chef du 5ème Arrondissement", image: "/agents municipaux/dekoun-anselme-parfait-1688330189.jpg" },
  { name: "SOHOU Alexandre", role: "Chef du 6ème Arrondissement", image: "/agents municipaux/inconnu.png" },
  { name: "IDRISSOU N. Aboudou Romaric", role: "Chef du 7ème Arrondissement", image: "/agents municipaux/inconnu.png" },
  { name: "GBAGUIDI Cossi", role: "Chef du 8ème Arrondissement", image: "/agents municipaux/ca8-gbaguidi_1-1740647458.jpg" },
  { name: "ASSOU N. Valiou", role: "Chef du 9ème Arrondissement", image: "/agents municipaux/inconnu.png" },
  { name: "GNONLONFOUN Denis Maximin", role: "Chef du 10ème Arrondissement", image: "/agents municipaux/gnonlonfoun-denis-maximin-1688329048.jpg" },
  { name: "RAYMOND Georges Ayaovi", role: "Chef du 11ème Arrondissement", image: "/agents municipaux/raymond-georges-ayaovi-1688329621.jpg" },
  { name: "AKINDES Gbede Samuel Adékambi", role: "Chef du 12ème Arrondissement", image: "/agents municipaux/akindes-fidele-samuel-adekambi2-1769425871.png" },
  { name: "FOLLY-BEBE Aristide Maximin", role: "Chef du 13ème Arrondissement", image: "/agents municipaux/ca13-bebe-1740667555.jpg" },
];

const COMMISSION_MEMBERS = [
  { name: "AHOLOU Zoun", role: "Président de la commission des Affaires Domaniales et Environnementales", image: "/agents municipaux/inconnu.png" },
  { name: "ADJAGBONI Gatien", role: "Président de la commission des Affaires Économiques et Financières", image: "/agents municipaux/gatien-adjagboni-1688319501.jpg" },
  { name: "GBENOU Léopold", role: "Président de la commission des Affaires Sociales, Culturelles et Sportives", image: "/agents municipaux/gbenou-1740667746.jpg" },
  { name: "GNONLONFOUN Denis Maximin", role: "Président de la Commission de la Coopération et des relations avec les Institutions", image: "/agents municipaux/gnonlonfoun-denis-maximin-1688329048.jpg" },
];

type ConseillerMap = {
  [key: number]: { name: string; image: string }[];
};

const CONSEILLERS: ConseillerMap = {
  1: [
    { name: "AHOUANDJINOU Randyx R.", image: "/agents municipaux/randix-ahoundjinou-1688319485.jpg" },
    { name: "BELLO Ariette Marie-Madeleine Rissicatou", image: "/agents municipaux/bello-arlette-1773756814.jpg" },
    { name: "OTCHO Epiphane", image: "/agents municipaux/inconnu.png" },
    { name: "TOVITCHEDE Dossou Landège", image: "/agents municipaux/tovitchede-dossou-landege-1er-arrondissement-1736261615.jpg" }
  ],
  2: [
    { name: "GOGOUI Akouegnon Prosper", image: "/agents municipaux/gogoyi-akouegnon-prosper-2eme-arrondissement-1736261742.jpg" },
    { name: "GOHOUNGBE Mathilde Félicité", image: "/agents municipaux/gohoungbe-mathilde-felicite-2eme-arrondissement-1736261730.jpg" },
    { name: "HOUDAKOR Dovi David Franck", image: "/agents municipaux/houedakor-dovi-david-franck-2eme-arrondissement-1736261682.jpg" },
    { name: "SOHOU Djidjoho Alexandre Casimir", image: "/agents municipaux/ca2-sohou-1740668046.jpg" },
    { name: "ZOUNFA Houssou Zachée", image: "/agents municipaux/zounfa-houssou-zachee-2eme-arrondissement-1736261602.jpg" }
  ],
  3: [
    { name: "ADETONAN Maurille Omer", image: "/agents municipaux/adetonah-maurille-omer-3eme-arrondissement-ca-1736261588.jpg" },
    { name: "AGBODJOGBE Virginie Simplice", image: "/agents municipaux/agbodjogbe-virginie-simplice-3eme-arrondissement-1736261697.jpg" },
    { name: "GNONSE PADONOU Pierre Nougbognon", image: "/agents municipaux/inconnu.png" },
    { name: "HOUNDJENOUKON Sessinou Valère", image: "/agents municipaux/houndjenoukon-sessinou-valere-3eme-arrondissemen-1736261669.jpg" },
    { name: "LIGAN Isaac Djidjoho", image: "/agents municipaux/ligan-isaac-djidjoho-3eme-arrondissement-1736261633.png" }
  ],
  4: [
    { name: "ADEDJOUMA Saliou Adelabou", image: "/agents municipaux/ca4-adedjouman_1-1740647840.jpg" },
    { name: "HOUSSOU Christophe", image: "/agents municipaux/houssou-christophe-4eme-arrondissement-1736261649.jpg" },
    { name: "SEDJIDE Honduras", image: "/agents municipaux/sedjide-1740648175.jpg" }
  ],
  5: [
    { name: "DEKOUN Anselme Parfait", image: "/agents municipaux/dekoun-anselme-parfait-1688330189.jpg" }
  ],
  6: [
    { name: "BOCCO Ange Donation", image: "/agents municipaux/inconnu.png" },
    { name: "GNONLONFOUN Denis Maximin", image: "/agents municipaux/gnonlonfoun-denis-maximin-1688329048.jpg" },
    { name: "GNONLONFOUN Isidore", image: "/agents municipaux/inconnu.png" },
    { name: "KOSSI Odile", image: "/agents municipaux/inconnu.png" },
    { name: "SEWA Armel Florent", image: "/agents municipaux/inconnu.png" }
  ],
  7: [
    { name: "BOCO Iris Muriel", image: "/agents municipaux/boco-iris-muriel-1688329153.jpg" }
  ],
  8: [
    { name: "ATCHAOUE Philippe", image: "/agents municipaux/inconnu.png" },
    { name: "GBAGUIDI Cossi", image: "/agents municipaux/ca8-gbaguidi_1-1740647458.jpg" }
  ],
  9: [
    { name: "ASSOGBA Comlan Honvi", image: "/agents municipaux/assogba-1740666839.jpg" },
    { name: "DANVIKPENON Constant", image: "/agents municipaux/danvikpenon-constant-9eme-arrondissement-1736261755.jpg" },
    { name: "HOUESSINON Augustin", image: "/agents municipaux/ca9-houessinon-1740666630.jpg" },
    { name: "VIGNISSY Pierrot", image: "/agents municipaux/vignissy-pierrot-1769427774.png" }
  ],
  10: [
    { name: "GNIKPONOU Comlan Yves Christian", image: "/agents municipaux/ca10-gnidokponou-1740667053.jpg" },
    { name: "HOUNNOU Georges Yves Martial", image: "/agents municipaux/inconnu.png" },
    { name: "KANHONOU Monique", image: "/agents municipaux/kanhonou-1740667266.jpg" }
  ],
  11: [
    { name: "ADJAGBONI Gatien", image: "/agents municipaux/gatien-adjagboni-1688319501.jpg" },
    { name: "RAYMOND Georges Ayaovi", image: "/agents municipaux/raymond-georges-ayaovi-1688329621.jpg" }
  ],
  12: [
    { name: "ADINGNI Pipaul", image: "/agents municipaux/adingni-pipaul1-1769424715.png" },
    { name: "AGBEDJEKOU Romulus", image: "/agents municipaux/agbedjekou-romulus1-1769425069.png" },
    { name: "AKINDES Fidèle Samuel Adékambi", image: "/agents municipaux/akindes-fidele-samuel-adekambi2-1769425871.png" },
    { name: "CAKPO Kinkpé Kohomlan Gilbert", image: "/agents municipaux/inconnu.png" },
    { name: "DE SOUZA Rébecca Régina", image: "/agents municipaux/de-souza-rebecca-regina3-1769426288.png" },
    { name: "SEHOUHOUE Paul", image: "/agents municipaux/sehouhoue-paul-1769427086.png" },
    { name: "SEKLOKA Christophe", image: "/agents municipaux/sekloka-christophe-1769427553.png" }
  ],
  13: [
    { name: "BEHANZIN Irène Françoise", image: "/agents municipaux/behanzin-irene-1773756473.jpg" },
    { name: "FOLLY-BEBE Adadé Messan", image: "/agents municipaux/ca13-bebe-1740667555.jpg" },
    { name: "GBENOU Léopold", image: "/agents municipaux/gbenou-1740667746.jpg" },
    { name: "HOUNDELADJI Emile", image: "/agents municipaux/inconnu.png" }
  ]
};

const CONSEIL_SUPERVISION = [
  { isRoleFirst: false, name: "ATROKPO Luc Sètondji", role: "Maire", image: "/agents municipaux/luc-gnacadja-1773755964.jpg" },
  { isRoleFirst: false, name: "BELLO Ariette Marie-Madeleine Rissicatou", role: "Premier Adjoint au Maire", image: "/agents municipaux/bello-arlette-1773756814.jpg" },
  { isRoleFirst: false, name: "ADJAGBONI Gatien", role: "Deuxième Adjoint au Maire", image: "/agents municipaux/gatien-adjagboni-1688319501.jpg" },
  { isRoleFirst: false, name: "BEHANZIN Irène Françoise", role: "Troisième Adjointe au Maire", image: "/agents municipaux/behanzin-irene-1773756473.jpg" },
  { isRoleFirst: true, name: "AHOLOU Jean", role: "Président de la Commission des Affaires Domaniales et Environnementales", image: "/agents municipaux/inconnu.png" },
  { isRoleFirst: true, name: "AGBEDJEKOU Romulus", role: "Président de la Commission des Affaires Economiques et Financières", image: "/agents municipaux/agbedjekou-romulus1-1769425069.png" },
  { isRoleFirst: true, name: "GBENOU Léopold", role: "Président de la Commission des Affaires Sociales Culturelles et Sportives", image: "/agents municipaux/gbenou-1740667746.jpg" },
  { isRoleFirst: true, name: "GNONLONFOUN Denis Maximin", role: "Président de la Commission de la Coopération et des relations avec les Institutions", image: "/agents municipaux/gnonlonfoun-denis-maximin-1688329048.jpg" },
  { isRoleFirst: true, name: "AMOUSOUGA Anges Paterne", role: "Secrétaire Exécutif", image: "/agents municipaux/inconnu.png" },
];

const SECRETARIAT_EXECUTIF = {
  head: { name: "AMOUSOUGA Anges Paterne", role: "Sécrétaire Exécutif" },
  directeurs: [
    { name: "OROU BORO Aboubakari", role: "Directeur des Affaires Administratives Financières" },
    { name: "GAZARD Manet Floriana C", role: "Personne Responsable des Marchés Publics" },
    { name: "TOBOSSI Agossou Olivier", role: "Directeur des Systèmes d'Information" },
    { name: "DEFODJI Sèdami Lydie E", role: "Directeur du Développement Local et de la Planification" },
    { name: "OROU GANI Sabi Gourgui", role: "Directeur des Services Techniques" },
    { name: "DANSOU Comi Serge", role: "Directeur des Affaires Domaniales et Environnementales" },
    { name: "Service", role: "Inspectrice Générale des Services Municipaux" },
    { name: "AKOHA Alexis", role: "Chef de la Cellule Municipale de Contrôle des Marchés Publics" },
    { name: "DOVONOU Hervé", role: "Chef de la Cellule Juridique" },
  ],
  structures: [
    "Secrétariat Administratif Central",
    "Service des Relations avec les Usagers",
    "Service des Transmissions Radio",
    "Secrétariat Particulier",
    "Personnel d'appui"
  ]
};

export default function MunicipalitePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeArrondissement, setActiveArrondissement] = useState(1);
  const [showMayorModal, setShowMayorModal] = useState(false);
  const [cqArrondissement, setCqArrondissement] = useState<number | null>(null);

  return (
    <>
      <PageHero
        label="MAIRIE DE COTONOU"
        title="Municipalité"
        subtitle="Découvrez notre équipe municipale"
        imageSrc="/municipalityback.png"
      />

      <section className="py-8 px-4 sm:px-[100px] lg:px-[150px] bg-white pb-40 lg:pb-64">
        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 border-b border-gray-200 scrollbar-hide">
          {TABS.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${activeTab === i
                  ? "border-[#0B4264] text-[#0B4264]"
                  : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab 0: Le Maire */}
        {activeTab === 0 && (
          <div className="pt-10 space-y-12">

            <div className="flex justify-center -mt-6"> {/* Optional negative margin to snug it up similar to image */}
              <Card className="w-full max-w-sm overflow-visible border-gray-100 shadow-sm rounded-xl">
                <CardContent className="p-8 flex flex-col items-center">
                  <div className="relative w-[180px] h-[180px] rounded-full p-1 border-2 border-[#105F8C] mb-6 shadow-sm flex items-center justify-center">
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-100">
                      <Image
                        src="/agents municipaux/luc-gnacadja-1773755964.jpg"
                        alt="Le Maire"
                        fill
                        className="object-cover object-top cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => setShowMayorModal(true)}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-xl text-[#0B4264] mb-1">Mr Luc GNACADJA</h3>
                    <p className="text-gray-800 text-sm font-medium">Le maire</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0B4264] mb-6">Adjoints au Maire</h3>
              <Card className="border-gray-100 shadow-sm md:shadow-md rounded-xl">
                <CardContent className="p-6 md:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 justify-items-center">
                    {ADJOINTS.map((a, i) => (
                      <div key={i} className="flex flex-col items-center w-full max-w-[280px]">
                        <div className="relative w-full aspect-[4/3] sm:aspect-square md:aspect-[4/3] rounded-xl overflow-hidden border border-[#0B4264]/60 mb-4 bg-gray-200">
                          <Image src={a.image} alt={a.name} fill className="object-cover object-top" />
                        </div>
                        <p className="font-bold text-[#0B4264] text-sm md:text-base text-center leading-snug">
                          {a.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0B4264] mb-6">Le Cabinet du Maire</h3>
              <Card className="border-gray-100 shadow-sm md:shadow-md rounded-xl overflow-hidden py-10 px-4">
                <CardContent className="p-0">
                  <div className="flex flex-col items-center gap-6 md:gap-8">

                    <div className="w-full max-w-[280px]">
                      <div className="border border-[#388bbd] rounded-xl p-5 text-center bg-gray-50/30">
                        <p className="font-bold text-[#0B4264] text-lg mb-2">MEHOU Josué</p>
                        <p className="text-sm text-gray-700">Chef de Cabinet</p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 w-full max-w-4xl">
                      <div className="border border-[#388bbd] rounded-xl p-5 text-center w-full md:w-[240px] bg-gray-50/30">
                        <p className="font-bold text-[#0B4264] text-lg mb-2">Service</p>
                        <p className="text-sm text-gray-700">Secrétariat</p>
                      </div>
                      <div className="border border-[#388bbd] rounded-xl p-5 text-center w-full md:w-[240px] bg-gray-50/30">
                        <p className="font-bold text-[#0B4264] text-lg mb-2">Service</p>
                        <p className="text-sm text-gray-700">Protocole</p>
                      </div>
                      <div className="border border-[#388bbd] rounded-xl p-5 text-center w-full md:w-[240px] bg-gray-50/30">
                        <p className="font-bold text-[#0B4264] text-lg mb-2">Service</p>
                        <p className="text-sm text-gray-700">Chargés de Mission</p>
                      </div>
                    </div>

                    <div className="w-full max-w-[280px]">
                      <div className="border border-[#388bbd] rounded-xl p-5 text-center bg-gray-50/30">
                        <p className="font-bold text-[#0B4264] text-lg mb-2">SOGLO G. Ulrich</p>
                        <p className="text-sm text-gray-700 leading-tight">Directeur de la Police<br />Municipale</p>
                      </div>
                    </div>

                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        )}

        {/* Tab 1: Les CA et Présidents de commission */}
        {activeTab === 1 && (
          <div className="pt-10 space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-[#0B4264] mb-6">
                Les chefs d&apos;Arrondissement (CA)
              </h3>
              <Card className="border-gray-100 shadow-sm md:shadow-md rounded-xl">
                <CardContent className="p-6 md:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 justify-items-center">
                    {CA_MEMBERS.map((m, i) => (
                      <div key={i} className={`flex flex-col items-center w-full max-w-[280px] ${i === 12 ? 'md:col-start-2' : ''}`}>
                        <div className="relative w-full aspect-[4/3] sm:aspect-square md:aspect-[4/3] rounded-xl overflow-hidden border border-[#0B4264]/60 mb-4 bg-gray-200">
                          <Image src={m.image} alt={m.name} fill className="object-cover object-top" />
                        </div>
                        <p className="font-bold text-[#0B4264] text-sm md:text-base text-center leading-snug px-2">
                          {m.name}
                        </p>
                        <p className="text-sm text-gray-800 text-center px-1 mt-1 font-medium">{m.role}</p>
                        <button
                          onClick={() => setCqArrondissement(i + 1)}
                          className="inline-flex items-center gap-1 text-sm font-bold text-[#2d76a3] mt-2 hover:underline"
                        >
                          Les chefs quartiers →
                        </button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0B4264] mb-6">
                Les Présidents de Commission
              </h3>
              <Card className="border-gray-100 shadow-sm md:shadow-md rounded-xl">
                <CardContent className="p-6 md:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 justify-items-center">
                    {COMMISSION_MEMBERS.map((m, i) => (
                      <div key={i} className={`flex flex-col items-center w-full max-w-[280px] ${i === 3 ? 'md:col-start-2' : ''}`}>
                        <div className="relative w-full aspect-[4/3] sm:aspect-square md:aspect-[4/3] rounded-xl overflow-hidden border border-[#0B4264]/60 mb-4 bg-gray-200">
                          <Image src={m.image} alt={m.name} fill className="object-cover object-top" />
                        </div>
                        <p className="text-sm text-[#0B4264] text-center font-bold px-1 my-1 leading-snug max-w-[240px]">
                          {m.role}
                        </p>
                        <p className="font-bold text-[#2d76a3] text-sm md:text-base text-center leading-snug px-2 mt-2">
                          {m.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Tab 2: Conseil de Supervision */}
        {activeTab === 2 && (
          <div className="pt-10">
            <h3 className="text-2xl font-bold text-[#0B4264] mb-6">
              Conseil de Supervision
            </h3>
            <Card className="border-gray-100 shadow-sm md:shadow-md rounded-xl">
              <CardContent className="p-6 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
                  {CONSEIL_SUPERVISION.map((m, i) => {
                    // Force line breaks exactly as in the mockup:
                    // i === 1 (First Adjoint) starts a new line after the Mayor.
                    // i === 8 (Secrétaire Exécutif) starts a new line after the 4th President.
                    let startClass = "";
                    if (i === 1) startClass = "md:col-start-1";
                    if (i === 8) startClass = "md:col-start-1";

                    return (
                      <div key={i} className={`flex flex-col items-center w-full max-w-[280px] mx-auto sm:mx-0 ${startClass}`}>
                        <div className="relative w-full aspect-[4/3] sm:aspect-square md:aspect-[4/3] rounded-xl overflow-hidden border border-[#0B4264]/60 mb-4 bg-gray-200">
                          <Image src={m.image} alt={m.name} fill className="object-cover object-top" />
                        </div>
                        {m.isRoleFirst ? (
                          <>
                            <p className="text-sm text-gray-800 text-center font-bold px-1 my-1 leading-snug">
                              {m.role}
                            </p>
                            <p className="font-bold text-[#2d76a3] text-sm md:text-base text-center leading-snug px-2 mt-auto">
                              {m.name}
                            </p>
                          </>
                        ) : (
                          <>
                            <p className="font-bold text-[#0B4264] text-sm md:text-base text-center leading-snug px-2">
                              {m.name}
                            </p>
                            <p className="text-sm text-gray-800 text-center px-1 mt-1 font-medium">{m.role}</p>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Tab 3: Les Conseillers */}
        {activeTab === 3 && (
          <div className="pt-10 space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-[#0B4264] mb-4">
                Conseil Municipal
              </h3>
              <p className="text-gray-800 text-sm leading-relaxed max-w-5xl">
                Conformément aux textes régissant la décentralisation, le Conseil Municipal de Cotonou est composé de 49 conseillers et présidé
                par le Maire élu en son sein selon la loi n° 97-028 du 15 janvier 1999 portant organisation de l'Administration Territoriale de la
                République du Bénin, conformément à son article 24. Ce conseil se réunit en session ordinaire quatre fois l'an et peut aussi se
                réunir en session extraordinaire toutes les fois que le besoin se fait sentir.
              </p>

              <h4 className="text-xl font-bold text-[#2d76a3] mt-8 mb-4">
                Composition du Conseil municipal de la 4ème mandature
              </h4>
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-bold text-[#0B4264] mb-4">{activeArrondissement}{activeArrondissement === 1 ? 'er' : 'ème'} Arrondissement</h3>

              <Card className="border-gray-100 shadow-sm md:shadow-md rounded-xl p-6 md:p-8 min-h-[400px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                  {CONSEILLERS[activeArrondissement] && CONSEILLERS[activeArrondissement].length > 0 ? (
                    CONSEILLERS[activeArrondissement].map((c, i) => (
                      <div key={i} className="flex flex-col items-center w-full max-w-[280px] mx-auto sm:mx-0">
                        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-[#0B4264] mb-4 bg-gray-200">
                          <Image src={c.image} alt={c.name} fill className="object-cover object-top" />
                        </div>
                        <p className="font-bold text-[#0B4264] text-sm md:text-base text-center leading-snug px-2">
                          {c.name}
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full py-20 text-center text-gray-500 font-medium">
                      Bientôt disponible...
                    </div>
                  )}
                </div>
              </Card>

              {/* Pagination */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-10 w-full justify-start lg:justify-center">
                {Array.from({ length: 13 }, (_, i) => i + 1).map((num) => (
                  <button
                    key={num}
                    onClick={() => setActiveArrondissement(num)}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-sm sm:text-base font-bold transition-colors shrink-0 ${activeArrondissement === num
                        ? "bg-[#0B4264] text-white shadow-md"
                        : "bg-[#e2e8f0] text-gray-800 hover:bg-[#cbd5e1]"
                      }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Tab 4: Secrétariat Exécutif */}
        {activeTab === 4 && (
          <div className="pt-10 space-y-12">

            <div>
              <h3 className="text-2xl font-bold text-[#0B4264] mb-6">Le Sécrétariat Exécutif</h3>
              <div className="w-full max-w-[340px]">
                <div className="border border-[#75a6c4] rounded-2xl p-6 text-center bg-white shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-bold text-[#2d76a3] text-xl mb-3 leading-snug whitespace-pre-line">
                    {SECRETARIAT_EXECUTIF.head.name.replace(' Paterne', '\nPaterne')}
                  </p>
                  <p className="text-[15px] font-medium text-gray-800">{SECRETARIAT_EXECUTIF.head.role}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0B4264] mb-8">
                Les Directeurs des structures administratives et techniques municipales
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {SECRETARIAT_EXECUTIF.directeurs.map((d, i) => (
                  <div key={i} className="border border-[#75a6c4] bg-white rounded-2xl p-6 md:p-8 text-center flex flex-col justify-center min-h-[160px] shadow-sm hover:shadow-md transition-shadow">
                    <p className="font-bold text-[#2d76a3] text-lg leading-snug mb-3">{d.name}</p>
                    <p className="text-sm text-gray-800 font-medium leading-relaxed">{d.role}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0B4264] mb-8">
                Les structures directement rattachées au SE
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {SECRETARIAT_EXECUTIF.structures.map((s, i) => (
                  <div key={i} className="border border-[#75a6c4] bg-white rounded-2xl p-6 text-center flex items-center justify-center min-h-[120px] shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-gray-800 font-medium leading-snug">{s}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </section>

      {/* Mayor Bio Modal */}
      {showMayorModal && <MayorModal onClose={() => setShowMayorModal(false)} />}

      {/* Chefs de Quartier Modal */}
      {cqArrondissement && (
        <CQModal
          arrondissement={cqArrondissement}
          onClose={() => setCqArrondissement(null)}
        />
      )}
    </>
  );
}
