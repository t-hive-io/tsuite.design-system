import React from 'react';
import './Tablerows.css';

export interface TablerowsProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Table rows
 * Maps to Figma component: "Table rows"
 */
export const Tablerows: React.FC<TablerowsProps> = ({ className, children }) => {
  return (
    <div className={`tablerows ${className || ''}`}>
      {children || 'Table rows'}
    </div>
  );
};
