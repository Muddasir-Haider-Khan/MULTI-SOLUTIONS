"use client";

import { siteConfig } from "@/data/site";
import { Users, Coins, Layers, Clock, ShieldCheck } from "lucide-react";

export default function WhyUs() {
  const getIcon = (number: string) => {
    switch (number) {
      case "01":
        return <Users className="w-6 h-6 text-brand-red" />;
      case "02":
        return <Coins className="w-6 h-6 text-brand-red" />;
      case "03":
        return <Layers className="w-6 h-6 text-brand-red" />;
      case "04":
        return <Clock className="w-6 h-6 text-brand-red" />;
      default:
        return <Users className="w-6 h-6 text-brand-red" />;
    }
  };

  return (
    <section id="why-us" className="py-20 md:py-28 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-brand-red uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The MS Multi Solution Difference</span>
          </div>
          <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-gray-950 tracking-tight">
            Why Institutions Continue Working With Us
          </h2>
          <p className="mt-3 text-base text-gray-600 leading-relaxed">
            Four practical reasons government departments, medical facilities, and companies in Islamabad trust MS Multi Solution for their procurement.
          </p>
        </div>

        {/* 4 Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.values.map((item) => (
            <div
              key={item.number}
              className="bg-gray-50 rounded-2xl border-2 border-gray-200/80 p-8 hover:border-brand-red hover:bg-white hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-sm group-hover:bg-red-50 group-hover:border-red-200 transition-colors">
                    {getIcon(item.number)}
                  </div>
                  <span className="font-serif font-black text-xl text-gray-400 group-hover:text-brand-red transition-colors">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl sm:text-2xl text-gray-900 mb-3 group-hover:text-gray-950 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-200/70 flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-wider">
                <span>Verified Standard</span>
                <span className="text-brand-red font-serif font-bold">MS Quality</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
