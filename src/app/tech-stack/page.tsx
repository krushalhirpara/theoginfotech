import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  Cpu, 
  Layers, 
  Server, 
  Smartphone, 
  Database, 
  Sparkles, 
  ShieldCheck, 
  Gauge, 
  CheckCircle2, 
  Zap,
  Code2,
  Lock,
  Globe,
  Terminal,
  HelpCircle,
  Award
} from "lucide-react";
import { TechMatrix } from "@/components/content/TechMatrix";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Technology Matrix & Architecture Specifications | THE OG INFOTECH",
  description:
    "Explore THE OG INFOTECH's battle-tested technology matrix: Next.js 15, React 19, TypeScript, Flutter, Python, Node.js, PostgreSQL, OpenAI GPT-4o, and n8n workflow automation.",
  alternates: {
    canonical: "https://theoginfotech.com/tech-stack",
  },
  openGraph: {
    title: "Enterprise Technology Matrix & Stack Specs | THE OG INFOTECH",
    description:
      "Production-grade engineering standards built for speed, zero downtime, and infinite scalability.",
    url: "https://theoginfotech.com/tech-stack",
  },
};

interface TechDetail {
  name: string;
  role: string;
  spec: string;
  whyWeUseIt: string;
  clientBenefit: string;
}

interface TechCategoryDetail {
  id: string;
  categoryNumber: string;
  title: string;
  badge: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  overview: string;
  keyMetrics: { label: string; value: string }[];
  technologies: TechDetail[];
  bestSuitedFor: string[];
}

