"use client";

import React from 'react';
import { Package, AlertTriangle, XCircle, BarChart3, ClipboardList, RefreshCw, AlertOctagon } from 'lucide-react';
import Link from 'next/link';
import './page.css';

export default function InventoryPage() {
  return (
    <div className="inventory-container">
      <div className="inventory-header">
        <div className="inv-title-section">
          <h2 className="inv-title">Inventory Management</h2>
          <p className="inv-subtitle">Manage stock levels and track inventory movements</p>
        </div>
        <div className="inv-actions-top">
          <Link href="/inventory/stock-overview" className="btn btn-primary"><BarChart3 size={16} /> Stock Overview</Link>
          <Link href="/inventory/movements" className="btn btn-blue"><ClipboardList size={16} /> Stock Movements</Link>
          <Link href="/inventory/batch-stock" className="btn btn-primary"><RefreshCw size={16} /> Batch Stock</Link>
          <Link href="/inventory/low-stock" className="btn btn-danger"><AlertOctagon size={16} /> Low Stock (0)</Link>
        </div>
      </div>

      <div className="inv-stats-grid">
        <div className="inv-stat-card">
          <div className="inv-stat-info">
            <div className="inv-stat-label">Total Products</div>
            <div className="inv-stat-value">1</div>
          </div>
          <div className="inv-stat-icon-wrapper bg-blue-light text-blue">
            <Package size={24} />
          </div>
        </div>

        <div className="inv-stat-card">
          <div className="inv-stat-info">
            <div className="inv-stat-label">Low Stock Items</div>
            <div className="inv-stat-value text-red">0</div>
          </div>
          <div className="inv-stat-icon-wrapper bg-red-light text-red">
            <AlertTriangle size={24} />
          </div>
        </div>

        <div className="inv-stat-card">
          <div className="inv-stat-info">
            <div className="inv-stat-label">Out of Stock</div>
            <div className="inv-stat-value">0</div>
          </div>
          <div className="inv-stat-icon-wrapper bg-red-light text-red">
            <XCircle size={24} />
          </div>
        </div>
      </div>

      <div className="inv-filter-bar">
        <input type="text" className="inv-search-input" placeholder="Search products..." />
        <select className="inv-status-select">
          <option>All Stock Status</option>
          <option>In Stock</option>
          <option>Low Stock</option>
          <option>Out of Stock</option>
        </select>
        <button className="btn btn-primary inv-filter-btn">Filter</button>
        <button className="btn btn-outline inv-clear-btn">Clear</button>
      </div>

      <div className="inv-table-container">
        <table className="inv-table">
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>CATEGORY</th>
              <th>CURRENT STOCK</th>
              <th>LOW STOCK THRESHOLD</th>
              <th>STATUS</th>
              <th className="text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {/* Main Product Row */}
            <tr className="inv-parent-row">
              <td>
                <div className="inv-product-col">
                  <span className="fw-600 inv-product-name">Test</span>
                  <span className="inv-subtext">SKU: SKU-UPC2LZJO</span>
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
                  <span className="inv-subtext">SKU: SKU-UPC2LZJO-5KG</span>
                </div>
              </td>
              <td className="text-muted fw-500">N/A</td>
              <td className="fw-700">99 Box</td>
              <td className="text-muted">10 Box</td>
              <td>
                <span className="inv-status-text-red">In Stock</span>
              </td>
              <td className="text-right">
                <button className="inv-action-btn-green">Adjust Stock</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
