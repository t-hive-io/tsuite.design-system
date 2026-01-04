import React from 'react';
import './Property12framedepth.css';
import IconSvg from '../assets/icons/Property12framedepth--4020-34791.svg?react';

export interface Property12framedepthProps {
  className?: string;
}

/**
 * Property12framedepth
 *
 * Original name: Property 1=2. Frame depth
 * SVG file: Property12framedepth--4020-34791.svg
 */
export const Property12framedepth: React.FC<Property12framedepthProps> = ({
  className,
}) => {
  return <IconSvg className={`property12framedepth ${className || ''}`} />;
};
