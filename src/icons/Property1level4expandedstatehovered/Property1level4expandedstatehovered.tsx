import React from 'react';
import './Property1level4expandedstatehovered.css';
import IconSvg from '../assets/icons/Property1level4expandedstatehovered--3811-47150.svg?react';

export interface Property1level4expandedstatehoveredProps {
  className?: string;
}

/**
 * Property1level4expandedstatehovered
 *
 * Original name: Property 1=Level 4 expanded, State=Hovered
 * SVG file: Property1level4expandedstatehovered--3811-47150.svg
 */
export const Property1level4expandedstatehovered: React.FC<
  Property1level4expandedstatehoveredProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level4expandedstatehovered ${className || ''}`}
    />
  );
};
