import React from 'react';
import './Property1sidemarginracking.css';
import IconSvg from '../assets/icons/Property1sidemarginracking--4573-37784.svg?react';

export interface Property1sidemarginrackingProps {
  className?: string;
}

/**
 * Property1sidemarginracking
 *
 * Original name: Property 1=Side margin racking
 * SVG file: Property1sidemarginracking--4573-37784.svg
 */
export const Property1sidemarginracking: React.FC<
  Property1sidemarginrackingProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1sidemarginracking ${className || ''}`} />
  );
};
