import React from 'react';
import './SmallDropdownmenu.css';
import IconSvg from '../assets/icons/SmallDropdownmenu--3153-3102.svg?react';

export interface SmallDropdownmenuProps {
  className?: string;
}

/**
 * SmallDropdownmenu
 *
 * Original name: Small - Dropdown menu
 * SVG file: SmallDropdownmenu--3153-3102.svg
 */
export const SmallDropdownmenu: React.FC<SmallDropdownmenuProps> = ({
  className,
}) => {
  return <IconSvg className={`smalldropdownmenu ${className || ''}`} />;
};
