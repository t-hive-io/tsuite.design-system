import React from 'react';
import './Property1xsLogoGrey.css';
import IconSvg from '../assets/icons/Property1xsLogoGrey--892-6635.svg?react';

export interface Property1xsLogoGreyProps {
  className?: string;
}

/**
 * Property1xsLogoGrey
 *
 * Original name: Property 1=XS-logo-grey
 * SVG file: Property1xsLogoGrey--892-6635.svg
 */
export const Property1xsLogoGrey: React.FC<Property1xsLogoGreyProps> = ({
  className,
}) => {
  return <IconSvg className={`property1xslogogrey ${className || ''}`} />;
};
