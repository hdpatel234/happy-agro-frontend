"use client";

import React from 'react';
import { Package, AlertTriangle, XCircle, BarChart3, ClipboardList, RefreshCw, AlertOctagon } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function InventoryPage() {
  const { t } = useLanguage();

  return (
    <div className="inventory-container">
      <div className="inventory-header">
        <div className="inv-title-section">
          <h2 className="inv-title">{t('inventory.title')}</h2>
          <p className="inv-subtitle">{t('inventory.subtitle')}</p>
        </div>
        <div className="inv-actions-top">
          <Link href="/inventory/stock-overview" className="btn btn-primary"><BarChart3 size={16} /> {t('inventory.stock_overview_btn')}</Link>
          <Link href="/inventory/movements" className="btn btn-blue"><ClipboardList size={16} /> {t('inventory.stock_movements_btn')}</Link>
          <Link href="/inventory/batch-stock" className="btn btn-primary"><RefreshCw size={16} /> {t('inventory.batch_stock_btn')}</Link>
          <Link href="/inventory/low-stock" className="btn btn-danger"><AlertOctagon size={16} /> {t('inventory.low_stock_btn')}</Link>
        </div>
      </div>

      <div className="inv-stats-grid">
        <div className="inv-stat-card">
          <div className="inv-stat-info">
            <div className="inv-stat-label">{t('inventory.total_products')}</div>
            <div className="inv-stat-value">1</div>
          </div>
          <div className="inv-stat-icon-wrapper bg-blue-light text-blue">
            <Package size={24} />
          </div>
        </div>

        <div className="inv-stat-card">
          <div className="inv-stat-info">
            <div className="inv-stat-label">{t('inventory.low_stock_items')}</div>
            <div className="inv-stat-value text-red">0</div>
          </div>
          <div className="inv-stat-icon-wrapper bg-red-light text-red">
            <AlertTriangle size={24} />
          </div>
        </div>

        <div className="inv-stat-card">
          <div className="inv-stat-info">
            <div className="inv-stat-label">{t('inventory.out_of_stock')}</div>
            <div className="inv-stat-value">0</div>
          </div>
          <div className="inv-stat-icon-wrapper bg-red-light text-red">
            <XCircle size={24} />
          </div>
        </div>
      </div>

      <div className="inv-filter-bar">
        <input type="text" className="inv-search-input" placeholder={t('inventory.search_products')} />
        <select className="inv-status-select">
          <option>{t('inventory.all_stock_status')}</option>
          <option>{t('inventory.in_stock')}</option>
          <option>{t('inventory.low_stock')}</option>
          <option>{t('inventory.out_of_stock')}</option>
        </select>
        <button className="btn btn-primary inv-filter-btn">{t('inventory.filter_btn')}</button>
        <button className="btn btn-outline inv-clear-btn">{t('inventory.clear_btn')}</button>
      </div>

      <div className="inv-table-container">
        <table className="inv-table">
          <thead>
            <tr>
              <th>{t('inventory.table.product')}</th>
              <th>{t('inventory.table.category')}</th>
              <th>{t('inventory.table.current_stock')}</th>
              <th>{t('inventory.table.low_stock_threshold')}</th>
              <th>{t('inventory.table.status')}</th>
              <th className="text-right">{t('inventory.table.actions')}</th>
            </tr>
          </thead>
          <tbody>
            {/* Main Product Row */}
            <tr className="inv-parent-row">
              <td>
                <div className="inv-product-col">
                  <span className="fw-600 inv-product-name">Test</span>
                  <span className="inv-subtext">{t('inventory.sku')} SKU-UPC2LZJO</span>
                </div>
              </td>
              <td className="text-muted"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            {/* Variant Row */}
            <tr className="inv-child-row">
              <td className="inv-child-product-td">
                <div className="inv-branch-icon">
                  <div className="inv-branch-line"></div>
                </div>
                <div className="inv-product-col">
                  <span className="inv-variant-name">5kg</span>
                  <span className="inv-subtext">{t('inventory.sku')} SKU-UPC2LZJO-5KG</span>
                </div>
              </td>
              <td className="text-muted fw-500">{t('inventory.na')}</td>
              <td className="fw-700">99 Box</td>
              <td className="text-muted">10 Box</td>
              <td>
                <span className="inv-status-text-red">{t('inventory.in_stock')}</span>
              </td>
              <td className="text-right">
                <button className="inv-action-btn-green">{t('inventory.adjust_stock')}</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
