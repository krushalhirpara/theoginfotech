"use client";

import React from "react";
import { ArrowUpRight, TrendingUp, ShieldCheck, Zap } from "lucide-react";

export const CaseStudies: React.FC = () => {
  const cases = [
    {
      id: "ecommerce-web",
      clientSector: "E-Commerce & High-Growth Retail",
      title: "High-Performance Website Development & UI/UX Redesign Boosting Sales +260%",
      challenge:
        "The brand suffered from a sluggish 5.4s load time, poor mobile responsiveness, low Google search visibility, and high shopping cart drop-offs.",
      architecture:
        "Architected a blazing-fast Next.js website with modern responsive UI/UX, optimized SEO schema, instant image delivery via Cloudflare, and streamlined 1-step checkout.",
      results: [
        { label: "Mobile PageSpeed Score", value: "99/100", change: "From 32/100", icon: Zap },
        { label: "Organic Google SEO Rank", value: "#1 Rank", change: "+340% Search Traffic", icon: TrendingUp },
        { label: "Checkout Conversion Lift", value: "+260%", change: "Sales Doubled in 60 Days", icon: ShieldCheck },
      ],
      tag: "Website Dev & UI/UX",
    },
    {
      id: "mobile-app",
      clientSector: "On-Demand Logistics & Booking Platform",
      title: "Cross-Platform Flutter Mobile App with Real-Time Booking & Push Notifications",
      challenge:
        "Needed a seamless iOS & Android mobile application with sub-second driver tracking, offline resilience, and friction-free payment processing.",
      architecture:
        "Engineered a native-feel Flutter mobile app with custom Figma design system, Firebase live location telemetry, and secure Apple Pay / Google Pay integrations.",
      results: [
        { label: "App Store & Play Rating", value: "4.9 ★", change: "15K+ 5-Star Reviews", icon: ShieldCheck },
        { label: "Cross-Platform Time to Market", value: "5 Weeks", change: "Single Codebase Efficiency", icon: Zap },
        { label: "Monthly Active Users", value: "220K+", change: "Zero Reported Crashes", icon: TrendingUp },
      ],
      tag: "Mobile App Development",
    },
    {
      id: "saas-ai",
      clientSector: "B2B SaaS & Professional Services",
      title: "Custom SaaS Platform & AI Workflow Automation Saving 45 Hours Every Week",
      challenge:
        "Manual client intake, repetitive document verification, and uncoordinated email back-and-forth were consuming over 40+ hours of staff time every week.",
      architecture:
        "Built a multi-tenant cloud SaaS dashboard with automated Stripe recurring billing, powered by conversational OpenAI agents and n8n webhook automations.",
      results: [
        { label: "Weekly Admin Time Saved", value: "45+ Hrs", change: "100% Automated Pipelines", icon: Zap },
        { label: "Average Lead Response Time", value: "< 25 sec", change: "Instant AI Engagement", icon: TrendingUp },
        { label: "First Year Operating ROI", value: "+410%", change: "3.5x Staff Capacity", icon: ShieldCheck },
      ],
      tag: "SaaS & AI Automation",
    },
  ];

  return (
    <section id="case-studies" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-[#521D0E]/15 overflow-hidden">
      {/* Decorative Fluffy Clouds Matching Hero Section */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -left-12 top-8 z-0 text-white animate-[cloud-float_7.5s_ease-in-out_infinite]"
      >
        <svg className="w-36 sm:w-56 h-20 sm:h-32 text-white opacity-90 drop-shadow-xs" viewBox="0 0 200 100" fill="#FFFFFF">
          <path fill="#FFFFFF" d="M30,80 A25,25 0 0,1 40,35 A35,35 0 0,1 95,20 A45,45 0 0,1 160,35 A30,30 0 0,1 180,80 Z" />
        </svg>
      </div>

      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -right-8 bottom-12 z-0 text-white animate-[cloud-float-reverse_8.5s_ease-in-out_infinite]"
      >
        <svg className="w-40 sm:w-64 h-24 sm:h-38 text-white opacity-90 drop-shadow-xs" viewBox="0 0 200 100" fill="#FFFFFF">
          <path fill="#FFFFFF" d="M30,80 A25,25 0 0,1 40,35 A35,35 0 0,1 95,20 A45,45 0 0,1 160,35 A30,30 0 0,1 180,80 Z" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div className="space-y-4 max-w-2xl">
          <div className="relative inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#FE3912] via-[#E02E09] to-[#C22405] backdrop-blur-xl border border-white/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_6px_16px_-3px_rgba(254,57,18,0.35)] text-white overflow-hidden">
            <div 
              aria-hidden="true" 
              className="pointer-events-none absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/35 to-transparent rounded-t-full" 
            />
            <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_6px_rgba(252,211,77,0.9)]" />
            <span className="relative z-10 text-[11px] font-mono uppercase tracking-[0.2em] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
              Proven Architecture Outcomes
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#521D0E]">
            Engineered for <span className="text-[#EA3412]">Measurable Impact</span>
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#521D0E]/85 max-w-md font-medium leading-relaxed">
          Real enterprise transformation is validated by hard metrics: throughput, security verification, and verified multi-million dollar efficiency.
        </p>
      </div>

      <div className="relative z-10 space-y-8">
        {cases.map((item) => (
          <article
            key={item.id}
            className="p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#3B1408]/95 via-[#4A1A0C]/95 to-[#260B03]/95 hover:from-[#45180B] hover:to-[#2D0D05] backdrop-blur-xl border border-white/20 hover:border-[#FE3912]/60 shadow-[0_16px_36px_rgba(82,29,14,0.35)] hover:shadow-[0_24px_50px_rgba(254,57,18,0.3)] transition-all duration-300 text-white"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
              
              {/* Left Case Narrative */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#FE3912]">
                    {item.clientSector}
                  </span>
                  <span className="h-3 w-[1px] bg-white/20" />
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-orange-200 font-semibold shadow-xs">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                  {item.title}
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-orange-100/80 leading-relaxed font-normal">
                  <p>
                    <strong className="text-orange-200 font-bold">The Architectural Bottleneck:</strong>{" "}
                    {item.challenge}
                  </p>
                  <p>
                    <strong className="text-orange-200 font-bold">Our Engineered Solution:</strong>{" "}
                    {item.architecture}
                  </p>
                </div>
              </div>

              {/* Right Validated Results Grid */}
              <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/20 space-y-4 shadow-inner">
                <h4 className="text-xs uppercase tracking-widest font-mono text-orange-200/70 font-bold">
                  Validated Production Benchmarks
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                  {item.results.map((res, rIdx) => {
                    const Icon = res.icon;
                    return (
                      <div key={rIdx} className="p-3 sm:p-3.5 bg-white/10 rounded-xl border border-white/15 shadow-xs flex flex-wrap sm:flex-nowrap items-center justify-between gap-2">
                        <div>
                          <p className="text-[11px] text-orange-200/70 font-medium">{res.label}</p>
                          <p className="font-mono text-lg sm:text-xl font-extrabold text-white mt-0.5">{res.value}</p>
                        </div>
                        <div className="text-right flex items-center gap-1.5 text-xs font-bold text-orange-200 bg-white/10 px-2.5 py-1 rounded-lg border border-white/20">
                          <Icon className="w-3.5 h-3.5 text-[#FE3912]" />
                          <span>{res.change}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
