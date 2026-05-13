import Link from "next/link";

interface MapCardProps {
  title: string;
  description: string;
  href: string;
  gradientClass: string;
  schema?: any;
}

export default function MapCard({
  title,
  description,
  href,
  gradientClass,
  schema,
}: MapCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-brand-primary/50 hover:shadow-2xl hover:shadow-black/50 ${gradientClass}`}
    >
      {/* GEO-Injection: Hidden Schema */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/<\/script>/g, '<\\/script>')
          }}
        />
      )}

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:scale-105 transition-transform origin-left">
          {title}
        </h3>
        <p className="text-white/80 leading-relaxed mb-6">
          {description}
        </p>
        
        <div className="mt-auto flex items-center gap-2 text-white font-bold text-sm">
          Explorar Mapa
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
    </Link>
  );
}
