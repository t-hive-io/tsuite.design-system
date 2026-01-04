import React from 'react';
import './Property116ptDarkBgSmall.css';
import IconSvg from '../assets/icons/Property116ptDarkBgSmall--4672-38266.svg?react';

export interface Property116ptDarkBgSmallProps {
  className?: string;
}

/**
 * Property116ptDarkBgSmall
 *
 * Original name: Property 1=16pt_dark_bg_small
 * SVG file: Property116ptDarkBgSmall--4672-38266.svg
 */
export const Property116ptDarkBgSmall: React.FC<
  Property116ptDarkBgSmallProps
> = ({ className }) => {
  return <IconSvg className={`property116ptdarkbgsmall ${className || ''}`} />;
};
