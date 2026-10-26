"use client";

import React, { useState } from "react";
import { ArrowRight, ShieldCheck, Lock, CheckCircle2, FileText } from "lucide-react";

export const EnterpriseCTA: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-[#521D0E]/15">
      {/* Decorative Fluffy Clouds Matching Hero Section */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -left-12 -top-6 z-0 text-white animate-[cloud-float_7s_ease-in-out_infinite]"
      >
        <svg className="w-36 sm:w-56 h-20 sm:h-32 text-white opacity-90 drop-shadow-xs" viewBox="0 0 200 100" fill="#FFFFFF">
          <path fill="#FFFFFF" d="M30,80 A25,25 0 0,1 40,35 A35,35 0 0,1 95,20 A45,45 0 0,1 160,35 A30,30 0 0,1 180,80 Z" />
        </svg>
      </div>

      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -right-10 -bottom-6 z-0 text-white animate-[cloud-float-reverse_8.5s_ease-in-out_infinite]"
      >
        <svg className="w-40 sm:w-60 h-24 sm:h-36 text-white opacity-90 drop-shadow-xs" viewBox="0 0 200 100" fill="#FFFFFF">
          <path fill="#FFFFFF" d="M30,80 A25,25 0 0,1 40,35 A35,35 0 0,1 95,20 A45,45 0 0,1 160,35 A30,30 0 0,1 180,80 Z" />
        </svg>
      </div>

      {/* Container with Luxe Deep Sienna & Fiery Red Glass Treatment (Matching Hero Billboard Architecture) */}
      <div className="relative z-10 rounded-3xl bg-gradient-to-br from-[#3B1408] via-[#521D0E] to-[#260B03] text-white p-8 sm:p-14 lg:p-20 overflow-hidden shadow-[0_25px_60px_rgba(82,29,14,0.4)] border border-white/25">
        {/* Ambient Glows */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-[#FE3912]/25 rounded-full blur-[140px]" 
        />
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 bg-[#F9B384]/20 rounded-full blur-[140px]" 
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FE3912] via-[#E02E09] to-[#C22405] backdrop-blur-xl border border-white/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_8px_20px_-3px_rgba(254,57,18,0.4)] text-white overflow-hidden">
            <div 
              aria-hidden="true" 
              className="pointer-events-none absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/35 to-transparent rounded-t-full" 
            />
            <ShieldCheck className="relative z-10 w-4 h-4 text-amber-300 drop-shadow-[0_0_6px_rgba(252,211,77,0.9)]" />
            <span className="relative z-10 text-xs font-mono uppercase tracking-[0.2em] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
              Free Project Estimation & 100% NDA Protected
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
            Ready to Build Your <span className="text-[#F9B384]">Website, App, Software or AI Automation?</span>
          </h2>

          <p className="text-base sm:text-lg text-orange-100/90 max-w-2xl mx-auto leading-relaxed font-normal">
            Get a comprehensive technical consultation and fixed-scope project estimate within 4 hours. 
            From pixel-perfect UI/UX design to full-stack deployment and top Google SEO ranking — we engineer digital products that win.
          </p>

          {/* Consultation Lead Form */}
          {submitted ? (
            <div className="p-6 rounded-2xl bg-white/10 border border-emerald-400/40 text-emerald-300 flex items-center justify-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span className="font-semibold text-sm">
                Thank you! Your project inquiry has been received. Our Lead Architect will reach out within 4 business hours.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto pt-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your corporate or business email..."
                className="w-full sm:flex-1 px-5 py-4 rounded-xl bg-white/15 border border-white/25 text-white placeholder-orange-200/60 focus:outline-none focus:ring-2 focus:ring-[#FE3912] text-sm"
              />
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#FE3912] text-white font-bold text-sm hover:bg-[#E02E09] hover:shadow-[0_0_25px_rgba(254,57,18,0.5)] transition-all duration-200 whitespace-nowrap active:scale-[0.98]"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Security & Compliance Certifications */}
          <div className="pt-8 mt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-orange-200/80 font-mono">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#F9B384]" />
              Strict Enterprise NDA
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              100% Google SEO Optimized
            </span>
            <span className="flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-[#F9B384]" />
              Fixed Timeline & Pricing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
