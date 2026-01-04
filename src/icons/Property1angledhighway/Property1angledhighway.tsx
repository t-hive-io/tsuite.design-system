import React from 'react';
import './Property1angledhighway.css';
import IconSvg from '../assets/icons/Property1angledhighway--2996-4684.svg?react';

export interface Property1angledhighwayProps {
  className?: string;
}

/**
 * Property1angledhighway
 *
 * Original name: Property 1=Angled Highway
 * SVG file: Property1angledhighway--2996-4684.svg
 */
export const Property1angledhighway: React.FC<Property1angledhighwayProps> = ({
  className,
}) => {
  return <IconSvg className={`property1angledhighway ${className || ''}`} />;
};
