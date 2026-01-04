import React from 'react';
import './Property1commgatenothingselected.css';
import IconSvg from '../assets/icons/Property1commgatenothingselected--3028-10040.svg?react';

export interface Property1commgatenothingselectedProps {
  className?: string;
}

/**
 * Property1commgatenothingselected
 *
 * Original name: Property 1=Comm Gate Nothing selected
 * SVG file: Property1commgatenothingselected--3028-10040.svg
 */
export const Property1commgatenothingselected: React.FC<
  Property1commgatenothingselectedProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1commgatenothingselected ${className || ''}`}
    />
  );
};
