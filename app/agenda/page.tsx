import { PageHero } from "@/components/page-hero";
import { AgendaSection } from "@/components/agenda-section";

export const metadata = {
  title: "Agenda - Mairie de Cotonou",
  description: "Consulter les évènements à venir dans votre ville.",
};

export default function AgendaPage() {
  return (
    <>
      <PageHero
        title="Agenda"
        subtitle="Consulter les évènements à venir dans votre ville."
      />
      <AgendaSection />
    </>
  );
}
