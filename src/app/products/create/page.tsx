"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function CreateProductPage() {
  const { t } = useLanguage();
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
          &larr; {t('products.back_to_products')}
        </Link>
        
        <h2 className="pc-title">{t('products.create_new')}</h2>
        
        <form className="pc-form">
          <div className="pc-two-col-grid">
            <div className="pc-field-group">
              <label className="pc-label">{t('products.product_name')} <span className="text-danger">*</span></label>
              <input type="text" className="pc-input" />
            </div>
            <div className="pc-field-group">
              <label className="pc-label">{t('products.parent_category')}</label>
              <select className="pc-select">
                <option>{t('products.select_parent_category')}</option>
              </select>
            </div>
          </div>

          <div className="pc-two-col-grid">
            <div className="pc-field-group">
              <label className="pc-label">{t('products.category')}</label>
              <select className="pc-select">
                <option>{t('products.select_category')}</option>
              </select>
              <span className="pc-helper-link">{t('products.add_new_category_prompt')} <Link href="/categories/create">{t('products.add_new_category')}</Link></span>
            </div>
            <div className="pc-field-group">
              <label className="pc-label">{t('products.brand_company')}</label>
              <select className="pc-select">
                <option>{t('products.select_brand')}</option>
              </select>
              <span className="pc-helper-link">{t('products.add_new_brand_prompt')} <Link href="/brands/create">{t('products.add_new_brand')}</Link></span>
            </div>
          </div>

          <div className="pc-field-group">
            <label className="pc-label">{t('products.tax_master')} <span className="text-danger">*</span></label>
            <select className="pc-select w-50">
              <option>{t('products.select_tax_master')}</option>
            </select>
            <p className="pc-help-text">{t('products.tax_master_help')}</p>
          </div>

          <div className="pc-field-group">
            <label className="pc-label">{t('products.description')}</label>
            <textarea className="pc-textarea" rows={4}></textarea>
          </div>

          <div className="pc-checkbox-group">
            <input type="checkbox" id="activeCheckbox" defaultChecked className="pc-checkbox" />
            <label htmlFor="activeCheckbox" className="pc-checkbox-label">{t('products.active')}</label>
          </div>

          <div className="pc-variants-section">
            <div className="pc-variants-header">
              <h3 className="pc-variants-title">{t('products.variants_title')}</h3>
              <p className="pc-variants-subtitle">{t('products.variants_subtitle')}</p>
            </div>

            {variants.map((variant, index) => (
              <div key={variant.id} className="pc-variant-card">
                <div className="pc-variant-card-header">
                  <h4>{t('products.variant')} {index + 1}</h4>
                  <button 
                    type="button" 
                    className="pc-remove-variant-btn" 
                    onClick={() => removeVariant(variant.id)}
                    disabled={variants.length === 1}
                  >
                    {t('products.remove')}
                  </button>
                </div>

                <div className="pc-four-col-grid">
                  <div className="pc-field-group">
                    <label className="pc-label">{t('products.packing_size')} <span className="text-danger">*</span></label>
                    <input type="text" className="pc-input" placeholder={t('products.packing_size_placeholder')} />
                  </div>
                  <div className="pc-field-group">
                    <label className="pc-label">{t('products.table.sku')}</label>
                    <input type="text" className="pc-input" />
                  </div>
                  <div className="pc-field-group">
                    <label className="pc-label">{t('products.unit')}</label>
                    <select className="pc-select">
                      <option>{t('products.select_unit')}</option>
                    </select>
                  </div>
                  <div className="pc-field-group">
                    <label className="pc-label">{t('products.barcode')}</label>
                    <input type="text" className="pc-input" />
                  </div>
                </div>

                <div className="pc-four-col-grid mt-3">
                  <div className="pc-field-group">
                    <label className="pc-label">{t('products.cost_price')} <span className="text-danger">*</span></label>
                    <input type="text" className="pc-input" />
                  </div>
                  <div className="pc-field-group">
                    <label className="pc-label">{t('products.selling_price')} <span className="text-danger">*</span></label>
                    <input type="text" className="pc-input" />
                  </div>
                  <div className="pc-field-group">
                    <label className="pc-label">{t('products.opening_stock')} <span className="text-danger">*</span></label>
                    <input type="text" className="pc-input" />
                    <p className="pc-help-text-small">{t('products.opening_stock_help')}</p>
                  </div>
                  <div className="pc-field-group">
                    <label className="pc-label">{t('products.low_stock_threshold')}</label>
                    <input type="text" className="pc-input" defaultValue="10" />
                  </div>
                </div>

                <div className="pc-variant-footer">
                  <div className="pc-variant-radios">
                    <label className="pc-radio-label">
                      <input type="radio" name="defaultVariant" defaultChecked={index === 0} /> {t('products.default')}
                    </label>
                    <label className="pc-radio-label">
                      <input type="checkbox" defaultChecked /> {t('products.active')}
                    </label>
                  </div>
                  <button type="button" className="btn btn-blue" onClick={addVariant}>
                    {t('products.add_variant')}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="pc-info-note">
            <strong>{t('products.note')}</strong> {t('products.note_text')}
          </div>

          <div className="pc-actions">
            <button type="button" className="btn btn-primary pc-submit-btn">{t('products.create_btn')}</button>
            <Link href="/products" className="btn btn-outline pc-cancel-btn">{t('products.cancel')}</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
