"use client";

import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function EditExpensePage() {
  const { t } = useLanguage();

  return (
    <div className="eex-container">
      <div className="eex-card">
        <Link href="/expenses" className="eex-back-link">
          &larr; {t('expenses.back_to_expenses')}
        </Link>
        
        <h2 className="eex-title">{t('expenses.edit_expense')}</h2>

        {/* Row 1: Category */}
        <div className="eex-form-row">
          <div className="eex-form-group">
            <label>{t('expenses.category_label')}</label>
            <select className="eex-input">
              <option>{t('expenses.select_category')}</option>
            </select>
            <span className="eex-helper-text">{t('expenses.custom_category_help')}</span>
          </div>
          <div className="eex-form-group">
            <label>{t('expenses.custom_category_label')}</label>
            <input type="text" className="eex-input" defaultValue="Certification" />
          </div>
        </div>

        {/* Row 2: Amount & Date */}
        <div className="eex-form-row mt-16">
          <div className="eex-form-group">
            <label>{t('expenses.amount_label')} <span className="text-red">*</span></label>
            <div className="eex-input-wrapper">
              <span className="eex-currency-symbol">₹</span>
              <input type="number" className="eex-input eex-input-with-symbol" defaultValue="100.00" />
            </div>
          </div>
          <div className="eex-form-group">
            <label>{t('expenses.date_label')} <span className="text-red">*</span></label>
            <input type="date" className="eex-input" defaultValue="2026-07-20" />
          </div>
        </div>

        {/* Row 3: Notes */}
        <div className="eex-form-group mt-16">
          <label>{t('expenses.notes_label')}</label>
          <textarea 
            className="eex-textarea" 
            placeholder={t('expenses.notes_placeholder')}
            rows={4}
          ></textarea>
        </div>

        {/* Footer Actions */}
        <div className="eex-footer-actions mt-24">
          <button className="btn btn-green eex-action-btn">
            <Check size={18} /> {t('expenses.update_expense_btn')}
          </button>
          <Link href="/expenses" className="btn eex-btn-gray eex-action-btn">{t('expenses.cancel_btn')}</Link>
        </div>
      </div>
    </div>
  );
}
