"use client";

import React from 'react';
import Link from 'next/link';
import './page.css';

export default function ManagePermissionsPage() {
  return (
    <div className="mp-container">
      <Link href="/staff/permissions" className="mp-back-link">
        &larr; Back to Staff Permissions
      </Link>

      {/* Top Profile Card */}
      <div className="mp-profile-card">
        <h2 className="mp-profile-name">Test Name</h2>
        <div className="mp-profile-details">
          <div className="mp-profile-field">
            <span className="mp-profile-label">Email</span>
            <span className="mp-profile-value">hdpatel2345@gmail.com</span>
          </div>
          <div className="mp-profile-field">
            <span className="mp-profile-label">Mobile</span>
            <span className="mp-profile-value">4343434343</span>
          </div>
        </div>
      </div>

      {/* Split Layout */}
      <div className="mp-split-layout">
        
        {/* Left Column: Assign Roles */}
        <div className="mp-card mp-roles-card">
          <h3 className="mp-card-title">Assign Roles</h3>
          <div className="mp-roles-list">
            <div className="mp-role-wrapper">
              <input type="checkbox" id="role-shop-owner" className="mp-checkbox" />
              <label htmlFor="role-shop-owner">Shop_owner</label>
            </div>
            <div className="mp-role-wrapper">
              <input type="checkbox" id="role-staff" className="mp-checkbox" defaultChecked />
              <label htmlFor="role-staff">Staff</label>
            </div>
          </div>
          <button className="btn btn-green mp-update-btn">Update Roles</button>
        </div>

        {/* Right Column: Assign Permissions */}
        <div className="mp-card mp-permissions-card">
          <h3 className="mp-card-title">Assign Permissions</h3>
          <div className="mp-permissions-box">
            <h4 className="mp-box-title">Manage</h4>
            <div className="mp-permissions-grid">
              <div className="mp-checkbox-group">
                <input type="checkbox" id="perm-customers" className="mp-checkbox" defaultChecked />
                <label htmlFor="perm-customers">manage customers</label>
              </div>
              <div className="mp-checkbox-group">
                <input type="checkbox" id="perm-expenses" className="mp-checkbox" defaultChecked />
                <label htmlFor="perm-expenses">manage expenses</label>
              </div>
              <div className="mp-checkbox-group">
                <input type="checkbox" id="perm-payments" className="mp-checkbox" defaultChecked />
                <label htmlFor="perm-payments">manage payments</label>
              </div>
              <div className="mp-checkbox-group">
                <input type="checkbox" id="perm-products" className="mp-checkbox" defaultChecked />
                <label htmlFor="perm-products">manage products</label>
              </div>
              <div className="mp-checkbox-group">
                <input type="checkbox" id="perm-purchases" className="mp-checkbox" />
                <label htmlFor="perm-purchases">manage purchases</label>
              </div>
              <div className="mp-checkbox-group">
                <input type="checkbox" id="perm-reports" className="mp-checkbox" />
                <label htmlFor="perm-reports">manage reports</label>
              </div>
              <div className="mp-checkbox-group">
                <input type="checkbox" id="perm-sales" className="mp-checkbox" defaultChecked />
                <label htmlFor="perm-sales">manage sales</label>
              </div>
              <div className="mp-checkbox-group">
                <input type="checkbox" id="perm-stock" className="mp-checkbox" defaultChecked />
                <label htmlFor="perm-stock">manage stock</label>
              </div>
              <div className="mp-checkbox-group">
                <input type="checkbox" id="perm-subscriptions" className="mp-checkbox" />
                <label htmlFor="perm-subscriptions">manage subscriptions</label>
              </div>
              <div className="mp-checkbox-group">
                <input type="checkbox" id="perm-suppliers" className="mp-checkbox" />
                <label htmlFor="perm-suppliers">manage suppliers</label>
              </div>
            </div>
          </div>
          <button className="btn btn-green mp-update-btn">Update Permissions</button>
        </div>

      </div>
    </div>
  );
}
