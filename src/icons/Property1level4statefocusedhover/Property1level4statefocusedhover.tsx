import React from 'react';
import './Property1level4statefocusedhover.css';
import IconSvg from '../assets/icons/Property1level4statefocusedhover--4150-35270.svg?react';

export interface Property1level4statefocusedhoverProps {
  className?: string;
}

/**
 * Property1level4statefocusedhover
 *
 * Original name: Property 1=Level 4, State=Focused hover
 * SVG file: Property1level4statefocusedhover--4150-35270.svg
 */
export const Property1level4statefocusedhover: React.FC<
  Property1level4statefocusedhoverProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level4statefocusedhover ${className || ''}`}
    />
  );
};
