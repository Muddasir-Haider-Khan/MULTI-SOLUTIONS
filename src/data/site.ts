export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface ValueItem {
  number: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  subTagline: string;
  description: string;
  city: string;
  country: string;
  meta: {
    title: string;
    description: string;
    siteUrl: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    email: string;
    whatsappNumber: string;
    whatsappLink: string;
    address: string;
    city: string;
    workingHours: string;
    mapQuery: string;
    mapEmbedUrl: string;
  };
  services: ServiceItem[];
  values: ValueItem[];
  process: ProcessStep[];
}

export const siteConfig: SiteConfig = {
  name: "MS Multi Solution",
  legalName: "MS Multi Solution (Pvt.)",
  tagline: "Guarantor of Your Hopes",
  subTagline: "We Deals in all Kinds of Multi Business Solutions",
  description:
    "A dedicated Islamabad-based team delivering dependable office supplies, institutional computers, printing hardware, structured networking, CCTV surveillance, and server infrastructure at competitive rates.",
  city: "Islamabad",
  country: "Pakistan",
  meta: {
    title: "MS Multi Solution | Institutional Supplies & IT Infrastructure Islamabad",
    description:
      "Reliable institutional procurement and IT hardware delivery across Islamabad. General order supplies, computers, printers, networking, CCTV, and servers.",
    siteUrl: "https://msmultisolution.com",
  },
  contact: {
    phone: "TODO_PHONE", // Replace with your official phone number (e.g. "+92 51 1234567")
    phoneDisplay: "TODO_PHONE", // Display version for UI
    email: "TODO_EMAIL", // Replace with your official email (e.g. "info@msmultisolution.com")
    whatsappNumber: "TODO_WHATSAPP", // Replace with WhatsApp number (e.g. "+92 300 1234567")
    whatsappLink: "https://wa.me/TODO_WHATSAPP?text=Hello%20MS%20Multi%20Solution%2C%20I%20would%20like%20to%20request%20a%20quotation.",
    address: "TODO_ADDRESS, Islamabad, Pakistan", // Replace with your exact office/shop address
    city: "Islamabad",
    workingHours: "TODO_WORKING_HOURS", // e.g. "Monday to Saturday: 9:00 AM – 6:00 PM"
    mapQuery: "Islamabad, Pakistan",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Islamabad,%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  services: [
    {
      id: "general-order-supplies",
      number: "01",
      title: "General Order Supplies",
      tagline: "Consumables & Institutional Stationery",
      description:
        "Daily operational supplies for public and private institutions. We supply legal, A4, and bond paper reams, office filing sets, pens, register books, envelopes, desk accessories, and consumable pantry inventory with dependable batch delivery.",
      deliverables: [
        "A4, Legal, and 80gsm imported photocopying paper",
        "Files, lever-arch folders, binders, and registry books",
        "Writing instruments, highlighters, and desk utility kits",
        "Envelopes, packaging boxes, and office consumables",
      ],
    },
    {
      id: "computers-and-laptops",
      number: "02",
      title: "Computers & Laptops",
      tagline: "Commercial Hardware & Workstations",
      description:
        "Reliable workstation PCs and business laptops configured for administrative desks, accounts departments, and field personnel. Tested hardware delivered ready for deployment with manufacturer warranty support.",
      deliverables: [
        "Commercial tower and compact desktop PCs",
        "Business laptops with long battery lifecycle",
        "FHD monitors, keyboards, mice, and peripherals",
        "Hardware upgrades, SSD expansions, and RAM modules",
      ],
    },
    {
      id: "printers-and-toners",
      number: "03",
      title: "Printers, Copiers & Toners",
      tagline: "Document Hardware & Consumables",
      description:
        "High-duty laser printers, multifunction photocopiers, and continuous toner replenishment. We keep administrative printing running with genuine cartridges, compatible cost-effective units, and rapid replacements.",
      deliverables: [
        "Monochrome and colour heavy-duty laser printers",
        "Multifunction photocopiers (print, scan, copy)",
        "Original and verified high-yield laser toner cartridges",
        "Drum unit replacements and routine hardware upkeep",
      ],
    },
    {
      id: "structured-networking",
      number: "04",
      title: "Structured Cabling & Networking",
      tagline: "Local Area Infrastructure & Wi-Fi",
      description:
        "Neat, certified network installations for corporate floors and educational buildings. Structured Cat6 cabling, patch panels, managed switches, and commercial Wi-Fi access points configured for stable internal connectivity.",
      deliverables: [
        "Cat6/Cat6A structured Ethernet cabling and conduit ducting",
        "Patch panel punch-down, labeling, and port certification",
        "Managed and unmanaged Gigabit Ethernet switches",
        "Enterprise dual-band Wi-Fi access points and routers",
      ],
    },
    {
      id: "cctv-surveillance",
      number: "05",
      title: "CCTV Surveillance Systems",
      tagline: "Facility Security & Continuous Recording",
      description:
        "Complete surveillance setups from layout planning to camera installation. High-resolution indoor and weather-resistant outdoor IP cameras, central NVR recording racks, and secure remote viewing for facility administrators.",
      deliverables: [
        "High-definition IP dome and bullet security cameras",
        "Central NVRs with surveillance-grade continuous storage",
        "Concealed coaxial and Cat6 power-over-ethernet wiring",
        "Control room monitor configuration and remote viewing setup",
      ],
    },
    {
      id: "servers-and-it-infrastructure",
      number: "06",
      title: "Servers & IT Infrastructure",
      tagline: "Centralized Data Racks & Power Integration",
      description:
        "Entry-level and mid-range rack and tower servers for on-premises databases, file sharing, and backup management. Complete with equipment racks, PDU wiring, and UPS battery backup integration.",
      deliverables: [
        "Rackmount and standalone business servers",
        "Enclosed server cabinets, ventilation, and cable managers",
        "Online institutional UPS systems and power protection",
        "Hardware deployment and storage array setup",
      ],
    },
  ],
  values: [
    {
      number: "01",
      title: "Small Team, Direct Access",
      description:
        "You speak directly with the people managing your order. No bureaucratic handoffs, no call centres, and no vague assurances. A single telephone call gets your questions answered.",
    },
    {
      number: "02",
      title: "Honest, Competitive Pricing",
      description:
        "We maintain low overheads and work closely with wholesale distributors in Islamabad and Rawalpindi. Our quotations reflect fair market prices without inflated margins or hidden line items.",
    },
    {
      number: "03",
      title: "Single Source of Accountability",
      description:
        "Instead of coordinating separate vendors for stationery, computer repairs, network drops, and surveillance cameras, institutions work with one dependable team that delivers all of them.",
    },
    {
      number: "04",
      title: "Dependable Delivery Commitments",
      description:
        "When we confirm a delivery date, we stick to it. Every package is checked before dispatch, and on-site installations are completed cleanly without leaving work half-finished.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Inquiry & List Review",
      description:
        "Send us your stationery list, IT specifications, or site requirements via WhatsApp, phone, or email. We review stock availability and technical requirements.",
    },
    {
      step: "02",
      title: "Transparent Quotation",
      description:
        "We issue a clean, itemized quotation with competitive unit rates and realistic delivery timelines tailored to your institutional procurement requirements.",
    },
    {
      step: "03",
      title: "Delivery & Installation",
      description:
        "Supplies are delivered directly to your administrative desk or storeroom. Hardware, networking, and CCTV equipment are installed, tested, and demonstrated on site.",
    },
    {
      step: "04",
      title: "Ongoing Support & Refills",
      description:
        "We remain available for routine consumable refills, warranty facilitation, and maintenance requests with immediate phone and WhatsApp support.",
    },
  ],
};
