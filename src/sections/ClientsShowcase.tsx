"use client";

import { useState } from "react";
import Image from "next/image";
import { clients, ClientInstitution } from "@/data/clients";
import { LayoutGrid, MoveHorizontal, MapPin, Building, ShieldCheck } from "lucide-react";

export default function ClientsShowcase() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "marquee">("grid");

  const filterTabs = [
    { id: "all", label: "All Institutions", count: 15 },
    { id: "gov", label: "Government & Authorities", count: 5 },
    { id: "fin", label: "Banking & Insurance", count: 2 },
    { id: "health", label: "Healthcare", count: 2 },
    { id: "corp", label: "Corporate & NGOs", count: 6 },
  ];

  const filteredClients = clients.filter((c) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "gov") {
      return ["cda", "pha", "ict-local-gov", "ppaf", "mrc"].includes(c.id);
    }
    if (activeFilter === "fin") {
      return ["ztbl", "adamjee"].includes(c.id);
    }
    if (activeFilter === "health") {
      return ["lifecare", "downtown-hospital"].includes(c.id);
    }
    if (activeFilter === "corp") {
      return ["novacity", "legaloracles", "smj", "poda", "svi", "markaz-e-haq"].includes(c.id);
    }
    return true;
  });

  const row1 = clients.slice(0, 8);
  const row2 = clients.slice(8, 15);

  const renderClientCard = (client: ClientInstitution, isMarquee = false) => {
    return (
      <div
        key={`${client.id}-${isMarquee ? "marquee" : "grid"}`}
        className={`bg-white rounded-xl border-2 border-gray-200/80 p-6 flex flex-col items-center justify-between text-center transition-all duration-200 group ${
          isMarquee
            ? "w-64 sm:w-72 h-48 shrink-0 mx-3 hover:border-brand-red hover:shadow-card-hover"
            : "w-full h-52 hover:border-brand-red hover:shadow-card-hover hover:-translate-y-1.5"
        }`}
      >
        <div className="relative w-full h-24 flex items-center justify-center p-2">
          <Image
            src={client.logo}
            alt={client.alt}
            width={180}
            height={70}
            style={{ width: "auto", height: "auto" }}
            className="max-h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </div>

        <div className="w-full mt-2 pt-3 border-t border-gray-100">
          <h4 className="font-serif font-bold text-sm text-gray-900 leading-snug line-clamp-1 group-hover:text-brand-red transition-colors">
            {client.name}
          </h4>
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500 mt-1">
            <MapPin className="w-3 h-3 text-brand-red shrink-0" />
            <span className="truncate">{client.location}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="clients" className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50/50 to-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-6 border-b border-gray-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-brand-red uppercase tracking-wider mb-3">
              <Building className="w-3.5 h-3.5" />
              <span>Institutional Portfolio Showcase</span>
            </div>
            <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-gray-950 tracking-tight">
              Institutions We Have Worked With
            </h2>
            <p className="mt-3 text-base text-gray-600 max-w-3xl leading-relaxed">
              We have delivered general order stationery, office computer systems, networking cables, and security cameras to government secretariats, public sector authorities, banks, and healthcare facilities across Islamabad.
            </p>
          </div>

          {/* Toggle between Grid View & Animated Marquee */}
          <div className="flex items-center gap-2 bg-gray-100 p-1.5 rounded-lg border border-gray-200 self-start lg:self-end">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors ${
                viewMode === "grid"
                  ? "bg-white text-gray-950 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              aria-label="Filterable Grid View"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-brand-red" />
              <span>Interactive Grid</span>
            </button>
            <button
              onClick={() => setViewMode("marquee")}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors ${
                viewMode === "marquee"
                  ? "bg-white text-gray-950 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              aria-label="Animated Marquee View"
            >
              <MoveHorizontal className="w-3.5 h-3.5 text-brand-red" />
              <span>Marquee View</span>
            </button>
          </div>
        </div>

        {/* View Mode: Filterable Interactive Grid */}
        {viewMode === "grid" ? (
          <div>
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {filterTabs.map((tab) => {
                const isActive = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFilter(tab.id)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-150 border ${
                      isActive
                        ? "bg-brand-red text-white border-brand-red shadow-sm"
                        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100 hover:text-gray-950"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span className={`ml-2 px-1.5 py-0.5 rounded text-[10px] ${isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"}`}>
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Grid of Clients */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {filteredClients.map((client) => renderClientCard(client, false))}
            </div>
          </div>
        ) : (
          /* View Mode: Dual-Row Marquee */
          <div className="space-y-6 overflow-hidden py-4 marquee-container">
            <div className="flex w-fit marquee-track animate-marquee-left">
              {[...row1, ...row1, ...row1].map((client, idx) => (
                <div key={`row1-${client.id}-${idx}`}>
                  {renderClientCard(client, true)}
                </div>
              ))}
            </div>
            <div className="flex w-fit marquee-track animate-marquee-right">
              {[...row2, ...row2, ...row2].map((client, idx) => (
                <div key={`row2-${client.id}-${idx}`}>
                  {renderClientCard(client, true)}
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-gray-500 pt-4">
              Hover over any institution logo to pause the scroll.
            </p>
          </div>
        )}

        {/* Verification Callout Bar */}
        <div className="mt-12 p-6 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-red-50 text-brand-red shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">
                Institutional Reference &amp; Tender Documentation
              </p>
              <p className="text-xs text-gray-500">
                Official delivery challans, compliance certificates, and reference contacts available on inquiry.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg bg-gray-900 hover:bg-brand-red text-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-sm"
          >
            Inquire for Your Office
          </a>
        </div>
      </div>
    </section>
  );
}
