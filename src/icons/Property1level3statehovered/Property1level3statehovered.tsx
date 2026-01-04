import React from 'react';
import './Property1level3statehovered.css';
import IconSvg from '../assets/icons/Property1level3statehovered--3811-47210.svg?react';

export interface Property1level3statehoveredProps {
  className?: string;
}

/**
 * Property1level3statehovered
 *
 * Original name: Property 1=Level 3, State=Hovered
 * SVG file: Property1level3statehovered--3811-47210.svg
 */
export const Property1level3statehovered: React.FC<
  Property1level3statehoveredProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1level3statehovered ${className || ''}`} />
  );
};
