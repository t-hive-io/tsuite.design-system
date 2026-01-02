import React from 'react';
import './Tabitem.css';

export interface TabitemProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Tab item
 * Maps to Figma component: "Tab item"
 */
export const Tabitem: React.FC<TabitemProps> = ({ className, children }) => {
  return (
    <div className={`tabitem ${className || ''}`}>
      {children || 'Tab item'}
    </div>
  );
};
