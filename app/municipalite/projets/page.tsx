"use client";

import { useState } from "react";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, GraduationCap, Heart } from "lucide-react";
import Link from "next/link";

const THEMATIQUES = [
  {
    icon: Building2,
    title: "Economie Locale",
    desc: "Construction de neuf(s) marchés urbains modernes.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Lancement de la construction de 80 nouvelles salles de classes.",
  },
  {
    icon: Heart,
    title: "Santé",
    desc: "Renforcement des centres de santé et équipements.",
  },
];

const STRATEGIC_OBJECTIVES = [
  {
    id: 1,
    icon: "/building.png",
    title: "Qualité de Vie des Administrés",
    description: "Améliorer la qualité des services publics et l\"accès aux équipements de base.",
  },
  {
    id: 2,
    icon: "/horse.png",
    title: "Infrastructure & Développement",
    description: "Développer les infrastructures urbaines pour une meilleure qualité de vie.",
  },
  {
    id: 3,
    icon: "/throne.png",
    title: "Entrepreneuriat & Dynamisme Économique",
    description: "Soutenir l\"entrepreneuriat et renforcer le dynamisme économique local.",
  },
  {
    id: 4,
    icon: "/fresque.png",
    title: "Modernisation et renforcement de l\"administration",
    description: "Moderniser l\"administration pour une meilleure efficacité et transparence.",
  },
];


export default function ProjetsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <PageHero
        title="Municipalité / Projets"
        subtitle="Découvrez les projets et la vision de l'équipe municipale"
        imageSrc="/partenerbackground.png"
      />

      <section className="py-10 px-4 sm:px-[100px] lg:px-[150px] bg-white">
        <div className="flex gap-2 border-b border-gray-200 pb-2 mb-8">
          <button
            onClick={() => setActiveTab(0)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 0 ? "border-[#0B4264] text-[#0B4264]" : "border-transparent text-gray-500"
            }`}
          >
            Thématiques
          </button>
          <button
            onClick={() => setActiveTab(1)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 1 ? "border-[#0B4264] text-[#0B4264]" : "border-transparent text-gray-500"
            }`}
          >
            Cotonou-Vision2025
          </button>
        </div>

        {activeTab === 0 && (
          <div className="space-y-12">
            {/* Image card */}
            <div className="relative w-full aspect-video max-h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/port.png"
                alt="Projets"
                fill
                className="object-cover"
              />
            </div>

            {/* Feature cards - dark blue section */}
            <div className="bg-[#0B4264] rounded-2xl p-8 lg:p-12 text-white -mx-4 sm:-mx-[100px] lg:-mx-[150px] px-4 sm:px-[100px] lg:px-[150px]">
              <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
                {THEMATIQUES.map((t, i) => (
                  <Card
                    key={i}
                    className="min-w-[280px] max-w-[320px] border-0 bg-white/10 snap-center"
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-[#83CEE9] flex items-center justify-center mb-4">
                        <t.icon className="h-6 w-6 text-[#0B4264]" />
                      </div>
                      <h3 className="font-bold text-lg text-white">{t.title}</h3>
                      <p className="text-sm text-white/90 mt-2">{t.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center gap-4 mt-6">
                <Button size="icon" variant="outline" className="rounded-full border-white text-white hover:bg-white/20">
                  ←
                </Button>
                <Button size="icon" variant="outline" className="rounded-full border-white text-white hover:bg-white/20">
                  →
                </Button>
              </div>
            </div>

            {/* Video section */}
            <div className="bg-[#83CEE9]/30 rounded-2xl p-6 lg:p-8">
              <h2 className="text-xl font-bold text-[#0B4264] mb-6">
                Vidéo de présentation des grandes actions de la Municipalité
              </h2>
              <div className="relative w-full aspect-video max-h-[400px] bg-black rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#E53935] flex items-center justify-center cursor-pointer text-white">
                    <span className="text-4xl pl-1">▶</span>
                  </div>
                </div>
                <div className="absolute top-2 left-2 text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">
                  Mairie de Cotonou | 1er Meeting du Maire...
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <div className="space-y-12">
            <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
              La ville de Cotonou participe au développement de l\"économie numérique en Afrique de l\"Ouest.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[250px] sm:h-[350px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/aimf.png"
                  alt="Vue aérienne de Cotonou"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-[#0B4264] mb-4">
                  La ville de Cotonou, membre de l\"AIMF
                </h3>
                <p className="text-gray-600 mb-6">
                  L\"Association Internationale des Maires Francophones (AIMF) est un réseau de villes qui partagent
                  une langue commune et des défis similaires. Cotonou, en tant que membre actif, bénéficie de programmes
                  de coopération, d\"échanges d\"expériences et de soutien technique pour renforcer ses capacités
                  administratives et améliorer la qualité de vie de ses citoyens.
                </p>
                <Button asChild className="bg-[#0B4264] hover:bg-[#072a40]">
                  <Link href="#">En savoir plus sur l\"AIMF →</Link>
                </Button>
              </div>
            </div>

            <div className="bg-[#0B4264] rounded-2xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
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
                <Button className="bg-[#FDBC2F] hover:bg-[#e0a828] text-[#0B4264] gap-2">
                  Télécharger le document
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                  </svg>
                </Button>
              </Link>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#0B4264] text-center mb-10">
              Axes et objectifs stratégiques
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
              Découvrez les axes et objectifs stratégiques de la municipalité
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {STRATEGIC_OBJECTIVES.map((o) => (
                <Card key={o.id} className="border-gray-200 overflow-hidden">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Image src={o.icon} alt={o.title} width={48} height={48} className="mb-4" />
                    <h3 className="font-bold text-[#0B4264] mb-2">{o.title}</h3>
                    <p className="text-sm text-gray-600">{o.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
