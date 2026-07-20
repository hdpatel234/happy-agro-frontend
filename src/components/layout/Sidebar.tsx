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
import { useLanguage } from '@/context/LanguageContext';
import './Sidebar.css';

interface SidebarProps {
  isMinimized?: boolean;
  toggleSidebar?: () => void;
  isMobile?: boolean;
}

export default function Sidebar({ isMinimized, toggleSidebar, isMobile }: SidebarProps) {
  const pathname = usePathname();
  const { t } = useLanguage();

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
          <span>{t('sidebar.shop_panel')}</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          <h3>{t('sidebar.main')}</h3>
          <Link href="/" className={getNavClass('/')}>
            <LayoutDashboard size={18} />
            <span>{t('sidebar.dashboard')}</span>
          </Link>
          <Link href="/pos" className={getNavClass('/pos')}>
            <Calculator size={18} />
            <span>{t('sidebar.pos')}</span>
          </Link>
          <Link href="/khata" className={getNavClass('/khata')}>
            <BookOpen size={18} />
            <span>{t('sidebar.khata')}</span>
          </Link>
        </div>

        <div className="nav-section">
          <h3>{t('sidebar.products')}</h3>
          <Link href="/categories" className={getNavClass('/categories')}>
            <FolderTree size={18} />
            <span>{t('sidebar.categories')}</span>
          </Link>
          <Link href="/brands" className={getNavClass('/brands')}>
            <Tag size={18} />
            <span>{t('sidebar.brands')}</span>
          </Link>
          <Link href="/products" className={getNavClass('/products')}>
            <Package size={18} />
            <span>{t('sidebar.products')}</span>
          </Link>
          <Link href="/inventory" className={getNavClass('/inventory')}>
            <Boxes size={18} />
            <span>{t('sidebar.inventory')}</span>
          </Link>
          {/* <Link href="#" className="nav-item">
            <LineChart size={18} />
            <span>Stock Analytics</span>
          </Link> */}
        </div>

        <div className="nav-section">
          <h3>{t('sidebar.orders_section')}</h3>
          <Link href="/orders" className={getNavClass('/orders')}>
            <ClipboardList size={18} />
            <span>{t('sidebar.orders')}</span>
          </Link>
          <Link href="/purchases" className={getNavClass('/purchases')}>
            <ShoppingCart size={18} />
            <span>{t('sidebar.purchases')}</span>
          </Link>
          <Link href="/sales-returns" className={getNavClass('/sales-returns')}>
            <span className="sidebar-text-icon">SR</span>
            <span>{t('sidebar.sales_return')}</span>
          </Link>
          <Link href="/purchase-returns" className={getNavClass('/purchase-returns')}>
            <span className="sidebar-text-icon">PR</span>
            <span>{t('sidebar.purchase_return')}</span>
          </Link>
        </div>

        <div className="nav-section">
          <h3>{t('sidebar.people')}</h3>
          <Link href="/customers" className={getNavClass('/customers')}>
            <Users size={18} />
            <span>{t('sidebar.customers')}</span>
          </Link>
          <Link href="/suppliers" className={getNavClass('/suppliers')}>
            <Factory size={18} />
            <span>{t('sidebar.suppliers')}</span>
          </Link>
          <Link href="/staff" className={getNavClass('/staff')}>
            <UserCircle size={18} />
            <span>{t('sidebar.staff')}</span>
          </Link>
          <Link href="/staff/permissions" className={getNavClass('/staff/permissions')}>
            <Key size={18} />
            <span>{t('sidebar.staff_permissions')}</span>
          </Link>
        </div>

        <div className="nav-section">
          <h3>{t('sidebar.financial')}</h3>
          <Link href="/expenses" className={getNavClass('/expenses')}>
            <Receipt size={18} />
            <span>{t('sidebar.expenses')}</span>
          </Link>
          <Link href="/reports" className={getNavClass('/reports')}>
            <BarChart3 size={18} />
            <span>{t('sidebar.reports')}</span>
          </Link>
          <Link href="/backup" className={getNavClass('/backup')}>
            <Save size={18} />
            <span>{t('sidebar.backup')}</span>
          </Link>
        </div>

        <div className="nav-section">
          <h3>{t('sidebar.settings')}</h3>
          <Link href="/subscriptions" className={getNavClass('/subscriptions')}>
            <CreditCard size={18} />
            <span>{t('sidebar.subscription')}</span>
          </Link>
        </div>

        <div className="nav-section">
          <h3>{t('sidebar.weather')}</h3>
          <Link href="/weather" className={getNavClass('/weather')}>
            <CloudSun size={18} />
            <span>{t('sidebar.weather_dashboard')}</span>
          </Link>
        </div>
      </nav>
    </aside>
    </>
  );
}
