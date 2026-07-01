import type { Metadata } from "next";
import { Noto_Serif, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rudrakshproperties.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Rudraksha Properties & Construction | Premium Real Estate Indore",
    template: "%s | Rudraksha Properties"
  },
  description: "Rudraksha Properties & Construction — Indore's trusted real estate firm. T&CP approved residential plots, commercial spaces, farmhouse lands, and turnkey construction across Super Corridor, Ujjain Road, Pithampur & more. 4.8★ on Justdial.",
  keywords: ["real estate indore", "plots in indore", "residential plots mp", "commercial property indore", "rudraksha properties", "pithampur plots", "super corridor indore", "ujjain road plots", "T&CP approved plots", "property investment indore", "construction firm indore"],
  authors: [{ name: "Rudraksha Properties & Construction" }],
  openGraph: {
    title: "Rudraksha Properties & Construction | Premium Real Estate Indore",
    description: "Indore's most trusted real estate and construction firm. T&CP approved plots, residential & commercial properties across Indore, Pithampur, and MP.",
    url: "https://www.rudrakshproperties.com",
    siteName: "Rudraksha Properties & Construction",
    images: [
      {
        url: "/assets/rudraksha-og.jpg",
        width: 1200,
        height: 630,
        alt: "Rudraksha Properties & Construction",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudraksha Properties & Construction | Real Estate Indore",
    description: "Trusted real estate & construction firm in Indore, MP. T&CP approved plots, residential and commercial properties.",
    images: ["/assets/rudraksha-og.jpg"],
  },
  icons: {
    icon: "/assets/rudraksha-logo.png",
    apple: "/assets/rudraksha-logo.png",
  },
};

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-body bg-background text-foreground">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8Z4E1Z3L9V"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8Z4E1Z3L9V');
          `}
        </Script>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Rudraksha Properties & Construction",
              "@id": "https://www.rudrakshproperties.com",
              "url": "https://www.rudrakshproperties.com",
              "telephone": "+919009250061",
              "email": "rudrakshproperties7079@gmail.com",
              "openingHours": "Mo-Su 10:00-19:00",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Hortus Conclusus, Pithampur Industrial Area, Vijay Nagar Colony, Badi Bagdun",
                  "addressLocality": "Pithampur",
                  "addressRegion": "Madhya Pradesh",
                  "addressCountry": "IN"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Annapurna Road, Usha Nagar",
                  "addressLocality": "Indore",
                  "addressRegion": "Madhya Pradesh",
                  "addressCountry": "IN"
                }
              ],
              "areaServed": ["Indore", "Pithampur", "Super Corridor", "Ujjain Road", "Rau"],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "5000",
                "bestRating": "5"
              },
              "sameAs": [
                "https://www.instagram.com/dharmendra_choudhary12",
                "https://www.facebook.com/share/1GqateDssv/",
                "https://youtube.com/@dharmendrachoudhary2597"
              ]
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}

