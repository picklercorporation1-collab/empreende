import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SFD Tech - Infraestrutura Crítica e Proteção Tecnológica",
  description:
    "System For Down Tech: Soluções completas em energia, monitoramento e proteção tecnológica para órgãos públicos. 18 anos de experiência, equipe de 53 colaboradores, 99,9% de disponibilidade.",
  keywords:
    "infraestrutura crítica, UPS, nobreak, data center, monitoramento, redes corporativas, proteção de dados, automação pública",
  authors: [{ name: "SFD Tech" }],
  openGraph: {
    title: "SFD Tech - Infraestrutura Crítica e Proteção Tecnológica",
    description:
      "Soluções tecnológicas para órgãos públicos com 99,9% de disponibilidade",
    url: "https://sfdtech.com.br",
    siteName: "SFD Tech",
    images: [
      {
        url: "https://sfdtech.com.br/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f0f23" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}
        
        {/* Schema.org markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "System For Down Tech",
              alternateName: "SFD Tech",
              url: "https://sfdtech.com.br",
              logo: "https://sfdtech.com.br/logo.png",
              description:
                "Soluções tecnológicas e energéticas de alta disponibilidade",
              sameAs: [
                "https://www.linkedin.com/company/sfd-tech",
                "https://twitter.com/sfdtech",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Brusque",
                addressRegion: "SC",
                addressCountry: "BR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                availableLanguage: ["pt-BR", "en"],
                areaServed: "BR",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
