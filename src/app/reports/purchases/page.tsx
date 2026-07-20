"use client";

import React from 'react';
import './page.css';

interface MetricCardProps {
  title: string;
  amount: string;
  amountColor?: string;
  subtext?: string;
}

function MetricCard({ title, amount, amountColor = "text-gray-900", subtext }: MetricCardProps) {
  return (
    <div className="prp-metric-card">
      <span className="prp-metric-title">{title}</span>
      <h3 className={`prp-metric-amount ${amountColor}`}>{amount}</h3>
      {subtext && <span className="prp-metric-subtext">{subtext}</span>}
    </div>
  );
}

export default function PurchaseReportPage() {
  return (
    <div className="prp-container">
      {/* Header */}
      <div className="prp-header">
        <h2 className="prp-title">Purchase Report</h2>
        <p className="prp-subtitle">Track all your purchase transactions</p>
      </div>

      {/* Filters */}
      <div className="prp-filters-bar">
        <input type="date" className="prp-input" defaultValue="2026-07-01" />
        <input type="date" className="prp-input" defaultValue="2026-07-20" />
        <button className="btn btn-green prp-btn-filter">
          Apply Filter
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="prp-metrics-grid">
        <MetricCard 
          title="Gross Purchase" 
          amount="₹0.00" 
        />
        <MetricCard 
          title="Purchase Return" 
          amount="₹0.00" 
          amountColor="text-red-500"
        />
        <MetricCard 
          title="Net Purchase" 
          amount="₹0.00" 
          amountColor="text-green-600"
        />
        
        <MetricCard 
          title="Purchased Qty" 
          amount="0.00" 
        />
        <MetricCard 
          title="Returned Qty" 
          amount="0.00" 
          amountColor="text-red-500"
        />
        <MetricCard 
          title="Net Qty / Bills" 
          amount="0.00"
          subtext="0 bills" 
        />
      </div>

      {/* Transactions Table */}
      <div className="prp-table-card">
        <div className="prp-table-header">
          <h4>Purchase Transactions</h4>
        </div>
        <div className="prp-table-wrapper">
          <table className="prp-table">
            <thead>
              <tr>
                <th>DATE</th>
                <th>INVOICE NO</th>
                <th>SUPPLIER</th>
                <th>AMOUNT</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} className="prp-empty-cell">
                  No purchases found
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
