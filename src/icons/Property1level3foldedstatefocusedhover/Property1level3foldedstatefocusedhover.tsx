import React from 'react';
import './Property1level3foldedstatefocusedhover.css';
import IconSvg from '../assets/icons/Property1level3foldedstatefocusedhover--4150-35210.svg?react';

export interface Property1level3foldedstatefocusedhoverProps {
  className?: string;
}

/**
 * Property1level3foldedstatefocusedhover
 *
 * Original name: Property 1=Level 3 folded, State=Focused hover
 * SVG file: Property1level3foldedstatefocusedhover--4150-35210.svg
 */
export const Property1level3foldedstatefocusedhover: React.FC<
  Property1level3foldedstatefocusedhoverProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level3foldedstatefocusedhover ${className || ''}`}
    />
  );
};
