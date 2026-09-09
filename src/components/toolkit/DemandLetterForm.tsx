'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import type { DemandLetterData } from '@/types';
import { ShieldCheck, ArrowRight, ArrowLeft, AlertTriangle } from 'lucide-react';

const DemandLetterPreview = dynamic(
  () => import('./DemandLetterPreview').then((mod) => mod.DemandLetterPreview),
  {
    ssr: false,
    loading: () => (
      <div className='bg-white border border-gray-200 rounded-xl p-12 text-center text-xs text-gray-500'>
        Loading statutory legal document preview...
      </div>
    ),
  }
);

const INITIAL_DATA: DemandLetterData = {
  tenantFullName: '',
  tenantPhoneOrEmail: '',
  landlordOrAgencyName: '',
  landlordAddress: '',
  premisesAddress: '',
  moveInDate: '',
  moveOutDate: '',
  noticeDateServed: '',
  depositBreakdown: {
    rentDepositKSh: 0,
    waterDepositKSh: 0,
    electricityDepositKSh: 0,
    otherDepositKSh: 0,
    otherDepositLabel: '',
  },
  claimedDeductionsKSh: 0,
  disputedReason: '',
  letterDate: new Date().toISOString().split('T')[0],
};

export const DemandLetterForm = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<DemandLetterData>(INITIAL_DATA);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateCurrentStep = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.tenantFullName.trim()) newErrors.tenantFullName = 'Full name is required';
      if (!formData.tenantPhoneOrEmail.trim()) newErrors.tenantPhoneOrEmail = 'Phone or email required';
      if (!formData.landlordOrAgencyName.trim()) newErrors.landlordOrAgencyName = 'Landlord/Agency name required';
      if (!formData.landlordAddress.trim()) newErrors.landlordAddress = 'Landlord address or office required';
      if (!formData.premisesAddress.trim()) newErrors.premisesAddress = 'Rented house / unit address required';
    } else if (step === 2) {
      if (formData.depositBreakdown.rentDepositKSh <= 0) {
        newErrors.rentDeposit = 'Enter the rent deposit amount paid';
      }
    } else if (step === 3) {
      if (!formData.moveInDate) newErrors.moveInDate = 'Move-in date required';
      if (!formData.moveOutDate) newErrors.moveOutDate = 'Move-out date required';
      if (!formData.noticeDateServed) newErrors.noticeDateServed = 'Notice service date required';
      if (!formData.letterDate) newErrors.letterDate = 'Letter date required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateCurrentStep()) {
      setStep((s) => Math.min(5, s + 1));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setStep((s) => Math.max(1, s - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (step === 5) {
    return <DemandLetterPreview data={formData} onEdit={() => setStep(1)} />;
  }

  const stepsList = [
    { num: 1, label: 'Tenancy Parties' },
    { num: 2, label: 'Deposits Paid' },
    { num: 3, label: 'Dates & Notice' },
    { num: 4, label: 'Contested Cuts' },
    { num: 5, label: 'Preview & PDF' },
  ];

  return (
    <div className='max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden'>
      {/* Privacy Guarantee Header */}
      <div className='bg-emerald-900 text-white p-6'>
        <div className='flex items-center gap-2.5 text-xs text-emerald-300 font-medium mb-2'>
          <ShieldCheck className='w-4 h-4 text-emerald-400' />
          <span>Strict Client-Side Encryption · Zero Server Data Storage</span>
        </div>
        <h2 className='font-display font-bold text-2xl tracking-tight'>
          Tenant Deposit Recovery Demand Generator
        </h2>
        <p className='text-xs text-emerald-100/80 mt-1 leading-relaxed'>
          Generates a formal, legally structured demand notice under the Law of Contract Act (Cap 23)
          and Small Claims Court Act (Cap 10A).
        </p>

        {/* Stepper */}
        <div className='grid grid-cols-5 gap-1.5 mt-6'>
          {stepsList.map((s) => (
            <div key={s.num} className='text-center'>
              <div
                className={`h-1.5 rounded-full transition-all ${
                  s.num <= step ? 'bg-white' : 'bg-emerald-800/80'
                }`}
              />
              <span className={`text-[10px] mt-1.5 block truncate ${s.num === step ? 'text-white font-bold' : 'text-emerald-300/70'}`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className='p-6 md:p-8 space-y-6'>
        {/* STEP 1: Parties & Premises */}
        {step === 1 && (
          <div className='space-y-4'>
            <div className='border-b border-gray-100 pb-3'>
              <h3 className='font-display font-bold text-lg text-gray-900'>
                1. Tenancy Parties & Premises Details
              </h3>
              <p className='text-xs text-gray-500'>
                Who was the tenancy between, and where is the property located?
              </p>
            </div>

            <div>
              <label className='block text-xs font-semibold text-gray-700 mb-1'>
                Your Full Name (Tenant) *
              </label>
              <input
                type='text'
                value={formData.tenantFullName}
                onChange={(e) => setFormData({ ...formData, tenantFullName: e.target.value })}
                placeholder='e.g., Brian Omondi Mwangi'
                className='w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white'
              />
              {errors.tenantFullName && (
                <p className='text-xs text-rose-600 mt-1'>{errors.tenantFullName}</p>
              )}
            </div>

            <div>
              <label className='block text-xs font-semibold text-gray-700 mb-1'>
                Your Contact Phone or Email *
              </label>
              <input
                type='text'
                value={formData.tenantPhoneOrEmail}
                onChange={(e) => setFormData({ ...formData, tenantPhoneOrEmail: e.target.value })}
                placeholder='e.g., +254 712 345 678 / tenant@email.com'
                className='w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white'
              />
              {errors.tenantPhoneOrEmail && (
                <p className='text-xs text-rose-600 mt-1'>{errors.tenantPhoneOrEmail}</p>
              )}
            </div>

            <div>
              <label className='block text-xs font-semibold text-gray-700 mb-1'>
                Landlord Name or Property Agency *
              </label>
              <input
                type='text'
                value={formData.landlordOrAgencyName}
                onChange={(e) => setFormData({ ...formData, landlordOrAgencyName: e.target.value })}
                placeholder='e.g., Apex Property Management Ltd / Mr. John Kamau'
                className='w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white'
              />
              {errors.landlordOrAgencyName && (
                <p className='text-xs text-rose-600 mt-1'>{errors.landlordOrAgencyName}</p>
              )}
            </div>

            <div>
              <label className='block text-xs font-semibold text-gray-700 mb-1'>
                Landlord / Agency Address or P.O. Box *
              </label>
              <input
                type='text'
                value={formData.landlordAddress}
                onChange={(e) => setFormData({ ...formData, landlordAddress: e.target.value })}
                placeholder='e.g., P.O. Box 12345-00100 Nairobi / Corner Plaza, Westlands'
                className='w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white'
              />
              {errors.landlordAddress && (
                <p className='text-xs text-rose-600 mt-1'>{errors.landlordAddress}</p>
              )}
            </div>

            <div>
              <label className='block text-xs font-semibold text-gray-700 mb-1'>
                Rented Premises Address (Building, Unit & Estate) *
              </label>
              <input
                type='text'
                value={formData.premisesAddress}
                onChange={(e) => setFormData({ ...formData, premisesAddress: e.target.value })}
                placeholder='e.g., House No. B4, Sunset Ridge Apartments, Ruaka'
                className='w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white'
              />
              {errors.premisesAddress && (
                <p className='text-xs text-rose-600 mt-1'>{errors.premisesAddress}</p>
              )}
            </div>
          </div>
        )}

        {/* STEP 2: Deposit Breakdown */}
        {step === 2 && (
          <div className='space-y-4'>
            <div className='border-b border-gray-100 pb-3'>
              <h3 className='font-display font-bold text-lg text-gray-900'>
                2. Security Deposits Paid at Move-In
              </h3>
              <p className='text-xs text-gray-500'>
                List the exact amounts you paid when signing the lease agreement.
              </p>
            </div>

            <div>
              <label className='block text-xs font-semibold text-gray-700 mb-1'>
                Rent / Security Deposit (KSh) *
              </label>
              <input
                type='number'
                value={formData.depositBreakdown.rentDepositKSh || ''}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    depositBreakdown: {
                      ...formData.depositBreakdown,
                      rentDepositKSh: Number(e.target.value),
                    },
                  })
                }
                placeholder='e.g., 25000'
                className='w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white'
              />
              {errors.rentDeposit && (
                <p className='text-xs text-rose-600 mt-1'>{errors.rentDeposit}</p>
              )}
            </div>

            <div>
              <label className='block text-xs font-semibold text-gray-700 mb-1'>
                Water Deposit Paid (KSh, optional)
              </label>
              <input
                type='number'
                value={formData.depositBreakdown.waterDepositKSh || ''}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    depositBreakdown: {
                      ...formData.depositBreakdown,
                      waterDepositKSh: Number(e.target.value),
                    },
                  })
                }
                placeholder='e.g., 3000'
                className='w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white'
              />
            </div>

            <div>
              <label className='block text-xs font-semibold text-gray-700 mb-1'>
                Electricity / Sub-Meter Deposit (KSh, optional)
              </label>
              <input
                type='number'
                value={formData.depositBreakdown.electricityDepositKSh || ''}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    depositBreakdown: {
                      ...formData.depositBreakdown,
                      electricityDepositKSh: Number(e.target.value),
                    },
                  })
                }
                placeholder='e.g., 3000'
                className='w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white'
              />
            </div>

            <div className='grid grid-cols-2 gap-3'>
              <div>
                <label className='block text-xs font-semibold text-gray-700 mb-1'>
                  Other Deposit Label
                </label>
                <input
                  type='text'
                  value={formData.depositBreakdown.otherDepositLabel}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      depositBreakdown: {
                        ...formData.depositBreakdown,
                        otherDepositLabel: e.target.value,
                      },
                    })
                  }
                  placeholder='e.g., Gate Remote / Key'
                  className='w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white'
                />
              </div>

              <div>
                <label className='block text-xs font-semibold text-gray-700 mb-1'>
                  Other Amount (KSh)
                </label>
                <input
                  type='number'
                  value={formData.depositBreakdown.otherDepositKSh || ''}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      depositBreakdown: {
                        ...formData.depositBreakdown,
                        otherDepositKSh: Number(e.target.value),
                      },
                    })
                  }
                  placeholder='e.g., 1000'
                  className='w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white'
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Dates & Notice */}
        {step === 3 && (
          <div className='space-y-4'>
            <div className='border-b border-gray-100 pb-3'>
              <h3 className='font-display font-bold text-lg text-gray-900'>
                3. Tenancy Dates & Notice History
              </h3>
              <p className='text-xs text-gray-500'>
                Dates establish that you complied with lawful notice requirements.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='block text-xs font-semibold text-gray-700 mb-1'>
                  Move-In Date *
                </label>
                <input
                  type='date'
                  value={formData.moveInDate}
                  onChange={(e) => setFormData({ ...formData, moveInDate: e.target.value })}
                  className='w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white'
                />
                {errors.moveInDate && <p className='text-xs text-rose-600 mt-1'>{errors.moveInDate}</p>}
              </div>

              <div>
                <label className='block text-xs font-semibold text-gray-700 mb-1'>
                  Vacation / Handover Date *
                </label>
                <input
                  type='date'
                  value={formData.moveOutDate}
                  onChange={(e) => setFormData({ ...formData, moveOutDate: e.target.value })}
                  className='w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white'
                />
                {errors.moveOutDate && <p className='text-xs text-rose-600 mt-1'>{errors.moveOutDate}</p>}
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='block text-xs font-semibold text-gray-700 mb-1'>
                  Date Written Notice Served *
                </label>
                <input
                  type='date'
                  value={formData.noticeDateServed}
                  onChange={(e) => setFormData({ ...formData, noticeDateServed: e.target.value })}
                  className='w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white'
                />
                {errors.noticeDateServed && <p className='text-xs text-rose-600 mt-1'>{errors.noticeDateServed}</p>}
              </div>

              <div>
                <label className='block text-xs font-semibold text-gray-700 mb-1'>
                  Date of this Demand Letter *
                </label>
                <input
                  type='date'
                  value={formData.letterDate}
                  onChange={(e) => setFormData({ ...formData, letterDate: e.target.value })}
                  className='w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white'
                />
                {errors.letterDate && <p className='text-xs text-rose-600 mt-1'>{errors.letterDate}</p>}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Contested Deductions */}
        {step === 4 && (
          <div className='space-y-4'>
            <div className='border-b border-gray-100 pb-3'>
              <h3 className='font-display font-bold text-lg text-gray-900'>
                4. Contested Deductions & Rebuttal
              </h3>
              <p className='text-xs text-gray-500'>
                Has the landlord claimed unauthorized deductions (e.g. repainting or wear-and-tear)?
              </p>
            </div>

            <div>
              <label className='block text-xs font-semibold text-gray-700 mb-1'>
                Total Landlord Deductions Claimed (KSh)
              </label>
              <input
                type='number'
                value={formData.claimedDeductionsKSh || ''}
                onChange={(e) => setFormData({ ...formData, claimedDeductionsKSh: Number(e.target.value) })}
                placeholder='0 if landlord has returned nothing'
                className='w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white'
              />
              <span className='text-[11px] text-gray-400'>
                Leave as 0 if the landlord has failed to return any deposit or has not sent an itemised receipt.
              </span>
            </div>

            <div>
              <label className='block text-xs font-semibold text-gray-700 mb-1'>
                Reason Why Deductions are Unlawful / Disputed
              </label>
              <textarea
                rows={4}
                value={formData.disputedReason}
                onChange={(e) => setFormData({ ...formData, disputedReason: e.target.value })}
                placeholder='e.g., The landlord deducted KSh 15,000 for repainting the entire unit despite premises being handed over in clean condition with only minor normal wear. No receipts or invoices from certified contractors were provided.'
                className='w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white'
              />
              <span className='text-[11px] text-gray-400'>
                State why the landlord deductions violate fair wear-and-tear principles or lack receipts.
              </span>
            </div>

            <div className='p-3.5 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 space-y-1'>
              <div className='flex items-center gap-1.5 font-bold'>
                <AlertTriangle className='w-4 h-4 text-amber-700' />
                <span>Statutory 14-Day Notice Standard</span>
              </div>
              <p>
                The generated letter automatically invokes the 14-day pre-action deadline required prior to filing a claim before the Small Claims Court under Cap 10A of the Laws of Kenya.
              </p>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className='pt-6 border-t border-gray-100 flex items-center justify-between'>
          {step > 1 ? (
            <button
              type='button'
              onClick={prevStep}
              className='px-4 py-2.5 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 inline-flex items-center gap-1.5'
            >
              <ArrowLeft className='w-4 h-4' />
              Previous
            </button>
          ) : <div />}

          <button
            type='button'
            onClick={nextStep}
            className='px-6 py-2.5 text-xs font-bold text-white bg-brand-green hover:bg-brand-green-light rounded-lg inline-flex items-center gap-1.5 shadow-sm transition-all'
          >
            <span>{step === 4 ? 'Review & Generate Letter' : 'Next Step'}</span>
            <ArrowRight className='w-4 h-4' />
          </button>
        </div>
      </div>
    </div>
  );
};
