import React from 'react';
import './Property1dropdown.css';
import IconSvg from '../assets/icons/Property1dropdown--3811-36787.svg?react';

export interface Property1dropdownProps {
  className?: string;
}

/**
 * Property1dropdown
 *
 * Original name: Property 1=Dropdown
 * SVG file: Property1dropdown--3811-36787.svg
 */
export const Property1dropdown: React.FC<Property1dropdownProps> = ({
  className,
}) => {
  return <IconSvg className={`property1dropdown ${className || ''}`} />;
};
