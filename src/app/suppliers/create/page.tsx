"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function CreateSupplierPage() {
  const { t } = useLanguage();
  return (
    <div className="cs-container">
      <div className="cs-card">
        <Link href="/suppliers" className="cs-back-link">
          &larr; {t('suppliers.back')}
        </Link>
        
        <h2 className="cs-title">{t('suppliers.create_title')}</h2>

        {/* Row 1 */}
        <div className="cs-grid-2">
          <div className="cs-form-group">
            <label>{t('suppliers.supplier_name')} <span className="text-red">*</span></label>
            <input type="text" className="cs-input" />
          </div>
          <div className="cs-form-group">
            <label>{t('suppliers.table.contact_person')}</label>
            <input type="text" className="cs-input" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="cs-grid-2">
          <div className="cs-form-group">
            <label>{t('staff.mobile')} <span className="text-red">*</span></label>
            <input type="text" className="cs-input" />
          </div>
          <div className="cs-form-group">
            <label>{t('staff.email')}</label>
            <input type="email" className="cs-input" />
          </div>
        </div>

        {/* Row 3 - GSTIN takes half width */}
        <div className="cs-grid-2">
          <div className="cs-form-group">
            <label>{t('suppliers.table.gstin')}</label>
            <input type="text" className="cs-input" />
          </div>
          <div></div> {/* Empty div to force left alignment in 2-col grid */}
        </div>

        {/* Row 4 */}
        <div className="cs-form-group">
          <label>{t('suppliers.address')} <span className="text-red">*</span></label>
          <textarea className="cs-textarea" rows={4}></textarea>
        </div>

        {/* Active Checkbox */}
        <div className="cs-form-group-inline">
          <input type="checkbox" className="cs-checkbox" id="active-check" defaultChecked />
          <label htmlFor="active-check">{t('suppliers.active')}</label>
        </div>

        {/* Footer Actions */}
        <div className="cs-footer-actions">
          <button className="btn btn-primary cs-action-btn">{t('suppliers.create_btn')}</button>
          <button className="btn cs-btn-gray cs-action-btn">{t('suppliers.cancel')}</button>
        </div>
      </div>
    </div>
  );
}
