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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Tu Mapa IA",
              "url": "https://tumapaia.com",
              "description": "Tu Curador de Confianza en Inteligencia Artificial",
              "publisher": {
                "@type": "Organization",
                "name": "The Curator Group LLC",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://tumapaia.com/logo.png"
                }
              }
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-brand-dark text-white">

        {children}
      </body>
    </html>
  );
}

