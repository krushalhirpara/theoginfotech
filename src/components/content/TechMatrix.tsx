"use client";

import React, { useState } from "react";
import { Server, Database, Shield, Cpu, Layers } from "lucide-react";

type CategoryKey = "web" | "mobile" | "design" | "software_ai";

interface TechItem {
  name: string;
  role: string;
  metric: string;
  badge: string;
}

export const TechMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("web");

  const categories: { key: CategoryKey; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { key: "web", label: "Website & Frontend", icon: Server },
    { key: "mobile", label: "Mobile App Dev", icon: Cpu },
    { key: "design", label: "UI/UX & Graphics", icon: Layers },
    { key: "software_ai", label: "Software, SaaS & AI", icon: Database },
  ];

  const techData: Record<CategoryKey, TechItem[]> = {
    web: [
      { name: "Next.js & React 19", role: "SSR & Static Web Architecture", metric: "100/100 Lighthouse Speed", badge: "Primary Web Stack" },
      { name: "Tailwind CSS & Animations", role: "Responsive Modern Utility Styling", metric: "Pixel-Perfect Layouts", badge: "Design System" },
      { name: "TypeScript 5+", role: "Type-Safe Robust Frontend Codebase", metric: "Zero Runtime Type Errors", badge: "Strict Standard" },
      { name: "WordPress & Headless CMS", role: "SEO Content Management Systems", metric: "Custom Themes & ACF", badge: "CMS Standard" },
      { name: "HTML5, CSS3 & WebGL", role: "Modern Interactive Dynamic Web Pages", metric: "Full Cross-Browser", badge: "Core Frontend" },
      { name: "Vercel & Cloudflare Edge", role: "Global Low-Latency Web Delivery", metric: "< 50ms Edge Response", badge: "Hosting Standard" },
    ],
    mobile: [
      { name: "Flutter (Dart 3)", role: "Cross-Platform High-Performance Apps", metric: "60fps Smooth UI", badge: "Primary Mobile" },
      { name: "React Native & Expo", role: "JavaScript Native Mobile Apps", metric: "Shared Web/App Code", badge: "Cross-Platform" },
      { name: "Swift & SwiftUI (iOS)", role: "Native Apple Platform Engineering", metric: "Human Interface Guidelines", badge: "Native iOS" },
      { name: "Kotlin & Jetpack (Android)", role: "Native Google Android Engineering", metric: "Material Design 3", badge: "Native Android" },
      { name: "Firebase & Supabase Auth", role: "Mobile Push Notifications & Data Sync", metric: "Instant Push Delivery", badge: "Cloud Backend" },
      { name: "App Store & Google Play", role: "Compliance, App Review & Publishing", metric: "100% Submission Pass", badge: "Store Delivery" },
    ],
    design: [
      { name: "Figma & Auto-Layout", role: "Design Systems & Interactive Wireframes", metric: "Tokens & Component Kits", badge: "Primary UI Tool" },
      { name: "Adobe Illustrator", role: "Vector Brand Logos & High-Res Graphics", metric: "Infinitely Scalable SVG", badge: "Vector Standard" },
      { name: "Adobe Photoshop", role: "Creative Marketing Collaterals & Retouching", metric: "Ultra-HD Visual Assets", badge: "Creative Suite" },
      { name: "Prototyping & Micro-FX", role: "Clickable User Journey Simulation", metric: "Realistic User Testing", badge: "UX Research" },
      { name: "Brand Style Guides", role: "Typography, Color Palettes & Print Kits", metric: "Complete Brand Book", badge: "Identity Standard" },
      { name: "Design System Tokens", role: "Unified Web & Mobile Component Library", metric: "Zero Inconsistencies", badge: "Design Tokens" },
    ],
    software_ai: [
      { name: "Python 3.12 & FastApi", role: "AI Integrations & Data Processing", metric: "Asynchronous Speed", badge: "AI Backend" },
      { name: "Node.js & Express", role: "RESTful & GraphQL API Gateways", metric: "Sub-15ms Route Latency", badge: "Backend Standard" },
      { name: "OpenAI & Claude API", role: "Conversational Agents & Smart LLMs", metric: "Automated Workflows", badge: "AI Automation" },
      { name: "n8n, Make & Zapier", role: "No-Code & Low-Code Workflow Automation", metric: "Connect 500+ Apps", badge: "Automation Hub" },
      { name: "PostgreSQL & Prisma", role: "Transactional SaaS Relational Database", metric: "ACID Guaranteed", badge: "SaaS Storage" },
      { name: "Stripe Subscriptions", role: "Automated Recurring Billing & Invoicing", metric: "Global Payment Processing", badge: "SaaS Billing" },
    ],
  };

  return (
    <section id="tech-stack" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-[#521D0E]/15 overflow-hidden">
      {/* Decorative Fluffy Clouds Matching Hero Section */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -right-12 top-6 z-0 text-white animate-[cloud-float_8s_ease-in-out_infinite]"
      >
        <svg className="w-36 sm:w-52 h-20 sm:h-30 text-white opacity-90 drop-shadow-xs" viewBox="0 0 200 100" fill="#FFFFFF">
          <path fill="#FFFFFF" d="M30,80 A25,25 0 0,1 40,35 A35,35 0 0,1 95,20 A45,45 0 0,1 160,35 A30,30 0 0,1 180,80 Z" />
        </svg>
      </div>

      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -left-10 bottom-8 z-0 text-white animate-[cloud-float-reverse_9s_ease-in-out_infinite]"
      >
        <svg className="w-40 sm:w-60 h-24 sm:h-36 text-white opacity-90 drop-shadow-xs" viewBox="0 0 200 100" fill="#FFFFFF">
          <path fill="#FFFFFF" d="M30,80 A25,25 0 0,1 40,35 A35,35 0 0,1 95,20 A45,45 0 0,1 160,35 A30,30 0 0,1 180,80 Z" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div className="space-y-3">
          <div className="relative inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#FE3912] via-[#E02E09] to-[#C22405] backdrop-blur-xl border border-white/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_6px_16px_-3px_rgba(254,57,18,0.35)] text-white overflow-hidden">
            <div 
              aria-hidden="true" 
              className="pointer-events-none absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/35 to-transparent rounded-t-full" 
            />
            <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_6px_rgba(252,211,77,0.9)]" />
            <span className="relative z-10 text-[11px] font-mono uppercase tracking-[0.2em] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
              Enterprise Technology Matrix
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#521D0E]">
            Standardized on <span className="text-[#EA3412]">Battle-Tested Stacks</span>
          </h2>
        </div>
        <p className="text-[#521D0E]/85 text-sm max-w-md font-medium leading-relaxed">
          From fast Next.js websites and native mobile apps to Figma design systems and smart AI automations — we only build with battle-tested technologies.
        </p>
      </div>

      {/* Category Selection Tabs */}
      <div className="relative z-10 flex flex-wrap gap-2 sm:gap-2.5 mb-8 p-1.5 bg-[#3B1408]/85 backdrop-blur-xl rounded-2xl border border-white/20 w-full sm:w-fit shadow-md">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                isActive
                  ? "bg-[#FE3912] text-white shadow-md border border-white/30"
                  : "text-orange-200/80 hover:text-white hover:bg-white/10"
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-orange-200/60"}`} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Grid of Tech Items */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {techData[activeCategory].map((item, idx) => (
          <div
            key={idx}
            className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#3B1408]/95 via-[#4A1A0C]/95 to-[#260B03]/95 hover:from-[#45180B] hover:to-[#2D0D05] backdrop-blur-xl border border-white/20 hover:border-[#FE3912]/60 shadow-[0_14px_32px_rgba(82,29,14,0.3)] hover:shadow-[0_20px_45px_rgba(254,57,18,0.25)] transition-all duration-300 flex flex-col justify-between text-white"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-white text-base">{item.name}</h3>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-orange-200 font-bold shadow-xs">
                  {item.badge}
                </span>
              </div>
              <p className="text-xs text-orange-100/80 leading-relaxed font-normal">{item.role}</p>
            </div>

            <div className="pt-4 mt-4 border-t border-white/15 flex items-center justify-between text-xs font-mono">
              <span className="text-orange-200/60 font-medium">Standard Spec:</span>
              <span className="text-[#FE3912] font-bold">{item.metric}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
