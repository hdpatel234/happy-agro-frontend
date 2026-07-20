"use client";

import React from 'react';
import Link from 'next/link';
import { Pencil, MapPin, ClipboardList } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function CustomerDetailsPage() {
  const { t } = useLanguage();

  return (
    <div className="cd-container">
      {/* Top Header */}
      <div className="cd-header">
        <div className="cd-title-box">
          <h2 className="cd-title">Test Name</h2>
          <span className="cd-header-icon">🏢</span>
        </div>
        <Link href="/customers/1/edit" className="btn cd-edit-btn">
          <Pencil size={16} /> {t('customers.edit_customer')}
        </Link>
      </div>

      {/* Info Cards Row */}
      <div className="cd-grid-4">
        <div className="cd-info-card bg-blue">
          <span className="cd-info-label text-blue">{t('customers.email_caps')}</span>
          <span className="cd-info-value">-</span>
        </div>
        <div className="cd-info-card bg-purple">
          <span className="cd-info-label text-purple">{t('customers.address_caps')}</span>
          <span className="cd-info-value">-</span>
        </div>
        <div className="cd-info-card bg-orange">
          <span className="cd-info-label text-orange">{t('customers.gstin_caps')}</span>
          <span className="cd-info-value">-</span>
        </div>
        <div className="cd-info-card bg-green">
          <span className="cd-info-label text-green">{t('customers.credit_limit_caps')}</span>
          <span className="cd-info-value">₹0.00</span>
        </div>
      </div>

      {/* Current Balance Card */}
      <div className="cd-balance-card">
        <div className="cd-balance-content">
          <span className="cd-balance-label">{t('customers.current_balance')}</span>
          <div className="cd-balance-amount">₹0.00</div>
          <div className="cd-balance-subtitle">
            <MapPin size={14} className="cd-pin-icon" />
            <span>{t('customers.payable_subtitle')}</span>
          </div>
        </div>
        <div className="cd-balance-watermark">✓</div>
      </div>

      {/* Financial Metrics Row */}
      <div className="cd-grid-4">
        <div className="cd-metric-card border-blue bg-light-blue">
          <span className="cd-metric-label text-blue">{t('customers.opening_balance_caps')}</span>
          <span className="cd-metric-value text-blue">₹0.00</span>
        </div>
        <div className="cd-metric-card border-green bg-light-green">
          <span className="cd-metric-label text-green">{t('customers.total_credits_caps')}</span>
          <span className="cd-metric-value text-green">₹120.00</span>
        </div>
        <div className="cd-metric-card border-red bg-light-red">
          <span className="cd-metric-label text-red">{t('customers.total_debits_caps')}</span>
          <span className="cd-metric-value text-red">₹120.00</span>
        </div>
        <div className="cd-metric-card border-purple bg-light-purple">
          <span className="cd-metric-label text-purple">{t('customers.closing_balance_caps')}</span>
          <span className="cd-metric-value text-purple">₹0.00</span>
        </div>
      </div>

      {/* Transaction History Section */}
      <div className="cd-transactions-section">
        <div className="cd-section-header">
          <h3 className="cd-section-title">
            <ClipboardList size={20} className="cd-section-icon" />
            {t('customers.transaction_history')}
          </h3>
          <span className="cd-total-label">{t('customers.total_label')} 2 {t('customers.transactions')}</span>
        </div>

        {/* Filter Block */}
        <div className="cd-filter-card">
          <div className="cd-grid-4">
            <div className="cd-form-group">
              <label>{t('customers.transaction_type')}</label>
              <select className="cd-input">
                <option>{t('customers.all_transactions')}</option>
              </select>
            </div>
            <div className="cd-form-group">
              <label>{t('customers.start_date')}</label>
              <input type="date" className="cd-input" />
            </div>
            <div className="cd-form-group">
              <label>{t('customers.end_date')}</label>
              <input type="date" className="cd-input" />
            </div>
            <div className="cd-form-group">
              <label>{t('customers.search_label')}</label>
              <input type="text" className="cd-input" placeholder={t('customers.search_reference_placeholder')} />
            </div>
          </div>
          <div className="cd-filter-actions">
            <button className="btn btn-primary cd-apply-btn">
              <span className="cd-filter-dot"></span> {t('customers.apply_filters')}
            </button>
            <button className="btn cd-reset-btn">
              ↻ {t('customers.reset')}
            </button>
          </div>
        </div>

        {/* Transaction List */}
        <div className="cd-transaction-list">
          {/* Transaction 1 */}
          <div className="cd-transaction-item">
            <div className="cd-tx-main">
              <div className="cd-tx-info">
                <h4 className="cd-tx-title">Cash Payment - Invoice #INV-20260719-0001</h4>
                <div className="cd-tx-meta">
                  <span className="cd-badge-gray">{t('customers.debit')}</span>
                  <span className="cd-tx-date">Jul 19, 2026</span>
                </div>
              </div>
              <div className="cd-tx-amount text-green fw-bold">+₹120.00</div>
            </div>
            <div className="cd-tx-subrow">
              <span className="cd-tx-ref">{t('customers.reference')} <Link href="#" className="cd-ref-link">invoice #742</Link></span>
            </div>
          </div>

          {/* Transaction 2 */}
          <div className="cd-transaction-item">
            <div className="cd-tx-main">
              <div className="cd-tx-info">
                <h4 className="cd-tx-title">Sale - Invoice #INV-20260719-0001</h4>
                <div className="cd-tx-meta">
                  <span className="cd-badge-gray">{t('customers.credit')}</span>
                  <span className="cd-tx-date">Jul 19, 2026</span>
                </div>
              </div>
              <div className="cd-tx-amount text-red fw-bold">-₹120.00</div>
            </div>
            <div className="cd-tx-subrow">
              <span className="cd-tx-ref">{t('customers.reference')} <Link href="#" className="cd-ref-link">invoice #742</Link></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
