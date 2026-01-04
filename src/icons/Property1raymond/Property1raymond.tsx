import React from 'react';
import './Property1raymond.css';
import IconSvg from '../assets/icons/Property1raymond--2453-1747.svg?react';

export interface Property1raymondProps {
  className?: string;
}

/**
 * Property1raymond
 *
 * Original name: Property 1=Raymond
 * SVG file: Property1raymond--2453-1747.svg
 */
export const Property1raymond: React.FC<Property1raymondProps> = ({
  className,
}) => {
  return <IconSvg className={`property1raymond ${className || ''}`} />;
};
