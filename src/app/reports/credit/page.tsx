"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

interface MetricCardProps {
  title: string;
  amount: string;
  subtext: string;
  barColor: string;
  barWidth: string;
}

function MetricCard({ title, amount, subtext, barColor, barWidth }: MetricCardProps) {
  return (
    <div className="cr-metric-card">
      <span className="cr-metric-title">{title}</span>
      <h3 className="cr-metric-amount">{amount}</h3>
      <span className="cr-metric-subtext">{subtext}</span>
      <div className="cr-metric-bar-bg">
        <div className={`cr-metric-bar ${barColor}`} style={{ width: barWidth }}></div>
      </div>
    </div>
  );
}

export default function CreditReportPage() {
  const { t } = useLanguage();
  return (
    <div className="cr-container">
      {/* Title Card */}
      <div className="cr-title-card">
        <div className="cr-title-left">
          <h2 className="cr-title">{t('cr.title')}</h2>
          <p className="cr-subtitle">{t('cr.subtitle')}</p>
        </div>
        <div className="cr-title-actions">
          <button className="btn btn-green cr-btn-reminders">
            {t('cr.payment_reminders')}
          </button>
          <button className="btn cr-btn-white">
            {t('cr.open_khata')}
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="cr-metrics-grid">
        <MetricCard 
          title={t('cr.total_outstanding')} 
          amount="INR 0.00" 
          subtext={t('cr.total_outstanding_sub')}
          barColor="bg-red-600"
          barWidth="100%"
        />
        <MetricCard 
          title={t('cr.customers_with_credit')} 
          amount="0" 
          subtext={t('cr.customers_with_credit_sub')}
          barColor="bg-blue-600"
          barWidth="10%"
        />
        <MetricCard 
          title={t('cr.average_balance')} 
          amount="INR 0.00" 
          subtext={t('cr.average_balance_sub')}
          barColor="bg-gray-200"
          barWidth="100%"
        />
        <MetricCard 
          title={t('cr.limit_watch')} 
          amount="0" 
          subtext={t('cr.limit_watch_sub')}
          barColor="bg-gray-200"
          barWidth="100%"
        />
      </div>

      {/* Middle Grid */}
      <div className="cr-middle-grid">
        {/* Age Analysis */}
        <div className="cr-card">
          <div className="cr-card-header">
            <h4>{t('cr.age_analysis')}</h4>
            <p className="cr-card-sub">{t('cr.age_analysis_sub')}</p>
          </div>
          <div className="cr-age-list">
            <div className="cr-age-row">
              <span className="cr-age-label font-600 text-gray-900">0-30 days</span>
              <div className="cr-age-bar-wrapper">
                <div className="cr-age-bar bg-gray-100" style={{ width: '100%' }}></div>
              </div>
              <span className="cr-age-amt font-700 text-gray-900">INR 0.00</span>
            </div>
            <div className="cr-age-row">
              <span className="cr-age-label font-600 text-gray-900">31-60 days</span>
              <div className="cr-age-bar-wrapper">
                <div className="cr-age-bar bg-gray-100" style={{ width: '100%' }}></div>
              </div>
              <span className="cr-age-amt font-700 text-gray-900">INR 0.00</span>
            </div>
            <div className="cr-age-row">
              <span className="cr-age-label font-600 text-gray-900">61-90 days</span>
              <div className="cr-age-bar-wrapper">
                <div className="cr-age-bar bg-gray-100" style={{ width: '100%' }}></div>
              </div>
              <span className="cr-age-amt font-700 text-gray-900">INR 0.00</span>
            </div>
            <div className="cr-age-row">
              <span className="cr-age-label font-600 text-gray-900">90+ days</span>
              <div className="cr-age-bar-wrapper">
                <div className="cr-age-bar bg-gray-100" style={{ width: '100%' }}></div>
              </div>
              <span className="cr-age-amt font-700 text-gray-900">INR 0.00</span>
            </div>
          </div>
        </div>

        {/* Priority Follow-Up */}
        <div className="cr-card">
          <div className="cr-card-header">
            <h4>{t('cr.priority_follow_up')}</h4>
            <p className="cr-card-sub">{t('cr.priority_follow_up_sub')}</p>
          </div>
          <div className="cr-empty-state">
            <span>{t('cr.no_outstanding')}</span>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="cr-card mt-0">
        <div className="cr-table-header-flex">
          <div className="cr-card-header">
            <h4>{t('cr.customers_outstanding_balance')}</h4>
            <p className="cr-card-sub">{t('cr.customers_outstanding_balance_sub')}</p>
          </div>
          <span className="cr-records-count">{t('cr.no_records')}</span>
        </div>
        
        <div className="cr-table-wrapper">
          <table className="cr-table">
            <thead>
              <tr>
                <th>{t('cr.table.customer')}</th>
                <th>{t('cr.table.contact')}</th>
                <th>{t('cr.table.outstanding')}</th>
                <th>{t('cr.table.credit_limit')}</th>
                <th>{t('cr.table.limit_usage')}</th>
                <th>{t('cr.table.last_credit')}</th>
                <th>{t('cr.table.payments')}</th>
                <th>{t('cr.table.action')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={8} className="cr-empty-cell">
                  {t('cr.no_outstanding_found')}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
