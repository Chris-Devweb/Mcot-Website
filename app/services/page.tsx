import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  FileText,
  Building2,
  Factory,
  GraduationCap,
  Heart,
  Truck,
  Trash2,
  Shield,
  Search,
} from "lucide-react";

const DOMAINS = [
  {
    icon: FileText,
    title: "Etat Civil",
    desc: "Acte de Naissance, mariage, décès et autres documents officiels",
  },
  {
    icon: Building2,
    title: "Urbanisme",
    desc: "Permis de construire, autorisation d'occupation et plans d'urbanisme",
  },
  {
    icon: Factory,
    title: "Entreprise",
    desc: "Création d'entreprise, ressources commerciales et accompagnement d'un business",
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Écoles publiques, programmes éducatifs et bureaux d'études",
  },
  {
    icon: Heart,
    title: "Santé",
    desc: "Centres de santé, pharmacies, réductions",
  },
  {
    icon: Truck,
    title: "Transport",
    desc: "Transport public, circulation",
  },
  {
    icon: Trash2,
    title: "Environnement",
    desc: "Collecte des déchets, assainissement mensuel",
  },
  {
    icon: Shield,
    title: "Sécurité",
    desc: "Police municipale, arbitrage, sécurité publique",
  },
];

export const metadata = {
  title: "Nos Services - Mairie de Cotonou",
  description: "Consulter les E-services de notre ville.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Nos Services"
        subtitle="Consulter les E-services de notre ville."
        imageSrc="/servicebackground.png"
      />
      <section className="pt-8 lg:pt-12 pb-[180px] lg:pb-[230px] px-4 sm:px-[100px] lg:px-[150px] bg-white">
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Rechercher"
              className="pl-12 h-12 rounded-xl bg-gray-50 border-gray-200 text-base"
            />
          </div>
        </div>
        <p className="text-center text-gray-600 mb-2">Total des services :</p>
        <p className="text-center text-sm text-gray-500 mb-10">
          54 services officiels dont 22 E-services notifiés par des icônes vertes.
        </p>

        <h2 className="text-2xl lg:text-3xl font-bold text-[#0B4264] mb-8">
          Nos services selon les domaines
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {DOMAINS.map((d) => (
            <Card
              key={d.title}
              className="border-gray-200 hover:border-[#83CEE9] hover:shadow-lg transition-all overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#0B4264]/10 flex items-center justify-center mb-4">
                  <d.icon className="h-6 w-6 text-[#0B4264]" />
                </div>
                <h3 className="font-bold text-[#0B4264] text-lg mb-2">{d.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{d.desc}</p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-sm font-bold text-[#0B4264] hover:underline"
                >
                  En savoir plus
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
