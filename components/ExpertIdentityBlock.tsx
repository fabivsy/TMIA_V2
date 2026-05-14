"use client";

import { ExpertIdentity } from "@/data/registry";

interface ExpertIdentityBlockProps {
  identity: ExpertIdentity;
}

export default function ExpertIdentityBlock({ identity }: ExpertIdentityBlockProps) {
  // Organization schema for E-E-A-T
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: identity.entity,
    description: identity.bio,
    knowsAbout: identity.credentials,
  };

  return (
    <section id="expert-identity" className="mb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(orgSchema).replace(/<\/script>/g, "<\\/script>"),
        }}
      />

      <div className="max-w-4xl mx-auto relative">
        {/* Ambient glow */}
        <div className="absolute -inset-4 bg-purple-600/5 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative bg-white/[0.03] backdrop-blur-2xl border border-white/[0.07] rounded-3xl overflow-hidden">
          {/* Top accent line */}
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

          <div className="p-8 md:p-12">
            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
              {/* Monogram */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600/30 to-purple-800/30 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-black text-purple-400 tracking-tighter">
                  {identity.name.split(" ").map(w => w[0]).join("")}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white tracking-tight">
                  {identity.name}
                </h3>
                <p className="text-purple-400 text-sm font-bold uppercase tracking-widest mt-1">
                  {identity.role}
                </p>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mt-1">
                  Operado por {identity.entity}
                </p>
              </div>
            </div>

            {/* Bio */}
            <p className="text-gray-400 leading-relaxed text-[15px] mb-10 max-w-3xl">
              {identity.bio}
            </p>

            {/* Credentials Grid */}
            <div className="mb-10">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-5">
                Credenciales de Autoridad
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {identity.credentials.map((cred, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-white/[0.03] border border-white/[0.05] rounded-xl px-5 py-4"
                  >
                    <span className="text-purple-500 mt-0.5 text-sm">◆</span>
                    <span className="text-gray-300 text-sm leading-relaxed">{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Methodology */}
            <div className="border-t border-white/[0.06] pt-8">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
                Metodología de Evaluación
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
                {identity.methodology}
              </p>
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
