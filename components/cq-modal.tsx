'use client';

// Data for all 13 arrondissements
const CQ_DATA: Record<number, { quartier: string; chef: string }[]> = {
  1: [
    { quartier: 'Avotrou-Aimonlonfidé', chef: 'GBEDAN Pierre' },
    { quartier: 'Avotrou-Gbègo', chef: 'FATIGBA Séwanou Moïse' },
    { quartier: 'Dandji', chef: 'HOUESSOU Marius' },
    { quartier: 'Dandji-Hokanmè', chef: 'DOSSA Emile' },
    { quartier: 'Donatin', chef: 'AHOUDJI Auxibe' },
    { quartier: 'Finagnon', chef: 'ZANHOUNKPEVI Gratien' },
    { quartier: 'N\'vènamèdé', chef: 'DOSSOU Ernest' },
    { quartier: 'Tanto', chef: 'ZINSOU Marcel' },
    { quartier: 'Tchanhounkpamè', chef: 'AGBOGOU Arnaud' },
    { quartier: 'Tokplégbé', chef: 'DJOI Pierre' },
    { quartier: 'Yagbé', chef: 'HOUSSOU GBETO Gabriel' },
  ],
  2: [
    { quartier: 'Agbato', chef: 'AGBANOU Médard' },
    { quartier: 'Aidjèdo', chef: 'GNONLONGOUN Jean-Marie' },
    { quartier: 'Aïzèhouè-Agblangandan', chef: 'AGOSSOU Cosme' },
    { quartier: 'Cococodji', chef: 'DOSSOU Brice' },
    { quartier: 'Fifadji', chef: 'ADANDE Rodrigue' },
  ],
  3: [
    { quartier: 'Agontikon', chef: 'HOUNDEKON Bertin' },
    { quartier: 'Cadjèhoun', chef: 'DEGBE Paul' },
    { quartier: 'Cocotomey', chef: 'TOVIHO Sylvain' },
    { quartier: 'Djègbadji', chef: 'ASSOGBA Paul' },
  ],
  4: [
    { quartier: 'Dèkoungbé', chef: 'GNANKPO Etienne' },
    { quartier: 'Dodomè', chef: 'HOUNGNIBO Marcel' },
    { quartier: 'Fidjrossè', chef: 'KPOSSOU Léon' },
  ],
  5: [
    { quartier: 'Agla', chef: 'ADJAGBONI Eric' },
    { quartier: 'Çakpété', chef: 'GBENOU Albert' },
    { quartier: 'Sainte-Rita', chef: 'DJOSSOU Raphaël' },
  ],
  6: [
    { quartier: 'Akpakpa Centre', chef: 'AÏDJI Mathias' },
    { quartier: 'Enagnon', chef: 'HOUNSOU Antoine' },
    { quartier: 'Missèbo', chef: 'TOKPONTO Brice' },
    { quartier: 'Placodji', chef: 'ZANMON Jérôme' },
  ],
  7: [
    { quartier: 'Ahouansori', chef: 'YOVO Fabrice' },
    { quartier: 'Donoukpa', chef: 'ADANHOUNMÈ Bernard' },
    { quartier: 'Kpankpan', chef: 'SOSSA René' },
  ],
  8: [
    { quartier: 'Gbèdjromèdé', chef: 'HOUNWANOU Rodrigue' },
    { quartier: 'Gbégamey', chef: 'DEGBE Alexis' },
    { quartier: 'Haie-Vive', chef: 'POGNON Fidèle' },
  ],
  9: [
    { quartier: 'Agbodjèdo', chef: 'AOUSSI Sylvester' },
    { quartier: 'Aïzè', chef: 'DJAGBA Pierre' },
    { quartier: 'Akogbato', chef: 'ADEOSSI Lambert' },
    { quartier: 'Houènoussou', chef: 'GBAGUIDI Job' },
  ],
  10: [
    { quartier: 'Dèdokpo', chef: 'HOUINTO Rodrigue' },
    { quartier: 'Mènontin', chef: 'GODONOU Cyprien' },
    { quartier: 'Sikècodji', chef: 'DOSSOU Séverin' },
  ],
  11: [
    { quartier: 'Ganhi', chef: 'AZON Marcel' },
    { quartier: 'Guincomey', chef: 'AGBOTON Gédéon' },
    { quartier: 'Kpanou', chef: 'BIAOU Etienne' },
  ],
  12: [
    { quartier: 'Avlékété', chef: 'GODONOU Rémi' },
    { quartier: 'Sèmè', chef: 'DJISSOU Honoré' },
    { quartier: 'Vossa', chef: 'AGBANLIN Cyprien' },
  ],
  13: [
    { quartier: 'Agbohounkpèto', chef: 'HOUNTO Lambert' },
    { quartier: 'Jéricho', chef: 'BOSSOU Pierre' },
    { quartier: 'Ladji', chef: 'ASSOGBA Thomas' },
    { quartier: 'Totchè', chef: 'ZINZINDOHOUE Marcel' },
  ],
};

interface CQModalProps {
  arrondissement: number;
  onClose: () => void;
}

export function CQModal({ arrondissement, onClose }: CQModalProps) {
  const data = CQ_DATA[arrondissement] || [];
  const ordinal = arrondissement === 1 ? '1er' : `${arrondissement}ème`;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-[700px] max-h-[80vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-7 py-5 border-b border-gray-100 shrink-0">
          <div>
            <h2 className="text-[17px] font-extrabold text-[#0B4264] text-center leading-tight">
              Liste des chefs quartiers du {ordinal} Arrondissement
            </h2>
            <p className="text-[12px] text-gray-500 text-center mt-1">Dernière mise à jour le 12/01/25</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors shrink-0 ml-4"
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>

        {/* Table */}
        <div className="overflow-y-auto flex-1 px-7 py-4">
          <table className="w-full text-[14px]">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-2 pr-8 font-bold text-gray-900">Quartier</th>
                <th className="text-left py-2 font-bold text-gray-900">Chef-Quartier</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-2.5 pr-8 text-black font-medium">{row.quartier}</td>
                  <td className="py-2.5 font-bold text-[#0B4264]">{row.chef}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CQModal;
