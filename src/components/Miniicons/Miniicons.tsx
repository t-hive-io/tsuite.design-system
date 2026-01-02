import React from 'react';
import './Miniicons.css';

export interface MiniiconsProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Mini icons
 * Maps to Figma component: "Mini icons"
 */
export const Miniicons: React.FC<MiniiconsProps> = ({ className, children }) => {
  return (
    <div className={`miniicons ${className || ''}`}>
      {children || 'Mini icons'}
    </div>
  );
};
