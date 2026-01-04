import React from 'react';
import './Property1level3expandedstatefocusedhover.css';
import IconSvg from '../assets/icons/Property1level3expandedstatefocusedhover--4150-35222.svg?react';

export interface Property1level3expandedstatefocusedhoverProps {
  className?: string;
}

/**
 * Property1level3expandedstatefocusedhover
 *
 * Original name: Property 1=Level 3 expanded, State=Focused hover
 * SVG file: Property1level3expandedstatefocusedhover--4150-35222.svg
 */
export const Property1level3expandedstatefocusedhover: React.FC<
  Property1level3expandedstatefocusedhoverProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level3expandedstatefocusedhover ${className || ''}`}
    />
  );
};
