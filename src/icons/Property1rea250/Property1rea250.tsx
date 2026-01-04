import React from 'react';
import './Property1rea250.css';
import IconSvg from '../assets/icons/Property1rea250--2453-1743.svg?react';

export interface Property1rea250Props {
  className?: string;
}

/**
 * Property1rea250
 *
 * Original name: Property 1=REA250
 * SVG file: Property1rea250--2453-1743.svg
 */
export const Property1rea250: React.FC<Property1rea250Props> = ({
  className,
}) => {
  return <IconSvg className={`property1rea250 ${className || ''}`} />;
};
