import React from 'react';
import './Property1level1foldedstatehovered.css';
import IconSvg from '../assets/icons/Property1level1foldedstatehovered--3811-47270.svg?react';

export interface Property1level1foldedstatehoveredProps {
  className?: string;
}

/**
 * Property1level1foldedstatehovered
 *
 * Original name: Property 1=Level 1 folded, State=Hovered
 * SVG file: Property1level1foldedstatehovered--3811-47270.svg
 */
export const Property1level1foldedstatehovered: React.FC<
  Property1level1foldedstatehoveredProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level1foldedstatehovered ${className || ''}`}
    />
  );
};
