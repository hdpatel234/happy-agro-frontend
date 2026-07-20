"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function EditCustomerPage() {
  const { t } = useLanguage();

  return (
    <div className="ec-container">
      <div className="ec-card">
        <Link href="/customers" className="ec-back-link">
          &larr; {t('customers.back_to_customers')}
        </Link>
        
        <h2 className="ec-title">{t('customers.edit_customer')}</h2>

        {/* Row 1 */}
        <div className="ec-grid-2">
          <div className="ec-form-group">
            <label>{t('customers.name_label')} <span className="text-red">*</span></label>
            <input type="text" className="ec-input" defaultValue="Test Name" />
          </div>
          <div className="ec-form-group">
            <label>{t('customers.mobile_label')}</label>
            <input type="text" className="ec-input" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="ec-grid-2 mt-16">
          <div className="ec-form-group">
            <label>{t('customers.email_label')}</label>
            <input type="email" className="ec-input" />
          </div>
          <div className="ec-form-group">
            <label>{t('customers.credit_limit_label')}</label>
            <input type="number" className="ec-input" defaultValue="0.00" />
          </div>
        </div>

        {/* Row 3 */}
        <div className="ec-form-group mt-16">
          <label>{t('customers.address_label')} <span className="text-red">*</span></label>
          <textarea className="ec-textarea" rows={4}></textarea>
        </div>

        {/* Active Checkbox */}
        <div className="ec-form-group-inline mt-16">
          <input type="checkbox" className="ec-checkbox" id="active-check" defaultChecked />
          <label htmlFor="active-check">{t('customers.active_label')}</label>
        </div>

        {/* Footer Actions */}
        <div className="ec-footer-actions">
          <button className="btn btn-primary ec-action-btn">{t('customers.update_btn')}</button>
          <button className="btn ec-btn-gray ec-action-btn">{t('customers.cancel_btn')}</button>
        </div>
      </div>
    </div>
  );
}
