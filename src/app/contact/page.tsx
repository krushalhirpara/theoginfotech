"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  Cpu, 
  Mail, 
  Phone, 
  Clock, 
  Lock, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Send
} from "lucide-react";
import { Footer } from "@/components/footer/Footer";

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
      name: "Contact & Free Quote",
      item: "https://theoginfotech.com/contact",
    },
  ],
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact THE OG INFOTECH — Request a Free Project Quote",
  description: "Get in touch with THE OG INFOTECH for custom Website Development, Mobile Apps, SaaS Platforms, and AI Automation consultations.",
  url: "https://theoginfotech.com/contact",
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessEmail: "",
    phone: "",
    serviceType: "Website Development",
    budgetRange: "$1,000 - $5,000",
    projectDetails: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate lead capture
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#F9B384] via-[#F8AB79] via-[#F6A16B] to-[#F7A673] text-[#521D0E] selection:bg-[#521D0E] selection:text-white relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      
      {/* Sticky Top Header */}
      <header className="sticky top-0 z-50 bg-[#3B1408]/90 backdrop-blur-xl border-b border-white/20 text-white py-4 px-4 sm:px-8 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
              <Cpu className="w-5 h-5 text-[#FE3912]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-white text-base tracking-tight leading-none">
                THE OG INFOTECH
              </span>
              <span className="text-[10px] font-mono text-orange-200 tracking-widest uppercase mt-0.5 font-semibold">
                Project Consultation
              </span>
            </div>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-200 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative pt-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
          <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FE3912] via-[#E02E09] to-[#C22405] backdrop-blur-xl border border-white/40 shadow-md text-white">
            <span className="w-2 h-2 rounded-full bg-amber-300 animate-pulse shadow-[0_0_8px_rgba(252,211,77,0.9)]" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold">
              Guaranteed Response Within 4 Hours
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#521D0E] leading-tight break-words">
            Let&apos;s Build Something <span className="text-[#EA3412]">Extraordinary</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#521D0E]/85 leading-relaxed font-medium">
            Tell us about your project vision. Our Lead System Architect will analyze your requirements, prepare a technical feasibility breakdown, and deliver a fixed-price proposal.
          </p>
        </div>

        {/* 2-Column Layout: Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Interactive Proposal Form */}
          <div className="lg:col-span-7 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#3B1408]/95 via-[#4A1A0C]/95 to-[#260B03]/95 text-white border border-white/20 p-5 sm:p-8 lg:p-12 shadow-[0_20px_45px_rgba(82,29,14,0.4)] backdrop-blur-xl relative overflow-hidden">
            
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#FE3912]/20 border border-[#FE3912]/50 flex items-center justify-center text-[#FE3912] mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Project Inquiry Received!
                  </h3>
                  <p className="text-sm text-orange-200/80 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName || "Partner"}</strong>. Our Lead System Architect has been notified and will reach out to <strong className="text-white">{formData.businessEmail}</strong> within 4 business hours.
                  </p>
                </div>
                <div className="pt-4">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all"
                  >
                    <span>Return to Homepage</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="space-y-1 pb-2 border-b border-white/15">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                    Request a Free Scoping Proposal
                  </h2>
                  <p className="text-xs text-orange-200/70">
                    All inquiries are covered under our strict mutual non-disclosure policy.
                  </p>
                </div>

                {/* Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-orange-200/80 font-semibold">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-orange-200/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#FE3912]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-orange-200/80 font-semibold">
                      Business / Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.businessEmail}
                      onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-orange-200/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#FE3912]"
                    />
                  </div>
                </div>

                {/* Phone & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-orange-200/80 font-semibold">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-orange-200/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#FE3912]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-orange-200/80 font-semibold">
                      Primary Service Needed *
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#3B1408] border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FE3912]"
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="Mobile App Development">Mobile App Development (iOS & Android)</option>
                      <option value="Modern Web Design">Modern Web Design</option>
                      <option value="Graphic Design & Branding">Graphic Design & Branding</option>
                      <option value="UI / UX Design">UI / UX Design</option>
                      <option value="Custom Software Development">Custom Software Development</option>
                      <option value="SaaS Platform Development">SaaS Platform Development</option>
                      <option value="AI Automation & Workflows">AI Automation & Workflows</option>
                    </select>
                  </div>
                </div>

                {/* Budget Range */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-orange-200/80 font-semibold">
                    Estimated Budget Range
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#3B1408] border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FE3912]"
                  >
                    <option value="Under $1,000">Under $1,000</option>
                    <option value="$1,000 - $3,000">$1,000 - $3,000 (Standard)</option>
                    <option value="$3,000 - $10,000">$3,000 - $10,000 (Growth / Custom App)</option>
                    <option value="$10,000+">$10,000+ (Full Enterprise / SaaS Platform)</option>
                  </select>
                </div>

                {/* Project Overview */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-orange-200/80 font-semibold">
                    Project Details & Goals *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your project, key features, target timeline, or any reference websites..."
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-orange-200/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#FE3912] resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 sm:py-4 px-4 sm:px-8 rounded-xl bg-[#FE3912] hover:bg-[#E02E09] text-white font-bold text-xs sm:text-sm uppercase tracking-wider text-center transition-all shadow-lg hover:shadow-xl active:scale-[0.98] disabled:opacity-70"
                >
                  {loading ? (
                    <span>Submitting Your Scoping Inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Request for Free Architecture Proposal</span>
                      <Send className="w-4 h-4 shrink-0" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-orange-200/60 font-mono">
                  🔒 Encrypted submission. We never spam or sell your contact information.
                </p>

              </form>
            )}

          </div>

          {/* Right Column: Contact Details, Working Hours & Guarantees */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            
            {/* Direct Contact Card */}
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#3B1408] text-white border border-white/20 shadow-xl space-y-6">
              <h3 className="text-xl font-extrabold text-white">
                Direct Contact & Consultation
              </h3>

              <div className="space-y-4 text-sm text-orange-100/85">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#FE3912] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-orange-200/60 uppercase block">
                      Direct Email
                    </span>
                    <a href="mailto:contact@theoginfotech.com" className="font-bold text-white hover:text-orange-200 transition-colors">
                      contact@theoginfotech.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#FE3912] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-orange-200/60 uppercase block">
                      Guaranteed SLA
                    </span>
                    <span className="font-bold text-white">
                      Response within 4 business hours
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#FE3912] shrink-0">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-orange-200/60 uppercase block">
                      Intellectual Property
                    </span>
                    <span className="font-bold text-white">
                      Mutual NDA signed before discovery
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* What Happens Next Card */}
            <div className="p-8 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/40 shadow-lg space-y-5 text-[#521D0E]">
              <h3 className="text-lg font-extrabold text-[#521D0E]">
                What Happens After You Submit?
              </h3>

              <ol className="space-y-3 text-xs sm:text-sm font-medium">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#FE3912] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </span>
                  <span>We review your requirements and assign our dedicated Lead Architect.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#FE3912] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </span>
                  <span>We schedule a 30-minute discovery scoping call to clarify details.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#FE3912] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </span>
                  <span>You receive a fixed-price proposal with timeline and architecture blueprint.</span>
                </li>
              </ol>
            </div>

          </div>

        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
