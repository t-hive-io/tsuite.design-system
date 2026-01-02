import React from 'react';
import './Forklift.css';

export interface ForkliftProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * forklift_
 * Maps to Figma component: "forklift_"
 */
export const Forklift: React.FC<ForkliftProps> = ({ className, children }) => {
  return (
    <div className={`forklift ${className || ''}`}>
      {children || 'forklift_'}
    </div>
  );
};
