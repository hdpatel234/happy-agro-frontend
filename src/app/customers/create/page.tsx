"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function CreateCustomerPage() {
  const { t } = useLanguage();

  return (
    <div className="cc-container">
      <div className="cc-card">
        <Link href="/customers" className="cc-back-link">
          &larr; {t('customers.back_to_customers')}
        </Link>
        
        <h2 className="cc-title">{t('customers.create_new_customer')}</h2>

        <div className="cc-form-group">
          <label>{t('customers.name_label')} <span className="text-red">*</span></label>
          <input type="text" className="cc-input" />
        </div>

        <div className="cc-form-group">
          <label>{t('customers.mobile_label')}</label>
          <input type="text" className="cc-input" />
        </div>

        <div className="cc-form-group">
          <label>{t('customers.email_label')}</label>
          <input type="email" className="cc-input" />
        </div>

        <div className="cc-form-group">
          <label>{t('customers.credit_limit_label')}</label>
          <input type="number" className="cc-input" />
        </div>

        <div className="cc-form-group">
          <label>{t('customers.opening_balance_label')}</label>
          <input type="number" className="cc-input" defaultValue="0" />
          <span className="cc-help-text">{t('customers.opening_balance_help')}</span>
        </div>

        <div className="cc-form-group">
          <label>{t('customers.address_label')} <span className="text-red">*</span></label>
          <textarea className="cc-textarea" rows={4}></textarea>
        </div>

        <div className="cc-form-group-inline">
          <input type="checkbox" className="cc-checkbox" id="active-check" defaultChecked />
          <label htmlFor="active-check">{t('customers.active_label')}</label>
        </div>

        <div className="cc-footer-actions">
          <button className="btn btn-primary cc-action-btn">{t('customers.create_btn')}</button>
          <button className="btn cc-btn-gray cc-action-btn">{t('customers.cancel_btn')}</button>
        </div>
      </div>
    </div>
  );
}
