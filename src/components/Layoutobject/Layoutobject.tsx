import React from 'react';
import './Layoutobject.css';

export interface LayoutobjectProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Layout object
 * Maps to Figma component: "Layout object"
 */
export const Layoutobject: React.FC<LayoutobjectProps> = ({ className, children }) => {
  return (
    <div className={`layoutobject ${className || ''}`}>
      {children || 'Layout object'}
    </div>
  );
};
