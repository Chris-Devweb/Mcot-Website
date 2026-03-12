"use client";

import { useState } from "react";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, GraduationCap, Heart } from "lucide-react";

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

export default function ProjetsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <PageHero
        title="Municipalité / Projets"
        subtitle="Découvrez les projets et la vision de l'équipe municipale"
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

        {/* Image card */}
        <div className="relative w-full aspect-video max-h-[400px] rounded-2xl overflow-hidden mb-10">
          <Image
            src="/backsection1.png"
            alt="Projets"
            fill
            className="object-cover"
          />
        </div>

        {/* Feature cards - dark blue section */}
        <section className="bg-[#0B4264] rounded-2xl p-8 lg:p-12 text-white -mx-4 sm:-mx-[100px] lg:-mx-[150px] px-4 sm:px-[100px] lg:px-[150px]">
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
        </section>

        {/* Video section */}
        <section className="py-12 px-4 sm:px-[100px] lg:px-[150px]">
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
        </section>
      </section>
    </>
  );
}
