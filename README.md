# MS Multi Solution — Production Website

A static, high-performance company website built for **MS Multi Solution** (Islamabad, Pakistan), showcasing general order supplies and IT infrastructure solutions.

---

## Brand Identity & Palette

Derived directly from the official MS Multi Solution emblem:
- **Brand Signature Red:** `#E5252A`
- **Brand Deep Dark (Obsidian):** `#090A0C`
- **Elevated Surface:** `#111317`
- **Hairline Borders:** `rgba(255, 255, 255, 0.08)`
- **Body Text:** `#F5F6F8` / Muted: `#8E95A5`

---

## Quick Start & Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build static production bundle
npm run build
```

The application uses Next.js static export (`output: 'export'`). It requires **no database, no API routes, and zero server-side runtime**.

---

## Zero-Configuration Deployment to Vercel

1. Push this repository to GitHub or GitLab.
2. In your Vercel Dashboard, click **Add New Project** and select this repository.
3. Keep default settings:
   - **Framework Preset:** Next.js
   - **Build Command:** `next build`
   - **Output Directory:** `out`
4. Click **Deploy**. Vercel will build and serve the static assets globally on their Edge Network with zero configuration.

---

## How to Edit Site Content & Contact Information

All company contact details, address, telephone, email, WhatsApp link, and working hours live in **one single file**:

📁 [`src/data/site.ts`](file:///c:/Users/Muddasir%20Haider%20Khan/Projects/MULTI-SOLUTIONS/src/data/site.ts)

Open that file and replace the placeholders:
- `TODO_PHONE`: Your official landline or office mobile number (e.g. `+92 51 1234567`)
- `TODO_EMAIL`: Your official inquiry email (e.g. `info@msmultisolution.com`)
- `TODO_WHATSAPP`: Your WhatsApp mobile number (e.g. `+923001234567`)
- `TODO_ADDRESS`: Your physical office location in Islamabad
- `TODO_WORKING_HOURS`: Your operating hours (e.g. `Monday - Saturday: 9:00 AM - 6:00 PM`)

Updating this single file automatically updates the Navbar, Hero, Contact Section, Quotation Composer, Footer, and Schema.org metadata.

---

## How to Update Client Showcase

The institutional showcase is configured in:

📁 [`src/data/clients.ts`](file:///c:/Users/Muddasir%20Haider%20Khan/Projects/MULTI-SOLUTIONS/src/data/clients.ts)

To add or update an institution:
1. Save the new logo image into `/public/clients/`.
2. Add the institution details to the `clients` array in `src/data/clients.ts`.

---

## Asset Directory Structure

- `logo.png`: 4K reconstructed transparent master logo (`3840 x 1920`)
- `public/logo.png`: 4K transparent PNG logo
- `public/logo.svg`: Faithful vector SVG reconstruction
- `public/favicon.png`: Brand monogram favicon
- `public/og-image.png`: High-resolution Open Graph card (`1200 x 630`)
- `public/clients/`: Verified client institutional logos and SVG monograms
