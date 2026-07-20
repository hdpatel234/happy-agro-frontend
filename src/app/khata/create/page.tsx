"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function KhataCreatePage() {
  const { t } = useLanguage();

  return (
    <div className="khata-create-container">
      <div className="kc-card">
        <Link href="/khata" className="kc-back-link">
          &larr; {t('khata.back')}
        </Link>
        
        <h2 className="kc-title">{t('khata.add_ledger_entry')}</h2>
        
        <form className="kc-form">
          <div className="kc-field-group">
            <label className="kc-label">{t('khata.party_type')} <span className="text-danger">*</span></label>
            <select className="kc-input">
              <option>{t('khata.select_party_type')}</option>
              <option>{t('khata.customers')}</option>
              <option>{t('khata.suppliers')}</option>
            </select>
          </div>

          <div className="kc-field-group">
            <label className="kc-label">{t('khata.entry_type')} <span className="text-danger">*</span></label>
            <select className="kc-input">
              <option>{t('khata.debit_option')}</option>
              <option>{t('khata.credit_option')}</option>
            </select>
            <p className="kc-hint">{t('khata.entry_type_hint')}</p>
          </div>

          <div className="kc-field-group">
            <label className="kc-label">{t('khata.amount')} <span className="text-danger">*</span></label>
            <input type="number" className="kc-input" placeholder="0.00" />
          </div>

          <div className="kc-field-group">
            <label className="kc-label">{t('khata.date')} <span className="text-danger">*</span></label>
            <input type="date" className="kc-input" defaultValue="2026-07-19" />
          </div>

          <div className="kc-field-group">
            <label className="kc-label">{t('khata.description')}</label>
            <textarea 
              className="kc-textarea" 
              placeholder={t('khata.description_placeholder')}
              rows={4}
            ></textarea>
          </div>

          <div className="kc-info-box">
            <strong>{t('khata.note')}</strong> {t('khata.note_text')}
          </div>

          <div className="kc-actions">
            <button type="button" className="btn btn-primary kc-submit-btn">{t('khata.add_entry')}</button>
            <Link href="/khata" className="btn btn-outline kc-cancel-btn">{t('khata.cancel')}</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
