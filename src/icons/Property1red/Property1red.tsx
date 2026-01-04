import React from 'react';
import './Property1red.css';
import IconSvg from '../assets/icons/Property1red--3093-2815.svg?react';

export interface Property1redProps {
  className?: string;
}

/**
 * Property1red
 *
 * Original name: Property 1=Red
 * SVG file: Property1red--3093-2815.svg
 */
export const Property1red: React.FC<Property1redProps> = ({ className }) => {
  return <IconSvg className={`property1red ${className || ''}`} />;
};
