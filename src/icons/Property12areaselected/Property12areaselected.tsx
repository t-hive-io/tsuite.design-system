import React from 'react';
import './Property12areaselected.css';
import IconSvg from '../assets/icons/Property12areaselected--3815-56548.svg?react';

export interface Property12areaselectedProps {
  className?: string;
}

/**
 * Property12areaselected
 *
 * Original name: Property 1=2 area selected
 * SVG file: Property12areaselected--3815-56548.svg
 */
export const Property12areaselected: React.FC<Property12areaselectedProps> = ({
  className,
}) => {
  return <IconSvg className={`property12areaselected ${className || ''}`} />;
};
