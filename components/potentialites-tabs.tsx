"use client";

import { useState } from "react";

const FORCES = [
  "Existence du marché international Dantokpa, des marchés secondaires et des supérettes, boutiques et magasins de stockage.",
  "Forte demande des produits et services.",
  "Possibilité du commerce de proximité et facilité d'accès aux produits de premières nécessités.",
  "Existence de plusieurs corps de métiers.",
  "Existence de mécanismes d'appui pour la formation et le perfectionnement des artisans.",
  "Proximité des villes à grandes potentialités touristiques.",
  "Forte fréquentation des touristes.",
  "Disponibilité et bonne répartition géographique des hôtels et motels de différents standings.",
];

const OPPORTUNITES = [
  "La mise en œuvre du PAG",
  "Disponibilité d'espace pouvant abriter les marchés secondaires",
  "Cotonou : centre d'affaires et densité de la population",
  "Proximité du Nigéria qui est un grand marché de consommation.",
];

export function PotentialitesTabs() {
  const [activeTab, setActiveTab] = useState<"forces" | "opportunites">("forces");

  const currentList = activeTab === "forces" ? FORCES : OPPORTUNITES;

  return (
    <div className="bg-[#FEFDFD] rounded-[16px] shadow-[0_15px_50px_rgba(0,0,0,0.06)] w-full max-w-5xl mx-auto flex flex-col md:flex-row overflow-hidden min-h-[350px]">
      {/* Left Sidebar for Tabs */}
      <div className="w-full md:w-[260px] flex flex-row md:flex-col pt-6 md:py-12 md:pl-[60px] pr-0 gap-2 px-6 shrink-0 relative z-10">
        <button
          onClick={() => setActiveTab("forces")}
          className={`py-[10px] px-5 text-left font-semibold text-[15px] transition-colors w-[150px] md:w-full max-w-[160px] ${
            activeTab === "forces"
              ? "bg-[#0B4264] text-white shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
              : "bg-[#E6D4D1] text-[#0B4264] hover:bg-[#d8c5c2]"
          }`}
        >
          Forces
        </button>
        <button
          onClick={() => setActiveTab("opportunites")}
          className={`py-[10px] px-5 text-left font-semibold text-[15px] transition-colors w-[150px] md:w-full max-w-[160px] ${
            activeTab === "opportunites"
              ? "bg-[#0B4264] text-white shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
              : "bg-[#E6D4D1] text-[#0B4264] hover:bg-[#d8c5c2]"
          }`}
        >
          Opportunités
        </button>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 py-8 px-6 md:py-12 md:pr-16 md:pl-2 flex flex-col justify-start relative z-10">
        <ul className="space-y-1 mt-1">
          {currentList.map((item, index) => (
            <li key={index} className="flex items-start text-[#222] text-[15px] leading-[1.6]">
              <span className="mr-3 shrink-0">·</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
