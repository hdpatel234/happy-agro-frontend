"use client";

import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function CreateExpensePage() {
  const { t } = useLanguage();

  return (
    <div className="cex-container">
      <div className="cex-card">
        <Link href="/expenses" className="cex-back-link">
          &larr; {t('expenses.back_to_expenses')}
        </Link>
        
        <h2 className="cex-title">{t('expenses.add_new_expense')}</h2>

        {/* Row 1: Category */}
        <div className="cex-form-row">
          <div className="cex-form-group">
            <label>{t('expenses.category_label')}</label>
            <select className="cex-input">
              <option>{t('expenses.select_category')}</option>
            </select>
            <span className="cex-helper-text">{t('expenses.custom_category_help')}</span>
          </div>
          <div className="cex-form-group">
            <label>{t('expenses.custom_category_label')}</label>
            <input type="text" className="cex-input" placeholder={t('expenses.custom_category_placeholder')} />
          </div>
        </div>

        {/* Row 2: Amount & Date */}
        <div className="cex-form-row mt-16">
          <div className="cex-form-group">
            <label>{t('expenses.amount_label')} <span className="text-red">*</span></label>
            <div className="cex-input-wrapper">
              <span className="cex-currency-symbol">₹</span>
              <input type="number" className="cex-input cex-input-with-symbol" placeholder="0.00" />
            </div>
          </div>
          <div className="cex-form-group">
            <label>{t('expenses.date_label')} <span className="text-red">*</span></label>
            <input type="date" className="cex-input" defaultValue="2026-07-20" />
          </div>
        </div>

        {/* Row 3: Notes */}
        <div className="cex-form-group mt-16">
          <label>{t('expenses.notes_label')}</label>
          <textarea 
            className="cex-textarea" 
            placeholder={t('expenses.notes_placeholder')}
            rows={4}
          ></textarea>
        </div>

        {/* Footer Actions */}
        <div className="cex-footer-actions mt-24">
          <button className="btn btn-green cex-action-btn">
            <Check size={18} /> {t('expenses.add_expense_btn')}
          </button>
          <Link href="/expenses" className="btn cex-btn-gray cex-action-btn">{t('expenses.cancel_btn')}</Link>
        </div>
      </div>
    </div>
  );
}
