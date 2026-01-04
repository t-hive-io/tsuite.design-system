import React from 'react';
import './Property11framelength.css';
import IconSvg from '../assets/icons/Property11framelength--4020-34795.svg?react';

export interface Property11framelengthProps {
  className?: string;
}

/**
 * Property11framelength
 *
 * Original name: Property 1=1. Frame length
 * SVG file: Property11framelength--4020-34795.svg
 */
export const Property11framelength: React.FC<Property11framelengthProps> = ({
  className,
}) => {
  return <IconSvg className={`property11framelength ${className || ''}`} />;
};
