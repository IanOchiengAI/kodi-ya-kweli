import React from 'react';
import type { Metadata } from 'next';
import { ESTATES } from '@/data/estates';
import { EstateFilter } from '@/components/estates/EstateFilter';
import { ShieldCheck, MapPin, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nairobi Estate Rent & Utility Index 2026',
  description:
    'Comprehensive estate-level database of real transacted rents, KPLC token resale rates, water rationing days, and move-in deposit realities across Nairobi residential nodes.',
  openGraph: {
    title: 'Nairobi Estate Rent & Utility Index 2026 | Kodi Ya Kweli',
    description: 'Explore transacted rents vs asking prices across Kilimani, Ruaka, Roysambu, Westlands, and more.',
  },
};

export default function EstatesDirectoryPage() {
  return (
    <div className='max-w-6xl mx-auto px-4 py-10 space-y-12'>
      {/* Header */}
      <div className='border-b border-gray-200 pb-8'>
        <div className='flex items-center gap-2 text-xs font-bold text-brand-green uppercase tracking-wider mb-2'>
          <MapPin className='w-4 h-4' />
          <span>Macro Residential Market Intelligence</span>
        </div>
        <h1 className='font-display font-extrabold text-3xl md:text-5xl text-gray-950 tracking-tight'>
          Nairobi Estate Cost-of-Living Index
        </h1>
        <p className='text-sm md:text-base text-gray-600 mt-2 max-w-3xl leading-relaxed'>
          Real transacted rents vs. advertised portal asking prices. Sourced from field research,
          direct caretaker audits, and verified tenant leases across Nairobi major commuter and residential corridors.
        </p>
      </div>

      {/* Interactive Filter and Cards */}
      <EstateFilter estates={ESTATES} />

      {/* Community Contribution Banner */}
      <div className='bg-white border border-gray-200 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm'>
        <div className='space-y-1.5 max-w-xl'>
          <h3 className='font-display font-bold text-base text-gray-950'>
            Live in one of these estates or nearby?
          </h3>
          <p className='text-xs text-gray-600 leading-relaxed'>
            Caretaker rates, sub-meter token reselling, and water rationing shift regularly. Help keep this civic index accurate by submitting an anonymous rent or utility rate update.
          </p>
        </div>
        <a
          href='https://github.com/IanOchiengAI/kodi-ya-kweli/issues/new?title=%5BRate+Update%5D+Estate+Name&body=Estate%3A%0D%0AUnit+Type%3A%0D%0AReal+Rent+Paid%3A%0D%0AToken+Rate+(KSh%2FkWh)%3A%0D%0AWater+Situation%3A'
          target='_blank'
          rel='noopener noreferrer'
          className='shrink-0 px-5 py-2.5 bg-brand-green text-white text-xs font-bold rounded-lg hover:bg-brand-green-light transition-colors shadow-sm inline-flex items-center gap-2'
        >
          <span>Suggest a Rate Update</span>
          <ArrowRight className='w-3.5 h-3.5' />
        </a>
      </div>
    </div>
  );
}
