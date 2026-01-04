import React from 'react';
import './Property1adjustposition.css';
import IconSvg from '../assets/icons/Property1adjustposition--3833-50253.svg?react';

export interface Property1adjustpositionProps {
  className?: string;
}

/**
 * Property1adjustposition
 *
 * Original name: Property 1=Adjust position
 * SVG file: Property1adjustposition--3833-50253.svg
 */
export const Property1adjustposition: React.FC<
  Property1adjustpositionProps
> = ({ className }) => {
  return <IconSvg className={`property1adjustposition ${className || ''}`} />;
};
