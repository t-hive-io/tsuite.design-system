import React from 'react';
import './Filteralt.css';

export interface FilteraltProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * filter_alt
 * Maps to Figma component: "filter_alt"
 */
export const Filteralt: React.FC<FilteraltProps> = ({ className, children }) => {
  return (
    <div className={`filteralt ${className || ''}`}>
      {children || 'filter_alt'}
    </div>
  );
};
