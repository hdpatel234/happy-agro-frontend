"use client";

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import Link from 'next/link';
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
          <h2 className="products-title">Products</h2>
          <p className="products-subtitle">Manage your product inventory</p>
        </div>
        <Link href="/products/create" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Plus size={18} />
          <span>Add Product</span>
        </Link>
      </div>

      <div className="products-filter-bar">
        <input type="text" className="products-search-input" placeholder="Search products..." />
        
        <select className="products-select">
          <option>All Categories</option>
          <option>Category 1</option>
          <option>Category 2</option>
        </select>
        
        <select className="products-select">
          <option>All Brands</option>
          <option>IFFCO</option>
          <option>Bayer</option>
        </select>
        
        <select className="products-select">
          <option>All Stock</option>
          <option>In Stock</option>
          <option>Low Stock</option>
          <option>Out of Stock</option>
        </select>
        
        <button className="btn btn-primary products-filter-btn">Filter</button>
      </div>

      <div className="products-table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th>SKU</th>
              <th>STOCK</th>
              <th>PRICE</th>
              <th>STATUS</th>
              <th className="text-right">ACTIONS</th>
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
                      <a href="#" className="product-variant-link">{product.variants} variant(s)</a>
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
                    <span className="product-badge-active">Active</span>
                  )}
                </td>
                <td className="text-right product-actions">
                  <button className="product-action-btn view">View</button>
                  <button className="product-action-btn edit">Edit</button>
                  <button className="product-action-btn delete" onClick={() => handleDeleteClick(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal 
        isOpen={isDeleteModalOpen}
        type="confirm"
        title="Delete Product"
        message="Are you sure you want to delete this product? This action cannot be undone."
        confirmText="Delete"
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </div>
  );
}
