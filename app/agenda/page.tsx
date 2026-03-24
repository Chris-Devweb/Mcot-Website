"use client";

import { useState } from "react";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";

const EVENTS = [
  {
    id: 1,
    day: "26",
    month: "JUL",
    year: "2024",
    title: "La plage en FEU 🔥",
    description: "Un événement festif qui réunit les lorem ipsum absam, rbam, ancapnc, scatalam",
    imageSrc: "/plage.png",
  },
  {
    id: 2,
    day: "26",
    month: "JUL",
    year: "2024",
    title: "La plage en FEU 🔥",
    description: "Un événement festif qui réunit les lorem ipsum absam, rbam, ancapnc, scatalam",
    imageSrc: "/plage.png",
  },
  {
    id: 3,
    day: "26",
    month: "JUL",
    year: "2024",
    title: "La plage en FEU 🔥",
    description: "Un événement festif qui réunit les lorem ipsum absam, rbam, ancapnc, scatalam",
    imageSrc: "/plage.png",
  },
];

export default function AgendaPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i - 1 + EVENTS.length) % EVENTS.length);
  const next = () => setActiveIndex((i) => (i + 1) % EVENTS.length);

  const getOffset = (index: number) => {
    let offset = index - activeIndex;
    if (offset > Math.floor(EVENTS.length / 2)) offset -= EVENTS.length;
    if (offset < -Math.floor(EVENTS.length / 2)) offset += EVENTS.length;
    return offset;
  };

  const getCardStyle = (offset: number) => {
    const absOffset = Math.abs(offset);
    if (absOffset > 1) return { display: "none" as const };

    const scale = offset === 0 ? 1 : 0.85;
    const translateX = offset * 320; // Distance between side cards and center
    const zIndex = offset === 0 ? 30 : 10;
    
    // As seen in the mockup, the side cards are slightly less bright. An opacity or filter handles it perfectly.
    const opacity = offset === 0 ? 1 : 0.7;

    return {
      transform: `translateX(calc(-50% + ${translateX}px)) scale(${scale})`,
      zIndex,
      opacity,
      transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    };
  };

  return (
    <>
      <PageHero
        title="Agenda"
        subtitle="Consulter les évènements à venir dans votre ville."
        imageSrc="/agendabackground.png"
      />
      
      {/* Background Section */}
      <section className="relative w-full min-h-[600px] lg:min-h-[700px] flex items-center justify-center py-20 bg-[#fbfcfd] overflow-hidden">
        
        {/* Confetti Background layer */}
        <div className="absolute inset-0 z-0 pointer-events-none w-full h-full mix-blend-multiply opacity-80">
          <Image 
            src="/fallingconfettis.png" 
            alt="Confettis" 
            fill 
            className="object-cover object-top" 
          />
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-[1200px] flex items-center justify-center px-4 z-20">
          
          {/* Left Navigation Arrow */}
          <Button
            type="button"
            size="icon"
            className="absolute left-2 sm:left-12 lg:left-24 z-40 w-12 h-12 lg:w-[60px] lg:h-[60px] rounded-full bg-[#053F5C] text-white flex items-center justify-center hover:bg-[#042e43] transition-colors shadow-xl shrink-0 border-[3px] border-[#085981] drop-shadow-lg"
            aria-label="Évènement Précédent"
            onClick={prev}
          >
            <svg className="w-6 h-6 lg:w-7 lg:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </Button>

          {/* Cards rendering */}
          <div className="relative flex items-center justify-center w-full h-[400px] sm:h-[450px] lg:h-[500px]">
            {EVENTS.map((event, index) => {
              const offset = getOffset(index);
              // Hide cards that are out of immediate neighbor bounds if we had > 3
              if (Math.abs(offset) > 1) return null;
              const style = getCardStyle(offset);
              const isActive = offset === 0;

              return (
                <div
                  key={event.id}
                  className="absolute left-1/2 cursor-pointer flex items-center justify-center select-none"
                  style={style}
                  onClick={() => !isActive && setActiveIndex(index)}
                >
                  <div
                    className={`
                      relative overflow-hidden rounded-md shadow-2xl bg-white
                      ${isActive ? "w-[360px] sm:w-[450px] h-[320px] sm:h-[400px]" : "w-[280px] sm:w-[350px] h-[260px] sm:h-[320px]"}
                      transition-all duration-500 ring-1 ring-black/5
                    `}
                  >
                    {/* The Background Image */}
                    <Image
                      src={event.imageSrc}
                      alt={event.title}
                      fill
                      className="object-cover"
                      style={{
                        transform: "scale(1.05)",
                        transition: "transform 0.5s",
                      }}
                    />

                    {/* Dark gradient overlay anchored to the bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

                    {/* Active Border to mimic glowing 3D depth */}
                    {isActive && (
                      <div className="absolute inset-0 border border-white/20 rounded-md pointer-events-none z-30" />
                    )}

                    {/* Date Badge — Top Right */}
                    <div className="absolute top-4 right-4 bg-white rounded-md px-3 lg:px-4 py-1.5 lg:py-2 text-center shadow-lg z-20">
                      <p className="text-2xl lg:text-[28px] font-black text-[#0A5F43] leading-none mb-0.5 lg:mb-1">{event.day}</p>
                      <p className="text-[12px] lg:text-[13px] font-bold text-[#0A5F43] leading-none mb-0.5">{event.month}</p>
                      <p className="text-[12px] lg:text-[13px] font-bold text-[#0A5F43] leading-none">{event.year}</p>
                    </div>

                    {/* Event info Details — Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 z-20 flex flex-col items-center text-center">
                      <h3 className={`font-bold text-white mb-1.5 leading-tight ${isActive ? "text-[20px] sm:text-[24px]" : "text-[16px] sm:text-[18px]"}`}>
                        {event.title}
                      </h3>
                      <p className={`text-white/80 leading-snug mx-auto ${isActive ? "text-[13px] sm:text-[14px] max-w-[95%]" : "text-[11px] sm:text-[12px] max-w-[90%]"}`}>
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Navigation Arrow */}
          <Button
            type="button"
            size="icon"
            className="absolute right-2 sm:right-12 lg:right-24 z-40 w-12 h-12 lg:w-[60px] lg:h-[60px] rounded-full bg-[#053F5C] text-white flex items-center justify-center hover:bg-[#042e43] transition-colors shadow-xl shrink-0 border-[3px] border-[#085981] drop-shadow-lg"
            aria-label="Évènement Suivant"
            onClick={next}
          >
            <svg className="w-6 h-6 lg:w-7 lg:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Button>
        </div>
      </section>
    </>
  );
}
