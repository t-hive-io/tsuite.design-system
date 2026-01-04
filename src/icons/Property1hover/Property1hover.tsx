import React from 'react';
import './Property1hover.css';
import IconSvg from '../assets/icons/Property1hover--3003-12699.svg?react';

export interface Property1hoverProps {
  className?: string;
}

/**
 * Property1hover
 *
 * Original name: Property 1=Hover
 * SVG file: Property1hover--3003-12699.svg
 */
export const Property1hover: React.FC<Property1hoverProps> = ({
  className,
}) => {
  return <IconSvg className={`property1hover ${className || ''}`} />;
};
