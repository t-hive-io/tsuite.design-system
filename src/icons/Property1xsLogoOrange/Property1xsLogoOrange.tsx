import React from 'react';
import './Property1xsLogoOrange.css';
import IconSvg from '../assets/icons/Property1xsLogoOrange--892-6633.svg?react';

export interface Property1xsLogoOrangeProps {
  className?: string;
}

/**
 * Property1xsLogoOrange
 *
 * Original name: Property 1=XS-logo-orange
 * SVG file: Property1xsLogoOrange--892-6633.svg
 */
export const Property1xsLogoOrange: React.FC<Property1xsLogoOrangeProps> = ({
  className,
}) => {
  return <IconSvg className={`property1xslogoorange ${className || ''}`} />;
};
