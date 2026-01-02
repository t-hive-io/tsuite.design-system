import React from 'react';
import './Loadhandling.css';

export interface LoadhandlingProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Load handling
 * Maps to Figma component: "Load handling"
 */
export const Loadhandling: React.FC<LoadhandlingProps> = ({ className, children }) => {
  return (
    <div className={`loadhandling ${className || ''}`}>
      {children || 'Load handling'}
    </div>
  );
};
