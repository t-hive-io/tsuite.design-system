import React from 'react';
import './Property1switchon.css';
import IconSvg from '../assets/icons/Property1switchon--3023-9139.svg?react';

export interface Property1switchonProps {
  className?: string;
}

/**
 * Property1switchon
 *
 * Original name: Property 1=Switch on
 * SVG file: Property1switchon--3023-9139.svg
 */
export const Property1switchon: React.FC<Property1switchonProps> = ({
  className,
}) => {
  return <IconSvg className={`property1switchon ${className || ''}`} />;
};
