import React from 'react';
import './Dropdownexpand.css';
import IconSvg from '../assets/icons/Dropdownexpand--1125-9842.svg?react';

export interface DropdownexpandProps {
  className?: string;
}

/**
 * Dropdownexpand
 *
 * Original name: Dropdown=Expand
 * SVG file: Dropdownexpand--1125-9842.svg
 */
export const Dropdownexpand: React.FC<DropdownexpandProps> = ({
  className,
}) => {
  return <IconSvg className={`dropdownexpand ${className || ''}`} />;
};
