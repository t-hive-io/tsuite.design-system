import React from 'react';
import './Viewlist.css';

export interface ViewlistProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * view_list
 * Maps to Figma component: "view_list"
 */
export const Viewlist: React.FC<ViewlistProps> = ({ className, children }) => {
  return (
    <div className={`viewlist ${className || ''}`}>
      {children || 'view_list'}
    </div>
  );
};
