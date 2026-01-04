import React from 'react';
import './Property1chargetimestations.css';
import IconSvg from '../assets/icons/Property1chargetimestations--3798-55218.svg?react';

export interface Property1chargetimestationsProps {
  className?: string;
}

/**
 * Property1chargetimestations
 *
 * Original name: Property 1=Chargetime Stations
 * SVG file: Property1chargetimestations--3798-55218.svg
 */
export const Property1chargetimestations: React.FC<
  Property1chargetimestationsProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1chargetimestations ${className || ''}`} />
  );
};
