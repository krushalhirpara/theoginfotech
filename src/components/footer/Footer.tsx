"use client";

import React from "react";
import { Cpu, ArrowUpRight, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetPath: string, targetId: string) => {
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      const el = document.getElementById(targetId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", window.location.pathname);
      }
    }
  };

  return (
    <footer className="border-t border-[#521D0E] bg-[#3B1408] text-white pt-16 pb-12 relative overflow-hidden">
      {/* Decorative Warm Ambient Glows */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-24 left-1/4 w-96 h-96 bg-[#FE3912]/15 rounded-full blur-[140px]" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Brand Info & Mission (Matching Billboard Header Logo in Hero) */}
          <div className="lg:col-span-2 space-y-5">
            <a href="/" className="flex items-center gap-3.5 group" aria-label="THE OG INFOTECH Home">
              {/* White Oval Cutout like Reference Billboard Image */}
              <div className="w-10 h-13 sm:w-11 sm:h-15 rounded-[50%] bg-white flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-200">
                <Cpu className="w-5 h-5 text-[#FE3912]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold tracking-tight text-white text-base leading-none group-hover:text-orange-100 transition-colors">
                  THE OG INFOTECH
                </span>
                <span className="text-[10px] font-mono text-orange-200 tracking-widest uppercase mt-1 font-semibold">
                  Website, App, Software & AI Solutions
                </span>
              </div>
            </a>

            <p className="text-sm text-orange-100/80 max-w-sm leading-relaxed">
              Premier full-stack digital agency delivering bespoke Website Development, Mobile Apps (iOS & Android), 
              modern Web Design, Graphics, UI/UX, Custom Software, SaaS Platforms, and smart AI Automations.
            </p>

            <div className="flex items-center gap-2.5 text-xs font-mono text-orange-200/80 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-xs w-fit">
              <span className="w-2 h-2 rounded-full bg-[#FE3912] shadow-[0_0_6px_rgba(254,57,18,0.8)] animate-pulse" />
              <span>100% Client Satisfaction · Global Delivery</span>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-orange-200 font-bold">
              Our 8 Core Services
            </h4>
            <ul className="space-y-2 text-sm text-orange-100/75">
              <li><a href="/services" onClick={(e) => handleNavClick(e, "/services", "services")} className="hover:text-[#FE3912] transition-colors">Website Development</a></li>
              <li><a href="/services" onClick={(e) => handleNavClick(e, "/services", "services")} className="hover:text-[#FE3912] transition-colors">Mobile App Development</a></li>
              <li><a href="/services" onClick={(e) => handleNavClick(e, "/services", "services")} className="hover:text-[#FE3912] transition-colors">Modern Web Design</a></li>
              <li><a href="/services" onClick={(e) => handleNavClick(e, "/services", "services")} className="hover:text-[#FE3912] transition-colors">Graphic Design & Branding</a></li>
              <li><a href="/services" onClick={(e) => handleNavClick(e, "/services", "services")} className="hover:text-[#FE3912] transition-colors">UI / UX Design</a></li>
              <li><a href="/services" onClick={(e) => handleNavClick(e, "/services", "services")} className="hover:text-[#FE3912] transition-colors">Custom Software</a></li>
              <li><a href="/services" onClick={(e) => handleNavClick(e, "/services", "services")} className="hover:text-[#FE3912] transition-colors">SaaS Platform Dev</a></li>
              <li><a href="/services" onClick={(e) => handleNavClick(e, "/services", "services")} className="hover:text-[#FE3912] transition-colors">AI Automation Workflows</a></li>
            </ul>
          </div>

          {/* Architecture & Tech Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-orange-200 font-bold">
              Engineering & Stack
            </h4>
            <ul className="space-y-2.5 text-sm text-orange-100/75">
              <li><a href="/tech-stack" onClick={(e) => handleNavClick(e, "/tech-stack", "tech-stack")} className="hover:text-[#FE3912] transition-colors">Technology Matrix</a></li>
              <li><a href="/methodology" onClick={(e) => handleNavClick(e, "/methodology", "methodology")} className="hover:text-[#FE3912] transition-colors">4-Phase Methodology</a></li>
              <li><a href="/case-studies" onClick={(e) => handleNavClick(e, "/case-studies", "case-studies")} className="hover:text-[#FE3912] transition-colors">Verified Case Studies</a></li>
              <li><a href="/contact" onClick={(e) => handleNavClick(e, "/contact", "contact")} className="hover:text-[#FE3912] transition-colors">Google #1 SEO Strategy</a></li>
              <li><a href="/contact" onClick={(e) => handleNavClick(e, "/contact", "contact")} className="hover:text-[#FE3912] transition-colors">Get Free Project Quote</a></li>
            </ul>
          </div>

          {/* Enterprise Governance */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-orange-200 font-bold">
              Quality Assurance
            </h4>
            <ul className="space-y-2.5 text-sm text-orange-100/85">
              <li><span className="text-white font-medium">100/100 Core Web Vitals</span></li>
              <li><span className="text-white font-medium">Cross-Platform iOS & Android</span></li>
              <li><span className="text-white font-medium">100% Strict NDA Protection</span></li>
              <li><span className="text-white font-medium">Google SEO Rich Schema</span></li>
              <li><span className="text-white font-medium">Ongoing Technical Support</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-orange-200/60 font-medium">
          <p>© 2026 THE OG INFOTECH (theoginfotech.com). All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Enterprise SLA</a>
            <a href="#security" className="hover:text-white transition-colors">Security Whitepaper</a>
            <a href="#contact" className="hover:text-white transition-colors">Mutual NDA Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
