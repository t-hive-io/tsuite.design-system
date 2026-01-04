import React from 'react';
import './Property1level2foldedstatefocusedhover.css';
import IconSvg from '../assets/icons/Property1level2foldedstatefocusedhover--4150-35174.svg?react';

export interface Property1level2foldedstatefocusedhoverProps {
  className?: string;
}

/**
 * Property1level2foldedstatefocusedhover
 *
 * Original name: Property 1=Level 2 folded, State=Focused hover
 * SVG file: Property1level2foldedstatefocusedhover--4150-35174.svg
 */
export const Property1level2foldedstatefocusedhover: React.FC<
  Property1level2foldedstatefocusedhoverProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level2foldedstatefocusedhover ${className || ''}`}
    />
  );
};
