import React from 'react';
import './Property1level4foldedstatehovered.css';
import IconSvg from '../assets/icons/Property1level4foldedstatehovered--3811-47162.svg?react';

export interface Property1level4foldedstatehoveredProps {
  className?: string;
}

/**
 * Property1level4foldedstatehovered
 *
 * Original name: Property 1=Level 4 folded, State=Hovered
 * SVG file: Property1level4foldedstatehovered--3811-47162.svg
 */
export const Property1level4foldedstatehovered: React.FC<
  Property1level4foldedstatehoveredProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level4foldedstatehovered ${className || ''}`}
    />
  );
};
