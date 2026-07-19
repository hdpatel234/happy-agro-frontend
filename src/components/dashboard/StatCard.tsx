import React from 'react';
import './StatCard.css';

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
  iconBg?: string;
  iconColor?: string;
  progressValue?: number;
  progressColor?: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
  iconBg,
  iconColor,
  progressValue,
  progressColor
}: StatCardProps) {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <div className="stat-info">
          <h4 className="stat-title">{title}</h4>
          <div className="stat-value">{value}</div>
        </div>
        {icon && (
          <div 
            className="stat-icon" 
            style={{ backgroundColor: iconBg, color: iconColor }}
          >
            {icon}
          </div>
        )}
      </div>
      <div className="stat-subtitle">{subtitle}</div>
      {progressValue !== undefined && (
        <div className="stat-progress">
          <div 
            className="stat-progress-bar" 
            style={{ width: `${progressValue}%`, backgroundColor: progressColor }}
          ></div>
        </div>
      )}
    </div>
  );
}
