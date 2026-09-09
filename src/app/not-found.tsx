import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className='max-w-xl mx-auto px-4 py-24 text-center space-y-6'>
      <div className='inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-800 text-2xl font-bold'>
        404
      </div>
      <h1 className='font-display font-bold text-3xl text-gray-900'>
        Estate or Page Not Found
      </h1>
      <p className='text-gray-600 text-sm leading-relaxed'>
        The estate benchmark or toolkit page you are looking for does not exist or may have been moved.
      </p>
      <div className='pt-2 flex justify-center gap-3'>
        <Link
          href='/'
          className='px-5 py-2.5 bg-brand-green text-white text-xs font-semibold rounded-lg hover:bg-brand-green-light inline-flex items-center gap-2'
        >
          <Home className='w-4 h-4' />
          Return Home
        </Link>
        <Link
          href='/estates'
          className='px-5 py-2.5 bg-white border border-gray-300 text-gray-700 text-xs font-semibold rounded-lg hover:bg-gray-50 inline-flex items-center gap-2'
        >
          <ArrowLeft className='w-4 h-4' />
          Browse All Estates
        </Link>
      </div>
    </div>
  );
}
