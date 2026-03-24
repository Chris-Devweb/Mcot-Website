'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { EventModal } from '@/components/event-modal';

export interface AgendaEvent {
  id: number;
  day: string;
  month: string;
  year: string;
  title: string;
  description: string;
  imageSrc: string;
}

const DEFAULT_EVENTS: AgendaEvent[] = [
  {
    id: 1,
    day: '26',
    month: 'JUL',
    year: '2024',
    title: 'La plage en FEU 🔥',
    description: 'Un évènement festif qui réunit les lorem ipsum absam, rbam, ancapnc, scatalam',
    imageSrc: '/plage.png',
  },
  {
    id: 2,
    day: '26',
    month: 'JUL',
    year: '2024',
    title: 'La plage en FEU 🔥',
    description: 'Un évènement festif qui réunit les lorem ipsum absam, rbam, ancapnc, scatalam',
    imageSrc: '/plage.png',
  },
  {
    id: 3,
    day: '26',
    month: 'JUL',
    year: '2024',
    title: 'La plage en FEU 🔥',
    description: 'Un évènement festif qui réunit les lorem ipsum absam, rbam, ancapnc, scatalam',
    imageSrc: '/plage.png',
  },
];

interface AgendaSectionProps {
  events?: AgendaEvent[];
}

export function AgendaSection({ events = DEFAULT_EVENTS }: AgendaSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<AgendaEvent | null>(null);

  const prev = () => setActiveIndex((i) => (i - 1 + events.length) % events.length);
  const next = () => setActiveIndex((i) => (i + 1) % events.length);

  // Returns the position of a card relative to center (-2, -1, 0, 1, 2)
  const getOffset = (index: number) => {
    let offset = index - activeIndex;
    // Handle wrap-around for circular carousel
    if (offset > events.length / 2) offset -= events.length;
    if (offset < -events.length / 2) offset += events.length;
    return offset;
  };

  const getCardStyle = (offset: number) => {
    const absOffset = Math.abs(offset);
    if (absOffset > 1) return { display: 'none' as const };

    // Scale: center = 1, sides get smaller
    const scale = offset === 0 ? 1 : 0.85;
    // Translate X: spread cards out horizontally
    const translateX = offset * 320;
    // Z-index: center is on top
    const zIndex = offset === 0 ? 10 : 5;
    // Opacity
    const opacity = offset === 0 ? 1 : 0.7;

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      zIndex,
      opacity,
      transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    };
  };

  return (
  <>
    <section className="relative w-full py-14 lg:py-18 bg-[#F5F8FB] overflow-hidden font-sans">
      <div className="w-full">
        
      {/* Section Header */}
      <div className="relative mb-10">
        <div className="px-4 sm:px-[100px] lg:px-[150px]">
          <h2 className="text-[28px] lg:text-[32px] font-bold text-[#0B4264] mb-2">
            Agenda
          </h2>
        </div>
        {/* Blue bar: starts from left edge */}
        <div className="bg-[#0B4264] py-1.5 pr-4 pl-4 sm:pl-[100px] lg:pl-[150px] self-start inline-flex" style={{ borderTopRightRadius: '4px', borderBottomRightRadius: '4px' }}>
          <p className="text-white text-[14px] font-semibold tracking-wide">
            Évènements <span className="font-bold">À ne pas manquer</span>
          </p>
        </div>
      </div>

        {/* Carousel with arrows on sides */}
        <div className="relative flex items-center justify-center px-16 lg:px-24">
          
          {/* Left Arrow — outside carousel */}
          <Button
            type="button"
            size="icon"
            className="absolute left-4 lg:left-8 z-30 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-[#0B4264] text-white flex items-center justify-center hover:bg-[#083050] transition-colors shadow-lg shrink-0"
            aria-label="Précédent"
            onClick={prev}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
            </svg>
          </Button>

          {/* Cards container */}
          <div className="relative w-full flex items-center justify-center h-[320px] lg:h-[360px]">
            {events.map((event, index) => {
              const offset = getOffset(index);
              if (Math.abs(offset) > 1) return null;
              const style = getCardStyle(offset);
              const isActive = offset === 0;

              return (
                <div
                  key={event.id}
                  className="absolute cursor-pointer"
                  style={style}
                  onClick={() => {
                    if (isActive) {
                      setSelectedEvent(event);
                    } else {
                      setActiveIndex(index);
                    }
                  }}
                >
                  <div
                    className={`
                      relative overflow-hidden rounded-2xl
                      ${isActive ? 'w-[340px] lg:w-[400px] h-[290px] lg:h-[330px]' : 'w-[270px] h-[230px] lg:h-[260px]'}
                      transition-all duration-500
                    `}
                    style={{
                      border: isActive ? '2px solid rgba(131,206,233,0.6)' : 'none',
                    }}
                  >
                    {/* Background image */}
                    <Image
                      src={event.imageSrc}
                      alt={event.title}
                      fill
                      className="object-cover"
                      style={{
                        transform: `scale(1.08) translateX(${offset * -3}%)`,
                        transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      }}
                    />

                    {/* Dark overlay at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

                    {/* Date Badge — top right */}
                    <div className="absolute top-3 right-3 bg-white rounded-lg px-2.5 py-1.5 text-center shadow-md">
                      <p className="text-[20px] font-black text-[#0B6E4F] leading-none">{event.day}</p>
                      <p className="text-[11px] font-bold text-[#0B6E4F] leading-tight">{event.month}</p>
                      <p className="text-[11px] font-bold text-[#0B6E4F]">{event.year}</p>
                    </div>

                    {/* Event info — bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className={`font-bold text-white leading-snug mb-1 ${isActive ? 'text-[16px]' : 'text-[13px]'}`}>
                        {event.title}
                      </h3>
                      {isActive && (
                        <p className="text-white/80 text-[12px] leading-relaxed text-center">
                          {event.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow — outside carousel */}
          <Button
            type="button"
            size="icon"
            className="absolute right-4 lg:right-8 z-30 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-[#0B4264] text-white flex items-center justify-center hover:bg-[#083050] transition-colors shadow-lg shrink-0"
            aria-label="Suivant"
            onClick={next}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </section>

    {/* Event detail modal */}
    {selectedEvent && (
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    )}
  </>);
}

export default AgendaSection;
