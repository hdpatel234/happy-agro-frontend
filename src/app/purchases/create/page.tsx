"use client";

import React from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function CreatePurchasePage() {
  const { t } = useLanguage();
  return (
    <div className="cp-container">
      <Link href="/purchases" className="cp-back-link">
        &larr; {t('purchases.back_to_purchases')}
      </Link>
      
      <div className="cp-card">
        <h2 className="cp-card-title">{t('purchases.add_new')}</h2>

        {/* Top 3-col Grid */}
        <div className="cp-grid-3">
          <div className="cp-form-group">
            <label>{t('purchases.supplier')}</label>
            <div className="cp-supplier-row">
              <select className="cp-select">
                <option>{t('purchases.walk_in_supplier')}</option>
              </select>
              <button className="btn btn-blue cp-new-btn"><Plus size={16} /> {t('purchases.quick_add')}</button>
            </div>
          </div>
          <div className="cp-form-group">
            <label>{t('purchases.bill_date')} <span className="text-red">*</span></label>
            <input type="date" className="cp-input" defaultValue="2026-07-19" />
          </div>
          <div className="cp-form-group">
            <label>{t('purchases.invoice_number')}</label>
            <input type="text" className="cp-input" placeholder={t('purchases.invoice_placeholder')} />
          </div>
        </div>

        {/* Purchase Items Section */}
        <div className="cp-section-header">
          <div className="cp-section-title-box">
            <h3 className="cp-section-title">{t('purchases.purchase_items')}</h3>
            <p className="cp-section-subtitle">{t('purchases.purchase_items_subtitle')}</p>
          </div>
          <button className="btn btn-primary cp-add-item-btn"><Plus size={16} /> {t('purchases.add_item')}</button>
        </div>

        {/* Custom Purchase Item Block */}
        <div className="cp-item-block">
          <div className="cp-item-header">
            <div>
              <h4 className="cp-item-title">{t('purchases.purchase_item')} 1</h4>
              <p className="cp-item-subtitle">{t('purchases.purchase_item_subtitle')}</p>
            </div>
            <button className="cp-remove-text-btn">{t('purchases.remove')}</button>
          </div>
          
          <div className="cp-item-body">
            {/* Row 1: Product, Variant, Batch */}
            <div className="cp-grid-3">
              <div className="cp-form-group">
                <label>{t('purchases.product')} <span className="text-red">*</span></label>
                <select className="cp-select">
                  <option>{t('purchases.select_product')}</option>
                </select>
              </div>
              <div className="cp-form-group">
                <label>{t('purchases.variant_packing')}</label>
                <select className="cp-select">
                  <option>{t('purchases.no_variant')}</option>
                </select>
              </div>
              <div className="cp-form-group">
                <label>{t('purchases.batch_no')}</label>
                <input type="text" className="cp-input" placeholder={t('purchases.batch_placeholder')} />
              </div>
            </div>

            {/* Row 2: Mfg Date, Expiry Date */}
            <div className="cp-grid-2 mt-16">
              <div className="cp-form-group">
                <label>{t('purchases.mfg_date')}</label>
                <input type="date" className="cp-input" />
              </div>
              <div className="cp-form-group">
                <label>{t('purchases.expiry_date')}</label>
                <input type="date" className="cp-input" />
              </div>
            </div>

            {/* Row 3: Quantity, Cost Price, Sell Price */}
            <div className="cp-grid-3 mt-16">
              <div className="cp-form-group">
                <label>{t('purchases.quantity')} <span className="text-red">*</span></label>
                <input type="number" className="cp-input" defaultValue="1" />
              </div>
              <div className="cp-form-group">
                <label>{t('purchases.cost_price')} <span className="text-red">*</span></label>
                <input type="number" className="cp-input" />
              </div>
              <div className="cp-form-group">
                <label>{t('purchases.sell_price')}</label>
                <input type="number" className="cp-input" />
              </div>
            </div>

            {/* Row 4: MRP, GST */}
            <div className="cp-grid-2 mt-16">
              <div className="cp-form-group">
                <label>{t('purchases.mrp')}</label>
                <input type="number" className="cp-input" />
              </div>
              <div className="cp-form-group">
                <label>{t('purchases.gst_percent')}</label>
                <input type="number" className="cp-input" />
              </div>
            </div>
          </div>
        </div>

        <hr className="cp-divider" />

        {/* Financial Summary */}
        <div className="cp-grid-3">
          <div className="cp-form-group">
            <label>{t('purchases.overall_discount')}</label>
            <input type="number" className="cp-input" defaultValue="0" />
          </div>
          <div className="cp-form-group">
            <label>{t('purchases.shipping_charges')}</label>
            <input type="number" className="cp-input" defaultValue="0" />
          </div>
          <div className="cp-form-group">
            <label>{t('purchases.grand_total')}</label>
            <div className="cp-grand-total-box">₹0.00</div>
          </div>
        </div>

        <hr className="cp-divider" />

        {/* Payment Details */}
        <div className="cp-payment-section">
          <h3 className="cp-section-title">{t('purchases.payment_details')}</h3>
          <div className="cp-grid-3 mt-16">
            <div className="cp-form-group">
              <label>{t('purchases.payment_mode')}</label>
              <select className="cp-select">
                <option>{t('purchases.select_payment_mode')}</option>
              </select>
            </div>
            <div className="cp-form-group">
              <label>{t('purchases.amount_paid')}</label>
              <input type="number" className="cp-input" defaultValue="0" />
            </div>
            <div className="cp-form-group">
              <label>{t('purchases.reference_no')}</label>
              <input type="text" className="cp-input" placeholder={t('purchases.reference_placeholder')} />
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="cp-form-group mt-16">
          <label>{t('purchases.notes')}</label>
          <textarea className="cp-textarea" rows={4} placeholder={t('purchases.notes_placeholder')}></textarea>
        </div>

        {/* Footer Actions */}
        <div className="cp-footer-actions">
          <button className="btn btn-primary cp-action-btn">{t('purchases.create_btn')}</button>
          <button className="btn cp-btn-gray cp-action-btn">{t('purchases.cancel')}</button>
        </div>

      </div>
    </div>
  );
}
