"use client";

import React from 'react';
import { Bell } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function NotificationsPage() {
    const { t } = useLanguage();

    return (
        <div className="notif-container">
            {/* Header */}
            <div className="notif-header">
                <div className="notif-title-section">
                    <h2 className="notif-title">{t('notif.title') || 'Notifications'}</h2>
                    <p className="notif-subtitle">{t('notif.subtitle') || 'View all your notifications'}</p>
                </div>
                <div className="notif-header-actions">
                    <button className="btn btn-green notif-btn-action">
                        {t('notif.mark_all_read') || 'Mark All as Read'}
                    </button>
                    <button className="btn notif-btn-danger">
                        {t('notif.delete_all') || 'Delete All'}
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="notif-card">
                <div className="notif-empty-state">
                    <Bell size={48} className="notif-empty-icon" />
                    <h3 className="notif-empty-title">{t('notif.empty_title') || 'No notifications'}</h3>
                    <p className="notif-empty-desc">{t('notif.empty_desc') || 'You don\'t have any notifications yet.'}</p>
                </div>
            </div>
        </div>
    );
}
