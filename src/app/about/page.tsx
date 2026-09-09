import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Scale, ShieldCheck, AlertOctagon, FileText, CheckCircle2, Github, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Kodi Ya Kweli — Methodology, Civic Mission & Legal Framework',
  description:
    'The research rationale, statutory frameworks (Cap 23, Cap 10A, Cybercrimes Act, Data Protection Act), and methodology behind Kodi Ya Kweli.',
};

export default function AboutPage() {
  return (
    <div className='max-w-4xl mx-auto px-4 py-12 space-y-12'>
      {/* Hero Header */}
      <div className='border-b border-gray-200 pb-8 space-y-3'>
        <div className='inline-flex items-center gap-2 bg-emerald-100/80 text-emerald-900 px-3 py-1 rounded-full text-xs font-semibold'>
          <Scale className='w-4 h-4 text-brand-green' />
          <span>Open-Source Civic Tech · Built by Ian Ochieng</span>
        </div>
        <h1 className='font-display font-extrabold text-3xl md:text-5xl text-gray-950 tracking-tight'>
          About Kodi Ya Kweli
        </h1>
        <p className='text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl'>
          Kodi Ya Kweli (Real Rent Prices & Tenant Toolkit) is an open-source civic technology platform
          engineered to resolve structural information asymmetry and deposit forfeiture in urban Kenya.
        </p>
      </div>

      {/* The Origin & The Ground Reality Audit */}
      <section className='space-y-4'>
        <h2 className='font-display font-bold text-2xl text-gray-950'>
          The Pre-Build Due Diligence & Strategic Pivot
        </h2>
        <p className='text-xs md:text-sm text-gray-700 leading-relaxed'>
          The original concept for this project was an unmoderated crowd-sourced building review site (a “Glassdoor for Kenyan landlords”). In September 2026, we conducted an exhaustive legal and market audit before writing any code. The audit revealed two fatal statutory risks in that model:
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs'>
          <div className='p-4 bg-rose-50 border border-rose-200 rounded-xl space-y-2'>
            <div className='flex items-center gap-2 font-bold text-rose-900'>
              <AlertOctagon className='w-4 h-4 text-rose-700' />
              <span>Section 22 Cybercrimes Liability</span>
            </div>
            <p className='text-rose-800 leading-relaxed'>
              Section 22 of the Computer Misuse and Cybercrimes Act 2018 criminalizes the publication of false or defamatory electronic messages with penalties up to KSh 5,000,000 or 10 years imprisonment. Free-text building smear boards invite immediate retaliatory litigation against both platform operators and vulnerable tenants.
            </p>
          </div>

          <div className='p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-2'>
            <div className='flex items-center gap-2 font-bold text-amber-900'>
              <ShieldCheck className='w-4 h-4 text-amber-700' />
              <span>KRA 7.5% MRI Tax Flashpoint</span>
            </div>
            <p className='text-amber-900 leading-relaxed'>
              Under the Finance Act 2023, landlords face a 7.5% gross Monthly Rental Income (MRI) tax. Publicly publishing building-level transacted rents triggers intense landlord hostility, as it resembles an unauthorized tax surveillance beacon. This causes retaliatory tenant evictions and offline violence.
            </p>
          </div>
        </div>

        <p className='text-xs md:text-sm text-gray-700 leading-relaxed pt-2'>
          <strong>Our Pivot:</strong> We transformed Kodi Ya Kweli into an objective <strong>Macro Estate Cost-of-Living Index</strong> coupled with a <strong>Zero-Server Privacy Tenant Toolkit</strong>. We publish neighborhood-level baseline aggregates (Kilimani, Roysambu, Ruaka, etc.) without naming individual landlords, and empower tenants with formal legal instruments to recover deposits.
        </p>
      </section>

      {/* Statutory Architecture */}
      <section className='space-y-4'>
        <h2 className='font-display font-bold text-2xl text-gray-950'>
          Statutory Framework Governing Our Tools
        </h2>

        <div className='space-y-3 text-xs text-gray-700'>
          <div className='p-4 bg-white border border-gray-200 rounded-xl space-y-1.5 shadow-sm'>
            <h3 className='font-bold text-gray-900 text-sm'>
              1. Law of Contract Act (Cap 23, Laws of Kenya)
            </h3>
            <p className='leading-relaxed text-gray-600'>
              Security deposits paid under a tenancy agreement create a fiduciary holding obligation. A landlord has no lawful right to retain deposits beyond verifiable, contractor-invoiced damages caused directly by tenant breach.
            </p>
          </div>

          <div className='p-4 bg-white border border-gray-200 rounded-xl space-y-1.5 shadow-sm'>
            <h3 className='font-bold text-gray-900 text-sm'>
              2. Small Claims Court Act No. 2 of 2016 (Cap 10A)
            </h3>
            <p className='leading-relaxed text-gray-600'>
              Established to provide expeditious, inexpensive justice for claims under KSh 1,000,000. Our Demand Letter Generator produces the mandatory pre-action demand notice required to initiate a claim at the nearest Small Claims registry.
            </p>
          </div>

          <div className='p-4 bg-white border border-gray-200 rounded-xl space-y-1.5 shadow-sm'>
            <h3 className='font-bold text-gray-900 text-sm'>
              3. Data Protection Act 2019 (ODPC)
            </h3>
            <p className='leading-relaxed text-gray-600'>
              We enforce a strict Content Security Policy (CSP: <code>connect-src &apos;none&apos;</code>) on all toolkit pages. Your tenancy names, rent numbers, and landlord details are processed strictly in client-side RAM and are destroyed when you close the tab.
            </p>
          </div>
        </div>
      </section>

      {/* Open Source & Initiative Context */}
      <section className='bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 space-y-4 text-xs text-gray-700'>
        <h2 className='font-display font-bold text-xl text-gray-900'>
          Open Source Civic Technology
        </h2>
        <p className='leading-relaxed'>
          Kodi Ya Kweli is an open-source civic technology initiative built by <strong>Ian Ochieng</strong>, exploring high-leverage software solutions to ground-truth African infrastructure and housing transparency gaps.
        </p>
        <div className='pt-2 flex flex-wrap gap-4'>
          <a
            href='https://github.com/IanOchiengAI/kodi-ya-kweli'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950'
          >
            <Github className='w-4 h-4' />
            <span>View Source on GitHub (IanOchiengAI/kodi-ya-kweli)</span>
            <ExternalLink className='w-3 h-3' />
          </a>
        </div>
      </section>
    </div>
  );
}
