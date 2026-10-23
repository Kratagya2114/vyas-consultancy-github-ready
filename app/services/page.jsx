'use client';

import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { 
  FileText, ShieldCheck, Building2, TrendingUp, Calculator, Scale, 
  Landmark, Percent, FileSpreadsheet, HeartHandshake, CheckCircle2 
} from 'lucide-react';

export default function ServicesPage() {
  const allServices = [
    {
      icon: FileText,
      title: "Income Tax & Corporate Filing",
      details: ["Individual & Corporate ITR Filing", "Advance Tax Estimations", "Capital Gains Planning", "Tax Deducted at Source (TDS) Compliance"]
    },
    {
      icon: Percent,
      title: "GST Registration & Returns",
      details: ["GST Setup & Registration", "Monthly GSTR-1 & 3B Filings", "Annual GSTR-9/9C Reconciliation", "E-Way Bill Advisory"]
    },
    {
      icon: ShieldCheck,
      title: "Statutory & Tax Audit",
      details: ["Tax Audit under Sec 44AB", "Statutory Audits for Pvt Ltd", "Internal Financial Controls", "Stock & Inventory Audits"]
    },
    {
      icon: Building2,
      title: "Company Incorporation & ROC",
      details: ["Pvt Ltd, LLP & OPC Setup", "ROC Annual Filings & MGT-7", "Director DIN & DSC Services", "Secretarial Advisory"]
    },
    {
      icon: Landmark,
      title: "Project Finance & CMA Data",
      details: ["Bank CMA Report Preparation", "Project Feasibility Reports", "Bank Loan Syndication", "Government Subsidy Filing"]
    },
    {
      icon: TrendingUp,
      title: "Virtual CFO & Strategic Advisory",
      details: ["Cash Flow Management", "Budgeting & Forecasting", "Board Financial Reporting", "Capital Structuring"]
    },
    {
      icon: FileSpreadsheet,
      title: "TDS, TCS & Payroll Services",
      details: ["Quarterly TDS Return Filing", "Form 16/16A Issuance", "Salary Structure Planning", "PF & ESI Compliance"]
    },
    {
      icon: Scale,
      title: "Litigation & IT Notice Reply",
      details: ["Direct Representation before IT/GST Officers", "Reply to Scrutiny Notices", "CIT Appeals & Submissions", "Dispute Resolution"]
    },
    {
      icon: HeartHandshake,
      title: "Wealth & Succession Planning",
      details: ["Family Trust Creation", "Estate & Succession Planning", "NRI Taxation Services", "Asset Protection Consulting"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-slate-800 font-sans">
      <Navbar />

      <section className="py-16 bg-[#f8f5ee] border-b border-amber-900/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-800 font-extrabold text-xs uppercase tracking-widest">Practice Areas</span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mt-2">All CA Services</h1>
          <p className="text-slate-600 mt-3 text-sm max-w-2xl mx-auto">
            Detailed breakdown of our financial, tax, corporate law, and auditing capabilities.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((srv, idx) => (
              <div key={idx} className="bg-[#fdfbf7] p-8 rounded-2xl border border-amber-900/10 shadow-md">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center mb-6">
                  <srv.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{srv.title}</h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  {srv.details.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}