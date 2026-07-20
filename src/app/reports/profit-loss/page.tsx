"use client";

import React from 'react';
import { FileText } from 'lucide-react';
import './page.css';

interface MetricCardProps {
  title: string;
  amount: string;
  subtext: string;
  amountColor?: string;
}

function MetricCard({ title, amount, subtext, amountColor = "text-gray-900" }: MetricCardProps) {
  return (
    <div className="pl-metric-card">
      <span className="pl-metric-title">{title}</span>
      <h3 className={`pl-metric-amount ${amountColor}`}>{amount}</h3>
      <span className="pl-metric-subtext">{subtext}</span>
    </div>
  );
}

export default function ProfitLossPage() {
  return (
    <div className="pl-container">
      {/* Header */}
      <div className="pl-header">
        <div className="pl-title-section">
          <h2 className="pl-title">Profit & Loss Report</h2>
          <p className="pl-subtitle">Complete financial analysis of your business</p>
        </div>
        <button className="btn pl-btn-red">
          <FileText size={16} /> Export PDF
        </button>
      </div>

      {/* Filters */}
      <div className="pl-filters-bar">
        <input type="date" className="pl-input" defaultValue="2026-07-01" />
        <input type="date" className="pl-input" defaultValue="2026-07-20" />
        <button className="btn btn-green pl-btn-filter">
          Apply Filter
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="pl-metrics-grid">
        <MetricCard 
          title="TOTAL REVENUE" 
          amount="₹120.00" 
          subtext="Sales + Orders"
        />
        <MetricCard 
          title="GROSS PROFIT" 
          amount="₹20.00" 
          amountColor="text-green-600"
          subtext="Margin: 16.7%"
        />
        <MetricCard 
          title="NET PROFIT" 
          amount="₹-80.00" 
          amountColor="text-red-500"
          subtext="Margin: -66.7%"
        />
        <MetricCard 
          title="PENDING COLLECTION" 
          amount="₹0.00"
          amountColor="text-orange-500"
          subtext="Collected: ₹120"
        />
      </div>

      {/* Profit & Loss Statement */}
      <div className="pl-statement-card">
        <div className="pl-card-header">
          <h4>Profit & Loss Statement</h4>
        </div>
        
        <div className="pl-statement-list">
          {/* Revenue */}
          <div className="pl-statement-row">
            <div className="pl-row-left">
              <span className="pl-row-title">Revenue (Sales)</span>
              <span className="pl-row-sub">Total invoices + orders during the period</span>
            </div>
            <span className="pl-row-amt text-green-600">+ ₹120.00</span>
          </div>

          {/* COGS */}
          <div className="pl-statement-row">
            <div className="pl-row-left">
              <span className="pl-row-title">Cost of Goods Sold (COGS)</span>
              <span className="pl-row-sub">Cost price of products sold (from variant cost)</span>
            </div>
            <span className="pl-row-amt text-red-500">- ₹100.00</span>
          </div>

          {/* Gross Profit Highlight */}
          <div className="pl-statement-row pl-highlight-green">
            <div className="pl-row-left">
              <span className="pl-row-title font-700">Gross Profit</span>
              <span className="pl-row-sub text-gray-600">Revenue - COGS | Margin: 16.7%</span>
            </div>
            <span className="pl-row-amt text-green-600 font-700">₹20.00</span>
          </div>

          {/* Expenses */}
          <div className="pl-statement-row">
            <div className="pl-row-left">
              <span className="pl-row-title">Operating Expenses</span>
              <span className="pl-row-sub">Total expenses recorded during the period</span>
            </div>
            <span className="pl-row-amt text-red-500">- ₹100.00</span>
          </div>

          {/* Net Profit Highlight */}
          <div className="pl-statement-row pl-highlight-red">
            <div className="pl-row-left">
              <span className="pl-row-title font-700">Net Profit / Loss</span>
              <span className="pl-row-sub text-gray-600">Gross Profit - Expenses | Margin: -66.7%</span>
            </div>
            <span className="pl-row-amt text-red-500 font-700">₹-80.00</span>
          </div>
        </div>

        {/* Extra Lines Footer */}
        <div className="pl-statement-footer">
          <div className="pl-footer-row">
            <span>Total Purchases (Inventory Bought)</span>
            <span>₹0.00</span>
          </div>
          <div className="pl-footer-row">
            <span>Total Collection Received</span>
            <span className="text-green-600">₹120.00</span>
          </div>
          <div className="pl-footer-row">
            <span>Pending (Udhar/Credit)</span>
            <span className="text-orange-500">₹0.00</span>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="pl-charts-grid">
        {/* Bar Chart Mockup */}
        <div className="pl-chart-card">
          <div className="pl-card-header">
            <h4>Monthly Sales vs Expenses</h4>
          </div>
          <div className="pl-bar-legend">
            <div className="pl-legend-item"><div className="pl-legend-color bg-green-400"></div><span>Sales</span></div>
            <div className="pl-legend-item"><div className="pl-legend-color bg-red-400"></div><span>Expenses</span></div>
          </div>
          <div className="pl-bar-chart-container">
            <div className="pl-y-axis">
              <span>₹120</span><span>₹100</span><span>₹80</span><span>₹60</span><span>₹40</span><span>₹20</span><span>₹0</span>
            </div>
            <div className="pl-bar-area">
              {/* Grid Lines */}
              <div className="pl-grid-lines">
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div>
              </div>
              <div className="pl-bars">
                <div className="pl-bar bg-green-400" style={{ height: '100%' }}></div>
                <div className="pl-bar bg-red-400" style={{ height: '83%' }}></div>
              </div>
            </div>
            <div className="pl-x-axis">
              <span>2026-07</span>
            </div>
          </div>
        </div>

        {/* Donut Chart Mockup */}
        <div className="pl-chart-card">
          <div className="pl-card-header">
            <h4>Expense Breakdown</h4>
          </div>
          <div className="pl-donut-container">
            <div className="pl-donut">
              <div className="pl-donut-inner"></div>
            </div>
          </div>
          <div className="pl-donut-legend">
            <div className="pl-legend-item">
              <div className="pl-legend-color bg-red-500"></div>
              <span>Certification</span>
            </div>
          </div>
        </div>
      </div>

      {/* Expense by Category */}
      <div className="pl-category-card">
        <div className="pl-card-header">
          <h4>Expense by Category</h4>
        </div>
        <div className="pl-category-list">
          <div className="pl-category-item">
            <div className="pl-category-info">
              <span className="pl-category-name">Certification</span>
              <div className="pl-category-stats">
                <span className="text-red-500 font-600">₹100.00</span>
                <span className="text-gray-500 text-xs">(100.0%)</span>
              </div>
            </div>
            <div className="pl-progress-wrapper">
              <div className="pl-progress-bar bg-red-500" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
