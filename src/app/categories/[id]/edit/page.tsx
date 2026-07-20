"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function EditCategoryPage() {
  const { t } = useLanguage();

  return (
    <div className="cat-edit-container">
      <div className="ec-card">
        <Link href="/categories" className="ec-back-link">
          &larr; {t('categories.back_to_categories')}
        </Link>
        
        <h2 className="ec-title">{t('categories.edit_category')}</h2>
        
        <form className="ec-form">
          <div className="ec-field-group">
            <label className="ec-label">{t('categories.category_name')} <span className="text-danger">*</span></label>
            <input type="text" className="ec-input" defaultValue="Organic Crop Protection" />
          </div>

          <div className="ec-field-group">
            <label className="ec-label">{t('categories.parent_category_optional')}</label>
            <select className="ec-input" defaultValue="-- Main Category --">
              <option>{t('categories.main_category_option')}</option>
              <option>Irrigation Products</option>
              <option>Organic Crop Protection</option>
              <option>Pesticides</option>
              <option>Fertilizers</option>
            </select>
          </div>

          <div className="ec-field-group">
            <label className="ec-label">{t('categories.description')}</label>
            <textarea 
              className="ec-textarea" 
              rows={4}
            ></textarea>
          </div>

          <div className="ec-checkbox-group">
            <input type="checkbox" id="activeCheckbox" defaultChecked className="ec-checkbox" />
            <label htmlFor="activeCheckbox" className="ec-checkbox-label">{t('categories.active')}</label>
          </div>

          <div className="ec-actions">
            <button type="button" className="btn btn-primary ec-submit-btn">{t('categories.update_btn')}</button>
            <Link href="/categories" className="btn btn-outline ec-cancel-btn">{t('categories.cancel_btn')}</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