const techCategoryDetails: TechCategoryDetail[] = [
  {
    id: "web-frontend",
    categoryNumber: "01",
    title: "Website & Frontend Engineering",
    badge: "Client-Side Speed & SEO",
    tagline: "Sub-Second Page Loads, 100/100 Core Web Vitals & Top Google Rank",
    icon: Code2,
    overview:
      "Every millisecond of load time directly affects user retention and sales conversion. We engineer frontend architectures using Next.js 15 App Router, React 19 Server Components, and Tailwind CSS to guarantee sub-second page loads, zero client bundle bloat, and automated Google SEO indexing.",
    keyMetrics: [
      { label: "Core Web Vitals", value: "100/100 Score" },
      { label: "Time-to-Interactive", value: "< 0.8s Global" },
      { label: "Search Visibility", value: "Google #1 Ready" },
      { label: "Mobile Responsiveness", value: "100% Fluid" },
    ],
    technologies: [
      {
        name: "Next.js 15 (App Router)",
        role: "Full-Stack Web Architecture & Server Components",
        spec: "React Server Components (RSC) + Edge Streaming + Dynamic Pre-rendering",
        whyWeUseIt: "Renders HTML directly on server edges before sending to the client, eliminating blank loading screens.",
        clientBenefit: "Massive SEO advantage with search engines and instant initial page renders on mobile devices.",
      },
      {
        name: "React 19 & Concurrent Engine",
        role: "Component User Interface & State Management",
        spec: "Actions, Asset Pre-loading & Optimistic UI Updates",
        whyWeUseIt: "Modern hooks and compiler optimizations keep the interface buttery-smooth under heavy user interactions.",
        clientBenefit: "Zero layout shifts, fluid page navigation, and a world-class application feel for your customers.",
      },
      {
        name: "TypeScript 5+ (Strict Mode)",
        role: "Type-Safe Robust Codebase & Zero-Error Standard",
        spec: "Strict Type Inference, Interface Contracts & Compile-Time Audits",
        whyWeUseIt: "Catches 95%+ of logical bugs before code ever deploys to staging or production.",
        clientBenefit: "Stable, reliable software that doesn't crash on users or leak edge-case errors.",
      },
      {
        name: "Tailwind CSS & Utility Design Tokens",
        role: "Responsive Modern Utility Styling & Animation",
        spec: "JIT Compilation with ultra-compact purge optimization (<50KB Gzip)",
        whyWeUseIt: "Allows rapid implementation of bespoke, luxury brand aesthetics without heavy CSS file overhead.",
        clientBenefit: "Fast loading on cellular networks and pixel-perfect responsiveness across all screen sizes.",
      },
      {
        name: "WordPress & Headless CMS Architecture",
        role: "Content Management Systems for Marketing Teams",
        spec: "Custom Gutenberg blocks, ACF Pro & Headless REST/GraphQL endpoints",
        whyWeUseIt: "Empowers non-technical marketing teams to publish blog articles and edit pages safely.",
        clientBenefit: "Total independence for your marketing team without touching code or risking site downtime.",
      },
      {
        name: "Vercel & Cloudflare Edge CDN",
        role: "Global Low-Latency Deployment & Edge Caching",
        spec: "Global Anycast DNS, SSL/TLS 1.3, DDoS Mitigation & HTTP/3",
        whyWeUseIt: "Caches and serves assets from over 300 edge nodes worldwide for sub-50ms responses.",
        clientBenefit: "Your website opens instantly anywhere in the world, whether your customer is in the US, Europe, or India.",
      },
    ],
    bestSuitedFor: [
      "High-converting corporate company websites",
      "E-commerce stores requiring instant checkouts",
      "Marketing landing pages running paid ad traffic",
      "Content portals and digital media publications",
    ],
  },
  {
    id: "mobile-development",
    categoryNumber: "02",
    title: "Mobile App Development (iOS & Android)",
    badge: "Cross-Platform & Native",
    tagline: "60 FPS Native Performance with Unified Single Codebase Efficiency",
    icon: Smartphone,
    overview:
      "Building separate codebases for iOS and Android inflates development budgets and doubles ongoing maintenance overhead. We engineer unified cross-platform mobile apps using Flutter and React Native that compile to native machine code, achieving 60fps animations, native hardware access, and rapid App Store delivery.",
    keyMetrics: [
      { label: "Rendering Performance", value: "60 FPS Fluid" },
      { label: "Codebase Reusability", value: "90%+ Shared" },
      { label: "Store Acceptance", value: "100% Pass Rate" },
      { label: "Crash-Free Rate", value: "99.9% Production" },
    ],
    technologies: [
      {
        name: "Flutter (Dart 3)",
        role: "Cross-Platform High-Performance Mobile Framework",
        spec: "Impeller / Skia Hardware-Accelerated 2D Rendering Engine",
        whyWeUseIt: "Draws directly to the GPU screen buffer, eliminating the slow JavaScript bridge entirely.",
        clientBenefit: "Identical, pixel-perfect UI and native fluid gestures on both iPhones and Android devices.",
      },
      {
        name: "React Native & Expo",
        role: "JavaScript-Native Mobile Applications",
        spec: "New Architecture: Fabric Renderer & TurboModules C++ bindings",
        whyWeUseIt: "Allows sharing components and business logic between your Next.js web app and mobile app.",
        clientBenefit: "Shorter time to market and lower engineering costs for products with both web and mobile presences.",
      },
      {
        name: "Swift & SwiftUI (Native iOS)",
        role: "Dedicated Apple Platform Engineering",
        spec: "Apple Human Interface Guidelines, WidgetKit & CoreData",
        whyWeUseIt: "Delivers deep integration with Apple hardware: Apple Pay, FaceID, and live lock-screen activities.",
        clientBenefit: "Premium, luxurious iOS user experience tailored for high-ticket Apple ecosystem users.",
      },
      {
        name: "Kotlin & Jetpack Compose (Native Android)",
        role: "Dedicated Google Android Engineering",
        spec: "Modern reactive declarative UI, Coroutines & Room Database",
        whyWeUseIt: "Handles Android fragmentation smoothly across thousands of diverse device models and screen sizes.",
        clientBenefit: "Dependable, crash-free performance across all Android devices, from budget phones to flagship foldables.",
      },
      {
        name: "Firebase & Supabase Auth & Telemetry",
        role: "Mobile Backend, Push Notifications & Realtime Sync",
        spec: "FCM Push Notifications, Offline Firestore & JWT Auth",
        whyWeUseIt: "Provides instant push notification delivery and automated local offline caching when offline.",
        clientBenefit: "Your users can continue using the app without WiFi; data synchronizes automatically upon reconnect.",
      },
      {
        name: "App Store & Google Play Publishing",
        role: "Store Submission, Review Compliance & Release Management",
        spec: "Apple App Store Guidelines & Google Play 14-day Testing Protocols",
        whyWeUseIt: "Navigates strict app store guidelines, privacy policy checks, and cryptographic signing.",
        clientBenefit: "Guaranteed smooth store approval without frustrating rejections or delayed marketing launches.",
      },
    ],
    bestSuitedFor: [
      "On-demand booking and ride-hailing services",
      "Customer loyalty, rewards, and fintech mobile apps",
      "Health, fitness, and lifestyle subscription platforms",
      "Field agent and warehouse tracking mobile tools",
    ],
  },
  {
    id: "uiux-design",
    categoryNumber: "03",
    title: "UI/UX & Creative Brand Design Systems",
    badge: "Visual Excellence & Conversion",
    tagline: "Human-Centric User Experiences & Distinctive High-End Brand Identities",
    icon: Layers,
    overview:
      "A software product can have great code, but if users find it confusing or unpolished, they leave. We combine cognitive UX psychology with luxury visual design to create user journeys that guide prospects directly to checkout, supported by scalable design tokens and comprehensive brand identity systems.",
    keyMetrics: [
      { label: "UX Task Completion", value: "98% Friction-Free" },
      { label: "Design System Tokens", value: "100% Standardized" },
      { label: "Brand Scalability", value: "Vector Crisp HD" },
      { label: "Prototype Fidelity", value: "Interactive Live" },
    ],
    technologies: [
      {
        name: "Figma & Auto-Layout 5",
        role: "Collaborative Interface Design & Clickable Prototypes",
        spec: "Component Variants, Variables, Tokens & Micro-Interactions",
        whyWeUseIt: "Allows clients to click through and test every screen of their app before we write a single line of code.",
        clientBenefit: "Complete visual clarity and zero surprises. You approve exactly how the product will look and feel.",
      },
      {
        name: "Adobe Illustrator",
        role: "Vector Brand Logos, Scalable Icons & Print Standards",
        spec: "Precision Bezier Vector Curves & CMYK/RGB Color Profiles",
        whyWeUseIt: "Produces logos and emblems that remain razor-sharp whether printed on a business card or displayed on a 4K screen.",
        clientBenefit: "Infinitely scalable brand assets that never pixelate, blur, or lose fidelity.",
      },
      {
        name: "Adobe Photoshop",
        role: "Creative Marketing Graphics & Photo Retouching",
        spec: "High-Bit Depth Color Grading, Layer Masks & Dynamic Compositions",
        whyWeUseIt: "Crafts high-impact marketing hero visuals, product showcases, and social media creative collateral.",
        clientBenefit: "Professional visual presence that instantly communicates credibility, luxury, and industry leadership.",
      },
      {
        name: "Clickable User Journey Simulation",
        role: "Interactive Prototype Usability Testing",
        spec: "Micro-FX transitions, form validation states & modal flows",
        whyWeUseIt: "Identifies and eliminates user confusion points early in the wireframe and mock-up stages.",
        clientBenefit: "Reduces post-launch rework and ensures your customers complete signups and purchases effortlessly.",
      },
      {
        name: "Comprehensive Brand Style Guides",
        role: "Typography, Color Palettes & Tone of Voice Guidelines",
        spec: "Brand books, typography scale, iconography rules & usage dos/don'ts",
        whyWeUseIt: "Provides an exhaustive guide for all your future marketing, social media, and digital campaigns.",
        clientBenefit: "Consistent, authoritative brand presence across every customer touchpoint.",
      },
      {
        name: "Design System Component Tokens",
        role: "Synchronized Code & Design Token Libraries",
        spec: "CSS variables, spacing scales, button states & dark mode tokens",
        whyWeUseIt: "Directly maps Figma design variables into Tailwind CSS classes and React component props.",
        clientBenefit: "New pages and features can be built in hours instead of weeks with 100% visual consistency.",
      },
    ],
    bestSuitedFor: [
      "Startups building their brand identity from scratch",
      "Legacy companies redesigning outdated portals",
      "SaaS dashboards requiring clear data visualization",
      "High-end consumer brands demanding luxury aesthetics",
    ],
  },
  {
    id: "software-saas-ai",
    categoryNumber: "04",
    title: "Custom Software, SaaS Platforms & AI Automation",
    badge: "Scale & Autonomous Systems",
    tagline: "Scalable Multi-Tenant Architectures & 24/7 Intelligent AI Agents",
    icon: Database,
    overview:
      "We build mission-critical enterprise software, multi-tenant SaaS platforms, and autonomous AI pipelines. From automated Stripe recurring billing to private vector database knowledge retrieval, our backends comfortably handle millions of requests with sub-15ms latency and 99.99% uptime.",
    keyMetrics: [
      { label: "API Route Latency", value: "< 15ms Avg" },
      { label: "System Availability", value: "99.99% Uptime" },
      { label: "Autonomous Workflows", value: "500+ App Connectors" },
      { label: "Data Integrity", value: "100% ACID Safe" },
    ],
    technologies: [
      {
        name: "Python 3.12 & FastAPI",
        role: "High-Performance Asynchronous AI & Data APIs",
        spec: "ASGI Async Event Loop, Pydantic Type Validation & OpenAPI",
        whyWeUseIt: "The premier language for AI model orchestration, data pipelines, and machine learning integration.",
        clientBenefit: "Blazing fast AI response times and seamless integration with the latest LLM technologies.",
      },
      {
        name: "Node.js & Express / NestJS",
        role: "Enterprise RESTful & GraphQL API Gateways",
        spec: "Event-driven asynchronous I/O with TypeScript validation",
        whyWeUseIt: "Handles massive volumes of concurrent connections with minimal memory footprint.",
        clientBenefit: "Your platform never slows down or bottlenecks during viral traffic spikes or flash sales.",
      },
      {
        name: "OpenAI GPT-4o & Claude 3.5 Sonnet",
        role: "Enterprise Conversational Agents & Autonomous LLMs",
        spec: "Function calling, JSON schema enforcement & RAG vector search",
        whyWeUseIt: "Provides human-grade reasoning to automate customer support, document parsing, and lead qualification.",
        clientBenefit: "Eliminates repetitive manual customer service tasks and resolves 80%+ of inquiries instantly.",
      },
      {
        name: "n8n, Make & Zapier Automation Hubs",
        role: "No-Code & Low-Code Workflow Automation",
        spec: "Webhooks, scheduled crons, multi-step triggers & error handling",
        whyWeUseIt: "Connects your CRM, billing, email, Slack, and database systems into automated pipelines.",
        clientBenefit: "Saves 40+ staff hours every week by eliminating manual data entry between disparate software tools.",
      },
      {
        name: "PostgreSQL & Prisma ORM",
        role: "Relational Multi-Tenant SaaS Database Engine",
        spec: "ACID compliance, connection pooling & Row-Level Security (RLS)",
        whyWeUseIt: "The industry standard for secure relational data storage, transactional integrity, and zero data loss.",
        clientBenefit: "Bulletproof data security and isolated tenant data ensuring enterprise client compliance.",
      },
      {
        name: "Stripe Recurring Billing & Subscriptions",
        role: "Automated Global SaaS Revenue Infrastructure",
        spec: "Stripe Billing, Webhook listeners, Customer Portal & Tax Automation",
        whyWeUseIt: "Handles credit cards, Apple Pay, SEPA, ACH, and automated invoicing across 135+ currencies.",
        clientBenefit: "Instant monetization with automated failed payment recovery and zero manual accounting hassle.",
      },
    ],
    bestSuitedFor: [
      "B2B SaaS subscription platforms",
      "Internal enterprise ERP and inventory tools",
      "Automated customer support AI chatbots",
      "Automated lead enrichment and sales pipelines",
    ],
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
      name: "Technology Matrix",
      item: "https://theoginfotech.com/tech-stack",
    },
  ],
};

