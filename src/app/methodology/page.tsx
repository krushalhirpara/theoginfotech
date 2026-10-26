import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  Cpu, 
  Search, 
  Compass, 
  GitMerge, 
  Activity, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  FileText, 
  Award,
  Layers,
  Sparkles,
  HelpCircle,
  Lock,
  Code2
} from "lucide-react";
import { EngineeringWorkflow } from "@/components/content/EngineeringWorkflow";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "4-Phase Engineering Delivery Methodology — Detailed Guide | THE OG INFOTECH",
  description:
    "Learn about THE OG INFOTECH's disciplined 4-Phase Delivery Framework: Product Discovery & Wireframing, UI/UX & Creative Brand Design, Full-Stack Dev & AI Integration, and SEO Optimization & Global Launch.",
  alternates: {
    canonical: "https://theoginfotech.com/methodology",
  },
  openGraph: {
    title: "4-Phase Engineering Delivery Methodology | THE OG INFOTECH",
    description:
      "A battle-tested delivery framework guaranteeing on-time releases, fixed pricing, and 100/100 Core Web Vitals.",
    url: "https://theoginfotech.com/methodology",
  },
};

interface PhaseInDepth {
  phaseNumber: string;
  phaseId: string;
  title: string;
  tagline: string;
  timeline: string;
  clientTimeCommitment: string;
  icon: React.ComponentType<{ className?: string }>;
  objective: string;
  detailedActivities: string[];
  concreteDeliverables: string[];
  qualityReviewGate: string;
  toolsUsed: string[];
}

