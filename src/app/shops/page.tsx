"use client";

import React from 'react';
import { Plus, Mail, Phone, Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function ShopsPage() {
  const { t } = useLanguage();

  return (
    <div className="shops-container">
      {/* Header */}
      <div className="shops-header">
        <div className="shops-title-section">
          <h2 className="shops-title">{t('shops.title') || 'My Shops'}</h2>
          <p className="shops-subtitle">{t('shops.subtitle') || 'Manage all your shops from one place'}</p>
        </div>
        <button className="btn btn-green shops-add-btn">
          <Plus size={16} /> {t('shops.add_new') || 'Add New Shop'}
        </button>
      </div>

      {/* Main Grid */}
      <div className="shops-grid">
        {/* Active Shop Card */}
        <div className="shop-card active-shop">
          <div className="shop-card-header">
            <div className="shop-name-section">
              <h3 className="shop-name">KrishiRatna</h3>
              <div className="shop-status-badge">
                <Check size={12} /> {t('shops.active_shop') || 'Active Shop'}
              </div>
            </div>
            <span className="shop-plan-badge">{t('shops.trial_plan') || 'Trial Plan'}</span>
          </div>
          
          <div className="shop-details">
            <div className="shop-detail-row">
              <Mail size={14} className="text-muted" />
              <span>hdpatel234@gmail.com</span>
            </div>
            <div className="shop-detail-row">
              <Phone size={14} className="text-muted" />
              <span>8238071640</span>
            </div>
            <div className="shop-trial-info">
              <span className="shop-trial-tag">{t('shops.trial') || 'Trial'}</span>
              <span className="shop-expires-text">{t('shops.expires') || 'Expires:'} Aug 02, 2026</span>
            </div>
          </div>

          <div className="shop-card-footer">
            <button className="btn shop-btn-outline">
              {t('shops.view_details') || 'View Details'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
