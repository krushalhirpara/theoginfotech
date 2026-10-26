"use client";

import React, { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  metricLabel: string;
  metricValue: string;
  href?: string;
}

export const ServiceCard: React.FC<ServiceItem> = ({
  title,
  category,
  description,
  icon,
  metricLabel,
  metricValue,
  href = "#contact",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: -1000, y: -1000 });
      }}
      className="relative group rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#3B1408]/95 via-[#4A1A0C]/95 to-[#260B03]/95 hover:from-[#45180B] hover:to-[#2D0D05] border border-white/20 hover:border-[#FE3912]/60 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-[0_16px_36px_rgba(82,29,14,0.35)] hover:shadow-[0_24px_50px_rgba(254,57,18,0.3)] text-white"
    >
      {/* Dynamic Cursor-Following Warm Light Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-2xl sm:rounded-3xl z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, rgba(254, 57, 18, 0.25), transparent 60%)`,
        }}
      />

      {/* Top Hairline Reflection */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent z-10"
      />

      {/* Main Content Body */}
      <div className="relative z-10 space-y-5 sm:space-y-6">
        {/* Custom SVG Icon Inside Sub-Glow Container */}
        <div className="relative inline-flex">
          {/* Sub-Glow Radial Halo Behind Icon */}
          <div 
            aria-hidden="true"
            className="absolute -inset-1.5 bg-gradient-to-r from-[#FE3912]/40 to-[#F9B384]/30 rounded-2xl blur-md opacity-40 group-hover:opacity-100 group-hover:blur-lg transition-all duration-500" 
          />
          
          {/* Icon Container */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#FE3912] shadow-inner group-hover:border-[#FE3912]/80 group-hover:bg-[#FE3912] group-hover:text-white group-hover:scale-105 transition-all duration-300">
            {icon}
          </div>
        </div>

        {/* Category & Title */}
        <div className="space-y-2 sm:space-y-3">
          <div>
            <span className="relative inline-flex items-center px-3 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-[0.18em] font-bold text-orange-200 bg-white/10 border border-white/20 shadow-xs">
              {category}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-orange-200 transition-colors duration-200">
            {title}
          </h3>
        </div>

        {/* Short High-Impact Description */}
        <p className="text-xs sm:text-sm text-orange-100/80 leading-relaxed font-normal">
          {description}
        </p>
      </div>

      {/* Card Footer: Enterprise Metric & Interactive Animated Arrow */}
      <div className="relative z-10 pt-5 mt-5 sm:pt-6 sm:mt-6 border-t border-white/15 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-[10px] font-mono uppercase tracking-wider text-orange-200/60 font-semibold">
            {metricLabel}
          </span>
          <span className="font-mono text-sm font-bold text-white tracking-tight">
            {metricValue}
          </span>
        </div>

        {/* Interactive "Learn More" with Animated Spring Arrow */}
        <a
          href={href}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-200/90 group-hover:text-white transition-colors duration-200 focus:outline-none"
          aria-label={`Learn more about ${title}`}
        >
          <span>Learn More</span>
          <span className="w-7 h-7 rounded-lg bg-white/10 border border-white/20 text-orange-200 flex items-center justify-center group-hover:bg-[#FE3912] group-hover:text-white group-hover:border-[#FE3912] transition-all duration-300 shadow-xs">
            <ArrowRight className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </a>
      </div>
    </article>
  );
};
