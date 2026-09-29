"use client";

import Image from "next/image";
import { siteConfig } from "@/data/site";
import { ArrowUp, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-100 border-t border-gray-200 text-gray-600 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-200">
          {/* Company Brand Lockup & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="relative w-64 h-16">
              <Image
                src="/logo.png"
                alt="MS Multi Solution"
                fill
                className="object-contain object-left"
                sizes="256px"
              />
            </div>
            <p className="font-bold text-sm text-brand-red uppercase tracking-wide">
              {siteConfig.subTagline}
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-sm">
              Supplying government departments, financial bodies, medical centers, and corporate desks across Islamabad with dependable consumables, computing hardware, networking, and surveillance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-gray-900 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#clients" className="hover:text-brand-red transition-colors">
                  Institutions We Have Worked With
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-red transition-colors">
                  Supplies &amp; IT Capabilities
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-red transition-colors">
                  About Our Team
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-brand-red transition-colors">
                  The MS Advantage
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-brand-red transition-colors">
                  How We Work
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-red transition-colors">
                  Request Quotation
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Procurement Desk */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-sm text-gray-900 uppercase tracking-wider">
              Islamabad Procurement Desk
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-red shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-brand-red font-semibold text-gray-800 transition-colors">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-brand-red font-semibold text-gray-800 transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {siteConfig.contact.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 font-bold hover:text-brand-red transition-colors"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-brand-red" />
          </button>
        </div>
      </div>
    </footer>
  );
}
