import React from 'react';
import './Property1level4statehovered.css';
import IconSvg from '../assets/icons/Property1level4statehovered--3811-47174.svg?react';

export interface Property1level4statehoveredProps {
  className?: string;
}

/**
 * Property1level4statehovered
 *
 * Original name: Property 1=Level 4, State=Hovered
 * SVG file: Property1level4statehovered--3811-47174.svg
 */
export const Property1level4statehovered: React.FC<
  Property1level4statehoveredProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1level4statehovered ${className || ''}`} />
  );
};
