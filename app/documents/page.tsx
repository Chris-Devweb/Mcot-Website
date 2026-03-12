"use client";

import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Search, Filter, FileText, Download, BookOpen } from "lucide-react";

const TABS = [
  "Administration de la ville de Cotonou",
  "Administration",
  "Textes et lois",
  "Autres",
];

const DOCS = [
  {
    id: 1,
    date: "Publié le dim 20/08/23 - 12:00",
    size: "2Mo",
    reads: 25,
    title:
      "Municipalité de Cotonou: communiqué Le Plan de Contingence Communal (PCC) de Cotonou est un outil de planification, du mobilisation des ressources et d'aide à la décision à l'usage de l'autorité municipale, président...",
  },
  {
    id: 2,
    date: "Publié le 15/08/23",
    size: "1.5Mo",
    reads: 18,
    title: "Règlement intérieur du Conseil municipal de Cotonou",
  },
];

export default function DocumentsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [search, setSearch] = useState("");

  return (
    <>
      <PageHero
        title="Documents officiels, Textes et Lois"
        subtitle="Consulter les e-documents officiels de votre commune"
      />
      <section className="py-8 lg:py-12 px-4 sm:px-[100px] lg:px-[150px] bg-white">
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mb-6">
          <Button
            size="icon"
            variant="outline"
            className="rounded-full bg-[#0B4264] text-white border-[#0B4264] shrink-0"
            aria-label="Filtre"
          >
            <Filter className="h-4 w-4" />
          </Button>
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Rechercher"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 rounded-lg bg-gray-50 border-gray-200"
            />
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-6">
          Total des documents: <strong>22 documents officiels</strong>
        </p>

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
          {TABS.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === i
                  ? "bg-[#FDBC2F] text-[#0B4264]"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <p className="text-sm text-gray-500 mb-4">5 documents dans cet onglet</p>

        <div className="space-y-4">
          {DOCS.map((doc) => (
            <Card key={doc.id} className="overflow-hidden border-gray-200">
              <CardHeader className="pb-2">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500">
                  <span>{doc.date}</span>
                  <span>Taille: {doc.size}</span>
                  <span>Lectures: {doc.reads}</span>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-[#0B4264] font-medium text-sm leading-snug flex-1">
                  {doc.title}
                </p>
                <div className="flex gap-2 shrink-0">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#0B4264] text-[#0B4264]"
                  >
                    <BookOpen className="h-4 w-4 mr-1" />
                    Lire
                  </Button>
                  <Button size="sm" className="bg-[#0B4264] hover:bg-[#072a40]">
                    <Download className="h-4 w-4 mr-1" />
                    Télécharger
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Nav arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <Button size="icon" variant="outline" className="rounded-full">
            ←
          </Button>
          <Button size="icon" className="rounded-full bg-[#0B4264] hover:bg-[#072a40]">
            →
          </Button>
        </div>
      </section>

      {/* Avis et Communiqués */}
      <section className="py-12 px-4 sm:px-[100px] lg:px-[150px] bg-[#F5F8FB]">
        <h2 className="text-2xl font-bold text-[#0B4264] mb-6">Avis et Communiqués</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="overflow-hidden">
              <div className="h-36 bg-gray-200" />
              <CardContent className="p-4">
                <span className="text-xs text-gray-500">Le XX/XX</span>
                <h3 className="font-bold text-[#0B4264] mt-1 line-clamp-2">
                  Municipalité de Cotonou: communiqué sur le payement de la taxe d&apos;exploitation
                </h3>
                <span className="text-xs font-bold text-[#83CEE9] mt-2 inline-block">Voir Plus</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Radio */}
      <section className="py-8 px-4 sm:px-[100px] lg:px-[150px] bg-white">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#E53935] flex items-center justify-center text-white text-sm">📻</div>
          <h2 className="text-xl font-bold text-[#0B4264]">Radio officielle de Cotonou (94.3)</h2>
        </div>
        <Button variant="outline" className="mt-4 border-[#0B4264] text-[#0B4264] hover:bg-[#0B4264] hover:text-white">
          Ecouter la radio →
        </Button>
      </section>

      {/* Pagination */}
      <section className="py-6 px-4 flex justify-center gap-2">
        <Button size="icon" variant="outline" className="rounded-full">←</Button>
        <Button size="icon" className="rounded-full bg-[#0B4264] w-10 h-10">1</Button>
        <Button size="icon" variant="outline" className="rounded-full w-10 h-10">2</Button>
        <Button size="icon" variant="outline" className="rounded-full w-10 h-10">3</Button>
        <Button size="icon" variant="outline" className="rounded-full">→</Button>
      </section>
    </>
  );
}
