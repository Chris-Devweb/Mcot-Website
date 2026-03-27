"use client";

import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { windowNotification } from "@/components/global-notification";
import {
  Building2,
  Factory,
  GraduationCap,
  Heart,
  Truck,
  Trash2,
  Shield,
  Search,
} from "lucide-react";

const CustomFileIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" />
  </svg>
);

const DOMAINS = [
  {
    icon: CustomFileIcon,
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

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [showDecesModal, setShowDecesModal] = useState(false);
  const [decesView, setDecesView] = useState<'specs' | 'docs'>('specs');

  const searchTermLower = searchTerm.toLowerCase();
  
  // Rule evaluating when to show the Etat Civil expanded section
  const showEtatCivil = 
    selectedDomain === "Etat Civil" || 
    searchTermLower.includes("acte de") || 
    searchTermLower.includes("etat civil");

  return (
    <>
      <PageHero
        title="Nos Services"
        subtitle="Consulter les E-services de notre ville."
        imageSrc="/servicebackground.png"
      />
      <section className="pt-8 lg:pt-12 pb-[180px] lg:pb-[230px] px-4 sm:px-[100px] lg:px-[150px] bg-white min-h-screen">
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Rechercher"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12 rounded-xl bg-gray-50 border-gray-200 text-base"
            />
          </div>
        </div>
        
        {!showEtatCivil && (
          <>
            <p className="text-center text-gray-600 mb-2">Total des services :</p>
            <p className="text-center text-sm text-gray-500 mb-10">
              54 services officiels dont 22 E-services notifiés par des icônes vertes.
            </p>
          </>
        )}

        {showEtatCivil ? (
          <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex justify-center mb-10">
              <h2 className="text-xl lg:text-[22px] font-bold text-black border-b-[2.5px] border-black pb-1.5 inline-block px-1">
                Domaine : Etat Civil
              </h2>
            </div>
            
            <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 max-w-5xl mx-auto">
               
               {/* Card 1 - Acte de Naissance */}
               <Card 
                 className="w-full md:w-[320px] border-gray-300 shadow-sm rounded-xl hover:shadow-md transition-shadow cursor-pointer"
                 onClick={() => window.open('https://eservices.anip.bj/', '_blank')}
               >
                 <CardContent className="p-5 flex items-center gap-5">
                   <div className="w-[52px] h-[52px] rounded-full bg-[#dcfce7] text-[#15803d] flex items-center justify-center shrink-0">
                      <CustomFileIcon className="w-6 h-6" />
                   </div>
                   <div>
                      <h3 className="font-semibold text-black text-[15px] mb-1">Acte de Naissance</h3>
                      <p className="text-gray-600 text-sm">Coût : 1000 fr</p>
                   </div>
                 </CardContent>
               </Card>
               
               {/* Card 2 - Déclaration de décès */}
               <Card
                 className="w-full md:w-[320px] border-gray-300 shadow-sm rounded-xl hover:shadow-md transition-shadow cursor-pointer"
                 onClick={() => setShowDecesModal(true)}
               >
                 <CardContent className="p-5 flex items-center gap-5">
                   <div className="w-[52px] h-[52px] rounded-full bg-[#e2e8f0] text-[#0f4b66] flex items-center justify-center shrink-0">
                      <CustomFileIcon className="w-6 h-6" />
                   </div>
                   <div>
                      <h3 className="font-semibold text-black text-[15px] mb-1">Déclaration de décès</h3>
                      <p className="text-gray-600 text-sm">Coût : 2000 fr</p>
                   </div>
                 </CardContent>
               </Card>
               
               {/* Card 3 - Acte de décès de cujus */}
               <Card className="w-full md:w-[320px] border-gray-300 shadow-sm rounded-xl hover:shadow-md transition-shadow cursor-pointer">
                 <CardContent className="p-5 flex items-center gap-5">
                   <div className="w-[52px] h-[52px] rounded-full bg-[#e2e8f0] text-[#0f4b66] flex items-center justify-center shrink-0">
                      <CustomFileIcon className="w-6 h-6" />
                   </div>
                   <div>
                      <h3 className="font-semibold text-black text-[15px] mb-1">Acte de décès de cujus</h3>
                      <p className="text-gray-600 text-sm">Coût : 2000 fr</p>
                   </div>
                 </CardContent>
               </Card>
               
            </div>
            
            <div className="mt-16 flex justify-center">
               <button 
                 onClick={() => { setSelectedDomain(null); setSearchTerm(""); }}
                 className="text-[15px] font-bold text-[#0B4264] hover:underline transition-colors"
               >
                 ← Retour à tous les domaines
               </button>
            </div>
          </div>
        ) : (
          <>
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
                    <button
                      onClick={() => setSelectedDomain(d.title)}
                      className="inline-flex items-center gap-1 text-sm font-bold text-[#0B4264] hover:underline cursor-pointer"
                    >
                      En savoir plus
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </section>

      {/* ═══ Déclaration de décès Modal ═══ */}
      {showDecesModal && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          onClick={() => { setShowDecesModal(false); setDecesView('specs'); }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-[480px] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-white px-7 pt-7 pb-4 flex items-start justify-between border-b border-gray-100">
              <div className="flex items-center gap-3 flex-1">
                {decesView === 'docs' && (
                  <button
                    onClick={() => setDecesView('specs')}
                    className="text-[#0B4264] hover:underline text-[13px] font-bold whitespace-nowrap"
                  >
                    ← Retour
                  </button>
                )}
                <h2 className="text-[17px] font-extrabold text-black text-center leading-snug flex-1">
                  {decesView === 'specs' ? (
                    <>Documents à fournir<br />et/ou spécifications</>
                  ) : (
                    <>Documents requis</>                  
                  )}
                </h2>
              </div>
              <button
                onClick={() => { setShowDecesModal(false); setDecesView('specs'); }}
                className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors ml-4 shrink-0 mt-1"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="px-7 py-6 text-[14px] text-black leading-relaxed">
              {decesView === 'specs' ? (
                <>
                  <p className="mb-4">Peuvent faire la déclaration de décès :</p>
                  <ul className="space-y-3 mb-5">
                    <li className="flex items-start gap-2">
                      <span className="shrink-0 mt-1">·</span>
                      <span>Les parents du défunt ou toute personne possédant sur son état civil des renseignements appropriés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="shrink-0 mt-1">·</span>
                      <span>Les responsables d&apos;hôpitaux, de maternités, de cliniques, les responsables d&apos;établissements pénitentiaires</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="shrink-0 mt-1">·</span>
                      <span>NB : 10 jours ; 48 heures pour les formations sanitaires et les établissements pénitentiaires</span>
                    </li>
                  </ul>
                  <p className="mb-6">Coût : <strong>2000</strong></p>
                  {/* Documents requis link */}
                  <div className="border-t border-gray-100 pt-5 flex justify-center">
                    <button
                      onClick={() => setDecesView('docs')}
                      className="text-[13px] font-bold text-[#0B4264] underline underline-offset-2 hover:text-[#083050] transition-colors"
                    >
                      Voir les documents requis →
                    </button>
                  </div>
                </>
              ) : (
                <div className="animate-in fade-in duration-200">
                  <p className="text-gray-500 text-center py-8 text-[15px] font-medium">
                    Aucun document requis
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
