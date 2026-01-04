import React from 'react';
import './Property116ptBlackSmall.css';
import IconSvg from '../assets/icons/Property116ptBlackSmall--4672-42030.svg?react';

export interface Property116ptBlackSmallProps {
  className?: string;
}

/**
 * Property116ptBlackSmall
 *
 * Original name: Property 1=16pt_black_small
 * SVG file: Property116ptBlackSmall--4672-42030.svg
 */
export const Property116ptBlackSmall: React.FC<
  Property116ptBlackSmallProps
> = ({ className }) => {
  return <IconSvg className={`property116ptblacksmall ${className || ''}`} />;
};
