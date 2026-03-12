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
  category = 'Actualités - À la Une',
  title,
  imageSrc,
  imageAlt = 'Actualité',
  href = '#',
  totalSlides = 3,
  activeSlide = 0,
}: ActuCardProps) {
  return (
    <div className="w-[340px] lg:w-[390px] bg-white rounded-2xl shadow-2xl overflow-hidden font-sans">
      {/* Card Header bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E53935] shrink-0" />
          <span className="text-[11px] font-bold text-[#0B4264] uppercase tracking-widest">
            {category}
          </span>
        </div>
        {/* Pagination indicator */}
        <div className="flex items-center gap-1">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <span
              key={i}
              className={
                i === activeSlide
                  ? 'h-1.5 w-5 rounded-full bg-[#0B4264]'
                  : 'h-1.5 w-2 rounded-full bg-gray-300'
              }
            />
          ))}
        </div>
      </div>

      {/* Card Body */}
      <div className="flex gap-4 px-4 py-4">
        {/* Text content */}
        <div className="flex-1 flex flex-col justify-between min-h-[90px]">
          <p className="text-[13px] lg:text-[14px] font-medium text-gray-800 leading-snug">
            <span className="font-bold text-[#0B4264]">Cotonou</span>{' '}
            : {title}
          </p>
          <a
            href={href}
            className="inline-flex items-center gap-1.5 text-[#0B4264] text-[12px] font-bold mt-3 hover:underline"
          >
            Voir Plus
            <svg
              className="w-4 h-4"
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

        {/* Image */}
        <div className="relative w-[100px] h-[90px] rounded-xl overflow-hidden shrink-0">
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
