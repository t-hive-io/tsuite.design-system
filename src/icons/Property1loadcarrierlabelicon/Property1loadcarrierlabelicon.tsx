import React from 'react';
import './Property1loadcarrierlabelicon.css';
import IconSvg from '../assets/icons/Property1loadcarrierlabelicon--3814-55415.svg?react';

export interface Property1loadcarrierlabeliconProps {
  className?: string;
}

/**
 * Property1loadcarrierlabelicon
 *
 * Original name: Property 1=Load carrier label icon
 * SVG file: Property1loadcarrierlabelicon--3814-55415.svg
 */
export const Property1loadcarrierlabelicon: React.FC<
  Property1loadcarrierlabeliconProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1loadcarrierlabelicon ${className || ''}`} />
  );
};
