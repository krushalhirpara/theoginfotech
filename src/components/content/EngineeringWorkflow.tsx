"use client";

import React from "react";
import { Search, Compass, GitMerge, Activity } from "lucide-react";

export const EngineeringWorkflow: React.FC = () => {
  const steps = [
    {
      phase: "Phase 01",
      title: "Product Discovery & Wireframing",
      icon: Search,
      deliverable: "User Journeys & Clickable Wireframes",
      description:
        "We analyze your business goals, target audience, competitors, and conversion funnels to map out intuitive user flows and low-fidelity Figma wireframes.",
    },
    {
      phase: "Phase 02",
      title: "UI/UX & Creative Brand Design",
      icon: Compass,
      deliverable: "Figma Design System & Brand Kit",
      description:
        "Crafting pixel-perfect responsive UI layouts, distinctive brand graphics, modern typography, and interactive prototypes tailored for maximum client engagement.",
    },
    {
      phase: "Phase 03",
      title: "Full-Stack Dev & AI Integration",
      icon: GitMerge,
      deliverable: "Clean Production Codebase & APIs",
      description:
        "Developing high-performance Websites, Mobile Apps (iOS/Android), Custom Software, SaaS architectures, and automated AI workflows with clean, maintainable code.",
    },
    {
      phase: "Phase 04",
      title: "SEO Optimization & Global Launch",
      icon: Activity,
      deliverable: "Google #1 SEO Schema & 100/100 Vitals",
      description:
        "Rigorous cross-device QA, Core Web Vitals speed optimization, Google structured data indexing, and smooth production deployment with ongoing technical support.",
    },
  ];

  return (
    <section id="methodology" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-[#521D0E]/15">
      {/* Decorative Fluffy Clouds Matching Hero Section */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -right-10 top-10 z-0 text-white animate-[cloud-float_7s_ease-in-out_infinite]"
      >
        <svg className="w-36 sm:w-56 h-20 sm:h-32 text-white opacity-90 drop-shadow-xs" viewBox="0 0 200 100" fill="#FFFFFF">
          <path fill="#FFFFFF" d="M30,80 A25,25 0 0,1 40,35 A35,35 0 0,1 95,20 A45,45 0 0,1 160,35 A30,30 0 0,1 180,80 Z" />
        </svg>
      </div>

      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -left-10 bottom-10 z-0 text-white animate-[cloud-float-reverse_9s_ease-in-out_infinite]"
      >
        <svg className="w-40 sm:w-60 h-24 sm:h-36 text-white opacity-90 drop-shadow-xs" viewBox="0 0 200 100" fill="#FFFFFF">
          <path fill="#FFFFFF" d="M30,80 A25,25 0 0,1 40,35 A35,35 0 0,1 95,20 A45,45 0 0,1 160,35 A30,30 0 0,1 180,80 Z" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-4 max-w-2xl">
          <div className="relative inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#FE3912] via-[#E02E09] to-[#C22405] backdrop-blur-xl border border-white/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_6px_16px_-3px_rgba(254,57,18,0.35)] text-white overflow-hidden">
            <div 
              aria-hidden="true" 
              className="pointer-events-none absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/35 to-transparent rounded-t-full" 
            />
            <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_6px_rgba(252,211,77,0.9)]" />
            <span className="relative z-10 text-[11px] font-mono uppercase tracking-[0.2em] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
              Our 4-Phase Delivery Process
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#521D0E]">
            How We Deliver <span className="text-[#EA3412]">Proven Results</span>
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#521D0E]/85 max-w-md font-medium leading-relaxed">
          A disciplined, transparent delivery framework designed to take your digital product from concept to market leadership with zero surprises.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div
              key={i}
              className="p-8 rounded-3xl bg-gradient-to-br from-[#3B1408]/95 via-[#4A1A0C]/95 to-[#260B03]/95 hover:from-[#45180B] hover:to-[#2D0D05] backdrop-blur-xl border border-white/20 hover:border-[#FE3912]/60 shadow-[0_16px_36px_rgba(82,29,14,0.35)] hover:shadow-[0_24px_50px_rgba(254,57,18,0.3)] transition-all duration-300 flex flex-col justify-between group text-white"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-extrabold text-[#FE3912] tracking-wider uppercase">
                    {step.phase}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#FE3912] group-hover:bg-[#FE3912] group-hover:text-white transition-colors shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg font-extrabold text-white group-hover:text-orange-200 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-orange-100/80 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-white/15">
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-200/60 block mb-1 font-semibold">
                  Primary Milestone
                </span>
                <span className="text-xs font-bold text-white">
                  {step.deliverable}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
