"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function CustomersPage() {
  const { t } = useLanguage();
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
          <h2 className="customers-title">{t('customers.title')}</h2>
          <p className="customers-subtitle">{t('customers.subtitle')}</p>
        </div>
        <Link href="/customers/create" className="btn btn-blue customers-add-btn">
          <Plus size={16} /> {t('customers.add_customer')}
        </Link>
      </div>

      <div className="customers-filter-card">
        <input 
          type="text" 
          className="customer-search" 
          placeholder={t('customers.search_placeholder')} 
        />
        <button className="btn btn-blue customer-filter-btn">{t('customers.search_btn')}</button>
        <button className="btn customer-clear-btn">{t('customers.clear_btn')}</button>
      </div>

      <div className="customers-table-container">
        <table className="customers-table">
          <thead>
            <tr>
              <th>{t('customers.table.name')}</th>
              <th>{t('customers.table.phone')}</th>
              <th>{t('customers.table.email')}</th>
              <th>{t('customers.table.address')}</th>
              <th>{t('customers.table.status')}</th>
              <th>{t('customers.table.actions')}</th>
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
                  <td><span className="badge-active">{customer.status === 'Active' ? t('brands.active') : customer.status}</span></td>
                  <td>
                    <div className="action-buttons-row">
                      <Link href={`/customers/${customer.id}`} className="action-btn-view">{t('customers.view')}</Link>
                      <button className="action-btn-edit">{t('customers.edit')}</button>
                      <button className="action-btn-delete" onClick={() => openDeleteModal(customer.id)}>{t('customers.delete')}</button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '24px' }}>
                  {t('customers.no_customers')}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Modal 
        isOpen={isDeleteModalOpen}
        type="error"
        title={t('customers.delete_modal_title')}
        message={t('customers.delete_modal_message')}
        confirmText={t('customers.delete_modal_confirm')}
        cancelText={t('customers.delete_modal_cancel')}
        onConfirm={confirmDelete}
        onCancel={closeDeleteModal}
      />
    </div>
  );
}
