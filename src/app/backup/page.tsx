"use client";

import React from 'react';
import './page.css';

const modules = [
  "Khata", "Dashboard",
  "POS Billing", "Categories",
  "Brands", "Products",
  "Inventory Stock", "Orders",
  "Purchases", "Customers",
  "Suppliers", "Expenses",
  "Reports", "Payment Reminders",
  "Settings", "Weather",
  "Backup", "Staff",
  "Staff Permissions", "Subscription"
];

export default function BackupPage() {
  return (
    <div className="bkp-container">
      {/* Title section above the card is empty in screenshot, just card */}
      <div className="bkp-card">
        <div className="bkp-card-header">
          <h2 className="bkp-title">Create Backup</h2>
          <p className="bkp-subtitle">Select modules and click Backup Now to download PDF backup.</p>
        </div>

        <div className="bkp-select-all-row">
          <label className="bkp-checkbox-label font-600">
            <input type="checkbox" className="bkp-checkbox" />
            Select All
          </label>
        </div>

        <div className="bkp-divider"></div>

        <div className="bkp-modules-grid">
          {modules.map((moduleName, index) => (
            <label key={index} className="bkp-module-box">
              <input type="checkbox" className="bkp-checkbox" />
              <span>{moduleName}</span>
            </label>
          ))}
        </div>

        <div className="bkp-card-footer">
          <button className="btn btn-green bkp-btn-now">
            Backup Now
          </button>
        </div>
      </div>
    </div>
  );
}
