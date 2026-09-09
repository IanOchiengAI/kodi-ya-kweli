import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#006600',
          'green-light': '#008800',
          'green-dark': '#004d00',
          red: '#BB0000',
          black: '#111111',
          cream: '#FFFBF5',
          card: '#FFFFFF',
          muted: '#6B7280',
          border: '#E5E7EB',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'var(--font-inter)', 'sans-serif'],
        mono: ['monospace'],
      },
      screens: {
        print: { raw: 'print' },
      },
    },
  },
  plugins: [],
};

export default config;
