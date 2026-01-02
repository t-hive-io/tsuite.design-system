import React from 'react';
import './Duplicate2.css';

export interface Duplicate2Props {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Duplicate 2
 * Maps to Figma component: "Duplicate 2"
 */
export const Duplicate2: React.FC<Duplicate2Props> = ({ className, children }) => {
  return (
    <div className={`duplicate2 ${className || ''}`}>
      {children || 'Duplicate 2'}
    </div>
  );
};