const detailedPhases: PhaseInDepth[] = [
  {
    phaseNumber: "Phase 01",
    phaseId: "discovery-wireframing",
    title: "Product Discovery & Wireframing",
    tagline: "Laying the Technical Foundation with Zero Ambiguity",
    timeline: "Week 01",
    clientTimeCommitment: "1 to 2 hours of collaborative discovery discussion",
    icon: Search,
    objective:
      "Before writing a single line of code, we thoroughly de-risk your project. We analyze your commercial goals, target audience, competitors, and conversion funnels to map out intuitive user flows and low-fidelity interactive Figma wireframes.",
    detailedActivities: [
      "In-depth stakeholder discovery workshop to extract core business goals and success metrics",
      "Competitive benchmarking and technical feasibility analysis across target platforms",
      "Comprehensive user persona mapping, conversion funnel paths, and information architecture",
      "Database entity relationship design (PostgreSQL / Supabase schemas) and API data flow mapping",
      "Low-fidelity interactive Figma wireframing to establish layout hierarchy before visual styling",
      "Fixed-price proposal, milestone deliverables schedule, and mutual NDA execution",
    ],
    concreteDeliverables: [
      "Technical Architecture Blueprint & Entity Relationship Diagram",
      "Comprehensive Scope of Work (SOW) specification document",
      "Low-fidelity clickable Figma wireframe sitemap",
      "Guaranteed timeline and commercial milestone schedule",
    ],
    qualityReviewGate:
      "Formal SOW Sign-Off & Architecture Approval Gate. No design or development commences until you are 100% aligned with the scope.",
    toolsUsed: ["Figma Wireframes", "Notion Documentation", "Miro Flowcharts", "PostgreSQL Schemas"],
  },
  {
    phaseNumber: "Phase 02",
    phaseId: "uiux-brand-design",
    title: "UI/UX & Creative Brand Design",
    tagline: "Pixel-Perfect Responsive Layouts & High-Impact Brand Identity",
    timeline: "Week 02",
    clientTimeCommitment: "Two 30-minute prototype walkthrough sessions",
    icon: Compass,
    objective:
      "A software product must not only work well — it must inspire trust, delight users, and make conversions effortless. In this phase, we craft custom brand visuals, design systems, modern typography scales, and a fully interactive clickable prototype.",
    detailedActivities: [
      "Creation of bespoke visual design tokens (colors, typography, spacing, elevation, border-radius)",
      "High-fidelity desktop, tablet, and mobile interface design for every page and state",
      "Custom vector iconography, logo refinement, and marketing graphic collateral (Adobe Illustrator)",
      "Micro-interaction and transition animation design to make the UI feel fluid and alive",
      "Clickable user journey simulation in Figma allowing you to test every click and modal flow",
      "Collaborative feedback rounds where your team can leave direct comments on design screens",
    ],
    concreteDeliverables: [
      "Full high-fidelity Figma design system with Auto-Layout components",
      "Complete Brand Style Guide (Typography, Hex Codes, Icon Rules, Usage Guidelines)",
      "Clickable interactive prototype ready for usability testing",
      "Exported vector SVG graphics and asset bundles for developers",
    ],
    qualityReviewGate:
      "Visual Design Acceptance Gate. You review and approve the exact interactive prototype before a single line of frontend code is written.",
    toolsUsed: ["Figma Auto-Layout", "Adobe Illustrator", "Adobe Photoshop", "Design Tokens"],
  },
  {
    phaseNumber: "Phase 03",
    phaseId: "fullstack-ai-dev",
    title: "Full-Stack Dev & AI Integration",
    tagline: "Production-Grade Engineering with Weekly Staging Demos",
    timeline: "Weeks 03 – 05",
    clientTimeCommitment: "One 20-minute weekly staging progress demo",
    icon: GitMerge,
    objective:
      "Transforming approved Figma designs into clean, type-safe, and high-performance production code. We build with modern stacks (Next.js 15, Flutter, Python, Node.js), integrate secure APIs, configure automated AI agents, and set up live staging previews.",
    detailedActivities: [
      "Frontend engineering using Next.js 15 App Router or Flutter for 60fps cross-platform mobile apps",
      "Backend API development with Node.js / Python FastAPI with strict type validation (TypeScript / Pydantic)",
      "Database provisioning, relational schema migrations, and index optimization (PostgreSQL / Redis)",
      "Artificial Intelligence agent integration (OpenAI GPT-4o / Claude 3.5) and vector retrieval (RAG)",
      "Automated workflow pipeline setup using n8n / Zapier webhooks to sync CRMs, emails, and Stripe billing",
      "Continuous Integration & Continuous Deployment (CI/CD) pipelines running automated test suites",
    ],
    concreteDeliverables: [
      "Private live staging URL where you can test features as they are built each week",
      "Clean, modular, and fully documented source code in a private Git repository",
      "Comprehensive REST / GraphQL API documentation and Swagger / Postman collections",
      "Automated test coverage for authentication, checkout, and critical user journeys",
    ],
    qualityReviewGate:
      "Functional Staging Walkthrough Gate. We demonstrate every completed feature on the live staging server for your verification and sign-off.",
    toolsUsed: ["Next.js 15", "Flutter 3", "Python FastAPI", "Node.js", "PostgreSQL", "OpenAI API", "GitHub CI/CD"],
  },
  {
    phaseNumber: "Phase 04",
    phaseId: "seo-global-launch",
    title: "SEO Optimization & Global Launch",
    tagline: "Google #1 SEO Schema, 100/100 Core Web Vitals & Zero-Downtime Deployment",
    timeline: "Week 06",
    clientTimeCommitment: "Final 30-minute launch handover and DNS configuration",
    icon: Activity,
    objective:
      "A successful launch requires meticulous performance tuning, search engine optimization, security hardening, and zero-downtime deployment. We test across 20+ real devices, configure Google structured data, switch DNS, and transfer 100% intellectual property.",
    detailedActivities: [
      "Rigorous cross-browser, cross-device, and responsive viewport quality assurance testing",
      "Google Core Web Vitals optimization to achieve 95–100/100 Lighthouse performance scores",
      "Comprehensive Google SEO schema structured data implementation (Organization, Product, FAQ, LocalBusiness)",
      "Security hardening: SSL/TLS certificates, Content Security Policies (CSP), and DDoS edge shielding",
      "Zero-downtime production deployment to global edge CDN (Vercel / Cloudflare / AWS)",
      "Complete admin handover, recorded video training walkthroughs, and full source code IP transfer",
      "30 days of complimentary post-launch bug warranty and dedicated engineering support",
    ],
    concreteDeliverables: [
      "Live production website or published App Store & Google Play mobile applications",
      "100% source code repository ownership transferred to your GitHub / GitLab account",
      "Google Search Console & Google Analytics 4 verified configuration with sitemap indexing",
      "Recorded video training tutorials showing your team how to manage and update content",
      "30-Day Free Post-Launch Engineering Warranty & Support Certificate",
    ],
    qualityReviewGate:
      "Production Handover & Acceptance Gate. All performance metrics verified, source code transferred, and post-launch support active.",
    toolsUsed: ["Google Search Console", "Lighthouse Audit", "Cloudflare DNS", "Vercel Edge", "App Store Connect", "Google Play Console"],
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
      name: "4-Phase Delivery Framework",
      item: "https://theoginfotech.com/methodology",
    },
  ],
};

