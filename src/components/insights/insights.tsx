import React from 'react';
import './insights.css';

export interface insightsProps {
  className?: string;
  children?: React.ReactNode;
}

export const insights: React.FC<insightsProps> = ({ className, children }) => {
  return (
    <div className={`insights ${className || ''}`}>
      {children || 'insights Component'}
    </div>
  );
};
