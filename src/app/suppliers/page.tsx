"use client";

import React from 'react';
import Link from 'next/link';
import { Plus, Search, Factory } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function SuppliersPage() {
  const { t } = useLanguage();
  return (
    <div className="suppliers-container">
      {/* Hero Header */}
      <div className="sup-hero-card">
        <div className="sup-hero-text">
          <h2 className="sup-hero-title">{t('suppliers.title')}</h2>
          <p className="sup-hero-subtitle">{t('suppliers.subtitle')}</p>
        </div>
        <Link href="/suppliers/create" className="btn sup-add-btn">
          <Plus size={16} /> {t('suppliers.add_supplier')}
        </Link>
      </div>

      {/* Metrics Grid */}
      <div className="sup-metrics-grid">
        <div className="sup-metric-card">
          <span className="sup-metric-label">{t('suppliers.total_suppliers')}</span>
          <span className="sup-metric-value">0</span>
          <span className="sup-metric-desc">{t('suppliers.total_suppliers_desc')}</span>
        </div>
        <div className="sup-metric-card">
          <span className="sup-metric-label">{t('suppliers.active_suppliers')}</span>
          <span className="sup-metric-value">0</span>
          <span className="sup-metric-desc">{t('suppliers.active_suppliers_desc')}</span>
        </div>
        <div className="sup-metric-card">
          <span className="sup-metric-label">{t('suppliers.purchase_orders')}</span>
          <span className="sup-metric-value">0</span>
          <span className="sup-metric-desc">{t('suppliers.purchase_orders_desc')}</span>
        </div>
        <div className="sup-metric-card">
          <span className="sup-metric-label">{t('suppliers.paid_amount')}</span>
          <span className="sup-metric-value text-green">INR 0.00</span>
          <span className="sup-metric-desc">{t('suppliers.paid_amount_desc')}</span>
        </div>
        <div className="sup-metric-card">
          <span className="sup-metric-label">{t('suppliers.pending_amount')}</span>
          <span className="sup-metric-value text-green">INR 0.00</span>
          <span className="sup-metric-desc">{t('suppliers.pending_amount_desc')}</span>
        </div>
      </div>

      {/* Filter Row */}
      <div className="sup-filter-row">
        <div className="sup-search-wrapper">
          <Search size={18} className="sup-search-icon" />
          <input 
            type="text" 
            className="sup-search-input" 
            placeholder={t('suppliers.search_placeholder')} 
          />
        </div>
        <button className="btn sup-search-btn">{t('suppliers.search')}</button>
        <button className="btn sup-clear-btn">{t('suppliers.clear')}</button>
      </div>

      {/* Directory Table Area */}
      <div className="sup-directory-card">
        <div className="sup-dir-header">
          <div className="sup-dir-title-box">
            <h3 className="sup-dir-title">{t('suppliers.directory_title')}</h3>
            <p className="sup-dir-subtitle">{t('suppliers.directory_subtitle')}</p>
          </div>
          <span className="sup-dir-count">0 {t('suppliers.records')}</span>
        </div>

        <div className="sup-table-wrapper">
          <table className="sup-table">
            <thead>
              <tr>
                <th>{t('suppliers.table.supplier')}</th>
                <th>{t('suppliers.table.contact')}</th>
                <th>{t('suppliers.table.contact_person')}</th>
                <th>{t('suppliers.table.purchase_orders')}</th>
                <th>{t('suppliers.table.purchase_value')}</th>
                <th>{t('suppliers.table.paid')}</th>
                <th>{t('suppliers.table.pending')}</th>
                <th>{t('suppliers.table.gstin')}</th>
                <th>{t('suppliers.table.status')}</th>
                <th>{t('suppliers.table.actions')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={10} className="sup-empty-cell">
                  <div className="sup-empty-state">
                    <Factory size={48} className="sup-empty-icon" />
                    <h4 className="sup-empty-title">{t('suppliers.no_suppliers')}</h4>
                    <p className="sup-empty-desc">{t('suppliers.start_adding')}</p>
                    <Link href="/suppliers/create" className="btn sup-empty-add-btn">{t('suppliers.add_supplier')}</Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
