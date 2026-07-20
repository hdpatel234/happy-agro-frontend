"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function StockMovementsPage() {
  const { t } = useLanguage();

  return (
    <div className="movements-container">
      <div className="movements-header">
        <div className="sm-title-section">
          <h2 className="sm-title">{t('inventory.stock_movements_title')}</h2>
          <p className="sm-subtitle">{t('inventory.stock_movements_subtitle')}</p>
        </div>
        <Link href="/inventory" className="sm-back-link">
          &larr; {t('inventory.back_to_inventory')}
        </Link>
      </div>

      <div className="sm-filter-bar">
        <select className="sm-select">
          <option>{t('inventory.all_types')}</option>
          <option>{t('inventory.stock_in')}</option>
          <option>{t('inventory.stock_out')}</option>
        </select>
        
        <input type="date" className="sm-date-input" />
        <input type="date" className="sm-date-input" />
        
        <button className="btn btn-primary sm-filter-btn">{t('inventory.filter_btn')}</button>
      </div>

      <div className="sm-table-container">
        <table className="sm-table">
          <thead>
            <tr>
              <th>{t('inventory.table.date')}</th>
              <th>{t('inventory.table.product')}</th>
              <th>{t('inventory.table.type')}</th>
              <th>{t('inventory.table.quantity')}</th>
              <th>{t('inventory.table.reason')}</th>
              <th>{t('inventory.table.performed_by')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jul 19, 2026 22:46</td>
              <td className="fw-600">Test</td>
              <td><span className="badge-out">{t('inventory.stock_out')}</span></td>
              <td className="qty-out">1</td>
              <td>Sale</td>
              <td>Haresh Patel</td>
            </tr>
            <tr>
              <td>Jul 19, 2026 22:46</td>
              <td className="fw-600">Test</td>
              <td><span className="badge-in">{t('inventory.stock_in')}</span></td>
              <td className="fw-600">100</td>
              <td>Opening stock added from product creation</td>
              <td>Haresh Patel</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
