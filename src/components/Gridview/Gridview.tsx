import React from 'react';
import './Gridview.css';

export interface GridviewProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * grid_view
 * Maps to Figma component: "grid_view"
 */
export const Gridview: React.FC<GridviewProps> = ({ className, children }) => {
  return (
    <div className={`gridview ${className || ''}`}>
      {children || 'grid_view'}
    </div>
  );
};
