import React from 'react';
import type { Metadata } from 'next';
import { ESTATES } from '@/data/estates';
import { EstateFilter } from '@/components/estates/EstateFilter';
import { ShieldCheck, MapPin } from 'lucide-react';

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
    <div className='max-w-6xl mx-auto px-4 py-10 space-y-8'>
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
    </div>
  );
}
