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
import { useLanguage } from '@/context/LanguageContext';
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
  const { t } = useLanguage();
  return (
    <div className="rpt-container">
      {/* Header */}
      <div className="rpt-header">
        <h2 className="rpt-title">{t('reports.title')}</h2>
        <p className="rpt-subtitle">{t('reports.subtitle')}</p>
      </div>

      {/* Main Grid */}
      <div className="rpt-grid">
        <ReportCard 
          title={t('reports.sales_report')} 
          description={t('reports.sales_report_desc')} 
          icon={<CircleDollarSign size={24} className="text-orange-500" />} 
          iconBg="bg-blue-100" 
          arrowColor="text-blue-500" 
          href="/reports/sales"
        />
        <ReportCard 
          title={t('reports.purchase_report')} 
          description={t('reports.purchase_report_desc')} 
          icon={<ShoppingCart size={24} className="text-green-500" />} 
          iconBg="bg-green-100" 
          arrowColor="text-green-500" 
          href="/reports/purchases"
        />
        <ReportCard 
          title={t('reports.profit_loss')} 
          description={t('reports.profit_loss_desc')} 
          icon={<BarChart size={24} className="text-purple-500" />} 
          iconBg="bg-purple-100" 
          arrowColor="text-purple-500" 
          href="/reports/profit-loss"
        />
        <ReportCard 
          title={t('reports.stock_report')} 
          description={t('reports.stock_report_desc')} 
          icon={<PackageSearch size={24} className="text-orange-700" />} 
          iconBg="bg-orange-100" 
          arrowColor="text-orange-500" 
          href="/reports/stock"
        />

        <ReportCard 
          title={t('reports.credit_report')} 
          description={t('reports.credit_report_desc')} 
          icon={<FileText size={24} className="text-red-500" />} 
          iconBg="bg-red-100" 
          arrowColor="text-red-500" 
          href="/reports/credit"
        />
        <ReportCard 
          title={t('reports.sales_credit')} 
          description={t('reports.sales_credit_desc')} 
          icon={<Banknote size={24} className="text-green-600" />} 
          iconBg="bg-pink-100" 
          arrowColor="text-pink-500" 
          href="/reports/sales-credit"
        />
        <ReportCard 
          title={t('reports.purchase_credit')} 
          description={t('reports.purchase_credit_desc')} 
          icon={<CreditCard size={24} className="text-blue-500" />} 
          iconBg="bg-yellow-100" 
          arrowColor="text-orange-400" 
        />
        <ReportCard 
          title={t('reports.sales_return')} 
          description={t('reports.sales_return_desc')} 
          icon={<RotateCcw size={24} className="text-gray-700" />} 
          iconBg="bg-gray-100" 
          arrowColor="text-gray-900" 
        />

        <ReportCard 
          title={t('reports.purchase_return')} 
          description={t('reports.purchase_return_desc')} 
          icon={<PackageX size={24} className="text-blue-400" />} 
          iconBg="bg-blue-50" 
          arrowColor="text-gray-900" 
        />
        
        {/* Locked Feature Card */}
        <div className="rpt-locked-card">
          <TriangleAlert size={32} className="text-orange-400 mb-2" />
          <h4 className="rpt-locked-title">{t('reports.feature_locked')}</h4>
          <p className="rpt-locked-desc">{t('reports.feature_locked_desc')}</p>
          <button className="rpt-upgrade-btn">
            <Sparkles size={16} /> {t('reports.upgrade_plan')}
          </button>
        </div>
      </div>

      {/* Summary Boxes */}
      <div className="rpt-summary-grid mt-24">
        <div className="rpt-summary-box">
          <span className="rpt-summary-label">{t('reports.refund_pending')}</span>
          <span className="rpt-summary-value text-orange-500">0</span>
        </div>
        <div className="rpt-summary-box">
          <span className="rpt-summary-label">{t('reports.supplier_adj_pending')}</span>
          <span className="rpt-summary-value text-orange-500">0</span>
        </div>
      </div>

    </div>
  );
}
