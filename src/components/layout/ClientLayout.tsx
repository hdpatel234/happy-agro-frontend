"use client";

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = () => {
      const auth = localStorage.getItem('isAuthenticated');
      if (auth === 'true') {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        if (pathname !== '/login') {
          router.push('/login');
        }
      }
    };
    checkAuth();
  }, [pathname, router]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsSidebarMinimized(true);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (pathname === '/login') {
    return <main className="auth-layout">{children}</main>;
  }

  if (isAuthenticated === null) return null; // Avoid rendering flash before checking auth

  if (!isAuthenticated) return null;

  const toggleSidebar = () => setIsSidebarMinimized(!isSidebarMinimized);

  return (
    <div className={`app-layout ${isSidebarMinimized ? 'sidebar-minimized' : ''} ${isMobile ? 'is-mobile' : ''}`}>
      <Sidebar isMinimized={isSidebarMinimized} toggleSidebar={toggleSidebar} isMobile={isMobile} />
      <div className="main-content">
        <Header toggleSidebar={toggleSidebar} isMobile={isMobile} />
        <main className="content-scrollable">
          {children}
        </main>
      </div>
    </div>
  );
}
