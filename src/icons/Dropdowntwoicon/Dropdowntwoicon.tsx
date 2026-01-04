import React from 'react';
import './Dropdowntwoicon.css';
import IconSvg from '../assets/icons/Dropdowntwoicon--5247-39268.svg?react';

export interface DropdowntwoiconProps {
  className?: string;
}

/**
 * Dropdowntwoicon
 *
 * Original name: Dropdown=Two icon
 * SVG file: Dropdowntwoicon--5247-39268.svg
 */
export const Dropdowntwoicon: React.FC<DropdowntwoiconProps> = ({
  className,
}) => {
  return <IconSvg className={`dropdowntwoicon ${className || ''}`} />;
};
