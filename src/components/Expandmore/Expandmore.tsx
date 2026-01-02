import React from 'react';
import './Expandmore.css';

export interface ExpandmoreProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * expand_more
 * Maps to Figma component: "expand_more"
 */
export const Expandmore: React.FC<ExpandmoreProps> = ({ className, children }) => {
  return (
    <div className={`expandmore ${className || ''}`}>
      {children || 'expand_more'}
    </div>
  );
};
