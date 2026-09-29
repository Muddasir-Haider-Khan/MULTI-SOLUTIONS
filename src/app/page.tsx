import Hero from "@/sections/Hero";
import ClientsShowcase from "@/sections/ClientsShowcase";
import About from "@/sections/About";
import Services from "@/sections/Services";
import WhyUs from "@/sections/WhyUs";
import Process from "@/sections/Process";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Institutional Projects & Clients (Showcased First as requested) */}
      <ClientsShowcase />

      {/* 3. About the Team */}
      <About />

      {/* 4. Business Solutions & Services */}
      <Services />

      {/* 5. The Small Team Advantage */}
      <WhyUs />

      {/* 6. Four-Step Operational Process */}
      <Process />

      {/* 7. Procurement Desk & Quotation Contact */}
      <Contact />
    </>
  );
}
