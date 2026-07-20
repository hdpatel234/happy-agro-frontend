import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function CreateBrandPage() {
  const { t } = useLanguage();

  return (
    <div className="brand-create-container">
      <div className="bc-card">
        <Link href="/brands" className="bc-back-link">
          &larr; {t('brands.back_to_brands')}
        </Link>
        
        <h2 className="bc-title">{t('brands.create_new_brand')}</h2>
        
        <form className="bc-form">
          <div className="bc-field-group">
            <label className="bc-label">{t('brands.brand_name')} <span className="text-danger">*</span></label>
            <input type="text" className="bc-input" placeholder={t('brands.brand_name_placeholder')} />
          </div>

          <div className="bc-field-group">
            <label className="bc-label">{t('brands.company_name')}</label>
            <input type="text" className="bc-input" placeholder={t('brands.company_name_placeholder')} />
            <p className="bc-help-text">{t('brands.company_name_help')}</p>
          </div>

          <div className="bc-field-group">
            <label className="bc-label">{t('brands.description')}</label>
            <textarea 
              className="bc-textarea" 
              rows={4}
              placeholder={t('brands.description_placeholder')}
            ></textarea>
          </div>

          <div className="bc-checkbox-group">
            <input type="checkbox" id="activeCheckbox" defaultChecked className="bc-checkbox" />
            <label htmlFor="activeCheckbox" className="bc-checkbox-label">{t('brands.active_label')}</label>
          </div>

          <div className="bc-actions">
            <button type="button" className="btn btn-primary bc-submit-btn">{t('brands.create_btn')}</button>
            <Link href="/brands" className="btn btn-outline bc-cancel-btn">{t('brands.cancel_btn')}</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
