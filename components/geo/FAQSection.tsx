"use client";

import { FAQ } from "@/data/registry";
import { useState } from "react";

interface FAQSectionProps {
  faqs: FAQ[];
  mapTitle: string;
}

export default function FAQSection({ faqs, mapTitle }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  // FAQPage schema for RAG / rich results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <section id="faq" className="mb-32">
      {/* JSON-LD for crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/<\/script>/g, "<\\/script>"),
        }}
      />

      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="inline-block px-5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] bg-brand-primary/10 text-brand-primary border border-brand-primary/20 mb-6">
          Preguntas Estratégicas
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          Lo que necesitas saber sobre {mapTitle}
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Respuestas técnicas y declarativas basadas en datos verificables.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className={`
                relative rounded-2xl border transition-all duration-500 overflow-hidden
                ${isOpen
                  ? "bg-white/[0.06] border-brand-primary/30 shadow-[0_0_40px_-12px_rgba(var(--brand-primary-rgb),0.15)]"
                  : "bg-white/[0.02] border-white/[0.06] hover:border-white/10 hover:bg-white/[0.04]"
                }
              `}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-6 p-6 md:p-7 text-left cursor-pointer"
              >
                <h3 className={`text-base md:text-lg font-semibold transition-colors duration-300 ${isOpen ? "text-white" : "text-gray-300"}`}>
                  {faq.question}
                </h3>
                <span
                  className={`
                    flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500
                    ${isOpen
                      ? "bg-brand-primary/20 text-brand-primary rotate-45"
                      : "bg-white/5 text-gray-500 rotate-0"
                    }
                  `}
                >
                  +
                </span>
              </button>

              {/* Expandable Answer */}
              <div
                className={`transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="px-6 md:px-7 pb-7">
                  <div className="h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent mb-5" />
                  <p className="text-gray-400 leading-relaxed text-[15px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
