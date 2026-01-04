import React from 'react';
import './Property1smallLogoBlue.css';
import IconSvg from '../assets/icons/Property1smallLogoBlue--3174-1000.svg?react';

export interface Property1smallLogoBlueProps {
  className?: string;
}

/**
 * Property1smallLogoBlue
 *
 * Original name: Property 1=Small-logo-blue
 * SVG file: Property1smallLogoBlue--3174-1000.svg
 */
export const Property1smallLogoBlue: React.FC<Property1smallLogoBlueProps> = ({
  className,
}) => {
  return <IconSvg className={`property1smalllogoblue ${className || ''}`} />;
};
