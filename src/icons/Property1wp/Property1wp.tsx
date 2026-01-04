import React from 'react';
import './Property1wp.css';
import IconSvg from '../assets/icons/Property1wp--2453-1529.svg?react';

export interface Property1wpProps {
  className?: string;
}

/**
 * Property1wp
 *
 * Original name: Property 1=WP
 * SVG file: Property1wp--2453-1529.svg
 */
export const Property1wp: React.FC<Property1wpProps> = ({ className }) => {
  return <IconSvg className={`property1wp ${className || ''}`} />;
};
