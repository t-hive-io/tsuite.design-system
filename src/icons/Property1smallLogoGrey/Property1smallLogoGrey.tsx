import React from 'react';
import './Property1smallLogoGrey.css';
import IconSvg from '../assets/icons/Property1smallLogoGrey--3174-1004.svg?react';

export interface Property1smallLogoGreyProps {
  className?: string;
}

/**
 * Property1smallLogoGrey
 *
 * Original name: Property 1=Small-logo-grey
 * SVG file: Property1smallLogoGrey--3174-1004.svg
 */
export const Property1smallLogoGrey: React.FC<Property1smallLogoGreyProps> = ({
  className,
}) => {
  return <IconSvg className={`property1smalllogogrey ${className || ''}`} />;
};
