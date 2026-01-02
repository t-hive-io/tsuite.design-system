import React from 'react';
import './Searchoff.css';

export interface SearchoffProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * search_off
 * Maps to Figma component: "search_off"
 */
export const Searchoff: React.FC<SearchoffProps> = ({ className, children }) => {
  return (
    <div className={`searchoff ${className || ''}`}>
      {children || 'search_off'}
    </div>
  );
};
