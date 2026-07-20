"use client";

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

const initialProductsData = [
  { 
    id: 1,
    name: 'Test', 
    subtitle: 'other',
    variants: 1,
    category: 'N/A', 
    brand: 'IFFCO', 
    brandSubtitle: 'IFFCO',
    sku: 'SKU_UPC2LZJO', 
    stock: 99,
    stockUnit: 'Box',
    price: 120, 
    status: 'Active' 
  }
];

export default function ProductsPage() {
  const { t } = useLanguage();
  const [products, setProducts] = useState(initialProductsData);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<number | null>(null);

  const handleDeleteClick = (index: number) => {
    setProductToDelete(index);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (productToDelete !== null) {
      const newProducts = [...products];
      newProducts.splice(productToDelete, 1);
      setProducts(newProducts);
      setIsDeleteModalOpen(false);
      setProductToDelete(null);
    }
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setProductToDelete(null);
  };

  return (
    <div className="products-container">
      <div className="products-header">
        <div className="products-title-section">
          <h2 className="products-title">{t('products.title')}</h2>
          <p className="products-subtitle">{t('products.subtitle')}</p>
        </div>
        <Link href="/products/create" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Plus size={18} />
          <span>{t('products.add_product')}</span>
        </Link>
      </div>

      <div className="products-filter-bar">
        <input type="text" className="products-search-input" placeholder={t('products.search_placeholder')} />
        
        <select className="products-select">
          <option>{t('products.all_categories')}</option>
          <option>Category 1</option>
          <option>Category 2</option>
        </select>
        
        <select className="products-select">
          <option>{t('products.all_brands')}</option>
          <option>IFFCO</option>
          <option>Bayer</option>
        </select>
        
        <select className="products-select">
          <option>{t('products.all_stock')}</option>
          <option>{t('products.in_stock')}</option>
          <option>{t('products.low_stock')}</option>
          <option>{t('products.out_of_stock')}</option>
        </select>
        
        <button className="btn btn-primary products-filter-btn">{t('products.filter')}</button>
      </div>

      <div className="products-table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>{t('products.table.product')}</th>
              <th>{t('products.table.category')}</th>
              <th>{t('products.table.brand')}</th>
              <th>{t('products.table.sku')}</th>
              <th>{t('products.table.stock')}</th>
              <th>{t('products.table.price')}</th>
              <th>{t('products.table.status')}</th>
              <th className="text-right">{t('products.table.actions')}</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>
                  <div className="product-name-col">
                    <span className="fw-600 product-name">{product.name}</span>
                    <span className="product-subtext">{product.subtitle}</span>
                    {product.variants > 0 && (
                      <a href="#" className="product-variant-link">{product.variants} {t('pos.variant_s')}</a>
                    )}
                  </div>
                </td>
                <td className="text-muted">{product.category}</td>
                <td>
                  <div className="product-brand-col">
                    <span className="text-primary">{product.brand}</span>
                    <span className="product-subtext-light">{product.brandSubtitle}</span>
                  </div>
                </td>
                <td className="text-muted">{product.sku}</td>
                <td>
                  <span className="product-stock-val">{product.stock} {product.stockUnit}</span>
                </td>
                <td>
                  <span className="product-price-val">₹{product.price}</span>
                </td>
                <td>
                  {product.status === 'Active' && (
                    <span className="product-badge-active">{t('products.active')}</span>
                  )}
                </td>
                <td className="text-right product-actions">
                  <button className="product-action-btn view">{t('products.view')}</button>
                  <button className="product-action-btn edit">{t('products.edit')}</button>
                  <button className="product-action-btn delete" onClick={() => handleDeleteClick(index)}>{t('products.delete')}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal 
        isOpen={isDeleteModalOpen}
        type="confirm"
        title={t('products.delete_modal_title')}
        message={t('products.delete_modal_message')}
        confirmText={t('products.confirm_delete')}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </div>
  );
}
