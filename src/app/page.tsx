"use client";

import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import StatCard from '@/components/dashboard/StatCard';
import { 
  Banknote, TrendingUp, FileText, IndianRupee,
  Users, Package, AlertTriangle, Plus, CheckSquare, BookOpen, ShoppingCart, BarChart
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
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
  const { t } = useLanguage();

  return (
    <div className="dashboard-container">
      
      {/* Control Center */}
      <div className="control-center-card">
        <div className="control-header">
          <div className="control-title">
            <h3>{t('dashboard.control_center')}</h3>
            <p>{t('dashboard.control_center_desc')}</p>
          </div>
          <div className="control-actions">
            <button className="btn btn-primary">{t('dashboard.new_bill')}</button>
            <button className="btn btn-outline">{t('dashboard.profit_report')}</button>
            <button className="btn btn-outline">{t('dashboard.low_stock')}</button>
            <button className="btn btn-blue">{t('dashboard.child_shops_summary')}</button>
          </div>
        </div>
        
        <div className="top-stats-grid">
          <div className="top-stat-item">
            <span className="top-stat-label">{t('dashboard.today')}</span>
            <span className="top-stat-val">INR 0</span>
            <span className="top-stat-sub">{t('dashboard.vs_yesterday')}</span>
          </div>
          <div className="top-stat-item">
            <span className="top-stat-label">{t('dashboard.this_month')}</span>
            <span className="top-stat-val">INR 0</span>
            <span className="top-stat-sub">0% vs last month</span>
          </div>
          <div className="top-stat-item">
            <span className="top-stat-label">{t('dashboard.pending_credit')}</span>
            <span className="top-stat-val">INR 0</span>
            <span className="top-stat-sub">{t('dashboard.khata_amount_to_collect')}</span>
          </div>
          <div className="top-stat-item">
            <span className="top-stat-label">{t('dashboard.net_margin')}</span>
            <span className="top-stat-val">0.0%</span>
            <span className="top-stat-sub">{t('dashboard.profit_inr')}</span>
          </div>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="main-stats-grid">
        <StatCard 
          title={t('dashboard.todays_sales')} 
          value="INR 0.00" 
          subtitle={t('dashboard.vs_yesterday')}
          icon={<Banknote size={20} />}
          iconBg="#d1fae5"
          iconColor="#059669"
          progressValue={10}
          progressColor="#059669"
        />
        <StatCard 
          title={t('dashboard.total_sales')} 
          value="INR 0.00" 
          subtitle={t('dashboard.this_month_inr')}
          icon={<TrendingUp size={20} />}
          iconBg="#dbeafe"
          iconColor="#2563eb"
          progressValue={25}
          progressColor="#2563eb"
        />
        <StatCard 
          title={t('dashboard.pending_payments')} 
          value="INR 0.00" 
          subtitle={t('dashboard.credit_amount')}
          icon={<FileText size={20} />}
          iconBg="#fef3c7"
          iconColor="#d97706"
          progressValue={50}
          progressColor="#d97706"
        />
        <StatCard 
          title={t('dashboard.total_profit')} 
          value="INR 0.00" 
          subtitle={t('dashboard.margin')}
          icon={<IndianRupee size={20} />}
          iconBg="#f3e8ff"
          iconColor="#9333ea"
          progressValue={15}
          progressColor="#9333ea"
        />
        <StatCard 
          title={t('dashboard.total_customers')} 
          value="0" 
          subtitle={t('dashboard.active_customer_base')}
          icon={<Users size={20} />}
          iconBg="#e0e7ff"
          iconColor="#4f46e5"
          progressValue={5}
          progressColor="#4f46e5"
        />
        <StatCard 
          title={t('dashboard.total_products')} 
          value="0" 
          subtitle={t('dashboard.stock_looks_healthy')}
          icon={<Package size={20} />}
          iconBg="#ccfbf1"
          iconColor="#0d9488"
          progressValue={80}
          progressColor="#0d9488"
        />
        <StatCard 
          title={t('dashboard.this_month_purchases')} 
          value="INR 0.00" 
          subtitle={t('dashboard.last_month_inr')}
          icon={<ShoppingCart size={20} />}
          iconBg="#ffe4e6"
          iconColor="#e11d48"
          progressValue={30}
          progressColor="#e11d48"
        />
        <StatCard 
          title={t('dashboard.inventory_risk')} 
          value="0" 
          subtitle={t('dashboard.expiring_soon')}
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
                <h3 className="card-title">{t('dashboard.7day_chart')}</h3>
                <p className="card-subtitle">{t('dashboard.7day_chart_desc')}</p>
              </div>
              <div className="flex gap-4 text-xs font-semibold">
                <span className="flex items-center gap-2"><span className="badge" style={{position:'static', backgroundColor:'#10b981'}}></span> {t('dashboard.sales')}</span>
                <span className="flex items-center gap-2"><span className="badge" style={{position:'static', backgroundColor:'#3b82f6'}}></span> {t('sidebar.purchases')}</span>
                <span className="flex items-center gap-2"><span className="badge" style={{position:'static', backgroundColor:'#ef4444'}}></span> {t('dashboard.expenses')}</span>
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
                <h3 className="card-title">{t('dashboard.recent_invoices')}</h3>
                <p className="card-subtitle">{t('dashboard.recent_invoices_desc')}</p>
              </div>
              <button className="btn btn-outline" style={{ border: 'none', color: 'var(--accent-green)'}}>{t('dashboard.view_report')}</button>
            </div>
            <div className="empty-state">{t('dashboard.no_recent_invoices')}</div>
          </div>
        </div>

        <div className="dashboard-side-col">
          <div className="card">
            <h3 className="card-title" style={{marginBottom: '16px'}}>{t('dashboard.quick_actions')}</h3>
            <p className="card-subtitle">{t('dashboard.quick_actions_desc')}</p>
            <div className="quick-actions-grid">
              <button className="action-btn">
                <div className="action-icon" style={{backgroundColor: '#d1fae5', color: '#059669'}}><Banknote size={16} /></div>
                {t('dashboard.new_bill')}
              </button>
              <button className="action-btn">
                <div className="action-icon" style={{backgroundColor: '#e0e7ff', color: '#4f46e5'}}><Plus size={16} /></div>
                {t('dashboard.add_product')}
              </button>
              <button className="action-btn">
                <div className="action-icon" style={{backgroundColor: '#ccfbf1', color: '#0d9488'}}><CheckSquare size={16} /></div>
                {t('dashboard.check_stock')}
              </button>
              <button className="action-btn">
                <div className="action-icon" style={{backgroundColor: '#ffedd5', color: '#ea580c'}}><BookOpen size={16} /></div>
                {t('dashboard.khata')}
              </button>
              <button className="action-btn">
                <div className="action-icon" style={{backgroundColor: '#ffe4e6', color: '#e11d48'}}><ShoppingCart size={16} /></div>
                {t('sidebar.purchases')}
              </button>
              <button className="action-btn">
                <div className="action-icon" style={{backgroundColor: '#e0e7ff', color: '#4f46e5'}}><BarChart size={16} /></div>
                {t('sidebar.reports')}
              </button>
            </div>
          </div>

          <div className="card">
            <div className="control-header">
              <div>
                <h3 className="card-title">{t('dashboard.top_selling_products')}</h3>
                <p className="card-subtitle">{t('dashboard.top_selling_desc')}</p>
              </div>
            </div>
            <div className="empty-state">{t('dashboard.no_sales_data')}</div>
          </div>
        </div>
      </div>


      {/* Additional Dashboard Sections */}
      <div className="card mt-6">
        <div className="control-header">
          <div>
            <h3 className="card-title">{t('dashboard.variant_stock_analytics')}</h3>
            <p className="card-subtitle">{t('dashboard.variant_stock_desc')}</p>
          </div>
          <button className="btn btn-outline" style={{ border: 'none', color: 'var(--accent-green)', fontWeight: 'bold' }}>{t('dashboard.check_stock')}</button>
        </div>
        
        <div className="variant-stats-container">
          <div className="variant-stat-box">
            <span className="variant-stat-label">{t('dashboard.purchase_stock')}</span>
            <span className="variant-stat-val">0.00</span>
          </div>
          <div className="variant-stat-box">
            <span className="variant-stat-label">{t('dashboard.sale_stock')}</span>
            <span className="variant-stat-val">1.00</span>
          </div>
          <div className="variant-stat-box">
            <span className="variant-stat-label">{t('dashboard.available_stock')}</span>
            <span className="variant-stat-val">99.00</span>
          </div>
        </div>

        <div className="variant-table">
          <div className="variant-table-header">
            <div className="vt-col-1">{t('dashboard.product_variant')}</div>
            <div className="vt-col-2">{t('dashboard.purchase_stock')}</div>
            <div className="vt-col-3">{t('dashboard.sale_stock')}</div>
            <div className="vt-col-4">{t('dashboard.available_stock')}</div>
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
            <h3 className="card-title">{t('dashboard.daily_sales')}</h3>
            <p className="card-subtitle">{t('dashboard.daily_sales_desc')}</p>
          </div>
          <button className="btn btn-outline" style={{ border: 'none', color: 'var(--accent-green)', fontWeight: 'bold' }}>{t('dashboard.open_sales')}</button>
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
