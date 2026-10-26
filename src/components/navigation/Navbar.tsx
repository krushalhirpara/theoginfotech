"use client";

import React, { useState } from "react";
import { Cpu, Menu, X, ArrowUpRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetPath: string, targetId: string) => {
    setMobileMenuOpen(false);
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
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LEFT: Brand Logo */}
        <a 
          href="/" 
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-accent-cyan rounded-xl z-10"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan/15 to-accent-violet/15 border border-slate-200 flex items-center justify-center text-accent-cyan group-hover:border-accent-cyan group-hover:shadow-glow-cyan transition-all duration-300">
            <Cpu className="w-5 h-5 text-accent-cyan" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-tight text-slate-900 text-base leading-none group-hover:text-[#FE3912] transition-colors">
              THE OG INFOTECH
            </span>
            <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase mt-1">
              Website, App, Software & AI Solutions
            </span>
          </div>
        </a>

        {/* CENTER: Navigation Links (Mathematically Centered in Navbar) */}
        <nav 
          className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 text-sm font-medium text-slate-600" 
          aria-label="Main Navigation"
        >
          <a
            href="/services"
            onClick={(e) => handleNavClick(e, "/services", "services")}
            className="hover:text-[#FE3912] transition-colors"
          >
            Services
          </a>
          <a
            href="/tech-stack"
            onClick={(e) => handleNavClick(e, "/tech-stack", "tech-stack")}
            className="hover:text-[#FE3912] transition-colors"
          >
            Tech Matrix
          </a>
          <a
            href="/case-studies"
            onClick={(e) => handleNavClick(e, "/case-studies", "case-studies")}
            className="hover:text-[#FE3912] transition-colors"
          >
            Case Studies
          </a>
          <a
            href="/methodology"
            onClick={(e) => handleNavClick(e, "/methodology", "methodology")}
            className="hover:text-[#FE3912] transition-colors"
          >
            Methodology
          </a>
        </nav>

        {/* RIGHT: Get Quote CTA */}
        <div className="hidden md:flex items-center gap-3 z-10">
          <a
            href="/contact"
            onClick={(e) => handleNavClick(e, "/contact", "contact")}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#521D0E] text-white hover:bg-[#3B1408] hover:shadow-md transition-all duration-200"
          >
            Get Free Quote
            <ArrowUpRight className="w-3.5 h-3.5 text-orange-200" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-4 pb-6 border-b border-slate-200 bg-white/95 backdrop-blur-2xl space-y-3 shadow-lg">
          <a
            href="/services"
            onClick={(e) => handleNavClick(e, "/services", "services")}
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-accent-cyan"
          >
            Services
          </a>
          <a
            href="/tech-stack"
            onClick={(e) => handleNavClick(e, "/tech-stack", "tech-stack")}
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-accent-cyan"
          >
            Tech Matrix
          </a>
          <a
            href="/case-studies"
            onClick={(e) => handleNavClick(e, "/case-studies", "case-studies")}
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-accent-cyan"
          >
            Case Studies
          </a>
          <a
            href="/methodology"
            onClick={(e) => handleNavClick(e, "/methodology", "methodology")}
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-accent-cyan"
          >
            Methodology
          </a>
          <div className="pt-2">
            <a
              href="/contact"
              onClick={(e) => handleNavClick(e, "/contact", "contact")}
              className="block w-full text-center py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-slate-900 text-white"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
