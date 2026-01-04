import React from 'react';
import './Property1vehicletypedropdown2.css';
import IconSvg from '../assets/icons/Property1vehicletypedropdown2--3832-43517.svg?react';

export interface Property1vehicletypedropdown2Props {
  className?: string;
}

/**
 * Property1vehicletypedropdown2
 *
 * Original name: Property 1=Vehicle type dropdown 2
 * SVG file: Property1vehicletypedropdown2--3832-43517.svg
 */
export const Property1vehicletypedropdown2: React.FC<
  Property1vehicletypedropdown2Props
> = ({ className }) => {
  return (
    <IconSvg className={`property1vehicletypedropdown2 ${className || ''}`} />
  );
};
