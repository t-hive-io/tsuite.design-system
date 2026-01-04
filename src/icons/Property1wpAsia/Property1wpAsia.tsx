import React from 'react';
import './Property1wpAsia.css';
import IconSvg from '../assets/icons/Property1wpAsia--2453-1528.svg?react';

export interface Property1wpAsiaProps {
  className?: string;
}

/**
 * Property1wpAsia
 *
 * Original name: Property 1=WP_ASIA
 * SVG file: Property1wpAsia--2453-1528.svg
 */
export const Property1wpAsia: React.FC<Property1wpAsiaProps> = ({
  className,
}) => {
  return <IconSvg className={`property1wpasia ${className || ''}`} />;
};
