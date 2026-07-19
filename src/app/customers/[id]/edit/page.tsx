"use client";

import React from 'react';
import Link from 'next/link';
import './page.css';

export default function EditCustomerPage() {
  return (
    <div className="ec-container">
      <div className="ec-card">
        <Link href="/customers" className="ec-back-link">
          &larr; Back to Customers
        </Link>
        
        <h2 className="ec-title">Edit Customer</h2>

        {/* Row 1 */}
        <div className="ec-grid-2">
          <div className="ec-form-group">
            <label>Name <span className="text-red">*</span></label>
            <input type="text" className="ec-input" defaultValue="Test Name" />
          </div>
          <div className="ec-form-group">
            <label>Mobile</label>
            <input type="text" className="ec-input" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="ec-grid-2 mt-16">
          <div className="ec-form-group">
            <label>Email</label>
            <input type="email" className="ec-input" />
          </div>
          <div className="ec-form-group">
            <label>Credit Limit</label>
            <input type="number" className="ec-input" defaultValue="0.00" />
          </div>
        </div>

        {/* Row 3 */}
        <div className="ec-form-group mt-16">
          <label>Address <span className="text-red">*</span></label>
          <textarea className="ec-textarea" rows={4}></textarea>
        </div>

        {/* Active Checkbox */}
        <div className="ec-form-group-inline mt-16">
          <input type="checkbox" className="ec-checkbox" id="active-check" defaultChecked />
          <label htmlFor="active-check">Active</label>
        </div>

        {/* Footer Actions */}
        <div className="ec-footer-actions">
          <button className="btn btn-primary ec-action-btn">Update Customer</button>
          <button className="btn ec-btn-gray ec-action-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
}
