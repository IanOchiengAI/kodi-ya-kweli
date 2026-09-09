import { ImageResponse } from 'next/og';
import { getEstateBySlug, getAllEstateSlugs } from '@/data/estates';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export async function generateImageMetadata() {
  const slugs = getAllEstateSlugs();
  return slugs.map((slug) => ({
    id: slug,
    contentType: 'image/png',
    size,
    alt: `${slug} real rent prices Nairobi 2026`,
  }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const estate = getEstateBySlug(params.slug);

  if (!estate) {
    return new ImageResponse(
      (
        <div
          style={{
            background: '#052e16',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontFamily: 'sans-serif',
            fontSize: 48,
            fontWeight: 'bold',
          }}
        >
          Kodi Ya Kweli
        </div>
      ),
      { ...size }
    );
  }

  const lowestRent =
    estate.transactedRent.bedsitter?.min ||
    estate.transactedRent.oneBR?.min ||
    estate.transactedRent.twoBR?.min ||
    0;

  const highestRent =
    estate.transactedRent.threeBR?.max ||
    estate.transactedRent.twoBR?.max ||
    estate.transactedRent.oneBR?.max ||
    0;

  const tokenRate = estate.utilities.landlordResaleRateKSh;
  const kplcRate = estate.utilities.kplcRetailRateKSh;
  const hasMarkup = tokenRate > kplcRate;
  const markupPercent = Math.round(((tokenRate - kplcRate) / kplcRate) * 100);

  const formatKSh = (n: number) =>
    'KSh ' + n.toLocaleString('en-KE');

  const zoneLabel: Record<string, string> = {
    'central': 'Central Nairobi',
    'central-west': 'Central West',
    'north': 'North Nairobi',
    'north-east': 'North East (Thika Road)',
    'north-west': 'North West',
    'south-west': 'South West',
    'east': 'East Nairobi',
    'south-east': 'South East',
  };

  const tierColors: Record<string, { bg: string; text: string }> = {
    'budget': { bg: '#064e3b', text: '#a7f3d0' },
    'mid-range': { bg: '#065f46', text: '#6ee7b7' },
    'upper-mid': { bg: '#047857', text: '#d1fae5' },
    'premium': { bg: '#059669', text: '#ecfdf5' },
  };

  const palette = tierColors[estate.tier] || tierColors['mid-range'];

  return new ImageResponse(
    (
      <div
        style={{
          background: `linear-gradient(135deg, #052e16 0%, ${palette.bg} 60%, #022c22 100%)`,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '52px 68px',
          fontFamily: 'sans-serif',
          color: '#ffffff',
        }}
      >
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '10px',
                backgroundColor: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '26px',
                color: '#fff',
                fontWeight: 'bold',
              }}
            >
              ⌂
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '24px', fontWeight: '800', letterSpacing: '-0.3px' }}>
                Kodi Ya Kweli
              </span>
              <span style={{ fontSize: '11px', color: '#a7f3d0', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                Real Rent · Tenant Toolkit KE
              </span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '9999px',
              padding: '7px 18px',
              fontSize: '13px',
              fontWeight: '600',
              color: palette.text,
            }}
          >
            {zoneLabel[estate.zone] || estate.zone} · {estate.tier}
          </div>
        </div>

        {/* Centre — estate name + tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: '#34d399' }}>
            ESTATE RENT INDEX — SEPTEMBER 2026 AUDIT
          </div>
          <div
            style={{
              fontSize: '60px',
              fontWeight: '900',
              lineHeight: 1.1,
              letterSpacing: '-1.2px',
              color: '#ffffff',
            }}
          >
            {estate.name}
          </div>
          <div
            style={{
              fontSize: '21px',
              color: '#d1fae5',
              lineHeight: 1.35,
              fontWeight: '400',
              maxWidth: '800px',
            }}
          >
            {estate.tagline}
          </div>
        </div>

        {/* Bottom stat strip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'stretch',
            gap: '16px',
            borderTop: '1px solid rgba(255,255,255,0.15)',
            paddingTop: '24px',
          }}
        >
          {/* Rent range */}
          <div
            style={{
              flex: 1,
              backgroundColor: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '12px',
              padding: '16px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            <span style={{ fontSize: '11px', color: '#a7f3d0', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
              Real Transacted Rent
            </span>
            <span style={{ fontSize: '26px', fontWeight: '800', color: '#ffffff' }}>
              {formatKSh(lowestRent)}–{formatKSh(highestRent)}/mo
            </span>
          </div>

          {/* Token rate */}
          <div
            style={{
              flex: 1,
              backgroundColor: hasMarkup ? 'rgba(251,191,36,0.1)' : 'rgba(255,255,255,0.08)',
              border: `1px solid ${hasMarkup ? 'rgba(251,191,36,0.4)' : 'rgba(255,255,255,0.15)'}`,
              borderRadius: '12px',
              padding: '16px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            <span style={{ fontSize: '11px', color: hasMarkup ? '#fde68a' : '#a7f3d0', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
              Token Resale Rate
            </span>
            <span style={{ fontSize: '26px', fontWeight: '800', color: hasMarkup ? '#fbbf24' : '#ffffff' }}>
              KSh {tokenRate}/kWh
              {hasMarkup && (
                <span style={{ fontSize: '14px', color: '#fde68a', fontWeight: '500', marginLeft: '8px' }}>
                  (+{markupPercent}% above KPLC)
                </span>
              )}
            </span>
          </div>

          {/* Water situation */}
          <div
            style={{
              flex: 1,
              backgroundColor: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '12px',
              padding: '16px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            <span style={{ fontSize: '11px', color: '#a7f3d0', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
              Water Supply
            </span>
            <span style={{ fontSize: '20px', fontWeight: '800', color: '#ffffff' }}>
              {estate.utilities.waterRationingDaysPerWeek > 0
                ? `${estate.utilities.waterRationingDaysPerWeek}d/wk rationing${estate.utilities.boreholeWater ? ' + borehole' : ''}`
                : 'Reliable (no rationing)'}
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
