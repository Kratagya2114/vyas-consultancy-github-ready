'use client';

import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-slate-800 font-sans">
      <Navbar />

      <section className="py-16 bg-[#f8f5ee] border-b border-amber-900/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-800 font-extrabold text-xs uppercase tracking-widest">Reach Out</span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mt-2">Contact & Office Location</h1>
          <p className="text-slate-600 mt-3 text-sm max-w-2xl mx-auto">
            Visit our office in Indore or contact CA Deepak Vyas directly.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-5 bg-[#fdfbf7] p-8 rounded-3xl border border-amber-900/10 shadow-lg space-y-6">
              <div>
                <h3 className="text-2xl font-black text-slate-900">Vyas Consultancy & Co.</h3>
                <p className="text-xs font-extrabold text-amber-800 mt-1 uppercase tracking-wider">CA Deepak Vyas</p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 border border-slate-800">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-500 uppercase">Office Address</span>
                    <p className="text-slate-800 font-semibold leading-relaxed mt-0.5">
                      504, Vikram Tower, Sapna Sangeeta Road, Indore, Madhya Pradesh - 452014
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 border border-slate-800">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-500 uppercase">Direct Phone</span>
                    <a href="tel:9893014143" className="text-amber-800 font-extrabold hover:underline text-base">
                      +91 9893014143
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 border border-slate-800">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-500 uppercase">Email Enquiries</span>
                    <a href="mailto:info@vyasconsultancy.com" className="text-slate-800 hover:text-amber-800 transition font-semibold">
                      info@vyasconsultancy.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 h-[420px] rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl relative">
              <iframe 
                title="Vyas Consultancy Office Location"
                src="https://maps.google.com/maps?q=Vikram%20Tower,%20Sapna%20Sangeeta%20Road,%20Indore&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                className="w-full h-full border-0"
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}