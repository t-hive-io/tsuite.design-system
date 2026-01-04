import React from 'react';
import './Property1setscale.css';
import IconSvg from '../assets/icons/Property1setscale--3179-958.svg?react';

export interface Property1setscaleProps {
  className?: string;
}

/**
 * Property1setscale
 *
 * Original name: Property 1=Set scale
 * SVG file: Property1setscale--3179-958.svg
 */
export const Property1setscale: React.FC<Property1setscaleProps> = ({
  className,
}) => {
  return <IconSvg className={`property1setscale ${className || ''}`} />;
};
