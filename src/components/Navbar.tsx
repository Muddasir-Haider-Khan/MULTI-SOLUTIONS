"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Menu, X, ArrowRight, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Clients", href: "#clients" },
    { label: "About Us", href: "#about" },
    { label: "Services & Supplies", href: "#services" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Our Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200 py-3"
          : "bg-white border-b border-gray-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="#"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded"
            aria-label="MS Multi Solution Home"
          >
            <div className="relative w-44 sm:w-56 h-12">
              <Image
                src="/logo.png"
                alt="MS Multi Solution"
                fill
                priority
                loading="eager"
                className="object-contain object-left"
                sizes="(max-width: 640px) 176px, 224px"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 text-sm font-semibold text-gray-700 hover:text-brand-red transition-colors duration-150 rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Call & Quote Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-brand-red transition-colors"
              title="Call for direct inquiries"
            >
              <Phone className="w-4 h-4 text-brand-red" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded font-bold text-xs uppercase tracking-wider bg-brand-red text-white hover:bg-brand-red-hover transition-colors shadow-sm"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#contact"
              className="px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider bg-brand-red text-white sm:hidden"
            >
              Quote
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-6 shadow-xl">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-gray-800 hover:text-brand-red py-2 border-b border-gray-100"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="w-full text-center py-2.5 rounded text-sm font-semibold border border-gray-300 text-gray-800"
              >
                Call: {siteConfig.contact.phoneDisplay}
              </a>
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded text-sm font-semibold bg-green-600 text-white"
              >
                Chat on WhatsApp
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded text-sm font-bold uppercase tracking-wider bg-brand-red text-white"
              >
                Request Quotation
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
