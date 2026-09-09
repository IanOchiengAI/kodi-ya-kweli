import React from 'react';
import Link from 'next/link';
import { ESTATES } from '@/data/estates';
import { EstateCard } from '@/components/estates/EstateCard';
import {
  ShieldCheck,
  TrendingDown,
  Scale,
  Calculator,
  ClipboardCheck,
  ArrowRight,
  Zap,
  Droplets,
  AlertTriangle,
  Info,
} from 'lucide-react';

export default function HomePage() {
  const featuredEstates = ESTATES.filter((e) =>
    ['kilimani', 'roysambu', 'ruaka', 'ongata-rongai'].includes(e.slug)
  );

  return (
    <div className='space-y-16 md:space-y-24'>
      {/* 1. HERO SECTION */}
      <section className='relative bg-gradient-to-b from-emerald-50/70 via-brand-cream to-brand-cream pt-16 pb-20 md:pt-24 md:pb-28 border-b border-emerald-100/60'>
        <div className='max-w-5xl mx-auto px-4 text-center space-y-6'>
          <div className='inline-flex items-center gap-2 bg-emerald-100/90 text-emerald-900 border border-emerald-300/60 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide'>
            <span className='w-2 h-2 rounded-full bg-brand-green animate-pulse' />
            Kenya Civic Tech Initiative · September 2026 Audit
          </div>

          <h1 className='font-display font-black text-4xl sm:text-5xl md:text-6xl text-gray-950 tracking-tight leading-[1.1] max-w-4xl mx-auto'>
            Nairobi rent prices — what people{' '}
            <span className='text-brand-green underline decoration-emerald-400 decoration-wavy decoration-2'>
              actually pay
            </span>
            .
          </h1>

          <p className='text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-medium leading-relaxed'>
            Not what agents post on Property24. Real transacted rates, hidden token resale markups,
            water rationing realities, and free legal demand kits to get your deposit back.
          </p>

          <div className='pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5'>
            <Link
              href='/estates'
              className='w-full sm:w-auto px-7 py-3.5 bg-brand-green text-white font-bold text-sm rounded-xl hover:bg-brand-green-light shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2'
            >
              <span>Browse Real Estate Index</span>
              <ArrowRight className='w-4 h-4' />
            </Link>

            <Link
              href='/toolkit/deposit-demand'
              className='w-full sm:w-auto px-7 py-3.5 bg-white text-gray-900 border border-gray-300 font-bold text-sm rounded-xl hover:bg-gray-50 shadow-sm transition-all flex items-center justify-center gap-2'
            >
              <Scale className='w-4 h-4 text-brand-green' />
              <span>Write a Demand Letter</span>
            </Link>
          </div>

          <p className='text-xs text-gray-600 pt-2 flex items-center justify-center gap-1.5'>
            <ShieldCheck className='w-4 h-4 text-emerald-700' />
            <span>100% Client-Side Privacy · No personal data stored · In compliance with Data Protection Act 2019</span>
          </p>
        </div>
      </section>

      {/* 2. STATS & GROUND REALITY STRIP */}
      <section className='max-w-5xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col justify-between'>
            <div className='w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4'>
              <TrendingDown className='w-5 h-5' />
            </div>
            <div>
              <div className='font-display font-extrabold text-3xl text-gray-950 mb-1'>
                8% – 22%
              </div>
              <h3 className='font-bold text-sm text-gray-900 mb-1'>
                Asking vs. Real Transacted Gap
              </h3>
              <p className='text-xs text-gray-500 leading-relaxed'>
                Online asking prices are aspirational anchors for broker commissions and bank loans. Real transacted leases negotiated offline are 8–22% lower across Nairobi nodes.
              </p>
            </div>
          </div>

          <div className='bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col justify-between'>
            <div className='w-10 h-10 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center mb-4'>
              <AlertTriangle className='w-5 h-5' />
            </div>
            <div>
              <div className='font-display font-extrabold text-3xl text-rose-700 mb-1'>
                Over 70%
              </div>
              <h3 className='font-bold text-sm text-gray-900 mb-1'>
                Unrecovered Security Deposits
              </h3>
              <p className='text-xs text-gray-500 leading-relaxed'>
                Informal landlords treat deposits as a terminal exit bonus, deducting sums for bogus repainting and general wear-and-tear without contractual receipts.
              </p>
            </div>
          </div>

          <div className='bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col justify-between'>
            <div className='w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center mb-4'>
              <Zap className='w-5 h-5' />
            </div>
            <div>
              <div className='font-display font-extrabold text-3xl text-amber-800 mb-1'>
                Up to KSh 40/kWh
              </div>
              <h3 className='font-bold text-sm text-gray-900 mb-1'>
                Hidden Sub-meter Token Markups
              </h3>
              <p className='text-xs text-gray-500 leading-relaxed'>
                While KPLC regulated retail tariff sits between KSh 24–32/kWh, rogue sub-meter resellers in student and commuter zones inflate prices up to KSh 40/kWh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED ESTATE GRID PREVIEW */}
      <section className='max-w-5xl mx-auto px-4 space-y-6'>
        <div className='flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-200 pb-4'>
          <div>
            <h2 className='font-display font-bold text-2xl md:text-3xl text-gray-950'>
              Nairobi Estate Rent Indexes
            </h2>
            <p className='text-xs md:text-sm text-gray-500 mt-1'>
              Benchmarked transacted rent bands, utility markups, and move-in deposit realities.
            </p>
          </div>
          <Link
            href='/estates'
            className='inline-flex items-center gap-1.5 text-xs font-bold text-brand-green hover:text-brand-green-light'
          >
            <span>View All Audited Estates</span>
            <ArrowRight className='w-4 h-4' />
          </Link>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {featuredEstates.map((estate) => (
            <EstateCard key={estate.slug} estate={estate} />
          ))}
        </div>
      </section>

      {/* 4. TENANT TOOLKIT SHOWCASE */}
      <section className='max-w-5xl mx-auto px-4'>
        <div className='bg-gradient-to-br from-emerald-900 via-emerald-950 to-gray-950 text-white rounded-2xl p-8 md:p-12 shadow-xl'>
          <div className='max-w-2xl mb-10'>
            <div className='inline-flex items-center gap-2 bg-emerald-800/80 px-3 py-1 rounded-full text-xs font-semibold text-emerald-200 mb-3'>
              <Scale className='w-3.5 h-3.5 text-emerald-400' />
              Legal Self-Help Suite
            </div>
            <h2 className='font-display font-bold text-2xl md:text-4xl tracking-tight'>
              Self-Service Tenant Defense Toolkit
            </h2>
            <p className='text-sm text-emerald-100/80 mt-2 leading-relaxed'>
              Built on the Law of Contract Act (Cap 23), Evidence Act (Cap 80), and Small Claims Court procedures. 100% private to your device.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {/* Tool 1 */}
            <div className='bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-6 flex flex-col justify-between hover:bg-white/15 transition-all'>
              <div className='space-y-3'>
                <div className='w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center'>
                  <Scale className='w-5 h-5' />
                </div>
                <h3 className='font-display font-bold text-lg text-white'>
                  Deposit Demand Letter
                </h3>
                <p className='text-xs text-emerald-100/70 leading-relaxed'>
                  Generate a formal, statutory 14-day demand letter citing Kenyan contract law to reclaim your withheld security deposit.
                </p>
              </div>
              <div className='pt-6'>
                <Link
                  href='/toolkit/deposit-demand'
                  className='text-xs font-bold text-emerald-300 hover:text-white inline-flex items-center gap-1.5'
                >
                  <span>Launch Letter Generator</span>
                  <ArrowRight className='w-3.5 h-3.5' />
                </Link>
              </div>
            </div>

            {/* Tool 2 */}
            <div className='bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-6 flex flex-col justify-between hover:bg-white/15 transition-all'>
              <div className='space-y-3'>
                <div className='w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center'>
                  <Calculator className='w-5 h-5' />
                </div>
                <h3 className='font-display font-bold text-lg text-white'>
                  Total Cost of Tenancy
                </h3>
                <p className='text-xs text-emerald-100/70 leading-relaxed'>
                  Calculate the real monthly expenditure including landlord token markups, borehole salinity costs & daily matatu transit.
                </p>
              </div>
              <div className='pt-6'>
                <Link
                  href='/toolkit/fair-rent-calculator'
                  className='text-xs font-bold text-emerald-300 hover:text-white inline-flex items-center gap-1.5'
                >
                  <span>Open TCT Calculator</span>
                  <ArrowRight className='w-3.5 h-3.5' />
                </Link>
              </div>
            </div>

            {/* Tool 3 */}
            <div className='bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-6 flex flex-col justify-between hover:bg-white/15 transition-all'>
              <div className='space-y-3'>
                <div className='w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center'>
                  <ClipboardCheck className='w-5 h-5' />
                </div>
                <h3 className='font-display font-bold text-lg text-white'>
                  Move-In / Out Audit
                </h3>
                <p className='text-xs text-emerald-100/70 leading-relaxed'>
                  Printable room-by-room inspection schedule to lock in initial photographic evidence and defeat false repainting claims.
                </p>
              </div>
              <div className='pt-6'>
                <Link
                  href='/toolkit/inspection-checklist'
                  className='text-xs font-bold text-emerald-300 hover:text-white inline-flex items-center gap-1.5'
                >
                  <span>Print Inspection Audit</span>
                  <ArrowRight className='w-3.5 h-3.5' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. METHODOLOGY & CIVIC TECH COMMITMENT */}
      <section className='max-w-5xl mx-auto px-4'>
        <div className='bg-white border border-gray-200 rounded-xl p-8 space-y-4 shadow-sm'>
          <div className='flex items-center gap-2 text-brand-green'>
            <Info className='w-5 h-5' />
            <h2 className='font-display font-bold text-lg text-gray-900'>
              Our Methodology & Civic Integrity Standard
            </h2>
          </div>
          <p className='text-xs text-gray-600 leading-relaxed'>
            Kodi Ya Kweli was born from an extensive market audit of Nairobi rental dynamics. Rather than creating an unmoderated review board (which triggers severe criminal defamation exposure under Section 22 of the Computer Misuse and Cybercrimes Act 2018), we provide <strong>macro estate-level pricing indices</strong> and <strong>self-help legal toolkits</strong>.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs text-gray-700'>
            <div className='p-3 bg-gray-50 rounded-lg border border-gray-100'>
              <strong className='block text-gray-900 mb-1'>Quarterly Field Audits:</strong>
              Transacted rents are verified through tenant interviews, caretaker consultations, and offline lease analysis.
            </div>
            <div className='p-3 bg-gray-50 rounded-lg border border-gray-100'>
              <strong className='block text-gray-900 mb-1'>Zero Landlord Naming:</strong>
              We do not publish individual landlord names or plot details, protecting platform longevity and tenant safety.
            </div>
            <div className='p-3 bg-gray-50 rounded-lg border border-gray-100'>
              <strong className='block text-gray-900 mb-1'>Zero Server Transmission:</strong>
              All demand letters and inspection audits run 100% in your browser, maintaining full compliance with the Data Protection Act 2019.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
