import React from 'react';
import './Property1numberofcellsdepth.css';
import IconSvg from '../assets/icons/Property1numberofcellsdepth--4607-42525.svg?react';

export interface Property1numberofcellsdepthProps {
  className?: string;
}

/**
 * Property1numberofcellsdepth
 *
 * Original name: Property 1=Number of cells (depth)
 * SVG file: Property1numberofcellsdepth--4607-42525.svg
 */
export const Property1numberofcellsdepth: React.FC<
  Property1numberofcellsdepthProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1numberofcellsdepth ${className || ''}`} />
  );
};
