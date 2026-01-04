import React from 'react';
import './Property1default.css';
import IconSvg from '../assets/icons/Property1default--1613-8188.svg?react';

export interface Property1defaultProps {
  className?: string;
}

/**
 * Property1default
 *
 * Original name: Property 1=Default
 * SVG file: Property1default--1613-8188.svg
 */
export const Property1default: React.FC<Property1defaultProps> = ({
  className,
}) => {
  return <IconSvg className={`property1default ${className || ''}`} />;
};
