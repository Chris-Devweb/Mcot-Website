"use client";

import { useState } from "react";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const TABS = [
  "Le Maire",
  "Les CA et les Présidents de commission",
  "Le Conseil de Supervision",
  "Les Conseillers",
  "Le Secrétariat Exécutif",
];

const ADJOINTS = [
  { name: "AHOUANDJINOU Randyx R.", role: "1er Adjoint au Maire", image: "/agents municipaux/randix-ahoundjinou-1688319485.jpg" },
  { name: "ADJAGBONI Gatien", role: "2ème Adjoint", image: "/agents municipaux/gatien-adjagboni-1688319501.jpg" },
  { name: "BEHANZIN Irène Françoise", role: "3ème Adjointe", image: "/agents municipaux/behanzin-irene-1773756473.jpg" },
];

const CABINET = [
  { name: "MEHOU Josué", role: "Chef de Cabinet" },
  { name: "Service", role: "Secrétaire" },
];

const CA_MEMBERS = [
  { name: "BELLO Ariette Marie-Madeleine Rissicatou", role: "Chef Du 1er Arrondissement" },
  { name: "SOHOU Djidjoho Alexandre Casimir", role: "Chef du 2ème Arrondissement" },
];

const CONSEIL = [
  { name: "Mr ATROKPO Luc Sètondji", role: "Le maire" },
  { name: "AHOUANDJINOU Randyx R.", role: "1er Adjoint au Maire" },
  { name: "ADJAGBONI Catien", role: "2ème Adjoint" },
];

const SECRETARIAT = [
  { name: "AMOUSSOUGA Anges", name2: "Paterne", role: "Secrétariat Exécutif" },
];

const DIRECTEURS = [
  { name: "OROU BORO", name2: "Aboubakari", role: "Directeur des Affaires Administratives et Financières" },
  { name: "GAZARD Manet", name2: "Floriana C", role: "Personne Responsable des Marchés Publics" },
];

const STRUCTURES = [
  { name: "Sécrétariat", name2: "Particulier" },
  { name: "Sécrétariat", name2: "Administratif", name3: "Central" },
];

