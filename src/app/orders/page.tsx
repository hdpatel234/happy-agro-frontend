"use client";

import React, { Suspense, useState } from 'react';
import { Plus, X } from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import './page.css';

function OrdersContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentTab = searchParams.get('tab') || 'orders';
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="orders-container">
      <div className="orders-header">
        <div className="orders-title-section">
          <h2 className="orders-title">Orders Management</h2>
          <p className="orders-subtitle">Manage customer orders and track their status</p>
        </div>
        {currentTab === 'previous-sales' ? (
          <button className="btn btn-blue orders-create-btn" onClick={() => setIsModalOpen(true)}>
            ₹ Add Previous Sales
          </button>
        ) : (
          <Link href="/orders/create" className="btn btn-primary orders-create-btn">
            <Plus size={16} /> Create Order
          </Link>
        )}
      </div>

      <div className="orders-tabs-card">
        <button 
          className={`order-tab ${currentTab === 'orders' ? 'active' : ''}`}
          onClick={() => router.push('/orders')}
        >
          Orders
        </button>
        <button 
          className={`order-tab-blue ${currentTab === 'previous-sales' ? 'active' : ''}`}
          onClick={() => router.push('/orders?tab=previous-sales')}
        >
          Previous Sales
        </button>
      </div>

      {currentTab === 'orders' ? (
        <>
          <div className="orders-filter-card">
            <input 
              type="text" 
              className="order-search" 
              placeholder="Search by order number, customer..." 
            />
            <select className="order-select">
              <option>All Status</option>
              <option>Delivered</option>
              <option>Pending</option>
            </select>
            <select className="order-select">
              <option>All Payment Status</option>
              <option>Paid</option>
              <option>Unpaid</option>
            </select>
            <button className="btn btn-primary order-filter-btn">Filter</button>
            <button className="btn order-clear-btn">Clear</button>
          </div>

          <div className="orders-table-container">
            <table className="orders-table">
              <thead>
                <tr>
                  <th>ORDER #</th>
                  <th>CUSTOMER</th>
                  <th>DATE</th>
                  <th>STATUS</th>
                  <th>AMOUNT</th>
                  <th>PAYMENT</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="order-id-col">
                      <span className="order-id-main">INV-20260719-0001</span>
                      <span className="order-id-subtext">PoS/Sell</span>
                    </div>
                  </td>
                  <td><span className="fw-500 text-primary">Test Name</span></td>
                  <td className="text-muted">19 Jul 2026</td>
                  <td><span className="badge-delivered">Delivered</span></td>
                  <td className="fw-600 text-primary">₹120.00</td>
                  <td>
                    <div className="payment-col">
                      <span className="badge-paid">Paid</span>
                      <span className="payment-subtext">Cash</span>
                    </div>
                  </td>
                  <td><span className="action-link">View</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="ps-card">
          <div className="ps-card-header">
            <div className="ps-title-box">
              <h3 className="ps-card-title">Previous Sales History</h3>
              <p className="ps-card-subtitle">Manual sales added for this shop are shown here.</p>
            </div>
            <div className="ps-total-box">
              <div className="ps-total-label">PREVIOUS SALES TOTAL</div>
              <div className="ps-total-value">₹0.00</div>
            </div>
          </div>
          <div className="ps-empty-state">
            No previous sales added yet.
          </div>
        </div>
      )}

      {/* Add Previous Sales Modal */}
      {isModalOpen && (
        <div className="custom-modal-overlay">
          <div className="custom-modal">
            <div className="custom-modal-header">
              <div className="custom-modal-title-box">
                <h3>Add Previous Sales</h3>
                <p>Store older sales against the current shop.</p>
              </div>
              <button className="custom-modal-close" onClick={() => setIsModalOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="custom-modal-body">
              <div className="custom-modal-form-group">
                <label>Sale Date</label>
                <input type="date" className="custom-modal-input" defaultValue="2026-07-19" />
              </div>
              <div className="custom-modal-form-group">
                <label>Amount</label>
                <input type="number" className="custom-modal-input" placeholder="Enter sale amount" />
              </div>
            </div>
            <div className="custom-modal-footer">
              <button className="btn custom-modal-btn-outline" onClick={() => setIsModalOpen(false)}>Cancel</button>
              <button className="btn btn-blue custom-modal-btn">Save Sale</button>
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
