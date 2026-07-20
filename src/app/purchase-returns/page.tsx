"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function PurchaseReturnsPage() {
  const { t } = useLanguage();
  return (
    <div className="pr-container">
      <div className="pr-header-hidden">
        <h2>{t('pr.title')}</h2>
      </div>

      {/* Top Action Card */}
      <div className="pr-action-card">
        <div className="pr-action-text">
          <h3 className="pr-action-title">{t('pr.create_title')}</h3>
          <p className="pr-action-subtitle">{t('pr.create_subtitle')}</p>
        </div>
        <Link href="/purchases" className="btn btn-primary pr-open-purchases-btn">
          {t('pr.open_purchases')}
        </Link>
      </div>

      {/* Metrics Grid */}
      <div className="pr-metrics-grid">
        <div className="pr-metric-card">
          <span className="pr-metric-label">{t('pr.today_return')}</span>
          <span className="pr-metric-value">INR 0.00</span>
        </div>
        <div className="pr-metric-card">
          <span className="pr-metric-label">{t('pr.monthly_return')}</span>
          <span className="pr-metric-value">INR 0.00</span>
        </div>
        <div className="pr-metric-card">
          <span className="pr-metric-label">{t('pr.supplier_adj_pending')}</span>
          <span className="pr-metric-value pr-text-orange">0</span>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="pr-filter-card">
        <div className="pr-filter-row">
          <input type="date" className="pr-input" />
          <input type="date" className="pr-input" />
          <select className="pr-select">
            <option>{t('pr.all_suppliers')}</option>
          </select>
          <select className="pr-select">
            <option>{t('pr.all_status')}</option>
          </select>
          <select className="pr-select">
            <option>{t('pr.all_adj_types')}</option>
          </select>
        </div>
        <div className="pr-filter-actions">
          <button className="btn btn-primary pr-filter-btn">{t('pr.filter')}</button>
          <button className="btn pr-clear-btn">{t('pr.clear')}</button>
        </div>
      </div>

      {/* Table */}
      <div className="pr-table-container">
        <table className="pr-table">
          <thead>
            <tr>
              <th>{t('pr.table.return_no')}</th>
              <th>{t('pr.table.date')}</th>
              <th>{t('pr.table.purchase_bill')}</th>
              <th>{t('pr.table.supplier')}</th>
              <th>{t('pr.table.amount')}</th>
              <th>{t('pr.table.adj_type')}</th>
              <th>{t('pr.table.status')}</th>
              <th>{t('pr.table.created_by')}</th>
              <th>{t('pr.table.action')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={9} className="pr-empty-cell">
                <div className="pr-empty-state">
                  <p>{t('pr.no_returns_found')}</p>
                  <Link href="/purchases" className="pr-empty-link">{t('pr.open_purchases_to_create')}</Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
