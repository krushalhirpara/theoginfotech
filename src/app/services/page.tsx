import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  Cpu, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Lock, 
  Award,
  Globe,
  Smartphone,
  Layout,
  Palette,
  Compass,
  Terminal,
  Layers,
  Sparkles,
  HelpCircle
} from "lucide-react";
import { ServicesSection } from "@/components/services/ServicesSection";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "8 Core Digital & Software Services — Detailed Guide | THE OG INFOTECH",
  description:
    "Comprehensive guide to THE OG INFOTECH's 8 core services: Website Development, Mobile Apps (iOS/Android), Modern Web Design, Graphic Design & Branding, UI/UX Design, Custom Software, SaaS Platforms, and AI Automation.",
  alternates: {
    canonical: "https://theoginfotech.com/services",
  },
  openGraph: {
    title: "8 Core Digital & AI Services | THE OG INFOTECH",
    description:
      "Detailed breakdown of our 8 digital services, deliverables, timeline, technologies, and client benefits.",
    url: "https://theoginfotech.com/services",
  },
};

interface ServiceInDepth {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  whoIsThisFor: string;
  detailedScope: string[];
  deliverables: string[];
  techStack: string[];
  timeline: string;
  roiOutcome: string;
  icon: React.ComponentType<{ className?: string }>;
}

