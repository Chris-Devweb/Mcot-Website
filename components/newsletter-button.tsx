"use client";
import { windowNotification } from "@/components/global-notification";

export function NewsletterButton() {
  return (
    <button 
      type="button" 
      onClick={(e) => {
        e.preventDefault();
        import("@/components/newsletter-modal").then(({ newsletterAction }) => {
          newsletterAction.open();
        });
      }}
      className="flex-1 bg-[#0B4264] hover:bg-[#083050] text-white px-4 py-2.5 rounded-lg text-[12px] font-semibold transition-colors whitespace-nowrap"
    >
      S&apos;inscrire à la Newsletter
    </button>
  );
}
