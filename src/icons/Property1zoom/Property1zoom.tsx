import React from 'react';
import './Property1zoom.css';
import IconSvg from '../assets/icons/Property1zoom--3168-10775.svg?react';

export interface Property1zoomProps {
  className?: string;
}

/**
 * Property1zoom
 *
 * Original name: Property 1=Zoom
 * SVG file: Property1zoom--3168-10775.svg
 */
export const Property1zoom: React.FC<Property1zoomProps> = ({ className }) => {
  return <IconSvg className={`property1zoom ${className || ''}`} />;
};
