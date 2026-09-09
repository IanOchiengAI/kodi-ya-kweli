import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Scale, Github, ExternalLink } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-white border-t border-gray-200 mt-20 pt-12 pb-16 text-gray-600 text-sm'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-12'>
          {/* Col 1: Mission */}
          <div className='md:col-span-2 space-y-3'>
            <div className='flex items-center gap-2'>
              <div className='w-7 h-7 rounded bg-brand-green flex items-center justify-center text-white'>
                <Scale className='w-4 h-4' />
              </div>
              <span className='font-display font-bold text-gray-900 text-base'>
                Kodi Ya Kweli
              </span>
            </div>
            <p className='text-xs text-gray-600 leading-relaxed max-w-md'>
              Civic technology for Kenyan tenants. Programmatic estate cost-of-living intelligence
              and privacy-preserving legal self-help toolkits. 100% client-side document drafting — no personal tenancy data touches any external server.
            </p>
            <div className='flex items-center gap-3 pt-2 text-xs'>
              <a
                href='https://github.com/IanOchiengAI/kodi-ya-kweli'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-1.5 text-gray-700 hover:text-brand-green font-medium'
              >
                <Github className='w-4 h-4' />
                GitHub Repository
              </a>
              <span>·</span>
              <span className='text-emerald-700 font-medium'>Open Source MIT</span>
            </div>
          </div>

          {/* Col 2: Estates */}
          <div>
            <h4 className='font-semibold text-gray-900 text-xs uppercase tracking-wider mb-3'>
              Estate Indexes
            </h4>
            <ul className='space-y-2 text-xs'>
              <li>
                <Link href='/estates/kilimani' className='hover:text-brand-green'>
                  Kilimani & Kileleshwa
                </Link>
              </li>
              <li>
                <Link href='/estates/westlands' className='hover:text-brand-green'>
                  Westlands
                </Link>
              </li>
              <li>
                <Link href='/estates/ruaka' className='hover:text-brand-green'>
                  Ruaka & Joyland
                </Link>
              </li>
              <li>
                <Link href='/estates/roysambu' className='hover:text-brand-green'>
                  Roysambu & TRM Drive
                </Link>
              </li>
              <li>
                <Link href='/estates/kasarani' className='hover:text-brand-green'>
                  Kasarani & Mwiki
                </Link>
              </li>
              <li>
                <Link href='/estates/ongata-rongai' className='hover:text-brand-green'>
                  Ongata Rongai
                </Link>
              </li>
              <li>
                <Link href='/estates/south-b-south-c' className='hover:text-brand-green'>
                  South B & South C
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Tenant Tools */}
          <div>
            <h4 className='font-semibold text-gray-900 text-xs uppercase tracking-wider mb-3'>
              Legal & Audit Tools
            </h4>
            <ul className='space-y-2 text-xs'>
              <li>
                <Link href='/toolkit/deposit-demand' className='hover:text-brand-green'>
                  Deposit Demand Letter
                </Link>
              </li>
              <li>
                <Link href='/toolkit/fair-rent-calculator' className='hover:text-brand-green'>
                  Total Cost of Tenancy
                </Link>
              </li>
              <li>
                <Link href='/toolkit/inspection-checklist' className='hover:text-brand-green'>
                  Move-In / Move-Out Audit
                </Link>
              </li>
              <li>
                <Link href='/about' className='hover:text-brand-green'>
                  Data Methodology & Law
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className='p-4 bg-gray-50 border border-gray-200 rounded-lg text-xs leading-relaxed text-gray-500 space-y-1.5'>
          <p>
            <strong className='text-gray-700'>Statutory & Privacy Disclaimer:</strong> Kodi Ya Kweli publishes objective, estate-level aggregate rent bands and utility infrastructure benchmarks. In strict compliance with the Data Protection Act 2019 and Section 22 of the Computer Misuse and Cybercrimes Act 2018, this platform does not publish landlord names, building-level reviews, or private lease agreements.
          </p>
          <p>
            The Demand Letter Generator operates entirely within your web browser using client-side JavaScript. No tenant names, rental figures, or contact details are transmitted to, processed by, or stored on our servers. This toolkit constitutes civic educational material, not legal representation.
          </p>
        </div>

        <div className='mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500'>
          <p>© {currentYear} Kodi Ya Kweli. Built by Ian Ochieng.</p>
          <p className='flex items-center gap-1'>
            Built for Kenyan Renters · Powered by Open Data
          </p>
        </div>
      </div>
    </footer>
  );
};
