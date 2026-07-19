import React from 'react';
import Link from 'next/link';
import './page.css';

export default function EditCategoryPage() {
  return (
    <div className="cat-edit-container">
      <div className="ec-card">
        <Link href="/categories" className="ec-back-link">
          &larr; Back to Categories
        </Link>
        
        <h2 className="ec-title">Edit Category</h2>
        
        <form className="ec-form">
          <div className="ec-field-group">
            <label className="ec-label">Category Name <span className="text-danger">*</span></label>
            <input type="text" className="ec-input" defaultValue="Organic Crop Protection" />
          </div>

          <div className="ec-field-group">
            <label className="ec-label">Parent Category (Optional)</label>
            <select className="ec-input" defaultValue="-- Main Category --">
              <option>-- Main Category --</option>
              <option>Irrigation Products</option>
              <option>Organic Crop Protection</option>
              <option>Pesticides</option>
              <option>Fertilizers</option>
            </select>
          </div>

          <div className="ec-field-group">
            <label className="ec-label">Description</label>
            <textarea 
              className="ec-textarea" 
              rows={4}
            ></textarea>
          </div>

          <div className="ec-checkbox-group">
            <input type="checkbox" id="activeCheckbox" defaultChecked className="ec-checkbox" />
            <label htmlFor="activeCheckbox" className="ec-checkbox-label">Active</label>
          </div>

          <div className="ec-actions">
            <button type="button" className="btn btn-primary ec-submit-btn">Update Category</button>
            <Link href="/categories" className="btn btn-outline ec-cancel-btn">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
