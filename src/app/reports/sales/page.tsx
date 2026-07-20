"use client";

import React from 'react';
import { 
  FileText, 
  Filter, 
  CircleDollarSign, 
  Wallet, 
  Clock, 
  Receipt, 
  Calculator, 
  TrendingUp,
  Package
} from 'lucide-react';
import './page.css';

interface MetricCardProps {
  title: string;
  amount: string;
  icon: React.ReactNode;
  iconBg: string;
  trend?: string;
  trendColor?: string;
  amountColor?: string;
}

function MetricCard({ title, amount, icon, iconBg, trend, trendColor = "text-green-500", amountColor = "text-gray-900" }: MetricCardProps) {
  return (
    <div className="srp-metric-card">
      <div className="srp-metric-header">
        <div className={`srp-icon-wrapper ${iconBg}`}>
          {icon}
        </div>
        <span className="srp-metric-title">{title}</span>
      </div>
      <div className="srp-metric-body">
        <h3 className={`srp-metric-amount ${amountColor}`}>{amount}</h3>
        {trend && (
          <span className={`srp-metric-trend ${trendColor}`}>
            ▲ {trend}
          </span>
        )}
      </div>
    </div>
  );
}

export default function SalesReportPage() {
  return (
    <div className="srp-container">
      {/* Header */}
      <div className="srp-header">
        <div className="srp-title-section">
          <h2 className="srp-title">Sales Report</h2>
          <p className="srp-subtitle">Analyze your sales performance with detailed insights</p>
        </div>
        <div className="srp-header-actions">
          <button className="btn srp-btn-red">
            <FileText size={16} /> Export PDF
          </button>
          <button className="btn btn-green srp-btn-green">
            Apply Filter
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="srp-filters-bar">
        <div className="srp-form-group">
          <label>From Date</label>
          <input type="date" className="srp-input" defaultValue="2026-07-01" />
        </div>
        <div className="srp-form-group">
          <label>To Date</label>
          <input type="date" className="srp-input" defaultValue="2026-07-20" />
        </div>
        <div className="srp-form-group">
          <label>Report Type</label>
          <select className="srp-input">
            <option>Monthly</option>
          </select>
        </div>
        <div className="srp-form-group">
          <label>Shop / Outlet</label>
          <select className="srp-input">
            <option>All Shops</option>
          </select>
        </div>
        <div className="srp-form-group">
          <label>Payment Mode</label>
          <select className="srp-input">
            <option>All</option>
          </select>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="srp-metrics-grid">
        <MetricCard 
          title="Total Sales" 
          amount="₹120.00" 
          icon={<CircleDollarSign size={16} className="text-green-600" />} 
          iconBg="bg-green-100" 
          trend="0% vs last month" 
        />
        <MetricCard 
          title="Collection Received" 
          amount="₹120.00" 
          icon={<Wallet size={16} className="text-blue-500" />} 
          iconBg="bg-blue-100" 
          trend="0% vs last month" 
        />
        <MetricCard 
          title="Pending Udhar" 
          amount="₹0.00" 
          amountColor="text-orange-500"
          icon={<Clock size={16} className="text-orange-500" />} 
          iconBg="bg-orange-100" 
        />
        <MetricCard 
          title="Total Bills" 
          amount="1" 
          icon={<Receipt size={16} className="text-purple-500" />} 
          iconBg="bg-purple-100" 
          trend="0% vs last month" 
        />
        <MetricCard 
          title="Avg Bill Value" 
          amount="₹120.00" 
          icon={<Calculator size={16} className="text-blue-500" />} 
          iconBg="bg-blue-100" 
          trend="0% vs last month" 
        />
        <MetricCard 
          title="Profit (Est.)" 
          amount="₹120.00" 
          icon={<TrendingUp size={16} className="text-gray-700" />} 
          iconBg="bg-gray-100" 
        />
      </div>

      {/* Charts Grid */}
      <div className="srp-charts-grid">
        {/* Line Chart Mockup */}
        <div className="srp-chart-card">
          <div className="srp-chart-header">
            <h4>Sales Trend</h4>
            <select className="srp-chart-select"><option>Daily</option></select>
          </div>
          <div className="srp-line-chart-mock">
            {/* CSS Mockup of Line Chart */}
            <div className="srp-y-axis">
              <span>₹150</span><span>₹100</span><span>₹50</span><span>₹0</span>
            </div>
            <div className="srp-chart-area">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                <polyline points="0,50 100,50" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                <polyline points="0,98 100,98" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                <circle cx="5" cy="20" r="2" fill="#22c55e" />
              </svg>
            </div>
            <div className="srp-x-axis">
              <span>19 Jul</span>
            </div>
          </div>
        </div>

        {/* Donut Chart Mockup */}
        <div className="srp-chart-card">
          <div className="srp-chart-header">
            <h4>Payment Mode Breakdown</h4>
          </div>
          <div className="srp-donut-container">
            <div className="srp-donut">
              <div className="srp-donut-inner">
                <span className="srp-donut-val">₹120</span>
                <span className="srp-donut-lbl">Total Sales</span>
              </div>
            </div>
          </div>
          <div className="srp-donut-legend">
            <div className="srp-legend-item">
              <div className="srp-legend-color bg-green-500"></div>
              <span>Cash</span>
            </div>
            <div className="srp-legend-vals">
              <span className="srp-legend-amt">₹120.00</span>
              <span className="srp-legend-pct">100%</span>
            </div>
          </div>
        </div>

        {/* Top Selling Products */}
        <div className="srp-chart-card">
          <div className="srp-chart-header">
            <h4>Top Selling Products</h4>
            <a href="#" className="srp-view-all">View All</a>
          </div>
          <div className="srp-top-product">
            <div className="srp-product-info">
              <div className="srp-product-icon bg-orange-100">
                <Package size={12} className="text-orange-500" />
              </div>
              <span className="srp-product-name">Test</span>
            </div>
            <div className="srp-product-stats">
              <span>1</span>
              <span className="srp-product-amt">₹120.00</span>
            </div>
          </div>
          <div className="srp-progress-wrapper">
            <div className="srp-progress-bar bg-green-500" style={{ width: '100%' }}></div>
            <span className="srp-progress-lbl">100%</span>
          </div>
        </div>
      </div>

      {/* Bottom Layout */}
      <div className="srp-bottom-grid">
        {/* Table */}
        <div className="srp-table-card">
          <div className="srp-chart-header">
            <h4>Daywise Sales Summary</h4>
            <span className="srp-table-info">Showing 1 to 1 of 1 entries</span>
          </div>
          <div className="srp-table-wrapper">
            <table className="srp-table">
              <thead>
                <tr>
                  <th>DATE</th>
                  <th>BILLS</th>
                  <th>SALES (₹)</th>
                  <th>PAID (₹)</th>
                  <th>PENDING (₹)</th>
                  <th>CASH (₹)</th>
                  <th>ONLINE (₹)</th>
                  <th>UDHAR (₹)</th>
                  <th>PROFIT (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-600">19 Jul 2026</td>
                  <td>1</td>
                  <td className="font-600 text-gray-900">120.00</td>
                  <td className="text-gray-600">120.00</td>
                  <td className="text-gray-600">0.00</td>
                  <td className="text-gray-600">120.00</td>
                  <td className="text-gray-600">0.00</td>
                  <td className="text-gray-600">0.00</td>
                  <td className="font-600 text-green-600">18.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Insights */}
        <div className="srp-insights-card">
          <div className="srp-chart-header">
            <h4>Quick Insights</h4>
          </div>
          <div className="srp-insights-grid">
            <div className="srp-insight-box">
              <span className="srp-insight-lbl">Highest Sales Day</span>
              <span className="srp-insight-val font-600">19 Jul 2026</span>
              <span className="srp-insight-sub text-gray-500">₹120.00</span>
            </div>
            <div className="srp-insight-box">
              <span className="srp-insight-lbl">Best Selling Product</span>
              <span className="srp-insight-val font-600">Test</span>
              <span className="srp-insight-sub text-gray-500">₹120.00</span>
            </div>
            <div className="srp-insight-box">
              <span className="srp-insight-lbl">Most Used Payment Mode</span>
              <span className="srp-insight-val font-600">Cash</span>
              <span className="srp-insight-sub text-gray-500">100% of total sales</span>
            </div>
            <div className="srp-insight-box">
              <span className="srp-insight-lbl">Avg Daily Sales</span>
              <span className="srp-insight-val font-600">₹120.00</span>
              <span className="srp-insight-sub text-green-500">▲ 0% vs last month</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
