"use client";

import React from 'react';
import Link from 'next/link';
import './page.css';

export default function SalesReturnsPage() {
  return (
    <div className="sr-container">
      <div className="sr-header-hidden">
        <h2>Sales Returns</h2>
      </div>

      {/* Top Action Card */}
      <div className="sr-action-card">
        <div className="sr-action-text">
          <h3 className="sr-action-title">Create Sales Return</h3>
          <p className="sr-action-subtitle">Sales returns are created from an existing order or invoice.</p>
        </div>
        <Link href="/orders" className="btn btn-primary sr-open-orders-btn">
          Open Orders
        </Link>
      </div>

      {/* Metrics Grid */}
      <div className="sr-metrics-grid">
        <div className="sr-metric-card">
          <span className="sr-metric-label">Today Sales Return</span>
          <span className="sr-metric-value">INR 0.00</span>
        </div>
        <div className="sr-metric-card">
          <span className="sr-metric-label">Monthly Sales Return</span>
          <span className="sr-metric-value">INR 0.00</span>
        </div>
        <div className="sr-metric-card">
          <span className="sr-metric-label">Refund Pending</span>
          <span className="sr-metric-value sr-text-orange">0</span>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="sr-filter-card">
        <div className="sr-filter-row">
          <input type="date" className="sr-input" />
          <input type="date" className="sr-input" />
          <select className="sr-select">
            <option>All Customers</option>
          </select>
          <select className="sr-select">
            <option>All Status</option>
          </select>
          <select className="sr-select">
            <option>All Refund Types</option>
          </select>
        </div>
        <div className="sr-filter-actions">
          <button className="btn btn-primary sr-filter-btn">Filter</button>
          <button className="btn sr-clear-btn">Clear</button>
        </div>
      </div>

      {/* Table */}
      <div className="sr-table-container">
        <table className="sr-table">
          <thead>
            <tr>
              <th>RETURN NO</th>
              <th>DATE</th>
              <th>SOURCE</th>
              <th>CUSTOMER</th>
              <th>AMOUNT</th>
              <th>REFUND TYPE</th>
              <th>STATUS</th>
              <th>CREATED BY</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={9} className="sr-empty-cell">
                <div className="sr-empty-state">
                  <p>No sales returns found.</p>
                  <Link href="/orders" className="sr-empty-link">Open Orders to create a sales return</Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
