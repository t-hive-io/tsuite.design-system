import React from 'react';
import './Filteraltoff.css';

export interface FilteraltoffProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * filter_alt_off
 * Maps to Figma component: "filter_alt_off"
 */
export const Filteraltoff: React.FC<FilteraltoffProps> = ({ className, children }) => {
  return (
    <div className={`filteraltoff ${className || ''}`}>
      {children || 'filter_alt_off'}
    </div>
  );
};
