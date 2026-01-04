import React from 'react';
import './Property1level1foldedstatefocusedhover.css';
import IconSvg from '../assets/icons/Property1level1foldedstatefocusedhover--4150-35138.svg?react';

export interface Property1level1foldedstatefocusedhoverProps {
  className?: string;
}

/**
 * Property1level1foldedstatefocusedhover
 *
 * Original name: Property 1=Level 1 folded, State=Focused hover
 * SVG file: Property1level1foldedstatefocusedhover--4150-35138.svg
 */
export const Property1level1foldedstatefocusedhover: React.FC<
  Property1level1foldedstatefocusedhoverProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level1foldedstatefocusedhover ${className || ''}`}
    />
  );
};
