import React from 'react';
import './Property1level4foldedstatefocusedhover.css';
import IconSvg from '../assets/icons/Property1level4foldedstatefocusedhover--4150-35246.svg?react';

export interface Property1level4foldedstatefocusedhoverProps {
  className?: string;
}

/**
 * Property1level4foldedstatefocusedhover
 *
 * Original name: Property 1=Level 4 folded, State=Focused hover
 * SVG file: Property1level4foldedstatefocusedhover--4150-35246.svg
 */
export const Property1level4foldedstatefocusedhover: React.FC<
  Property1level4foldedstatefocusedhoverProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level4foldedstatefocusedhover ${className || ''}`}
    />
  );
};
