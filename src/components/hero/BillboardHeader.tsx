"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Cpu, Menu, X, ArrowRight, ExternalLink } from "lucide-react";

export const BillboardHeader: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="relative w-full max-w-2xl mx-auto lg:mr-0 select-none">
      
      {/* Bird Flying Above Billboard */}
      <div 
        aria-hidden="true" 
        className="absolute -top-12 left-16 z-20 text-[#D83A1A] animate-[bounce_4s_ease-in-out_infinite]"
      >
        <svg className="w-10 h-10 transform -rotate-12" viewBox="0 0 48 48" fill="currentColor">
          <path d="M12 28c6-2 12-8 16-16 2 6 6 12 12 14-8 2-12 6-14 12-2-6-6-8-14-10z" />
          <circle cx="28" cy="18" r="3" />
        </svg>
      </div>

      {/* Bird Perched on Top-Right of Billboard */}
      <div 
        aria-hidden="true" 
        className="absolute -top-5 right-20 z-20 text-[#521D0E]"
      >
        <svg className="w-6 h-6 transform scale-x-[-1]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 6c-2 0-4 1.5-4 3.5 0 .5.1 1 .3 1.5L6 14c-.6.6-1 1.4-1 2.3 0 1.8 1.5 3.3 3.3 3.3 1 0 1.8-.4 2.4-1l3.5-4.3c.5.2 1 .3 1.5.3 2.2 0 4-1.8 4-4s-1.8-4-4-4z" />
          <circle cx="15" cy="8" r="1" fill="#FFFFFF" />
        </svg>
      </div>

      {/* 1. THE BILLBOARD (Header Container) */}
      <div className="relative z-10 w-full bg-[#FE3912] rounded-md shadow-[0_12px_30px_rgba(82,29,14,0.35)] transform -rotate-[1deg] hover:rotate-0 transition-transform duration-300">
        
        {/* Subtle Inner Bevel / Highlight */}
        <div 
          aria-hidden="true" 
          className="absolute inset-x-0 top-0 h-1 bg-white/30 rounded-t-md" 
        />
        
        <header className="px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between">
          
          {/* Billboard Left: Cutout Oval with Brand Icon */}
          <a 
            href="/" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-white rounded-full"
            aria-label="THE OG INFOTECH Home"
          >
            {/* White Oval Cutout like Reference Image */}
            <div className="w-11 h-14 sm:w-12 sm:h-16 rounded-[50%] bg-white flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-200">
              <Cpu className="w-6 h-6 text-[#FE3912]" />
            </div>

            <div className="flex flex-col text-left">
              <span className="font-extrabold text-white text-base sm:text-lg tracking-tight leading-none group-hover:text-orange-100 transition-colors">
                THE OG INFOTECH
              </span>
              <span className="text-[10px] font-mono text-orange-200 tracking-widest uppercase mt-1 font-semibold">
                Website, App, Software & AI Solutions
              </span>
            </div>
          </a>

          {/* Billboard Right: Interactive 3-Line Hamburger Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="p-2 sm:p-2.5 rounded-lg bg-black/10 hover:bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-white transition-all flex flex-col justify-center items-center gap-1.5"
              aria-label="Toggle Billboard Navigation Menu"
              aria-expanded={navOpen}
            >
              {navOpen ? (
                <X className="w-7 h-7 sm:w-8 sm:h-8" />
              ) : (
                <div className="space-y-1.5 p-1" aria-hidden="true">
                  <span className="block w-7 sm:w-9 h-1 sm:h-1.5 bg-white rounded-full shadow-xs" />
                  <span className="block w-7 sm:w-9 h-1 sm:h-1.5 bg-white rounded-full shadow-xs" />
                  <span className="block w-7 sm:w-9 h-1 sm:h-1.5 bg-white rounded-full shadow-xs" />
                </div>
              )}
            </button>
          </div>
        </header>

        {/* Dropdown Menu when Billboard Hamburger is Clicked */}
        {navOpen && (
          <nav 
            className="border-t border-white/20 bg-[#E02E09] p-5 sm:p-6 rounded-b-md space-y-3 text-white text-sm font-semibold tracking-wide"
            aria-label="Billboard Navigation Links"
          >
            <div className="grid grid-cols-2 gap-3 pb-3 border-b border-white/15">
              <Link
                href="/services"
                onClick={() => setNavOpen(false)}
                className="hover:text-orange-200 transition-colors py-1 flex items-center gap-1.5"
              >
                <span>• 8 Core Services</span>
              </Link>
              <Link
                href="/tech-stack"
                onClick={() => setNavOpen(false)}
                className="hover:text-orange-200 transition-colors py-1 flex items-center gap-1.5"
              >
                <span>• Tech Matrix</span>
              </Link>
              <Link
                href="/case-studies"
                onClick={() => setNavOpen(false)}
                className="hover:text-orange-200 transition-colors py-1 flex items-center gap-1.5"
              >
                <span>• Client Case Studies</span>
              </Link>
              <Link
                href="/methodology"
                onClick={() => setNavOpen(false)}
                className="hover:text-orange-200 transition-colors py-1 flex items-center gap-1.5"
              >
                <span>• 4-Phase Delivery</span>
              </Link>
            </div>
            
            <div className="pt-1 flex items-center justify-between">
              <span className="text-xs font-mono text-orange-200 uppercase tracking-widest">
                Top-Rated Digital & AI Agency
              </span>
              <Link
                href="/contact"
                onClick={() => setNavOpen(false)}
                className="inline-flex items-center gap-1 px-4 py-2 bg-white text-[#FE3912] font-bold text-xs rounded-lg uppercase tracking-wider hover:bg-orange-100 transition-all shadow-sm"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </nav>
        )}
      </div>

      {/* 2. THE CATWALK STRUCTURE & SUPPORT BRACKETS */}
      <div className="relative w-full z-0">
        
        {/* 5 White Support Brackets under Billboard */}
        <div className="w-[85%] mx-auto flex justify-between items-start px-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-7 h-4 bg-white shadow-sm"
              style={{
                clipPath: "polygon(0 0, 100% 0, 75% 100%, 25% 100%)",
              }}
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Horizontal Catwalk Beam (Deep Sienna / Chestnut) */}
        <div className="relative w-[108%] -left-[4%] h-5 sm:h-6 bg-[#521D0E] rounded-xs shadow-md flex items-center justify-between">
          {/* Subtle girder texture rivets */}
          <div className="flex gap-4 px-3" aria-hidden="true">
            <span className="w-1.5 h-1.5 rounded-full bg-black/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-black/40" />
          </div>

          {/* Right Cantilever with Hanging Sneakers! */}
          <div className="relative pr-4">
            <div 
              className="absolute top-2 -right-1 origin-top animate-[swing_3.5s_ease-in-out_infinite]"
              title="Hanging Sneakers on the Catwalk"
            >
              {/* SVG of Hanging Sneakers by their Laces */}
              <svg className="w-12 h-20 overflow-visible" viewBox="0 0 48 80" fill="none">
                {/* Laces Tied to Beam */}
                <path d="M24 0 L14 34" stroke="#521D0E" strokeWidth="1.5" />
                <path d="M24 0 L32 38" stroke="#521D0E" strokeWidth="1.5" />
                
                {/* Left Sneaker (White High-Top with Red Details) */}
                <g transform="translate(6, 32) rotate(15)">
                  <path d="M0 0 L12 2 L14 18 L2 20 Z" fill="#FFFFFF" stroke="#521D0E" strokeWidth="1.2" />
                  <path d="M-2 18 L18 19 L16 24 L-4 23 Z" fill="#FFFFFF" stroke="#FE3912" strokeWidth="1.2" />
                  <circle cx="6" cy="10" r="2.5" fill="#FE3912" />
                  <line x1="2" y1="4" x2="10" y2="5" stroke="#FE3912" strokeWidth="1" />
                  <line x1="2" y1="8" x2="10" y2="9" stroke="#FE3912" strokeWidth="1" />
                </g>

                {/* Right Sneaker (Dangling slightly lower) */}
                <g transform="translate(22, 36) rotate(-10)">
                  <path d="M0 0 L12 2 L14 18 L2 20 Z" fill="#FFFFFF" stroke="#521D0E" strokeWidth="1.2" />
                  <path d="M-2 18 L18 19 L16 24 L-4 23 Z" fill="#FFFFFF" stroke="#FE3912" strokeWidth="1.2" />
                  <circle cx="6" cy="10" r="2.5" fill="#FE3912" />
                  <line x1="2" y1="4" x2="10" y2="5" stroke="#FE3912" strokeWidth="1" />
                  <line x1="2" y1="8" x2="10" y2="9" stroke="#FE3912" strokeWidth="1" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* 3. CENTRAL VERTICAL PILLAR & WHITE LADDER */}
        <div className="w-14 sm:w-16 bg-[#521D0E] mx-auto min-h-[380px] sm:min-h-[460px] relative shadow-lg flex justify-center">
          
          {/* White Metal Ladder Attached to Pillar */}
          <div 
            className="w-7 sm:w-8 border-l-2 border-r-2 border-white h-full relative"
            aria-label="Maintenance Ladder on Billboard Stand"
          >
            {/* Ladder Rungs */}
            {[...Array(24)].map((_, idx) => (
              <div
                key={idx}
                className="absolute w-full h-[2px] bg-white"
                style={{ top: `${(idx + 1) * 18}px` }}
                aria-hidden="true"
              />
            ))}
          </div>

        </div>

      </div>

    </div>
  );
};
