import React from 'react';
import './Property1disable.css';
import IconSvg from '../assets/icons/Property1disable--3067-7823.svg?react';

export interface Property1disableProps {
  className?: string;
}

/**
 * Property1disable
 *
 * Original name: Property 1=Disable
 * SVG file: Property1disable--3067-7823.svg
 */
export const Property1disable: React.FC<Property1disableProps> = ({
  className,
}) => {
  return <IconSvg className={`property1disable ${className || ''}`} />;
};
