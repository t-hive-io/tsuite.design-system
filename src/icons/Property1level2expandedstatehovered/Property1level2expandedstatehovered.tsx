import React from 'react';
import './Property1level2expandedstatehovered.css';
import IconSvg from '../assets/icons/Property1level2expandedstatehovered--3811-47222.svg?react';

export interface Property1level2expandedstatehoveredProps {
  className?: string;
}

/**
 * Property1level2expandedstatehovered
 *
 * Original name: Property 1=Level 2 expanded, State=Hovered
 * SVG file: Property1level2expandedstatehovered--3811-47222.svg
 */
export const Property1level2expandedstatehovered: React.FC<
  Property1level2expandedstatehoveredProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level2expandedstatehovered ${className || ''}`}
    />
  );
};
