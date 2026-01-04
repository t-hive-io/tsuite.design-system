import React from 'react';
import './Property1vehicletypedropdown1.css';
import IconSvg from '../assets/icons/Property1vehicletypedropdown1--3832-43476.svg?react';

export interface Property1vehicletypedropdown1Props {
  className?: string;
}

/**
 * Property1vehicletypedropdown1
 *
 * Original name: Property 1=Vehicle type dropdown 1
 * SVG file: Property1vehicletypedropdown1--3832-43476.svg
 */
export const Property1vehicletypedropdown1: React.FC<
  Property1vehicletypedropdown1Props
> = ({ className }) => {
  return (
    <IconSvg className={`property1vehicletypedropdown1 ${className || ''}`} />
  );
};
