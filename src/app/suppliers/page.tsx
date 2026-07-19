"use client";

import React from 'react';
import Link from 'next/link';
import { Plus, Search, Factory } from 'lucide-react';
import './page.css';

export default function SuppliersPage() {
  return (
    <div className="suppliers-container">
      {/* Hero Header */}
      <div className="sup-hero-card">
        <div className="sup-hero-text">
          <h2 className="sup-hero-title">Suppliers</h2>
          <p className="sup-hero-subtitle">Track supplier contacts, purchase orders, paid amount, and pending payables in one place.</p>
        </div>
        <Link href="/suppliers/create" className="btn sup-add-btn">
          <Plus size={16} /> Add Supplier
        </Link>
      </div>

      {/* Metrics Grid */}
      <div className="sup-metrics-grid">
        <div className="sup-metric-card">
          <span className="sup-metric-label">TOTAL SUPPLIERS</span>
          <span className="sup-metric-value">0</span>
          <span className="sup-metric-desc">Matching current filters</span>
        </div>
        <div className="sup-metric-card">
          <span className="sup-metric-label">ACTIVE SUPPLIERS</span>
          <span className="sup-metric-value">0</span>
          <span className="sup-metric-desc">Available for purchases</span>
        </div>
        <div className="sup-metric-card">
          <span className="sup-metric-label">PURCHASE ORDERS</span>
          <span className="sup-metric-value">0</span>
          <span className="sup-metric-desc">Total bills recorded</span>
        </div>
        <div className="sup-metric-card">
          <span className="sup-metric-label">PAID AMOUNT</span>
          <span className="sup-metric-value text-green">INR 0.00</span>
          <span className="sup-metric-desc">Paid against supplier bills</span>
        </div>
        <div className="sup-metric-card">
          <span className="sup-metric-label">PENDING AMOUNT</span>
          <span className="sup-metric-value text-green">INR 0.00</span>
          <span className="sup-metric-desc">Current payable balance</span>
        </div>
      </div>

      {/* Filter Row */}
      <div className="sup-filter-row">
        <div className="sup-search-wrapper">
          <Search size={18} className="sup-search-icon" />
          <input 
            type="text" 
            className="sup-search-input" 
            placeholder="Search by supplier name, phone, or email" 
          />
        </div>
        <button className="btn sup-search-btn">Search</button>
        <button className="btn sup-clear-btn">Clear</button>
      </div>

      {/* Directory Table Area */}
      <div className="sup-directory-card">
        <div className="sup-dir-header">
          <div className="sup-dir-title-box">
            <h3 className="sup-dir-title">Supplier Directory</h3>
            <p className="sup-dir-subtitle">Contact details with purchase activity and payable status</p>
          </div>
          <span className="sup-dir-count">0 records</span>
        </div>

        <div className="sup-table-wrapper">
          <table className="sup-table">
            <thead>
              <tr>
                <th>SUPPLIER</th>
                <th>CONTACT</th>
                <th>CONTACT PERSON</th>
                <th>PURCHASE ORDERS</th>
                <th>PURCHASE VALUE</th>
                <th>PAID</th>
                <th>PENDING</th>
                <th>GSTIN</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={10} className="sup-empty-cell">
                  <div className="sup-empty-state">
                    <Factory size={48} className="sup-empty-icon" />
                    <h4 className="sup-empty-title">No suppliers found</h4>
                    <p className="sup-empty-desc">Start by adding your first supplier.</p>
                    <Link href="/suppliers/create" className="btn sup-empty-add-btn">Add Supplier</Link>
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
