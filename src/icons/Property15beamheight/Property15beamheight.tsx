import React from 'react';
import './Property15beamheight.css';
import IconSvg from '../assets/icons/Property15beamheight--4020-34790.svg?react';

export interface Property15beamheightProps {
  className?: string;
}

/**
 * Property15beamheight
 *
 * Original name: Property 1=5. Beam height
 * SVG file: Property15beamheight--4020-34790.svg
 */
export const Property15beamheight: React.FC<Property15beamheightProps> = ({
  className,
}) => {
  return <IconSvg className={`property15beamheight ${className || ''}`} />;
};
