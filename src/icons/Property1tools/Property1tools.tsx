import React from 'react';
import './Property1tools.css';
import IconSvg from '../assets/icons/Property1tools--3168-10773.svg?react';

export interface Property1toolsProps {
  className?: string;
}

/**
 * Property1tools
 *
 * Original name: Property 1=Tools
 * SVG file: Property1tools--3168-10773.svg
 */
export const Property1tools: React.FC<Property1toolsProps> = ({
  className,
}) => {
  return <IconSvg className={`property1tools ${className || ''}`} />;
};
