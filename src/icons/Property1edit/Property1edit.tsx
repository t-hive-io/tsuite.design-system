import React from 'react';
import './Property1edit.css';
import IconSvg from '../assets/icons/Property1edit--3168-10777.svg?react';

export interface Property1editProps {
  className?: string;
}

/**
 * Property1edit
 *
 * Original name: Property 1=Edit
 * SVG file: Property1edit--3168-10777.svg
 */
export const Property1edit: React.FC<Property1editProps> = ({ className }) => {
  return <IconSvg className={`property1edit ${className || ''}`} />;
};
