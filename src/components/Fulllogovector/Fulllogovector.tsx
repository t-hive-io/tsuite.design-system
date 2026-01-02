import React from 'react';
import './Fulllogovector.css';

export interface FulllogovectorProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Full-logo-vector
 * Maps to Figma component: "Full-logo-vector"
 */
export const Fulllogovector: React.FC<FulllogovectorProps> = ({ className, children }) => {
  return (
    <div className={`fulllogovector ${className || ''}`}>
      {children || 'Full-logo-vector'}
    </div>
  );
};
