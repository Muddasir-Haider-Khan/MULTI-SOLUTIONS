"use client";

import { siteConfig } from "@/data/site";
import { ArrowRight, Check, X, Building2, Users2, ShieldAlert, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-brand-red uppercase tracking-wider mb-3">
            <Users2 className="w-3.5 h-3.5" />
            <span>Dedicated Procurement Team</span>
          </div>
          <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-gray-950 tracking-tight">
            Direct Communication. Honest Wholesale Pricing. Dependable Delivery.
          </h2>
          <p className="mt-3 text-base text-gray-600 leading-relaxed">
            Based in Islamabad, MS Multi Solution supplies administrative departments, educational institutions, healthcare centers, and corporate offices with everyday operational reliability.
          </p>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Direct Manifesto */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-gray-900 leading-snug">
              When you work with us, you speak directly with the team handling your delivery. No call centers, no sales delays.
            </h3>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Many procurement departments face the same common challenges: delayed shipments, wrong cartridge models, poor cable ducting, and vendors who disappear once an invoice is cleared.
            </p>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              MS Multi Solution operates on a straightforward principle. We maintain close working ties with major wholesale distributors in Rawalpindi and Islamabad to provide genuine products at competitive prices. Every stationery batch, toner cartridge, and computer component is checked before dispatch.
            </p>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              For networking and CCTV projects, our own technicians perform the cabling, termination, and system testing on site to ensure durable institutional standards.
            </p>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-red hover:text-brand-red-hover"
              >
                <span>Discuss Your Department&apos;s Supplies</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Comparison Matrix (High Impact Visual Contrast) */}
          <div className="lg:col-span-6 bg-gray-50 rounded-2xl border-2 border-gray-200 p-6 sm:p-8 shadow-card">
            <h4 className="font-serif font-bold text-xl text-gray-900 pb-4 border-b border-gray-200 mb-6">
              Why Institutions Switch to MS Multi Solution
            </h4>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-green-50 text-green-700 shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-gray-900 text-sm block">Direct Access to Decision Makers</strong>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    One phone call reaches the people who package and deliver your order. No layers of account managers.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-green-50 text-green-700 shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-gray-900 text-sm block">Wholesale Pricing Without Layered Margins</strong>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Direct sourcing from premier paper mills and hardware importers in the twin cities keeps your budget efficient.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-green-50 text-green-700 shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-gray-900 text-sm block">Single Point of Supply for All Categories</strong>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Consolidate stationery reams, computer accessories, laser cartridges, and security cameras under a single invoice.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-green-50 text-green-700 shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-gray-900 text-sm block">Local Islamabad Stock Readiness</strong>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Quick dispatch for emergency toner replenishments or urgent stationery requirements across all sectors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
