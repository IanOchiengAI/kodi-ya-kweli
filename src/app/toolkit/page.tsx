import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Scale, Calculator, ClipboardCheck, ArrowRight, ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tenant Legal & Financial Toolkit for Kenya',
  description:
    'Free self-service legal tools for Nairobi tenants. Generate deposit recovery demand letters, calculate true housing cost of living, and audit move-in property condition.',
  openGraph: {
    title: 'Tenant Toolkit Kenya | Kodi Ya Kweli',
    description: 'Statutory deposit demand notices, total cost of tenancy calculator, and move-in inspection kits.',
  },
};

export default function ToolkitDashboardPage() {
  const tools = [
    {
      title: 'Deposit Demand Letter Generator',
      slug: '/toolkit/deposit-demand',
      icon: Scale,
      badge: 'Cap 23 & Cap 10A Compliant',
      description:
        'Landlord refusing to refund your security, water, or electricity deposit? Generate a legally structured 14-day statutory demand notice citing Kenyan contract law and Small Claims Court pre-action requirements.',
      features: [
        'Pre-formatted for Kenyan Small Claims Court standards',
        'Rebuts bogus repainting and normal wear-and-tear deductions',
        'One-click PDF download & print preview',
        '100% private: no data transmitted to any server',
      ],
      cta: 'Draft Demand Letter',
    },
    {
      title: 'Total Cost of Tenancy (TCT) Calculator',
      slug: '/toolkit/fair-rent-calculator',
      icon: Calculator,
      badge: 'Uncovers Hidden Overheads',
      description:
        'A KSh 20,000 apartment with KSh 40/unit token resale, borehole water markups, and high CBD matatu fare often costs more than a KSh 28,000 unit closer to work. Calculate your true total monthly expenditure.',
      features: [
        'Autofills utility benchmarks for 7+ Nairobi estates',
        'Calculates token submeter resale markups above KPLC',
        'Factors in scheduled water rationing bowser costs',
        'Computes monthly 22-day peak commute transit expenses',
      ],
      cta: 'Run TCT Calculation',
    },
    {
      title: 'Move-In / Move-Out Inspection Audit',
      slug: '/toolkit/inspection-checklist',
      icon: ClipboardCheck,
      badge: 'Photographic Evidence Kit',
      description:
        'The #1 reason tenants lose deposits is the absence of move-in condition proof. Conduct an exhaustive 28-point room-by-room audit when taking keys to legally insulate yourself against future repair claims.',
      features: [
        '28 inspection checkpoints across all living spaces',
        'Documents initial meter numbers (KPLC & Nairobi Water)',
        'Printable two-column comparison schedule (Move-in vs Move-out)',
        'Signed mutual handover block for tenant, landlord & witness',
      ],
      cta: 'Open Inspection Audit',
    },
  ];

  return (
    <div className='max-w-5xl mx-auto px-4 py-12 space-y-12'>
      {/* Header */}
      <div className='border-b border-gray-200 pb-8'>
        <div className='inline-flex items-center gap-2 bg-emerald-100/80 text-emerald-900 border border-emerald-300/50 px-3 py-1 rounded-full text-xs font-semibold mb-3'>
          <ShieldCheck className='w-4 h-4 text-brand-green' />
          <span>Kenyan Tenancy Law · Client-Side Execution</span>
        </div>
        <h1 className='font-display font-extrabold text-3xl md:text-5xl text-gray-950 tracking-tight'>
          Tenant Legal & Financial Toolkit
        </h1>
        <p className='text-sm md:text-base text-gray-600 mt-2 max-w-2xl leading-relaxed'>
          Empowering Kenyan renters with self-help legal mechanisms, objective cost calculators, and
          photographic condition audits to defeat unfair deductions and broker exploitation.
        </p>
      </div>

      {/* Privacy Guarantee Banner */}
      <div className='bg-emerald-950 text-white rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm'>
        <div className='flex items-center gap-3.5'>
          <div className='w-10 h-10 rounded-full bg-emerald-800 text-emerald-300 flex items-center justify-center shrink-0'>
            <Lock className='w-5 h-5' />
          </div>
          <div>
            <h3 className='font-bold text-sm text-white'>
              Zero Server Data Retention Guarantee
            </h3>
            <p className='text-xs text-emerald-200/80 mt-0.5 leading-relaxed'>
              All letter drafting, calculation, and inspection operations execute solely inside your browser memory.
              No names, lease figures, or phone numbers are ever sent to our servers.
            </p>
          </div>
        </div>
        <span className='px-3 py-1 bg-emerald-900 text-emerald-300 text-[11px] font-mono rounded border border-emerald-800 shrink-0'>
          CSP CONNECT-SRC: NONE
        </span>
      </div>

      {/* Tools Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <div
              key={tool.slug}
              className='bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6'
            >
              <div className='space-y-4'>
                <div className='flex items-center justify-between'>
                  <div className='w-10 h-10 rounded-lg bg-emerald-50 text-brand-green flex items-center justify-center'>
                    <Icon className='w-5 h-5' />
                  </div>
                  <span className='text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200'>
                    {tool.badge}
                  </span>
                </div>

                <h3 className='font-display font-bold text-lg text-gray-900'>
                  {tool.title}
                </h3>

                <p className='text-xs text-gray-600 leading-relaxed'>
                  {tool.description}
                </p>

                <ul className='space-y-1.5 pt-2 border-t border-gray-100 text-[11px] text-gray-600'>
                  {tool.features.map((feat, idx) => (
                    <li key={idx} className='flex items-start gap-1.5'>
                      <CheckCircle2 className='w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5' />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='pt-4 border-t border-gray-100'>
                <Link
                  href={tool.slug}
                  className='w-full py-2.5 px-4 bg-brand-green text-white text-xs font-bold rounded-lg hover:bg-brand-green-light transition-all inline-flex items-center justify-center gap-1.5'
                >
                  <span>{tool.cta}</span>
                  <ArrowRight className='w-3.5 h-3.5' />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
