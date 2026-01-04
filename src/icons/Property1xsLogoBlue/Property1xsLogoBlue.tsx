import React from 'react';
import './Property1xsLogoBlue.css';
import IconSvg from '../assets/icons/Property1xsLogoBlue--892-6631.svg?react';

export interface Property1xsLogoBlueProps {
  className?: string;
}

/**
 * Property1xsLogoBlue
 *
 * Original name: Property 1=XS-logo-blue
 * SVG file: Property1xsLogoBlue--892-6631.svg
 */
export const Property1xsLogoBlue: React.FC<Property1xsLogoBlueProps> = ({
  className,
}) => {
  return <IconSvg className={`property1xslogoblue ${className || ''}`} />;
};
