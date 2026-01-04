import React from 'react';
import './Property1level1expndedstatefocused.css';
import IconSvg from '../assets/icons/Property1level1expndedstatefocused--3811-47438.svg?react';

export interface Property1level1expndedstatefocusedProps {
  className?: string;
}

/**
 * Property1level1expndedstatefocused
 *
 * Original name: Property 1=Level 1 expnded, State=Focused
 * SVG file: Property1level1expndedstatefocused--3811-47438.svg
 */
export const Property1level1expndedstatefocused: React.FC<
  Property1level1expndedstatefocusedProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level1expndedstatefocused ${className || ''}`}
    />
  );
};
