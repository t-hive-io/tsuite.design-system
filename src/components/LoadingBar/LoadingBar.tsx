import React from 'react';
import './LoadingBar.css';

export interface LoadingBarProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Loading Bar
 * Maps to Figma component: "Loading Bar"
 */
export const LoadingBar: React.FC<LoadingBarProps> = ({ className, children }) => {
  return (
    <div className={`loadingbar ${className || ''}`}>
      {children || 'Loading Bar'}
    </div>
  );
};
