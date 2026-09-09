import React from 'react';
import type { Estate } from '@/types';
import { formatKSh } from '@/lib/utils';
import { Zap, Droplets, KeyRound, Bus, AlertCircle } from 'lucide-react';

export const UtilityCostBreakdown: React.FC<{ estate: Estate }> = ({ estate }) => {
  const tokenMarkup = Math.max(
    0,
    estate.utilities.landlordResaleRateKSh - estate.utilities.kplcRetailRateKSh
  );
  const monthlyExtraToken150 = tokenMarkup * 150; // extra cost for 150 kWh

  return (
    <div className='bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-6'>
      <div>
        <h2 className='font-display font-bold text-xl md:text-2xl text-gray-900'>
          Utilities & Move-In Cost Realities
        </h2>
        <p className='text-xs text-gray-500 mt-1'>
          Unadvertised monthly utility markups and standard upfront security deposit requirements.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {/* Card 1: Electricity Tokens */}
        <div className='border border-gray-200 rounded-lg p-5 bg-gradient-to-br from-amber-50/40 to-white'>
          <div className='flex items-center gap-2 mb-3'>
            <div className='w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center'>
              <Zap className='w-4 h-4' />
            </div>
            <div>
              <h3 className='font-bold text-gray-900 text-sm'>KPLC Token Rate</h3>
              <span className='text-[10px] text-gray-500'>Sub-meter vs Official</span>
            </div>
          </div>

          <div className='space-y-2 text-xs'>
            <div className='flex justify-between py-1 border-b border-gray-100'>
              <span className='text-gray-500'>Regulated KPLC Retail:</span>
              <span className='font-semibold text-gray-700'>
                ~KSh {estate.utilities.kplcRetailRateKSh}/kWh
              </span>
            </div>
            <div className='flex justify-between py-1 border-b border-gray-100'>
              <span className='text-gray-500'>Landlord Resale Rate:</span>
              <span className={`font-bold ${tokenMarkup > 5 ? 'text-rose-700' : 'text-gray-800'}`}>
                KSh {estate.utilities.landlordResaleRateKSh}/kWh
              </span>
            </div>
            <div className='flex justify-between py-1 pt-2 font-medium text-amber-900'>
              <span>Estimated Markup (150 kWh/mo):</span>
              <span className='font-bold'>+ {formatKSh(monthlyExtraToken150)}/mo</span>
            </div>
          </div>

          {tokenMarkup > 5 && (
            <div className='mt-3 text-[11px] text-rose-700 bg-rose-50 p-2 rounded flex items-start gap-1.5'>
              <AlertCircle className='w-3.5 h-3.5 shrink-0 mt-0.5' />
              <span>Significant landlord token markup in this zone. Ask for main KPLC meter token printouts.</span>
            </div>
          )}
        </div>

        {/* Card 2: Water Supply & Rationing */}
        <div className='border border-gray-200 rounded-lg p-5 bg-gradient-to-br from-sky-50/40 to-white'>
          <div className='flex items-center gap-2 mb-3'>
            <div className='w-8 h-8 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center'>
              <Droplets className='w-4 h-4' />
            </div>
            <div>
              <h3 className='font-bold text-gray-900 text-sm'>Water & Rationing</h3>
              <span className='text-[10px] text-gray-500'>Nairobi Water (NCWSC)</span>
            </div>
          </div>

          <div className='space-y-2 text-xs'>
            <div className='flex justify-between py-1 border-b border-gray-100'>
              <span className='text-gray-500'>Scheduled Dry Days:</span>
              <span className='font-bold text-gray-800'>
                {estate.utilities.waterRationingDaysPerWeek} days / week
              </span>
            </div>
            <div className='flex justify-between py-1 border-b border-gray-100'>
              <span className='text-gray-500'>Borehole Water Backup:</span>
              <span className='font-semibold text-gray-700'>
                {estate.utilities.boreholeWater ? 'Yes (Borehole equipped)' : 'No (Municipal/Bowsers)'}
              </span>
            </div>
            <div className='flex justify-between py-1 pt-2 text-gray-700'>
              <span className='text-gray-500'>Monthly Service Charge:</span>
              <span className='font-bold'>
                KSh {estate.utilities.serviceChargeRange.min} – {estate.utilities.serviceChargeRange.max}
              </span>
            </div>
          </div>
        </div>

        {/* Card 3: Upfront Deposit Reality */}
        <div className='border border-gray-200 rounded-lg p-5 bg-gradient-to-br from-emerald-50/40 to-white'>
          <div className='flex items-center gap-2 mb-3'>
            <div className='w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center'>
              <KeyRound className='w-4 h-4' />
            </div>
            <div>
              <h3 className='font-bold text-gray-900 text-sm'>Move-In Deposit Realities</h3>
              <span className='text-[10px] text-gray-500'>Standard Upfront Capital</span>
            </div>
          </div>

          <div className='space-y-2 text-xs'>
            <div className='flex justify-between py-1 border-b border-gray-100'>
              <span className='text-gray-500'>Security Rent Deposit:</span>
              <span className='font-bold text-gray-800'>{estate.deposit.monthsRentRequired} Month(s) Rent</span>
            </div>
            <div className='flex justify-between py-1 border-b border-gray-100'>
              <span className='text-gray-500'>Water Connection Deposit:</span>
              <span className='font-semibold text-gray-700'>
                KSh {estate.deposit.waterDepositKSh.min} – {estate.deposit.waterDepositKSh.max}
              </span>
            </div>
            <div className='flex justify-between py-1 pt-2 text-gray-700'>
              <span className='text-gray-500'>Power Meter Deposit:</span>
              <span className='font-semibold text-gray-700'>
                KSh {estate.deposit.electricityDepositKSh.min} – {estate.deposit.electricityDepositKSh.max}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Transit Strip */}
      <div className='p-4 bg-gray-50 rounded-lg border border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs'>
        <div className='flex items-center gap-2.5'>
          <Bus className='w-4 h-4 text-gray-500' />
          <span className='font-medium text-gray-800'>CBD Matatu Transit:</span>
          <span className='text-gray-600'>
            Peak: KSh {estate.commute.matatuToCBD_peak.min}–{estate.commute.matatuToCBD_peak.max} · Off-peak: KSh {estate.commute.matatuToCBD_offpeak.min}–{estate.commute.matatuToCBD_offpeak.max} one-way
          </span>
        </div>
        <span className='text-gray-400'>22 workdays commute ≈ KSh {(estate.commute.matatuToCBD_peak.min * 2 * 22).toLocaleString()}–{(estate.commute.matatuToCBD_peak.max * 2 * 22).toLocaleString()}/mo</span>
      </div>
    </div>
  );
};
