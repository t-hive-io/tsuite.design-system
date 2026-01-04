import React from 'react';
import './Property1dropdownadvanced.css';
import IconSvg from '../assets/icons/Property1dropdownadvanced--3811-36789.svg?react';

export interface Property1dropdownadvancedProps {
  className?: string;
}

/**
 * Property1dropdownadvanced
 *
 * Original name: Property 1=Dropdown Advanced
 * SVG file: Property1dropdownadvanced--3811-36789.svg
 */
export const Property1dropdownadvanced: React.FC<
  Property1dropdownadvancedProps
> = ({ className }) => {
  return <IconSvg className={`property1dropdownadvanced ${className || ''}`} />;
};
