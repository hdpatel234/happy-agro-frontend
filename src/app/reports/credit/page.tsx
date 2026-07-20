"use client";

import React from 'react';
import './page.css';

interface MetricCardProps {
  title: string;
  amount: string;
  subtext: string;
  barColor: string;
  barWidth: string;
}

function MetricCard({ title, amount, subtext, barColor, barWidth }: MetricCardProps) {
  return (
    <div className="cr-metric-card">
      <span className="cr-metric-title">{title}</span>
      <h3 className="cr-metric-amount">{amount}</h3>
      <span className="cr-metric-subtext">{subtext}</span>
      <div className="cr-metric-bar-bg">
        <div className={`cr-metric-bar ${barColor}`} style={{ width: barWidth }}></div>
      </div>
    </div>
  );
}

export default function CreditReportPage() {
  return (
    <div className="cr-container">
      {/* Title Card */}
      <div className="cr-title-card">
        <div className="cr-title-left">
          <h2 className="cr-title">Credit Control Report</h2>
          <p className="cr-subtitle">Outstanding customer udhar, credit limits, last credit activity, and recovery ageing.</p>
        </div>
        <div className="cr-title-actions">
          <button className="btn btn-green cr-btn-reminders">
            Payment Reminders
          </button>
          <button className="btn cr-btn-white">
            Open Khata
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="cr-metrics-grid">
        <MetricCard 
          title="TOTAL OUTSTANDING" 
          amount="INR 0.00" 
          subtext="Amount to collect from customers"
          barColor="bg-red-600"
          barWidth="100%"
        />
        <MetricCard 
          title="CUSTOMERS WITH CREDIT" 
          amount="0" 
          subtext="Customers currently carrying balance"
          barColor="bg-blue-600"
          barWidth="10%"
        />
        <MetricCard 
          title="AVERAGE BALANCE" 
          amount="INR 0.00" 
          subtext="Average outstanding per customer"
          barColor="bg-gray-200"
          barWidth="100%"
        />
        <MetricCard 
          title="LIMIT WATCH" 
          amount="0" 
          subtext="Over limit customers, INR 0.00 available credit"
          barColor="bg-gray-200"
          barWidth="100%"
        />
      </div>

      {/* Middle Grid */}
      <div className="cr-middle-grid">
        {/* Age Analysis */}
        <div className="cr-card">
          <div className="cr-card-header">
            <h4>Age Analysis</h4>
            <p className="cr-card-sub">Outstanding balance grouped by days since last credit entry</p>
          </div>
          <div className="cr-age-list">
            <div className="cr-age-row">
              <span className="cr-age-label font-600 text-gray-900">0-30 days</span>
              <div className="cr-age-bar-wrapper">
                <div className="cr-age-bar bg-gray-100" style={{ width: '100%' }}></div>
              </div>
              <span className="cr-age-amt font-700 text-gray-900">INR 0.00</span>
            </div>
            <div className="cr-age-row">
              <span className="cr-age-label font-600 text-gray-900">31-60 days</span>
              <div className="cr-age-bar-wrapper">
                <div className="cr-age-bar bg-gray-100" style={{ width: '100%' }}></div>
              </div>
              <span className="cr-age-amt font-700 text-gray-900">INR 0.00</span>
            </div>
            <div className="cr-age-row">
              <span className="cr-age-label font-600 text-gray-900">61-90 days</span>
              <div className="cr-age-bar-wrapper">
                <div className="cr-age-bar bg-gray-100" style={{ width: '100%' }}></div>
              </div>
              <span className="cr-age-amt font-700 text-gray-900">INR 0.00</span>
            </div>
            <div className="cr-age-row">
              <span className="cr-age-label font-600 text-gray-900">90+ days</span>
              <div className="cr-age-bar-wrapper">
                <div className="cr-age-bar bg-gray-100" style={{ width: '100%' }}></div>
              </div>
              <span className="cr-age-amt font-700 text-gray-900">INR 0.00</span>
            </div>
          </div>
        </div>

        {/* Priority Follow-Up */}
        <div className="cr-card">
          <div className="cr-card-header">
            <h4>Priority Follow-Up</h4>
            <p className="cr-card-sub">Largest outstanding balances</p>
          </div>
          <div className="cr-empty-state">
            <span>No outstanding credit to follow up.</span>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="cr-card mt-0">
        <div className="cr-table-header-flex">
          <div className="cr-card-header">
            <h4>Customers with Outstanding Balance</h4>
            <p className="cr-card-sub">Customer wise credit, payments, limit status, and ledger access</p>
          </div>
          <span className="cr-records-count">0 records</span>
        </div>
        
        <div className="cr-table-wrapper">
          <table className="cr-table">
            <thead>
              <tr>
                <th>CUSTOMER</th>
                <th>CONTACT</th>
                <th>OUTSTANDING</th>
                <th>CREDIT LIMIT</th>
                <th>LIMIT USAGE</th>
                <th>LAST CREDIT</th>
                <th>PAYMENTS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={8} className="cr-empty-cell">
                  No outstanding credits found.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
