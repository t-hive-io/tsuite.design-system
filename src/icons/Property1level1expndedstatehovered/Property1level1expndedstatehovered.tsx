import React from 'react';
import './Property1level1expndedstatehovered.css';
import IconSvg from '../assets/icons/Property1level1expndedstatehovered--3811-47258.svg?react';

export interface Property1level1expndedstatehoveredProps {
  className?: string;
}

/**
 * Property1level1expndedstatehovered
 *
 * Original name: Property 1=Level 1 expnded, State=Hovered
 * SVG file: Property1level1expndedstatehovered--3811-47258.svg
 */
export const Property1level1expndedstatehovered: React.FC<
  Property1level1expndedstatehoveredProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1level1expndedstatehovered ${className || ''}`}
    />
  );
};
