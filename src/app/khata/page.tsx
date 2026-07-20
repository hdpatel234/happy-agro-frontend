import React from 'react';
import Link from 'next/link';
import { Users, IndianRupee, Factory, UserPlus, BookOpen, Plus } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function KhataPage() {
  const { t } = useLanguage();
  return (
    <div className="khata-container">
      <div className="card">
        {/* Header */}
        <div className="khata-header">
          <div className="khata-title-section">
            <BookOpen className="text-accent-blue" size={24} />
            <div>
              <h2 className="khata-title">{t('khata.title')}</h2>
              <p className="khata-subtitle">{t('khata.subtitle')}</p>
            </div>
          </div>
          <Link href="/khata/create" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Plus size={18} />
            <span>{t('khata.add_entry')}</span>
          </Link>
        </div>

        {/* Stats */}
        <div className="khata-stats-grid">
          <div className="k-stat-card">
            <div>
              <div className="k-stat-label">{t('khata.total_parties')}</div>
              <div className="k-stat-val">1</div>
            </div>
            <div className="k-stat-icon" style={{ backgroundColor: '#e0e7ff', color: '#4f46e5' }}>
              <Users size={20} />
            </div>
          </div>
          
          <div className="k-stat-card">
            <div>
              <div className="k-stat-label">{t('khata.customers_due')}</div>
              <div className="k-stat-val text-danger">₹0.00</div>
            </div>
            <div className="k-stat-icon" style={{ backgroundColor: '#ffedd5', color: '#ea580c' }}>
              <IndianRupee size={20} />
            </div>
          </div>

          <div className="k-stat-card">
            <div>
              <div className="k-stat-label">{t('khata.suppliers_due')}</div>
              <div className="k-stat-val text-danger">₹0.00</div>
            </div>
            <div className="k-stat-icon" style={{ backgroundColor: '#ffedd5', color: '#64748b' }}>
              <Factory size={20} />
            </div>
          </div>

          <div className="k-stat-card">
            <div>
              <div className="k-stat-label">{t('khata.net_balance')}</div>
              <div className="k-stat-val text-success">₹0.00</div>
            </div>
            <div className="k-stat-icon" style={{ backgroundColor: '#d1fae5', color: '#059669' }}>
              <IndianRupee size={20} />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="khata-filters">
          <input 
            type="text" 
            placeholder={t('khata.search_placeholder')} 
            className="k-filter-input" 
          />
          <select className="k-filter-select">
            <option>{t('khata.all_parties')}</option>
            <option>{t('khata.customers')}</option>
            <option>{t('khata.suppliers')}</option>
          </select>
          <select className="k-filter-select">
            <option>{t('khata.all_parties')}</option>
            <option>{t('khata.with_due')}</option>
            <option>{t('khata.settled')}</option>
          </select>
          <button className="btn btn-primary" style={{ width: '120px' }}>{t('khata.filter')}</button>
        </div>

        {/* Table */}
        <div className="khata-table-container">
          <table className="khata-table">
            <thead>
              <tr>
                <th>{t('khata.table.party')}</th>
                <th>{t('khata.table.type')}</th>
                <th>{t('khata.table.mobile')}</th>
                <th>{t('khata.table.total_debit')}</th>
                <th>{t('khata.table.total_credit')}</th>
                <th>{t('khata.table.balance')}</th>
                <th>{t('khata.table.actions')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="party-cell">
                    <div className="party-avatar">
                      <UserPlus size={16} />
                    </div>
                    <span className="party-name">Test Name</span>
                  </div>
                </td>
                <td>
                  <span className="party-badge customer">{t('khata.customer_badge')}</span>
                </td>
                <td className="text-muted">{t('inventory.na')}</td>
                <td className="text-danger">₹120.00</td>
                <td className="text-success">₹120.00</td>
                <td className="text-success font-semibold">₹0.00</td>
                <td>
                  <button className="btn-link">{t('khata.view_ledger')}</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
