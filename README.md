# 🏠 Kodi Ya Kweli (Real Rent Prices & Tenant Toolkit for Kenya)

[![Next.js 14](https://img.shields.io/badge/Next.js-14_App_Router-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Kodi Ya Kweli** (*Swahili for "Real Rent"*) is an open-source civic technology platform engineered to bring radical pricing transparency to Nairobi's residential rental market and empower urban tenants with self-help legal defense tools.

An open-source civic technology initiative built by **[Ian Ochieng](https://github.com/IanOchiengAI)**.

---

## 🎯 The Ground Reality & Civic Pivot

In Nairobi, asking prices on property aggregators (BuyRentKenya, Property24) exceed actual transacted rents by **8% to 22%**, while utility markups (token resale up to KSh 40/kWh, borehole salinity, and water rationing bowsers) and unreturned deposits systematically distort true living costs.

Following an extensive market and statutory audit in September 2026, the project **pivoted away from an unmoderated review board** to mitigate fatal legal risks:
1. **Section 22 of the Computer Misuse & Cybercrimes Act 2018** (criminal defamation fines up to KSh 5M).
2. **KRA 7.5% Monthly Rental Income (MRI) Tax Paranoia** (avoiding landlord hostility from building-level whistleblower exposure).

### Core Solution Architecture:
1. **Programmatic Estate Cost-of-Living Index:** Objective, neighborhood-level baseline aggregates (Kilimani, Westlands, Roysambu, Ruaka, Ongata Rongai, Kasarani, South B/C, Juja, Waiyaki Way, Fedha/Embakasi, Lower Kabete) tracking transacted rent bands, sub-meter token resale markups, water rationing schedules, and upfront deposit capital.
2. **Zero-Server Privacy Tenant Defense Toolkit:**
   - **Deposit Demand Letter Generator:** Formatted under the Law of Contract Act (Cap 23) and Small Claims Court Act (Cap 10A) with statutory 14-day pre-action deadlines.
   - **Total Cost of Tenancy (TCT) Calculator:** Real out-of-pocket housing expenditure simulator factoring in sub-meter markups and transit.
   - **Move-In / Move-Out Inspection Audit Schedule:** 28-point photographic condition audit to legally defeat bogus "repainting" deductions.

---

## 🛡️ Privacy & Compliance Architecture

- **Zero Server Data Storage:** All letter generation, calculation, and document formatting runs 100% in client-side browser RAM via `@react-pdf/renderer`.
- **Content Security Policy:** Enforces `connect-src 'none'` and `form-action 'none'` on all toolkit routes.
- **Full Compliance:** Operates in strict adherence to the **Kenya Data Protection Act 2019** (ODPC).

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS v3 + Lucide React Icons
- **PDF Engine:** `@react-pdf/renderer` (Client-side A4 generation)
- **Validation:** Zod schemas
- **Deployment:** Vercel

---

## 🚀 Getting Started Locally

```bash
# Clone the repository
git clone https://github.com/IanOchiengAI/kodi-ya-kweli.git
cd kodi-ya-kweli

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📂 Project Structure

```
├── src/
│   ├── app/
│   │   ├── estates/                  # Programmatic estate pages & directory
│   │   │   ├── [slug]/page.tsx       # SSG dynamic estate detail (generateStaticParams)
│   │   │   └── page.tsx              # Filterable estate index
│   │   ├── toolkit/                  # Privacy-preserving legal toolkit
│   │   │   ├── deposit-demand/       # Demand notice generator
│   │   │   ├── fair-rent-calculator/ # TCT simulator
│   │   │   └── inspection-checklist/ # Move-in condition audit
│   │   ├── layout.tsx                # Root layout with Kenya theme
│   │   ├── page.tsx                  # Civic landing page
│   │   ├── robots.ts                 # Dynamic robots.txt
│   │   └── sitemap.ts                # Programmatic XML sitemap
│   ├── components/                   # Modular UI & feature components
│   ├── data/
│   │   ├── estates.ts                # Research-audited Nairobi estate datasets
│   │   ├── inspectionItems.ts        # 28-point inspection schedule
│   │   └── legalTemplates.ts         # Kenyan statutory clauses & demand text
│   ├── lib/
│   │   ├── pdf.tsx                   # @react-pdf/renderer document component
│   │   ├── schemas.ts                # Zod schemas
│   │   └── utils.ts                  # Currency & date formatters
│   └── types/                        # TypeScript domain definitions
```

---

## ⚖️ Legal Disclaimer

Kodi Ya Kweli is an educational civic technology initiative. Rent benchmarks are statistical macro estimates and do not reference specific landlords or private properties. Toolkit outputs do not constitute formal legal representation. For complex litigation, consult an advocate of the High Court of Kenya.

---

## 📄 License

MIT License © 2026 Ian Ochieng.
