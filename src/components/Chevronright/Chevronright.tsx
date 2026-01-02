import React from 'react';
import './Chevronright.css';

export interface ChevronrightProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * chevron_right
 * Maps to Figma component: "chevron_right"
 */
export const Chevronright: React.FC<ChevronrightProps> = ({ className, children }) => {
  return (
    <div className={`chevronright ${className || ''}`}>
      {children || 'chevron_right'}
    </div>
  );
};
