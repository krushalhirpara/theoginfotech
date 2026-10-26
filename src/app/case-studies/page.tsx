import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  Cpu, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Users, 
  Clock, 
  CheckCircle2, 
  Quote, 
  Award,
  Globe,
  Smartphone,
  Database,
  Layers,
  Sparkles,
  BarChart3
} from "lucide-react";
import { CaseStudies } from "@/components/content/CaseStudies";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Client Case Studies & Verified Production Results | THE OG INFOTECH",
  description:
    "Explore in-depth case studies showcasing how THE OG INFOTECH delivered +260% sales growth, 4.9★ Flutter mobile apps, and 45+ hours saved weekly through SaaS and AI automation.",
  alternates: {
    canonical: "https://theoginfotech.com/case-studies",
  },
  openGraph: {
    title: "Client Case Studies & Engineering Outcomes | THE OG INFOTECH",
    description:
      "Hard metrics and production benchmarks: E-Commerce, Logistics Mobile Apps, and B2B SaaS & AI Automation.",
    url: "https://theoginfotech.com/case-studies",
  },
};

interface CaseStudyInDepth {
  id: string;
  caseNumber: string;
  clientSector: string;
  tag: string;
  title: string;
  headline: string;
  background: string;
  clientChallenge: {
    problem: string;
    impact: string;
    rootCauses: string[];
  };
  ourSolution: {
    strategy: string;
    keyMilestones: string[];
  };
  results: {
    label: string;
    value: string;
    comparison: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
  techStack: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  deliverablesDelivered: string[];
}

const detailedCases: CaseStudyInDepth[] = [
  {
    id: "ecommerce-web",
    caseNumber: "01",
    clientSector: "E-Commerce & High-Growth Retail",
    tag: "Website Dev & UI/UX Redesign",
    title: "High-Performance Website Development & UI/UX Redesign Boosting Sales +260%",
    headline: "Transforming a Sluggish 5.4s Store into a Sub-Second Conversion Machine",
    background:
      "A fast-growing direct-to-consumer lifestyle brand was driving over 150,000 monthly visitors through paid Instagram and Google Ads, but was losing over 65% of potential buyers due to slow page loads, confusing mobile navigation, and frequent checkout drop-offs.",
    clientChallenge: {
      problem: "Heavy legacy WordPress plugins and unoptimized asset delivery were crippling the store's conversion rate.",
      impact: "The average mobile page load took 5.4 seconds, resulting in an unbearable 68% bounce rate and low Google search visibility.",
      rootCauses: [
        "Uncached monolithic database queries choking during peak flash sales",
        "Cluttered desktop-centric navigation impossible to browse on mobile phones",
        "Multi-step checkout requiring 5 separate page loads before payment",
        "Poor Google Core Web Vitals resulting in high paid ad CPC and low organic rank",
      ],
    },
    ourSolution: {
      strategy:
        "We completely re-architected the store using Next.js 15 App Router with Tailwind CSS styling, coupled with Cloudflare Edge CDN caching and a streamlined 1-step frictionless checkout modal.",
      keyMilestones: [
        "Conducted in-depth UX audit and mapped a frictionless 2-tap path from product page to checkout",
        "Migrated frontend to Next.js 15 React Server Components, pre-rendering HTML at edge nodes",
        "Optimized image pipelines with automatic WebP/AVIF compression reducing page weight by 84%",
        "Implemented structured schema markup (Product, Offer, Review) for rich Google search snippets",
      ],
    },
    results: [
      {
        label: "Mobile PageSpeed",
        value: "99/100",
        comparison: "Improved from 32/100 legacy score",
        icon: Zap,
      },
      {
        label: "Organic Google SEO Rank",
        value: "#1 Position",
        comparison: "+340% increase in organic search traffic",
        icon: TrendingUp,
      },
      {
        label: "Checkout Conversion",
        value: "+260% Lift",
        comparison: "Total monthly sales more than doubled in 60 days",
        icon: ShieldCheck,
      },
      {
        label: "Mobile Bounce Rate",
        value: "22% Down",
        comparison: "Dropped from 68% down to 22%",
        icon: BarChart3,
      },
    ],
    techStack: [
      "Next.js 15 (App Router)",
      "React 19",
      "Tailwind CSS",
      "TypeScript 5",
      "Cloudflare Edge CDN",
      "Stripe Payments",
    ],
    testimonial: {
      quote:
        "THE OG INFOTECH transformed our entire business trajectory. Our mobile site loads instantly, our ad conversion rate went through the roof, and we reached the #1 rank on Google for our top commercial keywords within 8 weeks.",
      author: "Marcus Vance",
      role: "Founder & Head of Growth, Artisan Living Goods",
    },
    deliverablesDelivered: [
      "Custom responsive Next.js 15 e-commerce storefront",
      "Complete Figma design tokens & UI component kit",
      "1-step frictionless checkout with Apple Pay & Google Pay",
      "Automated Google Merchant Center & structured schema integration",
      "Global CDN caching rules with sub-50ms edge delivery",
    ],
  },
  {
    id: "mobile-app",
    caseNumber: "02",
    clientSector: "On-Demand Logistics & Booking Platform",
    tag: "Mobile App Development (iOS & Android)",
    title: "Cross-Platform Flutter Mobile App with Real-Time Booking & Push Notifications",
    headline: "Engineering a 60 FPS Dual-Platform App with Sub-Second Telemetry Sync",
    background:
      "A fast-scaling logistics startup needed to deploy a customer-facing booking app and a driver companion app across both Apple iOS and Google Android within a strict 6-week investor deadline.",
    clientChallenge: {
      problem: "Building separate native Swift and Kotlin apps was projected to take 16 weeks and double the development budget.",
      impact: "Competitors were capturing market share while driver dispatch delays caused poor early customer ratings.",
      rootCauses: [
        "Lack of unified codebase forcing separate teams for iOS and Android",
        "Unreliable WebSocket connections dropping driver GPS coordinates mid-transit",
        "App crashes when cellular connectivity switched from 5G to offline dead-zones",
        "Complex App Store and Google Play compliance review guidelines",
      ],
    },
    ourSolution: {
      strategy:
        "We engineered a unified cross-platform mobile application in Flutter (Dart 3) powered by Google's Impeller GPU rendering engine, backed by Firebase Realtime Database and offline SQLite queueing.",
      keyMilestones: [
        "Crafted a unified Figma design system strictly adhering to Apple and Material Design guidelines",
        "Developed low-battery GPS tracking algorithms transmitting live telemetry every 1.5 seconds",
        "Integrated offline-first SQLite cache allowing drivers to complete deliveries without active internet",
        "Managed end-to-end App Store and Google Play submissions with 100% first-attempt approval",
      ],
    },
    results: [
      {
        label: "Store App Rating",
        value: "4.9 ★ Rating",
        comparison: "15,000+ 5-star customer reviews across stores",
        icon: ShieldCheck,
      },
      {
        label: "Cross-Platform Launch",
        value: "5 Weeks",
        comparison: "Delivered 1 week ahead of the strict 6-week deadline",
        icon: Clock,
      },
      {
        label: "Monthly Active Users",
        value: "220,000+",
        comparison: "Zero reported crashes in production telemetry",
        icon: Users,
      },
      {
        label: "Driver Dispatch Latency",
        value: "< 1.2 sec",
        comparison: "Reduced booking wait time by 74%",
        icon: Zap,
      },
    ],
    techStack: [
      "Flutter & Dart 3",
      "Impeller 2D Engine",
      "Firebase FCM & Realtime DB",
      "Google Maps SDK",
      "Apple Pay & Google Pay",
      "SQLite Offline Sync",
    ],
    testimonial: {
      quote:
        "Launching our app on both iOS and Android in 5 weeks without a single crash seemed impossible until we partnered with THE OG INFOTECH. Their Flutter engineering is genuinely world-class.",
      author: "Elena Rostova",
      role: "Chief Operating Officer, SwiftRoute Mobility",
    },
    deliverablesDelivered: [
      "Production-ready Flutter customer booking app (iOS & Android)",
      "Companion driver dispatch and telemetry tracking mobile application",
      "Real-time Firebase push notification & SMS webhook alert system",
      "App Store & Google Play Store publishing with full compliance approvals",
      "Comprehensive mobile codebase documentation and architectural schematics",
    ],
  },
  {
    id: "saas-ai",
    caseNumber: "03",
    clientSector: "B2B SaaS & Professional Services",
    tag: "Custom SaaS Platform & AI Automation",
    title: "Custom SaaS Platform & AI Workflow Automation Saving 45 Hours Every Week",
    headline: "Automating Complex Document Ingestion, Billing & Customer Support with AI Agents",
    background:
      "A B2B consulting firm managing corporate compliance was drowning in repetitive manual paperwork, unorganized client email threads, and fragmented invoice collection.",
    clientChallenge: {
      problem: "Staff spent over 40 hours each week manually reviewing PDF attachments, typing data into spreadsheets, and chasing unpaid invoices.",
      impact: "Client onboarding took 4 to 6 business days, leading to high drop-offs and capping the firm's client capacity.",
      rootCauses: [
        "Zero centralized portal for clients to securely upload compliance documents",
        "Manual data re-entry across three legacy spreadsheets and a desktop CRM",
        "Delayed customer support response times averaging 14 hours during busy weeks",
        "Manual bank wire checks causing severe cash flow delays and accounting errors",
      ],
    },
    ourSolution: {
      strategy:
        "We designed and built a multi-tenant cloud SaaS dashboard with automated Stripe recurring subscription billing, powered by private OpenAI GPT-4o document parsers and n8n webhook automations.",
      keyMilestones: [
        "Architected a secure PostgreSQL relational database with Row-Level Security (RLS) for tenant isolation",
        "Engineered an automated AI document parser extracting key legal data from PDFs in under 4 seconds",
        "Integrated n8n workflow triggers connecting Typeform, Google Drive, Slack, and the database",
        "Configured self-serve Stripe billing portal with automated prorated charges and failed payment retry logic",
      ],
    },
    results: [
      {
        label: "Weekly Admin Saved",
        value: "45+ Hours",
        comparison: "100% automated client intake and verification",
        icon: Zap,
      },
      {
        label: "Lead Response Time",
        value: "< 25 sec",
        comparison: "Instant AI engagement vs 14-hour manual delay",
        icon: Clock,
      },
      {
        label: "First Year ROI",
        value: "+410% Return",
        comparison: "Firm scaled client roster by 3.5x without hiring extra staff",
        icon: TrendingUp,
      },
      {
        label: "Client Onboarding",
        value: "Same-Day",
        comparison: "Reduced onboarding from 5 days to 15 minutes",
        icon: ShieldCheck,
      },
    ],
    techStack: [
      "Python 3.12 (FastAPI)",
      "Next.js 15 & React 19",
      "PostgreSQL & Prisma ORM",
      "OpenAI GPT-4o API",
      "n8n Automation Engine",
      "Stripe Subscriptions",
    ],
    testimonial: {
      quote:
        "The automated SaaS platform and AI workflows built by THE OG INFOTECH allowed us to scale from 40 to 140 corporate clients without hiring a single additional administrative employee. It paid for itself within 60 days.",
      author: "David Chen",
      role: "Managing Director, Apex Compliance Partners",
    },
    deliverablesDelivered: [
      "Custom multi-tenant cloud client portal with secure authentication",
      "Automated AI document ingestion engine with private vector parsing",
      "n8n webhook automations routing alerts to email, Slack, and CRM",
      "Stripe automated recurring billing with customer self-service portal",
      "Complete admin analytics dashboard with live revenue and usage telemetry",
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
      name: "Client Case Studies",
      item: "https://theoginfotech.com/case-studies",
    },
  ],
};

export default function CaseStudiesPage() {
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
                Client Case Studies
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
            <Link href="/tech-stack" className="hover:text-white transition-colors">
              Tech Matrix
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
        
        {/* SECTION 1: THE EXACT HOME PAGE CASE STUDIES COMPONENT */}
        <div className="pt-8">
          <CaseStudies />
        </div>

        {/* SECTION 2: IN-DEPTH EXPLANATION FOR EACH CASE STUDY (Detailed Project Deep Dives) */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#521D0E]/15">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="relative inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#FE3912] via-[#E02E09] to-[#C22405] backdrop-blur-xl border border-white/40 shadow-md text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse shadow-[0_0_6px_rgba(252,211,77,0.9)]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-bold">
                In-Depth Technical Audits & Deep Dives
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#521D0E]">
              Detailed Case Audits: <span className="text-[#EA3412]">Challenges, Architecture & ROI</span>
            </h2>

            <p className="text-sm sm:text-base text-[#521D0E]/85 font-medium leading-relaxed">
              Explore the exact technical challenges, engineering decisions, and measurable commercial results achieved for our clients across E-Commerce, Mobile Apps, and Enterprise SaaS & AI.
            </p>
          </div>

          {/* Detailed In-Depth Case Study Cards */}
          <div className="space-y-16">
            {detailedCases.map((cs) => (
              <div
                key={cs.id}
                id={cs.id}
                className="bg-[#3B1408]/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20 shadow-2xl text-white scroll-mt-24"
              >
                {/* Case Header */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-white/15">
                  <div className="space-y-2 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-mono font-bold text-amber-300 tracking-wider">
                        CASE STUDY {cs.caseNumber}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/15 text-orange-200 border border-white/20">
                        {cs.clientSector}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#FE3912]/30 text-amber-200 border border-[#FE3912]/40">
                        {cs.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                      {cs.title}
                    </h3>
                    <p className="text-base text-orange-200 font-semibold">
                      {cs.headline}
                    </p>
                    <p className="text-xs sm:text-sm text-orange-100/80 leading-relaxed pt-1">
                      {cs.background}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FE3912] to-[#B32607] text-white text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all shadow-md active:scale-95 shrink-0"
                  >
                    <span>Request Similar Results</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Hard Metrics Grid */}
                <div className="py-8 border-b border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-amber-300 block mb-4">
                    Verified Production Benchmarks & Outcomes:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {cs.results.map((res, i) => {
                      const ResIcon = res.icon;
                      return (
                        <div
                          key={i}
                          className="bg-white/5 border border-white/15 rounded-2xl p-4 text-center space-y-2 hover:bg-white/10 transition-all"
                        >
                          <div className="w-8 h-8 rounded-full bg-[#FE3912]/20 border border-[#FE3912]/40 mx-auto flex items-center justify-center">
                            <ResIcon className="w-4 h-4 text-amber-300" />
                          </div>
                          <span className="block text-2xl font-extrabold text-amber-300">
                            {res.value}
                          </span>
                          <span className="block text-xs font-bold text-white uppercase tracking-wider">
                            {res.label}
                          </span>
                          <span className="block text-[11px] text-orange-200/80">
                            {res.comparison}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Challenge vs Solution Breakdown */}
                <div className="py-8 grid grid-cols-1 lg:grid-cols-2 gap-8 border-b border-white/10">
                  {/* The Challenge */}
                  <div className="bg-red-950/30 border border-red-500/20 rounded-2xl p-6 space-y-4">
                    <div className="flex items-center gap-2 text-red-300 font-bold text-sm uppercase tracking-wider font-mono">
                      <span>⚠ The Operational Bottleneck</span>
                    </div>
                    <p className="text-sm text-red-100 font-medium leading-relaxed">
                      {cs.clientChallenge.problem}
                    </p>
                    <p className="text-xs text-red-200/90 italic">
                      Commercial Impact: {cs.clientChallenge.impact}
                    </p>
                    <div className="space-y-2 pt-2 border-t border-red-500/20">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-red-300 font-bold block">
                        Root Causes Identified:
                      </span>
                      <ul className="space-y-1.5">
                        {cs.clientChallenge.rootCauses.map((rc, idx) => (
                          <li key={idx} className="text-xs text-red-100/90 flex items-start gap-2">
                            <span className="text-red-400 mt-0.5">•</span>
                            <span>{rc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* The Solution */}
                  <div className="bg-green-950/30 border border-green-500/20 rounded-2xl p-6 space-y-4">
                    <div className="flex items-center gap-2 text-green-300 font-bold text-sm uppercase tracking-wider font-mono">
                      <span>✓ Our Engineering Solution</span>
                    </div>
                    <p className="text-sm text-green-100 font-medium leading-relaxed">
                      {cs.ourSolution.strategy}
                    </p>
                    <div className="space-y-2 pt-2 border-t border-green-500/20">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-green-300 font-bold block">
                        Execution Milestones Delivered:
                      </span>
                      <ul className="space-y-1.5">
                        {cs.ourSolution.keyMilestones.map((km, idx) => (
                          <li key={idx} className="text-xs text-green-100/90 flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                            <span>{km}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Tech Stack & Key Deliverables */}
                <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-white/10">
                  <div className="space-y-3">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-amber-300 block">
                      Technologies Implemented:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {cs.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-mono px-3 py-1.5 rounded-xl bg-white/10 text-orange-100 border border-white/15"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-amber-300 block">
                      Deliverables Handed to Client:
                    </span>
                    <ul className="space-y-1 text-xs text-orange-100/90">
                      {cs.deliverablesDelivered.map((deliv, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-amber-300 font-bold">✓</span>
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Client Quote & Endorsement */}
                <div className="pt-6 flex items-start gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                  <Quote className="w-8 h-8 text-[#FE3912] shrink-0 opacity-80" />
                  <div className="space-y-2">
                    <p className="text-sm sm:text-base italic text-white leading-relaxed font-light">
                      &ldquo;{cs.testimonial.quote}&rdquo;
                    </p>
                    <div className="text-xs">
                      <span className="font-bold text-amber-300 block">
                        {cs.testimonial.author}
                      </span>
                      <span className="text-orange-200/80">
                        {cs.testimonial.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Audit CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-[#FE3912] via-[#E02E09] to-[#C22405] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Want Similar Verified Results for Your Digital Product?
              </h3>
              <p className="text-sm sm:text-base text-orange-100 font-medium">
                Let&apos;s review your current website, mobile app, or software architecture. We will identify speed bottlenecks and outline an actionable engineering blueprint to scale your revenue.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-orange-100 text-[#FE3912] font-extrabold rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider"
                >
                  Book Your Project Discovery Call
                </Link>
                <Link
                  href="/methodology"
                  className="w-full sm:w-auto px-6 py-3.5 bg-black/20 hover:bg-black/30 text-white font-bold rounded-xl transition-all border border-white/30 text-sm uppercase tracking-wider"
                >
                  View 4-Phase Delivery Process
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
