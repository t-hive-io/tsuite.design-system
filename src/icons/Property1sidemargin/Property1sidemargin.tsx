import React from 'react';
import './Property1sidemargin.css';
import IconSvg from '../assets/icons/Property1sidemargin--3376-20441.svg?react';

export interface Property1sidemarginProps {
  className?: string;
}

/**
 * Property1sidemargin
 *
 * Original name: Property 1=Side margin
 * SVG file: Property1sidemargin--3376-20441.svg
 */
export const Property1sidemargin: React.FC<Property1sidemarginProps> = ({
  className,
}) => {
  return <IconSvg className={`property1sidemargin ${className || ''}`} />;
};
