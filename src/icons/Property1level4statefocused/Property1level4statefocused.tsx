import React from 'react';
import './Property1level4statefocused.css';
import IconSvg from '../assets/icons/Property1level4statefocused--3811-47354.svg?react';

export interface Property1level4statefocusedProps {
  className?: string;
}

/**
 * Property1level4statefocused
 *
 * Original name: Property 1=Level 4, State=Focused
 * SVG file: Property1level4statefocused--3811-47354.svg
 */
export const Property1level4statefocused: React.FC<
  Property1level4statefocusedProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1level4statefocused ${className || ''}`} />
  );
};
