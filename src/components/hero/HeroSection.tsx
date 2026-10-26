"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Terminal } from "lucide-react";
import { BillboardHeader } from "./BillboardHeader";
import { TrustTicker } from "./TrustTicker";
import { DinoGame } from "./DinoGame";

interface TypewriterPhrase {
  gradientText: string;
  restText: string;
}

const TARGET_PHRASE: TypewriterPhrase = {
  gradientText: "Web Design & UI/UX",
  restText: " Built for Maximum Conversions.",
};

export const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const fullLength = TARGET_PHRASE.gradientText.length + TARGET_PHRASE.restText.length;
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < fullLength) {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 45);
    } else if (!isDeleting && charIndex === fullLength) {
      // Hold at full text for 4 seconds so the user can comfortably read it
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 4000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev - 1);
      }, 25);
    } else if (isDeleting && charIndex === 0) {
      // Pause briefly before typing again
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 600);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, mounted]);

  const gradientLen = TARGET_PHRASE.gradientText.length;

  const displayedGradient = mounted
    ? TARGET_PHRASE.gradientText.slice(0, Math.min(charIndex, gradientLen))
    : TARGET_PHRASE.gradientText;

  const displayedRest = mounted
    ? (charIndex > gradientLen ? TARGET_PHRASE.restText.slice(0, charIndex - gradientLen) : "")
    : TARGET_PHRASE.restText;

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
    <section className="relative w-full pt-10 sm:pt-14 pb-0 overflow-hidden bg-gradient-to-b from-[#F9B384] via-[#F8AB79] to-[#F5A069]">
      
      {/* 1. SOFT FLUFFY CARTOON CLOUDS IN BACKGROUND (Matching Reference) */}
      
      {/* Cloud Left (Under top-left title) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute left-6 sm:left-16 top-36 sm:top-48 z-0 text-white animate-[cloud-float_6s_ease-in-out_infinite]"
      >
        <svg className="w-32 sm:w-48 h-18 sm:h-28 text-white opacity-95 drop-shadow-xs" viewBox="0 0 200 100" fill="#FFFFFF">
          <path fill="#FFFFFF" d="M30,80 A25,25 0 0,1 40,35 A35,35 0 0,1 95,20 A45,45 0 0,1 160,35 A30,30 0 0,1 180,80 Z" />
        </svg>
      </div>

      {/* Cloud Top Right (Behind Billboard) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute right-4 sm:right-16 top-4 sm:top-8 z-0 text-white animate-[cloud-float_8s_ease-in-out_infinite]"
      >
        <svg className="w-40 sm:w-64 h-24 sm:h-36 text-white opacity-90 drop-shadow-xs" viewBox="0 0 200 100" fill="#FFFFFF">
          <path fill="#FFFFFF" d="M30,80 A25,25 0 0,1 40,35 A35,35 0 0,1 95,20 A45,45 0 0,1 160,35 A30,30 0 0,1 180,80 Z" />
        </svg>
      </div>

      {/* Cloud Bottom Right (Behind Ladder Stand) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute right-8 sm:right-28 bottom-28 sm:bottom-36 z-0 text-white animate-[cloud-float_7s_ease-in-out_infinite]"
      >
        <svg className="w-48 sm:w-80 h-28 sm:h-44 text-white opacity-95 drop-shadow-xs" viewBox="0 0 200 100" fill="#FFFFFF">
          <path fill="#FFFFFF" d="M30,80 A25,25 0 0,1 40,35 A35,35 0 0,1 95,20 A45,45 0 0,1 160,35 A30,30 0 0,1 180,80 Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP-LEFT TITLE */}
        <div className="mb-8 sm:mb-12">
          <span className="font-extrabold text-xl sm:text-2xl text-[#521D0E] tracking-tight">
            Website, App, Software & AI Automation Studio
          </span>
        </div>

        {/* ASYMMETRICAL GRID: LEFT COPY & RIGHT BILLBOARD STAND HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: Editorial Typography & Kinetic Typing Headline */}
          <div className="lg:col-span-6 space-y-7 text-left pt-2 sm:pt-6">

            {/* Kinetic Oversized Headline with Typing Animation (Ghost Stack ensures 100% static layout) */}
            <div className="grid grid-cols-1 grid-rows-1">
              
              {/* Invisible Ghost Headline that permanently pre-allocates exact height across all devices */}
              <h1 
                aria-hidden="true" 
                className="invisible pointer-events-none select-none opacity-0 col-start-1 row-start-1 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] leading-[1.08]"
              >
                Building{" "}
                <span className="text-[#521D0E]">
                  {TARGET_PHRASE.gradientText}
                </span>
                <span className="text-[#EA3412]">
                  {TARGET_PHRASE.restText}
                </span>
                <span className="inline-block w-[3.5px] sm:w-[5px] h-[0.85em] ml-1" />
              </h1>

              {/* Active Visible Typing Headline */}
              <h1 className="col-start-1 row-start-1 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] leading-[1.08] text-[#EA3412]">
                Building{" "}
                <span className="text-[#521D0E]">
                  {displayedGradient}
                </span>
                <span className="text-[#EA3412]">{displayedRest}</span>
                <span 
                  aria-hidden="true" 
                  className="inline-block w-[3.5px] sm:w-[5px] h-[0.85em] ml-1 bg-[#FE3912] rounded-full animate-pulse align-middle shadow-[0_0_8px_rgba(254,57,18,0.8)]" 
                />
              </h1>

            </div>

            {/* Enterprise Subheadline */}
            <p className="text-base sm:text-lg text-[#521D0E]/85 max-w-xl font-medium leading-relaxed">
              We design and develop high-converting Websites, Mobile Apps, custom Software, SaaS Platforms, 
              creative Graphics, UI/UX experiences, and smart AI Automations engineered to rank #1 and scale your business.
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="/contact"
                onClick={(e) => handleNavClick(e, "/contact", "contact")}
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm tracking-wide text-white bg-[#521D0E] hover:bg-[#3B1408] transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Get Free Project Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="/services"
                onClick={(e) => handleNavClick(e, "/services", "services")}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm tracking-wide text-[#521D0E] bg-white/30 hover:bg-white/45 backdrop-blur-md border border-white/60 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <Terminal className="w-4 h-4 text-[#EA3412] group-hover:rotate-12 transition-transform duration-300" />
                <span>Explore 8 Core Services</span>
              </a>
            </div>

            {/* Micro Metrics in Matching Warm Sienna Tones */}
            <div className="pt-4 border-t border-[#521D0E]/15 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <p className="font-mono text-2xl font-bold text-[#521D0E] tracking-tight">100/100</p>
                <p className="text-xs text-[#521D0E]/75 mt-0.5 font-medium">SEO & PageSpeed</p>
              </div>
              <div>
                <p className="font-mono text-2xl font-bold text-[#EA3412] tracking-tight">8 Core</p>
                <p className="text-xs text-[#521D0E]/75 mt-0.5 font-medium">Digital Services</p>
              </div>
              <div>
                <p className="font-mono text-2xl font-bold text-[#521D0E] tracking-tight">10x ROI</p>
                <p className="text-xs text-[#521D0E]/75 mt-0.5 font-medium">AI Automation</p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: THE BILLBOARD STAND HEADER (Matching Reference Image Same to Same) */}
          <div className="lg:col-span-6 w-full">
            <BillboardHeader />
          </div>

        </div>

      </div>

      {/* Extra Space & Interactive T-Rex Google Dino Run Game */}
      <div className="mt-16 sm:mt-24 relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <DinoGame />
      </div>

      {/* BOTTOM ROW: Continuous Scrolling Client Trust Bar */}
      <div className="mt-14 sm:mt-20 relative z-10">
        <TrustTicker />
      </div>

    </section>
  );
};
