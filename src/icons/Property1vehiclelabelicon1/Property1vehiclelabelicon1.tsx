import React from 'react';
import './Property1vehiclelabelicon1.css';
import IconSvg from '../assets/icons/Property1vehiclelabelicon1--3814-54839.svg?react';

export interface Property1vehiclelabelicon1Props {
  className?: string;
}

/**
 * Property1vehiclelabelicon1
 *
 * Original name: Property 1=Vehicle Label Icon 1
 * SVG file: Property1vehiclelabelicon1--3814-54839.svg
 */
export const Property1vehiclelabelicon1: React.FC<
  Property1vehiclelabelicon1Props
> = ({ className }) => {
  return (
    <IconSvg className={`property1vehiclelabelicon1 ${className || ''}`} />
  );
};
