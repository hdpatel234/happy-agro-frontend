"use client";

import React from 'react';
import { FileText } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
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
  const { t } = useLanguage();
  return (
    <div className="sr-container">
      {/* Header */}
      <div className="sr-header">
        <div className="sr-title-section">
          <h2 className="sr-title">{t('sr.title')}</h2>
          <p className="sr-subtitle">{t('sr.subtitle')}</p>
        </div>
        <button className="btn sr-btn-red">
          <FileText size={16} /> {t('sr.export_pdf')}
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="sr-metrics-grid">
        <MetricCard 
          title={t('sr.total_products')} 
          amount="1" 
        />
        <MetricCard 
          title={t('sr.total_stock_value')} 
          amount="₹9,900.00" 
        />
        <MetricCard 
          title={t('sr.low_stock_items')} 
          amount="0" 
          amountColor="text-red-500"
        />
      </div>

      {/* Bar Chart Mockup */}
      <div className="sr-chart-card">
        <div className="sr-card-header">
          <h4>{t('sr.stock_by_category')}</h4>
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
                <span className="sr-x-label">{t('sr.uncategorized')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="sr-table-card">
        <div className="sr-table-filters">
          <select className="sr-select">
            <option>{t('sr.all_stock')}</option>
          </select>
          <button className="btn btn-green sr-btn-filter">
            {t('sr.filter')}
          </button>
        </div>
        <div className="sr-table-wrapper">
          <table className="sr-table">
            <thead>
              <tr>
                <th>{t('sr.table.product')}</th>
                <th>{t('sr.table.category')}</th>
                <th>{t('sr.table.stock')}</th>
                <th>{t('sr.table.cost_price')}</th>
                <th>{t('sr.table.stock_value')}</th>
                <th>{t('sr.table.status')}</th>
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
