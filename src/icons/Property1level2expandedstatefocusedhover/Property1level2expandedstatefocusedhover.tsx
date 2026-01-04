import React from 'react';
import './Property1level2expandedstatefocusedhover.css';
import IconSvg from '../assets/icons/Property1level2expandedstatefocusedhover--4150-35186.svg?react';

export interface Property1level2expandedstatefocusedhoverProps {
  className?: string;
}

/**
 * Property1level2expandedstatefocusedhover
 *
 * Original name: Property 1=Level 2 expanded, State=Focused hover
 * SVG file: Property1level2expandedstatefocusedhover--4150-35186.svg
 */
export const Property1level2expandedstatefocusedhover: React.FC<
  Property1level2expandedstatefocusedhoverProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level2expandedstatefocusedhover ${className || ''}`}
    />
  );
};
