"use client";

import React from 'react';
import Link from 'next/link';
import './page.css';

export default function CreateCustomerPage() {
  return (
    <div className="cc-container">
      <div className="cc-card">
        <Link href="/customers" className="cc-back-link">
          &larr; Back to Customers
        </Link>
        
        <h2 className="cc-title">Create New Customer</h2>

        <div className="cc-form-group">
          <label>Name <span className="text-red">*</span></label>
          <input type="text" className="cc-input" />
        </div>

        <div className="cc-form-group">
          <label>Mobile</label>
          <input type="text" className="cc-input" />
        </div>

        <div className="cc-form-group">
          <label>Email</label>
          <input type="email" className="cc-input" />
        </div>

        <div className="cc-form-group">
          <label>Credit Limit</label>
          <input type="number" className="cc-input" />
        </div>

        <div className="cc-form-group">
          <label>Opening Balance (Khata)</label>
          <input type="number" className="cc-input" defaultValue="0" />
          <span className="cc-help-text">If customer already owes money, enter the amount here. A khata ledger entry will be created automatically.</span>
        </div>

        <div className="cc-form-group">
          <label>Address <span className="text-red">*</span></label>
          <textarea className="cc-textarea" rows={4}></textarea>
        </div>

        <div className="cc-form-group-inline">
          <input type="checkbox" className="cc-checkbox" id="active-check" defaultChecked />
          <label htmlFor="active-check">Active</label>
        </div>

        <div className="cc-footer-actions">
          <button className="btn btn-primary cc-action-btn">Create Customer</button>
          <button className="btn cc-btn-gray cc-action-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
}
