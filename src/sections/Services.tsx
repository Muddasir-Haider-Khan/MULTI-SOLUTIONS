"use client";

import { siteConfig } from "@/data/site";
import { ArrowRight, Check, Package, Monitor, Printer, Network, Camera, Server, Layers } from "lucide-react";

export default function Services() {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case "general-order-supplies":
        return <Package className="w-6 h-6 text-brand-red" />;
      case "computers-and-laptops":
        return <Monitor className="w-6 h-6 text-brand-red" />;
      case "printers-and-toners":
        return <Printer className="w-6 h-6 text-brand-red" />;
      case "structured-networking":
        return <Network className="w-6 h-6 text-brand-red" />;
      case "cctv-surveillance":
        return <Camera className="w-6 h-6 text-brand-red" />;
      case "servers-and-it-infrastructure":
        return <Server className="w-6 h-6 text-brand-red" />;
      default:
        return <Package className="w-6 h-6 text-brand-red" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-gray-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-brand-red uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Core Business Solutions</span>
            </div>
            <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-gray-950 tracking-tight">
              Supplies &amp; Technical Capabilities
            </h2>
            <p className="mt-3 text-base text-gray-600 max-w-2xl leading-relaxed">
              From daily paper consumables and genuine toners to computer workstations, structured cabling, CCTV surveillance, and server infrastructure.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider bg-brand-red text-white hover:bg-brand-red-hover transition-colors shadow-red-button shrink-0"
          >
            <span>Request Full Catalog Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 6 Rich Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border-2 border-gray-200/90 p-8 shadow-card hover:shadow-card-hover hover:border-brand-red transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-100 group-hover:bg-brand-red group-hover:text-white transition-colors duration-200">
                    <div className="group-hover:text-white text-brand-red transition-colors">
                      {getServiceIcon(service.id)}
                    </div>
                  </div>
                  <span className="font-serif font-black text-lg text-gray-400 group-hover:text-brand-red transition-colors">
                    {service.number}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl sm:text-2xl text-gray-900 mb-2 group-hover:text-gray-950 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs font-bold text-brand-red uppercase tracking-wider mb-4">
                  {service.tagline}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
                    Deliverables &amp; Inclusions:
                  </h4>
                  <ul className="space-y-2.5">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                        <Check className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-lg bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-brand-red text-xs font-bold text-gray-900 hover:text-brand-red uppercase tracking-wider transition-all duration-150"
                >
                  <span>Inquire for {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
