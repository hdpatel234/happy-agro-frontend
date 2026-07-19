import React from 'react';
import Link from 'next/link';
import './page.css';

export default function KhataCreatePage() {
  return (
    <div className="khata-create-container">
      <div className="kc-card">
        <Link href="/khata" className="kc-back-link">
          &larr; Back to Khata
        </Link>
        
        <h2 className="kc-title">Add Ledger Entry</h2>
        
        <form className="kc-form">
          <div className="kc-field-group">
            <label className="kc-label">Party Type <span className="text-danger">*</span></label>
            <select className="kc-input">
              <option>Select Party Type</option>
              <option>Customer</option>
              <option>Supplier</option>
            </select>
          </div>

          <div className="kc-field-group">
            <label className="kc-label">Entry Type <span className="text-danger">*</span></label>
            <select className="kc-input">
              <option>Debit (Lena Hai - Amount to Take)</option>
              <option>Credit (Dena Hai - Amount to Give)</option>
            </select>
            <p className="kc-hint">Debit: Amount to take from customer / You owe supplier</p>
          </div>

          <div className="kc-field-group">
            <label className="kc-label">Amount <span className="text-danger">*</span></label>
            <input type="number" className="kc-input" placeholder="0.00" />
          </div>

          <div className="kc-field-group">
            <label className="kc-label">Date <span className="text-danger">*</span></label>
            <input type="date" className="kc-input" defaultValue="2026-07-19" />
          </div>

          <div className="kc-field-group">
            <label className="kc-label">Description / Narration</label>
            <textarea 
              className="kc-textarea" 
              placeholder="Enter description (e.g., Credit sale, Payment received, etc.)"
              rows={4}
            ></textarea>
          </div>

          <div className="kc-info-box">
            <strong>Note:</strong> Select party type and entry type to see detailed explanation.
          </div>

          <div className="kc-actions">
            <button type="button" className="btn btn-primary kc-submit-btn">Add Entry</button>
            <Link href="/khata" className="btn btn-outline kc-cancel-btn">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
