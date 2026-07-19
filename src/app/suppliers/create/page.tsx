"use client";

import React from 'react';
import Link from 'next/link';
import './page.css';

export default function CreateSupplierPage() {
  return (
    <div className="cs-container">
      <div className="cs-card">
        <Link href="/suppliers" className="cs-back-link">
          &larr; Back to Suppliers
        </Link>
        
        <h2 className="cs-title">Create New Supplier</h2>

        {/* Row 1 */}
        <div className="cs-grid-2">
          <div className="cs-form-group">
            <label>Supplier Name <span className="text-red">*</span></label>
            <input type="text" className="cs-input" />
          </div>
          <div className="cs-form-group">
            <label>Contact Person</label>
            <input type="text" className="cs-input" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="cs-grid-2">
          <div className="cs-form-group">
            <label>Mobile <span className="text-red">*</span></label>
            <input type="text" className="cs-input" />
          </div>
          <div className="cs-form-group">
            <label>Email</label>
            <input type="email" className="cs-input" />
          </div>
        </div>

        {/* Row 3 - GSTIN takes half width */}
        <div className="cs-grid-2">
          <div className="cs-form-group">
            <label>GSTIN</label>
            <input type="text" className="cs-input" />
          </div>
          <div></div> {/* Empty div to force left alignment in 2-col grid */}
        </div>

        {/* Row 4 */}
        <div className="cs-form-group">
          <label>Address <span className="text-red">*</span></label>
          <textarea className="cs-textarea" rows={4}></textarea>
        </div>

        {/* Active Checkbox */}
        <div className="cs-form-group-inline">
          <input type="checkbox" className="cs-checkbox" id="active-check" defaultChecked />
          <label htmlFor="active-check">Active</label>
        </div>

        {/* Footer Actions */}
        <div className="cs-footer-actions">
          <button className="btn btn-primary cs-action-btn">Create Supplier</button>
          <button className="btn cs-btn-gray cs-action-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
}
