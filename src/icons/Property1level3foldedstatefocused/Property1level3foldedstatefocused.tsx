import React from 'react';
import './Property1level3foldedstatefocused.css';
import IconSvg from '../assets/icons/Property1level3foldedstatefocused--3811-47378.svg?react';

export interface Property1level3foldedstatefocusedProps {
  className?: string;
}

/**
 * Property1level3foldedstatefocused
 *
 * Original name: Property 1=Level 3 folded, State=Focused
 * SVG file: Property1level3foldedstatefocused--3811-47378.svg
 */
export const Property1level3foldedstatefocused: React.FC<
  Property1level3foldedstatefocusedProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level3foldedstatefocused ${className || ''}`}
    />
  );
};
