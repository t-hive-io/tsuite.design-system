import React from 'react';
import './Property112overhangfront.css';
import IconSvg from '../assets/icons/Property112overhangfront--4020-34792.svg?react';

export interface Property112overhangfrontProps {
  className?: string;
}

/**
 * Property112overhangfront
 *
 * Original name: Property 1=12. Overhang front
 * SVG file: Property112overhangfront--4020-34792.svg
 */
export const Property112overhangfront: React.FC<
  Property112overhangfrontProps
> = ({ className }) => {
  return <IconSvg className={`property112overhangfront ${className || ''}`} />;
};
