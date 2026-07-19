import React from 'react';
import Link from 'next/link';
import './page.css';

export default function CategoriesCreatePage() {
  return (
    <div className="cat-create-container">
      <div className="cc-card">
        <Link href="/categories" className="cc-back-link">
          &larr; Back to Categories
        </Link>
        
        <h2 className="cc-title">Create New Category</h2>
        
        <form className="cc-form">
          <div className="cc-field-group">
            <label className="cc-label">Category Name <span className="text-danger">*</span></label>
            <input type="text" className="cc-input" />
          </div>

          <div className="cc-field-group">
            <label className="cc-label">Parent Category (Optional - Leave empty for main category)</label>
            <select className="cc-input">
              <option>-- Main Category --</option>
              <option>Irrigation Products</option>
              <option>Organic Crop Protection</option>
              <option>Pesticides</option>
              <option>Fertilizers</option>
            </select>
          </div>

          <div className="cc-field-group">
            <label className="cc-label">Description</label>
            <textarea 
              className="cc-textarea" 
              rows={4}
            ></textarea>
          </div>

          <div className="cc-checkbox-group">
            <input type="checkbox" id="activeCheckbox" defaultChecked className="cc-checkbox" />
            <label htmlFor="activeCheckbox" className="cc-checkbox-label">Active</label>
          </div>

          <div className="cc-actions">
            <button type="button" className="btn btn-primary cc-submit-btn">Create Category</button>
            <Link href="/categories" className="btn btn-outline cc-cancel-btn">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
