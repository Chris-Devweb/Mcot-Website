"use client";
import { windowNotification } from "@/components/global-notification";

export function NewsletterButton() {
  return (
    <button 
      type="button" 
      onClick={(e) => {
        e.preventDefault();
        windowNotification.show({
          title: "Inscription Réussie !",
          description: "Votre email a bien été reçu pour inscription à notre newsletter, toutes les informations capitales de la commune depuis votre téléphone !",
          duration: 4000
        });
      }}
      className="flex-1 bg-[#0B4264] hover:bg-[#083050] text-white px-4 py-2.5 rounded-lg text-[12px] font-semibold transition-colors whitespace-nowrap"
    >
      S&apos;inscrire à la Newsletter
    </button>
  );
}
