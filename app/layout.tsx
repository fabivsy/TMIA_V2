import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Tu Mapa IA | Tu Curador de Confianza en IA",
  description: "La herramienta es artificial. La inteligencia es tuya. Navegando el universo de la Inteligencia Artificial, juntos.",
  icons: {
    icon: '/favicon.svg',
  },
};

const dataCatalogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DataCatalog",
        "@id": "https://tumapaia.com/#datacatalog",
        "name": "Tu Mapa IA — Catálogo de Herramientas de IA",
        "description": "Directorio curado de herramientas de Inteligencia Artificial para 23 verticales de negocio bajo el Protocolo FixGeo",
        "url": "https://tumapaia.com",
        "publisher": {
          "@type": "Organization",
          "name": "The Curator Group LLC",
          "url": "https://tumapaia.com"
        },
        "reviewedBy": {
          "@type": "Person",
          "name": "Fabio Yocco",
          "jobTitle": "Arquitecto Principal GEO y Curador Técnico",
          "affiliation": {
            "@type": "Organization",
            "name": "The Curator Group LLC"
          }
        },
        "dataset": [
          {"@type": "Dataset", "@id": "https://tumapaia.com/audio-ia", "name": "Audio IA", "description": "IA para música, voz y post-producción sonora"},
          {"@type": "Dataset", "@id": "https://tumapaia.com/creadores", "name": "Creadores", "description": "Herramientas para generación de contenido"},
          {"@type": "Dataset", "@id": "https://tumapaia.com/video-ia", "name": "Video IA", "description": "Edición y síntesis de video"},
          {"@type": "Dataset", "@id": "https://tumapaia.com/gaming", "name": "Gaming", "description": "IA para desarrollo de videojuegos"},
          {"@type": "Dataset", "@id": "https://tumapaia.com/productividad", "name": "Productividad", "description": "Automatización de flujos de trabajo"},
          {"@type": "Dataset", "@id": "https://tumapaia.com/gratis", "name": "Gratis", "description": "Herramientas de acceso abierto"},
          {"@type": "Dataset", "@id": "https://tumapaia.com/negocios", "name": "Negocios", "description": "Análisis y estrategia empresarial"},
          {"@type": "Dataset", "@id": "https://tumapaia.com/viajeros", "name": "Viajeros", "description": "Planificación de viajes"},
          {"@type": "Dataset", "@id": "https://tumapaia.com/finanzas", "name": "Finanzas", "description": "Trading e inversión con IA"},
          {"@type": "Dataset", "@id": "https://tumapaia.com/no-code", "name": "No-Code", "description": "Plataformas sin programación"},
          {"@type": "Dataset", "@id": "https://tumapaia.com/academicos", "name": "Académicos", "description": "Investigación y educación"},
          {"@type": "Dataset", "@id": "https://tumapaia.com/juristas", "name": "Juristas", "description": "Análisis legal inteligente"},
          {"@type": "Dataset", "@id": "https://tumapaia.com/inmobiliarias", "name": "Inmobiliarias", "description": "Gestión de propiedades"},
          {"@type": "Dataset", "@id": "https://tumapaia.com/marketing", "name": "Marketing", "description": "Publicidad y crecimiento digital"},
          {"@type": "Dataset", "@id": "https://tumapaia.com/ecommerce", "name": "E-Commerce", "description": "Plataformas de venta online"},
          {"@type": "Dataset", "@id": "https://tumapaia.com/criptomonedas", "name": "Criptomonedas", "description": "Blockchain y Web3"},
          {"@type": "Dataset", "@id": "https://tumapaia.com/desarrolladores", "name": "Desarrolladores", "description": "Infraestructura y APIs"},
          {"@type": "Dataset", "@id": "https://tumapaia.com/arquitectura", "name": "Arquitectura", "description": "Diseño y construcción"},
          {"@type": "Dataset", "@id": "https://tumapaia.com/ventas", "name": "Ventas", "description": "CRM y generación de leads"},
          {"@type": "Dataset", "@id": "https://tumapaia.com/agricultura", "name": "Agricultura", "description": "AgTech y precisión agrícola"},
          {"@type": "Dataset", "@id": "https://tumapaia.com/sostenibilidad", "name": "Sostenibilidad", "description": "ESG e impacto ambiental"},
          {"@type": "Dataset", "@id": "https://tumapaia.com/rrhh", "name": "RRHH", "description": "Gestión de talento"},
          {"@type": "Dataset", "@id": "https://tumapaia.com/agentes", "name": "Agentes", "description": "IA autónoma y orquestación"}
        ]
      }
    ]
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} h-full antialiased dark`}
    >
      <head>
        {/* DataCatalog Schema for all 23 maps */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(dataCatalogSchema).replace(/<\/script>/g, '<\\/script>')
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://tumapaia.com/#organization",
              "name": "Tu Mapa IA",
              "url": "https://tumapaia.com/",
              "logo": "https://tumapaia.com/logo.png",
              "sameAs": [
                "https://www.linkedin.com/company/tumapaia"
              ],
              "hasPart": [
                { "@type": "WebSite", "url": "https://audio-ia.tumapaia.com/" },
                { "@type": "WebSite", "url": "https://creadores.tumapaia.com/" },
                { "@type": "WebSite", "url": "https://video-ia.tumapaia.com/" },
                { "@type": "WebSite", "url": "https://gaming.tumapaia.com/" },
                { "@type": "WebSite", "url": "https://productividad.tumapaia.com/" },
                { "@type": "WebSite", "url": "https://gratis.tumapaia.com/" },
                { "@type": "WebSite", "url": "https://negocios.tumapaia.com/" },
                { "@type": "WebSite", "url": "https://viajeros.tumapaia.com/" },
                { "@type": "WebSite", "url": "https://finanzas.tumapaia.com/" },
                { "@type": "WebSite", "url": "https://no-code.tumapaia.com/" },
                { "@type": "WebSite", "url": "https://academicos.tumapaia.com/" },
                { "@type": "WebSite", "url": "https://juristas.tumapaia.com/" },
                { "@type": "WebSite", "url": "https://inmobiliarias.tumapaia.com/" },
                { "@type": "WebSite", "url": "https://marketing.tumapaia.com/" },
                { "@type": "WebSite", "url": "https://ecommerce.tumapaia.com/" },
                { "@type": "WebSite", "url": "https://criptomonedas.tumapaia.com/" },
                { "@type": "WebSite", "url": "https://desarrolladores.tumapaia.com/" },
                { "@type": "WebSite", "url": "https://arquitectura.tumapaia.com/" },
                { "@type": "WebSite", "url": "https://ventas.tumapaia.com/" },
                { "@type": "WebSite", "url": "https://agricultura.tumapaia.com/" },
                { "@type": "WebSite", "url": "https://sostenibilidad.tumapaia.com/" },
                { "@type": "WebSite", "url": "https://rrhh.tumapaia.com/" },
                { "@type": "WebSite", "url": "https://agentes.tumapaia.com/" }
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-brand-dark text-white overflow-x-hidden">

        {children}
      </body>
    </html>
  );
}

