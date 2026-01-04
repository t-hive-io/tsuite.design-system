import React from 'react';
import './Dropdowncollapse.css';
import IconSvg from '../assets/icons/Dropdowncollapse--1125-9850.svg?react';

export interface DropdowncollapseProps {
  className?: string;
}

/**
 * Dropdowncollapse
 *
 * Original name: Dropdown=Collapse
 * SVG file: Dropdowncollapse--1125-9850.svg
 */
export const Dropdowncollapse: React.FC<DropdowncollapseProps> = ({
  className,
}) => {
  return <IconSvg className={`dropdowncollapse ${className || ''}`} />;
};
