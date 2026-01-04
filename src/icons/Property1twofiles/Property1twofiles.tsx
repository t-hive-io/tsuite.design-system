import React from 'react';
import './Property1twofiles.css';
import IconSvg from '../assets/icons/Property1twofiles--5522-34312.svg?react';

export interface Property1twofilesProps {
  className?: string;
}

/**
 * Property1twofiles
 *
 * Original name: Property 1=Two files
 * SVG file: Property1twofiles--5522-34312.svg
 */
export const Property1twofiles: React.FC<Property1twofilesProps> = ({
  className,
}) => {
  return <IconSvg className={`property1twofiles ${className || ''}`} />;
};
