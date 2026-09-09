import React from 'react';
import Link from 'next/link';
import type { Estate } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { formatKSh, discountPercent } from '@/lib/utils';
import { ArrowRight, Zap, Droplets } from 'lucide-react';

export const EstateCard: React.FC<{ estate: Estate }> = ({ estate }) => {
  const transacted = estate.transactedRent;
  const lowestRent =
    transacted.bedsitter?.min ||
    transacted.oneBR?.min ||
    transacted.twoBR?.min ||
    0;

  const zoneNames: Record<string, string> = {
    'central-west': 'Central West',
    'central': 'Central',
    'north': 'Nairobi North',
    'north-west': 'North West',
    'south-west': 'South West',
    'north-east': 'North East',
    'south': 'Nairobi South',
  };

  const discount = discountPercent(estate.askingRent.oneBR, estate.transactedRent.oneBR);

  return (
    <div className='bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between group'>
      <div>
        <div className='flex items-center justify-between gap-2 mb-3'>
          <Badge variant='blue' size='sm'>
            {zoneNames[estate.zone] || estate.zone}
          </Badge>
          {discount > 0 && (
            <Badge variant='green' size='sm'>
              ~{discount}% Off Asking
            </Badge>
          )}
        </div>

        <h3 className='font-display font-bold text-xl text-gray-900 group-hover:text-brand-green transition-colors'>
          {estate.name}
        </h3>
        <p className='text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed'>
          {estate.tagline}
        </p>

        {/* Pricing Highlight */}
        <div className='mt-5 pt-4 border-t border-gray-100 flex items-baseline justify-between'>
          <div>
            <span className='text-[10px] text-gray-400 uppercase tracking-wider font-semibold block'>
              Real Transacted Rent
            </span>
            <span className='font-display font-bold text-lg text-emerald-700'>
              From {formatKSh(lowestRent)}
              <span className='text-xs font-normal text-gray-500'>/mo</span>
            </span>
          </div>

          <div className='text-right'>
            <span className='text-[10px] text-gray-400 uppercase tracking-wider font-semibold block'>
              Token Resale
            </span>
            <span className={`text-xs font-bold ${estate.utilities.landlordResaleRateKSh > 32 ? 'text-amber-700' : 'text-gray-700'}`}>
              KSh {estate.utilities.landlordResaleRateKSh}/kWh
            </span>
          </div>
        </div>

        {/* Utility tags */}
        <div className='mt-3 flex items-center gap-2 text-[11px] text-gray-600'>
          <span className='inline-flex items-center gap-1 bg-gray-50 px-2 py-0.5 rounded'>
            <Droplets className='w-3 h-3 text-sky-600' />
            {estate.utilities.waterRationingDaysPerWeek}d/wk rationing
          </span>
          <span className='inline-flex items-center gap-1 bg-gray-50 px-2 py-0.5 rounded'>
            <Zap className='w-3 h-3 text-amber-500' />
            KSh {estate.utilities.serviceChargeRange.min}–{estate.utilities.serviceChargeRange.max} SC
          </span>
        </div>
      </div>

      <div className='mt-6 pt-4 border-t border-gray-100'>
        <Link
          href={`/estates/${estate.slug}`}
          className='w-full inline-flex items-center justify-between text-xs font-semibold text-emerald-800 hover:text-emerald-950 transition-colors'
        >
          <span>Explore Rent & Utility Profile</span>
          <ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
        </Link>
      </div>
    </div>
  );
};