export default function MunicipalitePage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <PageHero
        label="MAIRIE DE COTONOU"
        title="Municipalité"
        subtitle="Découvrez notre équipe municipale"
        imageSrc="/municipalityback.png"
      />

      <section className="py-8 px-4 sm:px-[100px] lg:px-[150px] bg-white">
        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 border-b border-gray-200 scrollbar-hide">
          {TABS.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === i
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
            <div className="flex justify-center">
              <Card className="w-full max-w-sm overflow-hidden border-gray-200">
                <CardContent className="p-0">
                  <div className="relative w-full aspect-square max-w-[280px] mx-auto">
                    <Image
                      src="/agents municipaux/luc-gnacadja-1773755964.jpg"
                      alt="Le Maire"
                      fill
                      className="object-cover rounded-t-2xl cursor-pointer hover:opacity-90 transition-opacity"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-bold text-lg text-[#0B4264]">Mr ATROKPO Luc Sètondji</h3>
                    <p className="text-gray-500 text-sm mt-1">Le maire</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0B4264] mb-6">Adjoints au Maire</h3>
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
                {ADJOINTS.map((a, i) => (
                  <Card
                    key={i}
                    className="min-w-[200px] sm:min-w-[240px] overflow-hidden border-gray-200 snap-center"
                  >
                    <div className="relative w-full aspect-square">
                      <Image src={a.image} alt={a.name} fill className="object-cover" />
                    </div>
                    <CardContent className="p-4">
                      <p className="font-bold text-[#0B4264] text-sm">{a.name}</p>
                      <p className="text-xs text-gray-500">{a.role}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0B4264] mb-6">Cabinet du Maire</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CABINET.map((c, i) => (
                  <Card key={i} className="border-gray-200 bg-gray-50">
                    <CardContent className="p-6">
                      <p className="font-bold text-[#0B4264]">{c.name}</p>
                      <p className="text-sm text-gray-500">{c.role}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 1: Les CA et Présidents de commission */}
        {activeTab === 1 && (
          <div className="pt-10">
            <h3 className="text-xl font-bold text-[#0B4264] mb-6">
              Les chefs d&apos;arrondissements (CA)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CA_MEMBERS.map((m, i) => (
                <Card key={i} className="border-gray-200 overflow-hidden">
                  <div className="relative w-full aspect-square max-h-[200px]">
                    <Image src="/actu1.png" alt={m.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <p className="font-bold text-[#0B4264]">{m.name}</p>
                    <p className="text-sm text-gray-500">{m.role}</p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-sm font-bold text-[#0B4264] mt-2 hover:underline"
                    >
                      Les chefs quartiers
                      <span>→</span>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Conseil de Supervision */}
        {activeTab === 2 && (
          <div className="pt-10">
            <h3 className="text-xl font-bold text-[#0B4264] mb-6 underline">
              Conseil de Supervision
            </h3>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {CONSEIL.map((c, i) => (
                <Card key={i} className="min-w-[180px] overflow-hidden border-gray-200">
                  <div className="relative w-full aspect-square">
                    <Image src="/actu1.png" alt={c.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-3 text-center">
                    <p className="font-bold text-[#0B4264] text-sm">{c.name}</p>
                    <p className="text-xs text-gray-500">{c.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Les Conseillers */}
        {activeTab === 3 && (
          <div className="pt-10 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[#0B4264] mb-4 underline">
                Conseil Municipal
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">
                Le Conseil municipal est composé de 49 conseillers, présidé par le Maire élu. Il
                se réunit en session ordinaire quatre fois par an et peut tenir des sessions
                extraordinaires selon les besoins (réf. loi n° 97-078 du 15 janvier 1999).
              </p>
              <a
                href="#"
                className="inline-block mt-3 text-sm font-bold text-[#0B4264] underline"
              >
                Composition du Conseil municipal de la 4ème mandature
              </a>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0B4264] mb-4">1er Arrondissement</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CONSEIL.slice(0, 2).map((c, i) => (
                  <Card key={i} className="border-gray-200 overflow-hidden flex flex-row">
                    <div className="relative w-24 h-24 shrink-0">
                      <Image src="/actu1.png" alt={c.name} fill className="object-cover" />
                    </div>
                    <CardContent className="p-4 flex flex-col justify-center">
                      <p className="font-bold text-[#0B4264] text-sm">{c.name}</p>
                      <p className="text-xs text-gray-500">{c.role}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-2">
              <Button size="icon" variant="outline" className="rounded-full">←</Button>
              <Button size="icon" className="rounded-full bg-[#0B4264]">→</Button>
            </div>
          </div>
        )}

        {/* Tab 4: Secrétariat Exécutif */}
        {activeTab === 4 && (
          <div className="pt-10 space-y-10">
            <div>
              <h3 className="text-xl font-bold text-[#0B4264] mb-4 underline">
                Le Secrétariat Exécutif
              </h3>
              <Card className="border-gray-200 bg-gray-50 max-w-md">
                <CardContent className="p-6">
                  <p className="font-bold text-[#0B4264]">{SECRETARIAT[0].name} {SECRETARIAT[0].name2}</p>
                  <p className="text-sm text-gray-500">{SECRETARIAT[0].role}</p>
                </CardContent>
              </Card>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0B4264] mb-4">
                Les Directeurs des structures administratives et techniques municipales
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {DIRECTEURS.map((d, i) => (
                  <Card key={i} className="border-gray-200 bg-gray-50">
                    <CardContent className="p-6">
                      <p className="font-bold text-[#0B4264]">{d.name} {d.name2}</p>
                      <p className="text-sm text-gray-500 mt-1">{d.role}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0B4264] mb-4">
                Les structures directement rattachées au SE
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {STRUCTURES.map((s, i) => (
                  <Card key={i} className="border-gray-200 bg-gray-50">
                    <CardContent className="p-6">
                      <p className="font-bold text-[#0B4264]">{s.name}</p>
                      <p className="text-sm text-gray-500">{s.name2} {s.name3}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
