/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  async headers() {
    return [
      {
        source: '/toolkit/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob:",
              "font-src 'self'",
              // In production: no outbound connections (privacy guarantee).
              // In dev: allow localhost WebSocket for webpack HMR.
              isProd ? "connect-src 'none'" : "connect-src 'self' ws://localhost:*",
              "form-action 'none'",
            ].join('; '),
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/rent',
        destination: '/estates',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
