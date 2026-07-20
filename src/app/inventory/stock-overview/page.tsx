"use client";

import React from 'react';
import { Package, Layers, AlertTriangle, MinusCircle, Calendar, View, Box } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function StockOverviewPage() {
  const { t } = useLanguage();

  return (
    <div className="so-container">
      {/* Top Stats Ribbon */}
      <div className="so-stats-ribbon">
        <div className="so-stat-card">
          <div className="so-icon-box bg-green">
            <Package size={24} color="white" />
          </div>
          <div className="so-stat-content">
            <div className="so-stat-title">{t('inventory.total_products')}</div>
            <div className="so-stat-value">1</div>
            <div className="so-stat-sub">{t('inventory.all_categories')}</div>
          </div>
        </div>

        <div className="so-stat-card">
          <div className="so-icon-box bg-green">
            <Layers size={24} color="white" />
          </div>
          <div className="so-stat-content">
            <div className="so-stat-title">{t('inventory.total_stock_qty')}</div>
            <div className="so-stat-value">99</div>
            <div className="so-stat-sub">{t('inventory.all_units')}</div>
          </div>
        </div>

        <div className="so-stat-card">
          <div className="so-icon-box bg-orange">
            <AlertTriangle size={24} color="white" />
          </div>
          <div className="so-stat-content">
            <div className="so-stat-title">{t('inventory.low_stock_items')}</div>
            <div className="so-stat-value">0</div>
            <div className="so-stat-sub">{t('inventory.need_attention')}</div>
          </div>
        </div>

        <div className="so-stat-card">
          <div className="so-icon-box bg-red">
            <MinusCircle size={24} color="white" />
          </div>
          <div className="so-stat-content">
            <div className="so-stat-title">{t('inventory.out_of_stock')}</div>
            <div className="so-stat-value">0</div>
            <div className="so-stat-sub">{t('inventory.restock_required')}</div>
          </div>
        </div>

        <div className="so-stat-card">
          <div className="so-icon-box bg-blue">
            <Calendar size={24} color="white" />
          </div>
          <div className="so-stat-content">
            <div className="so-stat-title">{t('inventory.expiring_soon')}</div>
            <div className="so-stat-value">0</div>
            <div className="so-stat-sub">{t('inventory.within_30_days')}</div>
          </div>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="so-filters-row">
        <div className="so-chips">
          <button className="so-chip active-all">{t('inventory.all')}</button>
          <button className="so-chip outline-green">{t('inventory.in_stock')}</button>
          <button className="so-chip outline-orange">{t('inventory.low_stock')}</button>
          <button className="so-chip outline-red">{t('inventory.out_of_stock')}</button>
          <button className="so-chip outline-blue">{t('inventory.expiring_soon')}</button>
        </div>
        <select className="so-filter-select">
          <option>{t('inventory.all_categories')}</option>
          <option>Other</option>
        </select>
      </div>

      {/* Split Layout */}
      <div className="so-split-layout">
        {/* Main Content (Left) */}
        <div className="so-main-col">
          
          {/* Visual Explorer */}
          <div className="so-explorer-card">
            <div className="so-explorer-content">
              <div className="so-explorer-category">
                <div className="so-folder-icon">
                  <Box size={20} className="folder-svg" />
                </div>
                <div className="so-folder-title">Other</div>
                <div className="so-folder-count">1 {t('inventory.items')}</div>
              </div>
              <div className="so-explorer-product">
                <div className="so-product-icon"></div>
                <div className="so-product-details">
                  <div className="sp-name">Test</div>
                  <div className="sp-variant">5kg</div>
                  <div className="sp-stock-row">
                    <span className="sp-stock">99 Box</span>
                    <span className="sp-status">{t('inventory.in_stock')}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="so-gold-gradient-line"></div>
          </div>

          {/* Category Stock Summary */}
          <div className="so-card">
            <h3 className="so-card-title">{t('inventory.category_stock_summary')}</h3>
            <div className="so-summary-list">
              <div className="so-summary-item">
                <div className="so-summary-icon-small bg-green-light">O</div>
                <div className="so-summary-details">
                  <div className="ss-top">
                    <span className="ss-name">Other</span>
                    <span className="ss-qty">99 {t('inventory.qty')}</span>
                  </div>
                  <div className="ss-bottom">
                    <div className="ss-progress-bar">
                      <div className="ss-progress-fill bg-green" style={{ width: '100%' }}></div>
                    </div>
                    <span className="ss-pct">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Stock Overview Table */}
          <div className="so-card so-table-card">
            <h3 className="so-card-title">{t('inventory.recent_stock_overview')}</h3>
            <div className="so-table-wrapper">
              <table className="so-table">
                <thead>
                  <tr>
                    <th>{t('inventory.table.product')}</th>
                    <th>{t('inventory.table.category')}</th>
                    <th>{t('inventory.table.current_stock')}</th>
                    <th>{t('inventory.table.unit')}</th>
                    <th>{t('inventory.table.price')}</th>
                    <th>{t('inventory.table.stock_value')}</th>
                    <th>{t('inventory.table.status')}</th>
                    <th>{t('inventory.table.last_updated')}</th>
                    <th>{t('inventory.table.action')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="st-product">
                        <div className="st-product-icon bg-green-light"></div>
                        <div className="st-product-text">
                          <span className="st-name">Test</span>
                          <span className="st-variant">5kg</span>
                        </div>
                      </div>
                    </td>
                    <td><span className="st-badge bg-green-light text-green">Other</span></td>
                    <td className="fw-600">99</td>
                    <td>Box</td>
                    <td>100.00</td>
                    <td>9,900.00</td>
                    <td><span className="st-status-badge text-green border-green">{t('inventory.in_stock')}</span></td>
                    <td className="text-muted">19 Jul 2026</td>
                    <td><span className="st-action">{t('inventory.view')}</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="st-footer-link">
              <a href="#">{t('inventory.view_batch_stock')}</a>
            </div>
          </div>

        </div>

        {/* Sidebar (Right) */}
        <div className="so-side-col">
          
          <div className="so-card">
            <div className="so-card-header">
              <h3 className="so-card-title m-0">{t('inventory.low_stock_alerts')}</h3>
              <a href="#" className="so-view-all">{t('inventory.view_all')}</a>
            </div>
            <div className="so-empty-state">{t('inventory.no_low_stock_alerts_right_now')}</div>
          </div>

          <div className="so-card">
            <div className="so-card-header">
              <h3 className="so-card-title m-0">{t('inventory.expiry_alerts')} <span className="text-muted text-sm fw-normal">({t('inventory.within_30_days')})</span></h3>
              <a href="#" className="so-view-all">{t('inventory.view_all')}</a>
            </div>
            <div className="so-empty-state">{t('inventory.no_batches_expiring')}</div>
          </div>

          <div className="so-card">
            <h3 className="so-card-title">{t('inventory.stock_health')}</h3>
            <div className="so-health-wrapper">
              
              <div className="so-donut-container">
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path className="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path className="circle"
                    strokeDasharray="100, 100"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="donut-center-text">
                  <span className="dc-label">{t('inventory.total')}</span>
                  <span className="dc-val">1</span>
                  <span className="dc-label">{t('inventory.products')}</span>
                </div>
              </div>

              <div className="so-health-legend">
                <div className="shl-row">
                  <div className="shl-left"><span className="shl-dot bg-green"></span> {t('inventory.in_stock')}</div>
                  <div className="shl-right">1 (100%)</div>
                </div>
                <div className="shl-row">
                  <div className="shl-left"><span className="shl-dot bg-orange"></span> {t('inventory.low_stock')}</div>
                  <div className="shl-right">0 (0%)</div>
                </div>
                <div className="shl-row">
                  <div className="shl-left"><span className="shl-dot bg-red"></span> {t('inventory.out_of_stock')}</div>
                  <div className="shl-right">0 (0%)</div>
                </div>
                <div className="shl-row">
                  <div className="shl-left"><span className="shl-dot bg-blue"></span> {t('inventory.expiring_soon')}</div>
                  <div className="shl-right">0 (0%)</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
