import React from 'react';
import './Property1wall.css';
import IconSvg from '../assets/icons/Property1wall--3003-10352.svg?react';

export interface Property1wallProps {
  className?: string;
}

/**
 * Property1wall
 *
 * Original name: Property 1=Wall
 * SVG file: Property1wall--3003-10352.svg
 */
export const Property1wall: React.FC<Property1wallProps> = ({ className }) => {
  return <IconSvg className={`property1wall ${className || ''}`} />;
};
