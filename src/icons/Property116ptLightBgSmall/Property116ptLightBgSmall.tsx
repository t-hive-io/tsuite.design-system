import React from 'react';
import './Property116ptLightBgSmall.css';
import IconSvg from '../assets/icons/Property116ptLightBgSmall--4672-38265.svg?react';

export interface Property116ptLightBgSmallProps {
  className?: string;
}

/**
 * Property116ptLightBgSmall
 *
 * Original name: Property 1=16pt_light_bg_small
 * SVG file: Property116ptLightBgSmall--4672-38265.svg
 */
export const Property116ptLightBgSmall: React.FC<
  Property116ptLightBgSmallProps
> = ({ className }) => {
  return <IconSvg className={`property116ptlightbgsmall ${className || ''}`} />;
};
