"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";
import { Phone, Mail, MessageSquare, MapPin, Clock, Send, CheckSquare, Plus, ArrowRight, UserCheck, ExternalLink } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    organization: "",
    contactPerson: "",
    phone: "",
    category: siteConfig.services[0].title,
    details: "",
  });

  const quickItems = [
    "A4 Paper (80gsm / 75gsm)",
    "Legal Size Bond Paper",
    "Laser Toner Cartridges",
    "Office Stationery & Files",
    "Commercial Desktop PCs",
    "Business Laptops",
    "Cat6 Structured Cabling",
    "Gigabit Switches & Wi-Fi",
    "CCTV Security Cameras (IP)",
    "Central NVR Storage",
    "Server Rack & UPS Integration",
  ];

  const toggleQuickItem = (item: string) => {
    setFormData((prev) => {
      const current = prev.details;
      if (current.includes(item)) {
        // Remove item
        const updated = current
          .split("\n")
          .filter((line) => !line.includes(item))
          .join("\n");
        return { ...prev, details: updated };
      } else {
        // Append item
        const updated = current ? `${current}\n- ${item}` : `- ${item}`;
        return { ...prev, details: updated };
      }
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = () => {
    const text = `*New Procurement Inquiry - MS Multi Solution*
*Organization:* ${formData.organization || "Not Specified"}
*Contact Person:* ${formData.contactPerson || "Not Specified"}
*Phone:* ${formData.phone || "Not Specified"}
*Category:* ${formData.category}
*Requirements:*
${formData.details || "No specific details provided yet."}`;
    return encodeURIComponent(text);
  };

  const generateMailtoLink = () => {
    const subject = encodeURIComponent(`Quotation Request: ${formData.organization || "New Inquiry"}`);
    const body = encodeURIComponent(`Organization: ${formData.organization}
Contact Person: ${formData.contactPerson}
Phone: ${formData.phone}
Category: ${formData.category}

Requirements Details:
${formData.details}`);
    return `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waUrl = `https://wa.me/${siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, "")}?text=${generateWhatsAppMessage()}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
              Official Inquiries Desk
            </span>
          </div>
          <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-gray-950 tracking-tight">
            Request an Itemized Quotation
          </h2>
          <p className="mt-3 text-base text-gray-600 leading-relaxed">
            Contact our Islamabad procurement desk directly. Select common items below or type your specifications to generate a formatted quotation request ready to dispatch via WhatsApp or Email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Directory & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-card space-y-6">
              <h3 className="font-serif font-bold text-xl text-gray-900 pb-3 border-b border-gray-100">
                Official Directory
              </h3>

              <div className="space-y-5">
                {/* Proprietor & Leadership */}
                <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
                  <div className="p-3 rounded-xl bg-red-50 text-brand-red shrink-0 mt-0.5 border border-red-100">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
                        Proprietor &amp; Owner
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-red-100 text-brand-red px-2 py-0.5 rounded">
                        Direct Access
                      </span>
                    </div>
                    <p className="text-base font-bold text-gray-900 mt-0.5">
                      {siteConfig.owner.name}
                    </p>
                    <a
                      href={`tel:${siteConfig.owner.phoneTel}`}
                      className="text-xs font-semibold text-brand-red hover:underline block mt-0.5"
                    >
                      Call Direct: {siteConfig.owner.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-red-50 text-brand-red shrink-0 mt-0.5 border border-red-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-base font-bold text-gray-900 hover:text-brand-red transition-colors"
                      id="contact-phone-link"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Physical Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-red-50 text-brand-red shrink-0 mt-0.5 border border-red-100">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
                      Office Location
                    </span>
                    <p className="text-sm font-semibold text-gray-800 leading-relaxed">
                      {siteConfig.contact.address}
                    </p>
                    <a
                      href={siteConfig.contact.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1 text-xs font-bold text-brand-red hover:underline"
                      id="contact-map-link"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-red-50 text-brand-red shrink-0 mt-0.5 border border-red-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
                      Email Inquiries
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-base font-bold text-gray-900 hover:text-brand-red transition-colors"
                      id="contact-email-link"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-green-50 text-green-700 shrink-0 mt-0.5 border border-green-100">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
                      WhatsApp Quick Response
                    </span>
                    <a
                      href={siteConfig.contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-green-700 hover:underline inline-flex items-center gap-1.5"
                      id="contact-whatsapp-link"
                    >
                      <span>Direct WhatsApp Message</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-red-50 text-brand-red shrink-0 mt-0.5 border border-red-100">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
                      Hours of Operation
                    </span>
                    <p className="text-sm font-semibold text-gray-800 leading-relaxed">
                      {siteConfig.contact.workingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map with Direct Location Link */}
            <div className="rounded-2xl overflow-hidden border-2 border-gray-200 relative shadow-card bg-white">
              <iframe
                title="MS Multi Solution Location Map - Walli Center Blue Area Islamabad"
                src={siteConfig.contact.mapEmbedUrl}
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="p-3.5 bg-gray-50 border-t border-gray-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 truncate pr-2">
                  <MapPin className="w-4 h-4 text-brand-red shrink-0" />
                  <span className="font-semibold text-gray-800 truncate">
                    Office #1, Walli Center, Blue Area, Islamabad
                  </span>
                </div>
                <a
                  href={siteConfig.contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-brand-red hover:underline shrink-0"
                  id="map-external-link"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quotation Form with Quick Click Checklist */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border-2 border-gray-200 shadow-card">
            <div className="mb-6 pb-4 border-b border-gray-100">
              <h3 className="font-serif font-bold text-2xl text-gray-900">
                Interactive Quotation Builder
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Click any of the frequent procurement items below to instantly add them to your request.
              </p>
            </div>

            {/* Quick Click Checklist Items */}
            <div className="mb-6">
              <span className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2.5">
                Quick Select Items:
              </span>
              <div className="flex flex-wrap gap-2">
                {quickItems.map((item) => {
                  const isSelected = formData.details.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleQuickItem(item)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-150 border ${
                        isSelected
                          ? "bg-red-50 border-brand-red text-brand-red shadow-xs"
                          : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 hover:border-gray-300"
                      }`}
                    >
                      {isSelected ? (
                        <CheckSquare className="w-3.5 h-3.5 text-brand-red" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 text-gray-400" />
                      )}
                      <span>{item}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="organization" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Organization / Ministry / Company *
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    value={formData.organization}
                    onChange={handleInputChange}
                    placeholder="e.g. Ministry / Hospital / Bank"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:bg-white focus:border-brand-red focus:ring-1 focus:ring-brand-red focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contactPerson" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Contact Person Name
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:bg-white focus:border-brand-red focus:ring-1 focus:ring-brand-red focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Phone / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="03XX-XXXXXXX"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:bg-white focus:border-brand-red focus:ring-1 focus:ring-brand-red focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Primary Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:bg-white focus:border-brand-red focus:ring-1 focus:ring-brand-red focus:outline-none transition-colors"
                  >
                    {siteConfig.services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Multiple Categories / Full Office Setup">
                      Multiple Categories / Full Setup
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="details" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Itemized Specifications &amp; Quantities *
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={5}
                  required
                  value={formData.details}
                  onChange={handleInputChange}
                  placeholder="Items selected above or custom requirements (e.g. 50 reams A4 paper, 4 HP laser toners, 6 Dell desktop PCs)..."
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:bg-white focus:border-brand-red focus:ring-1 focus:ring-brand-red focus:outline-none transition-colors resize-none font-sans"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg text-xs font-bold uppercase tracking-wider bg-brand-red text-white hover:bg-brand-red-hover transition-all duration-200 shadow-red-button active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>

                <a
                  href={generateMailtoLink()}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg text-xs font-bold uppercase tracking-wider bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 hover:border-gray-400 transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4 text-brand-red" />
                  <span>Send via Email</span>
                </a>
              </div>

              <p className="text-[11px] text-gray-500 text-center">
                Clicking either button will open your WhatsApp or Email application with the itemized requisition pre-formatted.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
