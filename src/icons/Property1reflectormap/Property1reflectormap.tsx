import React from 'react';
import './Property1reflectormap.css';
import IconSvg from '../assets/icons/Property1reflectormap--3815-56327.svg?react';

export interface Property1reflectormapProps {
  className?: string;
}

/**
 * Property1reflectormap
 *
 * Original name: Property 1=Reflectormap
 * SVG file: Property1reflectormap--3815-56327.svg
 */
export const Property1reflectormap: React.FC<Property1reflectormapProps> = ({
  className,
}) => {
  return <IconSvg className={`property1reflectormap ${className || ''}`} />;
};
