import React from 'react';
import Link from 'next/link';
import type { Estate } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { ChevronRight, Calendar, ShieldCheck, MapPin } from 'lucide-react';

export const EstateHero: React.FC<{ estate: Estate }> = ({ estate }) => {
  const zoneNames: Record<string, string> = {
    'central-west': 'Central West',
    'central': 'Nairobi Central',
    'north': 'Nairobi North',
    'north-west': 'North West',
    'south-west': 'South West',
    'north-east': 'North East',
    'south': 'Nairobi South',
  };

  return (
    <div className='bg-gradient-to-b from-emerald-50/60 via-white to-white border-b border-gray-200 py-10 md:py-14'>
      <div className='max-w-5xl mx-auto px-4'>
        {/* Breadcrumb */}
        <nav className='flex items-center gap-1.5 text-xs text-gray-500 mb-6'>
          <Link href='/' className='hover:text-brand-green'>Home</Link>
          <ChevronRight className='w-3.5 h-3.5' />
          <Link href='/estates' className='hover:text-brand-green'>Estates</Link>
          <ChevronRight className='w-3.5 h-3.5' />
          <span className='text-gray-900 font-medium'>{estate.name}</span>
        </nav>

        <div className='flex flex-wrap items-center gap-2 mb-4'>
          <Badge variant='blue' size='md'>
            <MapPin className='w-3 h-3 mr-1 inline' />
            {zoneNames[estate.zone] || estate.zone}
          </Badge>
          <Badge variant='gray' size='md'>
            Tier: {estate.tier.toUpperCase()}
          </Badge>
          <Badge variant='green' size='md'>
            <ShieldCheck className='w-3 h-3 mr-1 inline' />
            Verified Field Audit
          </Badge>
        </div>

        <h1 className='font-display font-extrabold text-3xl md:text-5xl text-gray-950 tracking-tight'>
          {estate.name} Rent Prices & Cost Index
        </h1>

        <p className='text-lg md:text-xl text-emerald-800 font-medium mt-3 max-w-3xl'>
          {estate.tagline}
        </p>

        <p className='text-sm md:text-base text-gray-600 mt-4 leading-relaxed max-w-3xl'>
          {estate.profileSummary}
        </p>

        <div className='mt-6 flex items-center gap-2 text-xs text-gray-400'>
          <Calendar className='w-3.5 h-3.5' />
          <span>Research benchmark active as of {estate.updatedAt}</span>
        </div>
      </div>
    </div>
  );
};
