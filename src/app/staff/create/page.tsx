"use client";

import React from 'react';
import Link from 'next/link';
import { Eye, Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function CreateStaffPage() {
  const { t } = useLanguage();
  return (
    <div className="cst-container">
      <div className="cst-card">
        <Link href="/staff" className="cst-back-link">
          &larr; {t('staff.back_to_staff')}
        </Link>
        
        <h2 className="cst-title">{t('staff.add_new')}</h2>

        {/* Standard Fields */}
        <div className="cst-form-group mt-24">
          <label>{t('staff.full_name')} <span className="text-red">*</span></label>
          <input type="text" className="cst-input" />
        </div>

        <div className="cst-form-group">
          <label>{t('staff.mobile')} <span className="text-red">*</span></label>
          <input type="text" className="cst-input" />
        </div>

        <div className="cst-form-group">
          <label>{t('staff.email')} <span className="text-red">*</span></label>
          <input type="email" className="cst-input" />
        </div>

        <div className="cst-form-group">
          <label>{t('staff.user_type')} <span className="text-red">*</span></label>
          <select className="cst-input">
            <option>{t('staff.role_staff')}</option>
            <option>{t('staff.role_manager')}</option>
            <option>{t('staff.role_admin')}</option>
          </select>
        </div>

        {/* Password Fields */}
        <div className="cst-form-group">
          <label>{t('staff.password')} <span className="text-red">*</span></label>
          <div className="cst-input-wrapper">
            <input type="password" className="cst-input-icon" placeholder={t('staff.min_chars')} />
            <Eye size={18} className="cst-icon" />
          </div>
          <span className="cst-helper-text">{t('staff.min_chars')}</span>
        </div>

        <div className="cst-form-group">
          <label>{t('staff.confirm_password')} <span className="text-red">*</span></label>
          <div className="cst-input-wrapper">
            <input type="password" className="cst-input-icon" placeholder={t('staff.re_enter')} />
            <Eye size={18} className="cst-icon" />
          </div>
        </div>

        {/* Roles Section */}
        <div className="cst-roles-section mt-24">
          <label className="cst-section-label">{t('staff.roles')} <span className="text-red">*</span></label>
          <div className="cst-checkbox-group">
            <input type="checkbox" id="role-staff" className="cst-checkbox" />
            <label htmlFor="role-staff">{t('staff.role_staff')}</label>
          </div>
        </div>

        {/* Permissions Section */}
        <div className="cst-permissions-section">
          <label className="cst-section-label">{t('staff.permissions')}</label>
          
          <div className="cst-permissions-box">
            <h4 className="cst-box-title">{t('staff.manage')}</h4>
            <div className="cst-permissions-grid">
              <div className="cst-checkbox-group">
                <input type="checkbox" id="perm-customers" className="cst-checkbox" />
                <label htmlFor="perm-customers">{t('staff.perm_customers')}</label>
              </div>
              <div className="cst-checkbox-group">
                <input type="checkbox" id="perm-expenses" className="cst-checkbox" />
                <label htmlFor="perm-expenses">{t('staff.perm_expenses')}</label>
              </div>
              <div className="cst-checkbox-group">
                <input type="checkbox" id="perm-payments" className="cst-checkbox" />
                <label htmlFor="perm-payments">{t('staff.perm_payments')}</label>
              </div>
              <div className="cst-checkbox-group">
                <input type="checkbox" id="perm-products" className="cst-checkbox" />
                <label htmlFor="perm-products">{t('staff.perm_products')}</label>
              </div>
              <div className="cst-checkbox-group">
                <input type="checkbox" id="perm-purchases" className="cst-checkbox" />
                <label htmlFor="perm-purchases">{t('staff.perm_purchases')}</label>
              </div>
              <div className="cst-checkbox-group">
                <input type="checkbox" id="perm-reports" className="cst-checkbox" />
                <label htmlFor="perm-reports">{t('staff.perm_reports')}</label>
              </div>
              <div className="cst-checkbox-group">
                <input type="checkbox" id="perm-sales" className="cst-checkbox" />
                <label htmlFor="perm-sales">{t('staff.perm_sales')}</label>
              </div>
              <div className="cst-checkbox-group">
                <input type="checkbox" id="perm-stock" className="cst-checkbox" />
                <label htmlFor="perm-stock">{t('staff.perm_stock')}</label>
              </div>
              <div className="cst-checkbox-group">
                <input type="checkbox" id="perm-subscriptions" className="cst-checkbox" />
                <label htmlFor="perm-subscriptions">{t('staff.perm_subscriptions')}</label>
              </div>
              <div className="cst-checkbox-group">
                <input type="checkbox" id="perm-suppliers" className="cst-checkbox" />
                <label htmlFor="perm-suppliers">{t('staff.perm_suppliers')}</label>
              </div>
            </div>
          </div>
          <span className="cst-helper-text">{t('staff.perm_helper')}</span>
        </div>

        {/* Active Checkbox */}
        <div className="cst-checkbox-group mt-16">
          <input type="checkbox" id="active-staff" className="cst-checkbox primary" defaultChecked />
          <label htmlFor="active-staff" className="font-semibold">{t('staff.active_label')}</label>
        </div>

        {/* Footer Actions */}
        <div className="cst-footer-actions">
          <button className="btn btn-green cst-action-btn">
            <Check size={18} /> {t('staff.create_btn')}
          </button>
          <button className="btn cst-btn-gray cst-action-btn">{t('staff.cancel_btn')}</button>
        </div>
      </div>
    </div>
  );
}
