"use client";

import { siteConfig } from "@/data/site";
import { MessageSquare, FileText, Truck, Wrench, ArrowRight } from "lucide-react";

export default function Process() {
  const getStepIcon = (step: string) => {
    switch (step) {
      case "01":
        return <MessageSquare className="w-6 h-6 text-brand-red" />;
      case "02":
        return <FileText className="w-6 h-6 text-brand-red" />;
      case "03":
        return <Truck className="w-6 h-6 text-brand-red" />;
      case "04":
        return <Wrench className="w-6 h-6 text-brand-red" />;
      default:
        return <MessageSquare className="w-6 h-6 text-brand-red" />;
    }
  };

  return (
    <section id="process" className="py-20 md:py-28 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
              Four-Stage Delivery Cycle
            </span>
          </div>
          <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-gray-950 tracking-tight">
            How We Fulfill Your Requirements
          </h2>
          <p className="mt-3 text-base text-gray-600 leading-relaxed">
            From your initial item list to verified on-site delivery and subsequent refill schedules. A direct four-stage procedure.
          </p>
        </div>

        {/* 4 Process Steps Grid with Connecting Track */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.process.map((step) => (
              <div
                key={step.step}
                className="bg-white p-8 rounded-2xl border-2 border-gray-200/90 shadow-card hover:shadow-card-hover hover:border-brand-red transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif font-black text-2xl text-brand-red">
                      {step.step}
                    </span>
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-100 group-hover:bg-brand-red group-hover:text-white transition-colors">
                      <div className="group-hover:text-white transition-colors">
                        {getStepIcon(step.step)}
                      </div>
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-gray-900 mb-2 group-hover:text-gray-950 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-brand-red transition-colors">
                  <span>Stage {step.step} of 04</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
