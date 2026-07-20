"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Globe, Eye, EyeOff, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import './page.css';

export default function LoginPage() {
    const router = useRouter();
    const { language, setLanguage, t } = useLanguage();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const langRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (langRef.current && !langRef.current.contains(event.target as Node)) {
                setIsLangOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (email && password) {
            // In-memory authentication placeholder
            router.push('/');
        } else {
            alert(t('login.alert_empty'));
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-card">

                {/* Top Header */}
                <div className="login-header">
                    <div className="dropdown-container" ref={langRef} style={{ marginLeft: 'auto', position: 'relative' }}>
                        <button className="lang-selector" onClick={() => setIsLangOpen(!isLangOpen)} type="button" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'transparent', border: '1px solid var(--border-color)', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', color: 'var(--text-primary)' }}>
                            <Globe size={16} />
                            <span>{language === 'en' ? t('header.english') : language === 'hi' ? t('header.hindi') : t('header.gujarati')}</span>
                            <ChevronDown size={14} className="ml-1" />
                        </button>

                        {isLangOpen && (
                            <div className="dropdown-menu lang-dropdown" style={{ position: 'absolute', top: '100%', right: 0, marginTop: '8px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px', boxShadow: 'var(--shadow-md)', minWidth: '150px', zIndex: 10 }}>
                                <div className={`dropdown-item ${language === 'en' ? 'active' : ''}`} style={{ padding: '10px 16px', cursor: 'pointer', color: 'var(--text-primary)' }} onClick={() => { setLanguage('en'); setIsLangOpen(false); }}>{t('header.english')}</div>
                                <div className={`dropdown-item ${language === 'hi' ? 'active' : ''}`} style={{ padding: '10px 16px', cursor: 'pointer', color: 'var(--text-primary)' }} onClick={() => { setLanguage('hi'); setIsLangOpen(false); }}>{t('header.hindi')}</div>
                                <div className={`dropdown-item ${language === 'gu' ? 'active' : ''}`} style={{ padding: '10px 16px', cursor: 'pointer', color: 'var(--text-primary)' }} onClick={() => { setLanguage('gu'); setIsLangOpen(false); }}>{t('header.gujarati')}</div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Logo and Titles */}
                <div className="login-branding">
                    <div className="login-logo-container">
                        <div className="login-logo-icon">HA</div>
                    </div>
                    <h1 className="login-title">{t('login.title')}</h1>
                    <p className="login-subtitle">{t('login.subtitle')}</p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleLogin} className="login-form">
                    <div className="login-form-group">
                        <label>{t('login.email_label')}</label>
                        <input
                            type="text"
                            className="login-input"
                            placeholder={t('login.email_placeholder')}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="login-form-group">
                        <label>{t('login.password_label')}</label>
                        <div className="login-input-wrapper">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="login-input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="login-pwd-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                                tabIndex={-1}
                            >
                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                        </div>
                    </div>

                    <div className="login-options">
                        <div className="login-checkbox">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">{t('login.remember_me')}</label>
                        </div>
                        <a href="#" className="login-forgot">{t('login.forgot_password')}</a>
                    </div>

                    <button type="submit" className="btn btn-green login-submit-btn">
                        {t('login.sign_in_btn')}
                    </button>
                </form>

            </div>
        </div>
    );
}
