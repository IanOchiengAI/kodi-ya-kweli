'use client';

import React, { useState } from 'react';
import type { Estate } from '@/types';
import { EstateCard } from './EstateCard';
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

export const EstateFilter: React.FC<{ estates: Estate[] }> = ({ estates }) => {
  const [search, setSearch] = useState('');
  const [selectedZone, setSelectedZone] = useState<string>('all');
  const [selectedTier, setSelectedTier] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price-asc' | 'price-desc'>('name');

  const filtered = estates.filter((e) => {
    const matchesSearch =
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.tagline.toLowerCase().includes(search.toLowerCase()) ||
      e.profileSummary.toLowerCase().includes(search.toLowerCase());
    const matchesZone = selectedZone === 'all' || e.zone === selectedZone;
    const matchesTier = selectedTier === 'all' || e.tier === selectedTier;
    return matchesSearch && matchesZone && matchesTier;
  });

  const sorted = [...filtered].sort((a, b) => {
    const aLowest =
      a.transactedRent.bedsitter?.min ||
      a.transactedRent.oneBR?.min ||
      a.transactedRent.twoBR?.min ||
      0;
    const bLowest =
      b.transactedRent.bedsitter?.min ||
      b.transactedRent.oneBR?.min ||
      b.transactedRent.twoBR?.min ||
      0;

    if (sortBy === 'price-asc') return aLowest - bLowest;
    if (sortBy === 'price-desc') return bLowest - aLowest;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className='space-y-8'>
      {/* Controls Bar */}
      <div className='bg-white border border-gray-200 rounded-xl p-4 md:p-5 shadow-sm space-y-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
          {/* Search Box */}
          <div className='relative md:col-span-2'>
            <Search className='w-4 h-4 text-gray-400 absolute left-3 top-3.5' />
            <input
              type='text'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search estates by name or keyword...'
              className='w-full pl-9 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white'
            />
          </div>

          {/* Zone filter */}
          <div>
            <select
              value={selectedZone}
              onChange={(e) => setSelectedZone(e.target.value)}
              className='w-full py-2.5 px-3 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-700'
            >
              <option value='all'>All Nairobi Zones</option>
              <option value='central-west'>Central West (Kilimani / Waiyaki Way)</option>
              <option value='central'>Central (Westlands)</option>
              <option value='north'>North (Roysambu)</option>
              <option value='north-west'>North West (Ruaka / Lower Kabete)</option>
              <option value='south-west'>South West (Rongai)</option>
              <option value='north-east'>North East (Kasarani / Juja)</option>
              <option value='south'>South (South B / C)</option>
              <option value='east'>East (Fedha / Embakasi)</option>
            </select>
          </div>

          {/* Sort By */}
          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className='w-full py-2.5 px-3 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-700'
            >
              <option value='name'>Sort: Alphabetical</option>
              <option value='price-asc'>Price: Lowest First</option>
              <option value='price-desc'>Price: Highest First</option>
            </select>
          </div>
        </div>

        <div className='flex items-center justify-between text-xs text-gray-500 pt-1'>
          <span>
            Showing <strong>{sorted.length}</strong> of {estates.length} audited estates
          </span>
          {(search || selectedZone !== 'all' || selectedTier !== 'all') && (
            <button
              onClick={() => {
                setSearch('');
                setSelectedZone('all');
                setSelectedTier('all');
                setSortBy('name');
              }}
              className='text-emerald-700 hover:underline font-medium'
            >
              Reset filters
            </button>
          )}
        </div>
      </div>

      {/* Grid of Estates */}
      {sorted.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {sorted.map((estate) => (
            <EstateCard key={estate.slug} estate={estate} />
          ))}
        </div>
      ) : (
        <div className='bg-white border border-gray-200 rounded-xl p-12 text-center'>
          <p className='text-gray-500 text-sm'>No estates match your search query.</p>
          <button
            onClick={() => {
              setSearch('');
              setSelectedZone('all');
            }}
            className='mt-3 text-xs text-brand-green font-semibold underline'
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};
