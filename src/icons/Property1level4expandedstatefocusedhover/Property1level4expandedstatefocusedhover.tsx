import React from 'react';
import './Property1level4expandedstatefocusedhover.css';
import IconSvg from '../assets/icons/Property1level4expandedstatefocusedhover--4150-35258.svg?react';

export interface Property1level4expandedstatefocusedhoverProps {
  className?: string;
}

/**
 * Property1level4expandedstatefocusedhover
 *
 * Original name: Property 1=Level 4 expanded, State=Focused hover
 * SVG file: Property1level4expandedstatefocusedhover--4150-35258.svg
 */
export const Property1level4expandedstatefocusedhover: React.FC<
  Property1level4expandedstatefocusedhoverProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level4expandedstatefocusedhover ${className || ''}`}
    />
  );
};
