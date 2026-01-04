import React from 'react';
import './Property1level3expandedstatefocused.css';
import IconSvg from '../assets/icons/Property1level3expandedstatefocused--3811-47366.svg?react';

export interface Property1level3expandedstatefocusedProps {
  className?: string;
}

/**
 * Property1level3expandedstatefocused
 *
 * Original name: Property 1=Level 3 expanded, State=Focused
 * SVG file: Property1level3expandedstatefocused--3811-47366.svg
 */
export const Property1level3expandedstatefocused: React.FC<
  Property1level3expandedstatefocusedProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level3expandedstatefocused ${className || ''}`}
    />
  );
};
