import React from 'react';
import Link from 'next/link';
import { Users, IndianRupee, Factory, UserPlus, BookOpen, Plus } from 'lucide-react';
import './page.css';

export default function KhataPage() {
  return (
    <div className="khata-container">
      <div className="card">
        {/* Header */}
        <div className="khata-header">
          <div className="khata-title-section">
            <BookOpen className="text-accent-blue" size={24} />
            <div>
              <h2 className="khata-title">Khata Book</h2>
              <p className="khata-subtitle">Manage customer and supplier credit transactions</p>
            </div>
          </div>
          <Link href="/khata/create" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Plus size={18} />
            <span>Add Entry</span>
          </Link>
        </div>

        {/* Stats */}
        <div className="khata-stats-grid">
          <div className="k-stat-card">
            <div>
              <div className="k-stat-label">Total Parties</div>
              <div className="k-stat-val">1</div>
            </div>
            <div className="k-stat-icon" style={{ backgroundColor: '#e0e7ff', color: '#4f46e5' }}>
              <Users size={20} />
            </div>
          </div>
          
          <div className="k-stat-card">
            <div>
              <div className="k-stat-label">Customers Due</div>
              <div className="k-stat-val text-danger">₹0.00</div>
            </div>
            <div className="k-stat-icon" style={{ backgroundColor: '#ffedd5', color: '#ea580c' }}>
              <IndianRupee size={20} />
            </div>
          </div>

          <div className="k-stat-card">
            <div>
              <div className="k-stat-label">Suppliers Due</div>
              <div className="k-stat-val text-danger">₹0.00</div>
            </div>
            <div className="k-stat-icon" style={{ backgroundColor: '#ffedd5', color: '#64748b' }}>
              <Factory size={20} />
            </div>
          </div>

          <div className="k-stat-card">
            <div>
              <div className="k-stat-label">Net Balance</div>
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
            placeholder="Search by name or mobile..." 
            className="k-filter-input" 
          />
          <select className="k-filter-select">
            <option>All Parties</option>
            <option>Customers</option>
            <option>Suppliers</option>
          </select>
          <select className="k-filter-select">
            <option>All Parties</option>
            <option>With Due</option>
            <option>Settled</option>
          </select>
          <button className="btn btn-primary" style={{ width: '120px' }}>Filter</button>
        </div>

        {/* Table */}
        <div className="khata-table-container">
          <table className="khata-table">
            <thead>
              <tr>
                <th>PARTY</th>
                <th>TYPE</th>
                <th>MOBILE</th>
                <th>TOTAL DEBIT (DUE)</th>
                <th>TOTAL CREDIT (PAID)</th>
                <th>BALANCE</th>
                <th>ACTIONS</th>
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
                  <span className="party-badge customer">Customer</span>
                </td>
                <td className="text-muted">N/A</td>
                <td className="text-danger">₹120.00</td>
                <td className="text-success">₹120.00</td>
                <td className="text-success font-semibold">₹0.00</td>
                <td>
                  <button className="btn-link">View Ledger</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
