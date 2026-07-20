"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function EditBrandPage() {
  const { t } = useLanguage();

  return (
    <div className="ebr-container">
      <div className="ebr-card">
        <Link href="/brands" className="ebr-back-link">
          &larr; {t('brands.back_to_brands') || 'Back to Brands'}
        </Link>
        
        <h2 className="ebr-title">{t('brands.edit_brand') || 'Edit Brand'}</h2>

        <div className="ebr-form-group">
          <label>{t('brands.brand_name') || 'Brand Name'} <span className="text-red">*</span></label>
          <input type="text" className="ebr-input" defaultValue="ADAMA Ltd." />
        </div>

        <div className="ebr-form-group">
          <label>{t('brands.company_name') || 'Company Name'}</label>
          <input type="text" className="ebr-input" defaultValue="ADAMA Ltd." />
          <span className="ebr-helper-text">{t('brands.company_name_help') || 'The full legal name of the company that owns this brand'}</span>
        </div>

        <div className="ebr-form-group">
          <label>{t('brands.description') || 'Description'}</label>
          <textarea 
            className="ebr-textarea" 
            placeholder={t('brands.description_placeholder') || 'Optional description about the brand'}
            rows={4}
          ></textarea>
        </div>

        <div className="ebr-form-group-checkbox">
          <label className="ebr-checkbox-label">
            <input type="checkbox" className="ebr-checkbox" defaultChecked />
            {t('brands.active_help') || 'Active (Brand will be available for product selection)'}
          </label>
        </div>

        <div className="ebr-footer-actions">
          <button className="btn btn-green ebr-action-btn">
            {t('brands.update_btn') || 'Update Brand'}
          </button>
          <Link href="/brands" className="btn ebr-btn-gray ebr-action-btn">
            {t('brands.cancel') || 'Cancel'}
          </Link>
        </div>
      </div>
    </div>
  );
}
