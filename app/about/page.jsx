'use client';

import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Award, ShieldCheck, CheckCircle2, Phone, MapPin, Scale, HeartHandshake } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-slate-800 font-sans">
      <Navbar />

      <section className="py-16 bg-[#f8f5ee] border-b border-amber-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-800 font-extrabold text-xs uppercase tracking-widest">About Firm</span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mt-2">Vyas Consultancy & Co.</h1>
          <p className="text-slate-600 mt-3 text-sm max-w-2xl mx-auto">
            A trusted Chartered Accountancy practice delivering comprehensive financial, auditing, and corporate tax advisory in Indore.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
                <Award className="w-4 h-4" /> Senior Leadership
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900">CA Deepak Vyas</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                CA Deepak Vyas brings over 15 years of distinguished experience in direct and indirect taxation, corporate compliance, bank syndication, and wealth consulting.
              </p>
              
              <div className="space-y-3 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-700" /> Member of Institute of Chartered Accountants of India (ICAI)</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-700" /> Specialist in High-Turnover GST & Statutory Audits</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-700" /> Adviser for Corporate Incorporations and Project Funding</div>
              </div>

              <div className="p-4 rounded-xl bg-[#fdfbf7] border border-amber-200">
                <p className="text-xs font-bold text-slate-900">Office Contact Direct:</p>
                <a href="tel:9893014143" className="text-amber-800 text-lg font-black hover:underline">+91 9893014143</a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800" 
                  alt="CA Office Indore" 
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}