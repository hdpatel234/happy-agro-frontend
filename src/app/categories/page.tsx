"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import './page.css';

const categoriesData = [
  {
    title: 'Irrigation Products',
    active: true,
    subtitle: 'Other',
    subcategories: ['Drip Irrigation', 'Sprinkler Irrigation', 'HDPE Pipe', 'PVC Pipe', 'Drip Fittings', 'Water Pump'],
    productCount: 0
  },
  {
    title: 'Organic Crop Protection',
    active: false,
    subtitle: 'Other',
    subcategories: ['Sticky Trap', 'Pheromone Trap', 'Bird Repellent', 'Crop Cover Net'],
    productCount: 0
  },
  {
    title: 'Animal & Dairy Products',
    active: false,
    subtitle: 'Other',
    subcategories: [],
    productCount: 0
  },
  {
    title: 'Pesticides',
    active: false,
    subtitle: 'Other',
    subcategories: ['Insecticide', 'Herbicide', 'Fungicide', 'Rodenticide', 'Termiticide', 'Nematicide', 'Acaricide', 'Plant Growth Regulator'],
    productCount: 0
  },
  {
    title: 'Plant Growth / Crop Care',
    active: false,
    subtitle: 'Other',
    subcategories: ['Plant Growth Promoter', 'Plant Tonic', 'Flowering Stimulant', 'Fruit Development', 'Root Booster', 'Stress Reliever', 'Yield Booster'],
    productCount: 0
  },
  {
    title: 'Micronutrients',
    active: false,
    subtitle: 'Other',
    subcategories: ['Zinc', 'Boron', 'Calcium', 'Magnesium', 'Sulphur', 'Ferrous', 'Chelated Micronutrients'],
    productCount: 0
  },
  {
    title: 'Fertilizers',
    active: false,
    subtitle: 'Other',
    subcategories: ['Nitrogen Based Fertilizer', 'Phosphorus Based Fertilizer', 'Potash Based Fertilizer', 'NPK Fertilizer', 'Water Soluble Fertilizer', 'Micronutrient Fertilizer', 'Organic Fertilizer', 'Bio Fertilizer', 'Liquid Fertilizer'],
    productCount: 0
  },
  {
    title: 'Seeds',
    active: false,
    subtitle: 'Other',
    subcategories: ['Hybrid Seeds', 'Vegetable Seeds', 'Field Crop', 'Fruit Seeds', 'Flower Seeds', 'Fodder Seeds', 'Grass Seeds'],
    productCount: 0
  },
  {
    title: 'Farm Equipment / Tools',
    active: false,
    subtitle: 'Other',
    subcategories: ['Sprayer', 'Battery Sprayer', 'Knapsack Sprayer', 'Power Sprayer', 'Hand Tools', 'Garden Tools', 'Drip Tools'],
    productCount: 0
  }
];

export default function CategoriesPage() {
  const [categories, setCategories] = useState(categoriesData);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState<number | null>(null);

  const handleDeleteClick = (index: number) => {
    setCategoryToDelete(index);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (categoryToDelete !== null) {
      const newCategories = [...categories];
      newCategories.splice(categoryToDelete, 1);
      setCategories(newCategories);
      setIsDeleteModalOpen(false);
      setCategoryToDelete(null);
    }
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setCategoryToDelete(null);
  };

  return (
    <div className="cat-container">
      <div className="cat-header">
        <div className="cat-title-section">
          <h2 className="cat-title">Categories</h2>
          <p className="cat-subtitle">Manage your product categories and subcategories</p>
        </div>
        <Link href="/categories/create" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Plus size={18} />
          <span>Add Category</span>
        </Link>
      </div>

      <div className="cat-grid">
        {categories.map((category, index) => (
          <div key={index} className="cat-card">
            <div className="cat-card-body">
              <div className="cat-card-title-row">
                <h3 className="cat-card-title">{category.title}</h3>
                {category.active && <span className="cat-badge-active">Active</span>}
              </div>
              <div className="cat-card-subtitle">{category.subtitle}</div>
              
              <div className="cat-subcategories-section">
                <div className="cat-sub-label">Subcategories:</div>
                <div className="cat-pill-container">
                  {category.subcategories.length > 0 ? (
                    category.subcategories.map((sub, i) => (
                      <span key={i} className="cat-pill">{sub}</span>
                    ))
                  ) : (
                    <span className="text-muted" style={{ fontSize: '0.8rem' }}>None</span>
                  )}
                </div>
              </div>
            </div>
            
            <div className="cat-card-footer">
              <span className="cat-product-count">{category.productCount} products</span>
              <div className="cat-actions">
                <Link href={`/categories/${index + 1}`} className="cat-action-btn view">View</Link>
                <Link href={`/categories/${index + 1}/edit`} className="cat-action-btn edit">Edit</Link>
                <button className="cat-action-btn delete" onClick={() => handleDeleteClick(index)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal 
        isOpen={isDeleteModalOpen}
        type="confirm"
        title="Delete Category"
        message="Are you sure you want to delete this category? This action cannot be undone."
        confirmText="Delete"
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </div>
  );
}
