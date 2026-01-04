import React from 'react';
import './Property120ptDarkBgLarge.css';
import IconSvg from '../assets/icons/Property120ptDarkBgLarge--4672-38264.svg?react';

export interface Property120ptDarkBgLargeProps {
  className?: string;
}

/**
 * Property120ptDarkBgLarge
 *
 * Original name: Property 1=20pt_dark_bg_large
 * SVG file: Property120ptDarkBgLarge--4672-38264.svg
 */
export const Property120ptDarkBgLarge: React.FC<
  Property120ptDarkBgLargeProps
> = ({ className }) => {
  return <IconSvg className={`property120ptdarkbglarge ${className || ''}`} />;
};
