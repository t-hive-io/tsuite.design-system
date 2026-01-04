import React from 'react';
import './Property16shelf1height.css';
import IconSvg from '../assets/icons/Property16shelf1height--4020-34798.svg?react';

export interface Property16shelf1heightProps {
  className?: string;
}

/**
 * Property16shelf1height
 *
 * Original name: Property 1=6. Shelf 1 height
 * SVG file: Property16shelf1height--4020-34798.svg
 */
export const Property16shelf1height: React.FC<Property16shelf1heightProps> = ({
  className,
}) => {
  return <IconSvg className={`property16shelf1height ${className || ''}`} />;
};
