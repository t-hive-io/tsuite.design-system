import React from 'react';
import './Property1switchoff.css';
import IconSvg from '../assets/icons/Property1switchoff--3023-9141.svg?react';

export interface Property1switchoffProps {
  className?: string;
}

/**
 * Property1switchoff
 *
 * Original name: Property 1=Switch off
 * SVG file: Property1switchoff--3023-9141.svg
 */
export const Property1switchoff: React.FC<Property1switchoffProps> = ({
  className,
}) => {
  return <IconSvg className={`property1switchoff ${className || ''}`} />;
};
