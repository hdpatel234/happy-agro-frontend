"use client";

import React, { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Bell, Globe, ChevronDown, Clock, Building2, Settings, List, LogOut, Menu } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
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
    const { language, setLanguage, t } = useLanguage();

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
        if (pathname === '/inventory/stock-overview') return t('title.stock_overview');
        const title = getPageTitle();
        return typeof title === 'string' ? title : t('title.owner_dashboard');
    };

    useEffect(() => {
        document.title = `Happy Agro - ${getPageTitleText()}`;
    }, [pathname, language]);

    const getPageTitle = () => {
        if (pathname === '/pos') return t('title.pos');
        if (pathname === '/khata/create') return t('title.add_ledger_entry');
        if (pathname === '/khata') return t('title.khata_book');
        if (pathname === '/categories/create') return t('title.create_category');
        if (pathname.includes('/edit') && pathname.startsWith('/categories/')) return t('title.edit_category');
        if (pathname.startsWith('/categories/') && pathname !== '/categories/create') return t('title.view_category');
        if (pathname === '/categories') return t('title.categories_subcategories');
        if (pathname === '/brands/create') return t('title.create_brand');
        if (pathname.includes('/edit') && pathname.startsWith('/brands/')) return t('title.edit_brand');
        if (pathname === '/brands') return t('title.brands');
        if (pathname === '/products/create') return t('title.create_product');
        if (pathname === '/products') return t('title.products');
        if (pathname === '/inventory/stock-overview') return <><span style={{ color: 'var(--accent-green)' }}>Inventory</span> / {t('title.stock_overview')}</>;
        if (pathname === '/inventory/movements') return t('title.stock_movements');
        if (pathname === '/inventory/batch-stock') return t('title.batch_stock');
        if (pathname === '/inventory/low-stock') return t('title.low_stock_alert');
        if (pathname === '/inventory') return t('title.inventory_management');
        if (pathname === '/orders/create') return t('title.create_order');
        if (pathname === '/orders') return t('title.orders_management');
        if (pathname === '/purchases/create') return t('title.add_purchase');
        if (pathname === '/purchases') return t('title.purchases');
        if (pathname === '/sales-returns') return t('title.sales_returns');
        if (pathname === '/purchase-returns') return t('title.purchase_returns');
        if (pathname === '/customers/create') return t('title.create_customer');
        if (pathname.match(/^\/customers\/[^\/]+\/edit$/)) return t('title.edit_customer');
        if (pathname.match(/^\/customers\/[^\/]+$/)) return t('title.customer_details');
        if (pathname === '/customers') return t('title.customers');
        if (pathname === '/suppliers/create') return t('title.create_supplier');
        if (pathname === '/suppliers') return t('title.suppliers');
        if (pathname === '/staff/create') return t('title.add_staff_member');
        if (pathname.match(/^\/staff\/permissions\/[^\/]+$/)) return t('title.manage_permissions');
        if (pathname === '/staff/permissions') return t('title.staff_permissions');
        if (pathname.match(/^\/staff\/[^\/]+\/edit$/)) return t('title.edit_staff_member');
        if (pathname.match(/^\/staff\/[^\/]+$/)) return t('title.staff_details');
        if (pathname === '/staff') return t('title.staff_management');
        if (pathname === '/expenses/create') return t('title.add_expense');
        if (pathname.match(/^\/expenses\/[^\/]+\/edit$/)) return t('title.edit_expense');
        if (pathname === '/expenses') return t('title.expenses');
        if (pathname === '/reports/sales') return t('title.sales_report');
        if (pathname === '/reports/purchases') return t('title.purchase_report');
        if (pathname === '/reports/profit-loss') return t('title.profit_loss_report');
        if (pathname === '/reports/stock') return t('title.stock_report');
        if (pathname === '/reports/credit') return t('title.credit_report');
        if (pathname === '/reports/sales-credit') return t('title.sales_credit_report');
        if (pathname === '/reports') return t('title.reports_analytics');
        if (pathname === '/backup') return t('title.backup');
        if (pathname === '/subscriptions') return t('title.subscription_management');
        if (pathname === '/weather') return t('title.weather_dashboard');
        return t('title.owner_dashboard');
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
                        <input type="text" placeholder={t('header.search_placeholder')} className="header-search-input" />
                        <span className="search-shortcut">Ctrl + K</span>
                    </div>
                )}
            </div>
            <div className="header-right">
                <div className="dropdown-container" ref={langRef}>
                    <button className="lang-selector" onClick={() => setIsLangOpen(!isLangOpen)}>
                        <Globe size={16} />
                        <span>{language === 'en' ? t('header.english') : language === 'hi' ? t('header.hindi') : t('header.gujarati')}</span>
                        <ChevronDown size={14} className="ml-1" />
                    </button>

                    {isLangOpen && (
                        <div className="dropdown-menu lang-dropdown">
                            <div className={`dropdown-item ${language === 'en' ? 'active' : ''}`} onClick={() => { setLanguage('en'); setIsLangOpen(false); }}>{t('header.english')}</div>
                            <div className={`dropdown-item ${language === 'hi' ? 'active' : ''}`} onClick={() => { setLanguage('hi'); setIsLangOpen(false); }}>{t('header.hindi')}</div>
                            <div className={`dropdown-item ${language === 'gu' ? 'active' : ''}`} onClick={() => { setLanguage('gu'); setIsLangOpen(false); }}>{t('header.gujarati')}</div>
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
                            {/* <div className="dropdown-header">
                                <span className="dropdown-label">{t('header.current_shop')}</span>
                                <div className="shop-info">
                                    <span className="shop-name">Happy Agro</span>
                                    <div className="plan-badge">{t('header.trial')}</div>
                                </div>
                                <div className="plan-name">{t('header.trial_plan')}</div>
                                <div className="time-remaining">
                                    <Clock size={14} />
                                    <span>{t('header.days_remaining')}</span>
                                </div>
                            </div> */}
                            <div className="dropdown-divider"></div>
                            <div className="dropdown-item">
                                <Building2 size={16} className="item-icon" />
                                <span>{t('header.shop_profile')}</span>
                            </div>
                            <div className="dropdown-item">
                                <Settings size={16} className="item-icon" />
                                <span>{t('header.settings')}</span>
                            </div>
                            <div className="dropdown-item">
                                <Building2 size={16} className="item-icon" />
                                <span>{t('header.shop_list')}</span>
                            </div>
                            <div className="dropdown-divider"></div>
                            <div className="dropdown-item text-danger">
                                <LogOut size={16} className="item-icon text-danger" />
                                <span>{t('header.logout')}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
