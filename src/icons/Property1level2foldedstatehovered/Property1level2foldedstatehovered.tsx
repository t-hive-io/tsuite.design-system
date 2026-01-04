import React from 'react';
import './Property1level2foldedstatehovered.css';
import IconSvg from '../assets/icons/Property1level2foldedstatehovered--3811-47234.svg?react';

export interface Property1level2foldedstatehoveredProps {
  className?: string;
}

/**
 * Property1level2foldedstatehovered
 *
 * Original name: Property 1=Level 2 folded, State=Hovered
 * SVG file: Property1level2foldedstatehovered--3811-47234.svg
 */
export const Property1level2foldedstatehovered: React.FC<
  Property1level2foldedstatehoveredProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level2foldedstatehovered ${className || ''}`}
    />
  );
};
