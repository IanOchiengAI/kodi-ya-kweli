'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import type { DemandLetterData } from '@/types';
import { DemandLetterPDFDocument } from '@/lib/pdf';
import { formatKSh, formatDateKE, totalDepositFromForm } from '@/lib/utils';
import {
  LETTER_HEADING,
  STATUTORY_BASIS,
  SMALL_CLAIMS_WARNING,
  EVIDENCE_CLAUSE,
  WEAR_AND_TEAR_CLAUSE,
  LEGAL_DISCLAIMER,
} from '@/data/legalTemplates';
import { Download, Printer, CheckCircle, ShieldCheck, Copy, Share2 } from 'lucide-react';

const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink),
  {
    ssr: false,
    loading: () => (
      <span className='px-4 py-2 text-xs font-semibold text-white bg-brand-green/80 rounded-lg inline-flex items-center gap-1.5 shadow-sm'>
        Initializing PDF engine...
      </span>
    ),
  }
);

export const DemandLetterPreview: React.FC<{
  data: DemandLetterData;
  onEdit: () => void;
}> = ({ data, onEdit }) => {
  const [isClient, setIsClient] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const totalDeposit = totalDepositFromForm(data.depositBreakdown);
  const deductions = data.claimedDeductionsKSh || 0;
  const netDue = Math.max(0, totalDeposit - deductions);

  const copyToClipboard = () => {
    const text = `
Date: ${formatDateKE(data.letterDate)}

TO:
${data.landlordOrAgencyName}
${data.landlordAddress}
Re: Tenancy at ${data.premisesAddress}

${LETTER_HEADING}

Dear Sir/Madam,

I write in formal reference to the residential tenancy of the above-referenced premises occupied by myself from ${formatDateKE(data.moveInDate)} until lawful handover of vacant possession on ${formatDateKE(data.moveOutDate)}, following written notice delivered on ${formatDateKE(data.noticeDateServed)}.

${STATUTORY_BASIS}

FINANCIAL RECONCILIATION:
- Rent Security Deposit: ${formatKSh(data.depositBreakdown.rentDepositKSh)}
- Water Connection Deposit: ${formatKSh(data.depositBreakdown.waterDepositKSh)}
- Electricity / Sub-meter Deposit: ${formatKSh(data.depositBreakdown.electricityDepositKSh)}
${data.depositBreakdown.otherDepositKSh > 0 ? `- ${data.depositBreakdown.otherDepositLabel || 'Other Deposit'}: ${formatKSh(data.depositBreakdown.otherDepositKSh)}` : ''}
Total Deposits Paid: ${formatKSh(totalDeposit)}
${deductions > 0 ? `Contested Deductions: - ${formatKSh(deductions)}` : ''}
NET REFUND DEMANDED: ${formatKSh(netDue)}

${data.disputedReason ? `Rebuttal of Contested Deductions:\n${data.disputedReason}\n` : ''}
${WEAR_AND_TEAR_CLAUSE}

${EVIDENCE_CLAUSE}

${SMALL_CLAIMS_WARNING}

Yours faithfully,

${data.tenantFullName}
${data.tenantPhoneOrEmail}

---
${LEGAL_DISCLAIMER}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className='space-y-6'>
      {/* Top action bar */}
      <div className='bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0'>
            <ShieldCheck className='w-5 h-5' />
          </div>
          <div>
            <h3 className='font-display font-bold text-gray-900 text-sm'>
              Statutory Demand Notice Ready
            </h3>
            <p className='text-xs text-emerald-800'>
              Zero-server generation · 100% private to your browser · Ready for formal service
            </p>
          </div>
        </div>

        <div className='flex flex-wrap items-center gap-2 w-full md:w-auto'>
          <button
            onClick={onEdit}
            className='px-3 py-2 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50'
          >
            Edit Details
          </button>

          <button
            onClick={copyToClipboard}
            className='px-3 py-2 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 inline-flex items-center gap-1.5'
          >
            {copied ? <CheckCircle className='w-3.5 h-3.5 text-emerald-600' /> : <Copy className='w-3.5 h-3.5' />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Text'}</span>
          </button>

          <button
            onClick={() => window.print()}
            className='px-3 py-2 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 inline-flex items-center gap-1.5'
          >
            <Printer className='w-3.5 h-3.5' />
            <span>Print</span>
          </button>

          {isClient && (
            <PDFDownloadLink
              document={<DemandLetterPDFDocument data={data} />}
              fileName={`Demand_Notice_${data.tenantFullName.replace(/\s+/g, '_')}.pdf`}
              className='px-4 py-2 text-xs font-semibold text-white bg-brand-green hover:bg-brand-green-light rounded-lg inline-flex items-center gap-1.5 shadow-sm transition-all'
            >
              <Download className='w-3.5 h-3.5' />
              <span>Download Official PDF</span>
            </PDFDownloadLink>
          )}

          <a
            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
              'Habari! If your landlord is delaying your deposit refund or making unfair deductions, generate a formal Kenyan legal demand letter for free here: https://kodi-ya-kweli.vercel.app/toolkit/deposit-demand'
            )}`}
            target='_blank'
            rel='noopener noreferrer'
            className='px-3 py-2 text-xs font-semibold text-emerald-800 bg-emerald-100/90 border border-emerald-300 rounded-lg hover:bg-emerald-200 inline-flex items-center gap-1.5 transition-all'
          >
            <Share2 className='w-3.5 h-3.5 text-emerald-700' />
            <span>Share on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Styled A4 Document Page Preview */}
      <div className='bg-white border border-gray-300 shadow-lg rounded-sm max-w-3xl mx-auto p-8 md:p-14 text-gray-900 font-serif leading-relaxed text-sm'>
        {/* Top Header */}
        <div className='flex flex-col md:flex-row justify-between items-start gap-4 pb-6 border-b border-gray-100 font-sans text-xs'>
          <div>
            <p className='font-bold text-gray-950'>{data.tenantFullName}</p>
            <p className='text-gray-600'>{data.tenantPhoneOrEmail}</p>
            <p className='text-gray-500'>Former Tenant: {data.premisesAddress}</p>
          </div>
          <div className='md:text-right text-gray-600'>
            <p><strong>Date:</strong> {formatDateKE(data.letterDate)}</p>
            <p className='text-emerald-700 font-semibold'>FORMAL PRE-ACTION NOTICE</p>
          </div>
        </div>

        {/* Recipient */}
        <div className='my-6 font-sans text-xs space-y-0.5 text-gray-800'>
          <p className='font-bold text-gray-900'>TO:</p>
          <p className='font-bold text-base text-gray-950'>{data.landlordOrAgencyName}</p>
          <p className='text-gray-600'>{data.landlordAddress}</p>
          <p className='text-gray-500'>Re: Residential Tenancy at {data.premisesAddress}</p>
        </div>

        {/* Title */}
        <div className='text-center my-6 py-2 border-y border-gray-200'>
          <h2 className='font-sans font-extrabold text-sm md:text-base tracking-wide uppercase text-gray-950 underline underline-offset-4'>
            {LETTER_HEADING}
          </h2>
        </div>

        <div className='space-y-4 text-xs md:text-sm text-justify'>
          <p>Dear Sir/Madam,</p>

          <p>
            I write in formal reference to the residential tenancy of the above-referenced premises occupied by myself from{' '}
            <strong className='font-semibold'>{formatDateKE(data.moveInDate)}</strong> until lawful handover of vacant possession on{' '}
            <strong className='font-semibold'>{formatDateKE(data.moveOutDate)}</strong>, following written notice delivered on{' '}
            <strong className='font-semibold'>{formatDateKE(data.noticeDateServed)}</strong>.
          </p>

          <p>{STATUTORY_BASIS}</p>

          {/* Breakdown Table */}
          <div className='my-4 font-sans text-xs border border-gray-300 rounded overflow-hidden'>
            <table className='w-full text-left'>
              <thead className='bg-gray-100 border-b border-gray-300 font-bold text-gray-800'>
                <tr>
                  <th className='py-2 px-3'>Deposit Category / Line Item</th>
                  <th className='py-2 px-3 text-right'>Amount (KSh)</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200'>
                <tr>
                  <td className='py-1.5 px-3'>Security / Rent Deposit</td>
                  <td className='py-1.5 px-3 text-right font-mono'>{formatKSh(data.depositBreakdown.rentDepositKSh)}</td>
                </tr>
                {data.depositBreakdown.waterDepositKSh > 0 && (
                  <tr>
                    <td className='py-1.5 px-3'>Water Connection Deposit</td>
                    <td className='py-1.5 px-3 text-right font-mono'>{formatKSh(data.depositBreakdown.waterDepositKSh)}</td>
                  </tr>
                )}
                {data.depositBreakdown.electricityDepositKSh > 0 && (
                  <tr>
                    <td className='py-1.5 px-3'>Electricity / Sub-Meter Deposit</td>
                    <td className='py-1.5 px-3 text-right font-mono'>{formatKSh(data.depositBreakdown.electricityDepositKSh)}</td>
                  </tr>
                )}
                {data.depositBreakdown.otherDepositKSh > 0 && (
                  <tr>
                    <td className='py-1.5 px-3'>{data.depositBreakdown.otherDepositLabel || 'Other Deposit'}</td>
                    <td className='py-1.5 px-3 text-right font-mono'>{formatKSh(data.depositBreakdown.otherDepositKSh)}</td>
                  </tr>
                )}
                <tr className='bg-gray-50 font-bold'>
                  <td className='py-2 px-3'>Total Deposits Paid</td>
                  <td className='py-2 px-3 text-right font-mono'>{formatKSh(totalDeposit)}</td>
                </tr>
                {deductions > 0 && (
                  <tr className='text-rose-700'>
                    <td className='py-1.5 px-3'>Contested Landlord Deductions</td>
                    <td className='py-1.5 px-3 text-right font-mono'>- {formatKSh(deductions)}</td>
                  </tr>
                )}
                <tr className='bg-emerald-50 text-emerald-950 font-extrabold text-sm'>
                  <td className='py-2.5 px-3'>NET REFUND DEMANDED</td>
                  <td className='py-2.5 px-3 text-right font-mono'>{formatKSh(netDue)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {data.disputedReason && (
            <div className='bg-gray-50 p-3 rounded border border-gray-200'>
              <strong className='font-semibold block mb-1 font-sans text-xs uppercase tracking-wide text-gray-700'>
                Rebuttal of Contested Deductions:
              </strong>
              <p className='italic text-gray-800'>{data.disputedReason}</p>
            </div>
          )}

          <p>{WEAR_AND_TEAR_CLAUSE}</p>
          <p>{EVIDENCE_CLAUSE}</p>
          <p className='font-semibold text-gray-950'>{SMALL_CLAIMS_WARNING}</p>

          {/* Signature */}
          <div className='pt-8 space-y-1 font-sans text-xs'>
            <p>Yours faithfully,</p>
            <div className='h-10 border-b border-gray-300 w-48' />
            <p className='font-bold pt-1 text-gray-950'>{data.tenantFullName}</p>
            <p className='text-gray-600'>{data.tenantPhoneOrEmail}</p>
          </div>
        </div>

        <div className='mt-12 pt-4 border-t border-gray-200 text-[10px] text-gray-500 font-sans text-center'>
          {LEGAL_DISCLAIMER}
        </div>
      </div>
    </div>
  );
};
