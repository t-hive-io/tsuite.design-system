import React from 'react';
import './Property1level1statehovered.css';
import IconSvg from '../assets/icons/Property1level1statehovered--3811-47282.svg?react';

export interface Property1level1statehoveredProps {
  className?: string;
}

/**
 * Property1level1statehovered
 *
 * Original name: Property 1=Level 1, State=Hovered
 * SVG file: Property1level1statehovered--3811-47282.svg
 */
export const Property1level1statehovered: React.FC<
  Property1level1statehoveredProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1level1statehovered ${className || ''}`} />
  );
};
