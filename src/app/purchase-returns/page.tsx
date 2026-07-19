"use client";

import React from 'react';
import Link from 'next/link';
import './page.css';

export default function PurchaseReturnsPage() {
  return (
    <div className="pr-container">
      <div className="pr-header-hidden">
        <h2>Purchase Returns</h2>
      </div>

      {/* Top Action Card */}
      <div className="pr-action-card">
        <div className="pr-action-text">
          <h3 className="pr-action-title">Create Purchase Return</h3>
          <p className="pr-action-subtitle">Purchase returns are created from an existing purchase bill.</p>
        </div>
        <Link href="/purchases" className="btn btn-primary pr-open-purchases-btn">
          Open Purchases
        </Link>
      </div>

      {/* Metrics Grid */}
      <div className="pr-metrics-grid">
        <div className="pr-metric-card">
          <span className="pr-metric-label">Today Purchase Return</span>
          <span className="pr-metric-value">INR 0.00</span>
        </div>
        <div className="pr-metric-card">
          <span className="pr-metric-label">Monthly Purchase Return</span>
          <span className="pr-metric-value">INR 0.00</span>
        </div>
        <div className="pr-metric-card">
          <span className="pr-metric-label">Supplier Adjustment Pending</span>
          <span className="pr-metric-value pr-text-orange">0</span>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="pr-filter-card">
        <div className="pr-filter-row">
          <input type="date" className="pr-input" />
          <input type="date" className="pr-input" />
          <select className="pr-select">
            <option>All Suppliers</option>
          </select>
          <select className="pr-select">
            <option>All Status</option>
          </select>
          <select className="pr-select">
            <option>All Adjustment Types</option>
          </select>
        </div>
        <div className="pr-filter-actions">
          <button className="btn btn-primary pr-filter-btn">Filter</button>
          <button className="btn pr-clear-btn">Clear</button>
        </div>
      </div>

      {/* Table */}
      <div className="pr-table-container">
        <table className="pr-table">
          <thead>
            <tr>
              <th>RETURN NO</th>
              <th>DATE</th>
              <th>PURCHASE BILL</th>
              <th>SUPPLIER</th>
              <th>AMOUNT</th>
              <th>ADJUSTMENT TYPE</th>
              <th>STATUS</th>
              <th>CREATED BY</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={9} className="pr-empty-cell">
                <div className="pr-empty-state">
                  <p>No purchase returns found.</p>
                  <Link href="/purchases" className="pr-empty-link">Open Purchases to create a purchase return</Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
