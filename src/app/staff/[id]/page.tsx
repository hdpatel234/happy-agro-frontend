"use client";

import React from 'react';
import Link from 'next/link';
import './page.css';

export default function StaffDetailsPage() {
  return (
    <div className="sd-container">
      <Link href="/staff" className="sd-back-link">
        &larr; Back to Staff
      </Link>

      <div className="sd-card">
        {/* Header Banner */}
        <div className="sd-header-banner">
          <div className="sd-avatar"></div>
          <div className="sd-header-info">
            <h2 className="sd-name">Test Name</h2>
            <p className="sd-email">hdpatel2345@gmail.com</p>
            <span className="sd-badge-active">Active</span>
          </div>
        </div>

        {/* Details Content */}
        <div className="sd-content">
          {/* Left Column */}
          <div className="sd-column">
            <h3 className="sd-section-title">Personal Information</h3>
            
            <div className="sd-info-group">
              <span className="sd-label">Full Name</span>
              <span className="sd-value">Test Name</span>
            </div>
            
            <div className="sd-info-group">
              <span className="sd-label">Email Address</span>
              <span className="sd-value">hdpatel2345@gmail.com</span>
            </div>

            <div className="sd-info-group">
              <span className="sd-label">Mobile Number</span>
              <span className="sd-value">4343434343</span>
            </div>

            <div className="sd-info-group">
              <span className="sd-label">User Type</span>
              <span className="sd-role-badge">Staff</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="sd-column">
            <h3 className="sd-section-title">Roles & Permissions</h3>
            <div className="sd-info-group">
              <span className="sd-role-badge">Staff</span>
            </div>

            <h3 className="sd-section-title mt-32">Account Information</h3>
            <div className="sd-info-group">
              <span className="sd-label">Member Since</span>
              <span className="sd-value">Jul 20, 2026</span>
            </div>
            
            <div className="sd-info-group">
              <span className="sd-label">Last Updated</span>
              <span className="sd-value">Jul 20, 2026 12:13 AM</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sd-footer">
          <Link href="/staff/1/edit" className="btn btn-green sd-action-btn">Edit Staff Member</Link>
          <Link href="/staff" className="btn sd-btn-gray sd-action-btn">Back to List</Link>
        </div>
      </div>
    </div>
  );
}
