import React from 'react';
import './Property1hovered.css';
import IconSvg from '../assets/icons/Property1hovered--3797-54252.svg?react';

export interface Property1hoveredProps {
  className?: string;
}

/**
 * Property1hovered
 *
 * Original name: Property 1=Hovered
 * SVG file: Property1hovered--3797-54252.svg
 */
export const Property1hovered: React.FC<Property1hoveredProps> = ({
  className,
}) => {
  return <IconSvg className={`property1hovered ${className || ''}`} />;
};
