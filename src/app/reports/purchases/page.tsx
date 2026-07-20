"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

interface MetricCardProps {
  title: string;
  amount: string;
  amountColor?: string;
  subtext?: string;
}

function MetricCard({ title, amount, amountColor = "text-gray-900", subtext }: MetricCardProps) {
  return (
    <div className="prp-metric-card">
      <span className="prp-metric-title">{title}</span>
      <h3 className={`prp-metric-amount ${amountColor}`}>{amount}</h3>
      {subtext && <span className="prp-metric-subtext">{subtext}</span>}
    </div>
  );
}

export default function PurchaseReportPage() {
  const { t } = useLanguage();
  return (
    <div className="prp-container">
      {/* Header */}
      <div className="prp-header">
        <h2 className="prp-title">{t('prp.title')}</h2>
        <p className="prp-subtitle">{t('prp.subtitle')}</p>
      </div>

      {/* Filters */}
      <div className="prp-filters-bar">
        <input type="date" className="prp-input" defaultValue="2026-07-01" />
        <input type="date" className="prp-input" defaultValue="2026-07-20" />
        <button className="btn btn-green prp-btn-filter">
          {t('prp.apply_filter')}
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="prp-metrics-grid">
        <MetricCard 
          title={t('prp.gross_purchase')} 
          amount="₹0.00" 
        />
        <MetricCard 
          title={t('prp.purchase_return')} 
          amount="₹0.00" 
          amountColor="text-red-500"
        />
        <MetricCard 
          title={t('prp.net_purchase')} 
          amount="₹0.00" 
          amountColor="text-green-600"
        />
        
        <MetricCard 
          title={t('prp.purchased_qty')} 
          amount="0.00" 
        />
        <MetricCard 
          title={t('prp.returned_qty')} 
          amount="0.00" 
          amountColor="text-red-500"
        />
        <MetricCard 
          title={t('prp.net_qty_bills')} 
          amount="0.00"
          subtext={t('prp.bills_0')} 
        />
      </div>

      {/* Transactions Table */}
      <div className="prp-table-card">
        <div className="prp-table-header">
          <h4>{t('prp.purchase_transactions')}</h4>
        </div>
        <div className="prp-table-wrapper">
          <table className="prp-table">
            <thead>
              <tr>
                <th>{t('prp.table.date')}</th>
                <th>{t('prp.table.invoice_no')}</th>
                <th>{t('prp.table.supplier')}</th>
                <th>{t('prp.table.amount')}</th>
                <th>{t('prp.table.status')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} className="prp-empty-cell">
                  {t('prp.no_purchases')}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
