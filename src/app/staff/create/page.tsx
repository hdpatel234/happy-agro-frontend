"use client";

import React from 'react';
import Link from 'next/link';
import { Eye, Check } from 'lucide-react';
import './page.css';

export default function CreateStaffPage() {
  return (
    <div className="cst-container">
      <div className="cst-card">
        <Link href="/staff" className="cst-back-link">
          &larr; Back to Staff
        </Link>
        
        <h2 className="cst-title">Add New Staff Member</h2>

        {/* Standard Fields */}
        <div className="cst-form-group mt-24">
          <label>Full Name <span className="text-red">*</span></label>
          <input type="text" className="cst-input" />
        </div>

        <div className="cst-form-group">
          <label>Mobile <span className="text-red">*</span></label>
          <input type="text" className="cst-input" />
        </div>

        <div className="cst-form-group">
          <label>Email <span className="text-red">*</span></label>
          <input type="email" className="cst-input" />
        </div>

        <div className="cst-form-group">
          <label>User Type <span className="text-red">*</span></label>
          <select className="cst-input">
            <option>Staff</option>
            <option>Manager</option>
            <option>Admin</option>
          </select>
        </div>

        {/* Password Fields */}
        <div className="cst-form-group">
          <label>Password <span className="text-red">*</span></label>
          <div className="cst-input-wrapper">
            <input type="password" className="cst-input-icon" placeholder="Minimum 8 characters" />
            <Eye size={18} className="cst-icon" />
          </div>
          <span className="cst-helper-text">Minimum 8 characters</span>
        </div>

        <div className="cst-form-group">
          <label>Confirm Password <span className="text-red">*</span></label>
          <div className="cst-input-wrapper">
            <input type="password" className="cst-input-icon" placeholder="Re-enter password" />
            <Eye size={18} className="cst-icon" />
          </div>
        </div>

        {/* Roles Section */}
        <div className="cst-roles-section mt-24">
          <label className="cst-section-label">Roles <span className="text-red">*</span></label>
          <div className="cst-checkbox-group">
            <input type="checkbox" id="role-staff" className="cst-checkbox" />
            <label htmlFor="role-staff">staff</label>
          </div>
        </div>

        {/* Permissions Section */}
        <div className="cst-permissions-section">
          <label className="cst-section-label">Permissions</label>
          
          <div className="cst-permissions-box">
            <h4 className="cst-box-title">Manage</h4>
            <div className="cst-permissions-grid">
              <div className="cst-checkbox-group">
                <input type="checkbox" id="perm-customers" className="cst-checkbox" />
                <label htmlFor="perm-customers">manage customers</label>
              </div>
              <div className="cst-checkbox-group">
                <input type="checkbox" id="perm-expenses" className="cst-checkbox" />
                <label htmlFor="perm-expenses">manage expenses</label>
              </div>
              <div className="cst-checkbox-group">
                <input type="checkbox" id="perm-payments" className="cst-checkbox" />
                <label htmlFor="perm-payments">manage payments</label>
              </div>
              <div className="cst-checkbox-group">
                <input type="checkbox" id="perm-products" className="cst-checkbox" />
                <label htmlFor="perm-products">manage products</label>
              </div>
              <div className="cst-checkbox-group">
                <input type="checkbox" id="perm-purchases" className="cst-checkbox" />
                <label htmlFor="perm-purchases">manage purchases</label>
              </div>
              <div className="cst-checkbox-group">
                <input type="checkbox" id="perm-reports" className="cst-checkbox" />
                <label htmlFor="perm-reports">manage reports</label>
              </div>
              <div className="cst-checkbox-group">
                <input type="checkbox" id="perm-sales" className="cst-checkbox" />
                <label htmlFor="perm-sales">manage sales</label>
              </div>
              <div className="cst-checkbox-group">
                <input type="checkbox" id="perm-stock" className="cst-checkbox" />
                <label htmlFor="perm-stock">manage stock</label>
              </div>
              <div className="cst-checkbox-group">
                <input type="checkbox" id="perm-subscriptions" className="cst-checkbox" />
                <label htmlFor="perm-subscriptions">manage subscriptions</label>
              </div>
              <div className="cst-checkbox-group">
                <input type="checkbox" id="perm-suppliers" className="cst-checkbox" />
                <label htmlFor="perm-suppliers">manage suppliers</label>
              </div>
            </div>
          </div>
          <span className="cst-helper-text">Select specific permissions for this staff member. Permissions can also be assigned via roles above.</span>
        </div>

        {/* Active Checkbox */}
        <div className="cst-checkbox-group mt-16">
          <input type="checkbox" id="active-staff" className="cst-checkbox primary" defaultChecked />
          <label htmlFor="active-staff" className="font-semibold">Active (Staff member can login)</label>
        </div>

        {/* Footer Actions */}
        <div className="cst-footer-actions">
          <button className="btn btn-green cst-action-btn">
            <Check size={18} /> Create Staff Member
          </button>
          <button className="btn cst-btn-gray cst-action-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
}
