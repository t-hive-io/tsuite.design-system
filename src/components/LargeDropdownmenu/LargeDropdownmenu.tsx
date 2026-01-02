import React from 'react';
import './LargeDropdownmenu.css';

export interface LargeDropdownmenuProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Large - Dropdown menu
 * Maps to Figma component: "Large - Dropdown menu"
 */
export const LargeDropdownmenu: React.FC<LargeDropdownmenuProps> = ({ className, children }) => {
  return (
    <div className={`largedropdownmenu ${className || ''}`}>
      {children || 'Large - Dropdown menu'}
    </div>
  );
};
