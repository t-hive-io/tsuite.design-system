import React from 'react';
import './Property110clearanceinbetween.css';
import IconSvg from '../assets/icons/Property110clearanceinbetween--4020-34799.svg?react';

export interface Property110clearanceinbetweenProps {
  className?: string;
}

/**
 * Property110clearanceinbetween
 *
 * Original name: Property 1=10. Clearance in between
 * SVG file: Property110clearanceinbetween--4020-34799.svg
 */
export const Property110clearanceinbetween: React.FC<
  Property110clearanceinbetweenProps
> = ({ className }) => {
  return (
    <IconSvg className={`property110clearanceinbetween ${className || ''}`} />
  );
};
