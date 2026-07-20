"use client";

import React from 'react';
import { 
  ArrowRight, 
  CircleDollarSign,
  ShoppingCart,
  BarChart,
  PackageSearch,
  FileText,
  Banknote,
  CreditCard,
  RotateCcw,
  PackageX,
  TriangleAlert,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import './page.css';

interface ReportCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  arrowColor: string;
  href?: string;
}

function ReportCard({ title, description, icon, iconBg, arrowColor, href }: ReportCardProps) {
  const content = (
    <>
      <div className="rpt-card-header">
        <div className={`rpt-icon-wrapper ${iconBg}`}>
          {icon}
        </div>
        <ArrowRight size={18} className={`rpt-arrow ${arrowColor}`} />
      </div>
      <h3 className="rpt-card-title">{title}</h3>
      <p className="rpt-card-desc">{description}</p>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="rpt-card" style={{ textDecoration: 'none' }}>
        {content}
      </Link>
    );
  }

  return (
    <div className="rpt-card">
      {content}
    </div>
  );
}

export default function ReportsPage() {
  return (
    <div className="rpt-container">
      {/* Header */}
      <div className="rpt-header">
        <h2 className="rpt-title">Reports & Analytics</h2>
        <p className="rpt-subtitle">View detailed reports, charts, and export data</p>
      </div>

      {/* Main Grid */}
      <div className="rpt-grid">
        <ReportCard 
          title="Sales Report" 
          description="Daily, monthly, and yearly sales analysis with charts and PDF export" 
          icon={<CircleDollarSign size={24} className="text-orange-500" />} 
          iconBg="bg-blue-100" 
          arrowColor="text-blue-500" 
          href="/reports/sales"
        />
        <ReportCard 
          title="Purchase Report" 
          description="Track all purchases, supplier analysis, and purchase trends" 
          icon={<ShoppingCart size={24} className="text-green-500" />} 
          iconBg="bg-green-100" 
          arrowColor="text-green-500" 
          href="/reports/purchases"
        />
        <ReportCard 
          title="Profit & Loss" 
          description="Complete P&L statement with revenue, COGS, expenses, and margins" 
          icon={<BarChart size={24} className="text-purple-500" />} 
          iconBg="bg-purple-100" 
          arrowColor="text-purple-500" 
          href="/reports/profit-loss"
        />
        <ReportCard 
          title="Stock Report" 
          description="Current stock levels, stock value, low stock alerts, and category breakdown" 
          icon={<PackageSearch size={24} className="text-orange-700" />} 
          iconBg="bg-orange-100" 
          arrowColor="text-orange-500" 
          href="/reports/stock"
        />

        <ReportCard 
          title="Credit (Udhar) Report" 
          description="Outstanding balances, age analysis, and customer credit details" 
          icon={<FileText size={24} className="text-red-500" />} 
          iconBg="bg-red-100" 
          arrowColor="text-red-500" 
          href="/reports/credit"
        />
        <ReportCard 
          title="Sales Credit" 
          description="Customer-wise order count, sales amount, paid amount, and pending receivables" 
          icon={<Banknote size={24} className="text-green-600" />} 
          iconBg="bg-pink-100" 
          arrowColor="text-pink-500" 
          href="/reports/sales-credit"
        />
        <ReportCard 
          title="Purchase Credit" 
          description="Supplier-wise purchase orders, purchase amount, paid amount, and pending payables" 
          icon={<CreditCard size={24} className="text-blue-500" />} 
          iconBg="bg-yellow-100" 
          arrowColor="text-orange-400" 
        />
        <ReportCard 
          title="Sales Return" 
          description="Today: INR 0.00 | Month: INR 0.00" 
          icon={<RotateCcw size={24} className="text-gray-700" />} 
          iconBg="bg-gray-100" 
          arrowColor="text-gray-900" 
        />

        <ReportCard 
          title="Purchase Return" 
          description="Today: INR 0.00 | Month: INR 0.00" 
          icon={<PackageX size={24} className="text-blue-400" />} 
          iconBg="bg-blue-50" 
          arrowColor="text-gray-900" 
        />
        
        {/* Locked Feature Card */}
        <div className="rpt-locked-card">
          <TriangleAlert size={32} className="text-orange-400 mb-2" />
          <h4 className="rpt-locked-title">Feature Not Available</h4>
          <p className="rpt-locked-desc">Upgrade to Diamond plan to access this feature.</p>
          <button className="rpt-upgrade-btn">
            <Sparkles size={16} /> Upgrade Plan
          </button>
        </div>
      </div>

      {/* Summary Boxes */}
      <div className="rpt-summary-grid mt-24">
        <div className="rpt-summary-box">
          <span className="rpt-summary-label">Refund Pending</span>
          <span className="rpt-summary-value text-orange-500">0</span>
        </div>
        <div className="rpt-summary-box">
          <span className="rpt-summary-label">Supplier Adjustment Pending</span>
          <span className="rpt-summary-value text-orange-500">0</span>
        </div>
      </div>

    </div>
  );
}
