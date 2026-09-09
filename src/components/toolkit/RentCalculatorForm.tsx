'use client';

import React, { useState } from 'react';
import { ESTATES } from '@/data/estates';
import { formatKSh, calcTCT } from '@/lib/utils';
import { Calculator, Zap, Droplets, Bus, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const RentCalculatorForm = () => {
  const [selectedEstateSlug, setSelectedEstateSlug] = useState(ESTATES[0].slug);
  const selectedEstate = ESTATES.find((e) => e.slug === selectedEstateSlug) || ESTATES[0];

  const defaultRent =
    selectedEstate.transactedRent.oneBR?.min ||
    selectedEstate.transactedRent.bedsitter?.min ||
    20000;

  const [baseRent, setBaseRent] = useState<number>(defaultRent);
  const [serviceCharge, setServiceCharge] = useState<number>(selectedEstate.utilities.serviceChargeRange.min);
  const [monthlyKwh, setMonthlyKwh] = useState<number>(150);
  const [landlordRateKSh, setLandlordRateKSh] = useState<number>(selectedEstate.utilities.landlordResaleRateKSh);
  const [waterMarkupKSh, setWaterMarkupKSh] = useState<number>(selectedEstate.utilities.boreholeWater ? 800 : 1500);
  const [matatuFareOneway, setMatatuFareOneway] = useState<number>(selectedEstate.commute.matatuToCBD_peak.min);
  const [workdays, setWorkdays] = useState<number>(22);

  // When estate changes, update utility defaults
  const handleEstateChange = (slug: string) => {
    setSelectedEstateSlug(slug);
    const est = ESTATES.find((e) => e.slug === slug);
    if (est) {
      const newRent = est.transactedRent.oneBR?.min || est.transactedRent.bedsitter?.min || 20000;
      setBaseRent(newRent);
      setServiceCharge(est.utilities.serviceChargeRange.min);
      setLandlordRateKSh(est.utilities.landlordResaleRateKSh);
      setWaterMarkupKSh(est.utilities.boreholeWater ? 800 : 1500);
      setMatatuFareOneway(est.commute.matatuToCBD_peak.min);
    }
  };

  const kplcRate = selectedEstate.utilities.kplcRetailRateKSh;
  const tokenMarkupCost = Math.max(0, monthlyKwh * (landlordRateKSh - kplcRate));
  const commuteMonthly = matatuFareOneway * 2 * workdays;

  const totalMonthlyCost = calcTCT({
    baseRent,
    serviceCharge,
    monthlyKwh,
    landlordRateKSh,
    kplcRateKSh: kplcRate,
    monthlyWaterMarkupKSh: waterMarkupKSh,
    matatuFareOneway,
    workdaysPerMonth: workdays,
  });

  const overheadAboveRent = Math.max(0, totalMonthlyCost - baseRent);
  const overheadPercentage = baseRent > 0 ? Math.round((overheadAboveRent / baseRent) * 100) : 0;

  return (
    <div className='max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8'>
      {/* Controls Form */}
      <div className='lg:col-span-7 bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-5'>
        <div className='border-b border-gray-100 pb-3'>
          <h2 className='font-display font-bold text-xl text-gray-900 flex items-center gap-2'>
            <Calculator className='w-5 h-5 text-brand-green' />
            Total Cost of Tenancy (TCT) Calculator
          </h2>
          <p className='text-xs text-gray-500 mt-1'>
            Calculate your true monthly housing expense including hidden token resale, water markups & daily transit.
          </p>
        </div>

        <div>
          <label className='block text-xs font-semibold text-gray-700 mb-1'>Select Nairobi Estate</label>
          <select
            value={selectedEstateSlug}
            onChange={(e) => handleEstateChange(e.target.value)}
            className='w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800'
          >
            {ESTATES.map((e) => (
              <option key={e.slug} value={e.slug}>
                {e.name}
              </option>
            ))}
          </select>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div>
            <label className='block text-xs font-semibold text-gray-700 mb-1'>Base Monthly Rent (KSh)</label>
            <input
              type='number'
              value={baseRent || ''}
              onChange={(e) => setBaseRent(Number(e.target.value))}
              className='w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500'
            />
          </div>

          <div>
            <label className='block text-xs font-semibold text-gray-700 mb-1'>Service Charge (KSh/mo)</label>
            <input
              type='number'
              value={serviceCharge || ''}
              onChange={(e) => setServiceCharge(Number(e.target.value))}
              className='w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500'
            />
          </div>
        </div>

        {/* Electricity Section */}
        <div className='p-4 bg-amber-50/50 border border-amber-200/70 rounded-lg space-y-3'>
          <div className='flex items-center justify-between'>
            <span className='text-xs font-bold text-amber-950 flex items-center gap-1.5'>
              <Zap className='w-3.5 h-3.5 text-amber-700' />
              Electricity Token Sub-Metering
            </span>
            <span className='text-[10px] text-amber-800 font-medium'>
              KPLC Base: ~KSh {kplcRate}/kWh
            </span>
          </div>

          <div className='grid grid-cols-2 gap-3 text-xs'>
            <div>
              <label className='block text-gray-600 mb-1'>Monthly Usage: {monthlyKwh} kWh</label>
              <input
                type='range'
                min={50}
                max={350}
                step={25}
                value={monthlyKwh}
                onChange={(e) => setMonthlyKwh(Number(e.target.value))}
                className='w-full accent-amber-600'
              />
            </div>
            <div>
              <label className='block text-gray-600 mb-1'>Landlord Rate: KSh {landlordRateKSh}/unit</label>
              <input
                type='number'
                value={landlordRateKSh || ''}
                onChange={(e) => setLandlordRateKSh(Number(e.target.value))}
                className='w-full px-2.5 py-1.5 text-xs bg-white border border-amber-200 rounded'
              />
            </div>
          </div>
        </div>

        {/* Water Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div>
            <label className='block text-xs font-semibold text-gray-700 mb-1'>
              Water / Bowser Markups (KSh/mo)
            </label>
            <input
              type='number'
              value={waterMarkupKSh || ''}
              onChange={(e) => setWaterMarkupKSh(Number(e.target.value))}
              className='w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500'
            />
            <span className='text-[10px] text-gray-400'>Typical municipal surcharge + bowser backup</span>
          </div>

          <div>
            <label className='block text-xs font-semibold text-gray-700 mb-1'>
              CBD Matatu Fare (One-way, KSh)
            </label>
            <input
              type='number'
              value={matatuFareOneway || ''}
              onChange={(e) => setMatatuFareOneway(Number(e.target.value))}
              className='w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500'
            />
            <span className='text-[10px] text-gray-400'>Peak one-way commute rate</span>
          </div>
        </div>

        <div>
          <label className='block text-xs font-semibold text-gray-700 mb-1'>
            Monthly Office Workdays: {workdays} days
          </label>
          <input
            type='range'
            min={0}
            max={30}
            value={workdays}
            onChange={(e) => setWorkdays(Number(e.target.value))}
            className='w-full accent-emerald-600'
          />
        </div>
      </div>

      {/* Output Summary Card */}
      <div className='lg:col-span-5 bg-gradient-to-b from-emerald-900 to-emerald-950 text-white rounded-xl p-6 shadow-md flex flex-col justify-between space-y-6'>
        <div>
          <span className='text-xs uppercase tracking-wider text-emerald-300 font-semibold block mb-1'>
            Real Monthly Out-of-Pocket Cost
          </span>
          <div className='font-display font-black text-3xl md:text-4xl text-white'>
            {formatKSh(totalMonthlyCost)}
            <span className='text-xs font-normal text-emerald-200/80'>/mo</span>
          </div>

          {overheadPercentage > 0 && (
            <div className='mt-3 inline-flex items-center gap-1.5 bg-emerald-800/80 border border-emerald-700 px-3 py-1 rounded-full text-xs text-emerald-100 font-medium'>
              <ArrowUpRight className='w-3.5 h-3.5 text-amber-300' />
              <span><strong>+{overheadPercentage}%</strong> above nominal rent</span>
            </div>
          )}

          {/* Line Item Breakdown */}
          <div className='mt-6 pt-5 border-t border-emerald-800/80 space-y-2.5 text-xs'>
            <div className='flex justify-between text-emerald-100'>
              <span>Base Rent:</span>
              <span className='font-mono font-bold'>{formatKSh(baseRent)}</span>
            </div>
            <div className='flex justify-between text-emerald-200'>
              <span>Service Charge:</span>
              <span className='font-mono'>+ {formatKSh(serviceCharge)}</span>
            </div>
            <div className='flex justify-between text-emerald-200'>
              <span>Electricity Token Markup:</span>
              <span className='font-mono'>+ {formatKSh(tokenMarkupCost)}</span>
            </div>
            <div className='flex justify-between text-emerald-200'>
              <span>Water Markup & Surcharges:</span>
              <span className='font-mono'>+ {formatKSh(waterMarkupKSh)}</span>
            </div>
            <div className='flex justify-between text-emerald-200'>
              <span>Commute Transit ({workdays} days):</span>
              <span className='font-mono'>+ {formatKSh(commuteMonthly)}</span>
            </div>
          </div>
        </div>

        <div className='p-4 bg-emerald-800/50 rounded-lg border border-emerald-700/60 text-xs text-emerald-100/90 leading-relaxed'>
          <strong>Ground Reality Insight:</strong> When comparing apartments in Ruaka (lower rent + high commute + borehole) vs. Westlands (higher rent + lower commute), the Total Cost of Tenancy is often within 10% of each other. Always run the full numbers before signing.
        </div>
      </div>
    </div>
  );
};
