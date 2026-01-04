import React from 'react';
import './Property1firstshelfheight.css';
import IconSvg from '../assets/icons/Property1firstshelfheight--4573-37790.svg?react';

export interface Property1firstshelfheightProps {
  className?: string;
}

/**
 * Property1firstshelfheight
 *
 * Original name: Property 1=First shelf height
 * SVG file: Property1firstshelfheight--4573-37790.svg
 */
export const Property1firstshelfheight: React.FC<
  Property1firstshelfheightProps
> = ({ className }) => {
  return <IconSvg className={`property1firstshelfheight ${className || ''}`} />;
};
