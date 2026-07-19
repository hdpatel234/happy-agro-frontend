"use client";

import React from 'react';
import Link from 'next/link';
import './page.css';

export default function StockMovementsPage() {
  return (
    <div className="movements-container">
      <div className="movements-header">
        <div className="sm-title-section">
          <h2 className="sm-title">Stock Movements</h2>
          <p className="sm-subtitle">Track all inventory movements and adjustments</p>
        </div>
        <Link href="/inventory" className="sm-back-link">
          &larr; Back to Inventory
        </Link>
      </div>

      <div className="sm-filter-bar">
        <select className="sm-select">
          <option>All Types</option>
          <option>Stock In</option>
          <option>Stock Out</option>
        </select>
        
        <input type="date" className="sm-date-input" />
        <input type="date" className="sm-date-input" />
        
        <button className="btn btn-primary sm-filter-btn">Filter</button>
      </div>

      <div className="sm-table-container">
        <table className="sm-table">
          <thead>
            <tr>
              <th>DATE</th>
              <th>PRODUCT</th>
              <th>TYPE</th>
              <th>QUANTITY</th>
              <th>REASON</th>
              <th>PERFORMED BY</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jul 19, 2026 22:46</td>
              <td className="fw-600">Test</td>
              <td><span className="badge-out">Stock Out</span></td>
              <td className="qty-out">1</td>
              <td>Sale</td>
              <td>Haresh Patel</td>
            </tr>
            <tr>
              <td>Jul 19, 2026 22:46</td>
              <td className="fw-600">Test</td>
              <td><span className="badge-in">Stock In</span></td>
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
