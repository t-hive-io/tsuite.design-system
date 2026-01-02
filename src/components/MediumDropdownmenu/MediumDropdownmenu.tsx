import React from 'react';
import './MediumDropdownmenu.css';

export interface MediumDropdownmenuProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Medium - Dropdown menu
 * Maps to Figma component: "Medium - Dropdown menu"
 */
export const MediumDropdownmenu: React.FC<MediumDropdownmenuProps> = ({ className, children }) => {
  return (
    <div className={`mediumdropdownmenu ${className || ''}`}>
      {children || 'Medium - Dropdown menu'}
    </div>
  );
};
