"use client";

import React from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import './page.css';

export default function CreateOrderPage() {
  return (
    <div className="co-container">
      <Link href="/orders" className="co-back-link">
        &larr; Back to Orders
      </Link>
      
      <div className="co-card">
        <h2 className="co-card-title">Create New Order</h2>

        {/* Top 3-col Grid */}
        <div className="co-grid-3">
          <div className="co-form-group">
            <label>Customer</label>
            <div className="co-customer-row">
              <select className="co-select">
                <option>Walk-in Customer</option>
              </select>
              <button className="btn btn-primary co-new-btn"><Plus size={16} /> New</button>
            </div>
          </div>
          <div className="co-form-group">
            <label>Order Date <span className="text-red">*</span></label>
            <input type="date" className="co-input" defaultValue="2026-07-19" />
          </div>
          <div className="co-form-group">
            <label>Delivery Date</label>
            <input type="date" className="co-input" />
          </div>
        </div>

        {/* Status Row */}
        <div className="co-grid-1">
          <div className="co-form-group">
            <label>Status <span className="text-red">*</span></label>
            <select className="co-select">
              <option>Pending</option>
              <option>Delivered</option>
            </select>
          </div>
        </div>

        {/* Order Items Section */}
        <div className="co-section-header">
          <h3 className="co-section-title">Order Items</h3>
          <button className="btn btn-primary co-add-item-btn"><Plus size={16} /> Add Item</button>
        </div>

        <div className="co-item-row">
          <div className="co-form-group flex-1">
            <label>Product <span className="text-red">*</span></label>
            <select className="co-select">
              <option>Select Product</option>
            </select>
          </div>
          <div className="co-form-group flex-1">
            <label>Variant</label>
            <select className="co-select">
              <option>No Variant</option>
            </select>
          </div>
          <div className="co-form-group co-w-sm">
            <label>Quantity <span className="text-red">*</span></label>
            <input type="number" className="co-input" defaultValue="1" />
          </div>
          <div className="co-form-group co-w-sm">
            <label>Price <span className="text-red">*</span></label>
            <input type="number" className="co-input" defaultValue="0" />
          </div>
          <div className="co-form-group co-w-sm">
            <label>Discount</label>
            <input type="number" className="co-input" defaultValue="0" />
          </div>
          <div className="co-form-group-btn">
            <button className="btn btn-danger co-remove-btn">Remove</button>
          </div>
        </div>

        {/* Shipping & Summary Section */}
        <div className="co-summary-grid">
          <div className="co-shipping-col">
            <div className="co-form-group">
              <label>Shipping Charges</label>
              <input type="number" className="co-input" defaultValue="0" />
            </div>
          </div>
          <div className="co-summary-col">
            <div className="co-summary-row">
              <span className="co-summary-label">Subtotal:</span>
              <span className="co-summary-value fw-600">₹0.00</span>
            </div>
            <div className="co-summary-row">
              <span className="co-summary-label">Discount:</span>
              <span className="co-summary-value text-red fw-600">-₹0.00</span>
            </div>
            <div className="co-summary-row">
              <span className="co-summary-label">Tax (GST):</span>
              <span className="co-summary-value fw-600">₹0.00</span>
            </div>
            <div className="co-summary-row">
              <span className="co-summary-label">Shipping:</span>
              <span className="co-summary-value fw-600">₹0.00</span>
            </div>
            <div className="co-summary-row co-grand-total-row">
              <span className="co-summary-label fw-800">Grand Total:</span>
              <span className="co-summary-value text-green fw-800">₹0.00</span>
            </div>
          </div>
        </div>

        <hr className="co-divider" />

        {/* Info Blocks Split */}
        <div className="co-info-split">
          <div className="co-info-left">
            <h3 className="co-section-title">Payment Information</h3>
            <div className="co-form-group">
              <label>Payment Mode <span className="text-red">*</span></label>
              <select className="co-select">
                <option>Cash</option>
              </select>
            </div>
            <div className="co-form-group mt-16">
              <label>Payment Status <span className="text-red">*</span></label>
              <select className="co-select">
                <option>Paid</option>
              </select>
            </div>
            <div className="co-form-group mt-16">
              <label>Paid Amount <span className="text-red">*</span></label>
              <input type="number" className="co-input" defaultValue="0.00" />
            </div>
          </div>
          <div className="co-info-right">
            <h3 className="co-section-title">Delivery Information</h3>
            <div className="co-form-group">
              <label>Delivery Address</label>
              <textarea className="co-textarea" rows={3}></textarea>
            </div>
            <div className="co-form-group mt-16">
              <label>Delivery Phone</label>
              <input type="text" className="co-input" />
            </div>
            <div className="co-form-group mt-16">
              <label>Notes</label>
              <textarea className="co-textarea" rows={3}></textarea>
            </div>
          </div>
        </div>

        <hr className="co-divider" />

        {/* Footer Actions */}
        <div className="co-footer">
          <button className="btn co-btn-outline">Cancel</button>
          <button className="btn btn-primary co-create-btn">Create Order</button>
        </div>

      </div>
    </div>
  );
}
