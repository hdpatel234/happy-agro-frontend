"use client";

import React from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function CreateOrderPage() {
  const { t } = useLanguage();
  return (
    <div className="co-container">
      <Link href="/orders" className="co-back-link">
        &larr; {t('orders.back_to_orders')}
      </Link>
      
      <div className="co-card">
        <h2 className="co-card-title">{t('orders.create_new_order')}</h2>

        {/* Top 3-col Grid */}
        <div className="co-grid-3">
          <div className="co-form-group">
            <label>{t('orders.customer')}</label>
            <div className="co-customer-row">
              <select className="co-select">
                <option>{t('orders.walk_in_customer')}</option>
              </select>
              <button className="btn btn-primary co-new-btn"><Plus size={16} /> {t('orders.new')}</button>
            </div>
          </div>
          <div className="co-form-group">
            <label>{t('orders.order_date')} <span className="text-red">*</span></label>
            <input type="date" className="co-input" defaultValue="2026-07-19" />
          </div>
          <div className="co-form-group">
            <label>{t('orders.delivery_date')}</label>
            <input type="date" className="co-input" />
          </div>
        </div>

        {/* Status Row */}
        <div className="co-grid-1">
          <div className="co-form-group">
            <label>{t('orders.status')} <span className="text-red">*</span></label>
            <select className="co-select">
              <option>{t('orders.pending')}</option>
              <option>{t('orders.delivered')}</option>
            </select>
          </div>
        </div>

        {/* Order Items Section */}
        <div className="co-section-header">
          <h3 className="co-section-title">{t('orders.order_items')}</h3>
          <button className="btn btn-primary co-add-item-btn"><Plus size={16} /> {t('orders.add_item')}</button>
        </div>

        <div className="co-item-row">
          <div className="co-form-group flex-1">
            <label>{t('orders.product')} <span className="text-red">*</span></label>
            <select className="co-select">
              <option>{t('orders.select_product')}</option>
            </select>
          </div>
          <div className="co-form-group flex-1">
            <label>{t('orders.variant')}</label>
            <select className="co-select">
              <option>{t('orders.no_variant')}</option>
            </select>
          </div>
          <div className="co-form-group co-w-sm">
            <label>{t('orders.quantity')} <span className="text-red">*</span></label>
            <input type="number" className="co-input" defaultValue="1" />
          </div>
          <div className="co-form-group co-w-sm">
            <label>{t('orders.price')} <span className="text-red">*</span></label>
            <input type="number" className="co-input" defaultValue="0" />
          </div>
          <div className="co-form-group co-w-sm">
            <label>{t('orders.discount')}</label>
            <input type="number" className="co-input" defaultValue="0" />
          </div>
          <div className="co-form-group-btn">
            <button className="btn btn-danger co-remove-btn">{t('orders.remove')}</button>
          </div>
        </div>

        {/* Shipping & Summary Section */}
        <div className="co-summary-grid">
          <div className="co-shipping-col">
            <div className="co-form-group">
              <label>{t('orders.shipping_charges')}</label>
              <input type="number" className="co-input" defaultValue="0" />
            </div>
          </div>
          <div className="co-summary-col">
            <div className="co-summary-row">
              <span className="co-summary-label">{t('orders.subtotal')}</span>
              <span className="co-summary-value fw-600">₹0.00</span>
            </div>
            <div className="co-summary-row">
              <span className="co-summary-label">{t('orders.discount')}</span>
              <span className="co-summary-value text-red fw-600">-₹0.00</span>
            </div>
            <div className="co-summary-row">
              <span className="co-summary-label">{t('orders.tax_gst')}</span>
              <span className="co-summary-value fw-600">₹0.00</span>
            </div>
            <div className="co-summary-row">
              <span className="co-summary-label">{t('orders.shipping')}</span>
              <span className="co-summary-value fw-600">₹0.00</span>
            </div>
            <div className="co-summary-row co-grand-total-row">
              <span className="co-summary-label fw-800">{t('orders.grand_total')}</span>
              <span className="co-summary-value text-green fw-800">₹0.00</span>
            </div>
          </div>
        </div>

        <hr className="co-divider" />

        {/* Info Blocks Split */}
        <div className="co-info-split">
          <div className="co-info-left">
            <h3 className="co-section-title">{t('orders.payment_info')}</h3>
            <div className="co-form-group">
              <label>{t('orders.payment_mode')} <span className="text-red">*</span></label>
              <select className="co-select">
                <option>{t('orders.cash')}</option>
              </select>
            </div>
            <div className="co-form-group mt-16">
              <label>{t('orders.payment_status')} <span className="text-red">*</span></label>
              <select className="co-select">
                <option>{t('orders.paid')}</option>
              </select>
            </div>
            <div className="co-form-group mt-16">
              <label>{t('orders.paid_amount')} <span className="text-red">*</span></label>
              <input type="number" className="co-input" defaultValue="0.00" />
            </div>
          </div>
          <div className="co-info-right">
            <h3 className="co-section-title">{t('orders.delivery_info')}</h3>
            <div className="co-form-group">
              <label>{t('orders.delivery_address')}</label>
              <textarea className="co-textarea" rows={3}></textarea>
            </div>
            <div className="co-form-group mt-16">
              <label>{t('orders.delivery_phone')}</label>
              <input type="text" className="co-input" />
            </div>
            <div className="co-form-group mt-16">
              <label>{t('orders.notes')}</label>
              <textarea className="co-textarea" rows={3}></textarea>
            </div>
          </div>
        </div>

        <hr className="co-divider" />

        {/* Footer Actions */}
        <div className="co-footer">
          <button className="btn co-btn-outline">{t('orders.cancel')}</button>
          <button className="btn btn-primary co-create-btn">{t('orders.create_btn')}</button>
        </div>

      </div>
    </div>
  );
}
