import React from 'react';
import './Titleandsearch.css';

export interface TitleandsearchProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Title and search
 * Maps to Figma component: "Title and search"
 */
export const Titleandsearch: React.FC<TitleandsearchProps> = ({ className, children }) => {
  return (
    <div className={`titleandsearch ${className || ''}`}>
      {children || 'Title and search'}
    </div>
  );
};
