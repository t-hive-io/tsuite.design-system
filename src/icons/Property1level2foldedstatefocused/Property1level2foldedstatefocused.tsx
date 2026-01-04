import React from 'react';
import './Property1level2foldedstatefocused.css';
import IconSvg from '../assets/icons/Property1level2foldedstatefocused--3811-47414.svg?react';

export interface Property1level2foldedstatefocusedProps {
  className?: string;
}

/**
 * Property1level2foldedstatefocused
 *
 * Original name: Property 1=Level 2 folded, State=Focused
 * SVG file: Property1level2foldedstatefocused--3811-47414.svg
 */
export const Property1level2foldedstatefocused: React.FC<
  Property1level2foldedstatefocusedProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level2foldedstatefocused ${className || ''}`}
    />
  );
};
