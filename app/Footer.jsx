import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 text-xs border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <p className="text-white font-extrabold text-sm">Vyas Consultancy & Co.</p>
        <p>504, Vikram Tower, Sapna Sangeeta Road, Indore, MP - 452014 | Phone: +91 9893014143</p>
        <div className="flex justify-center gap-6 pt-2 text-slate-300 font-medium">
          <Link href="/" className="hover:text-amber-400">Home</Link>
          <Link href="/about" className="hover:text-amber-400">About Us</Link>
          <Link href="/services" className="hover:text-amber-400">Services</Link>
          <Link href="/calculator" className="hover:text-amber-400">Tax Estimator</Link>
          <Link href="/contact" className="hover:text-amber-400">Contact</Link>
        </div>
        <p className="text-slate-500 text-[11px] pt-4 border-t border-slate-800">
          © 2026 Vyas Consultancy & Co. All rights reserved. Registered Chartered Accountant Practice.
        </p>
      </div>
    </footer>
  );
}