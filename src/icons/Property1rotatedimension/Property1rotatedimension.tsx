import React from 'react';
import './Property1rotatedimension.css';
import IconSvg from '../assets/icons/Property1rotatedimension--5315-42963.svg?react';

export interface Property1rotatedimensionProps {
  className?: string;
}

/**
 * Property1rotatedimension
 *
 * Original name: Property 1=Rotate dimension
 * SVG file: Property1rotatedimension--5315-42963.svg
 */
export const Property1rotatedimension: React.FC<
  Property1rotatedimensionProps
> = ({ className }) => {
  return <IconSvg className={`property1rotatedimension ${className || ''}`} />;
};
