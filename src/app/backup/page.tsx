"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

const moduleKeys = [
  "khata", "dashboard",
  "pos_billing", "categories",
  "brands", "products",
  "inventory_stock", "orders",
  "purchases", "customers",
  "suppliers", "expenses",
  "reports", "payment_reminders",
  "settings", "weather",
  "backup", "staff",
  "staff_permissions", "subscription"
];

export default function BackupPage() {
  const { t } = useLanguage();

  return (
    <div className="bkp-container">
      {/* Title section above the card is empty in screenshot, just card */}
      <div className="bkp-card">
        <div className="bkp-card-header">
          <h2 className="bkp-title">{t('backup.create_backup')}</h2>
          <p className="bkp-subtitle">{t('backup.create_backup_desc')}</p>
        </div>

        <div className="bkp-select-all-row">
          <label className="bkp-checkbox-label font-600">
            <input type="checkbox" className="bkp-checkbox" />
            {t('backup.select_all')}
          </label>
        </div>

        <div className="bkp-divider"></div>

        <div className="bkp-modules-grid">
          {moduleKeys.map((modKey, index) => (
            <label key={index} className="bkp-module-box">
              <input type="checkbox" className="bkp-checkbox" />
              <span>{t(`backup.module.${modKey}`)}</span>
            </label>
          ))}
        </div>

        <div className="bkp-card-footer">
          <button className="btn btn-green bkp-btn-now">
            {t('backup.backup_now')}
          </button>
        </div>
      </div>
    </div>
  );
}
