"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

interface MetricCardProps {
  title: string;
  amount: string;
  subtext: string;
  amountColor?: string;
}

function MetricCard({ title, amount, subtext, amountColor = "text-gray-900" }: MetricCardProps) {
  return (
    <div className="scr-metric-card">
      <span className="scr-metric-title">{title}</span>
      <h3 className={`scr-metric-amount ${amountColor}`}>{amount}</h3>
      <span className="scr-metric-subtext">{subtext}</span>
    </div>
  );
}

export default function SalesCreditReportPage() {
  const { t } = useLanguage();
  return (
    <div className="scr-container">
      {/* Title Card */}
      <div className="scr-title-card">
        <div className="scr-title-left">
          <h2 className="scr-title">{t('scr.title')}</h2>
          <p className="scr-subtitle">{t('scr.subtitle')}</p>
        </div>
        <div className="scr-title-actions">
          <button className="btn scr-btn-red">
            {t('scr.credit_control')}
          </button>
          <button className="btn scr-btn-white">
            {t('scr.customer_list')}
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="scr-metrics-grid">
        <MetricCard 
          title={t('scr.customers')} 
          amount="0" 
          subtext={t('scr.customers_sub')}
        />
        <MetricCard 
          title={t('scr.total_orders')} 
          amount="0" 
          subtext={t('scr.total_orders_sub')}
        />
        <MetricCard 
          title={t('scr.total_amount')} 
          amount="INR 0.00" 
          subtext={t('scr.total_amount_sub')}
        />
        <MetricCard 
          title={t('scr.paid_amount')} 
          amount="INR 0.00" 
          amountColor="text-green-600"
          subtext={t('scr.paid_amount_sub')}
        />
        <MetricCard 
          title={t('scr.pending_amount')} 
          amount="INR 0.00" 
          amountColor="text-red-500"
          subtext={t('scr.pending_amount_sub')}
        />
      </div>

      {/* Table Section */}
      <div className="scr-card">
        <div className="scr-table-header-flex">
          <div className="scr-card-header">
            <h4>{t('scr.customer_sales_credit')}</h4>
            <p className="scr-card-sub">{t('scr.customer_sales_credit_sub')}</p>
          </div>
          <span className="scr-records-count">{t('cr.no_records')}</span>
        </div>
        
        <div className="scr-table-wrapper">
          <table className="scr-table">
            <thead>
              <tr>
                <th>{t('scr.table.customer')}</th>
                <th>{t('scr.table.contact')}</th>
                <th>{t('scr.table.order_count')}</th>
                <th>{t('scr.table.invoice_count')}</th>
                <th>{t('scr.table.total_amount')}</th>
                <th>{t('scr.table.paid_amount')}</th>
                <th>{t('scr.table.pending_amount')}</th>
                <th>{t('scr.table.action')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={8} className="scr-empty-cell">
                  {t('scr.no_pending')}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
