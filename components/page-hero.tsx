import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  /** Small label above title (e.g. "MAIRIE DE COTONOU") */
  label?: string;
  className?: string;
}

export function PageHero({ title, subtitle, imageSrc = "/backsection1.png", label, className = "" }: PageHeroProps) {
  return (
    <section className={`relative w-full min-h-[220px] md:min-h-[260px] lg:min-h-[300px] overflow-hidden ${className}`}>
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(11,66,100,0.85) 0%, rgba(11,66,100,0.5) 50%, transparent 100%)",
          }}
        />
      </div>
      <div className="relative z-10 w-full h-full px-4 sm:px-[100px] lg:px-[150px] flex flex-col justify-center pt-20 pb-12 lg:pt-24 lg:pb-16">
        {label && (
          <p className="text-white/90 text-xs md:text-sm font-medium uppercase tracking-widest mb-1">
            {label}
          </p>
        )}
        <div className="flex items-center gap-3">
          <div className="w-1 h-12 md:h-16 bg-white rounded-full shrink-0" />
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-white/90 text-sm md:text-base mt-2 max-w-xl">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
