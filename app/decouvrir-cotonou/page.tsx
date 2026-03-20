import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, FileText, Camera, Building2 } from "lucide-react";

const STATS = [
  { value: "832 km²", label: "Superficie du Bénin" },
  { value: "16%", label: "De la superficie du Bénin" },
  { value: "2 000 000", label: "Nombre d\"habitants" },
];

const OBJECTIVES = [
  {
    icon: FileText,
    title: "Contexte Stratégique",
    desc:
      "La ville de Cotonou domine le paysage urbain du Bénin en raison de son importance démographique et économique et du rôle qu\"elle joue dans le réseau urbain ouest-africain. Cotonou est la seule ville béninoise à avoir atteint un million d\"habitants...",
  },
  {
    icon: Building2,
    title: "Situation Économique",
    desc:
      "La Mairie de Cotonou s\"engage à offrir des services de qualité pour améliorer le cadre de vie de tous les citoyens. Découvrez les opportunités de la ville de Cotonou.",
  },
  {
    icon: Camera,
    title: "Potentialités",
    desc:
      "Le Maire et son Conseil municipal sur le chantier du futur Hôtel de Ville...",
  },
  {
    icon: Play,
    title: "Quelques lieux touristiques à Cotonou",
    desc: "Découvrez les merveilles de Cotonou.",
  },
];

export const metadata = {
  title: "Découvrir Cotonou - Mairie de Cotonou",
  description: "Découvrez les opportunités de la ville de Cotonou.",
};

export default function DecouvrirCotonouPage() {
  return (
    <>
      <PageHero
        label="Mairie de Cotonou / Présente"
        title="Découvrez la ville de Cotonou"
        subtitle="Découvrez les opportunités de la ville de Cotonou"
        imageSrc="/discoverbackground.png"
      />

      <section className="py-12 lg:py-16 px-4 sm:px-[100px] lg:px-[150px] bg-white">
        {/* Contexte Stratégique */}
        <h2 className="text-2xl lg:text-3xl font-bold text-[#0B4264] text-center mb-6">
          Contexte Stratégique
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
          La ville de Cotonou domine le paysage urbain du Bénin en raison de son importance démographique et économique et du rôle
          qu'elle joue dans le réseau urbain ouest-africain. Cotonou est la seule ville béninoise à avoir atteint un million d'habitants
          en 2013 et assure à elle seule 60% des transactions commerciales et 90% des activités du pays. Cotonou occupe donc une position
          centrale dans la conurbation qu'elle forme avec Abomey-Calavi, Sèmè-Podji, Ouidah, Tori-Bossito et Zè. Ces villes connaissent
          toutes des dynamiques urbaines très importantes qui en font la plus petite en surface. Avec les Communes de Sèmè-Kpodji et
          Abomey-Calavi, Cotonou forme une grande métropole dont :
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl lg:text-4xl font-bold text-[#0B4264]">{s.value}</p>
              <p className="text-sm text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="relative w-full max-w-2xl mx-auto aspect-[4/3] rounded-2xl overflow-hidden mb-12">
          <Image
            src="/cotonouback.png"
            alt="Ville de Cotonou"
            fill
            className="object-cover"
          />
        </div>

        <p className="text-gray-600 max-w-3xl mx-auto text-center mb-16">
          Ces dernières années, l'environnement socioéconomique de Cotonou a connu d'importantes évolutions qui ont permis
          l'émergence de nouvelles dynamiques urbaines, notamment avec l'accroissement démographique, l'extension spatiale,
          le développement des infrastructures et la diversification des activités économiques. Cependant, cette croissance
          s'accompagne de défis majeurs tels que la gestion des déchets, l'accès aux services de base, la sécurité urbaine
          et la planification urbaine. Pour y faire face, la Mairie de Cotonou met en œuvre des stratégies de développement
          durable et inclusif, visant à améliorer la qualité de vie des citoyens et à renforcer l'attractivité de la ville.
        </p>

        {/* Nos objectifs et documents à télécharger */}
        <h2 className="text-2xl lg:text-3xl font-bold text-[#0B4264] text-center mb-10">
          Axes et objectifs stratégiques
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
          Découvrez les axes et objectifs stratégiques de la municipalité
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {OBJECTIVES.map((o) => (
            <Card key={o.title} className="border-gray-200 overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#0B4264] flex items-center justify-center shrink-0 mb-4">
                  <o.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0B4264] mb-2">{o.title}</h3>
                  <p className="text-sm text-gray-600">{o.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* PDF block */}
        <div className="bg-[#83CEE9] rounded-2xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-16 h-20 bg-[#E53935] rounded flex items-center justify-center text-white text-4xl">
              PDF
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Cotonou demain - Objectifs stratégiques de la ville de Cotonou</h3>
              <p className="text-white/90 text-sm mt-1">
                Découvrez les orientations stratégiques de la ville de Cotonou
              </p>
            </div>
          </div>
          <Link href="/documents">
            <Button className="bg-[#0B4264] hover:bg-[#072a40] text-white gap-2">
              Télécharger le document
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
              </svg>
            </Button>
          </Link>
        </div>

        {/* Quels lieux touristiques */}
        <section className="py-12 lg:py-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#0B4264] text-center mb-10">
            Quelques lieux touristiques à Cotonou
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden group">
                <Image
                  src={`/routedespeches.png`}
                  alt="Lieu touristique"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white text-lg font-bold">
                  La route des pêches
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
