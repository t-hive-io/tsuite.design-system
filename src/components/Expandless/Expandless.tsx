import React from 'react';
import './Expandless.css';

export interface ExpandlessProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * expand_less
 * Maps to Figma component: "expand_less"
 */
export const Expandless: React.FC<ExpandlessProps> = ({ className, children }) => {
  return (
    <div className={`expandless ${className || ''}`}>
      {children || 'expand_less'}
    </div>
  );
};
