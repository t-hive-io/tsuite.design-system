import React from 'react';
import './Tableheader.css';

export interface TableheaderProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Table header
 * Maps to Figma component: "Table header"
 */
export const Tableheader: React.FC<TableheaderProps> = ({ className, children }) => {
  return (
    <div className={`tableheader ${className || ''}`}>
      {children || 'Table header'}
    </div>
  );
};
