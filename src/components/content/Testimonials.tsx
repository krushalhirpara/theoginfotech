"use client";

import React from "react";
import { Star, ShieldCheck, Quote } from "lucide-react";

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        "THE OG INFOTECH developed our company website and custom e-commerce store in record time. Our Google search rank jumped straight to Page 1 within two months, and organic customer inquiries increased by over 300%. Absolutely world-class team!",
      name: "Marcus Vance",
      role: "Founder & CEO",
      company: "Vance Retail & E-Commerce",
      verified: "Website Dev & SEO #1 Verified",
    },
    {
      quote:
        "Their Flutter mobile app development and UI/UX design exceeded every expectation. The user interface designed in Figma was gorgeous, fast, and our dual iOS & Android launch surpassed 100K downloads with a 4.9-star rating.",
      name: "Dr. Elena Rostova",
      role: "Product Director",
      company: "Pulse Health & Booking App",
      verified: "iOS & Android App Launched",
    },
    {
      quote:
        "The SaaS platform and AI workflow automation built by THE OG INFOTECH literally saved our team 40+ hours of tedious weekly admin tasks. Our clients love the smart AI chatbot and automated billing. Best agency investment we've made!",
      name: "David Kim",
      role: "Co-Founder & COO",
      company: "Nexus SaaS Technologies",
      verified: "SaaS & AI Automation Live",
    },
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-[#521D0E]/15">
      {/* Decorative Fluffy Clouds Matching Hero Section */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -left-12 top-10 z-0 text-white animate-[cloud-float_8s_ease-in-out_infinite]"
      >
        <svg className="w-36 sm:w-56 h-20 sm:h-32 text-white opacity-90 drop-shadow-xs" viewBox="0 0 200 100" fill="#FFFFFF">
          <path fill="#FFFFFF" d="M30,80 A25,25 0 0,1 40,35 A35,35 0 0,1 95,20 A45,45 0 0,1 160,35 A30,30 0 0,1 180,80 Z" />
        </svg>
      </div>

      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -right-10 bottom-6 z-0 text-white animate-[cloud-float-reverse_7s_ease-in-out_infinite]"
      >
        <svg className="w-40 sm:w-60 h-24 sm:h-36 text-white opacity-90 drop-shadow-xs" viewBox="0 0 200 100" fill="#FFFFFF">
          <path fill="#FFFFFF" d="M30,80 A25,25 0 0,1 40,35 A35,35 0 0,1 95,20 A45,45 0 0,1 160,35 A30,30 0 0,1 180,80 Z" />
        </svg>
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="relative inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#FE3912] via-[#E02E09] to-[#C22405] backdrop-blur-xl border border-white/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_6px_16px_-3px_rgba(254,57,18,0.35)] text-white overflow-hidden">
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/35 to-transparent rounded-t-full" 
          />
          <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_6px_rgba(252,211,77,0.9)]" />
          <span className="relative z-10 text-[11px] font-mono uppercase tracking-[0.2em] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
            Executive Endorsements
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#521D0E]">
          Trusted by <span className="text-[#EA3412]">Technology Leaders</span>
        </h2>
        <p className="text-[#521D0E]/85 text-sm sm:text-base font-medium">
          Read how global engineering executives rely on our sovereign cloud architectures for mission-critical operations.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="p-8 rounded-3xl bg-gradient-to-br from-[#3B1408]/95 via-[#4A1A0C]/95 to-[#260B03]/95 hover:from-[#45180B] hover:to-[#2D0D05] backdrop-blur-xl border border-white/20 hover:border-[#FE3912]/60 shadow-[0_16px_36px_rgba(82,29,14,0.35)] hover:shadow-[0_24px_50px_rgba(254,57,18,0.3)] transition-all duration-300 flex flex-col justify-between text-white"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-orange-200/40" />
              </div>

              <p className="text-sm text-orange-100/85 leading-relaxed italic font-normal">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/15 space-y-2">
              <div>
                <h4 className="font-extrabold text-white text-sm">{t.name}</h4>
                <p className="text-xs text-orange-200/70 font-medium">
                  {t.role} · <span className="text-orange-200 font-semibold">{t.company}</span>
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-orange-200 bg-white/10 px-2.5 py-1 rounded-lg border border-white/20 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FE3912]" />
                <span>{t.verified}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
