"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Modal } from '@/components/ui/Modal';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function ViewCategoryPage() {
  const [subcategories, setSubcategories] = useState([
    'Drip Irrigation',
    'Sprinkler Irrigation',
    'HDPE Pipe',
    'PVC Pipe',
    'Drip Fittings',
    'Water Pump'
  ]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [subToDelete, setSubToDelete] = useState<number | null>(null);
  const { t } = useLanguage();

  const handleDeleteClick = (index: number) => {
    setSubToDelete(index);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (subToDelete !== null) {
      const newSubs = [...subcategories];
      newSubs.splice(subToDelete, 1);
      setSubcategories(newSubs);
      setIsDeleteModalOpen(false);
      setSubToDelete(null);
    }
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setSubToDelete(null);
  };

  return (
    <div className="view-cat-container">
      {/* Top Details Card */}
      <div className="vc-top-card">
        <div className="vc-header-row">
          <div className="vc-title-group">
            <Link href="/categories" className="vc-back-arrow">&larr;</Link>
            <div>
              <h2 className="vc-title">Irrigation Products</h2>
              <p className="vc-subtitle">other</p>
            </div>
          </div>
          <Link href="/categories/1/edit" className="btn btn-primary vc-edit-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{t('categories.edit')}</Link>
        </div>

        <div className="vc-status-section">
          <span className="vc-status-label">{t('categories.status')}</span>
          <span className="vc-badge-active">{t('categories.active')}</span>
        </div>
      </div>

      {/* Subcategories Section */}
      <div className="vc-subcategories-section">
        <h3 className="vc-section-title">{t('categories.subcategories')} ({subcategories.length})</h3>
        <div className="vc-sub-grid">
          {subcategories.map((sub, i) => (
            <div key={i} className="vc-sub-card">
              <h4 className="vc-sub-card-title">{sub}</h4>
              <p className="vc-sub-card-desc">{t('categories.no_products_in_sub')}</p>
              <div className="vc-sub-actions">
                <button className="vc-action-btn edit">{t('categories.edit')}</button>
                <button className="vc-action-btn delete" onClick={() => handleDeleteClick(i)}>{t('categories.delete')}</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Stats Row */}
      <div className="vc-stats-row">
        <div className="vc-stat-card">
          <div className="vc-stat-val text-blue">{subcategories.length}</div>
          <div className="vc-stat-label">{t('categories.subcategories')}</div>
        </div>
        <div className="vc-stat-card">
          <div className="vc-stat-val text-green">0</div>
          <div className="vc-stat-label">{t('categories.total_products')}</div>
        </div>
        <div className="vc-stat-card">
          <div className="vc-stat-val text-purple">0</div>
          <div className="vc-stat-label">{t('categories.direct_products')}</div>
        </div>
      </div>

      <Modal 
        isOpen={isDeleteModalOpen}
        type="confirm"
        title={t('categories.delete_sub_modal_title')}
        message={t('categories.delete_sub_modal_message')}
        confirmText={t('categories.delete_modal_confirm')}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </div>
  );
}