const servicesInDepth: ServiceInDepth[] = [
  {
    id: "website-development",
    number: "01",
    title: "Website Development",
    category: "Full-Stack Web Engineering",
    tagline: "High-Performance Next.js Websites Engineered for Google Top Rankings",
    whoIsThisFor: "Businesses wanting to dominate Google search rankings, replace slow legacy websites, or launch fast e-commerce portals.",
    detailedScope: [
      "Custom development with Next.js 15 App Router & React 19 (Zero bloat)",
      "Guaranteed 100/100 Google Core Web Vitals score (LCP < 1.2s, CLS = 0)",
      "Programmatic SEO architecture with JSON-LD schema markup & OpenGraph tags",
      "Seamless CMS integration (Sanity, Strapi, or headless WordPress)",
      "Fluid responsive design optimized from 4K large monitors down to mobile screens",
      "Automated CI/CD pipeline deployment on Vercel or Cloudflare Edge Network"
    ],
    deliverables: [
      "Production-ready Next.js web application",
      "100% intellectual property & Git repository transfer",
      "Integrated client CMS dashboard for easy content updates",
      "Google Search Console sitemap indexing & Google Analytics 4 integration"
    ],
    techStack: ["Next.js 15", "React 19", "TypeScript 5", "Tailwind CSS", "Vercel / Cloudflare"],
    timeline: "2 to 4 Weeks",
    roiOutcome: "100/100 PageSpeed & 3.2x faster organic search lead generation",
    icon: Globe,
  },
  {
    id: "mobile-app-development",
    number: "02",
    title: "Mobile App Development",
    category: "iOS & Android Engineering",
    tagline: "Smooth 60fps Native Performance with Flutter & React Native",
    whoIsThisFor: "Startups and enterprises needing scalable, high-retention mobile apps published on the Apple App Store and Google Play Store.",
    detailedScope: [
      "Cross-platform parity: identical high-fidelity experience on iOS and Android",
      "Hardware-accelerated 60fps animations and fluid touch gesture controls",
      "Encrypted offline storage (SQLite/Hive) allowing full offline functionality",
      "Push notification systems (Firebase Cloud Messaging / OneSignal)",
      "In-app payments (Apple Pay, Google Pay, Stripe) and biometric login",
      "Complete submission management through App Store Connect & Google Play Console"
    ],
    deliverables: [
      "Signed production builds (.ipa for iOS & .aab for Android)",
      "Direct publishing on Apple App Store & Google Play Store",
      "Complete Flutter / React Native source code and assets",
      "RESTful API backend documentation and Postman collections"
    ],
    techStack: ["Flutter", "Dart", "React Native", "Firebase", "Node.js REST APIs"],
    timeline: "4 to 8 Weeks",
    roiOutcome: "Unified codebase saving 50% on development and maintenance costs",
    icon: Smartphone,
  },
  {
    id: "web-design",
    number: "03",
    title: "Modern Web Design",
    category: "Creative Front-End Layouts",
    tagline: "Conversion-Focused Editorial Visuals with Modern Glassmorphism",
    whoIsThisFor: "Brands seeking to stand out from generic competitors with unforgettable, visually stunning, and highly engaging digital storefronts.",
    detailedScope: [
      "Bespoke layout design tailored to your brand psychology and audience expectations",
      "Luxury glassmorphism, dynamic lighting gradients, and subtle micro-animations",
      "Strict WCAG 2.1 AA accessibility contrast compliance for effortless readability",
      "Mobile-first responsive fluid grid systems",
      "Interactive component states (hover, active, focus, loading)"
    ],
    deliverables: [
      "High-fidelity Figma design boards for all breakpoints",
      "Interactive clickable design prototype for user testing",
      "Production-ready vector SVG assets and custom illustrations",
      "Detailed design token specifications for developers"
    ],
    techStack: ["Figma Auto-Layout", "Adobe Creative Cloud", "CSS Glassmorphism", "Framer"],
    timeline: "1 to 2 Weeks",
    roiOutcome: "+180% average user engagement and session dwell time",
    icon: Layout,
  },
  {
    id: "graphic-design",
    number: "04",
    title: "Graphic Design & Branding",
    category: "Visual Identity Systems",
    tagline: "Distinctive Brand Identities That Command Instant Industry Trust",
    whoIsThisFor: "Founders launching a new company or established enterprises needing a modernized corporate visual identity.",
    detailedScope: [
      "Vector-crafted primary and secondary logo marks with icon variations",
      "Comprehensive typography hierarchy and bespoke color palette manual",
      "Social media marketing creative kit for LinkedIn, Instagram, and Twitter",
      "High-converting investor pitch deck presentations",
      "Print-ready business stationery (business cards, letterheads, packaging in 300 DPI CMYK)"
    ],
    deliverables: [
      "Master vector files (.AI, .EPS, .SVG, .PDF, high-res .PNG)",
      "Comprehensive Corporate Brand Guidelines PDF",
      "Social media banner and post template package",
      "Complete commercial license transfer documentation"
    ],
    techStack: ["Adobe Illustrator", "Photoshop", "InDesign", "Vector Mathematics"],
    timeline: "1 to 3 Weeks",
    roiOutcome: "Instant brand credibility and consistent multi-channel visual authority",
    icon: Palette,
  },
  {
    id: "ui-ux-design",
    number: "05",
    title: "UI / UX Design",
    category: "User Experience Architecture",
    tagline: "Human-Centered Design Systems Built on Real Usability Testing",
    whoIsThisFor: "SaaS products, complex web applications, and digital platforms experiencing user drop-off or needing intuitive workflows.",
    detailedScope: [
      "User persona research, competitor heuristic analysis, and customer journey mapping",
      "Low-fidelity wireframing to validate functional architecture and navigation flows",
      "Full Design System creation with atomic auto-layout tokens and reusable states",
      "High-fidelity clickable Figma prototype for real user testing and investor demos",
      "Comprehensive usability audit report for existing legacy software"
    ],
    deliverables: [
      "Complete Figma Design System with documentation",
      "Clickable interactive high-fidelity prototype",
      "Information architecture sitemap and user journey diagrams",
      "Detailed developer handoff specifications"
    ],
    techStack: ["Figma Auto-Layout", "Design Tokens", "FigJam", "Miro"],
    timeline: "2 to 4 Weeks",
    roiOutcome: "+45% increase in user funnel completion and drastically lower churn",
    icon: Compass,
  },
  {
    id: "custom-software",
    number: "06",
    title: "Custom Software Development",
    category: "Enterprise Software Engineering",
    tagline: "Scalable, High-Security Business Software Built to Eliminate Operational Bottlenecks",
    whoIsThisFor: "Companies whose operations have outgrown generic software and need custom CRMs, ERPs, workflow automation, or database systems.",
    detailedScope: [
      "Custom backend architecture using Node.js, Python FastAPI, or Go",
      "High-concurrency PostgreSQL and Redis database modeling with ACID guarantees",
      "Granular Role-Based Access Control (RBAC) with audit logging",
      "Enterprise third-party API integrations (Payment gateways, ERPs, Webhooks)",
      "99.99% system uptime SLA with automated backups and disaster recovery protocols"
    ],
    deliverables: [
      "Complete, modular, well-documented source code in private Git repo",
      "Interactive Swagger / OpenAPI documentation",
      "Containerized Docker setup ready for one-click cloud deployment",
      "Database migration scripts and security audit verification"
    ],
    techStack: ["Node.js", "Python FastAPI", "PostgreSQL", "Redis", "Docker", "AWS"],
    timeline: "4 to 12 Weeks",
    roiOutcome: "99.99% system availability and complete operational automation",
    icon: Terminal,
  },
  {
    id: "saas-platform",
    number: "07",
    title: "SaaS Platform Development",
    category: "Cloud Product Engineering",
    tagline: "End-to-End Multi-Tenant Cloud Products with Automated Recurring Billing",
    whoIsThisFor: "Entrepreneurs and companies launching a subscription-based software product looking to go from concept to live paying users fast.",
    detailedScope: [
      "Multi-tenant database architecture with strict tenant data isolation",
      "Automated Stripe subscription billing (monthly/annual tiers, trials, tax handling)",
      "Team and workspace management with invite links and role permissions",
      "Comprehensive telemetry dashboard tracking MRR, ARR, churn, and active usage",
      "Self-service onboarding flow designed for zero-touch user acquisition"
    ],
    deliverables: [
      "Complete SaaS web application with marketing landing page and app dashboard",
      "Stripe Customer Portal & billing webhook engine",
      "Admin master analytics and subscription management console",
      "Automated transactional email workflows (Resend / SendGrid)"
    ],
    techStack: ["Next.js 15", "TypeScript", "PostgreSQL", "Stripe Billing", "Supabase", "AWS"],
    timeline: "4 to 8 Weeks",
    roiOutcome: "Live production MVP in 4 weeks ready to accept recurring revenue",
    icon: Layers,
  },
  {
    id: "ai-automation",
    number: "08",
    title: "AI Automation & Workflows",
    category: "Intelligent Systems Engineering",
    tagline: "Intelligent 24/7 AI Agents and Automated Pipelines That Save 40+ Hours Weekly",
    whoIsThisFor: "Businesses spending excessive hours on repetitive customer support, manual lead qualification, data entry, or multi-app coordination.",
    detailedScope: [
      "Custom conversational AI customer support agents trained on proprietary company docs",
      "24/7 automated inbound lead qualification and calendar meeting scheduling",
      "Retrieval-Augmented Generation (RAG) vector search with Pinecone and OpenAI GPT-4o",
      "Multi-system workflow automation connecting Slack, Gmail, Notion, CRM, and databases",
      "Strict data privacy controls: zero public training on your company's proprietary data"
    ],
    deliverables: [
      "Custom conversational AI chatbot embeddable on website, WhatsApp, or Slack",
      "Automated n8n / Zapier enterprise workflow blueprints",
      "Private vector database indexing your company knowledge base",
      "Live analytics dashboard monitoring query speed, token usage, and accuracy"
    ],
    techStack: ["OpenAI GPT-4o", "Claude 3.5 Sonnet", "LangChain", "Pinecone", "n8n", "Python"],
    timeline: "1 to 3 Weeks",
    roiOutcome: "40+ hours saved weekly and 82%+ instant customer query resolution",
    icon: Sparkles,
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://theoginfotech.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "8 Core Services",
      item: "https://theoginfotech.com/services",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What digital services does THE OG INFOTECH provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "THE OG INFOTECH specializes in 8 core digital services: Website Development, Mobile App Development (iOS & Android), Modern Web Design, Graphic Design & Branding, UI/UX Design, Custom Software Development, SaaS Platforms, and AI Automation Workflows.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a website development project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most standard website development projects are completed within 1 to 2 weeks, while complex full-stack SaaS platforms and mobile apps take between 3 to 6 weeks with weekly staging demos.",
      },
    },
    {
      "@type": "Question",
      name: "Who owns the code and intellectual property after completion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You own 100% of all intellectual property, source code repositories, Figma design assets, and database schemas upon project delivery. Zero vendor lock-in.",
      },
    },
    {
      "@type": "Question",
      name: "Are websites built by THE OG INFOTECH SEO optimized for Google ranking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, every website is engineered with Next.js Server-Side Rendering (SSR), 100/100 Core Web Vitals, JSON-LD Schema markup, structured metadata, and Google Search Console indexing configuration to achieve top search rankings.",
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#F9B384] via-[#F8AB79] via-[#F6A16B] to-[#F7A673] text-[#521D0E] selection:bg-[#521D0E] selection:text-white relative">
      {/* Google Breadcrumb & FAQPage Rich Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      {/* Sticky Header with Billboard Brand Style */}
      <header className="sticky top-0 z-50 bg-[#3B1408]/95 backdrop-blur-xl border-b border-white/20 text-white py-4 px-4 sm:px-8 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded-[50%] bg-white flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
              <Cpu className="w-5 h-5 text-[#FE3912]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-white text-base tracking-tight leading-none group-hover:text-orange-200 transition-colors">
                THE OG INFOTECH
              </span>
              <span className="text-[10px] font-mono text-orange-200 tracking-widest uppercase mt-1 font-semibold">
                8 Core Services Directory
              </span>
            </div>
          </Link>

          {/* Quick Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-orange-200/90">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/tech-stack" className="hover:text-white transition-colors">
              Tech Matrix
            </Link>
            <Link href="/case-studies" className="hover:text-white transition-colors">
              Case Studies
            </Link>
            <Link href="/methodology" className="hover:text-white transition-colors">
              4-Phase Delivery
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-200 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Home</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FE3912] hover:bg-[#E02E09] text-white text-xs font-bold rounded-xl transition-all shadow-md active:scale-95"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative">
        
        {/* SECTION 1: THE EXACT HOME PAGE SERVICES SECTION THAT USERS LOVE */}
        <div className="pt-8">
          <ServicesSection />
        </div>

        {/* SECTION 2: IN-DEPTH EXPLANATION FOR EACH SERVICE (Detailed Client Guide) */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#521D0E]/15">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="relative inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#FE3912] via-[#E02E09] to-[#C22405] backdrop-blur-xl border border-white/40 shadow-md text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse shadow-[0_0_6px_rgba(252,211,77,0.9)]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-bold">
                In-Depth Specifications & Deliverables
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#521D0E]">
              Detailed Breakdown: <span className="text-[#EA3412]">What You Receive</span>
            </h2>

            <p className="text-sm sm:text-base text-[#521D0E]/85 font-medium leading-relaxed">
              Every service is delivered with fixed pricing, clear weekly milestones, verified test suites, and 100% intellectual property transfer upon launch.
            </p>
          </div>

          {/* Detailed In-Depth Service Cards */}
          <div className="space-y-12">
            {servicesInDepth.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="rounded-3xl bg-gradient-to-br from-[#3B1408]/95 via-[#4A1A0C]/95 to-[#260B03]/95 text-white border border-white/20 p-8 sm:p-12 shadow-[0_20px_45px_rgba(82,29,14,0.4)] relative overflow-hidden"
                >
                  {/* Decorative Glow */}
                  <div 
                    aria-hidden="true" 
                    className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 bg-[#FE3912]/20 rounded-full blur-[100px]" 
                  />

                  {/* Header Row */}
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/15">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#FE3912] shadow-inner">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-[#FE3912] font-bold">
                          Service {service.number} · {service.category}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/20">
                        <Clock className="w-3.5 h-3.5 text-[#FE3912]" />
                        {service.timeline}
                      </span>
                      <span className="inline-flex items-center text-xs font-mono font-bold text-orange-200 bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/20">
                        {service.roiOutcome}
                      </span>
                    </div>
                  </div>

                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    {/* Left Column: Tagline & Who it's for & Capabilities */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="p-4 rounded-2xl bg-white/10 border border-white/15">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-orange-200/70 font-bold block mb-1">
                          Core Objective
                        </span>
                        <p className="text-sm font-semibold text-white">
                          {service.tagline}
                        </p>
                      </div>

                      <div className="space-y-1">
                        <span className="text-xs font-mono uppercase tracking-wider text-orange-200/70 font-bold">
                          Who This Service Is For:
                        </span>
                        <p className="text-xs sm:text-sm text-orange-100/80 leading-relaxed font-normal">
                          {service.whoIsThisFor}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#FE3912] font-bold block">
                          Comprehensive Scope of Engineering:
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.detailedScope.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-orange-100/90 leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-[#FE3912] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column: Deliverables & Tech Stack & CTA */}
                    <div className="lg:col-span-5 p-6 rounded-2xl bg-white/10 border border-white/15 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <div>
                          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold block mb-2">
                            Client Deliverables Handover:
                          </span>
                          <ul className="space-y-2">
                            {service.deliverables.map((del, dIdx) => (
                              <li key={dIdx} className="flex items-center gap-2 text-xs text-orange-100/85">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                                <span>{del}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <span className="text-xs font-mono uppercase tracking-widest text-orange-200/70 font-bold block mb-2">
                            Production Technology Stack:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {service.techStack.map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/10 border border-white/20 text-white font-semibold"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/15">
                        <Link
                          href={`/contact?service=${service.id}`}
                          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FE3912] hover:bg-[#E02E09] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95"
                        >
                          <span>Get Free Quote for {service.title}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Enterprise Guarantees Banner */}
          <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#3B1408] text-white border border-white/20 shadow-xl">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Our 3-Point Enterprise Guarantee
              </h3>
              <p className="text-sm text-orange-200/80">
                Every service comes with strict contractual guarantees to eliminate technical and commercial risk.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/10 border border-white/15 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FE3912]/20 border border-[#FE3912]/40 flex items-center justify-center text-[#FE3912]">
                  <Lock className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-white">Strict Mutual NDA</h4>
                <p className="text-xs text-orange-100/75 leading-relaxed">
                  Your business logic, IP, and proprietary data are protected under a signed NDA before any technical discussions begin.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/10 border border-white/15 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FE3912]/20 border border-[#FE3912]/40 flex items-center justify-center text-[#FE3912]">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-white">100% IP & Source Code Ownership</h4>
                <p className="text-xs text-orange-100/75 leading-relaxed">
                  You own 100% of the source code, design assets, database schemas, and commercial copyrights upon completion.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/10 border border-white/15 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FE3912]/20 border border-[#FE3912]/40 flex items-center justify-center text-[#FE3912]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-white">30-Day Post-Launch SLA Warranty</h4>
                <p className="text-xs text-orange-100/75 leading-relaxed">
                  We guarantee 30 days of complimentary post-launch support covering bug fixes, speed tuning, and smooth handoff.
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#FE3912] hover:bg-[#E02E09] text-white font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-xl active:scale-95"
              >
                <span>Schedule a Scoping Call with Our Lead Architect</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </section>

      </main>

      {/* Corporate Multi-Column Footer */}
      <Footer />
    </div>
  );
}
