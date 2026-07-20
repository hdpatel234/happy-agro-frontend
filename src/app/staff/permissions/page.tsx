"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function StaffPermissionsPage() {
  const { t } = useLanguage();
  const [permissionsList] = useState([
    {
      id: 1,
      name: 'Test Name',
      email: 'hdpatel2345@gmail.com',
      role: 'Staff',
      permissionsCount: 4
    }
  ]);

  return (
    <div className="spm-container">
      {/* Header */}
      <div className="spm-header">
        <div className="spm-title-section">
          <h2 className="spm-title">{t('staff_perm.title')}</h2>
          <p className="spm-subtitle">{t('staff_perm.subtitle')}</p>
        </div>
        <Link href="/staff" className="spm-back-link">
          &larr; {t('staff.back_to_staff')}
        </Link>
      </div>

      {/* Table Area */}
      <div className="spm-table-container">
        <table className="spm-table">
          <thead>
            <tr>
              <th>{t('staff_perm.table.member')}</th>
              <th>{t('staff_perm.table.email')}</th>
              <th>{t('staff_perm.table.roles')}</th>
              <th>{t('staff_perm.table.permissions')}</th>
              <th>{t('staff_perm.table.actions')}</th>
            </tr>
          </thead>
          <tbody>
            {permissionsList.map(item => (
              <tr key={item.id}>
                <td>
                  <span className="spm-name">{item.name}</span>
                </td>
                <td className="spm-email-cell">{item.email}</td>
                <td>
                  <span className="spm-role-badge">{item.role === 'Staff' ? t('staff.role_staff') : item.role}</span>
                </td>
                <td className="spm-perm-count">{item.permissionsCount} {t('staff_perm.permissions_count')}</td>
                <td>
                  <Link href={`/staff/${item.id}/edit`} className="spm-action-link">
                    {t('staff_perm.manage_permissions')}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
