"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function StaffDetailsPage() {
  const { t } = useLanguage();
  return (
    <div className="sd-container">
      <Link href="/staff" className="sd-back-link">
        &larr; {t('staff.back_to_staff')}
      </Link>

      <div className="sd-card">
        {/* Header Banner */}
        <div className="sd-header-banner">
          <div className="sd-avatar"></div>
          <div className="sd-header-info">
            <h2 className="sd-name">Test Name</h2>
            <p className="sd-email">hdpatel2345@gmail.com</p>
            <span className="sd-badge-active">{t('staff.active')}</span>
          </div>
        </div>

        {/* Details Content */}
        <div className="sd-content">
          {/* Left Column */}
          <div className="sd-column">
            <h3 className="sd-section-title">{t('staff.personal_info')}</h3>
            
            <div className="sd-info-group">
              <span className="sd-label">{t('staff.full_name')}</span>
              <span className="sd-value">Test Name</span>
            </div>
            
            <div className="sd-info-group">
              <span className="sd-label">{t('staff.email_address')}</span>
              <span className="sd-value">hdpatel2345@gmail.com</span>
            </div>

            <div className="sd-info-group">
              <span className="sd-label">{t('staff.mobile_number')}</span>
              <span className="sd-value">4343434343</span>
            </div>

            <div className="sd-info-group">
              <span className="sd-label">{t('staff.user_type')}</span>
              <span className="sd-role-badge">{t('staff.role_staff')}</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="sd-column">
            <h3 className="sd-section-title">{t('staff.roles_and_permissions')}</h3>
            <div className="sd-info-group">
              <span className="sd-role-badge">{t('staff.role_staff')}</span>
            </div>

            <h3 className="sd-section-title mt-32">{t('staff.account_info')}</h3>
            <div className="sd-info-group">
              <span className="sd-label">{t('staff.member_since')}</span>
              <span className="sd-value">Jul 20, 2026</span>
            </div>
            
            <div className="sd-info-group">
              <span className="sd-label">{t('staff.last_updated')}</span>
              <span className="sd-value">Jul 20, 2026 12:13 AM</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sd-footer">
          <Link href="/staff/1/edit" className="btn btn-green sd-action-btn">{t('staff.edit_staff')}</Link>
          <Link href="/staff" className="btn sd-btn-gray sd-action-btn">{t('staff.back_to_list')}</Link>
        </div>
      </div>
    </div>
  );
}
