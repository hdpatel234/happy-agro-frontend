"use client";

import React from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import './page.css';

export default function LowStockPage() {
  return (
    <div className="ls-container">
      <div className="ls-header">
        <div className="ls-title-section">
          <h2 className="ls-title">Low Stock Alert</h2>
          <p className="ls-subtitle">Products that need restocking</p>
        </div>
        <Link href="/inventory" className="ls-back-link">
          &larr; Back to Inventory
        </Link>
      </div>

      <div className="ls-empty-card">
        <div className="ls-empty-content">
          <div className="ls-icon-wrapper">
            <CheckCircle2 size={48} className="ls-check-icon" strokeWidth={3} />
          </div>
          <h3 className="ls-empty-title">All Good!</h3>
          <p className="ls-empty-subtitle">No products are running low on stock.</p>
        </div>
      </div>
    </div>
  );
}
