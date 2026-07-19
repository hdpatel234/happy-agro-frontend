"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, Users, Eye, Edit, Trash2 } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import './page.css';

export default function StaffPage() {
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
          <h2 className="staff-title">Staff Management</h2>
          <p className="staff-subtitle">Manage your shop staff members and their permissions</p>
        </div>
        <Link href="/staff/create" className="btn btn-green staff-add-btn">
          <Plus size={16} /> Add Staff Member
        </Link>
      </div>

      {/* Filter Card */}
      <div className="staff-filter-card">
        <div className="staff-form-group">
          <label>Search</label>
          <input
            type="text"
            className="staff-input"
            placeholder="Search by name, email, mobile..."
          />
        </div>
        <div className="staff-form-group">
          <label>User Type</label>
          <select className="staff-input">
            <option>All Types</option>
          </select>
        </div>
        <div className="staff-filter-actions">
          <button className="btn btn-green staff-filter-btn">Filter</button>
          <button className="btn staff-clear-btn">Clear</button>
        </div>
      </div>

      {/* Table Area */}
      <div className="staff-table-container">
        <table className="staff-table">
          <thead>
            <tr>
              <th>STAFF MEMBER</th>
              <th>CONTACT</th>
              <th>ROLES</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
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
                    <span className="staff-role-badge">{staff.role}</span>
                  </td>
                  <td>
                    <span className="badge-active">{staff.status}</span>
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
                    <h4 className="staff-empty-title">No staff members found</h4>
                    <p className="staff-empty-desc">Start by adding your first staff member</p>
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
        title="Delete Staff Member"
        message="Are you sure you want to delete this staff member? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={confirmDelete}
        onCancel={closeDeleteModal}
      />
    </div>
  );
}