export default function MethodologyPage() {
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
                4-Phase Delivery Framework
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
            <Link href="/case-studies" className="hover:text-white transition-colors">
              Case Studies
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
        
        {/* SECTION 1: THE EXACT HOME PAGE 4-PHASE DELIVERY COMPONENT */}
        <div className="pt-8">
          <EngineeringWorkflow />
        </div>

        {/* SECTION 2: IN-DEPTH EXPLANATION FOR EACH PHASE (Detailed Delivery Guide) */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#521D0E]/15">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="relative inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#FE3912] via-[#E02E09] to-[#C22405] backdrop-blur-xl border border-white/40 shadow-md text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse shadow-[0_0_6px_rgba(252,211,77,0.9)]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-bold">
                Detailed Delivery Playbook & Review Gates
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#521D0E]">
              Phase-by-Phase Breakdown: <span className="text-[#EA3412]">Zero Surprises</span>
            </h2>

            <p className="text-sm sm:text-base text-[#521D0E]/85 font-medium leading-relaxed">
              We eliminate ambiguity through structured weekly milestones, live staging walkthroughs, clear review gates, and guaranteed commercial deliverables at every single stage.
            </p>
          </div>

          {/* Detailed In-Depth Phase Cards */}
          <div className="space-y-16">
            {detailedPhases.map((phase) => {
              const Icon = phase.icon;
              return (
                <div
                  key={phase.phaseId}
                  id={phase.phaseId}
                  className="bg-[#3B1408]/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20 shadow-2xl text-white scroll-mt-24"
                >
                  {/* Phase Card Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-white/15">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FE3912] to-[#B32607] flex items-center justify-center shadow-lg border border-white/30 shrink-0">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono font-bold text-amber-300 tracking-wider">
                            {phase.phaseNumber}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/15 text-orange-200 border border-white/20">
                            Timeline: {phase.timeline}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                          {phase.title}
                        </h3>
                        <p className="text-sm text-orange-200 font-semibold">
                          {phase.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-start lg:items-end gap-2 bg-white/5 p-4 rounded-2xl border border-white/10 shrink-0">
                      <span className="text-[10px] font-mono uppercase text-orange-200/80">
                        Client Time Needed
                      </span>
                      <span className="text-xs font-bold text-amber-300">
                        {phase.clientTimeCommitment}
                      </span>
                    </div>
                  </div>

                  {/* Objective */}
                  <div className="py-6 border-b border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-amber-300 block mb-2">
                      Phase Objective & Strategic Goal:
                    </span>
                    <p className="text-sm sm:text-base text-orange-100/90 leading-relaxed font-normal">
                      {phase.objective}
                    </p>
                  </div>

                  {/* Activities vs Deliverables Grid */}
                  <div className="py-8 grid grid-cols-1 lg:grid-cols-2 gap-8 border-b border-white/10">
                    {/* Activities */}
                    <div className="space-y-4">
                      <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-amber-300 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#FE3912]" />
                        <span>Core Engineering Activities</span>
                      </span>
                      <ul className="space-y-2.5">
                        {phase.detailedActivities.map((act, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-orange-100/90 flex items-start gap-2.5">
                            <span className="text-amber-300 font-bold mt-0.5">•</span>
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div className="space-y-4">
                      <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-amber-300 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                        <span>Concrete Deliverables You Receive</span>
                      </span>
                      <ul className="space-y-2.5">
                        {phase.concreteDeliverables.map((deliv, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-orange-100/90 flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                            <span className="font-medium">{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Quality Gate & Tools */}
                  <div className="py-6 border-b border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 bg-amber-500/10 border border-amber-500/20 p-4 rounded-2xl">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-bold flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Formal Quality Review Gate</span>
                      </span>
                      <p className="text-xs text-amber-100 leading-relaxed">
                        {phase.qualityReviewGate}
                      </p>
                    </div>

                    <div className="space-y-2 bg-white/5 border border-white/10 p-4 rounded-2xl">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-orange-200/80 font-bold flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-orange-300" />
                        <span>Primary Tools & Technologies</span>
                      </span>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {phase.toolsUsed.map((tool, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/10 text-orange-100 border border-white/10"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-orange-200/90 font-medium">
                      Ready to kick off {phase.phaseNumber}?
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FE3912] to-[#B32607] text-white text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all shadow-md active:scale-95"
                    >
                      <span>Start Your Project at {phase.phaseNumber}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Delivery Guarantees */}
          <div className="mt-20 bg-[#3B1408]/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20 shadow-2xl text-white">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-amber-300">
                Peace of Mind Standards
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Our 4 Guarantees for Every Client
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#FE3912]/20 border border-[#FE3912]/40 mx-auto flex items-center justify-center">
                  <Lock className="w-5 h-5 text-amber-300" />
                </div>
                <h4 className="text-sm font-bold text-white">Fixed-Price Guarantee</h4>
                <p className="text-xs text-orange-200/80 leading-relaxed">
                  No surprise billing or hidden hour tracking. You approve a fixed milestone budget upfront.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#FE3912]/20 border border-[#FE3912]/40 mx-auto flex items-center justify-center">
                  <Clock className="w-5 h-5 text-amber-300" />
                </div>
                <h4 className="text-sm font-bold text-white">On-Time Milestones</h4>
                <p className="text-xs text-orange-200/80 leading-relaxed">
                  Disciplined weekly agile sprints with transparent live staging walk-throughs every week.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#FE3912]/20 border border-[#FE3912]/40 mx-auto flex items-center justify-center">
                  <Award className="w-5 h-5 text-amber-300" />
                </div>
                <h4 className="text-sm font-bold text-white">100% IP Ownership</h4>
                <p className="text-xs text-orange-200/80 leading-relaxed">
                  You own all code repositories, Figma designs, and domain assets completely. Zero vendor lock-in.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#FE3912]/20 border border-[#FE3912]/40 mx-auto flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-amber-300" />
                </div>
                <h4 className="text-sm font-bold text-white">30-Day Free Warranty</h4>
                <p className="text-xs text-orange-200/80 leading-relaxed">
                  30 days of complimentary post-launch bug fixes and monitoring to ensure smooth operations.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Action CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-[#FE3912] via-[#E02E09] to-[#C22405] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Ready to Kick Off Phase 01 for Your Next Project?
              </h3>
              <p className="text-sm sm:text-base text-orange-100 font-medium">
                Book a 30-minute discovery call with our senior engineering team. We will review your requirements, answer your questions, and deliver an actionable architecture proposal.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-orange-100 text-[#FE3912] font-extrabold rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider"
                >
                  Schedule Phase 01 Discovery Call
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
