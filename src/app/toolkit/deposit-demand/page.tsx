import React from 'react';
import type { Metadata } from 'next';
import { DemandLetterForm } from '@/components/toolkit/DemandLetterForm';
import { Scale, ShieldCheck, AlertCircle, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kenyan Rent Deposit Recovery Demand Letter Generator',
  description:
    'Free self-service legal demand letter generator for Kenyan tenants. Cites Law of Contract Act Cap 23 and Small Claims Court pre-action procedure to recover withheld deposits.',
  openGraph: {
    title: 'Tenant Deposit Recovery Demand Letter Generator | Kodi Ya Kweli',
    description: 'Statutory 14-day demand letter generator citing Kenyan tenancy law.',
  },
};

export default function DepositDemandPage() {
  return (
    <div className='max-w-4xl mx-auto px-4 py-10 space-y-8'>
      {/* Top Breadcrumb & Heading */}
      <div className='text-center max-w-2xl mx-auto space-y-2'>
        <span className='text-xs font-bold text-brand-green uppercase tracking-wider'>
          Statutory Pre-Action Notice Tool
        </span>
        <h1 className='font-display font-extrabold text-3xl md:text-4xl text-gray-950'>
          Deposit Recovery Demand Letter Generator
        </h1>
        <p className='text-xs md:text-sm text-gray-600 leading-relaxed'>
          When landlords or property managers refuse to return security deposits after peaceful handover,
          a formal demand notice establishes legal default and is mandatory prior to filing a Small Claims Court claim.
        </p>
      </div>

      {/* Form Component */}
      <DemandLetterForm />

      {/* Legal Context FAQ */}
      <div className='bg-white border border-gray-200 rounded-xl p-6 md:p-8 space-y-4 text-xs text-gray-700'>
        <h3 className='font-display font-bold text-base text-gray-900 flex items-center gap-2'>
          <BookOpen className='w-4 h-4 text-brand-green' />
          <span>Understanding Your Legal Rights Under Kenyan Law</span>
        </h3>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-2'>
          <div className='p-3.5 bg-gray-50 rounded-lg border border-gray-100 space-y-1'>
            <strong className='text-gray-900 block'>Can a landlord deduct money for repainting?</strong>
            <p className='leading-relaxed text-gray-600'>
              Under Kenyan tenancy jurisprudence, landlords are responsible for maintaining the structural and exterior condition. General repainting due to normal age and fading is classified as <strong>fair wear and tear</strong>, which cannot lawfully be passed to outgoing tenants unless malicious gouges or unapproved wall modifications exist.
            </p>
          </div>

          <div className='p-3.5 bg-gray-50 rounded-lg border border-gray-100 space-y-1'>
            <strong className='text-gray-900 block'>What is the Small Claims Court threshold?</strong>
            <p className='leading-relaxed text-gray-600'>
              The Small Claims Court (established under Cap 10A) adjudicates civil and contractual disputes up to <strong>KSh 1,000,000</strong> with fast-track hearings completed within 60 days. Filing fees are low (typically KSh 200–1,000), making it the premier forum for recovering withheld deposits.
            </p>
          </div>

          <div className='p-3.5 bg-gray-50 rounded-lg border border-gray-100 space-y-1'>
            <strong className='text-gray-900 block'>Why does this letter demand a 14-day timeline?</strong>
            <p className='leading-relaxed text-gray-600'>
              Courts require claimants to show that they gave the respondent reasonable formal opportunity to remedy the breach prior to instituting litigation. A written 14-day demand provides conclusive proof of pre-action diligence.
            </p>
          </div>

          <div className='p-3.5 bg-gray-50 rounded-lg border border-gray-100 space-y-1'>
            <strong className='text-gray-900 block'>How should I serve this letter?</strong>
            <p className='leading-relaxed text-gray-600'>
              Deliver via: (1) Registered Post with a post-office certificate of posting, (2) Hand delivery with the landlord or caretaker signing a stamped receiving copy, or (3) Official email/WhatsApp with delivery and read acknowledgments screenshot.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
