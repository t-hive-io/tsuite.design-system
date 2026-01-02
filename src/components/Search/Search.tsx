import React from 'react';
import './Search.css';

export interface SearchProps {
  className?: string;
  children?: React.ReactNode;
}

export const Search: React.FC<SearchProps> = ({ className, children }) => {
  return (
    <div className={`search ${className || ''}`}>
      {children || 'Search Component'}
    </div>
  );
};
