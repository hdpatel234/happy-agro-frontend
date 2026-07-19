"use client";

import React from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import './page.css';

export default function CreatePurchasePage() {
  return (
    <div className="cp-container">
      <Link href="/purchases" className="cp-back-link">
        &larr; Back to Purchases
      </Link>
      
      <div className="cp-card">
        <h2 className="cp-card-title">Add New Purchase</h2>

        {/* Top 3-col Grid */}
        <div className="cp-grid-3">
          <div className="cp-form-group">
            <label>Supplier</label>
            <div className="cp-supplier-row">
              <select className="cp-select">
                <option>Walk-in Supplier</option>
              </select>
              <button className="btn btn-blue cp-new-btn"><Plus size={16} /> Quick Add</button>
            </div>
          </div>
          <div className="cp-form-group">
            <label>Bill Date <span className="text-red">*</span></label>
            <input type="date" className="cp-input" defaultValue="2026-07-19" />
          </div>
          <div className="cp-form-group">
            <label>Invoice Number</label>
            <input type="text" className="cp-input" placeholder="Supplier invoice number" />
          </div>
        </div>

        {/* Purchase Items Section */}
        <div className="cp-section-header">
          <div className="cp-section-title-box">
            <h3 className="cp-section-title">Purchase Items</h3>
            <p className="cp-section-subtitle">Enter batch details at purchase level. Stock will be added batch-wise and product stock will be recalculated automatically.</p>
          </div>
          <button className="btn btn-primary cp-add-item-btn"><Plus size={16} /> Add Item</button>
        </div>

        {/* Custom Purchase Item Block */}
        <div className="cp-item-block">
          <div className="cp-item-header">
            <div>
              <h4 className="cp-item-title">Purchase Item 1</h4>
              <p className="cp-item-subtitle">Add batch, price, and stock values for this product.</p>
            </div>
            <button className="cp-remove-text-btn">Remove</button>
          </div>
          
          <div className="cp-item-body">
            {/* Row 1: Product, Variant, Batch */}
            <div className="cp-grid-3">
              <div className="cp-form-group">
                <label>Product <span className="text-red">*</span></label>
                <select className="cp-select">
                  <option>Select Product</option>
                </select>
              </div>
              <div className="cp-form-group">
                <label>Variant / Packing Size</label>
                <select className="cp-select">
                  <option>No Variant</option>
                </select>
              </div>
              <div className="cp-form-group">
                <label>Batch No</label>
                <input type="text" className="cp-input" placeholder="e.g. B001" />
              </div>
            </div>

            {/* Row 2: Mfg Date, Expiry Date */}
            <div className="cp-grid-2 mt-16">
              <div className="cp-form-group">
                <label>Mfg Date</label>
                <input type="date" className="cp-input" />
              </div>
              <div className="cp-form-group">
                <label>Expiry Date</label>
                <input type="date" className="cp-input" />
              </div>
            </div>

            {/* Row 3: Quantity, Cost Price, Sell Price */}
            <div className="cp-grid-3 mt-16">
              <div className="cp-form-group">
                <label>Quantity <span className="text-red">*</span></label>
                <input type="number" className="cp-input" defaultValue="1" />
              </div>
              <div className="cp-form-group">
                <label>Cost Price <span className="text-red">*</span></label>
                <input type="number" className="cp-input" />
              </div>
              <div className="cp-form-group">
                <label>Sell Price</label>
                <input type="number" className="cp-input" />
              </div>
            </div>

            {/* Row 4: MRP, GST */}
            <div className="cp-grid-2 mt-16">
              <div className="cp-form-group">
                <label>MRP</label>
                <input type="number" className="cp-input" />
              </div>
              <div className="cp-form-group">
                <label>GST %</label>
                <input type="number" className="cp-input" />
              </div>
            </div>
          </div>
        </div>

        <hr className="cp-divider" />

        {/* Financial Summary */}
        <div className="cp-grid-3">
          <div className="cp-form-group">
            <label>Overall Discount</label>
            <input type="number" className="cp-input" defaultValue="0" />
          </div>
          <div className="cp-form-group">
            <label>Shipping Charges</label>
            <input type="number" className="cp-input" defaultValue="0" />
          </div>
          <div className="cp-form-group">
            <label>Grand Total</label>
            <div className="cp-grand-total-box">₹0.00</div>
          </div>
        </div>

        <hr className="cp-divider" />

        {/* Payment Details */}
        <div className="cp-payment-section">
          <h3 className="cp-section-title">Payment Details</h3>
          <div className="cp-grid-3 mt-16">
            <div className="cp-form-group">
              <label>Payment Mode</label>
              <select className="cp-select">
                <option>-- Select Payment Mode --</option>
              </select>
            </div>
            <div className="cp-form-group">
              <label>Amount Paid</label>
              <input type="number" className="cp-input" defaultValue="0" />
            </div>
            <div className="cp-form-group">
              <label>Reference No</label>
              <input type="text" className="cp-input" placeholder="Cheque/Transaction ID" />
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="cp-form-group mt-16">
          <label>Notes</label>
          <textarea className="cp-textarea" rows={4} placeholder="Additional notes..."></textarea>
        </div>

        {/* Footer Actions */}
        <div className="cp-footer-actions">
          <button className="btn btn-primary cp-action-btn">Create Purchase</button>
          <button className="btn cp-btn-gray cp-action-btn">Cancel</button>
        </div>

      </div>
    </div>
  );
}