export default function TechStackPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#F9B384] via-[#F8AB79] via-[#F6A16B] to-[#F7A673] text-[#521D0E] selection:bg-[#521D0E] selection:text-white relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
                Technology Matrix
              </span>
            </div>
          </Link>

          {/* Quick Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-orange-200/90">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/services" className="hover:text-white transition-colors">
              8 Services
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
        
        {/* SECTION 1: THE EXACT HOME PAGE TECH MATRIX COMPONENT */}
        <div className="pt-8">
          <TechMatrix />
        </div>

        {/* SECTION 2: IN-DEPTH EXPLANATION FOR EACH TECH STACK (Detailed Architecture Guide) */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#521D0E]/15">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="relative inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#FE3912] via-[#E02E09] to-[#C22405] backdrop-blur-xl border border-white/40 shadow-md text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse shadow-[0_0_6px_rgba(252,211,77,0.9)]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-bold">
                In-Depth Technical Specifications
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#521D0E]">
              Architecture Deep Dive: <span className="text-[#EA3412]">Why We Choose These Stacks</span>
            </h2>

            <p className="text-sm sm:text-base text-[#521D0E]/85 font-medium leading-relaxed">
              We don&apos;t follow fleeting trends. Every library, database, and cloud tool in our stack is chosen for maximum speed, strict type safety, zero runtime errors, and rock-solid scalability.
            </p>
          </div>

          {/* Detailed In-Depth Technology Category Cards */}
          <div className="space-y-16">
            {techCategoryDetails.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.id}
                  id={cat.id}
                  className="bg-[#3B1408]/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border border-white/20 shadow-2xl text-white scroll-mt-24"
                >
                  {/* Category Card Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-white/15">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#FE3912] to-[#B32607] flex items-center justify-center shadow-lg border border-white/30 shrink-0">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                          <span className="text-xs font-mono font-bold text-amber-300 tracking-wider">
                            CATEGORY {cat.categoryNumber}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/15 text-orange-200 border border-white/20">
                            {cat.badge}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                          {cat.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-orange-200/90 font-medium">
                          {cat.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Key Benchmarks */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 bg-white/5 p-2.5 sm:p-3 rounded-2xl border border-white/10">
                      {cat.keyMetrics.map((km, i) => (
                        <div key={i} className="text-center px-1.5 sm:px-2 py-1">
                          <span className="block text-[10px] font-mono text-orange-200/80 uppercase">
                            {km.label}
                          </span>
                          <span className="text-xs sm:text-sm font-extrabold text-amber-300">
                            {km.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Overview Text */}
                  <div className="py-6 border-b border-white/10">
                    <p className="text-sm sm:text-base text-orange-100/90 leading-relaxed font-normal">
                      {cat.overview}
                    </p>
                  </div>

                  {/* Individual Technologies Breakdown */}
                  <div className="py-6 sm:py-8 space-y-6">
                    <h4 className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-amber-300 flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-[#FE3912]" />
                      <span>Component Technologies & Client Value</span>
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                      {cat.technologies.map((tech, idx) => (
                        <div 
                          key={idx}
                          className="bg-white/5 hover:bg-white/10 border border-white/15 rounded-2xl p-4 sm:p-5 transition-all space-y-3"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                              {tech.name}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#FE3912]/30 text-orange-200 border border-[#FE3912]/40">
                              {tech.role}
                            </span>
                          </div>

                          <div className="text-xs font-mono text-orange-200/80 bg-black/20 p-2 rounded-lg border border-white/5">
                            {tech.spec}
                          </div>

                          <div className="space-y-1.5 text-xs text-orange-100/85">
                            <p>
                              <strong className="text-amber-300">Why We Use It: </strong>
                              {tech.whyWeUseIt}
                            </p>
                            <p>
                              <strong className="text-green-300">Client Benefit: </strong>
                              {tech.clientBenefit}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Best Suited For & Action Footer */}
                  <div className="pt-6 border-t border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-orange-200/80 font-bold block">
                        Recommended Use Cases:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {cat.bestSuitedFor.map((useCase, i) => (
                          <span
                            key={i}
                            className="text-xs px-2.5 py-1 rounded-lg bg-white/10 text-orange-100 font-medium border border-white/15"
                          >
                            ✓ {useCase}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FE3912] to-[#B32607] text-white text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all shadow-md active:scale-95 shrink-0"
                    >
                      <span>Build With This Stack</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Architecture Comparison Table */}
          <div className="mt-20 bg-[#3B1408]/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20 shadow-2xl text-white">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-amber-300">
                Modern Standards vs Legacy Stacks
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                How Our Modern Architecture Outperforms Traditional Agencies
              </h3>
              <p className="text-xs sm:text-sm text-orange-100/80 font-medium">
                Traditional agencies use heavy templates, unmaintained plugins, and outdated hosting that slow down your business.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/20 text-orange-200 font-mono text-[11px] uppercase tracking-wider">
                    <th className="py-3 px-4">Performance Metric</th>
                    <th className="py-3 px-4 text-red-300">Traditional Agency Stacks</th>
                    <th className="py-3 px-4 text-green-300 font-bold">THE OG INFOTECH Modern Stack</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Initial Page Load Speed</td>
                    <td className="py-3 px-4 text-red-300/80">3.5s to 6.2s (Heavy plugins)</td>
                    <td className="py-3 px-4 text-green-300 font-bold">&lt; 0.8s Global (Edge RSC)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Mobile Optimization</td>
                    <td className="py-3 px-4 text-red-300/80">Clunky desktop downscaling</td>
                    <td className="py-3 px-4 text-green-300 font-bold">100% Native Mobile & 60 FPS</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Google Core Web Vitals</td>
                    <td className="py-3 px-4 text-red-300/80">Fails LCP & CLS metrics</td>
                    <td className="py-3 px-4 text-green-300 font-bold">100/100 Lighthouse Certified</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">AI & Automation Support</td>
                    <td className="py-3 px-4 text-red-300/80">None / Manual data entry</td>
                    <td className="py-3 px-4 text-green-300 font-bold">Autonomous GPT-4o & n8n Workflows</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Code Security & Type Safety</td>
                    <td className="py-3 px-4 text-red-300/80">Untyped PHP / JavaScript bugs</td>
                    <td className="py-3 px-4 text-green-300 font-bold">Strict TypeScript 5 + Python Pydantic</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Code Ownership</td>
                    <td className="py-3 px-4 text-red-300/80">Proprietary lock-in or recurring rent</td>
                    <td className="py-3 px-4 text-green-300 font-bold">100% Intellectual Property Transfer</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom Consultation CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-[#FE3912] via-[#E02E09] to-[#C22405] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Need Help Choosing the Right Tech Stack for Your Project?
              </h3>
              <p className="text-sm sm:text-base text-orange-100 font-medium">
                Our Senior Solution Architects will audit your project requirements and recommend the optimal framework, database, and cloud infrastructure for your budget and timeline.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-orange-100 text-[#FE3912] font-extrabold rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider"
                >
                  Schedule Free Technical Audit
                </Link>
                <Link
                  href="/services"
                  className="w-full sm:w-auto px-6 py-3.5 bg-black/20 hover:bg-black/30 text-white font-bold rounded-xl transition-all border border-white/30 text-sm uppercase tracking-wider"
                >
                  Explore 8 Core Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
