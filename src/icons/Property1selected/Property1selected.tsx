import React from 'react';
import './Property1selected.css';
import IconSvg from '../assets/icons/Property1selected--3142-9716.svg?react';

export interface Property1selectedProps {
  className?: string;
}

/**
 * Property1selected
 *
 * Original name: Property 1=Selected
 * SVG file: Property1selected--3142-9716.svg
 */
export const Property1selected: React.FC<Property1selectedProps> = ({
  className,
}) => {
  return <IconSvg className={`property1selected ${className || ''}`} />;
};
