import React from 'react';
import './Property1level1foldedstatefocused.css';
import IconSvg from '../assets/icons/Property1level1foldedstatefocused--3811-47450.svg?react';

export interface Property1level1foldedstatefocusedProps {
  className?: string;
}

/**
 * Property1level1foldedstatefocused
 *
 * Original name: Property 1=Level 1 folded, State=Focused
 * SVG file: Property1level1foldedstatefocused--3811-47450.svg
 */
export const Property1level1foldedstatefocused: React.FC<
  Property1level1foldedstatefocusedProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level1foldedstatefocused ${className || ''}`}
    />
  );
};
