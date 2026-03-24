'use client';

import Image from 'next/image';
import { AgendaEvent } from '@/components/agenda-section';
import { windowNotification } from '@/components/global-notification';

interface EventModalProps {
  event: AgendaEvent;
  onClose: () => void;
}

export function EventModal({ event, onClose }: EventModalProps) {
  const handleSiteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    windowNotification.show({
      title: 'Bientôt disponible',
      description: 'Le site officiel de cet évènement n\'est pas encore disponible. Revenez bientôt !',
      duration: 3500,
    });
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Card */}
      <div
        className="relative w-full max-w-[520px] rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative w-full h-[240px] md:h-[280px]">
          <Image src={event.imageSrc} alt={event.title} fill className="object-cover" />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Date badge */}
          <div className="absolute top-4 right-4 bg-white rounded-xl px-3 py-2 text-center shadow-md">
            <p className="text-[22px] font-black text-[#0B6E4F] leading-none">{event.day}</p>
            <p className="text-[12px] font-bold text-[#0B6E4F] leading-tight">{event.month}</p>
            <p className="text-[12px] font-bold text-[#0B6E4F]">{event.year}</p>
          </div>

          {/* Title + desc over gradient */}
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
            <h2 className="text-[20px] font-bold leading-snug mb-1">{event.title}</h2>
            <p className="text-white/80 text-[13px] text-center leading-relaxed">{event.description}</p>
          </div>
        </div>

        {/* White bottom section — buttons */}
        <div className="bg-white px-6 py-5 flex flex-col sm:flex-row gap-3 items-center justify-center">
          <button
            onClick={handleSiteClick}
            className="flex items-center justify-center gap-2 bg-[#0B4264] hover:bg-[#083050] text-white font-semibold text-[13px] rounded-md px-5 py-3 transition-colors whitespace-nowrap"
          >
            Voir le site de l&apos;évènement
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
            </svg>
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-2 border-2 border-[#0B4264] text-[#0B4264] hover:bg-[#0B4264] hover:text-white font-semibold text-[13px] rounded-md px-5 py-3 transition-colors whitespace-nowrap"
          >
            Réserver une place
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6" />
              <path d="M15 3h6v6" /><path d="M10 14L21 3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventModal;
