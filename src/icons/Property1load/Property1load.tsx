import React from 'react';
import './Property1load.css';
import IconSvg from '../assets/icons/Property1load--3832-44618.svg?react';

export interface Property1loadProps {
  className?: string;
}

/**
 * Property1load
 *
 * Original name: Property 1=Load
 * SVG file: Property1load--3832-44618.svg
 */
export const Property1load: React.FC<Property1loadProps> = ({ className }) => {
  return <IconSvg className={`property1load ${className || ''}`} />;
};
