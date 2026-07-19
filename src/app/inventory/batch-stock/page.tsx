"use client";

import React from 'react';
import Link from 'next/link';
import './page.css';

export default function BatchStockPage() {
  return (
    <div className="batch-container">
      <div className="batch-header">
        <div className="bs-title-section">
          <h2 className="bs-title">Batch Stock</h2>
          <p className="bs-subtitle">Track product, variant, supplier, pricing, and expiry batch-wise.</p>
        </div>
        <div className="bs-header-actions">
          <Link href="/inventory" className="btn btn-secondary">Inventory</Link>
          <Link href="/inventory/stock-overview" className="btn btn-primary">Stock Overview</Link>
        </div>
      </div>

      <div className="bs-search-card">
        <input 
          type="text" 
          className="bs-search-input" 
          placeholder="Search product, variant / packing, batch no..." 
        />
        <button className="btn btn-primary bs-search-btn">Search</button>
      </div>

      <div className="bs-table-container">
        <table className="bs-table">
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>VARIANT / PACKING</th>
              <th>BATCH NO</th>
              <th>EXPIRY</th>
              <th>SUPPLIER</th>
              <th>CURRENT STOCK</th>
              <th>PURCHASE PRICE</th>
              <th>SELLING PRICE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fw-600 text-primary">Test</td>
              <td>5kg</td>
              <td>OPENING-980-1411</td>
              <td>N/A</td>
              <td>N/A</td>
              <td className="fw-700 text-primary">99.00</td>
              <td>₹100.00</td>
              <td>₹120.00</td>
              <td><span className="badge-healthy">Healthy</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
