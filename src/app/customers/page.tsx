"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import './page.css';

export default function CustomersPage() {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Test Name', phone: '-', email: '-', address: '-', status: 'Active' }
  ]);
  
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [customerToDelete, setCustomerToDelete] = useState<number | null>(null);

  const openDeleteModal = (id: number) => {
    setCustomerToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setCustomerToDelete(null);
  };

  const confirmDelete = () => {
    if (customerToDelete !== null) {
      setCustomers(customers.filter(c => c.id !== customerToDelete));
    }
    closeDeleteModal();
  };

  return (
    <div className="customers-container">
      <div className="customers-header">
        <div className="customers-title-section">
          <h2 className="customers-title">Customers</h2>
          <p className="customers-subtitle">Manage your customer list</p>
        </div>
        <Link href="/customers/create" className="btn btn-blue customers-add-btn">
          <Plus size={16} /> Add Customer
        </Link>
      </div>

      <div className="customers-filter-card">
        <input 
          type="text" 
          className="customer-search" 
          placeholder="Search by name, phone, or email..." 
        />
        <button className="btn btn-blue customer-filter-btn">Search</button>
        <button className="btn customer-clear-btn">Clear</button>
      </div>

      <div className="customers-table-container">
        <table className="customers-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.length > 0 ? (
              customers.map(customer => (
                <tr key={customer.id}>
                  <td className="fw-500 text-primary">{customer.name}</td>
                  <td className="text-muted">{customer.phone}</td>
                  <td className="text-muted">{customer.email}</td>
                  <td className="text-muted">{customer.address}</td>
                  <td><span className="badge-active">{customer.status}</span></td>
                  <td>
                    <div className="action-buttons-row">
                      <Link href={`/customers/${customer.id}`} className="action-btn-view">View</Link>
                      <button className="action-btn-edit">Edit</button>
                      <button className="action-btn-delete" onClick={() => openDeleteModal(customer.id)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '24px' }}>
                  No customers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Modal 
        isOpen={isDeleteModalOpen}
        type="error"
        title="Delete Customer"
        message="Are you sure you want to delete this customer? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={confirmDelete}
        onCancel={closeDeleteModal}
      />
    </div>
  );
}
