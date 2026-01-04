import React from 'react';
import './Property1verticalgapbetweenvehicles.css';
import IconSvg from '../assets/icons/Property1verticalgapbetweenvehicles--5311-73038.svg?react';

export interface Property1verticalgapbetweenvehiclesProps {
  className?: string;
}

/**
 * Property1verticalgapbetweenvehicles
 *
 * Original name: Property 1=Vertical gap between vehicles
 * SVG file: Property1verticalgapbetweenvehicles--5311-73038.svg
 */
export const Property1verticalgapbetweenvehicles: React.FC<
  Property1verticalgapbetweenvehiclesProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1verticalgapbetweenvehicles ${className || ''}`}
    />
  );
};
