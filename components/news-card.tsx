"use client";

import Image from 'next/image';
import { windowNewsModal } from '@/components/news-modal-root';

export interface NewsCardProps {
  id?: number;
  date: string;
  title: string;
  excerpt: string;
  imageSrc: string;
  imageAlt?: string;
  href?: string;
}

export function NewsCard({
  id = 1,
  date,
  title,
  excerpt,
  imageSrc,
  imageAlt = 'Actualité',
  href = '#',
}: NewsCardProps) {
  return (
    <button
      type="button"
      onClick={(e) => {
         e.preventDefault();
         const article = { id, title, date, imageSrc, excerpt };
         // The mock "autres articles" for aesthetic parity on cards clicked from external regions
         const others = [
           { id: 101, title: "Construction de nouveaux modules de classes par la mairie de Cotonou", date: "10/07/25", imageSrc: "/actu2.png" },
           { id: 102, title: "Cotonou: Le Maire et son Conseil municipal sur le chantier", date: "11/07/25", imageSrc: "/actu1.png" },
           { id: 103, title: "La Mairie déploie sa politique participative", date: "12/07/25", imageSrc: "/doc.png" }
         ].filter(a => a.imageSrc !== imageSrc).slice(0, 2);
         windowNewsModal.open(article, others);
      }}
      className="
        group
        flex flex-col text-left rounded-2xl border border-gray-200 overflow-hidden
        bg-white font-sans cursor-pointer
        transition-all duration-300 ease-in-out
        hover:border-[#83CEE9] hover:shadow-[0_4px_24px_rgba(131,206,233,0.35)]
        hover:-translate-y-1
      "
    >
      {/* Image */}
      <div className="relative w-full h-[190px] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4">
        {/* Date + Voir Plus row */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-[12px] text-gray-400 font-medium">Le {date}</span>
          <span className="text-[12px] font-bold text-[#83CEE9] opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
            Voir Plus
          </span>
        </div>

        {/* Title */}
        <h3 className="text-[14px] lg:text-[15px] font-bold text-[#0B4264] leading-snug mb-3 group-hover:text-[#1a6da0] transition-colors duration-200">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-4">
          {excerpt}
        </p>
      </div>
    </button>
  );
}

export default NewsCard;
