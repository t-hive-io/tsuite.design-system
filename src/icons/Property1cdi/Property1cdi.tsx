import React from 'react';
import './Property1cdi.css';
import IconSvg from '../assets/icons/Property1cdi--2453-1742.svg?react';

export interface Property1cdiProps {
  className?: string;
}

/**
 * Property1cdi
 *
 * Original name: Property 1=CDI
 * SVG file: Property1cdi--2453-1742.svg
 */
export const Property1cdi: React.FC<Property1cdiProps> = ({ className }) => {
  return <IconSvg className={`property1cdi ${className || ''}`} />;
};
