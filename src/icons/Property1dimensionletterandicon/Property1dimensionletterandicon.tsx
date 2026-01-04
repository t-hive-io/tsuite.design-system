import React from 'react';
import './Property1dimensionletterandicon.css';
import IconSvg from '../assets/icons/Property1dimensionletterandicon--3833-50568.svg?react';

export interface Property1dimensionletterandiconProps {
  className?: string;
}

/**
 * Property1dimensionletterandicon
 *
 * Original name: Property 1=Dimension letter and icon
 * SVG file: Property1dimensionletterandicon--3833-50568.svg
 */
export const Property1dimensionletterandicon: React.FC<
  Property1dimensionletterandiconProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1dimensionletterandicon ${className || ''}`} />
  );
};
