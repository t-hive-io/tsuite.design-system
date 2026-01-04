import React from 'react';
import './Property1ab.css';
import IconSvg from '../assets/icons/Property1ab--3131-9501.svg?react';

export interface Property1abProps {
  className?: string;
}

/**
 * Property1ab
 *
 * Original name: Property 1=AB
 * SVG file: Property1ab--3131-9501.svg
 */
export const Property1ab: React.FC<Property1abProps> = ({ className }) => {
  return <IconSvg className={`property1ab ${className || ''}`} />;
};
