import React from 'react';
import './Property1folded.css';
import IconSvg from '../assets/icons/Property1folded--3798-55265.svg?react';

export interface Property1foldedProps {
  className?: string;
}

/**
 * Property1folded
 *
 * Original name: Property 1=Folded
 * SVG file: Property1folded--3798-55265.svg
 */
export const Property1folded: React.FC<Property1foldedProps> = ({
  className,
}) => {
  return <IconSvg className={`property1folded ${className || ''}`} />;
};
