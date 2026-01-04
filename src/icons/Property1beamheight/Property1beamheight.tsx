import React from 'react';
import './Property1beamheight.css';
import IconSvg from '../assets/icons/Property1beamheight--4573-37788.svg?react';

export interface Property1beamheightProps {
  className?: string;
}

/**
 * Property1beamheight
 *
 * Original name: Property 1=Beam height
 * SVG file: Property1beamheight--4573-37788.svg
 */
export const Property1beamheight: React.FC<Property1beamheightProps> = ({
  className,
}) => {
  return <IconSvg className={`property1beamheight ${className || ''}`} />;
};
