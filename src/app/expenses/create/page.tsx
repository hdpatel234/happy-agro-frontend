"use client";

import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import './page.css';

export default function CreateExpensePage() {
  return (
    <div className="cex-container">
      <div className="cex-card">
        <Link href="/expenses" className="cex-back-link">
          &larr; Back to Expenses
        </Link>
        
        <h2 className="cex-title">Add New Expense</h2>

        {/* Row 1: Category */}
        <div className="cex-form-row">
          <div className="cex-form-group">
            <label>Category</label>
            <select className="cex-input">
              <option>Select Category</option>
            </select>
            <span className="cex-helper-text">Or enter custom category below</span>
          </div>
          <div className="cex-form-group">
            <label>Custom Category</label>
            <input type="text" className="cex-input" placeholder="e.g., Rent, Utilities, etc." />
          </div>
        </div>

        {/* Row 2: Amount & Date */}
        <div className="cex-form-row mt-16">
          <div className="cex-form-group">
            <label>Amount <span className="text-red">*</span></label>
            <div className="cex-input-wrapper">
              <span className="cex-currency-symbol">₹</span>
              <input type="number" className="cex-input cex-input-with-symbol" placeholder="0.00" />
            </div>
          </div>
          <div className="cex-form-group">
            <label>Date <span className="text-red">*</span></label>
            <input type="date" className="cex-input" defaultValue="2026-07-20" />
          </div>
        </div>

        {/* Row 3: Notes */}
        <div className="cex-form-group mt-16">
          <label>Notes</label>
          <textarea 
            className="cex-textarea" 
            placeholder="Additional notes about this expense..."
            rows={4}
          ></textarea>
        </div>

        {/* Footer Actions */}
        <div className="cex-footer-actions mt-24">
          <button className="btn btn-green cex-action-btn">
            <Check size={18} /> Add Expense
          </button>
          <Link href="/expenses" className="btn cex-btn-gray cex-action-btn">Cancel</Link>
        </div>
      </div>
    </div>
  );
}
