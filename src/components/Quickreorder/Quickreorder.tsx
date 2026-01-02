import React from 'react';
import './Quickreorder.css';

export interface QuickreorderProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * quick_reorder
 * Maps to Figma component: "quick_reorder"
 */
export const Quickreorder: React.FC<QuickreorderProps> = ({ className, children }) => {
  return (
    <div className={`quickreorder ${className || ''}`}>
      {children || 'quick_reorder'}
    </div>
  );
};
