'use client';

import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Calculator } from 'lucide-react';

export default function CalculatorPage() {
  const [income, setIncome] = useState('1200000');
  const [deductions, setDeductions] = useState('150000');
  const [taxResult, setTaxResult] = useState(null);

  const calculateTax = (e) => {
    e.preventDefault();
    const inc = parseFloat(income) || 0;
    const ded = parseFloat(deductions) || 0;
    const taxableIncome = Math.max(0, inc - ded);
    
    let estimatedTax = 0;
    if (taxableIncome > 1500000) {
      estimatedTax = 150000 + (taxableIncome - 1500000) * 0.3;
    } else if (taxableIncome > 1000000) {
      estimatedTax = 75000 + (taxableIncome - 1000000) * 0.2;
    } else if (taxableIncome > 700000) {
      estimatedTax = 25000 + (taxableIncome - 700000) * 0.1;
    }

    setTaxResult({
      taxable: taxableIncome,
      estimatedTax: estimatedTax,
      cess: estimatedTax * 0.04,
      totalTax: estimatedTax * 1.04
    });
  };

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-slate-800 font-sans">
      <Navbar />

      <section className="py-16 bg-[#f8f5ee] border-b border-amber-900/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-800 font-extrabold text-xs uppercase tracking-widest">Financial Utility</span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mt-2">Income Tax Estimator</h1>
          <p className="text-slate-600 mt-3 text-sm max-w-2xl mx-auto">
            Calculate your estimated income tax liability according to slab rates.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#fdfbf7] p-8 rounded-3xl border border-amber-900/10 shadow-xl">
            <form onSubmit={calculateTax} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Gross Annual Income (₹)</label>
                <input 
                  type="number" 
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  placeholder="1200000"
                  required
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-amber-600"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Total Deductions (80C, 80D, etc.) (₹)</label>
                <input 
                  type="number" 
                  value={deductions}
                  onChange={(e) => setDeductions(e.target.value)}
                  placeholder="150000"
                  required
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-amber-600"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-800 text-amber-400 font-extrabold py-3.5 rounded-xl transition text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <Calculator className="w-4 h-4 text-amber-400" /> Calculate Tax Estimate
              </button>
            </form>

            {taxResult && (
              <div className="mt-6 p-5 rounded-2xl bg-white border border-amber-300 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-600 block font-semibold">Taxable Income</span>
                  <span className="text-lg font-bold text-slate-900">₹{taxResult.taxable.toLocaleString('en-IN')}</span>
                </div>
                <div>
                  <span className="text-slate-600 block font-semibold">Estimated Total Tax</span>
                  <span className="text-lg font-extrabold text-amber-800">₹{taxResult.totalTax.toLocaleString('en-IN')}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}