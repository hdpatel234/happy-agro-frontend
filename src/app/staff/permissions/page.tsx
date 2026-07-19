"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import './page.css';

export default function StaffPermissionsPage() {
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
          <h2 className="spm-title">Staff Permissions Management</h2>
          <p className="spm-subtitle">Manage roles and permissions for staff members</p>
        </div>
        <Link href="/staff" className="spm-back-link">
          &larr; Back to Staff
        </Link>
      </div>

      {/* Table Area */}
      <div className="spm-table-container">
        <table className="spm-table">
          <thead>
            <tr>
              <th>STAFF MEMBER</th>
              <th>EMAIL</th>
              <th>ROLES</th>
              <th>PERMISSIONS</th>
              <th>ACTIONS</th>
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
                  <span className="spm-role-badge">{item.role}</span>
                </td>
                <td className="spm-perm-count">{item.permissionsCount} permission(s)</td>
                <td>
                  <Link href={`/staff/${item.id}/edit`} className="spm-action-link">
                    Manage Permissions
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
