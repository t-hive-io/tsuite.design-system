import React from 'react';
import './Property17shelf2height.css';
import IconSvg from '../assets/icons/Property17shelf2height--4020-34788.svg?react';

export interface Property17shelf2heightProps {
  className?: string;
}

/**
 * Property17shelf2height
 *
 * Original name: Property 1=7. Shelf 2 height
 * SVG file: Property17shelf2height--4020-34788.svg
 */
export const Property17shelf2height: React.FC<Property17shelf2heightProps> = ({
  className,
}) => {
  return <IconSvg className={`property17shelf2height ${className || ''}`} />;
};
