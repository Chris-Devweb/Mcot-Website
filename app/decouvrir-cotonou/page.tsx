import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, FileText, Camera, Building2 } from "lucide-react";

const STATS = [
  { value: "832 km²", label: "Superficie de la commune" },
  { value: "16%", label: "De la superficie du Benin" },
  { value: "2 000 000", label: "Nombre d'habitants" },
];

const OBJECTIVES = [
  {
    icon: Play,
    title: "Guide de la construction",
    desc: "Document explicatif des règles et démarches pour construire à Cotonou.",
  },
  {
    icon: FileText,
    title: "Formulaire d'enregistrement des entreprises",
    desc: "Formulaire officiel pour l'enregistrement des entreprises auprès de la mairie.",
  },
  {
    icon: Camera,
    title: "Réglementation urbanistique",
    desc: "Textes et règles d'urbanisme en vigueur sur le territoire communal.",
  },
  {
    icon: Building2,
    title: "Charte graphique et identité visuelle",
    desc: "Document de référence pour l'utilisation du logo et des couleurs de la ville.",
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
      />

      <section className="py-12 lg:py-16 px-4 sm:px-[100px] lg:px-[150px] bg-white">
        <h2 className="text-2xl lg:text-3xl font-bold text-[#0B4264] text-center mb-6">
          Commune de Cotonou
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
          La commune de Cotonou est la capitale économique du Bénin. Elle s&apos;étend sur un territoire
          dynamique où se mêlent activités commerciales, culturelles et administratives. Cotonou
          constitue un pôle d&apos;attraction majeur pour les investissements et le développement régional.
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
            src="/backsection1.png"
            alt="Ville de Cotonou"
            fill
            className="object-cover"
          />
        </div>

        <p className="text-gray-600 max-w-3xl mx-auto text-center mb-16">
          La ville offre un cadre de vie en constante amélioration, avec des infrastructures
          modernisées et des services publics renforcés. Les projets d&apos;aménagement et de
          développement durable y tiennent une place centrale pour le bien-être des citoyens.
        </p>

        <h2 className="text-2xl lg:text-3xl font-bold text-[#0B4264] text-center mb-10">
          Nos objectifs et documents à télécharger
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {OBJECTIVES.map((o) => (
            <Card key={o.title} className="border-gray-200 overflow-hidden">
              <CardContent className="p-6 flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0B4264] flex items-center justify-center shrink-0">
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
              <h3 className="text-xl font-bold text-white">RÈGLEMENT D&apos;URBANISME</h3>
              <p className="text-white/90 text-sm mt-1">
                Découvrez les règlements d&apos;urbanisme de la ville de Cotonou
              </p>
            </div>
          </div>
          <Link href="/documents">
            <Button className="bg-[#0B4264] hover:bg-[#072a40] text-white gap-2">
              Voir le règlement
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
              </svg>
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
