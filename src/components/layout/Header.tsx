"use client";

import React, { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Bell, Globe, ChevronDown, Clock, Building2, Settings, List, LogOut, Menu } from 'lucide-react';
import './Header.css';

interface HeaderProps {
  toggleSidebar?: () => void;
  isMobile?: boolean;
}

export default function Header({ toggleSidebar, isMobile }: HeaderProps) {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  const langRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getPageTitleText = () => {
    if (pathname === '/inventory/stock-overview') return 'Inventory / Stock Overview';
    const title = getPageTitle();
    return typeof title === 'string' ? title : 'Owner Dashboard';
  };

  useEffect(() => {
    document.title = `Happy Agro - ${getPageTitleText()}`;
  }, [pathname]);

  const getPageTitle = () => {
    if (pathname === '/pos') return 'Point of Sale';
    if (pathname === '/khata/create') return 'Add Ledger Entry';
    if (pathname === '/khata') return 'Khata Book - Manage Customers & Suppliers';
    if (pathname === '/categories/create') return 'Create Category';
    if (pathname.includes('/edit') && pathname.startsWith('/categories/')) return 'Edit Category';
    if (pathname.startsWith('/categories/') && pathname !== '/categories/create') return 'View Category';
    if (pathname === '/categories') return 'Categories & Subcategories';
    if (pathname === '/brands/create') return 'Create Brand';
    if (pathname === '/brands') return 'Brands';
    if (pathname === '/products/create') return 'Create Product';
    if (pathname === '/products') return 'Products';
    if (pathname === '/inventory/stock-overview') return <><span style={{color: 'var(--accent-green)'}}>Inventory</span> / Stock Overview</>;
    if (pathname === '/inventory/movements') return 'Stock Movements';
    if (pathname === '/inventory/batch-stock') return 'Batch Stock';
    if (pathname === '/inventory/low-stock') return 'Low Stock Alert';
    if (pathname === '/inventory') return 'Inventory Management';
    if (pathname === '/orders/create') return 'Create Order';
    if (pathname === '/orders') return 'Orders Management';
    if (pathname === '/purchases/create') return 'Add Purchase';
    if (pathname === '/purchases') return 'Purchases';
    if (pathname === '/sales-returns') return 'Sales Returns';
    if (pathname === '/purchase-returns') return 'Purchase Returns';
    if (pathname === '/customers/create') return 'Create Customer';
    if (pathname.match(/^\/customers\/[^\/]+\/edit$/)) return 'Edit Customer';
    if (pathname.match(/^\/customers\/[^\/]+$/)) return 'Customer Details';
    if (pathname === '/customers') return 'Customers';
    if (pathname === '/suppliers/create') return 'Create Supplier';
    if (pathname === '/suppliers') return 'Suppliers';
    if (pathname === '/staff/create') return 'Add Staff Member';
    if (pathname.match(/^\/staff\/permissions\/[^\/]+$/)) return 'Manage Permissions';
    if (pathname === '/staff/permissions') return 'Staff Permissions';
    if (pathname.match(/^\/staff\/[^\/]+\/edit$/)) return 'Edit Staff Member';
    if (pathname.match(/^\/staff\/[^\/]+$/)) return 'Staff Details';
    if (pathname === '/staff') return 'Staff Management';
    if (pathname === '/expenses/create') return 'Add Expense';
    if (pathname === '/expenses') return 'Expenses';
    return 'Owner Dashboard';
  };

  return (
    <header className="header">
      <div className="header-left">
        <button className="header-hamburger" onClick={toggleSidebar}>
          <Menu size={20} />
        </button>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>{getPageTitle()}</h2>
        
        {pathname === '/inventory/stock-overview' && (
          <div className="header-search-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" placeholder="Search products, categories..." className="header-search-input" />
            <span className="search-shortcut">Ctrl + K</span>
          </div>
        )}
      </div>
      <div className="header-right">
        <div className="dropdown-container" ref={langRef}>
          <button className="lang-selector" onClick={() => setIsLangOpen(!isLangOpen)}>
            <Globe size={16} />
            <span>English</span>
            <ChevronDown size={14} className="ml-1" />
          </button>
          
          {isLangOpen && (
            <div className="dropdown-menu lang-dropdown">
              <div className="dropdown-item active">English</div>
              <div className="dropdown-item">हिंदी</div>
              <div className="dropdown-item">ગુજરાતી</div>
              <div className="dropdown-item">मराठी</div>
            </div>
          )}
        </div>

        <button className="notification-btn">
          <Bell size={18} />
          <span className="badge">0</span>
        </button>

        <div className="dropdown-container" ref={profileRef}>
          <div className="user-profile" onClick={() => setIsProfileOpen(!isProfileOpen)}>
            <span>Happy Agro</span>
            <div className="avatar">H</div>
            <ChevronDown size={14} className="text-muted" />
          </div>

          {isProfileOpen && (
            <div className="dropdown-menu profile-dropdown">
              <div className="dropdown-header">
                <span className="dropdown-label">CURRENT SHOP</span>
                <div className="shop-info">
                  <span className="shop-name">Happy Agro</span>
                  <div className="plan-badge">Trial</div>
                </div>
                <div className="plan-name">Trial-plan Plan</div>
                <div className="time-remaining">
                  <Clock size={14} />
                  <span>14 days remaining</span>
                </div>
              </div>
              <div className="dropdown-divider"></div>
              <div className="dropdown-item">
                <Building2 size={16} className="item-icon" />
                <span>Shop Profile</span>
              </div>
              <div className="dropdown-item">
                <Settings size={16} className="item-icon" />
                <span>Settings</span>
              </div>
              <div className="dropdown-item">
                <Building2 size={16} className="item-icon" />
                <span>Shop List</span>
              </div>
              <div className="dropdown-divider"></div>
              <div className="dropdown-item text-danger">
                <LogOut size={16} className="item-icon text-danger" />
                <span>Logout</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
