import React from 'react';
import './Property1level3foldedstatehovered.css';
import IconSvg from '../assets/icons/Property1level3foldedstatehovered--3811-47198.svg?react';

export interface Property1level3foldedstatehoveredProps {
  className?: string;
}

/**
 * Property1level3foldedstatehovered
 *
 * Original name: Property 1=Level 3 folded, State=Hovered
 * SVG file: Property1level3foldedstatehovered--3811-47198.svg
 */
export const Property1level3foldedstatehovered: React.FC<
  Property1level3foldedstatehoveredProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level3foldedstatehovered ${className || ''}`}
    />
  );
};
