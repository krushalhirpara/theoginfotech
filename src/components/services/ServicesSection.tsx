"use client";

import React from "react";
import { ServiceCard, ServiceItem } from "./ServiceCard";

export const ServicesSection: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: "website-development",
      title: "Website Development",
      category: "Web Engineering",
      description:
        "High-performance, SEO-optimized business websites, custom web portals, and e-commerce platforms engineered with Next.js & React for lightning-fast speeds and top Google rankings.",
      metricLabel: "PageSpeed & SEO",
      metricValue: "100/100 Core Vitals",
      href: "#contact",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      id: "app-development",
      title: "Mobile App Development",
      category: "iOS & Android",
      description:
        "Native and cross-platform mobile apps built with Flutter and React Native. Smooth 60fps animations, offline storage, push notifications, and end-to-end App Store & Google Play publishing.",
      metricLabel: "Platform Support",
      metricValue: "iOS & Android Native",
      href: "#contact",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
    },
    {
      id: "web-design",
      title: "Modern Web Design",
      category: "Creative Front-End",
      description:
        "Visually captivating, modern web designs that command attention and convert visitors into loyal clients. Dynamic glassmorphism, responsive layouts, micro-interactions, and clear hierarchy.",
      metricLabel: "Conversion Lift",
      metricValue: "+180% Engagement",
      href: "#contact",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      ),
    },
    {
      id: "graphic-design",
      title: "Graphic Design & Branding",
      category: "Visual Identity",
      description:
        "Distinctive brand logos, corporate brand guides, marketing collaterals, social media creative packs, vector illustrations, and investor pitch decks that make your business unforgettable.",
      metricLabel: "Design Standard",
      metricValue: "Vector & Print Ready",
      href: "#contact",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 19 7-7 3 3-7 7-3-3z" />
          <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="m2 2 7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      ),
    },
    {
      id: "ui-ux-design",
      title: "UI / UX Design",
      category: "User Experience",
      description:
        "User research, wireframing, comprehensive design systems, and interactive clickable Figma prototypes crafted with human-centric principles for effortless, intuitive user journeys.",
      metricLabel: "Figma Standards",
      metricValue: "Pixel-Perfect Systems",
      href: "#contact",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      ),
    },
    {
      id: "custom-software",
      title: "Custom Software Development",
      category: "Enterprise Engineering",
      description:
        "Bespoke business software, CRM/ERP systems, secure REST/GraphQL API backends, and cloud database architectures engineered to eliminate operational bottlenecks and scale seamlessly.",
      metricLabel: "System Reliability",
      metricValue: "99.99% Uptime SLA",
      href: "#contact",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      ),
    },
    {
      id: "saas-platform",
      title: "SaaS Platform Development",
      category: "Cloud Product",
      description:
        "End-to-end multi-tenant Software-as-a-Service (SaaS) products with automated recurring Stripe billing, granular role-based access control (RBAC), and analytics dashboards.",
      metricLabel: "Rapid MVP Launch",
      metricValue: "Live in 4-6 Weeks",
      href: "#contact",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
    {
      id: "ai-automation",
      title: "AI Automation & Workflows",
      category: "Intelligent Systems",
      description:
        "Intelligent AI workflows, conversational customer support chatbots, automated lead qualification pipelines, OpenAI/Claude API integrations, and custom CRM automations that save 40+ hours weekly.",
      metricLabel: "Weekly Time Saved",
      metricValue: "40+ Hours Automated",
      href: "#contact",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <path d="M4.93 4.93l2.83 2.83" />
          <path d="M16.24 16.24l2.83 2.83" />
          <path d="M2 12h4" />
          <path d="M18 12h4" />
          <path d="M4.93 19.07l2.83-2.83" />
          <path d="M16.24 7.76l2.83-2.83" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="services"
      aria-label="Our Digital & Software Services"
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32"
    >
      {/* Decorative Fluffy Clouds Matching Hero Section */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -left-10 top-12 z-0 text-white animate-[cloud-float_7s_ease-in-out_infinite]"
      >
        <svg className="w-36 sm:w-56 h-20 sm:h-32 text-white opacity-90 drop-shadow-xs" viewBox="0 0 200 100" fill="#FFFFFF">
          <path fill="#FFFFFF" d="M30,80 A25,25 0 0,1 40,35 A35,35 0 0,1 95,20 A45,45 0 0,1 160,35 A30,30 0 0,1 180,80 Z" />
        </svg>
      </div>

      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -right-8 bottom-16 z-0 text-white animate-[cloud-float-reverse_8s_ease-in-out_infinite]"
      >
        <svg className="w-40 sm:w-60 h-24 sm:h-36 text-white opacity-90 drop-shadow-xs" viewBox="0 0 200 100" fill="#FFFFFF">
          <path fill="#FFFFFF" d="M30,80 A25,25 0 0,1 40,35 A35,35 0 0,1 95,20 A45,45 0 0,1 160,35 A30,30 0 0,1 180,80 Z" />
        </svg>
      </div>

      {/* Section Header: Editorial & Warm Typography */}
      <header className="relative z-10 flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
        <div className="space-y-4 max-w-2xl">
          <div className="relative inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#FE3912] via-[#E02E09] to-[#C22405] backdrop-blur-xl border border-white/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_6px_16px_-3px_rgba(254,57,18,0.35)] text-white overflow-hidden">
            <div 
              aria-hidden="true" 
              className="pointer-events-none absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/35 to-transparent rounded-t-full" 
            />
            <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_6px_rgba(252,211,77,0.9)]" />
            <span className="relative z-10 text-[11px] font-mono uppercase tracking-[0.2em] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
              Our 8 Core Services
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#521D0E] leading-tight">
            Complete Digital Solutions for the{" "}
            <span className="text-[#EA3412]">
              Modern Enterprise
            </span>
          </h2>
        </div>

        <p className="text-sm sm:text-base text-[#521D0E]/85 max-w-md font-medium leading-relaxed">
          From custom Website and Mobile App Development to UI/UX Design, Graphics, bespoke Software, SaaS Platforms, and AI Automation — we engineer solutions that dominate your market.
        </p>
      </header>

      {/* 4-Column Responsive Dynamic Grid (8 Services) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
};
