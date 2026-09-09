import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Kodi Ya Kweli — Real Rent Prices & Tenant Toolkit for Nairobi';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #052e16 0%, #064e3b 50%, #022c22 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 70px',
          fontFamily: 'sans-serif',
          color: '#ffffff',
        }}
      >
        {/* Top Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                backgroundColor: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#ffffff',
              }}
            >
              ⌂
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '28px', fontWeight: '800', letterSpacing: '-0.5px' }}>
                Kodi Ya Kweli
              </span>
              <span style={{ fontSize: '13px', color: '#a7f3d0', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Real Rent · Tenant Toolkit KE
              </span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(16, 185, 129, 0.2)',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              borderRadius: '9999px',
              padding: '8px 20px',
              fontSize: '15px',
              fontWeight: '600',
              color: '#6ee7b7',
            }}
          >
            Kenya Civic Tech Initiative · 2026 Audit
          </div>
        </div>

        {/* Center Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '1000px' }}>
          <div
            style={{
              fontSize: '62px',
              fontWeight: '900',
              lineHeight: 1.1,
              letterSpacing: '-1.5px',
              color: '#ffffff',
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            Nairobi rent prices — what people{' '}
            <span style={{ color: '#34d399', marginLeft: '12px', textDecoration: 'underline' }}>
              actually pay.
            </span>
          </div>

          <div
            style={{
              fontSize: '24px',
              color: '#d1fae5',
              lineHeight: 1.4,
              fontWeight: '400',
              maxWidth: '880px',
            }}
          >
            Transacted rates vs portal prices · Sub-meter token resales · Free legal demand letters for withheld deposits under Kenyan law.
          </div>
        </div>

        {/* Bottom Feature Badges */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            paddingTop: '28px',
          }}
        >
          <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981' }} />
              <span style={{ fontSize: '16px', color: '#e2e8f0', fontWeight: '600' }}>
                11 Audited Nairobi Estates
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981' }} />
              <span style={{ fontSize: '16px', color: '#e2e8f0', fontWeight: '600' }}>
                Small Claims Court & Cap 23 Templates
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981' }} />
              <span style={{ fontSize: '16px', color: '#e2e8f0', fontWeight: '600' }}>
                100% Client-Side Privacy
              </span>
            </div>
          </div>

          <span style={{ fontSize: '16px', color: '#94a3b8', fontWeight: '500' }}>
            Built by Ian Ochieng
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
