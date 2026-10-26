import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { TechMatrix } from "@/components/content/TechMatrix";
import { CaseStudies } from "@/components/content/CaseStudies";
import { EngineeringWorkflow } from "@/components/content/EngineeringWorkflow";
import { Testimonials } from "@/components/content/Testimonials";
import { EnterpriseCTA } from "@/components/content/EnterpriseCTA";
import { Footer } from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#F9B384] via-[#F8AB79] via-[#F6A16B] via-[#F5985E] to-[#F7A673] text-[#521D0E] selection:bg-[#521D0E] selection:text-white relative">
      {/* Main Corporate Platform Showcase with Billboard Header */}
      <main className="flex-1 relative">
        {/* Hero Section with Interactive System Architecture Visualizer & Trust Ticker */}
        <HeroSection />

        {/* Modular Services Showcase with Cursor Spotlight FX */}
        <ServicesSection />

        {/* Enterprise Tech Stack Matrix */}
        <TechMatrix />

        {/* Measurable Enterprise Case Studies & Realized Outcomes */}
        <CaseStudies />

        {/* 4-Phase Architecture Delivery Methodology */}
        <EngineeringWorkflow />

        {/* Executive Leadership & Client Endorsements */}
        <Testimonials />

        {/* High-Impact Enterprise CTA & Technical Audit Request */}
        <EnterpriseCTA />
      </main>

      {/* Corporate Multi-Column Footer */}
      <Footer />
    </div>
  );
}
