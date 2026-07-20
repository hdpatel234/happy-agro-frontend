"use client";

import React, { Suspense, useState } from 'react';
import { Plus, X } from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

function OrdersContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentTab = searchParams.get('tab') || 'orders';
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="orders-container">
      <div className="orders-header">
        <div className="orders-title-section">
          <h2 className="orders-title">{t('orders.title')}</h2>
          <p className="orders-subtitle">{t('orders.subtitle')}</p>
        </div>
        {currentTab === 'previous-sales' ? (
          <button className="btn btn-blue orders-create-btn" onClick={() => setIsModalOpen(true)}>
            ₹ {t('orders.add_previous_sales')}
          </button>
        ) : (
          <Link href="/orders/create" className="btn btn-primary orders-create-btn">
            <Plus size={16} /> {t('orders.create_order')}
          </Link>
        )}
      </div>

      <div className="orders-tabs-card">
        <button 
          className={`order-tab ${currentTab === 'orders' ? 'active' : ''}`}
          onClick={() => router.push('/orders')}
        >
          {t('orders.tab_orders')}
        </button>
        <button 
          className={`order-tab-blue ${currentTab === 'previous-sales' ? 'active' : ''}`}
          onClick={() => router.push('/orders?tab=previous-sales')}
        >
          {t('orders.tab_previous_sales')}
        </button>
      </div>

      {currentTab === 'orders' ? (
        <>
          <div className="orders-filter-card">
            <input 
              type="text" 
              className="order-search" 
              placeholder={t('orders.search_placeholder')} 
            />
            <select className="order-select">
              <option>{t('orders.all_status')}</option>
              <option>{t('orders.delivered')}</option>
              <option>{t('orders.pending')}</option>
            </select>
            <select className="order-select">
              <option>{t('orders.all_payment_status')}</option>
              <option>{t('orders.paid')}</option>
              <option>{t('orders.unpaid')}</option>
            </select>
            <button className="btn btn-primary order-filter-btn">{t('orders.filter')}</button>
            <button className="btn order-clear-btn">{t('orders.clear')}</button>
          </div>

          <div className="orders-table-container">
            <table className="orders-table">
              <thead>
                <tr>
                  <th>{t('orders.table.order_no')}</th>
                  <th>{t('orders.table.customer')}</th>
                  <th>{t('orders.table.date')}</th>
                  <th>{t('orders.table.status')}</th>
                  <th>{t('orders.table.amount')}</th>
                  <th>{t('orders.table.payment')}</th>
                  <th>{t('orders.table.actions')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="order-id-col">
                      <span className="order-id-main">INV-20260719-0001</span>
                      <span className="order-id-subtext">{t('orders.pos_sell')}</span>
                    </div>
                  </td>
                  <td><span className="fw-500 text-primary">Test Name</span></td>
                  <td className="text-muted">19 Jul 2026</td>
                  <td><span className="badge-delivered">{t('orders.delivered')}</span></td>
                  <td className="fw-600 text-primary">₹120.00</td>
                  <td>
                    <div className="payment-col">
                      <span className="badge-paid">{t('orders.paid')}</span>
                      <span className="payment-subtext">{t('orders.cash')}</span>
                    </div>
                  </td>
                  <td><span className="action-link">{t('orders.view')}</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="ps-card">
          <div className="ps-card-header">
            <div className="ps-title-box">
              <h3 className="ps-card-title">{t('orders.ps_history_title')}</h3>
              <p className="ps-card-subtitle">{t('orders.ps_history_subtitle')}</p>
            </div>
            <div className="ps-total-box">
              <div className="ps-total-label">{t('orders.ps_total_label')}</div>
              <div className="ps-total-value">₹0.00</div>
            </div>
          </div>
          <div className="ps-empty-state">
            {t('orders.no_ps_added')}
          </div>
        </div>
      )}

      {/* Add Previous Sales Modal */}
      {isModalOpen && (
        <div className="custom-modal-overlay">
          <div className="custom-modal">
            <div className="custom-modal-header">
              <div className="custom-modal-title-box">
                <h3>{t('orders.add_ps_modal_title')}</h3>
                <p>{t('orders.add_ps_modal_subtitle')}</p>
              </div>
              <button className="custom-modal-close" onClick={() => setIsModalOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="custom-modal-body">
              <div className="custom-modal-form-group">
                <label>{t('orders.sale_date')}</label>
                <input type="date" className="custom-modal-input" defaultValue="2026-07-19" />
              </div>
              <div className="custom-modal-form-group">
                <label>{t('orders.sale_amount')}</label>
                <input type="number" className="custom-modal-input" placeholder={t('orders.enter_sale_amount')} />
              </div>
            </div>
            <div className="custom-modal-footer">
              <button className="btn custom-modal-btn-outline" onClick={() => setIsModalOpen(false)}>{t('orders.cancel')}</button>
              <button className="btn btn-blue custom-modal-btn">{t('orders.save_sale')}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function OrdersPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrdersContent />
    </Suspense>
  );
}
