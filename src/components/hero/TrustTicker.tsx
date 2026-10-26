"use client";

import React from "react";
import {
  Cloud,
  Shield,
  Award,
  Cpu,
  Database,
  CheckCircle,
  FileCheck2,
  Box,
} from "lucide-react";

interface TrustItem {
  id: string;
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
}

const trustItems: TrustItem[] = [
  {
    id: "nextjs",
    name: "Next.js & React Full-Stack",
    category: "Website Development",
    icon: Cloud,
  },
  {
    id: "mobile",
    name: "Flutter & React Native (iOS/Android)",
    category: "App Development",
    icon: Cpu,
  },
  {
    id: "figma",
    name: "Figma & Adobe Creative Cloud",
    category: "UI/UX & Graphics",
    icon: Award,
  },
  {
    id: "ai",
    name: "OpenAI, Claude & Custom LLMs",
    category: "AI Automation",
    icon: Database,
  },
  {
    id: "saas",
    name: "Stripe & AWS Cloud Architectures",
    category: "SaaS Platforms",
    icon: Shield,
  },
  {
    id: "software",
    name: "Node.js, Python & High-Speed APIs",
    category: "Custom Software",
    icon: Box,
  },
  {
    id: "webdesign",
    name: "Tailwind CSS & Responsive Layouts",
    category: "Modern Web Design",
    icon: FileCheck2,
  },
  {
    id: "workflows",
    name: "Zapier, n8n & Automated CRM",
    category: "Workflow Automation",
    icon: CheckCircle,
  },
];

export const TrustTicker: React.FC = () => {
  const marqueeList = [...trustItems, ...trustItems];

  return (
    <section 
      aria-label="Enterprise Cloud Partnerships and Compliance" 
      className="relative w-full border-t border-b border-white/40 bg-white/25 py-8 backdrop-blur-md overflow-hidden"
    >
      {/* Left/Right Edge Gradient Masks in Warm Sunset Tones */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-24 md:w-44 z-10 bg-gradient-to-r from-[#F5A069] via-[#F5A069]/80 to-transparent" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-24 md:w-44 z-10 bg-gradient-to-l from-[#F5A069] via-[#F5A069]/80 to-transparent" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div className="relative inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#FE3912] via-[#E02E09] to-[#C22405] backdrop-blur-xl border border-white/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_6px_16px_-3px_rgba(254,57,18,0.35)] text-white overflow-hidden">
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/35 to-transparent rounded-t-full" 
          />
          <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_6px_rgba(252,211,77,0.9)]" />
          <h2 className="relative z-10 text-[11px] uppercase tracking-[0.18em] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
            Production-Grade Tech Stacks & Proven Digital Frameworks
          </h2>
        </div>
        <span className="text-xs font-mono text-[#521D0E]/80 font-bold">
          100% SEO Optimized & Google Top-Ranking Ready
        </span>
      </div>

      {/* Marquee Wrapper */}
      <div className="marquee-container flex overflow-hidden select-none">
        <div className="marquee-content flex shrink-0 items-center gap-6 animate-marquee">
          {marqueeList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.id}-${index}`}
                className="flex items-center gap-3.5 px-5 py-3 rounded-xl bg-[#3B1408]/90 backdrop-blur-md border border-white/20 hover:border-[#FE3912]/60 hover:bg-[#441709] hover:shadow-[0_8px_20px_rgba(82,29,14,0.35)] transition-all duration-200 group cursor-default shadow-xs text-white"
              >
                <div className="p-2 rounded-lg bg-white/10 text-[#FE3912] border border-white/20 group-hover:bg-[#FE3912] group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-white group-hover:text-orange-200 transition-colors whitespace-nowrap">
                    {item.name}
                  </span>
                  <span className="text-[10px] text-orange-200/70 font-mono uppercase tracking-wider font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
