"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
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
          <h2 className="brands-title">Brands</h2>
          <p className="brands-subtitle">Manage product brands and companies</p>
        </div>
        <Link href="/brands/create" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Plus size={18} />
          <span>Add Brand</span>
        </Link>
      </div>

      <div className="brands-filter-bar">
        <input type="text" className="brands-search-input" placeholder="Search brands..." />
        <select className="brands-status-select">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
        <button className="btn btn-primary filter-btn">Filter</button>
        <button className="btn btn-outline clear-btn">Clear</button>
      </div>

      <div className="brands-table-container">
        <table className="brands-table">
          <thead>
            <tr>
              <th>BRAND NAME</th>
              <th>COMPANY NAME</th>
              <th>PRODUCTS</th>
              <th>STATUS</th>
              <th className="text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((brand, index) => (
              <tr key={index}>
                <td className="fw-600">{brand.name}</td>
                <td className="text-muted">{brand.company}</td>
                <td>
                  <span className="brand-product-pill">{brand.products} product(s)</span>
                </td>
                <td>
                  {brand.status === 'Active' && (
                    <span className="brand-badge-active">Active</span>
                  )}
                </td>
                <td className="text-right brand-actions">
                  <button className="brand-action-btn edit">Edit</button>
                  <button className="brand-action-btn delete" onClick={() => handleDeleteClick(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="brands-pagination-footer">
        <div className="brands-pagination-info">
          Showing 1 to {Math.min(20, brands.length)} of {brands.length > 20 ? 34 : brands.length} results
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
        title="Delete Brand"
        message="Are you sure you want to delete this brand? This action cannot be undone."
        confirmText="Delete"
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </div>
  );
}
