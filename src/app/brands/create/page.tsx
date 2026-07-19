import React from 'react';
import Link from 'next/link';
import './page.css';

export default function CreateBrandPage() {
  return (
    <div className="brand-create-container">
      <div className="bc-card">
        <Link href="/brands" className="bc-back-link">
          &larr; Back to Brands
        </Link>
        
        <h2 className="bc-title">Create New Brand</h2>
        
        <form className="bc-form">
          <div className="bc-field-group">
            <label className="bc-label">Brand Name <span className="text-danger">*</span></label>
            <input type="text" className="bc-input" placeholder="e.g., Bayer, Syngenta" />
          </div>

          <div className="bc-field-group">
            <label className="bc-label">Company Name</label>
            <input type="text" className="bc-input" placeholder="Full company name (optional)" />
            <p className="bc-help-text">The full legal name of the company that owns this brand</p>
          </div>

          <div className="bc-field-group">
            <label className="bc-label">Description</label>
            <textarea 
              className="bc-textarea" 
              rows={4}
              placeholder="Optional description about the brand"
            ></textarea>
          </div>

          <div className="bc-checkbox-group">
            <input type="checkbox" id="activeCheckbox" defaultChecked className="bc-checkbox" />
            <label htmlFor="activeCheckbox" className="bc-checkbox-label">Active (Brand will be available for product selection)</label>
          </div>

          <div className="bc-actions">
            <button type="button" className="btn btn-primary bc-submit-btn">Create Brand</button>
            <Link href="/brands" className="btn btn-outline bc-cancel-btn">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
