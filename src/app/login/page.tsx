"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Globe, Eye, EyeOff } from 'lucide-react';
import './page.css';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      // In-memory authentication placeholder
      router.push('/');
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        
        {/* Top Header */}
        <div className="login-header">
          <Link href="/" className="login-back-link">
            &larr; Back to Home
          </Link>
          <div className="login-lang">
            <Globe size={14} />
            <span>English</span>
          </div>
        </div>

        {/* Logo and Titles */}
        <div className="login-branding">
          <div className="login-logo-container">
             <div className="login-logo-icon">HA</div>
          </div>
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">Sign in to your account</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="login-form">
          <div className="login-form-group">
            <label>Email or Mobile Number</label>
            <input 
              type="text" 
              className="login-input" 
              placeholder="Enter email or mobile number" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="login-form-group">
            <label>Password</label>
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
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#" className="login-forgot">Forgot password?</a>
          </div>

          <button type="submit" className="btn btn-green login-submit-btn">
            Sign In
          </button>
        </form>

      </div>
    </div>
  );
}
