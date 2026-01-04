import React from 'react';
import './Property1level4expandedstatefocused.css';
import IconSvg from '../assets/icons/Property1level4expandedstatefocused--3811-47330.svg?react';

export interface Property1level4expandedstatefocusedProps {
  className?: string;
}

/**
 * Property1level4expandedstatefocused
 *
 * Original name: Property 1=Level 4 expanded, State=Focused
 * SVG file: Property1level4expandedstatefocused--3811-47330.svg
 */
export const Property1level4expandedstatefocused: React.FC<
  Property1level4expandedstatefocusedProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level4expandedstatefocused ${className || ''}`}
    />
  );
};
