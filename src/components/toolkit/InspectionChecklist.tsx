'use client';

import React, { useState } from 'react';
import { DEFAULT_INSPECTION_ITEMS } from '@/data/inspectionItems';
import type { ConditionRating, InspectionItem } from '@/types';
import { Printer, ShieldCheck, Camera, CheckSquare } from 'lucide-react';

export const InspectionChecklist = () => {
  const [meta, setMeta] = useState({
    tenantName: '',
    landlordName: '',
    premises: '',
    moveInDate: '',
    moveOutDate: '',
    witnessName: '',
  });

  const [items, setItems] = useState<Record<string, { inCond: ConditionRating; outCond: ConditionRating; notes: string }>>(() => {
    const initial: Record<string, { inCond: ConditionRating; outCond: ConditionRating; notes: string }> = {};
    DEFAULT_INSPECTION_ITEMS.forEach((it) => {
      initial[it.id] = { inCond: 'good', outCond: 'good', notes: '' };
    });
    return initial;
  });

  const rooms: { key: InspectionItem['room']; title: string }[] = [
    { key: 'general', title: '1. General & Handover Items (Keys & Meters)' },
    { key: 'living-room', title: '2. Living Room' },
    { key: 'bedroom-1', title: '3. Master / Bedroom 1' },
    { key: 'bedroom-2', title: '4. Bedroom 2' },
    { key: 'kitchen', title: '5. Kitchen' },
    { key: 'bathroom', title: '6. Bathroom & Sanity Ware' },
    { key: 'exterior', title: '7. Exterior & Common Areas' },
  ];

  const updateItem = (id: string, field: 'inCond' | 'outCond' | 'notes', val: any) => {
    setItems((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: val,
      },
    }));
  };

  return (
    <div className='max-w-4xl mx-auto space-y-8 print:m-0 print:p-0 print:max-w-full'>
      {/* Top Banner (hidden on print) */}
      <div className='bg-emerald-50 border border-emerald-200 rounded-xl p-6 print:hidden flex flex-col md:flex-row items-center justify-between gap-4'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 rounded-full bg-emerald-700 text-white flex items-center justify-center shrink-0'>
            <CheckSquare className='w-5 h-5' />
          </div>
          <div>
            <h2 className='font-display font-bold text-gray-900 text-base'>
              Move-In / Move-Out Inspection Audit Kit
            </h2>
            <p className='text-xs text-emerald-800'>
              The definitive photographic audit form to defeat arbitrary repainting & fixture deposit deductions.
            </p>
          </div>
        </div>

        <button
          onClick={() => window.print()}
          className='px-5 py-2.5 bg-brand-green text-white rounded-lg text-xs font-bold hover:bg-brand-green-light inline-flex items-center gap-2 shadow-sm transition-all'
        >
          <Printer className='w-4 h-4' />
          <span>Print / Save as PDF</span>
        </button>
      </div>

      {/* Printable Document Container */}
      <div className='bg-white border border-gray-300 rounded-xl p-8 md:p-12 shadow-sm print:border-none print:shadow-none print:p-2'>
        <div className='text-center border-b border-gray-300 pb-6 mb-6'>
          <h1 className='font-display font-extrabold text-xl md:text-2xl text-gray-950 uppercase tracking-wide'>
            Premises Condition Inspection Report
          </h1>
          <p className='text-xs text-gray-600 mt-1'>
            Mutual Move-In & Move-Out Handover Audit Schedule · Law of Contract Act (Cap 23)
          </p>
        </div>

        {/* Metadata Inputs */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-xs'>
          <div>
            <label className='block font-semibold text-gray-700 mb-1'>Tenant Full Name:</label>
            <input
              type='text'
              value={meta.tenantName}
              onChange={(e) => setMeta({ ...meta, tenantName: e.target.value })}
              placeholder='e.g., Janet Achieng'
              className='w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded print:bg-transparent print:border-b print:border-t-0 print:border-x-0'
            />
          </div>

          <div>
            <label className='block font-semibold text-gray-700 mb-1'>Landlord / Agent:</label>
            <input
              type='text'
              value={meta.landlordName}
              onChange={(e) => setMeta({ ...meta, landlordName: e.target.value })}
              placeholder='e.g., Prime Homes Agency'
              className='w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded print:bg-transparent print:border-b print:border-t-0 print:border-x-0'
            />
          </div>

          <div>
            <label className='block font-semibold text-gray-700 mb-1'>Premises & Unit No:</label>
            <input
              type='text'
              value={meta.premises}
              onChange={(e) => setMeta({ ...meta, premises: e.target.value })}
              placeholder='e.g., Flat 3C, Palm Courts, Kilimani'
              className='w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded print:bg-transparent print:border-b print:border-t-0 print:border-x-0'
            />
          </div>

          <div>
            <label className='block font-semibold text-gray-700 mb-1'>Move-In Audit Date:</label>
            <input
              type='date'
              value={meta.moveInDate}
              onChange={(e) => setMeta({ ...meta, moveInDate: e.target.value })}
              className='w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded print:bg-transparent print:border-b print:border-t-0 print:border-x-0'
            />
          </div>

          <div>
            <label className='block font-semibold text-gray-700 mb-1'>Move-Out Handover Date:</label>
            <input
              type='date'
              value={meta.moveOutDate}
              onChange={(e) => setMeta({ ...meta, moveOutDate: e.target.value })}
              className='w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded print:bg-transparent print:border-b print:border-t-0 print:border-x-0'
            />
          </div>

          <div>
            <label className='block font-semibold text-gray-700 mb-1'>Independent Witness Name:</label>
            <input
              type='text'
              value={meta.witnessName}
              onChange={(e) => setMeta({ ...meta, witnessName: e.target.value })}
              placeholder='e.g., Caretaker / Neighbor'
              className='w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded print:bg-transparent print:border-b print:border-t-0 print:border-x-0'
            />
          </div>
        </div>

        {/* Tip on photos */}
        <div className='p-3 bg-amber-50 border border-amber-200 rounded text-xs text-amber-900 mb-8 print:hidden flex items-center gap-2'>
          <Camera className='w-4 h-4 text-amber-700 shrink-0' />
          <span>
            <strong>Tenant Best Practice:</strong> Take date-stamped photos or videos of every item listed below on the day you collect keys, and back them up to Google Drive.
          </span>
        </div>

        {/* Room by Room Inspection Tables */}
        <div className='space-y-8'>
          {rooms.map((room) => {
            const roomItems = DEFAULT_INSPECTION_ITEMS.filter((i) => i.room === room.key);
            if (roomItems.length === 0) return null;

            return (
              <div key={room.key} className='border border-gray-300 rounded-lg overflow-hidden'>
                <div className='bg-gray-100 px-4 py-2.5 font-display font-bold text-xs uppercase tracking-wide text-gray-800'>
                  {room.title}
                </div>

                <div className='divide-y divide-gray-200 text-xs'>
                  {roomItems.map((it) => {
                    const current = items[it.id] || { inCond: 'good', outCond: 'good', notes: '' };

                    return (
                      <div key={it.id} className='p-3 grid grid-cols-1 md:grid-cols-12 gap-2 items-center'>
                        <div className='md:col-span-4'>
                          <p className='font-semibold text-gray-900'>{it.itemLabel}</p>
                          <p className='text-[10px] text-gray-500 italic'>{it.standardDescription}</p>
                        </div>

                        {/* Move-in Rating */}
                        <div className='md:col-span-3 flex items-center gap-1.5'>
                          <span className='font-semibold text-[10px] text-gray-500 mr-1'>Move-In:</span>
                          {(['good', 'fair', 'poor'] as ConditionRating[]).map((rating) => (
                            <label key={rating} className='inline-flex items-center gap-1 text-[11px] capitalize cursor-pointer'>
                              <input
                                type='radio'
                                name={`in-${it.id}`}
                                checked={current.inCond === rating}
                                onChange={() => updateItem(it.id, 'inCond', rating)}
                                className='text-emerald-600 focus:ring-emerald-500'
                              />
                              <span>{rating}</span>
                            </label>
                          ))}
                        </div>

                        {/* Move-out Rating */}
                        <div className='md:col-span-3 flex items-center gap-1.5'>
                          <span className='font-semibold text-[10px] text-gray-500 mr-1'>Move-Out:</span>
                          {(['good', 'fair', 'poor'] as ConditionRating[]).map((rating) => (
                            <label key={rating} className='inline-flex items-center gap-1 text-[11px] capitalize cursor-pointer'>
                              <input
                                type='radio'
                                name={`out-${it.id}`}
                                checked={current.outCond === rating}
                                onChange={() => updateItem(it.id, 'outCond', rating)}
                                className='text-emerald-600 focus:ring-emerald-500'
                              />
                              <span>{rating}</span>
                            </label>
                          ))}
                        </div>

                        {/* Notes */}
                        <div className='md:col-span-2'>
                          <input
                            type='text'
                            value={current.notes}
                            onChange={(e) => updateItem(it.id, 'notes', e.target.value)}
                            placeholder='Notes / cracks...'
                            className='w-full px-2 py-1 text-[11px] bg-gray-50 border border-gray-200 rounded print:border-b print:bg-transparent'
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legal Signatures Section */}
        <div className='mt-12 pt-8 border-t border-gray-300 grid grid-cols-3 gap-6 text-xs text-gray-800'>
          <div className='space-y-4'>
            <p className='font-bold uppercase'>Tenant Acknowledgment:</p>
            <div className='h-12 border-b border-gray-400' />
            <p>Signed: ___________________________</p>
            <p>Date: _____________________________</p>
          </div>

          <div className='space-y-4'>
            <p className='font-bold uppercase'>Landlord / Agent Handover:</p>
            <div className='h-12 border-b border-gray-400' />
            <p>Signed: ___________________________</p>
            <p>Date: _____________________________</p>
          </div>

          <div className='space-y-4'>
            <p className='font-bold uppercase'>Independent Witness / Caretaker:</p>
            <div className='h-12 border-b border-gray-400' />
            <p>Signed: ___________________________</p>
            <p>Date: _____________________________</p>
          </div>
        </div>

        <div className='mt-8 text-[10px] text-gray-400 text-center'>
          Kodi Ya Kweli Civic Tenant Toolkit · Preserved for evidence under the Kenya Evidence Act (Cap 80)
        </div>
      </div>
    </div>
  );
};
