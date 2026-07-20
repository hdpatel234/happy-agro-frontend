"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function SalesReturnsPage() {
  const { t } = useLanguage();
  return (
    <div className="sr-container">
      <div className="sr-header-hidden">
        <h2>{t('sales_returns.title')}</h2>
      </div>

      {/* Top Action Card */}
      <div className="sr-action-card">
        <div className="sr-action-text">
          <h3 className="sr-action-title">{t('sales_returns.create')}</h3>
          <p className="sr-action-subtitle">{t('sales_returns.create_sub')}</p>
        </div>
        <Link href="/orders" className="btn btn-primary sr-open-orders-btn">
          {t('sales_returns.open_orders')}
        </Link>
      </div>

      {/* Metrics Grid */}
      <div className="sr-metrics-grid">
        <div className="sr-metric-card">
          <span className="sr-metric-label">{t('sales_returns.today')}</span>
          <span className="sr-metric-value">INR 0.00</span>
        </div>
        <div className="sr-metric-card">
          <span className="sr-metric-label">{t('sales_returns.monthly')}</span>
          <span className="sr-metric-value">INR 0.00</span>
        </div>
        <div className="sr-metric-card">
          <span className="sr-metric-label">{t('sales_returns.refund_pending')}</span>
          <span className="sr-metric-value sr-text-orange">0</span>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="sr-filter-card">
        <div className="sr-filter-row">
          <input type="date" className="sr-input" />
          <input type="date" className="sr-input" />
          <select className="sr-select">
            <option>{t('sales_returns.all_customers')}</option>
          </select>
          <select className="sr-select">
            <option>{t('sales_returns.all_status')}</option>
          </select>
          <select className="sr-select">
            <option>{t('sales_returns.all_refund_types')}</option>
          </select>
        </div>
        <div className="sr-filter-actions">
          <button className="btn btn-primary sr-filter-btn">{t('sales_returns.filter')}</button>
          <button className="btn sr-clear-btn">{t('sales_returns.clear')}</button>
        </div>
      </div>

      {/* Table */}
      <div className="sr-table-container">
        <table className="sr-table">
          <thead>
            <tr>
              <th>{t('sales_returns.table.return_no')}</th>
              <th>{t('sales_returns.table.date')}</th>
              <th>{t('sales_returns.table.source')}</th>
              <th>{t('sales_returns.table.customer')}</th>
              <th>{t('sales_returns.table.amount')}</th>
              <th>{t('sales_returns.table.refund_type')}</th>
              <th>{t('sales_returns.table.status')}</th>
              <th>{t('sales_returns.table.created_by')}</th>
              <th>{t('sales_returns.table.action')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={9} className="sr-empty-cell">
                <div className="sr-empty-state">
                  <p>{t('sales_returns.no_returns')}</p>
                  <Link href="/orders" className="sr-empty-link">{t('sales_returns.open_orders_create')}</Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
