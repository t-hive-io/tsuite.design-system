import React from 'react';
import './Property1topmargin.css';
import IconSvg from '../assets/icons/Property1topmargin--3376-20453.svg?react';

export interface Property1topmarginProps {
  className?: string;
}

/**
 * Property1topmargin
 *
 * Original name: Property 1=Top margin
 * SVG file: Property1topmargin--3376-20453.svg
 */
export const Property1topmargin: React.FC<Property1topmarginProps> = ({
  className,
}) => {
  return <IconSvg className={`property1topmargin ${className || ''}`} />;
};
