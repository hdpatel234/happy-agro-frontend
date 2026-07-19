"use client";

import React from 'react';
import Link from 'next/link';
import { Plus, Receipt } from 'lucide-react';
import './page.css';

export default function ExpensesPage() {
  return (
    <div className="exp-container">
      {/* Header */}
      <div className="exp-header">
        <div className="exp-title-section">
          <h2 className="exp-title">Expenses</h2>
          <p className="exp-subtitle">Track and manage your business expenses</p>
        </div>
        <Link href="/expenses/create" className="btn btn-green exp-add-btn">
          <Plus size={16} /> Add Expense
        </Link>
      </div>

      {/* Hero Card */}
      <div className="exp-hero-card">
        <div className="exp-hero-content">
          <span className="exp-hero-label">Total Expenses</span>
          <h3 className="exp-hero-value">₹0.00</h3>
        </div>
        <div className="exp-hero-icon-container">
          <div className="exp-hero-icon-placeholder"></div>
        </div>
      </div>

      {/* Filter Card */}
      <div className="exp-filter-card">
        <div className="exp-form-group">
          <label>Category</label>
          <select className="exp-input">
            <option>All Categories</option>
          </select>
        </div>
        <div className="exp-form-group">
          <label>Start Date</label>
          <input type="date" className="exp-input" />
        </div>
        <div className="exp-form-group">
          <label>End Date</label>
          <input type="date" className="exp-input" />
        </div>
        <div className="exp-filter-actions">
          <button className="btn btn-green exp-filter-btn">Filter</button>
        </div>
      </div>

      {/* Table Area */}
      <div className="exp-table-container">
        <table className="exp-table">
          <thead>
            <tr>
              <th>DATE</th>
              <th>CATEGORY</th>
              <th>AMOUNT</th>
              <th>NOTES</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5} className="exp-empty-cell">
                <div className="exp-empty-state">
                  <Receipt size={48} className="exp-empty-icon" />
                  <h4 className="exp-empty-title">No expenses found</h4>
                  <p className="exp-empty-desc">Start tracking your expenses by adding one</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
