import React from 'react';
import './Property1safetygapbetweenvehicles.css';
import IconSvg from '../assets/icons/Property1safetygapbetweenvehicles--4492-37720.svg?react';

export interface Property1safetygapbetweenvehiclesProps {
  className?: string;
}

/**
 * Property1safetygapbetweenvehicles
 *
 * Original name: Property 1=Safety gap between vehicles
 * SVG file: Property1safetygapbetweenvehicles--4492-37720.svg
 */
export const Property1safetygapbetweenvehicles: React.FC<
  Property1safetygapbetweenvehiclesProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1safetygapbetweenvehicles ${className || ''}`}
    />
  );
};
