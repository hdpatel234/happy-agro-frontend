"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function POSPage() {
  const { t } = useLanguage();
  return (
    <div className="pos-container">
      {/* Left side: Product Search & Grid */}
      <div className="pos-main">
        <input 
          type="text" 
          className="pos-search" 
          placeholder={t('pos.search_placeholder')} 
        />
        
        <div className="pos-product-grid">
          <div className="pos-product-card">
            <div className="pos-product-title">Test</div>
            <div className="pos-product-variant">1 {t('pos.variant_s')}</div>
            <div className="pos-product-stock">{t('pos.stock_label')} 99 Box</div>
          </div>
          {/* More products could be mapped here */}
        </div>
      </div>

      {/* Right side: Cart Sidebar */}
      <div className="pos-cart-sidebar">
        <div className="pos-cart-header">
          <h3>{t('pos.cart')}</h3>
        </div>
        
        <div className="pos-cart-body">
          <div className="customer-section">
            <div className="customer-label-row">
              <span className="customer-label">{t('pos.customer_optional')}</span>
              <span className="customer-quick-add">{t('pos.quick_add')}</span>
            </div>
            <select className="customer-select" defaultValue="Walk-in Customer">
              <option value="Walk-in Customer">{t('pos.walk_in_customer')}</option>
            </select>
          </div>

          <div className="empty-cart-state">
            {t('pos.cart_empty')}
          </div>

          <div className="cart-totals">
            <div className="cart-total-row">
              <span>{t('pos.subtotal')}</span>
              <span>₹0.00</span>
            </div>
            <div className="cart-total-row">
              <span>{t('pos.discount')}</span>
              <div className="flex items-center gap-2">
                <input type="text" className="cart-input" defaultValue="0" />
                <span>₹</span>
              </div>
            </div>
            <div className="cart-total-row">
              <span>{t('pos.gst')}</span>
              <div className="flex items-center gap-2">
                <input type="text" className="cart-input" defaultValue="0" />
                <span>₹</span>
              </div>
            </div>
            <div className="cart-grand-total">
              <span>{t('pos.total')}</span>
              <span>₹0.00</span>
            </div>
          </div>

          <div className="payment-section">
            <div className="payment-field">
              <span className="payment-label">{t('pos.payment_mode')}</span>
              <select className="payment-input" defaultValue="Cash">
                <option value="Cash">{t('pos.cash')}</option>
                <option value="Card">{t('pos.card')}</option>
                <option value="UPI">{t('pos.upi')}</option>
              </select>
            </div>
            <div className="payment-field">
              <span className="payment-label">{t('pos.paid_amount')}</span>
              <input type="text" className="payment-input" defaultValue="0.00" />
            </div>
            <div className="payment-field">
              <span className="payment-label">{t('pos.bill_date')}</span>
              <input type="date" className="payment-input" defaultValue={new Date().toISOString().split('T')[0]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
