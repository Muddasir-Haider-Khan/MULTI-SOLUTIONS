"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";
import { 
  ArrowRight, 
  Phone, 
  ShieldCheck, 
  Building2, 
  CheckCircle2, 
  Package, 
  Monitor, 
  Printer, 
  Network, 
  Camera, 
  Server,
  Sparkles
} from "lucide-react";

export default function Hero() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const categories = [
    {
      id: "supplies",
      title: "General Supplies",
      icon: <Package className="w-5 h-5 text-brand-red" />,
      tagline: "A4 & Legal Paper, Files, Pens & Consumables",
      highlight: "Imported 80gsm/75gsm paper reams, lever arch files, registry books, and full desk stationery.",  
      badge: "Fast Dispatch",
    },
    {
      id: "computers",
      title: "PCs & Laptops",
      icon: <Monitor className="w-5 h-5 text-brand-red" />,
      tagline: "Commercial Desktops, Workstations & Laptops",
      highlight: "Brand-new and certified business hardware with local warranty support and ready configuration.",
      badge: "Tested Hardware",
    },
    {
      id: "printers",
      title: "Printers & Toners",
      icon: <Printer className="w-5 h-5 text-brand-red" />,
      tagline: "Heavy-Duty Laser Printers, Copiers & Cartridges",
      highlight: "Genuine and high-yield compatible toners that prevent drum wear and keep print costs low.",
      badge: "Authentic Toners",
    },
    {
      id: "networking",
      title: "Networking",
      icon: <Network className="w-5 h-5 text-brand-red" />,
      tagline: "Cat6 Cabling, Managed Switches & Office Wi-Fi",
      highlight: "Certified structured Ethernet cabling, patch panel termination, and corporate access points.",
      badge: "Certified Cabling",
    },
    {
      id: "cctv",
      title: "CCTV Surveillance",
      icon: <Camera className="w-5 h-5 text-brand-red" />,
      tagline: "IP Cameras, Continuous NVR Storage & Cabling",
      highlight: "High-definition security cameras with night vision, central recording, and remote monitoring.",
      badge: "Security Standard",
    },
    {
      id: "servers",
      title: "Servers & Racks",
      icon: <Server className="w-5 h-5 text-brand-red" />,
      tagline: "Tower & Rack Servers, Data Cabinets & UPS",
      highlight: "On-premises database servers, enclosed server racks, and online power backup integration.",
      badge: "Enterprise Ready",
    },
  ];

  const current = categories[selectedCategory];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-radial-red overflow-hidden border-b border-gray-200">
      {/* Decorative Subtle Architectural Lines */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-80" />
      <div className="absolute inset-y-0 left-8 sm:left-16 w-px bg-gray-100 hidden lg:block" />
      <div className="absolute inset-y-0 right-8 sm:right-16 w-px bg-gray-100 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Brand Message */}
          <div className="lg:col-span-7 space-y-6">
            {/* Location & Reliability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-red-50 border border-red-200/80 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
              <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                Blue Area, Islamabad &bull; Walli Center Procurement Desk
              </span>
            </div>

            {/* Main Headline in Times New Roman Bold */}
            <div className="space-y-2">
              <h1 className="font-serif font-black text-4xl sm:text-6xl md:text-7xl text-gray-950 tracking-tight leading-[1.08]">
                GUARANTOR OF <br />
                <span className="text-brand-red relative inline-block">
                  YOUR HOPES
                  <svg 
                    className="absolute -bottom-2 left-0 w-full h-3 text-brand-red" 
                    viewBox="0 0 200 8" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 5.5C40 2 120 1 199 5.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>
            </div>

            {/* Sub-tagline from Logo in Arial Bold */}
            <div className="pt-2">
              <p className="text-base sm:text-xl font-bold text-gray-800 tracking-wide uppercase">
                {siteConfig.subTagline}
              </p>
            </div>

            {/* Descriptive Proposition */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl font-normal">
              A tight-knit, dependable supplier delivering general office consumables, computer systems, printers, structured networking, CCTV surveillance, and server infrastructure to government secretariats, hospitals, banks, and offices at honest wholesale rates.
            </p>

            {/* Direct Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider bg-brand-red text-white hover:bg-brand-red-hover transition-all duration-200 shadow-red-button hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg font-bold text-sm uppercase tracking-wider bg-white text-gray-800 border-2 border-gray-200 hover:border-brand-red hover:bg-red-50/30 transition-all duration-200 shadow-sm"
              >
                <Phone className="w-4 h-4 text-brand-red" />
                <span>Call: {siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>

            {/* Trust Metrics Row */}
            <div className="pt-8 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-red-100 text-brand-red shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-serif font-bold text-base text-gray-900 leading-tight">15+ Institutions</p>
                  <p className="text-xs text-gray-500">Government, Banks, Hospitals</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-red-100 text-brand-red shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-serif font-bold text-base text-gray-900 leading-tight">Honest Pricing</p>
                  <p className="text-xs text-gray-500">Direct wholesale margins</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-red-100 text-brand-red shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-serif font-bold text-base text-gray-900 leading-tight">Direct Delivery</p>
                  <p className="text-xs text-gray-500">Fast on-site fulfillment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Live Supply & Solutions Explorer */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 sm:p-8 shadow-card hover:border-brand-red/50 transition-all duration-300 relative">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-red block">
                    Interactive Directory
                  </span>
                  <h3 className="font-serif font-bold text-xl text-gray-900">
                    Explore What We Supply
                  </h3>
                </div>
                <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded">
                  Category {selectedCategory + 1} of 6
                </span>
              </div>

              {/* Quick Tab Selector */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {categories.map((cat, idx) => {
                  const isActive = idx === selectedCategory;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(idx)}
                      className={`p-2.5 rounded-lg border text-left transition-all duration-150 flex flex-col items-center justify-center text-center ${
                        isActive
                          ? "bg-red-50 border-brand-red text-gray-950 font-bold shadow-sm"
                          : "bg-gray-50/70 border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      <div className="mb-1">{cat.icon}</div>
                      <span className="text-[11px] leading-tight block truncate w-full">
                        {cat.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Category Card Content */}
              <div className="bg-gradient-to-b from-gray-50 to-white rounded-xl p-5 border border-gray-200 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded bg-white border border-gray-200 shadow-xs">
                      {current.icon}
                    </span>
                    <h4 className="font-serif font-bold text-lg text-gray-900">
                      {current.title}
                    </h4>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-red-100 text-brand-red">
                    {current.badge}
                  </span>
                </div>

                <p className="text-xs font-bold text-gray-700">
                  {current.tagline}
                </p>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {current.highlight}
                </p>

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-gray-900 hover:bg-brand-red text-white transition-colors duration-200 shadow-sm"
                  >
                    <span>Request Quotation for {current.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                <span>Click any icon above to inspect specs</span>
                <span className="font-bold text-brand-red">Direct Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
