"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function ShopProfilePage() {
    const { t } = useLanguage();

    return (
        <div className="sp-container">
            {/* Header */}
            <div className="sp-header">
                <h2 className="sp-title">{t('shop.title') || 'Shop Profile'}</h2>
                <p className="sp-subtitle">{t('shop.subtitle') || 'Manage your shop information and settings'}</p>
            </div>

            <div className="sp-card">
                {/* Shop Logo Section */}
                <div className="sp-logo-section">
                    <label className="sp-label">{t('shop.logo') || 'Shop Logo'}</label>
                    <div className="sp-logo-upload-wrapper">
                        <div className="sp-logo-preview">
                            <span className="sp-logo-mock-icon">🏪</span>
                        </div>
                        <div className="sp-logo-upload-info">
                            <div className="sp-file-input-wrapper">
                                <input type="file" id="logo-upload" className="sp-file-input" hidden />
                                <label htmlFor="logo-upload" className="sp-btn-choose">
                                    {t('shop.choose_file') || 'Choose file'}
                                </label>
                                <span className="sp-no-file">{t('shop.no_file') || 'No file chosen'}</span>
                            </div>
                            <p className="sp-upload-help">{t('shop.upload_help') || 'Upload a logo for your shop (Max 2MB. JPG/PNG/GIF)'}</p>
                        </div>
                    </div>
                </div>

                {/* Row 1: Shop Name & Owner Name */}
                <div className="sp-form-row mt-24">
                    <div className="sp-form-group">
                        <label className="sp-label">{t('shop.shop_name') || 'Shop Name'} <span className="text-red">*</span></label>
                        <input type="text" className="sp-input" defaultValue="Happy Agro" />
                    </div>
                    <div className="sp-form-group">
                        <label className="sp-label">{t('shop.owner_name') || 'Owner Name'} <span className="text-red">*</span></label>
                        <input type="text" className="sp-input" defaultValue="Haresh Patel" />
                    </div>
                </div>

                {/* Row 2: Email & Mobile */}
                <div className="sp-form-row mt-16">
                    <div className="sp-form-group">
                        <label className="sp-label">{t('shop.email') || 'Email'} <span className="text-red">*</span></label>
                        <input type="email" className="sp-input" defaultValue="hdpatel234@gmail.com" />
                    </div>
                    <div className="sp-form-group">
                        <label className="sp-label">{t('shop.mobile') || 'Mobile Number'} <span className="text-red">*</span></label>
                        <input type="tel" className="sp-input" defaultValue="8238071640" />
                    </div>
                </div>

                {/* Address */}
                <div className="sp-form-group mt-16">
                    <label className="sp-label">{t('shop.address') || 'Address'}</label>
                    <textarea className="sp-textarea" rows={3}></textarea>
                </div>

                {/* Row 3: GST & PAN */}
                <div className="sp-form-row mt-16">
                    <div className="sp-form-group">
                        <label className="sp-label">{t('shop.gst') || 'GST Number'}</label>
                        <input type="text" className="sp-input" placeholder={t('shop.gst_placeholder') || 'e.g., 27ABCDE1234F1Z5'} />
                    </div>
                    <div className="sp-form-group">
                        <label className="sp-label">{t('shop.pan') || 'PAN Number'}</label>
                        <input type="text" className="sp-input" placeholder={t('shop.pan_placeholder') || 'e.g., ABCDE1234F'} />
                    </div>
                </div>

                {/* Subscription Info Box */}
                <div className="sp-sub-box mt-24">
                    <h4 className="sp-sub-title">{t('shop.sub_info') || 'Subscription Information'}</h4>
                    <div className="sp-sub-grid">
                        <div className="sp-sub-item">
                            <span className="sp-sub-label">{t('shop.sub_status') || 'Status'}</span>
                            <span className="sp-badge-trial">{t('shop.trial') || 'Trial'}</span>
                        </div>
                        <div className="sp-sub-item">
                            <span className="sp-sub-label">{t('shop.sub_plan') || 'Plan'}</span>
                            <span className="sp-sub-val">trial-plan</span>
                        </div>
                        <div className="sp-sub-item">
                            <span className="sp-sub-label">{t('shop.sub_expires') || 'Expires On'}</span>
                            <span className="sp-sub-val fw-600">02 Aug 2026</span>
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="sp-footer-actions mt-32">
                    <Link href="/" className="btn sp-btn-gray">
                        {t('shop.cancel') || 'Cancel'}
                    </Link>
                    <button className="btn btn-green sp-btn-update">
                        {t('shop.update') || 'Update Profile'}
                    </button>
                </div>
            </div>
        </div>
    );
}
