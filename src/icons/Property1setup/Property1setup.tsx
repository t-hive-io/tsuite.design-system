import React from 'react';
import './Property1setup.css';
import IconSvg from '../assets/icons/Property1setup--2992-2613.svg?react';

export interface Property1setupProps {
  className?: string;
}

/**
 * Property1setup
 *
 * Original name: Property 1=Setup
 * SVG file: Property1setup--2992-2613.svg
 */
export const Property1setup: React.FC<Property1setupProps> = ({
  className,
}) => {
  return <IconSvg className={`property1setup ${className || ''}`} />;
};
