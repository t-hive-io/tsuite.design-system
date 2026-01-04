import React from 'react';
import './Property1totalleveldepth.css';
import IconSvg from '../assets/icons/Property1totalleveldepth--4607-42524.svg?react';

export interface Property1totalleveldepthProps {
  className?: string;
}

/**
 * Property1totalleveldepth
 *
 * Original name: Property 1=Total level depth
 * SVG file: Property1totalleveldepth--4607-42524.svg
 */
export const Property1totalleveldepth: React.FC<
  Property1totalleveldepthProps
> = ({ className }) => {
  return <IconSvg className={`property1totalleveldepth ${className || ''}`} />;
};
