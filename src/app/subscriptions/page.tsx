"use client";

import React from 'react';
import { Check, X } from 'lucide-react';
import './page.css';

// Reusable SVG Diamond Icon
const DiamondIcon = ({ className = "" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={`sub-diamond-icon ${className}`}
  >
    <path d="M12 2L2 9L12 22L22 9L12 2Z" fill="#3b82f6" />
    <path d="M12 2L2 9L12 12L12 2Z" fill="#60a5fa" />
    <path d="M12 2L22 9L12 12L12 2Z" fill="#93c5fd" />
    <path d="M2 9L12 22L12 12L2 9Z" fill="#2563eb" />
    <path d="M22 9L12 22L12 12L22 9Z" fill="#1d4ed8" />
  </svg>
);

interface PricingCardProps {
  title: string;
  monthlyPrice: string;
  yearlyPrice: string;
  savings: string;
  features: { included: boolean; text: string }[];
  isHighlighted?: boolean;
}

function PricingCard({ title, monthlyPrice, yearlyPrice, savings, features, isHighlighted = false }: PricingCardProps) {
  return (
    <div className={`sub-pricing-card ${isHighlighted ? 'sub-highlighted-card' : ''}`}>
      <div className="sub-pricing-header">
        <DiamondIcon />
        <h3 className="sub-pricing-title">{title}</h3>
        <div className="sub-pricing-amount">
          <span className="sub-price-lg">₹{monthlyPrice}</span>
          <span className="sub-price-mo">/month</span>
        </div>
        <p className="sub-pricing-yearly">
          or ₹{yearlyPrice}/year <span className="sub-savings">Save {savings}</span>
        </p>
      </div>

      <div className="sub-features-list">
        {features.map((feature, index) => (
          <div key={index} className="sub-feature-item">
            {feature.included ? (
              <Check size={14} className="text-green-600 flex-shrink-0" />
            ) : (
              <X size={14} className="text-gray-400 flex-shrink-0" />
            )}
            <span className={feature.included ? 'text-gray-800 font-500' : 'text-gray-400'}>
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      <div className="sub-pricing-actions">
        <button className="btn btn-green w-full mb-2 font-600">
          Pay Online with Cashfree
        </button>
        <button className="btn sub-btn-outline w-full">
          Manual Bank / UPI Request
        </button>
      </div>
    </div>
  );
}

export default function SubscriptionsPage() {
  const commonFeatures = [
    { text: "1 user per shop", incSilver: true, incGold: false, incDiamond: false, incPlatinum: false }, // Will override dynamically
    { text: "Inventory Management", incSilver: true, incGold: true, incDiamond: true, incPlatinum: true },
    { text: "Billing & POS", incSilver: true, incGold: true, incDiamond: true, incPlatinum: true },
    { text: "Advanced Analytics & Reports", incSilver: true, incGold: true, incDiamond: true, incPlatinum: true },
    { text: "Staff Management & Permissions", incSilver: true, incGold: true, incDiamond: true, incPlatinum: true },
    { text: "Advanced Reports", incSilver: true, incGold: true, incDiamond: true, incPlatinum: true },
    { text: "Multiple Shops", incSilver: true, incGold: true, incDiamond: true, incPlatinum: true },
  ];

  return (
    <div className="sub-container">
      {/* Header */}
      <div className="sub-header-flex">
        <div className="sub-header-left">
          <h2 className="sub-title">Subscription Management</h2>
          <p className="sub-subtitle">Manage your subscription plan and payments</p>
        </div>
        <button className="btn sub-btn-blue">
          View Transactions
        </button>
      </div>

      {/* Current Subscription Card */}
      <div className="sub-card mt-0">
        <div className="sub-card-header no-border">
          <h4>Current Subscription</h4>
        </div>
        <div className="sub-current-grid">
          <div className="sub-current-item">
            <span className="sub-item-label">Plan</span>
            <span className="sub-item-value">Trial Plan</span>
          </div>
          <div className="sub-current-item">
            <span className="sub-item-label">Status</span>
            <span className="sub-badge-trial">Trial</span>
          </div>
          <div className="sub-current-item">
            <span className="sub-item-label">Valid Until</span>
            <span className="sub-item-value">Aug 02, 2026</span>
            <span className="sub-item-alert">Expiring soon!</span>
          </div>
        </div>
        
        <div className="sub-divider"></div>
        
        <div className="sub-features-section">
          <span className="sub-features-title">Your Current Plan Features</span>
          <div className="sub-features-grid">
            <div className="sub-feat"><Check size={14} className="text-green-600"/> <span className="text-green-600">Inventory Management</span></div>
            <div className="sub-feat"><Check size={14} className="text-green-600"/> <span className="text-green-600">Billing & POS</span></div>
            <div className="sub-feat"><Check size={14} className="text-green-600"/> <span className="text-green-600">Advanced Reports</span></div>
            <div className="sub-feat"><Check size={14} className="text-green-600"/> <span className="text-green-600">Staff Management</span></div>
            <div className="sub-feat"><X size={14} className="text-gray-400"/> <span className="text-gray-400">Advanced Analytics</span></div>
            <div className="sub-feat"><X size={14} className="text-gray-400"/> <span className="text-gray-400">Multiple Shops</span></div>
          </div>
        </div>
      </div>

      {/* All Shops - Subscription Status */}
      <div className="sub-card">
        <div className="sub-card-header">
          <h4>All Shops - Subscription Status</h4>
        </div>
        <div className="sub-table-wrapper">
          <table className="sub-table">
            <thead>
              <tr>
                <th>#</th>
                <th>SHOP NAME</th>
                <th>PLAN</th>
                <th>STATUS</th>
                <th>VALID UNTIL</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="sub-table-row-active">
                <td>1</td>
                <td>
                  <div className="sub-shop-name">Happy Agro</div>
                  <div className="sub-shop-type text-green-600 font-500">Main Shop</div>
                </td>
                <td className="text-gray-800">Trial Plan</td>
                <td><span className="sub-badge-trial-small">Trial</span></td>
                <td>Aug 02, 2026 <span className="text-orange-500 font-500 ml-1">Expiring soon</span></td>
                <td><span className="sub-badge-current text-green-600">Current</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Choose Your Plan */}
      <div className="sub-plans-section">
        <div className="sub-plans-header">
          <h2>Choose Your Plan</h2>
          <p>Select the perfect plan for your business needs</p>
        </div>
        
        <div className="sub-pricing-grid">
          <PricingCard 
            title="Silver"
            monthlyPrice="299"
            yearlyPrice="2,999"
            savings="16%"
            features={[
              { included: true, text: "Up to 1 shop" },
              { included: true, text: "1 user per shop" },
              ...commonFeatures.slice(1).map(f => ({ included: f.incSilver, text: f.text }))
            ]}
          />
          <PricingCard 
            title="Gold"
            monthlyPrice="399"
            yearlyPrice="3,999"
            savings="16%"
            features={[
              { included: true, text: "Up to 2 shops" },
              { included: true, text: "2 users per shop" },
              ...commonFeatures.slice(1).map(f => ({ included: f.incGold, text: f.text }))
            ]}
          />
          <PricingCard 
            title="Diamond"
            monthlyPrice="499"
            yearlyPrice="4,999"
            savings="17%"
            isHighlighted={true}
            features={[
              { included: true, text: "Up to 3 shops" },
              { included: true, text: "3 users per shop" },
              ...commonFeatures.slice(1).map(f => ({ included: f.incDiamond, text: f.text }))
            ]}
          />
          <PricingCard 
            title="platinum"
            monthlyPrice="599"
            yearlyPrice="5,999"
            savings="17%"
            features={[
              { included: true, text: "Up to 4 shops" },
              { included: true, text: "4 users per shop" },
              ...commonFeatures.slice(1).map(f => ({ included: f.incPlatinum, text: f.text }))
            ]}
          />
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="sub-card">
        <div className="sub-card-header">
          <h4>Recent Transactions</h4>
        </div>
        <div className="sub-empty-state">
          <span>No transactions found</span>
        </div>
      </div>

    </div>
  );
}
