import React from 'react';
import './Property1loadcarriertypes.css';
import IconSvg from '../assets/icons/Property1loadcarriertypes--2992-2872.svg?react';

export interface Property1loadcarriertypesProps {
  className?: string;
}

/**
 * Property1loadcarriertypes
 *
 * Original name: Property 1=Load carrier types
 * SVG file: Property1loadcarriertypes--2992-2872.svg
 */
export const Property1loadcarriertypes: React.FC<
  Property1loadcarriertypesProps
> = ({ className }) => {
  return <IconSvg className={`property1loadcarriertypes ${className || ''}`} />;
};
