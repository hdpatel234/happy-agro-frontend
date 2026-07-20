"use client";

import React from 'react';
import { MapPin, Search } from 'lucide-react';
import './page.css';

export default function WeatherDashboardPage() {
  return (
    <div className="wx-container">
      {/* Header & Search */}
      <div className="wx-header-flex">
        <div className="wx-title-section">
          <h2 className="wx-title">🌤️ Weather Dashboard</h2>
          <p className="wx-subtitle">Live forecast powered by <span className="text-green-600 font-500">Open-Meteo</span> (free, no API key)</p>
        </div>
        
        <div className="wx-search-section">
          <input 
            type="text" 
            placeholder="Search city..." 
            className="wx-search-input"
          />
          <button className="btn btn-green wx-btn-search">
            Search
          </button>
          <button className="btn wx-btn-location">
            <MapPin size={18} className="text-red-500" />
          </button>
        </div>
      </div>

      {/* Main Weather Hero Card */}
      <div className="wx-hero-card">
        {/* Left Side */}
        <div className="wx-hero-left">
          <span className="wx-location-text">My Location</span>
          <div className="wx-hero-main-temp">
            <span className="text-6xl">🌧️</span> {/* Big weather icon mock */}
            <div className="wx-hero-temp-block">
              <h1 className="wx-hero-deg">31°C</h1>
              <span className="wx-hero-desc">Light drizzle</span>
            </div>
          </div>
        </div>

        {/* Right Side (2x2 Grid) */}
        <div className="wx-hero-stats">
          <div className="wx-stat-box">
            <span className="wx-stat-label">FEELS LIKE</span>
            <span className="wx-stat-value">37°C</span>
          </div>
          <div className="wx-stat-box">
            <span className="wx-stat-label">HUMIDITY</span>
            <span className="wx-stat-value">66%</span>
          </div>
          <div className="wx-stat-box">
            <span className="wx-stat-label">WIND</span>
            <span className="wx-stat-value">11 km/h</span>
          </div>
          <div className="wx-stat-box">
            <span className="wx-stat-label">UPDATED</span>
            <span className="wx-stat-value">11:00</span>
          </div>
        </div>
      </div>

      {/* 7-Day Forecast */}
      <div className="wx-section-title">
        <h4>7-Day Forecast</h4>
      </div>
      
      <div className="wx-forecast-grid">
        {/* Card 1 */}
        <div className="wx-forecast-card">
          <div className="wx-fc-header">
            <span className="wx-fc-day text-green-600 font-700">TODAY</span>
            <span className="wx-fc-date">20/7</span>
          </div>
          <div className="wx-fc-icon">🌦️</div>
          <span className="wx-fc-desc">Slight showers</span>
          <div className="wx-fc-temps">
            <span className="wx-temp-high">33°</span>
            <span className="wx-temp-low">27°</span>
          </div>
          <div className="wx-fc-precip">
            💧 6.7 mm
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="wx-forecast-card">
          <div className="wx-fc-header">
            <span className="wx-fc-day">TUE</span>
            <span className="wx-fc-date">21/7</span>
          </div>
          <div className="wx-fc-icon">🌦️</div>
          <span className="wx-fc-desc">Slight showers</span>
          <div className="wx-fc-temps">
            <span className="wx-temp-high">33°</span>
            <span className="wx-temp-low">26°</span>
          </div>
          <div className="wx-fc-precip">
            💧 5.6 mm
          </div>
        </div>

        {/* Card 3 */}
        <div className="wx-forecast-card">
          <div className="wx-fc-header">
            <span className="wx-fc-day">WED</span>
            <span className="wx-fc-date">22/7</span>
          </div>
          <div className="wx-fc-icon">🌧️</div>
          <span className="wx-fc-desc">Moderate drizzle</span>
          <div className="wx-fc-temps">
            <span className="wx-temp-high">31°</span>
            <span className="wx-temp-low">26°</span>
          </div>
          <div className="wx-fc-precip">
            💧 4.2 mm
          </div>
        </div>

        {/* Card 4 */}
        <div className="wx-forecast-card">
          <div className="wx-fc-header">
            <span className="wx-fc-day">THU</span>
            <span className="wx-fc-date">23/7</span>
          </div>
          <div className="wx-fc-icon">🌦️</div>
          <span className="wx-fc-desc">Light drizzle</span>
          <div className="wx-fc-temps">
            <span className="wx-temp-high">31°</span>
            <span className="wx-temp-low">26°</span>
          </div>
          <div className="wx-fc-precip">
            💧 2.0 mm
          </div>
        </div>

        {/* Card 5 */}
        <div className="wx-forecast-card">
          <div className="wx-fc-header">
            <span className="wx-fc-day">FRI</span>
            <span className="wx-fc-date">24/7</span>
          </div>
          <div className="wx-fc-icon">🌦️</div>
          <span className="wx-fc-desc">Light drizzle</span>
          <div className="wx-fc-temps">
            <span className="wx-temp-high">32°</span>
            <span className="wx-temp-low">26°</span>
          </div>
          <div className="wx-fc-precip">
            💧 0.3 mm
          </div>
        </div>

        {/* Card 6 */}
        <div className="wx-forecast-card">
          <div className="wx-fc-header">
            <span className="wx-fc-day">SAT</span>
            <span className="wx-fc-date">25/7</span>
          </div>
          <div className="wx-fc-icon">🌧️</div>
          <span className="wx-fc-desc">Moderate drizzle</span>
          <div className="wx-fc-temps">
            <span className="wx-temp-high">29°</span>
            <span className="wx-temp-low">27°</span>
          </div>
          <div className="wx-fc-precip">
            💧 5.4 mm
          </div>
        </div>

        {/* Card 7 */}
        <div className="wx-forecast-card">
          <div className="wx-fc-header">
            <span className="wx-fc-day">SUN</span>
            <span className="wx-fc-date">26/7</span>
          </div>
          <div className="wx-fc-icon">🌧️</div>
          <span className="wx-fc-desc">Moderate showers</span>
          <div className="wx-fc-temps">
            <span className="wx-temp-high">26°</span>
            <span className="wx-temp-low">25°</span>
          </div>
          <div className="wx-fc-precip">
            💧 61.2 mm
          </div>
        </div>
      </div>

      {/* Agricultural Tips Alert Box */}
      <div className="wx-alert-box">
        <h4 className="wx-alert-title">🌾 Agricultural Tips</h4>
        <ul className="wx-alert-list">
          <li>Rain expected today — avoid pesticide/fertilizer spraying.</li>
        </ul>
      </div>

    </div>
  );
}
