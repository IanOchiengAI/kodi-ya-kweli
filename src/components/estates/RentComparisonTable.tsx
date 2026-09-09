import React from 'react';
import type { Estate, UnitTypes } from '@/types';
import { formatBand, discountPercent } from '@/lib/utils';
import { Info, CheckCircle2 } from 'lucide-react';

export const RentComparisonTable: React.FC<{ estate: Estate }> = ({ estate }) => {
  const units: { key: keyof UnitTypes; label: string }[] = [
    { key: 'bedsitter', label: 'Bedsitter' },
    { key: 'oneBR', label: '1 Bedroom' },
    { key: 'twoBR', label: '2 Bedroom' },
    { key: 'threeBR', label: '3 Bedroom' },
  ];

  const availableUnits = units.filter((u) => estate.askingRent[u.key] || estate.transactedRent[u.key]);

  return (
    <div className='bg-white border border-gray-200 rounded-xl p-6 shadow-sm'>
      <div className='flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6'>
        <div>
          <h2 className='font-display font-bold text-xl md:text-2xl text-gray-900'>
            Advertised Asking Rent vs. Real Transacted Rates
          </h2>
          <p className='text-xs text-gray-500 mt-1'>
            Comparison between commercial asking prices and transacted lease rates agreed upon negotiation.
          </p>
        </div>
        <div className='inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-xs px-3 py-1.5 rounded-lg border border-emerald-200 font-medium'>
          <CheckCircle2 className='w-4 h-4 text-emerald-600' />
          <span>Field Negotiated Averages</span>
        </div>
      </div>

      <div className='overflow-x-auto'>
        <table className='w-full text-left text-sm'>
          <thead>
            <tr className='border-b border-gray-200 bg-gray-50/70 text-gray-600 text-xs uppercase tracking-wider'>
              <th className='py-3 px-4 rounded-l-lg font-semibold'>Unit Type</th>
              <th className='py-3 px-4 font-semibold text-gray-500'>
                Advertised Asking <span className='normal-case font-normal'>(Portals)</span>
              </th>
              <th className='py-3 px-4 font-semibold text-emerald-900'>
                Real Transacted <span className='normal-case font-normal'>(Ground Truth)</span>
              </th>
              <th className='py-3 px-4 rounded-r-lg font-semibold text-right'>Negotiation Margin</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-100'>
            {availableUnits.map((u) => {
              const asking = estate.askingRent[u.key];
              const transacted = estate.transactedRent[u.key];
              const discount = discountPercent(asking, transacted);

              return (
                <tr key={u.key} className='hover:bg-gray-50/50 transition-colors'>
                  <td className='py-4 px-4 font-bold text-gray-900'>{u.label}</td>
                  <td className='py-4 px-4 text-gray-500 line-through decoration-rose-400'>
                    {formatBand(asking)}
                  </td>
                  <td className='py-4 px-4 font-display font-bold text-emerald-700 text-base'>
                    {formatBand(transacted)}
                  </td>
                  <td className='py-4 px-4 text-right'>
                    {discount > 0 ? (
                      <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800'>
                        Save ~{discount}%
                      </span>
                    ) : (
                      <span className='text-xs text-gray-400'>Parity</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className='mt-5 p-3.5 bg-gray-50 rounded-lg text-xs text-gray-500 flex items-start gap-2.5'>
        <Info className='w-4 h-4 text-gray-400 shrink-0 mt-0.5' />
        <p>
          <strong>Methodology Note:</strong> Asking ranges are drawn from commercial aggregators (BuyRentKenya, Property24, social media listings). Real transacted ranges represent verified lease agreements signed after standard negotiation and direct-to-caretaker engagement.
        </p>
      </div>
    </div>
  );
};
