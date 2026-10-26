import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FE3912",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://theoginfotech.com"),
  title: {
    default: "THE OG INFOTECH — #1 Website Development, Mobile Apps, SaaS & AI Automation Agency",
    template: "%s | THE OG INFOTECH",
  },
  description:
    "THE OG INFOTECH is a premier global technology agency specializing in high-performance Website Development, Cross-Platform Mobile Apps (iOS/Android), UI/UX Design, Graphic Design, Custom Software, SaaS Platforms, and AI Automation workflows engineered for 100/100 Google Core Web Vitals and top search ranking.",
  applicationName: "THE OG INFOTECH",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Website Development Company",
    "Best Web Development Agency",
    "Custom Website Development",
    "Next.js Development Company",
    "React Web Development",
    "Mobile App Development Agency",
    "Flutter App Development Company",
    "iOS and Android App Development",
    "UI UX Design Agency",
    "Website Redesign Services",
    "Graphic Design and Branding",
    "Corporate Logo Design",
    "Custom Software Development Company",
    "SaaS Platform Development Agency",
    "AI Automation Agency",
    "AI Workflow Automation",
    "OpenAI GPT-4o Integration",
    "Enterprise Cloud Engineering",
    "THE OG INFOTECH",
    "Top Software Company in India",
    "Global IT Solutions Provider"
  ],
  authors: [{ name: "THE OG INFOTECH", url: "https://theoginfotech.com" }],
  creator: "THE OG INFOTECH",
  publisher: "THE OG INFOTECH",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://theoginfotech.com",
    languages: {
      "en-US": "https://theoginfotech.com",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "THE OG INFOTECH — #1 Website Development, Mobile Apps, SaaS & AI Automation Agency",
    description:
      "Transform your business with cutting-edge Website Development, Mobile Apps (iOS & Android), UI/UX Design, Custom Software, SaaS Platforms, and AI Automation workflows.",
    url: "https://theoginfotech.com",
    siteName: "THE OG INFOTECH",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://theoginfotech.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "THE OG INFOTECH — Website, App, Software & AI Automation Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "THE OG INFOTECH — Premier Web, App, Software & AI Agency",
    description:
      "Enterprise digital solutions: Website Development, Mobile Apps, UI/UX Design, SaaS Platforms, and AI Automation.",
    images: ["https://theoginfotech.com/opengraph-image"],
    creator: "@theoginfotech",
  },
  category: "technology",
};

// Rich Structured Data (JSON-LD) for Google Rich Snippets & Instant Indexing
const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Organization"],
  name: "THE OG INFOTECH",
  alternateName: ["OG INFOTECH", "THE OG INFOTECH Studio", "OG Infotech Agency"],
  url: "https://theoginfotech.com",
  logo: "https://theoginfotech.com/icon.svg",
  image: "https://theoginfotech.com/opengraph-image",
  description:
    "THE OG INFOTECH is an elite technology agency specializing in high-performance Website Development, Mobile App Development, UI/UX Design, Graphic Design, Custom Software, SaaS Platforms, and AI Automation workflows.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "Gujarat"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "184",
    bestRating: "5",
    worstRating: "1"
  },
  priceRange: "$$",
  openingHours: "Mo-Sa 09:00-20:00",
  knowsAbout: [
    "Website Development",
    "Next.js 15",
    "React 19",
    "Flutter Mobile Apps",
    "UI/UX Design Systems",
    "Custom Software Engineering",
    "SaaS Architecture",
    "AI Workflow Automation",
    "Search Engine Optimization (SEO)",
    "Core Web Vitals"
  ],
  sameAs: [
    "https://twitter.com/theoginfotech",
    "https://linkedin.com/company/theoginfotech",
    "https://github.com/theoginfotech"
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "8 Core Digital & Software Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Development",
          url: "https://theoginfotech.com/services#website-development",
          description: "High-performance full-stack web development using Next.js and React optimized for Google Core Web Vitals and top search ranking."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
          url: "https://theoginfotech.com/services#mobile-app-development",
          description: "Cross-platform iOS and Android mobile applications engineered with Flutter and React Native delivering 60 FPS native performance."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Modern Web Design",
          url: "https://theoginfotech.com/services#web-design",
          description: "High-converting, responsive, visual web design layouts engineered for maximum conversion rates and audience retention."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Graphic Design & Branding",
          url: "https://theoginfotech.com/services#graphic-design",
          description: "Distinctive corporate brand identities, vector logos, marketing collateral, and high-resolution visual assets."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "UI/UX Design & Prototyping",
          url: "https://theoginfotech.com/services#ui-ux-design",
          description: "Human-centric user journeys, wireframes, clickable Figma prototypes, and comprehensive scalable design tokens."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Software Development",
          url: "https://theoginfotech.com/services#custom-software",
          description: "Mission-critical backend systems, secure REST/GraphQL APIs, and resilient database architectures."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SaaS Platform Development",
          url: "https://theoginfotech.com/services#saas-platform",
          description: "Scalable multi-tenant SaaS platforms with automated Stripe recurring billing, user analytics, and role permissions."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Automation & Workflows",
          url: "https://theoginfotech.com/services#ai-automation",
          description: "Autonomous AI agents, private LLM knowledge retrieval, and n8n webhook automations saving 40+ hours weekly."
        }
      }
    ]
  }
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "THE OG INFOTECH",
  url: "https://theoginfotech.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://theoginfotech.com/services?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body 
        className="min-h-screen bg-[#F8AB79] text-[#521D0E] antialiased selection:bg-[#521D0E] selection:text-white"
        suppressHydrationWarning
      >
        {/* Google Knowledge Graph & Local Business Rich Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
        {/* Google Sitelinks Search Box Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
