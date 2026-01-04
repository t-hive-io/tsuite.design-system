import React from 'react';
import './Property1level1statefocusedhover.css';
import IconSvg from '../assets/icons/Property1level1statefocusedhover--4150-35150.svg?react';

export interface Property1level1statefocusedhoverProps {
  className?: string;
}

/**
 * Property1level1statefocusedhover
 *
 * Original name: Property 1=Level 1, State=Focused hover
 * SVG file: Property1level1statefocusedhover--4150-35150.svg
 */
export const Property1level1statefocusedhover: React.FC<
  Property1level1statefocusedhoverProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level1statefocusedhover ${className || ''}`}
    />
  );
};
