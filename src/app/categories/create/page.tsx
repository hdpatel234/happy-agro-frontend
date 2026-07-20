"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function CategoriesCreatePage() {
  const { t } = useLanguage();

  return (
    <div className="cat-create-container">
      <div className="cc-card">
        <Link href="/categories" className="cc-back-link">
          &larr; {t('categories.back_to_categories')}
        </Link>
        
        <h2 className="cc-title">{t('categories.create_new_category')}</h2>
        
        <form className="cc-form">
          <div className="cc-field-group">
            <label className="cc-label">{t('categories.category_name')} <span className="text-danger">*</span></label>
            <input type="text" className="cc-input" />
          </div>

          <div className="cc-field-group">
            <label className="cc-label">{t('categories.parent_category')}</label>
            <select className="cc-input">
              <option>{t('categories.main_category_option')}</option>
              <option>Irrigation Products</option>
              <option>Organic Crop Protection</option>
              <option>Pesticides</option>
              <option>Fertilizers</option>
            </select>
          </div>

          <div className="cc-field-group">
            <label className="cc-label">{t('categories.description')}</label>
            <textarea 
              className="cc-textarea" 
              rows={4}
            ></textarea>
          </div>

          <div className="cc-checkbox-group">
            <input type="checkbox" id="activeCheckbox" defaultChecked className="cc-checkbox" />
            <label htmlFor="activeCheckbox" className="cc-checkbox-label">{t('categories.active')}</label>
          </div>

          <div className="cc-actions">
            <button type="button" className="btn btn-primary cc-submit-btn">{t('categories.create_btn')}</button>
            <Link href="/categories" className="btn btn-outline cc-cancel-btn">{t('categories.cancel_btn')}</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
