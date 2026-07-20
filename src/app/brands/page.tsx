"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

const initialBrandsData = [
  { name: 'ADAMA Ltd.', company: 'ADAMA Ltd.', products: 0, status: 'Active' },
  { name: 'Advanta Seeds', company: 'Advanta Seeds', products: 0, status: '' },
  { name: 'Astec LifeSciences', company: 'Astec LifeSciences', products: 0, status: '' },
  { name: 'BASF', company: 'BASF', products: 0, status: '' },
  { name: 'Bayer', company: 'Bayer CropScience', products: 0, status: '' },
  { name: 'Best Agrolife', company: 'Best Agrolife', products: 0, status: '' },
  { name: 'Chambal Fertilisers', company: 'Chambal Fertilisers', products: 0, status: '' },
  { name: 'Coromandel International', company: 'Coromandel International', products: 0, status: '' },
  { name: 'Corteva Agriscience', company: 'Corteva Agriscience', products: 0, status: '' },
  { name: 'Dhanuka Agritech', company: 'Dhanuka Agritech', products: 0, status: '' },
  { name: 'FMC Corporation', company: 'FMC Corporation', products: 0, status: '' },
  { name: 'Gujarat State Fertilizers & Chemicals', company: 'Gujarat State Fertilizers & Chemicals', products: 0, status: '' },
  { name: 'IFFCO', company: 'IFFCO', products: 1, status: '' },
  { name: 'India Pesticides Limited', company: 'India Pesticides Limited', products: 0, status: '' },
  { name: 'Insecticides India Limited', company: 'Insecticides India Limited', products: 0, status: '' },
  { name: 'Kaveri Seed Company', company: 'Kaveri Seed Company', products: 0, status: '' },
  { name: 'Limagrain', company: 'Limagrain', products: 0, status: '' },
  { name: 'Madras Fertilizers Limited', company: 'Madras Fertilizers Limited', products: 0, status: '' },
  { name: 'Mahyco', company: 'Mahyco', products: 0, status: '' },
  { name: 'Meghmani Organics', company: 'Meghmani Organics', products: 0, status: '' }
];

export default function BrandsPage() {
  const [brands, setBrands] = useState(initialBrandsData);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [brandToDelete, setBrandToDelete] = useState<number | null>(null);
  const { t } = useLanguage();

  const handleDeleteClick = (index: number) => {
    setBrandToDelete(index);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (brandToDelete !== null) {
      const newBrands = [...brands];
      newBrands.splice(brandToDelete, 1);
      setBrands(newBrands);
      setIsDeleteModalOpen(false);
      setBrandToDelete(null);
    }
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setBrandToDelete(null);
  };

  return (
    <div className="brands-container">
      <div className="brands-header">
        <div className="brands-title-section">
          <h2 className="brands-title">{t('brands.title')}</h2>
          <p className="brands-subtitle">{t('brands.subtitle')}</p>
        </div>
        <Link href="/brands/create" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Plus size={18} />
          <span>{t('brands.add_brand')}</span>
        </Link>
      </div>

      <div className="brands-filter-bar">
        <input type="text" className="brands-search-input" placeholder={t('brands.search_placeholder')} />
        <select className="brands-status-select">
          <option>{t('brands.all_status')}</option>
          <option>{t('brands.active')}</option>
          <option>{t('brands.inactive')}</option>
        </select>
        <button className="btn btn-primary filter-btn">{t('brands.filter')}</button>
        <button className="btn btn-outline clear-btn">{t('brands.clear')}</button>
      </div>

      <div className="brands-table-container">
        <table className="brands-table">
          <thead>
            <tr>
              <th>{t('brands.table.brand_name')}</th>
              <th>{t('brands.table.company_name')}</th>
              <th>{t('brands.table.products')}</th>
              <th>{t('brands.table.status')}</th>
              <th className="text-right">{t('brands.table.actions')}</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((brand, index) => (
              <tr key={index}>
                <td className="fw-600">{brand.name}</td>
                <td className="text-muted">{brand.company}</td>
                <td>
                  <span className="brand-product-pill">{brand.products} {t('brands.product_count')}</span>
                </td>
                <td>
                  {brand.status === 'Active' && (
                    <span className="brand-badge-active">{t('brands.active')}</span>
                  )}
                </td>
                <td className="text-right brand-actions">
                  <button className="brand-action-btn edit">{t('brands.edit')}</button>
                  <button className="brand-action-btn delete" onClick={() => handleDeleteClick(index)}>{t('brands.delete')}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="brands-pagination-footer">
        <div className="brands-pagination-info">
          {t('brands.showing')} 1 {t('brands.to')} {Math.min(20, brands.length)} {t('brands.of')} {brands.length > 20 ? 34 : brands.length} {t('brands.results')}
        </div>
        <div className="brands-pagination-controls">
          <button className="brands-page-btn"><ChevronLeft size={16} /></button>
          <button className="brands-page-btn active">1</button>
          <button className="brands-page-btn">2</button>
          <button className="brands-page-btn"><ChevronRight size={16} /></button>
        </div>
      </div>

      <Modal 
        isOpen={isDeleteModalOpen}
        type="confirm"
        title={t('brands.delete_modal_title')}
        message={t('brands.delete_modal_message')}
        confirmText={t('brands.delete_modal_confirm')}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </div>
  );
}
