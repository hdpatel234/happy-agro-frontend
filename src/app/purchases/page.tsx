"use client";

import React from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import './page.css';

export default function PurchasesPage() {
  return (
    <div className="purchases-container">
      <div className="purchases-header">
        <div className="purchases-title-section">
          <h2 className="purchases-title">Purchases</h2>
          <p className="purchases-subtitle">Manage your purchase orders and bills</p>
        </div>
        <div className="purchases-header-actions">
          <button className="btn btn-danger-pill">
            Total Pending : ₹0.00
          </button>
          <Link href="/purchases/create" className="btn btn-primary purchases-add-btn">
            <Plus size={16} /> Add Purchase
          </Link>
        </div>
      </div>

      <div className="purchases-filter-card">
        <input 
          type="text" 
          className="purchase-search" 
          placeholder="Search by invoice, supplier..." 
        />
        <select className="purchase-select">
          <option>All Suppliers</option>
        </select>
        <select className="purchase-select">
          <option>All Payment Status</option>
          <option>Paid</option>
          <option>Unpaid</option>
        </select>
        <button className="btn btn-primary purchase-filter-btn">Filter</button>
        <button className="btn purchase-clear-btn">Clear</button>
      </div>

      <div className="purchases-table-container">
        <table className="purchases-table">
          <thead>
            <tr>
              <th>DATE</th>
              <th>INVOICE</th>
              <th>SUPPLIER</th>
              <th>ITEMS</th>
              <th>TOTAL</th>
              <th>PAYMENT</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={7} className="purchases-empty-cell">
                No purchases found. <Link href="/purchases/create" className="empty-link">Create your first purchase</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
