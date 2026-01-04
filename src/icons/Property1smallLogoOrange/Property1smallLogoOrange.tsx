import React from 'react';
import './Property1smallLogoOrange.css';
import IconSvg from '../assets/icons/Property1smallLogoOrange--3174-1002.svg?react';

export interface Property1smallLogoOrangeProps {
  className?: string;
}

/**
 * Property1smallLogoOrange
 *
 * Original name: Property 1=Small-logo-orange
 * SVG file: Property1smallLogoOrange--3174-1002.svg
 */
export const Property1smallLogoOrange: React.FC<
  Property1smallLogoOrangeProps
> = ({ className }) => {
  return <IconSvg className={`property1smalllogoorange ${className || ''}`} />;
};
