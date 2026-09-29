---
name: seo-and-performance
description: High-performance static web architectures, Core Web Vitals optimization, next/font, metadata, Open Graph, JSON-LD structured data, and Lighthouse 95+ compliance.
---

# SEO & Web Performance Engineering

Deliver lightning-fast, zero-overhead static web experiences with elite Core Web Vitals (LCP < 1.2s, CLS 0, FID/INP < 50ms) and comprehensive search engine indexability.

## Core Rules

1. **Static Architecture & Asset Delivery**
   - Zero runtime fetching or hydration blocking.
   - Optimize fonts using `next/font/google` with `display: 'swap'` and `subsets: ['latin']`. Preconnect font origins.
   - Serve modern image formats (`WebP`, `AVIF`, or SVG) with explicit `width`, `height`, and `sizes` attributes to prevent Cumulative Layout Shift (CLS).

2. **Metadata & Structured Data (JSON-LD)**
   - Complete Open Graph and Twitter Card metadata tags (title, description, image, url, type).
   - Valid schema.org `LocalBusiness` / `ProfessionalService` JSON-LD markup detailing company name, address, contact points, priceRange, openingHours, and service catalogue.
   - Clean static `sitemap.xml` and `robots.txt` generation.

3. **Bundle Optimization & Hydration Hygiene**
   - Eliminate unnecessary external dependencies.
   - Tree-shake icons and motion libraries; dynamically import non-critical client-only widgets (e.g. desktop magnetic cursor) with `ssr: false`.
   - Keep JavaScript footprint minimal for fast initial execution.

4. **Lighthouse Audit Targets**
   - Performance: 90+
   - Accessibility: 95+
   - Best Practices: 95+
   - SEO: 100
