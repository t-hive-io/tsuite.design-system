import React from 'react';
import './Property1dimensions.css';
import IconSvg from '../assets/icons/Property1dimensions--3798-55267.svg?react';

export interface Property1dimensionsProps {
  className?: string;
}

/**
 * Property1dimensions
 *
 * Original name: Property 1=Dimensions
 * SVG file: Property1dimensions--3798-55267.svg
 */
export const Property1dimensions: React.FC<Property1dimensionsProps> = ({
  className,
}) => {
  return <IconSvg className={`property1dimensions ${className || ''}`} />;
};
