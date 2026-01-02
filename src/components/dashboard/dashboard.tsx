import React from 'react';
import './dashboard.css';

export interface dashboardProps {
  className?: string;
  children?: React.ReactNode;
}

export const dashboard: React.FC<dashboardProps> = ({ className, children }) => {
  return (
    <div className={`dashboard ${className || ''}`}>
      {children || 'dashboard Component'}
    </div>
  );
};
