import React from 'react';
import './Property1iconx3advanced.css';
import IconSvg from '../assets/icons/Property1iconx3advanced--3813-54300.svg?react';

export interface Property1iconx3advancedProps {
  className?: string;
}

/**
 * Property1iconx3advanced
 *
 * Original name: Property 1=Icon x3 Advanced
 * SVG file: Property1iconx3advanced--3813-54300.svg
 */
export const Property1iconx3advanced: React.FC<
  Property1iconx3advancedProps
> = ({ className }) => {
  return <IconSvg className={`property1iconx3advanced ${className || ''}`} />;
};
