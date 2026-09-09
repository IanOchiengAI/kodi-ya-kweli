import React from 'react';
import type { Metadata } from 'next';
import { InspectionChecklist } from '@/components/toolkit/InspectionChecklist';
import { ClipboardCheck, Camera, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Move-In / Move-Out Condition Inspection Schedule',
  description:
    'Printable 28-point residential tenancy condition inspection audit for Nairobi apartments. Locks in baseline condition evidence to protect security deposits.',
  openGraph: {
    title: 'Move-In Inspection Audit Kit | Kodi Ya Kweli',
    description: 'Protect your rental deposit with a signed, room-by-room photographic inspection audit.',
  },
};

export default function InspectionChecklistPage() {
  return (
    <div className='max-w-5xl mx-auto px-4 py-10 space-y-8'>
      <div className='text-center max-w-2xl mx-auto space-y-2 print:hidden'>
        <span className='text-xs font-bold text-brand-green uppercase tracking-wider'>
          Evidence Preservation Instrument
        </span>
        <h1 className='font-display font-extrabold text-3xl md:text-4xl text-gray-950'>
          Move-In / Move-Out Condition Audit Schedule
        </h1>
        <p className='text-xs md:text-sm text-gray-600 leading-relaxed'>
          Under the Evidence Act (Cap 80), contemporaneous documentary and photographic records are the highest
          standard of proof. Complete this audit on the day you take keys, invite the caretaker to countersign, and keep a signed copy.
        </p>
      </div>

      <InspectionChecklist />
    </div>
  );
}
