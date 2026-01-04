import React from 'react';
import './Property1level3expandedstatehovered.css';
import IconSvg from '../assets/icons/Property1level3expandedstatehovered--3811-47186.svg?react';

export interface Property1level3expandedstatehoveredProps {
  className?: string;
}

/**
 * Property1level3expandedstatehovered
 *
 * Original name: Property 1=Level 3 expanded, State=Hovered
 * SVG file: Property1level3expandedstatehovered--3811-47186.svg
 */
export const Property1level3expandedstatehovered: React.FC<
  Property1level3expandedstatehoveredProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level3expandedstatehovered ${className || ''}`}
    />
  );
};
