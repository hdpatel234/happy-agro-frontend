"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import './page.css';

export default function CreateProductPage() {
  const [variants, setVariants] = useState([{ id: 1 }]);

  const addVariant = () => {
    setVariants([...variants, { id: Date.now() }]);
  };

  const removeVariant = (idToRemove: number) => {
    if (variants.length > 1) {
      setVariants(variants.filter(v => v.id !== idToRemove));
    }
  };

  return (
    <div className="product-create-container">
      <div className="pc-card">
        <Link href="/products" className="pc-back-link">
          &larr; Back to Products
        </Link>
        
        <h2 className="pc-title">Create New Product</h2>
        
        <form className="pc-form">
          <div className="pc-two-col-grid">
            <div className="pc-field-group">
              <label className="pc-label">Product Name <span className="text-danger">*</span></label>
              <input type="text" className="pc-input" />
            </div>
            <div className="pc-field-group">
              <label className="pc-label">Parent Category</label>
              <select className="pc-select">
                <option>Select Parent Category</option>
              </select>
            </div>
          </div>

          <div className="pc-two-col-grid">
            <div className="pc-field-group">
              <label className="pc-label">Category</label>
              <select className="pc-select">
                <option>Select Category</option>
              </select>
              <span className="pc-helper-link">Don't see your category? <Link href="/categories/create">Add New Category</Link></span>
            </div>
            <div className="pc-field-group">
              <label className="pc-label">Brand / Company</label>
              <select className="pc-select">
                <option>Select Brand</option>
              </select>
              <span className="pc-helper-link">Don't see your brand? <Link href="/brands/create">Add New Brand</Link></span>
            </div>
          </div>

          <div className="pc-field-group">
            <label className="pc-label">Tax Master <span className="text-danger">*</span></label>
            <select className="pc-select w-50">
              <option>Select Tax Master</option>
            </select>
            <p className="pc-help-text">Select a tax master to auto-apply GST % and tax type.</p>
          </div>

          <div className="pc-field-group">
            <label className="pc-label">Description</label>
            <textarea className="pc-textarea" rows={4}></textarea>
          </div>

          <div className="pc-checkbox-group">
            <input type="checkbox" id="activeCheckbox" defaultChecked className="pc-checkbox" />
            <label htmlFor="activeCheckbox" className="pc-checkbox-label">Active</label>
          </div>

          <div className="pc-variants-section">
            <div className="pc-variants-header">
              <h3 className="pc-variants-title">Product Variants / Packing Sizes</h3>
              <p className="pc-variants-subtitle">Add different sizes, packs, or variations of this product</p>
            </div>

            {variants.map((variant, index) => (
              <div key={variant.id} className="pc-variant-card">
                <div className="pc-variant-card-header">
                  <h4>Variant {index + 1}</h4>
                  <button 
                    type="button" 
                    className="pc-remove-variant-btn" 
                    onClick={() => removeVariant(variant.id)}
                    disabled={variants.length === 1}
                  >
                    Remove
                  </button>
                </div>

                <div className="pc-four-col-grid">
                  <div className="pc-field-group">
                    <label className="pc-label">Packing / Size <span className="text-danger">*</span></label>
                    <input type="text" className="pc-input" placeholder="e.g., 1kg, 5kg, 10kg" />
                  </div>
                  <div className="pc-field-group">
                    <label className="pc-label">SKU</label>
                    <input type="text" className="pc-input" />
                  </div>
                  <div className="pc-field-group">
                    <label className="pc-label">Unit</label>
                    <select className="pc-select">
                      <option>Select Unit</option>
                    </select>
                  </div>
                  <div className="pc-field-group">
                    <label className="pc-label">Barcode</label>
                    <input type="text" className="pc-input" />
                  </div>
                </div>

                <div className="pc-four-col-grid mt-3">
                  <div className="pc-field-group">
                    <label className="pc-label">Cost Price <span className="text-danger">*</span></label>
                    <input type="text" className="pc-input" />
                  </div>
                  <div className="pc-field-group">
                    <label className="pc-label">Selling Price <span className="text-danger">*</span></label>
                    <input type="text" className="pc-input" />
                  </div>
                  <div className="pc-field-group">
                    <label className="pc-label">Opening Stock Quantity <span className="text-danger">*</span></label>
                    <input type="text" className="pc-input" />
                    <p className="pc-help-text-small">Opening stock ke liye system automatic No Expiry batch create karega. Batch/Expiry ke saath stock add karne ke liye Purchase ya Stock Adjustment use karein.</p>
                  </div>
                  <div className="pc-field-group">
                    <label className="pc-label">Low Stock Threshold</label>
                    <input type="text" className="pc-input" defaultValue="10" />
                  </div>
                </div>

                <div className="pc-variant-footer">
                  <div className="pc-variant-radios">
                    <label className="pc-radio-label">
                      <input type="radio" name="defaultVariant" defaultChecked={index === 0} /> Default
                    </label>
                    <label className="pc-radio-label">
                      <input type="checkbox" defaultChecked /> Active
                    </label>
                  </div>
                  <button type="button" className="btn btn-blue" onClick={addVariant}>
                    + Add Variant
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="pc-info-note">
            <strong>Note:</strong> If you add variants, the main product fields above will be used as default values. Each variant can have its own price, stock, and SKU. Leave empty if product has no variants.
          </div>

          <div className="pc-actions">
            <button type="button" className="btn btn-primary pc-submit-btn">Create Product</button>
            <Link href="/products" className="btn btn-outline pc-cancel-btn">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
