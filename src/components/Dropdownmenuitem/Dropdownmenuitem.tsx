import React from 'react';
import './Dropdownmenuitem.css';

export interface DropdownmenuitemProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Dropdown menu item
 * Maps to Figma component: "Dropdown menu item"
 */
export const Dropdownmenuitem: React.FC<DropdownmenuitemProps> = ({ className, children }) => {
  return (
    <div className={`dropdownmenuitem ${className || ''}`}>
      {children || 'Dropdown menu item'}
    </div>
  );
};
