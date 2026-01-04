import React from 'react';
import './Property1level4foldedstatefocused.css';
import IconSvg from '../assets/icons/Property1level4foldedstatefocused--3811-47342.svg?react';

export interface Property1level4foldedstatefocusedProps {
  className?: string;
}

/**
 * Property1level4foldedstatefocused
 *
 * Original name: Property 1=Level 4 folded, State=Focused
 * SVG file: Property1level4foldedstatefocused--3811-47342.svg
 */
export const Property1level4foldedstatefocused: React.FC<
  Property1level4foldedstatefocusedProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level4foldedstatefocused ${className || ''}`}
    />
  );
};
