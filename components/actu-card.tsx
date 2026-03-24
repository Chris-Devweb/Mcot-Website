import Image from 'next/image';

interface ActuCardProps {
  category?: string;
  title: string;
  imageSrc: string;
  imageAlt?: string;
  href?: string;
  /** Total number of dots for pagination indicator */
  totalSlides?: number;
  /** Index of the active dot (0-based) */
  activeSlide?: number;
}

export function ActuCard({
  category = 'Actualités - A la Une',
  title,
  imageSrc,
  imageAlt = 'Actualité',
  href = '#',
  totalSlides = 3,
  activeSlide = 0,
}: ActuCardProps) {
  return (
    <div className="w-full bg-white rounded-[24px] shadow-[0_12px_44px_rgba(0,0,0,0.12)] font-sans border border-gray-100 flex flex-col overflow-hidden">
      {/* Header Row */}
      <div className="flex bg-white items-stretch h-[44px] md:h-[48px]">
        {/* Gray Tab */}
        <div className="flex items-center bg-[#E5E9EC] rounded-br-[32px] pl-5 md:pl-8 pr-10 md:pr-14">
           <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#E53935]" />
           <span className="text-[12px] md:text-[13px] font-bold text-[#0B4264] uppercase ml-3 tracking-wider whitespace-nowrap">
             {category}
           </span>
        </div>
        
        {/* Pagination Dots (Rest of Header) */}
        <div className="flex-1 flex items-center bg-white px-2">
           <div className="flex gap-1.5 ml-2 md:ml-4">
             {Array.from({ length: totalSlides }).map((_, i) => (
               <span
                 key={i}
                 className={`h-1.5 rounded-full transition-all duration-300 ${
                   i === activeSlide ? 'w-5 bg-[#0B4264]' : 'w-1.5 bg-[#E5E9EC]'
                 }`}
               />
             ))}
           </div>
        </div>
      </div>

      {/* Main Body */}
      <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-14 px-5 py-5 md:px-8 md:py-6 lg:px-10 lg:py-6">
        {/* Left Text content */}
        <div className="flex-1 flex flex-col justify-center min-w-[280px]">
          <h3 className="text-[18px] md:text-[20px] lg:text-[24px] text-gray-800 leading-[1.35] mb-4 md:mb-6 lg:mb-8 font-medium">
            <span className="font-extrabold text-[#0B4264]">Cotonou :</span> {title}
          </h3>
          <div>
            <a
              href={href}
              className="inline-flex items-center text-[#0B4264] text-[15px] md:text-[16px] font-medium hover:underline transition-all group"
            >
              Voir Plus
              <svg
                className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full md:w-[45%] lg:w-[48%] h-[180px] md:h-[160px] lg:h-[190px] rounded-xl lg:rounded-2xl overflow-hidden shrink-0 shadow-sm border border-black/5">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ActuCard;
