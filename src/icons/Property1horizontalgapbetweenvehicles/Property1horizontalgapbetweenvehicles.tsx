import React from 'react';
import './Property1horizontalgapbetweenvehicles.css';
import IconSvg from '../assets/icons/Property1horizontalgapbetweenvehicles--5311-73037.svg?react';

export interface Property1horizontalgapbetweenvehiclesProps {
  className?: string;
}

/**
 * Property1horizontalgapbetweenvehicles
 *
 * Original name: Property 1=Horizontal gap between vehicles
 * SVG file: Property1horizontalgapbetweenvehicles--5311-73037.svg
 */
export const Property1horizontalgapbetweenvehicles: React.FC<
  Property1horizontalgapbetweenvehiclesProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1horizontalgapbetweenvehicles ${className || ''}`}
    />
  );
};
