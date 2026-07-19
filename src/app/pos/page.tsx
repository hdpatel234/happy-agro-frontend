import React from 'react';
import './page.css';

export default function POSPage() {
  return (
    <div className="pos-container">
      {/* Left side: Product Search & Grid */}
      <div className="pos-main">
        <input 
          type="text" 
          className="pos-search" 
          placeholder="Search products by name, SKU, or barcode..." 
        />
        
        <div className="pos-product-grid">
          <div className="pos-product-card">
            <div className="pos-product-title">Test</div>
            <div className="pos-product-variant">1 variant(s)</div>
            <div className="pos-product-stock">Stock: 99 Box</div>
          </div>
          {/* More products could be mapped here */}
        </div>
      </div>

      {/* Right side: Cart Sidebar */}
      <div className="pos-cart-sidebar">
        <div className="pos-cart-header">
          <h3>Cart</h3>
        </div>
        
        <div className="pos-cart-body">
          <div className="customer-section">
            <div className="customer-label-row">
              <span className="customer-label">Customer (Optional)</span>
              <span className="customer-quick-add">+ Quick Add</span>
            </div>
            <select className="customer-select" defaultValue="Walk-in Customer">
              <option value="Walk-in Customer">Walk-in Customer</option>
            </select>
          </div>

          <div className="empty-cart-state">
            Cart is empty
          </div>

          <div className="cart-totals">
            <div className="cart-total-row">
              <span>Subtotal:</span>
              <span>₹0.00</span>
            </div>
            <div className="cart-total-row">
              <span>Discount:</span>
              <div className="flex items-center gap-2">
                <input type="text" className="cart-input" defaultValue="0" />
                <span>₹</span>
              </div>
            </div>
            <div className="cart-total-row">
              <span>GST:</span>
              <div className="flex items-center gap-2">
                <input type="text" className="cart-input" defaultValue="0" />
                <span>₹</span>
              </div>
            </div>
            <div className="cart-grand-total">
              <span>Total:</span>
              <span>₹0.00</span>
            </div>
          </div>

          <div className="payment-section">
            <div className="payment-field">
              <span className="payment-label">Payment Mode</span>
              <select className="payment-input" defaultValue="Cash">
                <option value="Cash">Cash</option>
                <option value="Card">Card</option>
                <option value="UPI">UPI</option>
              </select>
            </div>
            <div className="payment-field">
              <span className="payment-label">Paid Amount</span>
              <input type="text" className="payment-input" defaultValue="0.00" />
            </div>
            <div className="payment-field">
              <span className="payment-label">Bill Date</span>
              <input type="date" className="payment-input" defaultValue={new Date().toISOString().split('T')[0]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
