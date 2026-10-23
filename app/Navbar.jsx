'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, MapPin, Clock, ShieldCheck, Scale, Calendar, X, CheckCircle2, Check } from 'lucide-react';

export default function Navbar() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Taxation & GST Filing',
    date: '2026-10-25'
  });

  const timeSlots = [
    { time: "11:00 AM", available: true },
    { time: "12:30 PM", available: true },
    { time: "02:30 PM", available: false },
    { time: "04:00 PM", available: true },
    { time: "05:30 PM", available: true },
    { time: "07:00 PM", available: true }
  ];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (selectedSlot) {
      setBookingConfirmed(true);
    }
  };

  return (
    <>
      <div className="bg-slate-900 text-slate-200 py-2.5 px-4 text-xs font-medium border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-amber-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              ICAI Registered & Certified Chartered Accountant Firm
            </span>
            <span className="hidden md:inline text-slate-700">|</span>
            <a href="tel:9893014143" className="hover:text-amber-400 transition flex items-center gap-1.5 font-bold text-white">
              <Phone className="w-3.5 h-3.5 text-amber-400" /> +91 9893014143
            </a>
          </div>
          <div className="flex items-center gap-6 text-slate-300">
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-amber-400" /> Mon - Sat: 10:00 AM - 7:30 PM</span>
            <span className="hidden lg:flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-amber-400" /> Sapna Sangeeta Road, Indore</span>
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-amber-900/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center text-amber-400 font-black shadow-md border border-amber-500/30">
              <Scale className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 block leading-tight">
                Vyas Consultancy & Co.
              </span>
              <span className="text-xs text-amber-800 font-bold tracking-wider">CA Deepak Vyas</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8 font-semibold text-slate-700 text-sm">
            <Link href="/" className="hover:text-amber-700 transition">Home</Link>
            <Link href="/about" className="hover:text-amber-700 transition">About Firm</Link>
            <Link href="/services" className="hover:text-amber-700 transition">Services</Link>
            <Link href="/calculator" className="hover:text-amber-700 transition">Tax Estimator</Link>
            <Link href="/contact" className="hover:text-amber-700 transition">Contact & Location</Link>
          </div>

          <button 
            onClick={() => { setIsBookingOpen(true); setBookingConfirmed(false); }}
            className="bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/30 font-extrabold px-5 py-2.5 rounded-xl shadow-md transition-all text-xs sm:text-sm flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-amber-400" /> Schedule Consultation
          </button>
        </div>
      </nav>

      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setIsBookingOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 transition"
            >
              <X className="w-6 h-6" />
            </button>

            {!bookingConfirmed ? (
              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Schedule Advisory</span>
                  <h3 className="text-2xl font-extrabold text-slate-900 mt-1">Book Consultation Slot</h3>
                  <p className="text-xs text-slate-500">Select your preferred date and time for direct consultation with CA Deepak Vyas.</p>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Your Name / Organization"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-[#fdfbf7] border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Mobile Number</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+91 98930 14143"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-[#fdfbf7] border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-amber-600"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Preferred Date</label>
                      <input 
                        type="date" 
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="w-full bg-[#fdfbf7] border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-amber-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-2">Available Consultation Time Slots</label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((slot, idx) => (
                        <button
                          type="button"
                          key={idx}
                          disabled={!slot.available}
                          onClick={() => setSelectedSlot(slot.time)}
                          className={`py-2 px-3 rounded-xl font-bold border transition ${
                            !slot.available 
                              ? 'bg-slate-100 border-slate-200 text-slate-400 line-through cursor-not-allowed'
                              : selectedSlot === slot.time
                              ? 'bg-slate-900 text-amber-400 border-slate-900 shadow-md'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-amber-600'
                          }`}
                        >
                          {slot.time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={!selectedSlot}
                    className="w-full mt-4 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-400 text-amber-400 font-extrabold py-3.5 rounded-xl shadow-lg transition text-sm flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-400" /> Confirm Consultation Booking
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-300">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">Consultation Slot Reserved!</h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Your appointment request has been registered with <span className="text-amber-800 font-bold">Vyas Consultancy & Co.</span>.
                </p>

                <div className="bg-[#fdfbf7] p-4 rounded-2xl text-left border border-slate-200 text-xs space-y-2">
                  <div className="flex justify-between"><span className="text-slate-500">Advisor:</span> <span className="font-bold text-slate-900">CA Deepak Vyas</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Date:</span> <span className="font-bold text-slate-900">{formData.date}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Reserved Slot:</span> <span className="font-bold text-amber-800">{selectedSlot}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Client:</span> <span className="font-bold text-slate-900">{formData.name}</span></div>
                </div>

                <button 
                  onClick={() => setIsBookingOpen(false)}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold py-3 rounded-xl transition text-sm"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}