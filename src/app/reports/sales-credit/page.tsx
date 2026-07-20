"use client";

import React from 'react';
import './page.css';

interface MetricCardProps {
  title: string;
  amount: string;
  subtext: string;
  amountColor?: string;
}

function MetricCard({ title, amount, subtext, amountColor = "text-gray-900" }: MetricCardProps) {
  return (
    <div className="scr-metric-card">
      <span className="scr-metric-title">{title}</span>
      <h3 className={`scr-metric-amount ${amountColor}`}>{amount}</h3>
      <span className="scr-metric-subtext">{subtext}</span>
    </div>
  );
}

export default function SalesCreditReportPage() {
  return (
    <div className="scr-container">
      {/* Title Card */}
      <div className="scr-title-card">
        <div className="scr-title-left">
          <h2 className="scr-title">Sales Credit Report</h2>
          <p className="scr-subtitle">Customer-wise pending receivables from credit invoices and non-converted orders.</p>
        </div>
        <div className="scr-title-actions">
          <button className="btn scr-btn-red">
            Credit Control
          </button>
          <button className="btn scr-btn-white">
            Customer List
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="scr-metrics-grid">
        <MetricCard 
          title="CUSTOMERS" 
          amount="0" 
          subtext="Customers with pending sales credit"
        />
        <MetricCard 
          title="TOTAL ORDERS" 
          amount="0" 
          subtext="Invoices plus open orders"
        />
        <MetricCard 
          title="TOTAL AMOUNT" 
          amount="INR 0.00" 
          subtext="Gross credit sales value"
        />
        <MetricCard 
          title="PAID AMOUNT" 
          amount="INR 0.00" 
          amountColor="text-green-600"
          subtext="Collected against credit sales"
        />
        <MetricCard 
          title="PENDING AMOUNT" 
          amount="INR 0.00" 
          amountColor="text-red-500"
          subtext="Receivable balance"
        />
      </div>

      {/* Table Section */}
      <div className="scr-card">
        <div className="scr-table-header-flex">
          <div className="scr-card-header">
            <h4>Customer Sales Credit</h4>
            <p className="scr-card-sub">Total order count, amount, paid, and pending by customer</p>
          </div>
          <span className="scr-records-count">0 records</span>
        </div>
        
        <div className="scr-table-wrapper">
          <table className="scr-table">
            <thead>
              <tr>
                <th>CUSTOMER</th>
                <th>CONTACT</th>
                <th>ORDER COUNT</th>
                <th>INVOICE COUNT</th>
                <th>TOTAL AMOUNT</th>
                <th>PAID AMOUNT</th>
                <th>PENDING AMOUNT</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={8} className="scr-empty-cell">
                  No pending sales credit found.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
