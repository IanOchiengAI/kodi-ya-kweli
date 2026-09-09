import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getEstateBySlug, getAllEstateSlugs, ESTATES } from '@/data/estates';
import { EstateHero } from '@/components/estates/EstateHero';
import { RentComparisonTable } from '@/components/estates/RentComparisonTable';
import { UtilityCostBreakdown } from '@/components/estates/UtilityCostBreakdown';
import Link from 'next/link';
import { Scale, ArrowRight, Lightbulb, ShieldAlert } from 'lucide-react';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllEstateSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const estate = getEstateBySlug(params.slug);
  if (!estate) return { title: 'Estate Not Found' };

  const transacted = estate.transactedRent;
  const lowestMin = Math.min(
    ...[transacted.bedsitter, transacted.oneBR, transacted.twoBR, transacted.threeBR]
      .filter(Boolean)
      .map((b) => b!.min)
  );
  const highestMax = Math.max(
    ...[transacted.bedsitter, transacted.oneBR, transacted.twoBR, transacted.threeBR]
      .filter(Boolean)
      .map((b) => b!.max)
  );

  return {
    title: `${estate.name} Rent Prices 2026 — Real Rates vs. Asking Price`,
    description: `Real transacted rent in ${estate.name}: KSh ${lowestMin.toLocaleString('en-KE')} – KSh ${highestMax.toLocaleString('en-KE')}/month. Token resale rates, water rationing schedules, and negotiation advice backed by field research.`,
    openGraph: {
      title: `${estate.name} Rent Prices 2026 | Kodi Ya Kweli`,
      description: estate.tagline,
      type: 'article',
    },
  };
}

export default function EstatePage({ params }: Props) {
  const estate = getEstateBySlug(params.slug);
  if (!estate) notFound();

  const otherEstates = ESTATES.filter((e) => e.slug !== estate.slug).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: `${estate.name} Rental Market & Utility Data 2026`,
    description: estate.profileSummary,
    creator: {
      '@type': 'Organization',
      name: 'Kodi Ya Kweli',
      url: 'https://kodi-ya-kweli.vercel.app',
    },
    temporalCoverage: estate.updatedAt,
    spatialCoverage: {
      '@type': 'Place',
      name: `${estate.name}, Nairobi, Kenya`,
    },
    license: 'https://creativecommons.org/licenses/by/4.0/',
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EstateHero estate={estate} />

      <div className='max-w-5xl mx-auto px-4 py-10 space-y-12'>
        {/* Rent Table */}
        <RentComparisonTable estate={estate} />

        {/* Utilities & Deposits */}
        <UtilityCostBreakdown estate={estate} />

        {/* Ground Reality Negotiation Box */}
        <section className='bg-amber-50/70 border border-amber-200 rounded-xl p-6 md:p-8 space-y-3'>
          <div className='flex items-center gap-2 text-amber-900'>
            <Lightbulb className='w-5 h-5 text-amber-700' />
            <h2 className='font-display font-bold text-xl'>
              Ground Reality — Local Negotiation Playbook
            </h2>
          </div>
          <p className='text-xs md:text-sm text-amber-950 leading-relaxed'>
            {estate.groundRealityNote}
          </p>
        </section>

        {/* Action Banner: Toolkit */}
        <section className='bg-gradient-to-r from-emerald-900 to-brand-green text-white rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md'>
          <div className='space-y-2 text-center md:text-left'>
            <div className='inline-flex items-center gap-1.5 text-emerald-200 text-xs font-semibold'>
              <Scale className='w-4 h-4' />
              <span>Tenant Legal Protection</span>
            </div>
            <h3 className='font-display font-bold text-2xl'>
              Landlord Withholding Your Security Deposit?
            </h3>
            <p className='text-xs md:text-sm text-emerald-100 max-w-xl'>
              Generate a formal demand letter citing Kenyan law in 3 minutes. Zero server upload.
            </p>
          </div>

          <Link
            href='/toolkit/deposit-demand'
            className='px-6 py-3 bg-white text-emerald-950 font-bold text-xs rounded-lg hover:bg-emerald-50 transition-all shrink-0 shadow'
          >
            Generate Demand Letter →
          </Link>
        </section>

        {/* Explore Other Estates */}
        <section className='space-y-4 pt-4 border-t border-gray-200'>
          <h3 className='font-display font-bold text-lg text-gray-900'>
            Compare with Nearby Nairobi Estates
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {otherEstates.map((other) => (
              <Link
                key={other.slug}
                href={`/estates/${other.slug}`}
                className='p-4 bg-white border border-gray-200 rounded-lg hover:border-brand-green hover:shadow-sm transition-all block group'
              >
                <span className='font-bold text-sm text-gray-900 group-hover:text-brand-green'>
                  {other.name}
                </span>
                <p className='text-xs text-gray-500 mt-1 line-clamp-1'>
                  {other.tagline}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
