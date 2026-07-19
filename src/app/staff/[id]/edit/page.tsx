"use client";

import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import './page.css';

export default function EditStaffPage() {
  return (
    <div className="est-container">
      <div className="est-card">
        <Link href="/staff" className="est-back-link">
          &larr; Back to Staff
        </Link>
        
        <h2 className="est-title">Edit Staff Member</h2>

        {/* Standard Fields */}
        <div className="est-form-group mt-24">
          <label>Full Name <span className="text-red">*</span></label>
          <input type="text" className="est-input" defaultValue="Test Name" />
        </div>

        <div className="est-form-group">
          <label>Mobile <span className="text-red">*</span></label>
          <input type="text" className="est-input" defaultValue="4343434343" />
        </div>

        <div className="est-form-group">
          <label>Email <span className="text-red">*</span></label>
          <input type="email" className="est-input" defaultValue="hdpatel2345@gmail.com" />
        </div>

        {/* Password Fields */}
        <div className="est-form-group mt-16">
          <label>New Password</label>
          <input type="password" className="est-input" placeholder="Leave blank to keep current password" />
          <span className="est-helper-text">Leave blank to keep current password</span>
        </div>

        <div className="est-form-group">
          <label>Confirm New Password</label>
          <input type="password" className="est-input" placeholder="Re-enter new password" />
        </div>

        {/* Roles Section */}
        <div className="est-roles-section mt-24">
          <label className="est-section-label">Roles <span className="text-red">*</span></label>
          <div className="est-role-box">
            <div className="est-checkbox-group">
              <input type="checkbox" id="role-staff" className="est-checkbox" defaultChecked />
              <label htmlFor="role-staff">Staff</label>
            </div>
          </div>
        </div>

        {/* Permissions Section */}
        <div className="est-permissions-section">
          <label className="est-section-label">Permissions</label>
          
          <div className="est-permissions-box">
            <h4 className="est-box-title">Manage</h4>
            <div className="est-permissions-grid">
              <div className="est-checkbox-group">
                <input type="checkbox" id="perm-customers" className="est-checkbox" defaultChecked />
                <label htmlFor="perm-customers">manage customers</label>
              </div>
              <div className="est-checkbox-group">
                <input type="checkbox" id="perm-expenses" className="est-checkbox" defaultChecked />
                <label htmlFor="perm-expenses">manage expenses</label>
              </div>
              <div className="est-checkbox-group">
                <input type="checkbox" id="perm-payments" className="est-checkbox" defaultChecked />
                <label htmlFor="perm-payments">manage payments</label>
              </div>
              <div className="est-checkbox-group">
                <input type="checkbox" id="perm-products" className="est-checkbox" defaultChecked />
                <label htmlFor="perm-products">manage products</label>
              </div>
              <div className="est-checkbox-group">
                <input type="checkbox" id="perm-purchases" className="est-checkbox" />
                <label htmlFor="perm-purchases">manage purchases</label>
              </div>
              <div className="est-checkbox-group">
                <input type="checkbox" id="perm-reports" className="est-checkbox" />
                <label htmlFor="perm-reports">manage reports</label>
              </div>
              <div className="est-checkbox-group">
                <input type="checkbox" id="perm-sales" className="est-checkbox" />
                <label htmlFor="perm-sales">manage sales</label>
              </div>
              <div className="est-checkbox-group">
                <input type="checkbox" id="perm-stock" className="est-checkbox" />
                <label htmlFor="perm-stock">manage stock</label>
              </div>
              <div className="est-checkbox-group">
                <input type="checkbox" id="perm-subscriptions" className="est-checkbox" />
                <label htmlFor="perm-subscriptions">manage subscriptions</label>
              </div>
              <div className="est-checkbox-group">
                <input type="checkbox" id="perm-suppliers" className="est-checkbox" />
                <label htmlFor="perm-suppliers">manage suppliers</label>
              </div>
            </div>
          </div>
          <span className="est-helper-text">Select specific permissions for this staff member. Permissions can also be assigned via roles above.</span>
        </div>

        {/* Active Checkbox */}
        <div className="est-checkbox-group mt-16">
          <input type="checkbox" id="active-staff" className="est-checkbox primary" defaultChecked />
          <label htmlFor="active-staff" className="font-semibold">Active (Staff member can login)</label>
        </div>

        {/* Footer Actions */}
        <div className="est-footer-actions">
          <button className="btn btn-green est-action-btn">
            <Check size={18} /> Update Staff Member
          </button>
          <Link href="/staff" className="btn est-btn-gray est-action-btn">Cancel</Link>
        </div>
      </div>
    </div>
  );
}
