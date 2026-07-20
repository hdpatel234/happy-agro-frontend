"use client";

import React from 'react';
import { FileText } from 'lucide-react';
import './page.css';

interface MetricCardProps {
  title: string;
  amount: string;
  amountColor?: string;
}

function MetricCard({ title, amount, amountColor = "text-gray-900" }: MetricCardProps) {
  return (
    <div className="sr-metric-card">
      <span className="sr-metric-title">{title}</span>
      <h3 className={`sr-metric-amount ${amountColor}`}>{amount}</h3>
    </div>
  );
}

export default function StockReportPage() {
  return (
    <div className="sr-container">
      {/* Header */}
      <div className="sr-header">
        <div className="sr-title-section">
          <h2 className="sr-title">Stock Report</h2>
          <p className="sr-subtitle">Current inventory status and stock valuation</p>
        </div>
        <button className="btn sr-btn-red">
          <FileText size={16} /> Export PDF
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="sr-metrics-grid">
        <MetricCard 
          title="Total Products" 
          amount="1" 
        />
        <MetricCard 
          title="Total Stock Value" 
          amount="₹9,900.00" 
        />
        <MetricCard 
          title="Low Stock Items" 
          amount="0" 
          amountColor="text-red-500"
        />
      </div>

      {/* Bar Chart Mockup */}
      <div className="sr-chart-card">
        <div className="sr-card-header">
          <h4>Stock by Category</h4>
        </div>
        <div className="sr-bar-chart-container">
          <div className="sr-y-axis">
            <span>₹10,000</span>
            <span>₹9,000</span>
            <span>₹8,000</span>
            <span>₹7,000</span>
            <span>₹6,000</span>
            <span>₹5,000</span>
            <span>₹4,000</span>
            <span>₹3,000</span>
            <span>₹2,000</span>
            <span>₹1,000</span>
            <span>₹0</span>
          </div>
          <div className="sr-bar-area">
            {/* Grid Lines */}
            <div className="sr-grid-lines">
              <div></div><div></div><div></div><div></div><div></div>
              <div></div><div></div><div></div><div></div><div></div><div></div>
            </div>
            {/* The Bars */}
            <div className="sr-bars">
              <div className="sr-bar-wrapper">
                <div className="sr-bar bg-blue-500" style={{ height: '99%' }}></div>
                <span className="sr-x-label">Uncategorized</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="sr-table-card">
        <div className="sr-table-filters">
          <select className="sr-select">
            <option>All Stock</option>
          </select>
          <button className="btn btn-green sr-btn-filter">
            Filter
          </button>
        </div>
        <div className="sr-table-wrapper">
          <table className="sr-table">
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>CATEGORY</th>
                <th>STOCK</th>
                <th>COST PRICE</th>
                <th>STOCK VALUE</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-600">Test</td>
                <td className="text-gray-500">N/A</td>
                <td className="text-gray-700">99 Box</td>
                <td className="text-gray-700">₹100.00</td>
                <td className="font-600 text-gray-900">₹9,900.00</td>
                <td className="text-red-500 font-500">In Stock</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
