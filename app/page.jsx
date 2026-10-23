'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';
import { 
  Phone, Mail, MapPin, Clock, ShieldCheck, Award, TrendingUp, 
  Building2, Calculator, FileText, CheckCircle2, Star, ArrowRight, 
  Calendar, Scale, Check, Landmark, Percent, Layers, Users, HeartHandshake, Briefcase, Zap, Shield, FileSpreadsheet
} from 'lucide-react';

export default function Home() {
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

  const services = [
    { icon: FileText, title: "Income Tax & Corporate Filing", desc: "Expert ITR filing, corporate tax strategies, advance tax, and assessment proceedings." },
    { icon: Percent, title: "GST Registration & Returns", desc: "GST setup, monthly GSTR-1/3B filings, audit reconciliations, and E-Way bill compliance." },
    { icon: ShieldCheck, title: "Statutory & Tax Audit", desc: "Independent statutory audits, tax audits under Sec 44AB, and internal audit controls." },
    { icon: Building2, title: "Company Incorporation & ROC", desc: "Pvt Ltd, LLP, One Person Company incorporation, MCA annual filings, and DIN setup." },
    { icon: Landmark, title: "Project Finance & CMA Preparation", desc: "CMA data preparation, bank loan syndication, project report creation, and subsidies." },
    { icon: TrendingUp, title: "Virtual CFO & Advisory", desc: "Strategic CFO advisory, cash flow forecasting, board reporting, and capital structure." },
    { icon: FileSpreadsheet, title: "TDS, TCS & Payroll Management", desc: "Quarterly TDS/TCS returns, Form 16 issuance, salary structuring, and PF/ESI setup." },
    { icon: Scale, title: "Litigation & IT Notice Resolution", desc: "Direct representation before Income Tax Officers, CIT Appeals, and GST scrutiny reply." },
    { icon: HeartHandshake, title: "Wealth & Estate Planning", desc: "Family trust creation, estate succession, asset protection, and NRI tax consulting." }
  ];

  const testimonials = [
    {
      name: "Rajesh Agrawal",
      company: "Agrawal Enterprises",
      text: "CA Deepak Vyas and his team transformed our tax planning. Their GST audit guidance saved us significant penalty liabilities.",
      rating: 5
    },
    {
      name: "Sunil Sharma",
      company: "Indore Tech Solutions Pvt Ltd",
      text: "From incorporating our company to managing our complete monthly accounting and ROC filings, Vyas Consultancy has been exceptional.",
      rating: 5
    },
    {
      name: "Meena Joshi",
      company: "Joshi Healthcare Clinic",
      text: "Extremely professional and prompt service. Phone queries are addressed immediately at +91 9893014143. Highly recommended!",
      rating: 5
    }
  ];

  const whyChooseUs = [
    { icon: Award, title: "15+ Years Excellence", desc: "Extensive practice experience across diverse manufacturing, healthcare, and IT sectors." },
    { icon: Shield, title: "100% Compliance Accuracy", desc: "Zero-compromise accuracy in tax returns, statutory audits, and regulatory filings." },
    { icon: Zap, title: "Prompt Direct Access", desc: "Direct consultation with lead CA Deepak Vyas without long bureaucratic waiting times." },
    { icon: Users, title: "500+ Satisfied Clients", desc: "Trusted by leading businesses, startups, and high-net-worth individuals across MP." }
  ];

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-slate-800 font-sans selection:bg-amber-200 selection:text-amber-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-[#f8f5ee] via-[#fdfbf7] to-white border-b border-amber-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-bold tracking-wider uppercase shadow-sm">
                <Award className="w-4 h-4 text-amber-700" /> Strategic Financial & Tax Advisory
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                Vyas Consultancy <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800">
                  & Co.
                </span>
              </h1>

              <div className="p-5 rounded-2xl bg-white/90 border border-amber-200/80 shadow-md backdrop-blur-md max-w-xl">
                <p className="text-slate-900 text-base font-bold">
                  Led by <span className="text-amber-800 font-extrabold">CA Deepak Vyas</span>
                </p>
                <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                  Premier Chartered Accountancy services in Indore. Specializing in Direct/Indirect Taxation, Statutory Audits, Company Incorporation, CMA Project Loans & CFO Advisory.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/40 font-extrabold px-8 py-4 rounded-xl shadow-xl transition-all flex items-center justify-center gap-3 text-base"
                >
                  <Calendar className="w-5 h-5 text-amber-400" /> Schedule Advisory Slot
                </Link>
                <Link 
                  href="/services"
                  className="bg-white hover:bg-amber-50 text-slate-800 border border-slate-300 font-bold px-7 py-4 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 text-base"
                >
                  Explore Practice Areas <ArrowRight className="w-4 h-4 text-amber-700" />
                </Link>
              </div>

              <div className="pt-8 grid grid-cols-3 gap-6 border-t border-slate-200">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-amber-800">100%</p>
                  <p className="text-xs text-slate-600 font-semibold">Compliance Record</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-slate-900">500+</p>
                  <p className="text-xs text-slate-600 font-semibold">Corporate Clients</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-amber-800">15+</p>
                  <p className="text-xs text-slate-600 font-semibold">Years Experience</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800" 
                    alt="Financial Advisory & CA Firm" 
                    className="w-full h-[480px] object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-amber-300 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-extrabold text-lg">
                        CA
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">CA Deepak Vyas</h4>
                        <p className="text-xs text-amber-800 font-semibold">Managing Partner & Tax Consultant</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Expanded Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-800 font-extrabold text-xs uppercase tracking-widest">Comprehensive Expertise</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">Specialized CA Practice Areas</h2>
            <p className="text-slate-600 mt-3 text-sm">
              Customized financial, auditing, and corporate taxation solutions designed for corporate growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((srv, idx) => (
              <div key={idx} className="bg-[#fdfbf7] p-8 rounded-2xl border border-amber-900/10 hover:border-amber-500/50 hover:shadow-xl transition duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 border border-slate-800 flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition duration-300">
                  <srv.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{srv.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-amber-400 font-extrabold px-6 py-3 rounded-xl shadow-md transition"
            >
              View All 9 Practice Areas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#f8f5ee] border-y border-amber-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-800 font-extrabold text-xs uppercase tracking-widest">Our Strengths</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">Why Choose Vyas Consultancy & Co.</h2>
            <p className="text-slate-600 mt-3 text-sm">
              Delivering strategic clarity, financial integrity, and unwavering regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-amber-900/10 shadow-md text-center">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 mx-auto flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Feedback / Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-800 font-extrabold text-xs uppercase tracking-widest">Client Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">What Our Clients Say</h2>
            <p className="text-slate-600 mt-3 text-sm">
              Feedback from esteemed businesses and leaders across Madhya Pradesh.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-[#fdfbf7] p-8 rounded-2xl border border-amber-900/10 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-amber-500 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 italic leading-relaxed mb-6">"{t.text}"</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-amber-800 font-semibold">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Estimator Quick Banner */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">Quick Utility</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mt-1">Estimate Your Tax Liability Online</h3>
            <p className="text-xs text-slate-400 mt-1">Calculate your approximate income tax liability before official filing.</p>
          </div>
          <Link 
            href="/calculator" 
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-8 py-3.5 rounded-xl transition shadow-lg shrink-0 text-sm flex items-center gap-2"
          >
            <Calculator className="w-4 h-4" /> Open Tax Estimator
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}