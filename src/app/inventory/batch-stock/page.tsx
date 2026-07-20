"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function BatchStockPage() {
  const { t } = useLanguage();

  return (
    <div className="batch-container">
      <div className="batch-header">
        <div className="bs-title-section">
          <h2 className="bs-title">{t('inventory.batch_stock_title')}</h2>
          <p className="bs-subtitle">{t('inventory.batch_stock_subtitle')}</p>
        </div>
        <div className="bs-header-actions">
          <Link href="/inventory" className="btn btn-secondary">{t('inventory.inventory_btn')}</Link>
          <Link href="/inventory/stock-overview" className="btn btn-primary">{t('inventory.stock_overview_btn')}</Link>
        </div>
      </div>

      <div className="bs-search-card">
        <input 
          type="text" 
          className="bs-search-input" 
          placeholder={t('inventory.search_batch_placeholder')} 
        />
        <button className="btn btn-primary bs-search-btn">{t('inventory.search_btn')}</button>
      </div>

      <div className="bs-table-container">
        <table className="bs-table">
          <thead>
            <tr>
              <th>{t('inventory.table.product')}</th>
              <th>{t('inventory.table.variant')}</th>
              <th>{t('inventory.table.batch_no')}</th>
              <th>{t('inventory.table.expiry')}</th>
              <th>{t('inventory.table.supplier')}</th>
              <th>{t('inventory.table.current_stock')}</th>
              <th>{t('inventory.table.purchase_price')}</th>
              <th>{t('inventory.table.selling_price')}</th>
              <th>{t('inventory.table.status')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fw-600 text-primary">Test</td>
              <td>5kg</td>
              <td>OPENING-980-1411</td>
              <td>{t('inventory.na')}</td>
              <td>{t('inventory.na')}</td>
              <td className="fw-700 text-primary">99.00</td>
              <td>₹100.00</td>
              <td>₹120.00</td>
              <td><span className="badge-healthy">{t('inventory.healthy')}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
