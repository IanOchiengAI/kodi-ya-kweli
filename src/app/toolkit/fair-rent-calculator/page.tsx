import React from 'react';
import type { Metadata } from 'next';
import { RentCalculatorForm } from '@/components/toolkit/RentCalculatorForm';
import { Calculator, Info, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Total Cost of Tenancy (TCT) Calculator — Nairobi',
  description:
    'Calculate the true monthly out-of-pocket housing cost in Nairobi. Accounts for submeter token resale markups, water rationing bowsers, and daily transit fare.',
  openGraph: {
    title: 'Total Cost of Tenancy Calculator | Kodi Ya Kweli',
    description: 'Find out how much your apartment actually costs beyond the advertised rent.',
  },
};

export default function FairRentCalculatorPage() {
  return (
    <div className='max-w-5xl mx-auto px-4 py-10 space-y-8'>
      <div className='text-center max-w-2xl mx-auto space-y-2'>
        <span className='text-xs font-bold text-brand-green uppercase tracking-wider'>
          True Affordability Simulator
        </span>
        <h1 className='font-display font-extrabold text-3xl md:text-4xl text-gray-950'>
          Total Cost of Tenancy (TCT) Calculator
        </h1>
        <p className='text-xs md:text-sm text-gray-600 leading-relaxed'>
          Base rent is only 70–85% of what you actually spend each month. Expose the hidden utility markups,
          water rationing surcharges, and daily transit overheads before signing a 12-month lease.
        </p>
      </div>

      <RentCalculatorForm />

      <div className='bg-white border border-gray-200 rounded-xl p-6 text-xs text-gray-600 space-y-2.5'>
        <div className='flex items-center gap-2 text-gray-900 font-bold'>
          <Info className='w-4 h-4 text-brand-green' />
          <span>Why TCT Matters More than Advertised Rent</span>
        </div>
        <p className='leading-relaxed'>
          In Nairobi, two apartments advertised at KSh 20,000 can have wildly divergent total costs:
        </p>
        <ul className='list-disc pl-5 space-y-1 text-gray-600'>
          <li>
            <strong>Apartment A (Roysambu):</strong> Advertised KSh 20,000 rent + KSh 2,500 service charge + KSh 40/kWh token resale markup (+KSh 1,800) + 3 days water rationing bowsers (+KSh 1,500) + CBD peak matatu fare (+KSh 4,400) = <strong>Real Out-of-Pocket: KSh 30,200/month</strong> (+51% overhead).
          </li>
          <li>
            <strong>Apartment B (South B):</strong> Advertised KSh 24,000 rent + KSh 1,500 service charge + regular KPLC KSh 28 rate + lower off-peak transit (+KSh 2,200) = <strong>Real Out-of-Pocket: KSh 27,700/month</strong>.
          </li>
        </ul>
        <p className='text-emerald-800 font-semibold pt-1'>
          Result: Apartment B has a higher advertised price, but actually saves you KSh 2,500 every single month.
        </p>
      </div>
    </div>
  );
}
