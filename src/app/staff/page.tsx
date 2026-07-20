"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, Users, Eye, Edit, Trash2 } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function StaffPage() {
  const { t } = useLanguage();
  // Static state for demonstration purposes based on the screenshot
  const [showSuccess, setShowSuccess] = useState(true);
  const [staffList, setStaffList] = useState([
    {
      id: 1,
      name: 'Test Name',
      email: 'hdpatel2345@gmail.com',
      contact: '4343434343',
      role: 'staff',
      status: 'Active'
    }
  ]);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [staffToDelete, setStaffToDelete] = useState<number | null>(null);

  const openDeleteModal = (id: number) => {
    setStaffToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setStaffToDelete(null);
  };

  const confirmDelete = () => {
    if (staffToDelete !== null) {
      setStaffList(staffList.filter(s => s.id !== staffToDelete));
    }
    closeDeleteModal();
  };

  return (
    <div className="staff-container">
      {/* Success Alert */}
      {/* {showSuccess && (
        <div className="staff-success-alert">
          Staff member created successfully!
        </div>
      )} */}

      {/* Header */}
      <div className="staff-header">
        <div className="staff-title-section">
          <h2 className="staff-title">{t('staff.title')}</h2>
          <p className="staff-subtitle">{t('staff.subtitle')}</p>
        </div>
        <Link href="/staff/create" className="btn btn-green staff-add-btn">
          <Plus size={16} /> {t('staff.add_staff')}
        </Link>
      </div>

      {/* Filter Card */}
      <div className="staff-filter-card">
        <div className="staff-form-group">
          <label>Search</label>
          <input
            type="text"
            className="staff-input"
            placeholder={t('staff.search_placeholder')}
          />
        </div>
        <div className="staff-form-group">
          <label>{t('staff.user_type')}</label>
          <select className="staff-input">
            <option>{t('staff.all_types')}</option>
          </select>
        </div>
        <div className="staff-filter-actions">
          <button className="btn btn-green staff-filter-btn">{t('staff.filter')}</button>
          <button className="btn staff-clear-btn">{t('staff.clear')}</button>
        </div>
      </div>

      {/* Table Area */}
      <div className="staff-table-container">
        <table className="staff-table">
          <thead>
            <tr>
              <th>{t('staff.table.member')}</th>
              <th>{t('staff.table.contact')}</th>
              <th>{t('staff.table.roles')}</th>
              <th>{t('staff.table.status')}</th>
              <th>{t('staff.table.actions')}</th>
            </tr>
          </thead>
          <tbody>
            {staffList.length > 0 ? (
              staffList.map(staff => (
                <tr key={staff.id}>
                  <td>
                    <div className="staff-member-info">
                      <div className="staff-avatar">{staff.name.charAt(0)}</div>
                      <div className="staff-details">
                        <span className="staff-name">{staff.name}</span>
                        <span className="staff-email">{staff.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="text-muted">{staff.contact}</td>
                  <td>
                    <span className="staff-role-badge">{staff.role === 'staff' ? t('staff.role_staff') : staff.role === 'manager' ? t('staff.role_manager') : staff.role === 'admin' ? t('staff.role_admin') : staff.role}</span>
                  </td>
                  <td>
                    <span className="badge-active">{staff.status === 'Active' ? t('staff.active') : staff.status}</span>
                  </td>
                  <td>
                    <div className="staff-action-icons">
                      <Link href={`/staff/${staff.id}`} className="icon-btn text-blue" title="View"><Eye size={16} /></Link>
                      <Link href={`/staff/${staff.id}/edit`} className="icon-btn text-green" title="Edit"><Edit size={16} /></Link>
                      <button className="icon-btn text-red" title="Delete" onClick={() => openDeleteModal(staff.id)}><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="staff-empty-cell">
                  <div className="staff-empty-state">
                    <Users size={48} className="staff-empty-icon" />
                    <h4 className="staff-empty-title">{t('staff.no_staff')}</h4>
                    <p className="staff-empty-desc">{t('staff.start_adding')}</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Modal 
        isOpen={isDeleteModalOpen}
        type="error"
        title={t('staff.delete_title')}
        message={t('staff.delete_message')}
        confirmText={t('staff.delete_confirm')}
        cancelText={t('staff.cancel')}
        onConfirm={confirmDelete}
        onCancel={closeDeleteModal}
      />
    </div>
  );
}
