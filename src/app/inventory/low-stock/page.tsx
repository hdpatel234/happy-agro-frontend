"use client";

import React from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function LowStockPage() {
  const { t } = useLanguage();

  return (
    <div className="ls-container">
      <div className="ls-header">
        <div className="ls-title-section">
          <h2 className="ls-title">{t('inventory.low_stock_alert_title')}</h2>
          <p className="ls-subtitle">{t('inventory.low_stock_alert_subtitle')}</p>
        </div>
        <Link href="/inventory" className="ls-back-link">
          &larr; {t('inventory.back_to_inventory')}
        </Link>
      </div>

      <div className="ls-empty-card">
        <div className="ls-empty-content">
          <div className="ls-icon-wrapper">
            <CheckCircle2 size={48} className="ls-check-icon" strokeWidth={3} />
          </div>
          <h3 className="ls-empty-title">{t('inventory.all_good')}</h3>
          <p className="ls-empty-subtitle">{t('inventory.no_low_stock_msg')}</p>
        </div>
      </div>
    </div>
  );
}
