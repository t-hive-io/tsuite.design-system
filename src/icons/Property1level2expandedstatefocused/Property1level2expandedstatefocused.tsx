import React from 'react';
import './Property1level2expandedstatefocused.css';
import IconSvg from '../assets/icons/Property1level2expandedstatefocused--3811-47402.svg?react';

export interface Property1level2expandedstatefocusedProps {
  className?: string;
}

/**
 * Property1level2expandedstatefocused
 *
 * Original name: Property 1=Level 2 expanded, State=Focused
 * SVG file: Property1level2expandedstatefocused--3811-47402.svg
 */
export const Property1level2expandedstatefocused: React.FC<
  Property1level2expandedstatefocusedProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level2expandedstatefocused ${className || ''}`}
    />
  );
};
