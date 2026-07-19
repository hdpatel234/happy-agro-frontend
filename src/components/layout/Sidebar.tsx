"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard, Calculator, BookOpen,
  FolderTree, Tag, Package, Boxes, LineChart,
  ClipboardList, ShoppingCart, Undo2, RefreshCcw,
  Users, Factory, UserCircle, Lock, Key,
  Receipt, BarChart3, Save,
  CreditCard, CloudSun
} from 'lucide-react';
import './Sidebar.css';

interface SidebarProps {
  isMinimized?: boolean;
  toggleSidebar?: () => void;
  isMobile?: boolean;
}

export default function Sidebar({ isMinimized, toggleSidebar, isMobile }: SidebarProps) {
  const pathname = usePathname();

  const getNavClass = (path: string) => {
    if (path === '/') {
      return pathname === '/' ? 'nav-item active' : 'nav-item';
    }
    // Special handling to prevent /staff from capturing /staff/permissions
    if (path === '/staff') {
      return (pathname === '/staff' || (pathname.startsWith('/staff/') && !pathname.startsWith('/staff/permissions'))) 
        ? 'nav-item active' 
        : 'nav-item';
    }
    return pathname.startsWith(path) ? 'nav-item active' : 'nav-item';
  };

  return (
    <>
      {isMobile && !isMinimized && (
        <div 
          className="sidebar-overlay" 
          onClick={toggleSidebar}
        />
      )}
      <aside className={`sidebar ${isMinimized ? 'minimized' : ''} ${isMobile ? 'mobile' : ''}`}>
        <div className="sidebar-header">
        <div className="logo-icon">HA</div>
        <div className="logo-text">
          <h1>Happy Agro</h1>
          <span>SHOP PANEL</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          <h3>MAIN</h3>
          <Link href="/" className={getNavClass('/')}>
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </Link>
          <Link href="/pos" className={getNavClass('/pos')}>
            <Calculator size={18} />
            <span>POS / Billing</span>
          </Link>
          <Link href="/khata" className={getNavClass('/khata')}>
            <BookOpen size={18} />
            <span>Khata (Udhar)</span>
          </Link>
        </div>

        <div className="nav-section">
          <h3>PRODUCTS</h3>
          <Link href="/categories" className={getNavClass('/categories')}>
            <FolderTree size={18} />
            <span>Categories</span>
          </Link>
          <Link href="/brands" className={getNavClass('/brands')}>
            <Tag size={18} />
            <span>Brands</span>
          </Link>
          <Link href="/products" className={getNavClass('/products')}>
            <Package size={18} />
            <span>Products</span>
          </Link>
          <Link href="/inventory" className={getNavClass('/inventory')}>
            <Boxes size={18} />
            <span>Inventory / Stock</span>
          </Link>
          {/* <Link href="#" className="nav-item">
            <LineChart size={18} />
            <span>Stock Analytics</span>
          </Link> */}
        </div>

        <div className="nav-section">
          <h3>ORDERS</h3>
          <Link href="/orders" className={getNavClass('/orders')}>
            <ClipboardList size={18} />
            <span>Orders</span>
          </Link>
          <Link href="/purchases" className={getNavClass('/purchases')}>
            <ShoppingCart size={18} />
            <span>Purchases</span>
          </Link>
          <Link href="/sales-returns" className={getNavClass('/sales-returns')}>
            <span className="sidebar-text-icon">SR</span>
            <span>Sales Return</span>
          </Link>
          <Link href="/purchase-returns" className={getNavClass('/purchase-returns')}>
            <span className="sidebar-text-icon">PR</span>
            <span>Purchase Return</span>
          </Link>
        </div>

        <div className="nav-section">
          <h3>PEOPLE</h3>
          <Link href="/customers" className={getNavClass('/customers')}>
            <Users size={18} />
            <span>Customers</span>
          </Link>
          <Link href="/suppliers" className={getNavClass('/suppliers')}>
            <Factory size={18} />
            <span>Suppliers</span>
          </Link>
          <Link href="/staff" className={getNavClass('/staff')}>
            <UserCircle size={18} />
            <span>Staff</span>
          </Link>
          <Link href="/staff/permissions" className={getNavClass('/staff/permissions')}>
            <Key size={18} />
            <span>Staff Permissions</span>
          </Link>
        </div>

        <div className="nav-section">
          <h3>FINANCIAL</h3>
          <Link href="/expenses" className={getNavClass('/expenses')}>
            <Receipt size={18} />
            <span>Expenses</span>
          </Link>
          <Link href="#" className="nav-item">
            <BarChart3 size={18} />
            <span>Reports</span>
          </Link>
          <Link href="#" className="nav-item">
            <Save size={18} />
            <span>Backup</span>
          </Link>
        </div>

        <div className="nav-section">
          <h3>SETTINGS</h3>
          <Link href="#" className="nav-item">
            <CreditCard size={18} />
            <span>Subscription</span>
          </Link>
        </div>

        <div className="nav-section">
          <h3>WEATHER</h3>
          <Link href="#" className="nav-item">
            <CloudSun size={18} />
            <span>Weather Dashboard</span>
          </Link>
        </div>
      </nav>
    </aside>
    </>
  );
}
