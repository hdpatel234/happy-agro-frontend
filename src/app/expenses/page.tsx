"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, Receipt, Edit, Trash2 } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function ExpensesPage() {
  const { t } = useLanguage();
  const [expensesList, setExpensesList] = useState([
    {
      id: 1,
      date: 'Jul 20, 2026',
      day: 'Mon',
      category: 'Certification',
      amount: '100.00',
      notes: '-'
    }
  ]);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [expenseToDelete, setExpenseToDelete] = useState<number | null>(null);

  const openDeleteModal = (id: number) => {
    setExpenseToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setExpenseToDelete(null);
  };

  const confirmDelete = () => {
    if (expenseToDelete !== null) {
      setExpensesList(expensesList.filter(e => e.id !== expenseToDelete));
    }
    closeDeleteModal();
  };

  return (
    <div className="exp-container">
      {/* Header */}
      <div className="exp-header">
        <div className="exp-title-section">
          <h2 className="exp-title">{t('expenses.title')}</h2>
          <p className="exp-subtitle">{t('expenses.subtitle')}</p>
        </div>
        <Link href="/expenses/create" className="btn btn-green exp-add-btn">
          <Plus size={16} /> {t('expenses.add_expense')}
        </Link>
      </div>

      {/* Hero Card */}
      <div className="exp-hero-card">
        <div className="exp-hero-content">
          <span className="exp-hero-label">{t('expenses.total_expenses')}</span>
          <h3 className="exp-hero-value">
            ₹{expensesList.length > 0 
              ? expensesList.reduce((acc, curr) => acc + parseFloat(curr.amount), 0).toFixed(2) 
              : '0.00'}
          </h3>
        </div>
        <div className="exp-hero-icon-container">
          <div className="exp-hero-icon-placeholder"></div>
        </div>
      </div>

      {/* Filter Card */}
      <div className="exp-filter-card">
        <div className="exp-form-group">
          <label>{t('expenses.category_label')}</label>
          <select className="exp-input">
            <option>{t('expenses.all_categories')}</option>
          </select>
        </div>
        <div className="exp-form-group">
          <label>{t('expenses.start_date')}</label>
          <input type="date" className="exp-input" />
        </div>
        <div className="exp-form-group">
          <label>{t('expenses.end_date')}</label>
          <input type="date" className="exp-input" />
        </div>
        <div className="exp-filter-actions">
          <button className="btn btn-green exp-filter-btn">{t('expenses.filter_btn')}</button>
        </div>
      </div>

      {/* Table Area */}
      <div className="exp-table-container">
        <table className="exp-table">
          <thead>
            <tr>
              <th>{t('expenses.table.date')}</th>
              <th>{t('expenses.table.category')}</th>
              <th>{t('expenses.table.amount')}</th>
              <th>{t('expenses.table.notes')}</th>
              <th>{t('expenses.table.actions')}</th>
            </tr>
          </thead>
          <tbody>
            {expensesList.length > 0 ? (
              expensesList.map(expense => (
                <tr key={expense.id}>
                  <td>
                    <div className="exp-date-cell">
                      <span>{expense.date}</span>
                      <span className="exp-date-day">{expense.day}</span>
                    </div>
                  </td>
                  <td>
                    <span className="exp-category-badge">{expense.category}</span>
                  </td>
                  <td>
                    <span className="exp-amount">₹{expense.amount}</span>
                  </td>
                  <td className="text-muted">{expense.notes}</td>
                  <td>
                    <div className="exp-action-icons">
                      <Link href={`/expenses/${expense.id}/edit`} className="icon-btn text-blue" title={t('expenses.edit')}><Edit size={16} /></Link>
                      <button className="icon-btn text-red" title={t('expenses.delete')} onClick={() => openDeleteModal(expense.id)}><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="exp-empty-cell">
                  <div className="exp-empty-state">
                    <Receipt size={48} className="exp-empty-icon" />
                    <h4 className="exp-empty-title">{t('expenses.no_expenses_title')}</h4>
                    <p className="exp-empty-desc">{t('expenses.no_expenses_desc')}</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Modal 
        isOpen={isDeleteModalOpen}
        type="error"
        title={t('expenses.delete_modal_title')}
        message={t('expenses.delete_modal_message')}
        confirmText={t('expenses.delete_modal_confirm')}
        cancelText={t('expenses.delete_modal_cancel')}
        onConfirm={confirmDelete}
        onCancel={closeDeleteModal}
      />
    </div>
  );
}
