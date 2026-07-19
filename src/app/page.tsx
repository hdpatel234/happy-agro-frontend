"use client";

import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import StatCard from '@/components/dashboard/StatCard';
import { 
  Banknote, TrendingUp, FileText, IndianRupee,
  Users, Package, AlertTriangle, Plus, CheckSquare, BookOpen, ShoppingCart, BarChart
} from 'lucide-react';
import './page.css';

const chartData = [
  { name: '13 Jul', sales: 4000, purchases: 2400, expenses: 1400 },
  { name: '14 Jul', sales: 3000, purchases: 1398, expenses: 1200 },
  { name: '15 Jul', sales: 2000, purchases: 3800, expenses: 1200 },
  { name: '16 Jul', sales: 2780, purchases: 3908, expenses: 1000 },
  { name: '17 Jul', sales: 1890, purchases: 4800, expenses: 1100 },
  { name: '18 Jul', sales: 2390, purchases: 3800, expenses: 1500 },
  { name: '19 Jul', sales: 3490, purchases: 4300, expenses: 1100 },
];

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      
      {/* Control Center */}
      <div className="control-center-card">
        <div className="control-header">
          <div className="control-title">
            <h3>Happy Agro Control Center</h3>
            <p>Live sales, purchase, stock, credit, and profit signals for the active shop.</p>
          </div>
          <div className="control-actions">
            <button className="btn btn-primary">New Bill</button>
            <button className="btn btn-outline">Profit Report</button>
            <button className="btn btn-outline">Low Stock</button>
            <button className="btn btn-blue">Child Shops Summary</button>
          </div>
        </div>
        
        <div className="top-stats-grid">
          <div className="top-stat-item">
            <span className="top-stat-label">TODAY</span>
            <span className="top-stat-val">INR 0</span>
            <span className="top-stat-sub">0% vs yesterday</span>
          </div>
          <div className="top-stat-item">
            <span className="top-stat-label">THIS MONTH</span>
            <span className="top-stat-val">INR 0</span>
            <span className="top-stat-sub">0% vs last month</span>
          </div>
          <div className="top-stat-item">
            <span className="top-stat-label">PENDING CREDIT</span>
            <span className="top-stat-val">INR 0</span>
            <span className="top-stat-sub">Khata amount to collect</span>
          </div>
          <div className="top-stat-item">
            <span className="top-stat-label">NET MARGIN</span>
            <span className="top-stat-val">0.0%</span>
            <span className="top-stat-sub">Profit INR 0</span>
          </div>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="main-stats-grid">
        <StatCard 
          title="Today's Sales" 
          value="INR 0.00" 
          subtitle="0% vs yesterday"
          icon={<Banknote size={20} />}
          iconBg="#d1fae5"
          iconColor="#059669"
          progressValue={10}
          progressColor="#059669"
        />
        <StatCard 
          title="Total Sales" 
          value="INR 0.00" 
          subtitle="This Month INR 0.00"
          icon={<TrendingUp size={20} />}
          iconBg="#dbeafe"
          iconColor="#2563eb"
          progressValue={25}
          progressColor="#2563eb"
        />
        <StatCard 
          title="Pending Payments" 
          value="INR 0.00" 
          subtitle="Credit (Udhar) Amount"
          icon={<FileText size={20} />}
          iconBg="#fef3c7"
          iconColor="#d97706"
          progressValue={50}
          progressColor="#d97706"
        />
        <StatCard 
          title="Total Profit" 
          value="INR 0.00" 
          subtitle="Margin: 0.0%"
          icon={<IndianRupee size={20} />}
          iconBg="#f3e8ff"
          iconColor="#9333ea"
          progressValue={15}
          progressColor="#9333ea"
        />
        <StatCard 
          title="Total Customers" 
          value="0" 
          subtitle="Active customer base"
          icon={<Users size={20} />}
          iconBg="#e0e7ff"
          iconColor="#4f46e5"
          progressValue={5}
          progressColor="#4f46e5"
        />
        <StatCard 
          title="Total Products" 
          value="0" 
          subtitle="Stock looks healthy"
          icon={<Package size={20} />}
          iconBg="#ccfbf1"
          iconColor="#0d9488"
          progressValue={80}
          progressColor="#0d9488"
        />
        <StatCard 
          title="This Month Purchases" 
          value="INR 0.00" 
          subtitle="Last month INR 0.00"
          icon={<ShoppingCart size={20} />}
          iconBg="#ffe4e6"
          iconColor="#e11d48"
          progressValue={30}
          progressColor="#e11d48"
        />
        <StatCard 
          title="Inventory Risk" 
          value="0" 
          subtitle="0 Expiring Soon, 0 expired"
          icon={<AlertTriangle size={20} />}
          iconBg="#ffedd5"
          iconColor="#ea580c"
          progressValue={0}
          progressColor="#ea580c"
        />
      </div>

      <div className="dashboard-layout-grid">
        <div className="dashboard-main-col">
          <div className="card">
            <div className="control-header" style={{ marginBottom: '16px' }}>
              <div>
                <h3 className="card-title">7-Day Business Chart</h3>
                <p className="card-subtitle">Sales, purchases, and expenses by day</p>
              </div>
              <div className="flex gap-4 text-xs font-semibold">
                <span className="flex items-center gap-2"><span className="badge" style={{position:'static', backgroundColor:'#10b981'}}></span> Sales</span>
                <span className="flex items-center gap-2"><span className="badge" style={{position:'static', backgroundColor:'#3b82f6'}}></span> Purchases</span>
                <span className="flex items-center gap-2"><span className="badge" style={{position:'static', backgroundColor:'#ef4444'}}></span> Expenses</span>
              </div>
            </div>
            <div style={{ width: '100%', height: 300, marginTop: '20px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart
                  data={chartData}
                  margin={{ top: 5, right: 0, left: -20, bottom: 5 }}
                  barSize={16}
                  barGap={4}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e9f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6e7987' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6e7987' }} />
                  <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: '1px solid #e5e9f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                  <Bar dataKey="sales" fill="#10b981" radius={[4, 4, 0, 0]} name="Sales" />
                  <Bar dataKey="purchases" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Purchases" />
                  <Bar dataKey="expenses" fill="#ef4444" radius={[4, 4, 0, 0]} name="Expenses" />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card">
            <div className="control-header">
              <div>
                <h3 className="card-title">Recent Invoices</h3>
                <p className="card-subtitle">Latest customer bills and payment status</p>
              </div>
              <button className="btn btn-outline" style={{ border: 'none', color: 'var(--accent-green)'}}>View Report</button>
            </div>
            <div className="empty-state">No recent invoices</div>
          </div>
        </div>

        <div className="dashboard-side-col">
          <div className="card">
            <h3 className="card-title" style={{marginBottom: '16px'}}>Quick Actions</h3>
            <p className="card-subtitle">Fast paths for daily shop work</p>
            <div className="quick-actions-grid">
              <button className="action-btn">
                <div className="action-icon" style={{backgroundColor: '#d1fae5', color: '#059669'}}><Banknote size={16} /></div>
                New Bill
              </button>
              <button className="action-btn">
                <div className="action-icon" style={{backgroundColor: '#e0e7ff', color: '#4f46e5'}}><Plus size={16} /></div>
                Add Product
              </button>
              <button className="action-btn">
                <div className="action-icon" style={{backgroundColor: '#ccfbf1', color: '#0d9488'}}><CheckSquare size={16} /></div>
                Check Stock
              </button>
              <button className="action-btn">
                <div className="action-icon" style={{backgroundColor: '#ffedd5', color: '#ea580c'}}><BookOpen size={16} /></div>
                Khata
              </button>
              <button className="action-btn">
                <div className="action-icon" style={{backgroundColor: '#ffe4e6', color: '#e11d48'}}><ShoppingCart size={16} /></div>
                Purchases
              </button>
              <button className="action-btn">
                <div className="action-icon" style={{backgroundColor: '#e0e7ff', color: '#4f46e5'}}><BarChart size={16} /></div>
                Reports
              </button>
            </div>
          </div>

          <div className="card">
            <div className="control-header">
              <div>
                <h3 className="card-title">Top Selling Products</h3>
                <p className="card-subtitle">Units sold and revenue contribution</p>
              </div>
            </div>
            <div className="empty-state">No sales data available</div>
          </div>
        </div>
      </div>


      {/* Additional Dashboard Sections */}
      <div className="card mt-6">
        <div className="control-header">
          <div>
            <h3 className="card-title">Variant Stock Analytics</h3>
            <p className="card-subtitle">Purchase, sale, and available stock by product variant</p>
          </div>
          <button className="btn btn-outline" style={{ border: 'none', color: 'var(--accent-green)', fontWeight: 'bold' }}>Check Stock</button>
        </div>
        
        <div className="variant-stats-container">
          <div className="variant-stat-box">
            <span className="variant-stat-label">PURCHASE STOCK</span>
            <span className="variant-stat-val">0.00</span>
          </div>
          <div className="variant-stat-box">
            <span className="variant-stat-label">SALE STOCK</span>
            <span className="variant-stat-val">1.00</span>
          </div>
          <div className="variant-stat-box">
            <span className="variant-stat-label">AVAILABLE STOCK</span>
            <span className="variant-stat-val">99.00</span>
          </div>
        </div>

        <div className="variant-table">
          <div className="variant-table-header">
            <div className="vt-col-1">PRODUCT VARIANT</div>
            <div className="vt-col-2">PURCHASE STOCK</div>
            <div className="vt-col-3">SALE STOCK</div>
            <div className="vt-col-4">AVAILABLE STOCK</div>
          </div>
          <div className="variant-table-row">
            <div className="vt-col-1">
              <strong>Test</strong>
              <span className="vt-sub">5kg | Box</span>
            </div>
            <div className="vt-col-2 font-bold">0.00</div>
            <div className="vt-col-3 font-bold">1.00</div>
            <div className="vt-col-4 font-bold" style={{ color: 'var(--text-primary)'}}>99.00</div>
          </div>
        </div>
      </div>

      <div className="card mt-6">
        <div className="control-header">
          <div>
            <h3 className="card-title">Daily Sales (Last 7 Days)</h3>
            <p className="card-subtitle">Simple daily sales progress bars</p>
          </div>
          <button className="btn btn-outline" style={{ border: 'none', color: 'var(--accent-green)', fontWeight: 'bold' }}>Open Sales</button>
        </div>
        
        <div className="daily-sales-bar">
          <div className="ds-header">
            <span className="ds-date font-bold">Jul 19, 2026</span>
            <span className="ds-amount" style={{ color: 'var(--text-secondary)'}}>INR 120.00</span>
          </div>
          <div className="stat-progress" style={{ height: '6px' }}>
            <div className="stat-progress-bar" style={{ width: '100%', backgroundColor: 'var(--accent-green)' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
