import React from 'react';
import './Property1oranged.css';
import IconSvg from '../assets/icons/Property1oranged--1126-8225.svg?react';

export interface Property1orangedProps {
  className?: string;
}

/**
 * Property1oranged
 *
 * Original name: Property 1=Orange D
 * SVG file: Property1oranged--1126-8225.svg
 */
export const Property1oranged: React.FC<Property1orangedProps> = ({
  className,
}) => {
  return <IconSvg className={`property1oranged ${className || ''}`} />;
};
