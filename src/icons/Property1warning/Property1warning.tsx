import React from 'react';
import './Property1warning.css';
import IconSvg from '../assets/icons/Property1warning--2992-2850.svg?react';

export interface Property1warningProps {
  className?: string;
}

/**
 * Property1warning
 *
 * Original name: Property 1=Warning
 * SVG file: Property1warning--2992-2850.svg
 */
export const Property1warning: React.FC<Property1warningProps> = ({
  className,
}) => {
  return <IconSvg className={`property1warning ${className || ''}`} />;
};
