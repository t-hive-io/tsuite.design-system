import React from 'react';
import './Property1commsetup.css';
import IconSvg from '../assets/icons/Property1commsetup--3028-9125.svg?react';

export interface Property1commsetupProps {
  className?: string;
}

/**
 * Property1commsetup
 *
 * Original name: Property 1=Comm Setup
 * SVG file: Property1commsetup--3028-9125.svg
 */
export const Property1commsetup: React.FC<Property1commsetupProps> = ({
  className,
}) => {
  return <IconSvg className={`property1commsetup ${className || ''}`} />;
};
