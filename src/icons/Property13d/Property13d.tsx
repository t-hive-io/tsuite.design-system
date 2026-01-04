import React from 'react';
import './Property13d.css';
import IconSvg from '../assets/icons/Property13d--3021-7614.svg?react';

export interface Property13dProps {
  className?: string;
}

/**
 * Property13d
 *
 * Original name: Property 1=3D
 * SVG file: Property13d--3021-7614.svg
 */
export const Property13d: React.FC<Property13dProps> = ({ className }) => {
  return <IconSvg className={`property13d ${className || ''}`} />;
};
