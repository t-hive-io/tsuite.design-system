import React from 'react';
import './Viewinar.css';

export interface ViewinarProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * view_in_ar
 * Maps to Figma component: "view_in_ar"
 */
export const Viewinar: React.FC<ViewinarProps> = ({ className, children }) => {
  return (
    <div className={`viewinar ${className || ''}`}>
      {children || 'view_in_ar'}
    </div>
  );
};
