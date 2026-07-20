"use client";

import React from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function PurchasesPage() {
  const { t } = useLanguage();
  return (
    <div className="purchases-container">
      <div className="purchases-header">
        <div className="purchases-title-section">
          <h2 className="purchases-title">{t('purchases.title')}</h2>
          <p className="purchases-subtitle">{t('purchases.subtitle')}</p>
        </div>
        <div className="purchases-header-actions">
          <button className="btn btn-danger-pill">
            {t('purchases.total_pending')} ₹0.00
          </button>
          <Link href="/purchases/create" className="btn btn-primary purchases-add-btn">
            <Plus size={16} /> {t('purchases.add_purchase')}
          </Link>
        </div>
      </div>

      <div className="purchases-filter-card">
        <input 
          type="text" 
          className="purchase-search" 
          placeholder={t('purchases.search_placeholder')} 
        />
        <select className="purchase-select">
          <option>{t('purchases.all_suppliers')}</option>
        </select>
        <select className="purchase-select">
          <option>{t('purchases.all_payment_status')}</option>
          <option>{t('purchases.paid')}</option>
          <option>{t('purchases.unpaid')}</option>
        </select>
        <button className="btn btn-primary purchase-filter-btn">{t('purchases.filter')}</button>
        <button className="btn purchase-clear-btn">{t('purchases.clear')}</button>
      </div>

      <div className="purchases-table-container">
        <table className="purchases-table">
          <thead>
            <tr>
              <th>{t('purchases.table.date')}</th>
              <th>{t('purchases.table.invoice')}</th>
              <th>{t('purchases.table.supplier')}</th>
              <th>{t('purchases.table.items')}</th>
              <th>{t('purchases.table.total')}</th>
              <th>{t('purchases.table.payment')}</th>
              <th>{t('purchases.table.actions')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={7} className="purchases-empty-cell">
                {t('purchases.no_purchases')} <Link href="/purchases/create" className="empty-link">{t('purchases.create_first')}</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
