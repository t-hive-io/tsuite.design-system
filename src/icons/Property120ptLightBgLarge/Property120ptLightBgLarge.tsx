import React from 'react';
import './Property120ptLightBgLarge.css';
import IconSvg from '../assets/icons/Property120ptLightBgLarge--4672-38268.svg?react';

export interface Property120ptLightBgLargeProps {
  className?: string;
}

/**
 * Property120ptLightBgLarge
 *
 * Original name: Property 1=20pt_light_bg_large
 * SVG file: Property120ptLightBgLarge--4672-38268.svg
 */
export const Property120ptLightBgLarge: React.FC<
  Property120ptLightBgLargeProps
> = ({ className }) => {
  return <IconSvg className={`property120ptlightbglarge ${className || ''}`} />;
};
