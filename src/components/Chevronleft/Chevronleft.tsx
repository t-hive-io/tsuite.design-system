import React from 'react';
import './Chevronleft.css';

export interface ChevronleftProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * chevron_left
 * Maps to Figma component: "chevron_left"
 */
export const Chevronleft: React.FC<ChevronleftProps> = ({ className, children }) => {
  return (
    <div className={`chevronleft ${className || ''}`}>
      {children || 'chevron_left'}
    </div>
  );
};
