import React from 'react';
import './Property116ptWhiteSmall.css';
import IconSvg from '../assets/icons/Property116ptWhiteSmall--4672-42066.svg?react';

export interface Property116ptWhiteSmallProps {
  className?: string;
}

/**
 * Property116ptWhiteSmall
 *
 * Original name: Property 1=16pt_white_small
 * SVG file: Property116ptWhiteSmall--4672-42066.svg
 */
export const Property116ptWhiteSmall: React.FC<
  Property116ptWhiteSmallProps
> = ({ className }) => {
  return <IconSvg className={`property116ptwhitesmall ${className || ''}`} />;
};
