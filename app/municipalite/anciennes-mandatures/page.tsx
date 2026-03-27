"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { windowNotification } from "@/components/global-notification";

const MANDATURES = [
  { id: 4, label: "4ème Mandature", years: "2020 – 2026", mayor: "Mr Luc Sètondji ATROKPO" },
  { id: 3, label: "3ème Mandature", years: "2015 – 2020", mayor: "Mr Léhady SOGLO" },
];

const SUB_TABS = [
  "Le Maire",
  "Les CA et les Présidents de commission",
  "Le Conseil de Supervision",
  "Les Conseillers",
  "Historique des postes"
];

export default function AnciennesMandaturesPage() {
  const [selectedMandature, setSelectedMandature] = useState(MANDATURES[0]);
  const [activeSubTab, setActiveSubTab] = useState(0);

  return (
    <>
      <PageHero
        label="MAIRIE DE COTONOU"
        title="Anciennes Mandatures"
        subtitle="Consultez les archives de notre gouvernance municipale"
        imageSrc="/municipalityback.png"
      />

      <section className="py-12 px-4 sm:px-[100px] lg:px-[150px] bg-white pb-40">
        
        {/* Mandature Selector (Top Tabs like in capture) */}
        <div className="flex gap-4 mb-0 overflow-x-auto scrollbar-hide">
          {MANDATURES.map((m) => (
            <div key={m.id} className="relative group shrink-0">
               <button
                onClick={() => setSelectedMandature(m)}
                className={`flex flex-col items-center justify-center px-8 py-3 rounded-t-lg transition-all duration-300 min-w-[180px] ${
                  selectedMandature.id === m.id 
                  ? "bg-[#0B4264] text-white" 
                  : "bg-gray-100 text-[#0B4264] hover:bg-gray-200"
                }`}
              >
                <span className="font-bold text-[15px]">{m.label}</span>
                <span className="text-[12px] opacity-80">{m.years}</span>
              </button>
              {selectedMandature.id === m.id && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[#0B4264] z-20"></div>
              )}
            </div>
          ))}
        </div>

        {/* Sub Tabs Row (Gray bar like in capture) */}
        <div className="bg-[#EDEDED] p-1 flex overflow-x-auto scrollbar-hide border-t border-gray-100">
           {SUB_TABS.map((tab, i) => (
             <button
               key={i}
               onClick={() => {
                 if (tab === "Historique des postes") {
                   windowNotification.show({
                     title: "Information",
                     description: "L'historique des postes n'est pas encore disponible.",
                     duration: 3000
                   });
                 } else {
                   setActiveSubTab(i);
                 }
               }}
               className={`px-6 py-3 text-[13px] font-bold whitespace-nowrap transition-all flex-1 min-w-[200px] border-r border-gray-300 last:border-r-0 ${
                 activeSubTab === i && tab !== "Historique des postes"
                 ? "bg-[#0B4264] text-white" 
                 : "bg-white text-[#555] hover:text-[#0B4264]"
               }`}
             >
               {tab}
             </button>
           ))}
        </div>

        {/* Content Area */}
        <div className="mt-12">
          {activeSubTab === 0 && (
            <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-2xl font-bold text-[#0B4264] mb-10">Maire de la {selectedMandature.label}</h3>
              <Card className="w-full max-w-sm overflow-hidden border-gray-100 shadow-xl rounded-2xl bg-[#F8FAFC]">
                <CardContent className="p-10 flex flex-col items-center">
                  <div className="relative w-[200px] h-[200px] rounded-full p-1.5 border-4 border-[#0B4264] mb-8 shadow-inner overflow-hidden">
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-200">
                      <Image
                        src="/agents municipaux/inconnu.png"
                        alt={selectedMandature.mayor}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-black text-xl text-[#0B4264] mb-2 uppercase tracking-tight">{selectedMandature.mayor}</h3>
                    <div className="inline-block px-4 py-1.5 bg-[#0B4264]/10 rounded-full">
                      <p className="text-[#0B4264] text-[13px] font-bold">Maire de Cotonou</p>
                    </div>
                    <p className="mt-4 text-gray-500 text-[12px] font-medium italic">Mandature : {selectedMandature.years}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Back to current button */}
              <Link href="/municipalite" className="mt-16">
                 <Button variant="outline" className="border-[#0B4264] text-[#0B4264] hover:bg-[#0B4264] hover:text-white font-bold px-8 h-12 shadow-sm">
                   ← Voir la mandature actuelle
                 </Button>
              </Link>
            </div>
          )}

          {activeSubTab > 0 && activeSubTab < 4 && (
             <div className="py-24 text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                   <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0B4264" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/>
                   </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0B4264] mb-2">Données en cours d'archivage</h3>
                <p className="text-gray-500 max-w-md mx-auto">Les listes détaillées des conseillers et commissions pour les mandatures précédentes sont en cours de numérisation.</p>
             </div>
          )}
        </div>
      </section>
    </>
  );
}
