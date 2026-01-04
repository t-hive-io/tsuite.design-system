import React from 'react';
import './Propertyfilter.css';
import IconSvg from '../assets/icons/Propertyfilter--3797-54273.svg?react';

export interface PropertyfilterProps {
  className?: string;
}

/**
 * Propertyfilter
 *
 * Original name: Property: Filter
 * SVG file: Propertyfilter--3797-54273.svg
 */
export const Propertyfilter: React.FC<PropertyfilterProps> = ({
  className,
}) => {
  return <IconSvg className={`propertyfilter ${className || ''}`} />;
};
