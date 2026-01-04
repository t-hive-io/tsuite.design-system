import React from 'react';
import './Property1level3statefocused.css';
import IconSvg from '../assets/icons/Property1level3statefocused--3811-47390.svg?react';

export interface Property1level3statefocusedProps {
  className?: string;
}

/**
 * Property1level3statefocused
 *
 * Original name: Property 1=Level 3, State=Focused
 * SVG file: Property1level3statefocused--3811-47390.svg
 */
export const Property1level3statefocused: React.FC<
  Property1level3statefocusedProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1level3statefocused ${className || ''}`} />
  );
};
