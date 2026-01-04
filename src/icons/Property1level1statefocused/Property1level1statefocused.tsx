import React from 'react';
import './Property1level1statefocused.css';
import IconSvg from '../assets/icons/Property1level1statefocused--3811-47462.svg?react';

export interface Property1level1statefocusedProps {
  className?: string;
}

/**
 * Property1level1statefocused
 *
 * Original name: Property 1=Level 1, State=Focused
 * SVG file: Property1level1statefocused--3811-47462.svg
 */
export const Property1level1statefocused: React.FC<
  Property1level1statefocusedProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1level1statefocused ${className || ''}`} />
  );
};
