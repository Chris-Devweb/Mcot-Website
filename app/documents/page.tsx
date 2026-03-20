"use client";

import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Search, Filter, FileText, Download, BookOpen } from "lucide-react";
import { NewsCard } from "@/components/news-card";

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
        imageSrc="/documentbackground.png"
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

      {/* Section: Avis et Communiqués */}
      <section className="py-12 lg:pt-16 pb-[180px] lg:pb-[230px] px-4 sm:px-[100px] lg:px-[150px] bg-[#F5F8FB]">
        <div className="mb-8">
          <h2 className="text-[26px] lg:text-[30px] font-bold text-[#0B4264]">Avis et Communiqués</h2>
          <p className="text-[#0B4264] text-[15px] font-semibold mt-1">Presse officielle</p>
        </div>

        {/* 6 Avis Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <NewsCard
              key={id}
              date="10/07/25"
              title="Municipalité de Cotonou: communiqué sur le paiement de la taxe d'exploitation"
              excerpt="A la tête d'une délégation municipale composée de la troisième adjointe au maire Irène Françoise BEHANZIN, ..."
              imageSrc="/doc.png"
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2">
          <Button size="icon" variant="outline" className="rounded-full bg-white border-transparent text-[#0B4264] hover:bg-[#0B4264] hover:text-white transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </Button>
          <Button size="icon" className="rounded-full bg-[#E5E9EC] text-[#0B4264] hover:bg-[#0B4264] hover:text-white w-10 h-10 transition-colors">1</Button>
          <Button size="icon" className="rounded-full bg-[#E5E9EC] text-[#0B4264] hover:bg-[#0B4264] hover:text-white w-10 h-10 transition-colors">2</Button>
          <Button size="icon" className="rounded-full bg-[#E5E9EC] text-[#0B4264] hover:bg-[#0B4264] hover:text-white w-10 h-10 transition-colors">3</Button>
          <Button size="icon" className="rounded-full bg-[#E5E9EC] text-[#0B4264] hover:bg-[#0B4264] hover:text-white w-10 h-10 transition-colors">...</Button>
          <Button size="icon" className="rounded-full bg-[#E5E9EC] text-[#0B4264] hover:bg-[#0B4264] hover:text-white w-10 h-10 transition-colors">10</Button>
          <Button size="icon" className="rounded-full bg-[#0B4264] text-white hover:bg-[#072a40] w-10 h-10 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </Button>
        </div>
      </section>
    </>
  );
}
