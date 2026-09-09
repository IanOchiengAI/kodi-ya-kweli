'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Home, ShieldCheck, Scale, Menu, X, Calculator, ClipboardCheck } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200'>
      <div className='max-w-6xl mx-auto px-4 h-16 flex items-center justify-between'>
        <Link href='/' className='flex items-center gap-2.5'>
          <div className='w-9 h-9 rounded-lg bg-brand-green flex items-center justify-center text-white shadow-sm'>
            <Home className='w-5 h-5' />
          </div>
          <div>
            <span className='font-display font-bold text-lg md:text-xl text-gray-900 tracking-tight block leading-tight'>
              Kodi Ya Kweli
            </span>
            <span className='text-[10px] text-gray-500 font-medium tracking-wide uppercase block'>
              Real Rent · Tenant Toolkit KE
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className='hidden md:flex items-center gap-1.5'>
          <Link
            href='/estates'
            className='px-3.5 py-2 text-sm font-medium text-gray-700 hover:text-brand-green hover:bg-gray-50 rounded-lg transition-colors'
          >
            Estate Rent Index
          </Link>
          <div className='relative group'>
            <Link
              href='/toolkit'
              className='px-3.5 py-2 text-sm font-medium text-gray-700 hover:text-brand-green hover:bg-gray-50 rounded-lg transition-colors inline-flex items-center gap-1'
            >
              <ShieldCheck className='w-4 h-4 text-brand-green' />
              Tenant Toolkit
            </Link>
          </div>
          <Link
            href='/toolkit/deposit-demand'
            className='px-3.5 py-2 text-sm font-medium text-gray-700 hover:text-brand-green hover:bg-gray-50 rounded-lg transition-colors'
          >
            Deposit Demand Letter
          </Link>
          <Link
            href='/toolkit/fair-rent-calculator'
            className='px-3.5 py-2 text-sm font-medium text-gray-700 hover:text-brand-green hover:bg-gray-50 rounded-lg transition-colors'
          >
            Rent Calculator
          </Link>
          <Link
            href='/about'
            className='px-3.5 py-2 text-sm font-medium text-gray-700 hover:text-brand-green hover:bg-gray-50 rounded-lg transition-colors'
          >
            About & Law
          </Link>
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden p-2 text-gray-600 hover:text-gray-900 rounded-lg'
          aria-label='Toggle menu'
        >
          {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className='md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-4 space-y-2 shadow-lg'>
          <Link
            href='/estates'
            onClick={() => setIsOpen(false)}
            className='block px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 rounded-lg'
          >
            Estate Rent Index
          </Link>
          <Link
            href='/toolkit'
            onClick={() => setIsOpen(false)}
            className='block px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 rounded-lg flex items-center gap-2'
          >
            <ShieldCheck className='w-4 h-4 text-brand-green' />
            Tenant Toolkit Overview
          </Link>
          <Link
            href='/toolkit/deposit-demand'
            onClick={() => setIsOpen(false)}
            className='block px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 rounded-lg flex items-center gap-2'
          >
            <Scale className='w-4 h-4 text-brand-green' />
            Deposit Demand Letter Generator
          </Link>
          <Link
            href='/toolkit/fair-rent-calculator'
            onClick={() => setIsOpen(false)}
            className='block px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 rounded-lg flex items-center gap-2'
          >
            <Calculator className='w-4 h-4 text-brand-green' />
            Total Cost of Tenancy Calculator
          </Link>
          <Link
            href='/toolkit/inspection-checklist'
            onClick={() => setIsOpen(false)}
            className='block px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 rounded-lg flex items-center gap-2'
          >
            <ClipboardCheck className='w-4 h-4 text-brand-green' />
            Move-In / Move-Out Inspection Audit
          </Link>
          <Link
            href='/about'
            onClick={() => setIsOpen(false)}
            className='block px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 rounded-lg'
          >
            About, Methodology & Legal Disclaimers
          </Link>
        </div>
      )}
    </header>
  );
};
